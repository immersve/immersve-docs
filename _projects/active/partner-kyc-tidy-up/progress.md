# Progress: Partner Conducted KYC Guide Tidy-Up

**Current Status:** Stages 1–3 landed on `partner-kyc-tidy-up`, pushed to
draft PR #897. Ready to begin Stage 4 (Passport evidence subsection + Full
Statement Example at end of page).

## Last Session (2026-06-04)

- Completed: Stage 3 filled the four empty stub headings. `### Upload
  Supporting Documents` gained an intro and a multipart curl example;
  `### Date Of Birth`, `### Full Name`, `### Residential Address` each
  carry a short description and a minimal claim JSON block. Residential
  Address points at `## Address Formatting` for the structured/unstructured
  detail.
- Outcome: the page has no hollow headings; a reader can scan top-to-bottom
  without hitting a stub.

## Next Session

- Pick up from: `/Users/nathan/code/immersve/worktrees/immersve-docs/partner-kyc-tidy-up`
  on branch `partner-kyc-tidy-up`, working tree clean.
- First task: Stage 4 against
  `imsv-docs-astro/src/content/docs/guides/kyc/partner-conducted-kyc.mdoc`.
  Add `### Passport` under `## Supported Evidence Types` mirroring the
  Driver's License / National ID / Residence Permit shape (one-line intro
  plus a JSON block with `evidenceType`, `documentId`, `country`,
  `expiry`). Then add `## Full Statement Example` at the very end of the
  page (after `## Testing KYC in Test Mode`): a comprehensive curl request
  combining DOB + Full Name + Address claims, a passport-style evidence
  block, and an `attachments` array referencing uploaded file IDs.
