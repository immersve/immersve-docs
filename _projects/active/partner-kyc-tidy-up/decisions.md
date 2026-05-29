# Decisions: Partner Conducted KYC Guide Tidy-Up

## 2026-05-29 — Two examples: a slim minimum and a comprehensive end-of-page reference

**Decision:** The Submit Cardholder KYC Statement section will carry a minimal
curl example using only DOB + FULL_NAME claims and a single RESIDENCE_PERMIT
evidence (three fields). A separate `## Full Statement Example` section at the
very end of the page will carry the comprehensive example with all claim
types, a passport-style evidence block, and an `attachments` array.

**Rationale:** The pre-tidy-up example overwhelmed the request shape with
placeholder bash variables for fields most integrators don't need to set.
Surfacing the minimal shape first lets readers learn the API; the
end-of-page comprehensive example gives a copy-paste starting point for
integrators who want to see everything wired up at once. Two examples — one
optimised for learning, one for copying — read more cleanly than a single
mid-sized example that does neither job well.

**Alternatives considered:**

- *Keep a single mid-sized example*: rejected because it would still bury the
  shape under placeholder variables and still wouldn't show attachments.
- *Slim example only, no comprehensive version*: rejected because readers
  integrating a complete flow benefit from a single block that exercises
  every documented field, including the optional `attachments` array.
- *Put the comprehensive example immediately after the slim one*: rejected
  because it would re-bury the request shape under the larger block almost
  immediately. Pushing it to the end of the page keeps the slim example
  doing its job.

## 2026-05-29 — Don't inline `SupportedDocumentsTable` here; just link to the Supported Regions guide

**Decision:** The new intro paragraph under `### Submit Cardholder KYC
Statement` will link to `{% link page="guides/regions" /%}` for regional
variations. The unused `SupportedDocumentsTable.astro` component will not be
embedded in the partner-conducted-kyc page.

**Rationale:** The component renders a region-by-document-type matrix, which
is a Supported Regions concern, not a Partner Conducted KYC concern. Embedding
it on the partner-conducted-kyc page would split the canonical reference
across two pages and create a drift hazard. Keeping the partner-conducted-kyc
page as the "how to integrate" surface and linking out to Supported Regions as
the "what's available where" surface preserves a clean separation.

**Alternatives considered:**

- *Embed the table on the partner-conducted-kyc page*: rejected — drift hazard
  and topical mismatch.
- *Embed it on the Supported Regions page now, and link from here*: deferred
  to a follow-up. The table component exists but finding it a permanent home
  is a separate change with its own design choices (where on the regions page
  it sits, what data backs it).
