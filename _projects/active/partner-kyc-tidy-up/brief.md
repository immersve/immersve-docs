# Partner Conducted KYC Guide Tidy-Up

**Lead:** Nathan Jones
**Started:** 2026-05-29
**Status:** Active
**Document:** N/A — micro-project, no external scoping doc

## Problem

The Partner Conducted KYC guide at
`imsv-docs-astro/src/content/docs/guides/kyc/partner-conducted-kyc.mdoc` has
grown organically. Headings sit at inconsistent levels, related material is
scattered across the page, the worked example is large enough that the request
shape gets lost in placeholder bash variables, and the reader doesn't get a
clear answer up front to "what *is* a KYC Statement and which fields are
required for my region?".

A first commit (`0a569c866`) reorganised the page into an Integration Steps
walkthrough plus reference sections for Claim Types, Supported Evidence Types,
Address Formatting, and Attaching Supporting Documents. The reorg left several
empty subsection stubs, a slimming-pass on the example still to do, a few
typos and stale anchors, and a missing "what is a KYC Statement / how does it
vary by region?" intro.

## Scope

This project covers finishing the partner-conducted-kyc guide tidy-up started
on `0a569c866` so the page reads cleanly end-to-end, plus the one related
cross-link that the rename broke. Anything beyond the partner-conducted-kyc
guide itself — restructuring the Immersve Conducted KYC guide, populating the
unused `SupportedDocumentsTable` component, building a richer per-region
document support reference on the Supported Regions page — is deferred.

In scope:

- Populate the empty subsection stubs introduced by `0a569c866` (Upload
  Supporting Documents in Integration Steps; the three Claim Types subsections).
- Add an intro that explains what a KYC Statement is, the general requirements,
  and where to find regional variations.
- Slim the worked curl example in Submit Cardholder KYC Statement to a minimal
  shape (DOB + Full Name claims + smallest evidence type).
- Add a separate Full Statement Example at the end of the page covering every
  claim type and an attachments array.
- Add a Passport subsection under Supported Evidence Types so the page's
  treatment of evidence types is complete.
- Title-case `### Submit Cardholder KYC statement` per CLAUDE.md.
- Fix the missing comma in the mandatory-attachments region list, replace the
  bare `https://docs.immersve.com/guides/regions/` URL with a `{% link %}` tag,
  and remove the duplicated note at the top of Address Formatting.
- Update the broken anchor reference in
  `imsv-docs-docusaurus/openapi/endpoints/kyc/models/submit-kyc-statement-request.yaml`
  to point at the renamed Attaching Supporting Documents section.

Out of scope (deferred to follow-up work, in rough priority order):

- Embedding `SupportedDocumentsTable.astro` anywhere — the component is unused
  and lives at `imsv-docs-astro/src/components/registry-views/kyc/`, but
  finding it a home (most likely the Supported Regions page) is a separate
  change.
- Any restructuring of `immersve-conducted-kyc.mdoc` or other KYC guides for
  consistency with the new partner-conducted-kyc shape.
- Building a per-region claim/evidence/attachment requirements matrix to
  replace today's `{% link page="guides/regions" /%}` pointer.

## Success Criteria

- The guide has no empty headings.
- A reader landing on the page understands what a KYC Statement is, what
  fields are required, and where to find regional variations before they hit
  the curl example.
- The first curl example shows the smallest possible valid request (DOB +
  Full Name + one evidence). The full-fat example lives at the end of the
  page for readers who want the complete picture.
- All four documented evidence types (Passport, Driver's License, National ID,
  Residence Permit) have parallel subsections under Supported Evidence Types.
- All headings on the page follow Title Case per `CLAUDE.md`.
- The cross-link from `submit-kyc-statement-request.yaml` resolves to a real
  anchor on the rendered page.

## Dependencies

None. Changes are self-contained within `imsv-docs-astro` and one yaml file
under `imsv-docs-docusaurus/openapi/`.
