# Progress: Partner Conducted KYC Guide Tidy-Up

**Current Status:** Initiated. Stage 0 already landed on `0a569c866` before
the project was formalised. Ready to begin Stage 1.

## Last Session (2026-05-29)

- Completed: reviewed `0a569c866` against the target structure of
  `partner-conducted-kyc.mdoc`, agreed scope and stage breakdown with the
  user, set up the project worktree at
  `/workspace/worktrees/immersve-docs/partner-kyc-tidy-up`, and wrote
  `brief.md`, `plan.md`, `progress.md`, and `decisions.md`.
- Outcome: `_projects/active/partner-kyc-tidy-up/` is committed on the
  `partner-kyc-tidy-up` branch; the worktree is clean and ready for Stage 1.

## Next Session

- Pick up from: `/workspace/worktrees/immersve-docs/partner-kyc-tidy-up` on
  branch `partner-kyc-tidy-up`, working tree clean.
- First task: Stage 1 quick fixes against
  `imsv-docs-astro/src/content/docs/guides/kyc/partner-conducted-kyc.mdoc` —
  title-case `### Submit Cardholder KYC statement`, fix the `NO` `PL` comma
  in the mandatory-attachments region list, replace the bare
  `https://docs.immersve.com/guides/regions/` URL with `{% link page="guides/regions" /%}`,
  remove the duplicated `{% note %}` at the top of `## Address Formatting`,
  and update the anchor in
  `imsv-docs-docusaurus/openapi/endpoints/kyc/models/submit-kyc-statement-request.yaml:34`
  from `#submitting-a-statement-with-supporting-documents` to
  `#attaching-supporting-documents`. Commit, then move to Stage 2.
