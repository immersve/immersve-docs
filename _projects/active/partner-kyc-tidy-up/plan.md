# Plan: Partner Conducted KYC Guide Tidy-Up

## Stage 0 — Prerequisites (done)

- [x] `0a569c866` — restructure the page into Integration Steps + reference
  sections (Claim Types, Supported Evidence Types, Address Formatting,
  Attaching Supporting Documents); move Testing KYC in Test Mode to the end;
  flatten the Address Formatting `{% list %}` layout into top-level subsections.

## Stage 1 — Quick Fixes and Cross-Link

Low-risk corrections that are independent of the rewrite work. Lands first to
clear the noise out of subsequent diffs.

- [ ] Title-case `### Submit Cardholder KYC statement` → `### Submit Cardholder KYC Statement`.
- [ ] Add the missing comma between `NO` and `PL` in the mandatory-attachments
  region list under `## Attaching Supporting Documents`.
- [ ] Replace the bare `https://docs.immersve.com/guides/regions/` URL with
  `{% link page="guides/regions" /%}` in the KYC Statement intro paragraph.
- [ ] Remove the duplicated `{% note %}` at the top of `## Address Formatting`
  (or remove the prose paragraph that restates it — keep one).
- [ ] Update
  `imsv-docs-docusaurus/openapi/endpoints/kyc/models/submit-kyc-statement-request.yaml:34`
  to point at `#attaching-supporting-documents` instead of the renamed
  `#submitting-a-statement-with-supporting-documents`.

End state: page renders without the typo, without the duplicated note, and
without a bare URL; the OpenAPI description on Submit KYC Statement deep-links
to a real anchor.

## Stage 2 — KYC Statement Intro and Slim Example

Reshape the Submit Cardholder KYC Statement section so the reader understands
the data model before they read code. This pairs the new intro with a slimmed
example, because the example only reads naturally once "what's required vs.
optional" has been established.

- [ ] Write a short intro under `### Submit Cardholder KYC Statement` covering:
  what a KYC Statement is (region + claims + evidence + optional attachments),
  the general requirements (at least one piece of evidence; idempotency key;
  region is permanent), and where to find regional variations
  (`{% link page="guides/regions" /%}`).
- [ ] Slim the worked curl example to the smallest valid shape — DOB +
  FULL_NAME claims plus a single RESIDENCE_PERMIT evidence (three fields:
  `documentId`, `country`, `expiry`). Cut bash variables that aren't used.

End state: a first-time reader can answer "what does Submit KYC Statement
need from me?" from the intro alone; the curl example fits on one screen and
shows the request shape without placeholder noise.

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
