# Plan: Code Captions

Stream A and Stream B run in parallel. Stream A is the serial
spine for progress narration; Stream B advances as a parallel
bucket — its checkboxes flip in this plan but its work does not
overwrite `progress.md`'s Next Session pointer.

## Stage A1 — Locate Existing Caption Implementation

Investigate where table and image captions are styled in the
Astro/Markdoc integration — CSS, component template, Markdoc
renderer config — and document where the code-block `title`
annotation currently lands by comparison.

- [ ] Identify the table-caption rendering path
      (`{% table title="..." %}`) and the image-caption rendering
      path (Markdown image title syntax).
- [ ] Identify the code-block `title` annotation rendering path.
- [ ] Decide whether unification is CSS-only or needs a
      renderer-level change. Capture as a decision.

End state: a written summary in `decisions.md` of the three
rendering paths and the chosen unification approach.

## Stage A2 — Unify Code-Block Caption Style

Apply the chosen change so code-block captions render with the
same typography, position, color, and spacing as table and image
captions.

- [ ] Implement the renderer / CSS change.
- [ ] Visual-diff sample pages
      (`guides/api-fundamentals/xrpl-login`,
      `guides/api-fundamentals/authentication`) before merging.
- [ ] PR and merge.

End state: code-block captions on sample pages are visually
indistinguishable from table and image captions.

## Stage B1 — Enumerate Blocks and Propose Captions

Mechanical-then-judgmental pass: find every fenced code block
under `imsv-docs-astro/src/content/docs/` and propose a caption
for each, for human review *before* any captions are applied to
source files.

- [ ] Script or tool pass: list every fenced code block with file
      path, line number, language, current `{% title="..." %}` (if
      any), and surrounding heading context.
- [ ] For each block, propose a caption — name the artifact (file
      name, request shape, payload, sample message), drawing on the
      surrounding context. Pick a form per block: title (Title
      Case, via `{% title="..." %}`) or an introducing paragraph
      (sentence case). Title-form is the expected common choice;
      paragraph-form fits where the block needs framing prose to
      land.
- [ ] Deliver as a reviewable document (e.g. CSV / markdown table
      checked in to this project folder), with the chosen form
      and proposed caption text per block.

End state: a single reviewable artifact listing every code block
with its proposed caption, ready for human walk-through.

## Stage B2 — Apply Approved Captions

After review, apply approved captions to source files. Default
delivery is a single captions-only PR — captions are mechanical
once approved and reviewers can scan the lot in one pass. Split
only if the review burden actually demands it.

- [ ] Apply approved captions across the docs tree.

End state: every fenced code block under
`imsv-docs-astro/src/content/docs/` carries an approved caption
in its chosen form.

## Stage C — Document Convention in Style Guide

Coordinated with the *Documentation Style Guide* sibling project.
Should land before Stream B's apply-captions PRs so reviewers can
point at a committed rule.

- [ ] Captions section drafted in style guide PR.
- [ ] Merged.

End state: style guide contains a committed rule that every
fenced code block carries a caption naming the artifact, plus
guidance on when to choose title vs paragraph form.

## Open Questions

- Title vs paragraph form: per-block choice. Expected common
  choice is title-form; paragraph-form fits blocks that need
  framing prose. Articulate the rule of thumb in the style guide
  during Stage C; resolve per-block during Stage B1 review.
- Required vs recommended: Notion proposes required for blocks
  longer than ~3 lines, optional for short illustrative fragments.
  Confirm during style-guide drafting.
- Proper-noun allowlist sharing with *Ubiquitous Title Case* —
  confirm one shared list, not two.
- Existing meaningful filename captions
  (e.g. `sign-xrpl-challenge.js`) stay as-is — confirm rule.
- **Domain-resource casing (out of scope — handed off to the
  *Documentation Style Guide* project).** Captions surfaced an
  unresolved inconsistency: "Funding Source" appears Title Case 53
  times and lowercase 31 times in the existing docs, "Funding
  Channel" 21 vs 6, "Card Program" 6 vs 5. The captions PR has
  applied an interim rule documented in `decisions.md` — Title
  Case when naming the resource type as a concept, lowercase when
  describing an instance — but the wider docs corpus has not been
  conformed to either rule. The style guide project should pick
  one and retro-edit existing prose to match.

## Known Risks

- Stream A renderer change could regress table or image caption
  rendering if the unification is more invasive than CSS. Mitigate
  with visual diffs on representative pages.
- Stream B caption-proposal pass risks generating low-quality names
  for blocks that need surrounding-prose context — the review step
  exists specifically to catch this.
