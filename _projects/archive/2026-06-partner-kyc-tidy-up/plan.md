# Plan: Partner Conducted KYC Guide Tidy-Up

## Stage 0 — Prerequisites (done)

- [x] `0a569c866` — restructure the page into Integration Steps + reference
  sections (Claim Types, Supported Evidence Types, Address Formatting,
  Attaching Supporting Documents); move Testing KYC in Test Mode to the end;
  flatten the Address Formatting `{% list %}` layout into top-level subsections.

## Stage 1 — Quick Fixes and Cross-Link

- [x] Title-cased the Submit Cardholder KYC Statement heading, fixed the
  missing `NO`/`PL` comma in the mandatory-attachments region list, swapped
  the bare regions URL for a `{% link %}` tag, removed the duplicate
  Structured Address note, and repointed the OpenAPI description on Submit
  KYC Statement to `#attaching-supporting-documents`.

## Stage 2 — KYC Statement Intro and Slim Example

- [x] Reshaped the Submit Cardholder KYC Statement section so the reader
  sees the data model before the code: framed the statement as
  region + claims + evidence + optional attachments, deferred regional
  variation to `{% link page="guides/regions" /%}`, kept the
  region-permanence warning, slimmed the worked example to a minimal
  DOB + FULL_NAME + single RESIDENCE_PERMIT request, and forward-referenced
  `#full-statement-example`.

## Stage 3 — Fill Empty Section Bodies

- [x] Filled `### Upload Supporting Documents` with an upload-then-reference
  intro, a multipart curl against {% link endpoint="upload-file" /%}, and a
  note about reusing the response `id` as `fileId`. Filled the three
  `## Claim Types` subsections with a one-line description and minimal claim
  JSON each; `### Residential Address` defers structured/unstructured detail
  to `## Address Formatting` while showing a structured example.

## Stage 4 — Passport and Full Statement Example

- [x] Added `### Passport` as the leading entry under
  `## Supported Evidence Types` and a `## Full Statement Example` at the end
  of the page: a comprehensive curl carrying DOB + Full Name + structured
  Address claims, passport evidence, and an `attachments` array referencing
  file IDs from `### Upload Supporting Documents`.

## Stage 5 — Section Intros and Evidence Descriptions

- [x] Added short intros under `## Claim Types` and
  `## Supported Evidence Types`, gave each evidence type subsection a
  one-sentence description matching the claim type treatment, and folded
  the standalone "you can combine multiple types" note into the new
  evidence-types intro.

## Stage 6 — Review Feedback Follow-Up

- [x] Added `{% endpointref name="upload-file" /%}` under Upload Supporting
  Documents so it shows the same API Reference callout as other sections;
  dropped the unnecessary `i.e.` from the ISO 3166-2 Country Code comments
  in the slim and full statement examples.
