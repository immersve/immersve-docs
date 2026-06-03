# Progress: Partner Conducted KYC Guide Tidy-Up

**Current Status:** Stage 1 landed. Ready to begin Stage 2 (KYC Statement
intro + slim example). All stages will ship as one PR off
`partner-kyc-tidy-up`.

## Last Session (2026-06-04)

- Completed: Stage 1 quick fixes — title-cased Submit Cardholder KYC
  Statement, fixed `NO`/`PL` comma, swapped bare regions URL for `{% link %}`,
  removed duplicate Structured Address note, repointed OpenAPI cross-link to
  `#attaching-supporting-documents`.
- Outcome: page renders without the typo, duplicated note, or bare URL;
  `submit-kyc-statement-request.yaml` deep-links to a real anchor.

## Next Session

- Pick up from: `/Users/nathan/code/immersve/worktrees/immersve-docs/partner-kyc-tidy-up`
  on branch `partner-kyc-tidy-up`, working tree clean.
- First task: Stage 2 against
  `imsv-docs-astro/src/content/docs/guides/kyc/partner-conducted-kyc.mdoc`.
  Write a short intro under `### Submit Cardholder KYC Statement` covering
  what a KYC Statement is (region + claims + evidence + optional
  attachments), the general requirements (≥1 evidence, idempotency key,
  region permanence), and a pointer to `{% link page="guides/regions" /%}`
  for regional variations. Then slim the worked curl example to DOB +
  FULL_NAME claims plus a single RESIDENCE_PERMIT evidence
  (`documentId`/`country`/`expiry`), dropping unused bash variables.
