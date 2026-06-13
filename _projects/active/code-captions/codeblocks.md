# Code Block Caption Proposals

This document lists every fenced code block under `imsv-docs-astro/src/content/docs/`
with a proposed caption for human review. To review, mark each row "approved"
(use the proposal as-is), "change-to: …" (substitute a different caption), or
"skip" (leave the block untouched). The brief calls for Title form
(`{% title="…" %}`) by default; Paragraph form is suggested where surrounding
prose, not a name, lands the block.

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

## guides/3ds/handling-in-app-payment-challenges.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 36 | json | — | Step 1: Receive the 3DS Webhook | Title | `Example "payment-3ds-sca" Webhook Payload` |
| 82 | shell | — | Step 4: Submit the Outcome | Title | `Example Curl Posting a 3DS Challenge Approved Outcome` |
| 101 | shell | — | Step 4: Submit the Outcome | Title | `Example Curl submitting a 3DS SCA Challenge "declined" outcome.` |

## guides/api-fundamentals/algorand-login.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 20 | — | `{% title="algorand login message" %}` | Algorand Login Message Format | Keep existing | `algorand login message` (existing; consider Title Case `Algorand Login Message`) |
| 35 | js | `{% title="sign-algorand-challenge.js" %}` | Example Login Script | Keep existing | `sign-algorand-challenge.js` (filename, keep) |

## guides/api-fundamentals/http-status-codes.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 50 | json | `{% title="Example 403 Response" %}` | Business rule violated | Keep existing | `Example 403 Response` (already Title Case) |

## guides/api-fundamentals/siwe-login.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 22 | — | `{% title="siwe login message" %}` | SIWE Login Message Format | Keep existing | `siwe login message` (existing; consider Title Case `SIWE Login Message`) |
| 45 | js | `{% title="sign-siwe-challenge.js" %}` | Example Login Script | Keep existing | `sign-siwe-challenge.js` (filename, keep) |

## guides/api-fundamentals/xrpl-login.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 22 | — | `{% title="xrpl login message" %}` | XRPL Login Message Format | Keep existing | `xrpl login message` (existing; consider Title Case `XRPL Login Message`) |
| 35 | js | `{% title="sign-xrpl-challenge.js" %}` | Example Login Script | Keep existing | `sign-xrpl-challenge.js` (filename, keep) |

## guides/card-issuing-apps/creating-a-funding-channel.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 29 | bash | — | Universal EVM | Title | `Environment Variables` |
| 39 | bash | — | Universal EVM | Title | `Create Funding Channel` |

## guides/card-issuing-apps/custodial-card-issuing-integration.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 75 | bash | — | Configure Variables | Title | `Environment Variables` |
| 142 | bash | — | Create a Cardholder Account | Title | `POST /accounts` |
| 169 | bash | — | Register Cardholder Funding Source | Title | `POST /funding-sources` |
| 192 | bash | — | Complete Cardholder Onboarding | Title | `POST /spending-prerequisites` |
| 245 | bash | — | Supply Contact Details | Title | `PATCH /accounts/{id}/contact-details` |
| 276 | bash | — | Request a Card — Create a Card | Title | `POST /cards` |
| 294 | bash | — | Request a Card — Get Card Details | Title | `GET /cards/{cardId}` |
| 310 | bash | — | Request a Card — Get Sensitive Card Details | Title | `POST /cards/{cardId}/pan-token` |
| 327 | bash | — | Perform a Test Card Payment | Title | `POST /simulator/authorize` |

## guides/card-issuing-apps/custodial-on-chain-card-issuing-integration.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 68 | bash | — | Configure Variables | Title | `Environment Variables` |
| 116 | bash | — | Create a Cardholder Account | Title | `POST /accounts` |
| 142 | bash | — | Prove Ownership of Web3 Address | Title | `POST /challenges` |
| 172 | bash | — | Register Cardholder Funding Source | Title | `POST /funding-sources` |
| 197 | bash | — | Get KYC and Contact Details Prerequisites | Title | `POST /spending-prerequisites` |
| 237 | bash | — | Request a Card — Create a Card | Title | `POST /cards` |
| 255 | bash | — | Request a Card — Get Card Details | Title | `GET /cards/{cardId}` |
| 271 | bash | — | Request a Card — Get Sensitive Card Details | Title | `POST /cards/{cardId}/pan-token` |
| 291 | bash | — | Deposit Funds | Title | `POST /spending-prerequisites` |
| 311 | bash | — | Check Card Balance | Title | `GET /accounts/{id}/funding-sources` |
| 328 | bash | — | Perform a Test Card Payment | Title | `POST /simulator/authorize` |

## guides/card-issuing-apps/fetching-secure-card-information.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 29 | js | `{% title="fetch-card-sensitive-details.js" %}` | Example code snippet | Keep existing | `fetch-card-sensitive-details.js` (filename, keep) |

## guides/card-issuing-apps/web3-wallet-card-issuing-integration.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 68 | bash | — | Configure Variables | Title | `Environment Variables` |
| 117 | bash | — | Login / Signup | Title | `Login Response Variables` |
| 134 | bash | — | Refresh Access Token | Title | `POST /auth/token` |
| 164 | bash | — | Register Cardholder Funding Source | Title | `POST /funding-sources` |
| 192 | bash | — | Complete Cardholder Onboarding | Title | `POST /spending-prerequisites` |
| 217 | json | — | Complete Cardholder Onboarding | Title | `Example follow_kyc_url Response` |
| 245 | bash | — | Request a Card — Create a Card | Title | `POST /cards` |
| 261 | bash | — | Request a Card — Get Card Details | Title | `GET /cards/{cardId}` |
| 275 | bash | — | Request a Card — Get Sensitive Card Details | Title | `POST /cards/{cardId}/pan-token` |
| 293 | bash | — | Deposit Cardholder Funds | Title | `POST /spending-prerequisites` |
| 312 | bash | — | Check Card Balance | Title | `GET /accounts/{id}/funding-sources` |
| 328 | bash | — | Perform a Test Card Payment | Title | `POST /simulator/authorize` |

## guides/core-concepts/card-funding.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 94 | js | `{% title="ethers-execute-withdrawal.js" %}` | Withdrawal Intent Javascript Example | Keep existing | `ethers-execute-withdrawal.js` (filename, keep) |
| 130 | js | `{% title="ethers-execute-deposit.js" %}` | Prerequisites Execution Javascript Example | Keep existing | `ethers-execute-deposit.js` (filename, keep) |

## guides/core-concepts/regions.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 71 | bash | — | Custodial Wallets | Title | `Environment Variables` |
| 79 | bash | — | Custodial Wallets | Title | `GET /accounts/{id}/supported-regions (API Key)` |
| 97 | bash | — | Web3 Wallets | Title | `Environment Variables` |
| 104 | bash | — | Web3 Wallets | Title | `GET /accounts/{id}/supported-regions (Bearer)` |

## guides/kyc/cardholder-activation.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 64 | json | — | Webhooks (Recommended) | Title | `cardholder-block-released Webhook Payload` |

## guides/kyc/immersve-conducted-kyc.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 47 | json | — | How It Works — Handle Any Actions | Title | `Example KYC Action-Required Prerequisite` |
| 69 | json | — | How It Works — Present Immersve Conducted KYC UI | Title | `Example follow_kyc_url Prerequisite` |
| 91 | json | — | How It Works — Wait for Background Checks | Title | `KYC Pending Prerequisite` |
| 106 | json | — | How It Works — Immersve Conducted KYC is Complete | Title | `KYC OK Prerequisite` |
| 124 | bash | — | Before You Get Started | Title | `Environment Variables` |
| 145 | bash | — | Calling Spending Prerequisites | Title | `POST /spending-prerequisites Request` |
| 160 | json | — | Calling Spending Prerequisites | Title | `POST /spending-prerequisites Response` |
| 257 | bash | — | Supply Contact Details (Optional) | Title | `PATCH /accounts/{id}/contact-details` |
| 284 | bash | — | Supply Expected Spend Amount (Optional) | Title | `POST /accounts/{id}/expected-spend-amount` |
| 312 | json | — | Supply Residential Address (Optional) — Structured Address | Title | `Structured Address Example` |
| 330 | json | — | Supply Residential Address (Optional) — Unstructured Address | Title | `Unstructured Address Example` |
| 346 | bash | — | Supply Residential Address (Optional) | Title | `POST /accounts/{id}/residential-addresses` |
| 396 | bash | — | Confirmation of KYC Completion | Title | `POST /spending-prerequisites Request` |
| 412 | json | — | Confirmation of KYC Completion | Title | `POST /spending-prerequisites Response` |
| 444 (inline) | — | — | Known Issues — Android embedded browser camera access issue | Skip — short fragment | Inline `mediaPlaybackRequiresUserGesture = false`; not a fenced block |

## guides/kyc/immersve-conducted-kyc.mdoc — paragraph-form alternative

Two action-response blocks are returned from the *same* prior request, so
paragraph framing may read better than a title:

- Line 91: prefer Paragraph — "The response then transitions to pending
  while background checks run:"
- Line 106: prefer Paragraph — "Once checks pass, the response settles on:"

## guides/kyc/kyc-spending-prerequisites.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 43 | json | — | New Cardholder | Title | `New Cardholder Prerequisite` |
| 60 | json | — | New Cardholder (Partner Conducted) | Title | `Submit KYC Statement Prerequisite` |
| 75 | json | — | Background Checks In-Progress | Title | `KYC Pending Prerequisite` |
| 84 | json | — | Background Checks Failed (Partner Conducted) | Title | `KYC Statement Resubmission Prerequisite` |
| 103 | json | — | KYC Requirements Completed | Title | `KYC OK Prerequisite` |
| 116 | json | — | Background Checks Permanently Failed | Title | `KYC Blocked Prerequisite` |

## guides/kyc/partner-conducted-kyc.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 56 | bash | — | Set up Environment Variables | Title | `Environment Variables` |
| 85 | bash | — | Supply Contact Details | Title | `PATCH /accounts/{id}/contact-details` |
| 114 | bash | — | Supply Expected Spend Amount | Title | `POST /accounts/{id}/expected-spend-amount` |
| 138 | bash | — | Upload Supporting Documents | Title | `POST /file-uploads` |
| 175 | bash | — | Submit Cardholder KYC Statement | Title | `PUT /accounts/{id}/partner-kyc-statement` |
| 231 | json | — | Date Of Birth | Title | `DOB Claim Example` |
| 245 | json | — | Full Name | Title | `Full Name Claim Example` |
| 263 | json | — | Residential Address | Title | `Structured Address Claim Example` |
| 292 | json | — | Passport | Title | `Passport Evidence Example` |
| 306 | json | — | Driver's License | Title | `Driver's License Evidence Example` |
| 322 | json | — | National ID | Title | `National ID Evidence Example` |
| 337 | json | — | Residence Permit | Title | `Residence Permit Evidence Example` |
| 364 | json | — | Structured Addresses | Title | `Structured Address Example` |
| 389 | json | — | Unstructured Addresses | Title | `Unstructured Address Example` |
| 426 | json | — | Attaching Supporting Documents | Title | `Attachments Array Example` |
| 457 | bash | — | Full Statement Example | Title | `Full KYC Statement Submission` |

## guides/reports/accessing-reconciliation-reports.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 25 | json | — | Funding Source Reporting | Title | `Funding Source Interaction Report Line Item` |
| 65 | json | — | Funding Source Reporting | Title | `Funding Source Report Line Item` |
| 102 | json | — | Payment Reporting | Title | `Payment Report Line Item` |
| 194 | — | — | Reconciling balances | Skip — short fragment | Pseudocode prose block; consider converting to inline list or leaving uncaptioned |
| 240 | bash | — | Download | Title | `GET /reports/{reportId}/download` |

## guides/webhooks/configuring-webhook-listeners.mdoc

| Line | Lang | Existing Title | Nearest Heading | Proposed Form | Proposed Caption |
| --- | --- | --- | --- | --- | --- |
| 54 | bash | — | Registering Webhook Listeners | Title | `POST /webhook-listeners` |
| 72 | bash | — | Subscribing to Topics | Title | `POST /webhook-listeners/{id}/subscribe` |
| 97 | bash | — | Testing Webhooks | Title | `POST /webhook-test-notifications` |
