# Plan: Document Casing Rules & Fix Non-Compliant Headings

## Context

The repo has no contributor-facing style guide. The most frequent, repeated
mistake is **sentence case used where title case belongs**. Under the project's
working definition:

- **Every title/heading is a label**, and a label is a name → names are proper
  nouns → headings take **Title Case**.
- **Every bullet point** is either a label (→ Title Case) or a paragraph
  (→ sentence case **with a trailing period**).

`CLAUDE.md` already encodes the Title Case rule for Claude, but humans have
nowhere to read it. We will (1) document both rules for contributors and
(2) fix non-compliant markdown headings in the authored content.

Scope decisions (confirmed with user):
- Style guide lives in the **README "Style" section** (expanded), not a new file.
- Fix sweep covers **markdown `#`/`##`/`###` headings in `.mdoc` content only**.
  Frontmatter `title:` values and `astro.config.mjs` nav `label:` entries are
  **out of scope** for this pass.

Work happens in worktree `worktree-docs-style-guide` (already created).

## Part A — Document the rules (README)

Expand the thin `## Style` section in `README.md` (currently lines 102–105,
just a Hemingway link). Add two subsections under it:

### `### Casing: Headings and Labels`
- All headings and UI labels use **Title Case** (a label is a name).
- Restate the mechanical Title Case rules already in `CLAUDE.md` (capitalize
  first/last word; capitalize words ≥4 letters incl. prepositions like
  Through/Between/From/With; lowercase articles a/an/the, coordinating
  conjunctions and/but/or, and short prepositions in/on/at/to/of/for unless
  first/last; preserve proper-noun/product casing like iPhone, npm, GitHub).
- **Exception:** headings that are literal code identifiers (e.g. the Algorand
  contract method headings `### partnerChannelDeployInit(...)`) keep their
  source casing — they are code, not prose labels.

### `### Casing: Bullet Points`
- A bullet is **either** a label (Title Case, no trailing period) **or** a
  paragraph/sentence (sentence case, **with** a trailing period). Pick one per
  list and be consistent.
- Give a short before/after example of each.

Keep wording concise and link from this section to `CLAUDE.md` (and vice-versa)
so the human guide and the Claude instructions stay a single source of truth.
Wrap prose to match the repo's existing manual line-wrapping convention.

## Part B — Fix non-compliant markdown headings

Target: `imsv-docs-astro/src/content/docs/**/*.mdoc` (337 headings total).
A heuristic scan flagged ~40 candidates; **the heuristic is a starting point,
not the final list** — the executor must read every flagged heading in context
and also re-scan for 4+ letter prepositions (with, from, into, over) that the
heuristic skips, since those should be capitalized.

Representative confirmed fixes (file → change):

- `resources/postman-collection.mdoc`
  - "Set up Postman Collection and Environment" → "Set Up Postman Collection and Environment"
  - "Authentication within the Postman Collection" → "Authentication Within the Postman Collection"
- `guides/kyc/partner-conducted-kyc.mdoc`
  - "Set up environment variables" → "Set Up Environment Variables"
  - "Submit Cardholder KYC statement" → "Submit Cardholder KYC Statement"
  - "Submitting a Statement with evidence" → "Submitting a Statement With Evidence"
  - "personal details" / "address details" / "passport details" → "Personal Details" / "Address Details" / "Passport Details"
  - "Other supported evidence types" → "Other Supported Evidence Types"
  - "KYC Statement Addresses in Partner conducted KYC" → "...in Partner Conducted KYC"
  - "Submitting a Statement with supporting documents" → "...With Supporting Documents"
  - "Monitor KYC evaluation process" → "Monitor KYC Evaluation Process"
- `guides/kyc/immersve-conducted-kyc.mdoc`
  - "Unsuccessful KYC check" → "Unsuccessful KYC Check"
  - "Android embedded browser camera access issue" → "Android Embedded Browser Camera Access Issue"
- `guides/card-issuing-apps/*.mdoc`
  - "Verify Your Asset is Supported" → "Verify Your Asset Is Supported" (3 files)
  - "Verify Your Target Regions are Supported" → "...Regions Are Supported"
  - "Create a card" → "Create a Card"; "Activate the card" → "Activate the Card"
  - "Create a support session" → "Create a Support Session"
  - "Example code snippet" → "Example Code Snippet"
  - "Per cardholder setup" → "Per Cardholder Setup"
- `guides/api-fundamentals/http-status-codes.mdoc`
  - "400 Malformed request" → "400 Malformed Request"
  - "Resource missing or permission denied" → "Resource Missing or Permission Denied"
  - "Business rule violated" → "Business Rule Violated"
- `guides/api-fundamentals/rate-limiting.mdoc`
  - "Rate limits" → "Rate Limits"
  - "What to do if your requests are rate limited?" → "What to Do if Your Requests Are Rate Limited?"
- `guides/testing/passing-kyc-in-test.mdoc`
  - "Upload document and perform a facial scan" → "Upload Document and Perform a Facial Scan"
- `guides/core-concepts/regions.mdoc`
  - "Coming soon" → "Coming Soon"
- `guides/reports/accessing-reconciliation-reports.mdoc`
  - "Reconciling balances" → "Reconciling Balances"
  - "Migrating from legacy APIs" → "Migrating From Legacy APIs"

**Do NOT change** the 7 Algorand contract-method headings in
`guides/funding-protocols/flexi-algorand-funding-protocol.mdoc`
(`partnerChannelDeployInit(...)` etc.) — code identifiers, per the exception.

**Anchor caution:** some headings carry explicit `<a id="..."/>` anchors; edit
only the visible text, never the anchor id. For headings without explicit
anchors, changing heading text changes the auto-generated slug — grep the repo
for in-page links (`](#...)`) to any renamed heading and update them. Cross-page
URLs are unaffected (those use frontmatter `slug`/file path, untouched here).

## Verification

1. Re-run the heuristic scan (the Python snippet used during planning) over
   `*.mdoc`; confirm the suspect count drops to only the intended exceptions
   (code-identifier headings).
2. `grep -rnE '\]\(#' imsv-docs-astro/src/content/docs` — confirm no in-page
   anchor link points at an old (now-renamed) auto-slug.
3. `yarn build` (or `yarn start:astro`) — confirm the Astro site builds and a
   few changed pages render with corrected headings.
4. Spot-check rendered ToC/sidebar on 2–3 edited pages.

## Out of scope (note for a later pass)
- Frontmatter `title:` values (~62) and `astro.config.mjs` nav labels.
- The bullet-point sweep (rule documented now; content not yet audited).
- Docusaurus/OpenAPI-generated content (derived from YAML, not hand-edited).
