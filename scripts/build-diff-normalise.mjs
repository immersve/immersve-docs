#!/usr/bin/env node
//
// Copy a built site to a new directory, rewriting the parts that legitimately
// differ between two builds of the same source so that `diff -r` on the
// results only reports real changes. Used by scripts/build-diff.sh.
//
//   node scripts/build-diff-normalise.mjs <built-site-dir> <output-dir>
//
// What is normalised, and nothing else:
//
//  1. `_astro/` — every file there is content-hashed (`index.CTqFcM7n.css`,
//     `hoisted.BRWVhl84.js`, `logo.DLt1ZOZO_Z2fjzmT.png`). The hash segment is
//     replaced with the literal `HASH` in the filename and in every reference
//     to that filename inside text files (HTML, CSS, JS, XML, JSON, SVG). The
//     file contents are otherwise untouched, so a change inside a stylesheet or
//     script still shows up. If two files collapse to the same name they get a
//     `~1`, `~2` suffix in sorted order of their original names.
//
//  2. Astro scoped-style hashes (`class="astro-ymiiumc4"`, `.astro-ymiiumc4`).
//     For a component outside the Astro project root — which is where the
//     whole vendored `starlight/` workspace lives — astro derives the hash from
//     the component's absolute path (see normalizeFilename in
//     astro/dist/core/compile/compile.js), so two checkouts of identical source
//     get different hashes. Each distinct hash is renamed to `astro-scopeN`,
//     numbered by order of first appearance over the sorted file list, in HTML,
//     CSS and JS alike. A structural change therefore still shows up (as a
//     changed or renumbered scope); only the checkout location is hidden.
//
//  3. `pagefind/` — the search index. Fragment files are named by a hash that
//     is not stable across builds of identical input, so each
//     `fragment/*.pf_fragment` is gunzipped and written as pretty-printed JSON
//     at `fragment/<page url>.json` instead; the page text they carry is still
//     compared. The binary `index/*.pf_index` and `*.pf_meta` files are derived
//     from those fragment hashes and cannot be compared meaningfully, so they
//     are replaced with a single `index/COUNT` file recording how many there
//     were. The language hash in `pagefind-entry.json` is replaced with `HASH`.
//
// Everything else is copied byte for byte.

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const [, , srcDir, outDir] = process.argv;
if (!srcDir || !outDir) {
  console.error('usage: build-diff-normalise.mjs <built-site-dir> <output-dir>');
  process.exit(2);
}

const TEXT_EXTENSIONS = new Set([
  '.html', '.css', '.js', '.mjs', '.xml', '.json', '.svg', '.txt', '.webmanifest', '.map',
]);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function writeFile(rel, data) {
  const dest = path.join(outDir, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, data);
}

// --- 1. hashed asset filenames ----------------------------------------------

// `name.HASHSEG.ext` -> `name.HASH.ext`. The hash segment is whatever sits
// between the last two dots; Astro asset names never contain other dots.
function normaliseAssetName(basename) {
  const m = /^(.+)\.([A-Za-z0-9_-]+)\.([A-Za-z0-9]+)$/.exec(basename);
  return m ? `${m[1]}.HASH.${m[3]}` : basename;
}

const files = walk(srcDir).map((f) => path.relative(srcDir, f)).sort();
const astroFiles = files.filter((f) => f.split(path.sep)[0] === '_astro');

const renames = new Map(); // original basename -> normalised basename
const taken = new Map(); // normalised basename -> count
for (const rel of astroFiles) {
  const original = path.basename(rel);
  let normalised = normaliseAssetName(original);
  const n = taken.get(normalised) ?? 0;
  taken.set(normalised, n + 1);
  if (n > 0) {
    const ext = path.extname(normalised);
    normalised = `${normalised.slice(0, -ext.length)}~${n}${ext}`;
  }
  renames.set(original, normalised);
}

// --- 2. scoped-style hashes ---------------------------------------------------

const SCOPE_HASH = /\bastro-[a-z0-9]{8}\b/g;
const scopes = new Map(); // original hash class -> astro-scopeN
for (const rel of files) {
  if (!TEXT_EXTENSIONS.has(path.extname(rel))) continue;
  const text = fs.readFileSync(path.join(srcDir, rel), 'utf8');
  for (const match of text.match(SCOPE_HASH) ?? []) {
    if (!scopes.has(match)) scopes.set(match, `astro-scope${scopes.size + 1}`);
  }
}

function rewriteReferences(text) {
  for (const [from, to] of renames) text = text.split(from).join(to);
  return text.replace(SCOPE_HASH, (m) => scopes.get(m) ?? m);
}

// --- 3. pagefind -------------------------------------------------------------

const PAGEFIND_PREFIX = 'pagefind_dcd';

function decodePagefind(buf) {
  const inflated = zlib.gunzipSync(buf).toString('utf8');
  if (!inflated.startsWith(PAGEFIND_PREFIX)) {
    throw new Error('unexpected pagefind payload prefix');
  }
  return JSON.parse(inflated.slice(PAGEFIND_PREFIX.length));
}

function stableStringify(value) {
  return JSON.stringify(value, (_key, v) => {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      return Object.fromEntries(Object.keys(v).sort().map((k) => [k, v[k]]));
    }
    return v;
  }, 2) + '\n';
}

let pagefindIndexFiles = 0;

// --- copy --------------------------------------------------------------------

for (const rel of files) {
  const parts = rel.split(path.sep);
  const src = path.join(srcDir, rel);
  const data = fs.readFileSync(src);
  const ext = path.extname(rel);

  if (parts[0] === 'pagefind') {
    if (parts[1] === 'fragment' && rel.endsWith('.pf_fragment')) {
      const fragment = decodePagefind(data);
      const name = fragment.url.replace(/^\/+|\/+$/g, '').replace(/\//g, '__') || 'index';
      writeFile(path.join('pagefind', 'fragment', `${name}.json`), stableStringify(fragment));
      continue;
    }
    if (parts[1] === 'index' || rel.endsWith('.pf_meta')) {
      pagefindIndexFiles += 1;
      continue;
    }
    if (parts[1] === 'pagefind-entry.json') {
      writeFile(rel, data.toString('utf8').replace(/"hash":"[a-z]+_[0-9a-f]+"/g, '"hash":"HASH"'));
      continue;
    }
    writeFile(rel, data);
    continue;
  }

  let dest = rel;
  if (parts[0] === '_astro') {
    dest = path.join(path.dirname(rel), renames.get(path.basename(rel)));
  }
  if (TEXT_EXTENSIONS.has(ext)) {
    writeFile(dest, rewriteReferences(data.toString('utf8')));
  } else {
    writeFile(dest, data);
  }
}

if (fs.existsSync(path.join(srcDir, 'pagefind'))) {
  writeFile(path.join('pagefind', 'index', 'COUNT'), `${pagefindIndexFiles}\n`);
}
