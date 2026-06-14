# Plan: Documentation Style Guide

## Delivery

The whole project ships as a **single PR**. Stages structure the work
but each stage amends the same PR rather than landing independently.
The PR opens as a draft once Stage 1 has a reviewable surface; later
stages add commits to the same branch. Final merge happens after
Stage 4, when the guide is feature-complete at v1.

## Stage 0 — Prerequisites (done)

- [x] Scope artifact published in Notion (AI Artifacts DB)
- [x] Sibling artifacts (*Ubiquitous Title Case*, *Code Captions*) scoped
      and cross-referenced
- [x] Stale `STYLE_GUIDE_PLAN.md` branch retired in favour of this
      structure; worktree relocated to the conventional path

## Stage 1 — Skeleton and Foundational Sections (done)

Page published at `contributors/style-guide`, wired into the sidebar
under a new "Contributors" group. Draft §1 Casing, §2 English
Variant, and §5 Figures and Captions landed — the three sections the
sibling projects depend on. `CLAUDE.md` slimmed to a one-line pointer
at the published guide.

## Stage 2 — Structural Sections

- [ ] **§3 Headings and Document Structure** — introductions explain
      *what* and *why*; subheadings introduce their topic; every section
      contains at least one paragraph of prose (no heading-then-figure-only
      sections); guides describe patterns not single use cases (repeating
      content → page per variant); a list that grows past a few items or
      carries multiple columns of information prefers a table or icon
      list; **bullet rule:** within a list, each bullet is either a label
      (Title Case, no trailing period) or a paragraph (sentence case,
      trailing period) — pick one shape per list and stay consistent;
      **Callouts subsection** — only `{% note %}` (green) and
      `{% warning %}` (red) ship today; use sparingly; a callout
      reinforces a point already made in the surrounding prose, never
      introduces a new constraint; `{% note %}` for important facts a
      careful reader has already absorbed (immutable identifiers,
      reasoned defaults); `{% warning %}` for hazards with real cost
      (data loss, irreversible state, account lockout, security
      exposure); never use callouts for cross-links, motivation, or
      section summaries
- [ ] **§4 Links** — always use the `{% link %}` Markdoc tag; avoid
      `target=_blank`; avoid generic "see also" sub-sections (prefer "see
      X for more information" inline)
- [ ] **§10 URLs and Redirects** — page slugs are kebab-case
      (`api-fundamentals/xrpl-login`); redirects from old slug to new are
      mandatory whenever a page is renamed or moved

End state: PR branch additionally contains §3, §4, §10. PR remains
draft.

## Stage 3 — Code and Reference Sections

- [ ] **§6 Code Samples** — minimise dependencies (prefer bash or vanilla
      JS/TS); short and single-purpose; no comments in example response
      payloads; every example must actually run; per-language sub-sections
      cover bash (curl flag style, line continuation, variable
      substitution), JSON (indent, quote style, key ordering against the
      OpenAPI schema), JavaScript and TypeScript (indent, quotes,
      `async`/`await` over `.then`, `const`/`let` over `var`)
- [ ] **§7 Terminology** — short glossary of canonical terms (`endpoint`
      vs "API", `webhook`, `Immersve`, product names) and the
      authoritative list of domain resources that count as proper nouns
      under §1
- [ ] **§9 OpenAPI Authoring** — endpoint summaries and descriptions;
      attribute descriptions; when to use enums versus open strings; how
      to mark deprecation; YAML wrapping and indentation

End state: PR branch additionally contains §6, §7, §9. PR remains
draft.

## Stage 4 — Prose Conventions

- [ ] **§8 Prose Conventions** — no smart quotes (and no single quotes in
      prose); sentence case for body prose; hard-wrap lines at 80 chars;
      use the Oxford comma in lists of three or more; avoid "this
      endpoint…" when describing endpoints; do not refer to endpoints as
      "APIs"

End state: PR branch contains all ten sections. Marked ready for
review and merged. Sibling sweep projects unblocked.

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
