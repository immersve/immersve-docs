# Progress: Partner Conducted KYC Guide Tidy-Up

**Current Status:** Stages 1–2 landed on `partner-kyc-tidy-up`, pushed to
the draft PR (#897). Ready to begin Stage 3 (fill the empty stub headings).

## Last Session (2026-06-04)

- Completed: Stage 1 quick fixes; Stage 2 rewrote the Submit Cardholder KYC
  Statement intro and slimmed the curl example to a minimal DOB + FULL_NAME
  + RESIDENCE_PERMIT request with a forward reference to the eventual
  `#full-statement-example` anchor.
- Outcome: a reader can answer "what does Submit KYC Statement need from
  me?" from the intro alone; the example shows the request shape without
  placeholder noise.

## Next Session

- Pick up from: `/Users/nathan/code/immersve/worktrees/immersve-docs/partner-kyc-tidy-up`
  on branch `partner-kyc-tidy-up`, working tree clean.
- First task: Stage 3 against
  `imsv-docs-astro/src/content/docs/guides/kyc/partner-conducted-kyc.mdoc`.
  Fill the empty `### Upload Supporting Documents` (under Integration Steps:
  intro + example curl returning a `fileId` + pointer to
  `## Attaching Supporting Documents`) and the three empty `## Claim Types`
  subsections — `### Date Of Birth`, `### Full Name`, `### Residential
  Address` — each with a one-line description and a minimal claim JSON
  block. The Residential Address blurb should point at `## Address
  Formatting` for the structured/unstructured detail.
