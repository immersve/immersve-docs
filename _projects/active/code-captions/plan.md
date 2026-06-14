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

- [x] Identify the table-caption rendering path
      (`{% table title="..." %}`) and the image-caption rendering
      path (Markdown image title syntax).
- [x] Identify the code-block `title` annotation rendering path.
- [x] Decide whether unification is CSS-only or needs a
      renderer-level change. Capture as a decision.

End state: a written summary in `decisions.md` of the three
rendering paths and the chosen unification approach.

## Stage A2 — Unify Code-Block Caption Style

Apply the chosen change so code-block captions render with the
same typography, position, color, and spacing as table and image
captions.

- [x] Implement the renderer / CSS change.
- [ ] Visual-diff sample pages
      (`guides/api-fundamentals/xrpl-login`,
      `guides/api-fundamentals/authentication`) before merging.
- [ ] PR and merge.

End state: code-block captions on sample pages are visually
indistinguishable from table and image captions.

Status: renderer change shipped in PR #907 (`CodeFence.astro`
emits a `<figure class="not-prose">` wrapping the
`<ExpressiveCode>` with a sibling `<figcaption>`). Pre-merge
visual diff on the named sample pages was not done in isolation;
the same pages were observed in passing during Stage B2 review.
The deferred check is whether code, image, and table captions
visibly align horizontally on the same page — flagged in
follow-ups.

## Stage B1 — Enumerate Blocks and Propose Captions

Mechanical-then-judgmental pass: find every fenced code block
under `imsv-docs-astro/src/content/docs/` and propose a caption
for each, for human review *before* any captions are applied to
source files.

- [x] Script or tool pass: list every fenced code block with file
      path, line number, language, current `{% title="..." %}` (if
      any), and surrounding heading context.
- [x] For each block, propose a caption — name the artifact (file
      name, request shape, payload, sample message), drawing on the
      surrounding context. Pick a form per block: title (Title
      Case, via `{% title="..." %}`) or an introducing paragraph
      (sentence case). Title-form is the expected common choice;
      paragraph-form fits where the block needs framing prose to
      land.
- [x] Deliver as a reviewable document (e.g. CSV / markdown table
      checked in to this project folder), with the chosen form
      and proposed caption text per block.

End state: a single reviewable artifact listing every code block
with its proposed caption, ready for human walk-through.

Status: delivered as `codeblocks.md`, reviewed, then dropped from
the PR as an intermediate artifact once Stage B2 was complete. In
practice every block landed in title form (sentence-case
descriptive); paragraph form was not used.

## Stage B2 — Apply Approved Captions

After review, apply approved captions to source files. Default
delivery is a single captions-only PR — captions are mechanical
once approved and reviewers can scan the lot in one pass. Split
only if the review burden actually demands it.

- [x] Apply approved captions across the docs tree.

End state: every fenced code block under
`imsv-docs-astro/src/content/docs/` carries an approved caption
in its chosen form.

Status: shipped in PR #907. 96 blocks captioned; two intentional
skips (pseudocode block in `accessing-reconciliation-reports.mdoc`
and a malformed inline triple-backtick in
`immersve-conducted-kyc.mdoc`). One reviewer-suggestion batch
silently lost opening fences via the GitHub UI; recovered and
restored in a follow-up commit.

## Stage C — Document Convention in Style Guide

Coordinated with the *Documentation Style Guide* sibling project.
Should land before Stream B's apply-captions PRs so reviewers can
point at a committed rule.

- [ ] Captions section drafted in style guide PR.
- [ ] Merged.

End state: style guide contains a committed rule that every
fenced code block carries a caption naming the artifact, plus
guidance on when to choose title vs paragraph form.

Deviation: Stage B2 shipped before Stage C. The plan called for
the style-guide rule to land first so reviewers could point at a
committed convention. Instead, the conventions emerged during
Stage B1 review and were applied directly in Stage B2; the
style-guide project will codify them after the fact. The settled
conventions to hand off:

- Captions are full sentences, sentence case, terminal period.
- Lead with "Example …" for illustrative blocks (the great
  majority).
- Drop "Example" for verbatim setup blocks (env-var setups near
  the top of an integration guide).
- Use a gerund describing what the call does, not the HTTP
  method+path.
- Reference endpoints by their endpointref title ("Get Spending
  Prerequisites"), not method+path ("POST
  /spending-prerequisites").
- For JSON request/response/payload blocks, name the artifact.
- Rewrite filename titles as descriptive sentences too — the
  filename still appears inside the code block.
- Preserve canonical casing for proper nouns and product names
  (XRPL, SIWE, Algorand, EVM, KYC, 3DS, SCA). Literal API values
  (`payment-3ds-sca`, `follow_kyc_url`) stay lowercase.
- Domain-resource casing follows the interim rule in
  `decisions.md` until the style guide settles it.

## Open Questions

- Title vs paragraph form — *resolved in practice.* Every block
  landed in title form. Paragraph form was not used. The style
  guide should articulate "default to title form; reach for
  paragraph form only when the block needs framing prose to make
  sense" but the captions PR did not exercise the paragraph
  branch.
- Required vs recommended: Notion proposes required for blocks
  longer than ~3 lines, optional for short illustrative fragments.
  Confirm during style-guide drafting.
- Proper-noun allowlist sharing with *Ubiquitous Title Case* —
  confirm one shared list, not two.
- Existing meaningful filename captions — *resolved opposite to
  the plan.* The plan said "stay as-is"; Stage B1 review settled
  on rewriting filename titles to descriptive sentences (the
  filename still appears inside the code block). All five
  filename titles (`sign-xrpl-challenge.js`,
  `sign-siwe-challenge.js`, `sign-algorand-challenge.js`,
  `fetch-card-sensitive-details.js`, `ethers-execute-*.js`) were
  rewritten in Stage B2.
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
