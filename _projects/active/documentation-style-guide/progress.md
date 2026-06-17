# Progress: Documentation Style Guide

**Current Status:** Stages 1–3 shipped onto PR #906, plus a
pre-merge structural reshape: page-level rules now live under
*Document Structure* and per-element rules under *Elements*.
Stage 4 (§8 Prose Conventions) is the only remaining section
before merge. Paused awaiting Stage 4 approval.

## Last Session (2026-06-17)

- Completed: After landing Stages 1–3, reshaped the guide
  top-level layout. The former *Headings and Document Structure*
  section is split into *Document Structure* (Section
  Introductions, Patterns Not Use Cases) and *Elements*
  (Headings, Lists, Tables, Figures, Captions, Links, Callouts).
  The former *Figures and Captions* and *Links* top-levels moved
  under *Elements*; *Tables* and *Lists* each got their own
  subsection with explicit cross-references. Recorded the
  reshape in `decisions.md` and added a *Document Structure vs
  Elements* convention note to `plan.md`. The plan's `§N`
  shorthand stays plan-internal (it tracks stage content, not
  published location).
- Outcome: published page is internally consistent against the
  new layout; every section opens with prose; cross-references
  resolve.

## Next Session

- Pick up from:
  `/Users/nathan/code/immersve/worktrees/immersve-docs/documentation-style-guide`
  on branch `docs-style-guide-skeleton`.
- First task: **wait for user approval before starting Stage 4.**
  When approved, draft §8 Prose Conventions (no smart quotes, no
  single quotes in prose, sentence case for body prose, hard-wrap
  at 80, Oxford comma, no "this endpoint…", do not refer to
  endpoints as "APIs"). §8 likely fits as a top-level section
  between *Elements* and *Code Samples*, but the final placement
  is part of Stage 4. After §8 lands, mark the PR ready for
  review.
