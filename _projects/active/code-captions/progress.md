# Progress: Code Captions

**Current Status:** Stage B2 applied; PR #907 open and review
batch incorporated. Awaiting style-guide handoff for the
domain-resource casing question.

## Last Session (2026-06-14)

- Completed: Recovered all 19 inline suggestions from PR #907
  review (the GitHub "apply suggestions" batch had deleted
  opening fences instead of editing them, leaving JSON/curl
  bodies unwrapped). Re-applied each suggestion with the opening
  fence restored. Build passes. One typo in a suggested caption
  fixed ("Immerve" → "Immersve").
- Documented the domain-resource casing finding from the review
  in `decisions.md` (Stage B2 — Domain-Resource Casing in
  Captions) and flagged it as out of scope under Open Questions
  in `plan.md`. The interim rule applied in captions is rule 2
  ("Title Case when naming the resource type, lowercase for
  instances/possessives"); the *Documentation Style Guide*
  project will decide between rule 1 and rule 2 and conform the
  corpus.
- Outcome: PR #907 reflects the reviewed-and-corrected captions.
  Two commits on `code-captions-style-unification` since
  kickoff: `265cd3aa` (initial caption apply) and `77cbc7db`
  (restore fences + endpoint-title naming + suggestion refinements).

## Next Session

- Pick up from: branch `code-captions-style-unification`. PR
  #907 is open; check whether further review comments have been
  posted before further edits.
- Open items: confirm rule for proper-noun/domain-resource
  casing handed off to *Documentation Style Guide* project. No
  further Stage B2 work expected on this PR.
