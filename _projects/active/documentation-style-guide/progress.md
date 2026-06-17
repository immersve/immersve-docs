# Progress: Documentation Style Guide

**Current Status:** Stage 2 shipped onto draft PR #906. The guide
now covers §1 Casing, §2 English Variant, §3 Headings and Document
Structure (with Callouts), §4 Links, §5 Figures and Captions, and
§10 URLs and Redirects. Paused awaiting Stage 3 approval.

## Last Session (2026-06-17)

- Completed: Stage 2 landed as three commits on
  `docs-style-guide-skeleton`, one per section. §3 codifies section
  introductions, no numbered headings, patterns-over-use-cases,
  tables for long or multi-column lists, the three-shape bullet
  rule, and the `{% note %}` / `{% warning %}` callout policy. §4
  standardises on the `{% link %}` Markdoc tag, bans
  `target=_blank`, and rules out generic "See Also" sub-sections in
  favour of inline cross-references. §10 codifies kebab-case page
  slugs and mandates a redirect from the old slug to the new
  whenever a page is renamed or moved.
- Outcome: structural rules now ship inside the published guide.
  All Stage 2 bullets in `plan.md` ticked.

## Next Session

- Pick up from:
  `/Users/nathan/code/immersve/worktrees/immersve-docs/documentation-style-guide`
  on branch `docs-style-guide-skeleton`.
- First task: **wait for user approval before starting Stage 3.**
  When approved, draft §6 Code Samples, §7 Terminology, and §9
  OpenAPI Authoring — appended to the same page in the same PR.
