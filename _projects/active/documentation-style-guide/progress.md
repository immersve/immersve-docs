# Progress: Documentation Style Guide

**Current Status:** All ten sections of the guide are drafted on
the PR branch. Stage 4 landed §8 Prose Conventions. The branch is
**not** ready for review — the *Pending Feedback (2026-06-18)*
items in `plan.md` must be worked before marking PR #906 ready.

## Last Session (2026-06-18)

- Completed: Added §8 Prose Conventions to the guide, slotted
  between *Terminology* and *OpenAPI Authoring*. Four subsections:
  *Quotes* (straight doubles only, no single quotes in prose),
  *Line Length* (hard-wrap at 80), *Oxford Comma*, *Referring to
  Endpoints* (name endpoints directly, avoid "this endpoint", do
  not call endpoints "APIs"). User elected to write §8 against
  the current structure before working the *Pending Feedback*
  list.
- Outcome: guide is feature-complete at v1 in terms of section
  coverage; the *Pending Feedback* list is the only remaining work
  before review-ready.

## Next Session

- Pick up from:
  `/Users/nathan/code/immersve/worktrees/immersve-docs/documentation-style-guide`
  on branch `docs-style-guide-skeleton`.
- First task: work the *Pending Feedback (2026-06-18)* list in
  `plan.md`. The load-bearing items are (in rough order):
  **rebase onto `main`** to pull in Code Captions support, then
  document `{% title %}` in *Elements / Captions* and *Code
  Samples*; restore the **domain-resource casing nuance** (class
  vs instance) in *Casing* and *Terminology / Domain Resources*;
  reconsider **top-level section order** (Casing should not lead;
  OpenAPI probably belongs last); decide the fate of *Document
  Structure* as a top-level. Cleanup items follow: audit
  undocumented Markdoc tags, rewrite the Tables intro, try a
  per-language table in Code Samples, critical review of
  Terminology.
