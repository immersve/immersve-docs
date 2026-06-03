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

Filled `### Upload Supporting Documents` with an intro framing the
upload-then-reference flow, a multipart curl example against
{% link endpoint="upload-file" /%}, and a note that the response `id` is
what becomes `fileId` on the statement. Filled the three `## Claim Types`
subsections with a one-line description and a minimal claim JSON each;
`### Residential Address` defers structured/unstructured detail to
`## Address Formatting` while showing a structured example so the section
isn't just a redirect.

## Stage 4 — Passport and Full Statement Example

Added `### Passport` under `## Supported Evidence Types` (as the leading
entry, mirroring the heading + JSON shape of the other three) and a
`## Full Statement Example` at the very end of the page: a comprehensive
curl carrying DOB + Full Name + structured Address claims, passport
evidence, and an `attachments` array tying back to the file IDs returned
from `### Upload Supporting Documents`.

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
