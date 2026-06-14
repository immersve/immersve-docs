# Code Block Caption Proposals

This document lists every fenced code block under
`imsv-docs-astro/src/content/docs/` with a proposed caption for human review.
To review, mark each row "approved" (use the proposal as-is), "change-to: …"
(substitute a different caption), or "skip" (leave the block untouched). All
captions use Title form (`{% title="…" %}`).

## Caption Style

Captions are descriptive full sentences in sentence case with a terminal
period. The rules in short:

1. **Full sentence, sentence case, terminal period.** Captions are not labels
   and are not Title Case.
2. **Lead with "Example …"** for any block that illustrates a request,
   response, payload, message, or script. That covers the great majority of
   blocks.
3. **Drop "Example"** only when the block is the actual artifact to copy
   verbatim — most often the env-var setup blocks near the top of an
   integration guide. Those read like
   "Environment variables used by the curl examples that follow."
4. **Use a gerund describing what the call does.** Prefer
   "Example curl creating a cardholder account." over
   "Example POST /accounts request." The endpoint name already appears in the
   surrounding `endpointref`; the caption says what the request *does*.
5. **For JSON request, response, and payload blocks, name the artifact.**
   "Example request body for POST /accounts.",
   "Example response from the follow_kyc_url call.",
   "Example payment-3ds-sca webhook payload.",
   "Example new-cardholder prerequisite returned from POST /spending-prerequisites."
6. **Rewrite filename titles as descriptive sentences too.**
   `sign-xrpl-challenge.js` becomes
   "Example script signing an XRPL login challenge." The filename still
   appears inside the code block itself.
7. **Preserve canonical casing for proper nouns and product names.** XRPL,
   SIWE, Algorand, EVM, KYC, 3DS, SCA. Literal API values like
   `payment-3ds-sca` and `follow_kyc_url` stay lowercase.

## Summary

- Total blocks found: 96 fenced code blocks across 18 files. One additional
  inline triple-backtick fragment is noted but not counted as a block.
- By language:
  - `bash`: 53
  - `json`: 31
  - `js`: 5
  - `shell`: 2
  - (no language tag): 4
  - inline `` ``` `` fragment (not a block): 1
- All blocks use Title form. Two prose-form alternatives previously suggested
  for `immersve-conducted-kyc.mdoc` have been replaced with captions.
- Two anti-pattern flags remain: the pseudocode block at
  `accessing-reconciliation-reports.mdoc:194` is left uncaptioned and flagged
  for rewrite as a list, and the malformed inline triple-backtick at
  `immersve-conducted-kyc.mdoc:444` is noted but not counted.

## Preview Deploy Links

Every page modified by Stage B2, on the PR preview deploy:

- [3DS — Handling In-App Payment Challenges](https://907-merge--jovial-scone-ec740d.netlify.app/guides/3ds/handling-in-app-payment-challenges/)
- [API Fundamentals — Algorand Login](https://907-merge--jovial-scone-ec740d.netlify.app/guides/api-fundamentals/algorand-login/)
- [API Fundamentals — HTTP Status Codes](https://907-merge--jovial-scone-ec740d.netlify.app/guides/api-fundamentals/http-status-codes/)
- [API Fundamentals — SIWE Login](https://907-merge--jovial-scone-ec740d.netlify.app/guides/api-fundamentals/siwe-login/)
- [API Fundamentals — XRPL Login](https://907-merge--jovial-scone-ec740d.netlify.app/guides/api-fundamentals/xrpl-login/)
- [Card-Issuing Apps — Creating a Funding Channel](https://907-merge--jovial-scone-ec740d.netlify.app/guides/card-issuing-apps/creating-a-funding-channel/)
- [Card-Issuing Apps — Custodial Card-Issuing Integration](https://907-merge--jovial-scone-ec740d.netlify.app/guides/card-issuing-apps/custodial-card-issuing-integration/)
- [Card-Issuing Apps — Custodial On-Chain Card-Issuing Integration](https://907-merge--jovial-scone-ec740d.netlify.app/guides/card-issuing-apps/custodial-on-chain-card-issuing-integration/)
- [Card-Issuing Apps — Fetching Secure Card Information](https://907-merge--jovial-scone-ec740d.netlify.app/guides/card-issuing-apps/fetching-secure-card-information/)
- [Card-Issuing Apps — Web3 Wallet Card-Issuing Integration](https://907-merge--jovial-scone-ec740d.netlify.app/guides/card-issuing-apps/web3-wallet-card-issuing-integration/)
- [Core Concepts — Card Funding](https://907-merge--jovial-scone-ec740d.netlify.app/guides/core-concepts/card-funding/)
- [Core Concepts — Regions](https://907-merge--jovial-scone-ec740d.netlify.app/guides/core-concepts/regions/)
- [KYC — Cardholder Activation](https://907-merge--jovial-scone-ec740d.netlify.app/guides/kyc/cardholder-activation/)
- [KYC — Immersve-Conducted KYC](https://907-merge--jovial-scone-ec740d.netlify.app/guides/kyc/immersve-conducted-kyc/)
- [KYC — KYC Spending Prerequisites](https://907-merge--jovial-scone-ec740d.netlify.app/guides/kyc/kyc-spending-prerequisites/)
- [KYC — Partner-Conducted KYC](https://907-merge--jovial-scone-ec740d.netlify.app/guides/kyc/partner-conducted-kyc/)
- [Reports — Accessing Reconciliation Reports](https://907-merge--jovial-scone-ec740d.netlify.app/guides/reports/accessing-reconciliation-reports/)
- [Webhooks — Configuring Webhook Listeners](https://907-merge--jovial-scone-ec740d.netlify.app/guides/webhooks/configuring-webhook-listeners/)

## guides/3ds/handling-in-app-payment-challenges.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 36 | json | — | Step 1: Receive the 3DS Webhook | Title | Example payment-3ds-sca webhook payload. |
| 82 | shell | — | Step 4: Submit the Outcome | Title | Example curl submitting an approved 3DS challenge outcome. |
| 101 | shell | — | Step 4: Submit the Outcome | Title | Example curl submitting a declined 3DS challenge outcome. |

## guides/api-fundamentals/algorand-login.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 20 | — | `{% title="algorand login message" %}` | Algorand Login Message Format | Title (rewrite) | Example Algorand login challenge message returned by the initiate-login endpoint. |
| 35 | js | `{% title="sign-algorand-challenge.js" %}` | Example Login Script | Title (rewrite) | Example script signing an Algorand login challenge. |

## guides/api-fundamentals/http-status-codes.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 50 | json | `{% title="Example 403 Response" %}` | Business rule violated | Title (rewrite) | Example 403 response for a business rule violation. |

## guides/api-fundamentals/siwe-login.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 22 | — | `{% title="siwe login message" %}` | SIWE Login Message Format | Title (rewrite) | Example SIWE login challenge message returned by the initiate-login endpoint. |
| 45 | js | `{% title="sign-siwe-challenge.js" %}` | Example Login Script | Title (rewrite) | Example script signing a SIWE login challenge. |

## guides/api-fundamentals/xrpl-login.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 22 | — | `{% title="xrpl login message" %}` | XRPL Login Message Format | Title (rewrite) | Example XRPL login challenge message returned by the initiate-login endpoint. |
| 35 | js | `{% title="sign-xrpl-challenge.js" %}` | Example Login Script | Title (rewrite) | Example script signing an XRPL login challenge. |

## guides/card-issuing-apps/creating-a-funding-channel.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 29 | bash | — | Universal EVM | Title | Environment variables used by the curl examples that follow. |
| 39 | bash | — | Universal EVM | Title | Example curl creating a funding channel for a deployed Funds Storage contract. |

## guides/card-issuing-apps/custodial-card-issuing-integration.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 75 | bash | — | Configure Variables | Title | Environment variables used by the curl examples that follow. |
| 142 | bash | — | Create a Cardholder Account | Title | Example curl creating a cardholder account. |
| 169 | bash | — | Register Cardholder Funding Source | Title | Example curl registering a custodial cardholder funding source. |
| 192 | bash | — | Complete Cardholder Onboarding | Title | Example curl fetching spending prerequisites to check cardholder onboarding status. |
| 245 | bash | — | Supply Contact Details | Title | Example curl supplying the cardholder's email and phone contact details. |
| 276 | bash | — | Request a Card — Create a Card | Title | Example curl creating a card for the cardholder. |
| 294 | bash | — | Request a Card — Get Card Details | Title | Example curl fetching card details to check the card is active. |
| 310 | bash | — | Request a Card — Get Sensitive Card Details | Title | Example curl requesting a one-time token for fetching sensitive card details. |
| 327 | bash | — | Perform a Test Card Payment | Title | Example curl simulating a test card payment. |

## guides/card-issuing-apps/custodial-on-chain-card-issuing-integration.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 68 | bash | — | Configure Variables | Title | Environment variables used by the curl examples that follow. |
| 116 | bash | — | Create a Cardholder Account | Title | Example curl creating a cardholder account. |
| 142 | bash | — | Prove Ownership of Web3 Address | Title | Example curl creating a challenge for the cardholder to sign with their web3 wallet. |
| 172 | bash | — | Register Cardholder Funding Source | Title | Example curl registering a cardholder funding source with a signed web3 challenge. |
| 197 | bash | — | Get KYC and Contact Details Prerequisites | Title | Example curl fetching spending prerequisites to surface KYC and contact-detail requirements. |
| 237 | bash | — | Request a Card — Create a Card | Title | Example curl creating a card for the cardholder. |
| 255 | bash | — | Request a Card — Get Card Details | Title | Example curl fetching card details to check the card is active. |
| 271 | bash | — | Request a Card — Get Sensitive Card Details | Title | Example curl requesting a one-time token for fetching sensitive card details. |
| 291 | bash | — | Deposit Funds | Title | Example curl fetching spending prerequisites to get the deposit transaction parameters. |
| 311 | bash | — | Check Card Balance | Title | Example curl listing funding sources to verify the deposited balance. |
| 328 | bash | — | Perform a Test Card Payment | Title | Example curl simulating a test card payment. |

## guides/card-issuing-apps/fetching-secure-card-information.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 29 | js | `{% title="fetch-card-sensitive-details.js" %}` | Example code snippet | Title (rewrite) | Example script fetching sensitive card details via a one-time token callback. |

## guides/card-issuing-apps/web3-wallet-card-issuing-integration.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 68 | bash | — | Configure Variables | Title | Environment variables used by the curl examples that follow. |
| 117 | bash | — | Login / Signup | Title | Variables capturing the access token, refresh token, and account ID from the login response. |
| 134 | bash | — | Refresh Access Token | Title | Example curl exchanging a refresh token for a new access token. |
| 164 | bash | — | Register Cardholder Funding Source | Title | Example curl registering a cardholder funding source for the user's wallet address. |
| 192 | bash | — | Complete Cardholder Onboarding | Title | Example curl fetching spending prerequisites to start Immersve-conducted KYC. |
| 217 | json | — | Complete Cardholder Onboarding | Title | Example follow_kyc_url prerequisite returned from POST /spending-prerequisites. |
| 245 | bash | — | Request a Card — Create a Card | Title | Example curl creating a card for the cardholder. |
| 261 | bash | — | Request a Card — Get Card Details | Title | Example curl fetching card details to check the card is active. |
| 275 | bash | — | Request a Card — Get Sensitive Card Details | Title | Example curl requesting a one-time token for fetching sensitive card details. |
| 293 | bash | — | Deposit Cardholder Funds | Title | Example curl fetching spending prerequisites to get the deposit transaction parameters. |
| 312 | bash | — | Check Card Balance | Title | Example curl listing funding sources to verify the deposited balance. |
| 328 | bash | — | Perform a Test Card Payment | Title | Example curl simulating a test card payment. |

## guides/core-concepts/card-funding.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 94 | js | `{% title="ethers-execute-withdrawal.js" %}` | Withdrawal Intent Javascript Example | Title (rewrite) | Example using ethers to execute a withdrawal intent transaction. |
| 130 | js | `{% title="ethers-execute-deposit.js" %}` | Prerequisites Execution Javascript Example | Title (rewrite) | Example using ethers to execute a deposit transaction. |

## guides/core-concepts/regions.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 71 | bash | — | Custodial Wallets | Title | Environment variables used by the API-key curl examples that follow. |
| 79 | bash | — | Custodial Wallets | Title | Example curl fetching supported regions using API-key authentication. |
| 97 | bash | — | Web3 Wallets | Title | Environment variables used by the bearer-token curl examples that follow. |
| 104 | bash | — | Web3 Wallets | Title | Example curl fetching supported regions using bearer-token authentication. |

## guides/kyc/cardholder-activation.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 64 | json | — | Webhooks (Recommended) | Title | Example cardholder-block-released webhook payload. |

## guides/kyc/immersve-conducted-kyc.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 47 | json | — | How It Works — Handle Any Actions | Title | Example action-required KYC prerequisite returned from POST /spending-prerequisites. |
| 69 | json | — | How It Works — Present Immersve Conducted KYC UI | Title | Example follow_kyc_url prerequisite returned from POST /spending-prerequisites. |
| 91 | json | — | How It Works — Wait for Background Checks | Title | Example response while background checks are running. |
| 106 | json | — | How It Works — Immersve Conducted KYC is Complete | Title | Example response once background checks have passed. |
| 124 | bash | — | Before You Get Started | Title | Environment variables used by the curl examples that follow. |
| 145 | bash | — | Calling Spending Prerequisites | Title | Example curl fetching spending prerequisites to start Immersve-conducted KYC. |
| 160 | json | — | Calling Spending Prerequisites | Title | Example response from POST /spending-prerequisites carrying a follow_kyc_url action. |
| 257 | bash | — | Supply Contact Details (Optional) | Title | Example curl supplying the cardholder's email and phone contact details. |
| 284 | bash | — | Supply Expected Spend Amount (Optional) | Title | Example curl supplying the cardholder's expected monthly spend amount. |
| 312 | json | — | Supply Residential Address (Optional) — Structured Address | Title | Example structured residential address payload. |
| 330 | json | — | Supply Residential Address (Optional) — Unstructured Address | Title | Example unstructured residential address payload. |
| 346 | bash | — | Supply Residential Address (Optional) | Title | Example curl submitting the cardholder's residential address ahead of KYC. |
| 396 | bash | — | Confirmation of KYC Completion | Title | Example curl fetching spending prerequisites after KYC redirect to confirm completion. |
| 412 | json | — | Confirmation of KYC Completion | Title | Example response from POST /spending-prerequisites once all stages are ok. |
| 444 (inline) | — | — | Known Issues — Android embedded browser camera access issue | Skip — short fragment | Inline `mediaPlaybackRequiresUserGesture = false`; not a fenced block |

## guides/kyc/kyc-spending-prerequisites.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 43 | json | — | New Cardholder | Title | Example new-cardholder prerequisite returned from POST /spending-prerequisites. |
| 60 | json | — | New Cardholder (Partner Conducted) | Title | Example submit_kyc_statement prerequisite returned from POST /spending-prerequisites. |
| 75 | json | — | Background Checks In-Progress | Title | Example pending KYC prerequisite returned while background checks run. |
| 84 | json | — | Background Checks Failed (Partner Conducted) | Title | Example KYC prerequisite requesting a resubmitted statement with failure reasons. |
| 103 | json | — | KYC Requirements Completed | Title | Example ok KYC prerequisite returned once all checks have passed. |
| 116 | json | — | Background Checks Permanently Failed | Title | Example blocked KYC prerequisite returned when retries are not allowed. |

## guides/kyc/partner-conducted-kyc.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 56 | bash | — | Set up Environment Variables | Title | Environment variables used by the curl examples that follow. |
| 85 | bash | — | Supply Contact Details | Title | Example curl supplying the cardholder's email and phone contact details. |
| 114 | bash | — | Supply Expected Spend Amount | Title | Example curl supplying the cardholder's expected monthly spend amount. |
| 138 | bash | — | Upload Supporting Documents | Title | Example curl uploading a supporting KYC document and receiving a file ID. |
| 175 | bash | — | Submit Cardholder KYC Statement | Title | Example curl submitting a minimal partner-conducted KYC statement with a residence permit. |
| 231 | json | — | Date Of Birth | Title | Example date-of-birth claim on a KYC statement. |
| 245 | json | — | Full Name | Title | Example full-name claim on a KYC statement. |
| 263 | json | — | Residential Address | Title | Example structured residential-address claim on a KYC statement. |
| 292 | json | — | Passport | Title | Example passport evidence on a KYC statement. |
| 306 | json | — | Driver's License | Title | Example driver's license evidence on a KYC statement. |
| 322 | json | — | National ID | Title | Example national ID evidence on a KYC statement. |
| 337 | json | — | Residence Permit | Title | Example residence permit evidence on a KYC statement. |
| 364 | json | — | Structured Addresses | Title | Example structured address claim payload. |
| 389 | json | — | Unstructured Addresses | Title | Example unstructured address claim payload. |
| 426 | json | — | Attaching Supporting Documents | Title | Example attachments array referencing uploaded supporting documents. |
| 457 | bash | — | Full Statement Example | Title | Example curl submitting a fully populated partner-conducted KYC statement. |

## guides/reports/accessing-reconciliation-reports.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 25 | json | — | Funding Source Reporting | Title | Example funding source interaction report line item. |
| 65 | json | — | Funding Source Reporting | Title | Example funding source report line item. |
| 102 | json | — | Payment Reporting | Title | Example payment report line item. |
| 194 | — | — | Reconciling balances | Skip — short fragment | Pseudocode prose block; consider converting to inline list or leaving uncaptioned |
| 240 | bash | — | Download | Title | Example curl downloading a reconciliation report via the pre-signed URL. |

## guides/webhooks/configuring-webhook-listeners.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 54 | bash | — | Registering Webhook Listeners | Title | Example curl registering a webhook listener for a partner account. |
| 72 | bash | — | Subscribing to Topics | Title | Example curl subscribing a webhook listener to a topic. |
| 97 | bash | — | Testing Webhooks | Title | Example curl sending a test webhook notification for a topic. |
