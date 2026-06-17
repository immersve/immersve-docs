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
- **Read `plan.md`'s *Pending Feedback (2026-06-18)* section
  before doing anything else** — eight items captured at the end
  of this session that bear on Stage 4 ordering, scope, and
  prerequisites (notably: rebase the branch onto `main` to pull
  in code-captions support; resolve domain-resource casing nuance
  before §8 prose work; reconsider top-level section order).
- First task: **wait for user approval before starting Stage 4.**
  The user signalled more feedback may follow before Stage 4
  begins; do not pre-empt.
