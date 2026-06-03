# Plan: Partner Conducted KYC Guide Tidy-Up

## Stage 0 — Prerequisites (done)

- [x] `0a569c866` — restructure the page into Integration Steps + reference
  sections (Claim Types, Supported Evidence Types, Address Formatting,
  Attaching Supporting Documents); move Testing KYC in Test Mode to the end;
  flatten the Address Formatting `{% list %}` layout into top-level subsections.

## Stage 1 — Quick Fixes and Cross-Link

Low-risk corrections independent of the rewrite work, landed first to clear
noise out of subsequent diffs. Title-cased the Submit Cardholder KYC
Statement heading, fixed the missing `NO`/`PL` comma in the
mandatory-attachments region list, swapped the bare regions URL for a
`{% link %}` tag, removed the duplicate Structured Address note (kept the
matching prose in `### Structured Addresses`), and repointed the OpenAPI
description on Submit KYC Statement to `#attaching-supporting-documents`.

## Stage 2 — KYC Statement Intro and Slim Example

Reshaped the Submit Cardholder KYC Statement section so the reader sees the
data model before the code. Replaced the loose intro with one paragraph that
frames the statement (region + claims + evidence + optional attachments)
and one that defers regional variation to `{% link page="guides/regions" /%}`,
kept the region-permanence warning, and rewrote the worked example as a
minimal DOB + FULL_NAME claim + single RESIDENCE_PERMIT evidence request
with only the bash variables it actually uses. Forward-referenced
`#full-statement-example` so the reader knows the comprehensive example is
coming.

## Stage 3 — Fill Empty Section Bodies

Populate every empty subsection introduced by `0a569c866` so the page has no
hollow headings.

- [ ] `### Upload Supporting Documents` (under `## Integration Steps`): brief
  intro to the upload-file flow, example curl returning a `fileId`, and a
  pointer to `## Attaching Supporting Documents` for how the `fileId` is then
  referenced from the statement.
- [ ] `### Date Of Birth` (under `## Claim Types`): one-line description plus
  a minimal DOB claim JSON block.
- [ ] `### Full Name` (under `## Claim Types`): one-line description plus a
  minimal FULL_NAME claim JSON block.
- [ ] `### Residential Address` (under `## Claim Types`): short blurb pointing
  at `## Address Formatting` for the structured/unstructured detail, with a
  minimal ADDRESS claim JSON example so the section isn't merely a redirect.

End state: every heading on the page has body content; the page can be read
top-to-bottom without hitting a stub.

## Stage 4 — Passport and Full Statement Example

Round out the reference material so the page documents all four evidence
types and provides a fully-featured example for readers who want to see
everything in one place.

- [ ] Add `### Passport` under `## Supported Evidence Types` mirroring the
  format of the other three evidence type subsections.
- [ ] Add `## Full Statement Example` at the very end of the page (after
  `## Testing KYC in Test Mode`): a comprehensive curl example with DOB +
  Full Name + Address claims, a passport-style evidence block, and an
  `attachments` array referencing uploaded file IDs.

End state: `## Supported Evidence Types` covers all four documented evidence
types; the page closes with a single end-to-end example a reader can copy as
a starting point for their own integration.

## Open Questions

- None.

## Known Risks

- Anchor stability: Stage 2 changes the body under `### Submit Cardholder KYC
  Statement` and Stage 1 retitles the heading. The slug derivation should be
  `#submit-cardholder-kyc-statement` either way, so the OpenAPI cross-link
  fixed in Stage 1 should stay resolved — but worth a sanity check after
  Stage 2 lands.
- The slimmed example in Stage 2 may surprise readers used to the current
  full block. The Full Statement Example added in Stage 4 deliberately
  closes that loop; if Stages 2 and 4 land in separate PRs there will be a
  window where the page lacks a comprehensive example.
