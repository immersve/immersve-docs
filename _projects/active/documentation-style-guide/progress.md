# Progress: Documentation Style Guide

**Current Status:** Stage 1 shipped (draft PR #906); branch rebased
on `main`; page relocated under `resources/style-guide` in the
existing Resources sidebar group. §3 scope expanded to include a
Callouts subsection. Paused awaiting user review of Stage 1 before
starting Stage 2.

## Last Session (2026-06-15)

- Completed: opened draft PR #906 with Stage 1's three sections;
  rebased onto current `main` (one conflict in `_projects/README.md`
  resolved by taking main's version); expanded the §3 task in
  `plan.md` to add a Callouts subsection covering only the variants
  that ship today (`{% note %}` green, `{% warning %}` red).
  Relocated the page from `contributors/style-guide` to
  `resources/style-guide` per user direction — removed the
  short-lived "Contributors" sidebar group; the page surfaces via
  the existing "Resources" autogeneration. Updated `CLAUDE.md`,
  `brief.md`, and `decisions.md` to reflect the new slug.
- Outcome: PR is mergeable; CI green on lint, test, build,
  test-deploy on the pre-relocation commit. Force-push pending after
  local build verification.

## Next Session

- Pick up from:
  `/Users/nathan/code/immersve/worktrees/immersve-docs/documentation-style-guide`
  on branch `docs-style-guide-skeleton`.
- First task: **wait for user feedback on Stage 1 before writing
  Stage 2.** Per the per-stage-approval rule, do not draft §3
  speculatively. When approved, begin Stage 2 with §3 (including the
  Callouts subsection), then §4 Links, then §10 URLs and Redirects —
  all appended to the same page in the same PR.
