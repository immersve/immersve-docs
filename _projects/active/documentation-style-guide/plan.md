# Plan: Documentation Style Guide

## Delivery

The whole project ships as a **single PR**. Stages structure the work
but each stage amends the same PR rather than landing independently.
The PR opens as a draft once Stage 1 has a reviewable surface; later
stages add commits to the same branch. Final merge happens after
Stage 4, when the guide is feature-complete at v1.

## Conventions

Cross-cutting rules every section must follow. Full rationale lives
in `decisions.md`; restated here as a writing reminder for each
stage.

- **No numbered headings** in the published guide (`## Casing`, not
  `## 1. Casing`). Cross-references between sections use the
  section name, not `§N`. The plan's internal `§N` shorthand stays
  — it does not leak into the guide.
- **Bullet shape consistency** — every list picks one of three
  shapes: pure label (Title Case, no period); pure paragraph
  (sentence case, period); or labeled paragraph (**Bold Label**
  followed by em-dash or colon, then sentence-case body with
  period). Mixing within a list is the failure mode.
- **Document Structure vs Elements** — the published guide groups
  page-level rules under *Document Structure* and per-element rules
  (headings, lists, tables, figures, captions, links, callouts)
  under *Elements*. New rules pick the right home. The plan's
  `§N` shorthand tracks stage content, not published location.

## Stage 0 — Prerequisites (done)

- [x] Scope artifact published in Notion (AI Artifacts DB)
- [x] Sibling artifacts (*Ubiquitous Title Case*, *Code Captions*) scoped
      and cross-referenced
- [x] Stale `STYLE_GUIDE_PLAN.md` branch retired in favour of this
      structure; worktree relocated to the conventional path

## Stage 1 — Skeleton and Foundational Sections (done)

Page published at `resources/style-guide`, surfaced in the existing
"Resources" sidebar group via autogeneration. Draft §1 Casing, §2
English Variant, and §5 Figures and Captions landed — the three
sections the sibling projects depend on. `CLAUDE.md` slimmed to a
one-line pointer at the published guide. Note: published headings
are not numbered; the `§N` shorthand is plan-internal only.

## Stage 2 — Structural Sections (done)

- [x] **§3 Headings and Document Structure** — introductions explain
      *what* and *why*; subheadings introduce their topic; every section
      contains at least one paragraph of prose (no heading-then-figure-only
      sections); **no numbered headings** — `## Casing`, not
      `## 1. Casing`; section cross-references in prose use the section
      name, not `§N`; guides describe patterns not single use cases
      (repeating content → page per variant); a list that grows past a
      few items or carries multiple columns of information prefers a
      table or icon list; **bullet rule** — every list picks one of three
      shapes (pure label: Title Case, no period; pure paragraph: sentence
      case, period; labeled paragraph: **Bold Label** followed by em-dash
      or colon, then sentence-case body with period), and mixing shapes
      within a list is the failure mode;
      **Callouts subsection** — three callout forms ship today:
      `{% note %}` (important facts a careful reader has already
      absorbed — immutable identifiers, reasoned defaults),
      `{% warning %}` (hazards with real cost — data loss,
      irreversible state, account lockout, security exposure), and
      `{% endpointref %}` (highlight the API endpoint being described
      in an integration guide); use sparingly; a callout reinforces a
      point already made in the surrounding prose, never summarizes
      it, and never introduces a new constraint a reader could miss
      by skipping the box
- [x] **§4 Links** — use the `{% link %}` Markdoc tag in `.mdoc`
      files (forms: docs page, API reference endpoint, external URL;
      link text defaults from the target, customisable via `title`);
      use Markdown `[link]()` syntax inside OpenAPI files; never set
      the `target` attribute
- [x] **§10 URLs and Redirects** — page slugs are kebab-case
      (`api-fundamentals/xrpl-login`); redirects from old slug to new are
      mandatory whenever a page is renamed or moved

End state: PR branch additionally contains §3, §4, §10. PR remains
draft.

## Stage 3 — Code and Reference Sections (done)

- [x] **§6 Code Samples** — minimise dependencies (prefer bash or vanilla
      JS/TS); short and single-purpose; no comments in example response
      payloads; every example must actually run; per-language sub-sections
      cover bash (curl flag style, line continuation, variable
      substitution), JSON (indent, quote style, key ordering against the
      OpenAPI schema), JavaScript and TypeScript (indent, quotes,
      `async`/`await` over `.then`, `const`/`let` over `var`)
- [x] **§7 Terminology** — short glossary of canonical terms (`endpoint`
      vs "API", `webhook`, `Immersve`, product names) and the
      authoritative list of domain resources that count as proper nouns
      under §1
- [x] **§9 OpenAPI Authoring** — endpoint summaries and descriptions;
      attribute descriptions; when to use enums versus open strings; how
      to mark deprecation; YAML wrapping and indentation; inline links
      in OpenAPI descriptions use Markdown `[link]()` syntax (the
      `{% link %}` Markdoc tag does not render here — see §4)

End state: PR branch additionally contains §6, §7, §9. PR remains
draft.

## Stage 4 — Prose Conventions (done)

§8 Prose Conventions landed between *Terminology* and *OpenAPI
Authoring*. Four subsections — *Quotes* (straight doubles only, no
single quotes in prose), *Line Length* (hard-wrap at 80), *Oxford
Comma*, *Referring to Endpoints* (name endpoints directly, avoid
"this endpoint", do not call endpoints "APIs"). Sentence-case-for-
body-prose was already stated in *Casing* and is not duplicated
here.

End state: PR branch contains all ten sections. **Not yet** ready
for review — the *Pending Feedback* items below must be addressed
first.

## Pending Feedback (2026-06-18)

Iteration backlog captured between Stage 3 and Stage 4. Address
before marking the PR ready for review; several items expand into
new stage work and may need their own commits.

- **Top-level section order** — Casing should not lead, and OpenAPI
  Authoring probably belongs last. Decide the right opening section
  (perhaps a short Overview, or *Document Structure* if it earns
  its keep) and reorder.
- **Document Structure feels thin** — only *Section Introductions*
  clearly earns its place; *Patterns, Not Use Cases* is unclear to
  the reader and may need to move or be cut. Consider folding
  *Section Introductions* under *Elements / Headings* and removing
  the *Document Structure* top-level if nothing else lands there.
- **Undocumented Markdoc tags** — `{% link %}`, `{% note %}`,
  `{% warning %}`, `{% endpointref %}`, and `{% table %}` appear in
  examples but the guide does not explain `{% table %}` itself, and
  the list/icon-list tags (whatever they are called) are not
  covered at all. Audit the available tags and document each in
  the relevant element subsection.
- **Tables intro is weak** — drop the "tables present comparable
  rows in scannable columns" opener (says nothing). The "same fact
  varies across several values" framing also excludes key/value
  tables (field → meaning, code → description), which are a
  legitimate use. Rewrite the intro to cover comparison tables
  *and* key/value tables.
- **Code Samples per-language bullets are ugly** — the *Bash*,
  *JSON*, and *JavaScript and TypeScript* subsections all use
  labeled-bullet lists that read poorly. Try a per-language table
  (column headers: Rule, Description) and see whether it scans
  better.
- **Code captions are missing** — Code Captions support landed on
  `main` after this branch diverged. Rebase the branch and then
  extend *Elements / Captions* and *Code Samples* to cover code-
  block captions (the `{% title %}` annotation already appears in
  the Bash example but is undocumented).
- **Terminology needs critical review** — the glossary entries and
  the *Domain Resources* list are first-draft and have not been
  vetted against actual house usage. Reread end-to-end and rework
  before the guide goes ready-for-review.
- **Domain-resource casing: class vs instance** — restore the
  previously agreed nuance that domain nouns are Title Case only
  when referring to the resource *as a class* ("every Card belongs
  to a Cardholder"), and lowercase when referring to a *specific
  instance* ("your card"). The current *Casing* and *Terminology /
  Domain Resources* prose reads as unconditional Title Case.

## Open Questions

- Whether to cross-link from each section to specific Markdoc tag
  reference docs, or keep the guide self-contained

## Known Risks

- The Notion brainstorm includes details that may be stale or wrong;
  expect a few corrections during Stage 1
- Sections risk growing beyond "short and skim-able" — discipline
  required to keep each section roughly one paragraph + a few bullets +
  one example
- Sidebar / nav placement may collide with an existing structure that
  isn't obvious until we look — confirm during Stage 1
