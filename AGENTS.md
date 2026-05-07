# Immersve Documentation

This file provides context for AI agents and coding assistants working with
this repository. It summarizes the content of the Immersve developer
documentation hosted at [docs.immersve.com](https://docs.immersve.com).

## What is Immersve?

Immersve is a multi-chain payment protocol and web3 Mastercard product. It
enables clients to deliver decentralized and centralized payment experiences,
allowing users to spend cryptocurrency via virtual Mastercard cards at any
merchant that accepts Mastercard.

## Integration Models

The most important decision when integrating with Immersve is choosing between
the **custodial** and **non-custodial** integration model. This choice
determines the authentication method, KYC mode, funding flow, and card issuing
approach for the entire integration.

### Non-Custodial

The end user retains control of their own wallet and funds. Authentication
requires the user to sign a challenge to prove ownership of their wallet
address. This can happen directly via Immersve login or the partner can call
Immersve APIs on the user's behalf (managing the user login themselves). KYC is
typically Immersve-conducted.

### Custodial

The partner (exchange, custodial wallet) has custody of user funds and manages
cardholder accounts on behalf of users. The partner authenticates via API keys,
deposits stablecoins into smart contracts on behalf of cardholders, and may
handle real-time payment authorization via webhooks. KYC can be either
partner-conducted or Immersve-conducted.

## Use Cases

Immersve serves five primary audiences:

- **Web3 Wallets** (non-custodial) — Non-custodial wallet developers embedding
  branded Mastercards into mobile or browser extension wallets. Users
  authenticate via message signing, deposit stablecoins into smart contracts,
  and spend directly from their wallet.
  - Docs: [Web3 Wallets](https://docs.immersve.com/use-cases/web3-wallets/)
- **DeFi Applications** (non-custodial) — DeFi projects enabling users to
  spend yields or holdings via Immersve Mastercards. Uses the same
  non-custodial flow as web3 wallets.
  - Docs: [DeFi Applications](https://docs.immersve.com/use-cases/defi-applications/)
- **Exchanges** (custodial) — Custodial exchanges letting users spend deposited
  funds. The exchange manages accounts on behalf of users, deposits into smart
  contracts, and handles payment authorization.
  - Docs: [Exchanges](https://docs.immersve.com/use-cases/exchanges/)
- **Custodial Wallets** (custodial) — Organizations acting as custodians,
  similar to exchanges. The custodian controls cardholder accounts and deposits
  stablecoins on behalf of users.
  - Docs: [Custodial Wallets](https://docs.immersve.com/use-cases/custodial-wallets/)
- **Blockchains** — Layer 1/2 blockchain developers wanting their chain
  supported for Immersve Mastercard funding. Requires smart contract
  implementation, infrastructure integration, message signing support, KYT
  screening, and a stablecoin settlement pathway.
  - Docs: [Blockchains](https://docs.immersve.com/use-cases/blockchains/)

## Core Concepts

### Card Payments 101

Immersve implements the Mastercard payment protocol with three main stages:

1. **Authorization** — Triggered when a cardholder taps at a terminal or pays
   online. Immersve validates the card and checks for sufficient funds.
   Authorized funds are held and unavailable for withdrawal.
2. **Clearing** — Finalizes a payment (e.g., after order fulfillment). The
   cleared amount may differ from the authorized amount. Uncleared
   authorizations expire after 7–30 days.
3. **Settlement** — Immersve pays cleared transactions to Mastercard. Partners
   do not participate in or have visibility of settlement.

Docs: [Card Payments 101](https://docs.immersve.com/guides/card-payments-101/)

### Payment Lifecycle

Payments transition through states: Initializing → Holding (if authorized) or
Reversed (if declined). Authorized payments eventually become Cleared or
Reversed. Multiple incremental authorization, clearing, and reversal messages
can adjust the held amount.

Docs: [Payment Lifecycle](https://docs.immersve.com/guides/payment-lifecycle/)

### Card Lifecycle

Virtual cards are active by default upon creation. States: active → blocked
(temporary, via freeze) → active (via unfreeze), or active → cancelled
(permanent). API operations: create-card, freeze-card, unfreeze-card,
cancel-card.

Docs: [Card Lifecycle](https://docs.immersve.com/guides/card-lifecycle/)

### Card Funding

A **Funding Source** is a record of available balance against which card
transactions are authorized. Key points:

- A Funding Source is owned by a cardholder and can be associated with many
  cards.
- Balance is eventually consistent with on-chain deposits/withdrawals, but may
  differ due to deposit limits or AML/CFT rules.
- A card requires an associated Funding Source to authorize transactions.
- **Deposits**: Can be made anytime via on-chain transfers to the
  deposit-holding address. Immersve APIs provide pre-built smart contract write
  transactions.
- **Withdrawals**: Two-stage process — obtain an Immersve-generated signature,
  then execute the withdrawal on-chain before expiry.

Docs: [Card Funding](https://docs.immersve.com/guides/card-funding/)

### Monetary Units

All monetary values are integers in the smallest denomination:

- Fiat (USD): $13.14 → `1314` (cents)
- USDC (6 decimals): $13.14 → `13140000`
- Binance USDT (18 decimals): $13.14 → `13140000000000000000`

Fiat currencies use ISO 4217 codes. USDC is pegged 1:1 to USD; 5,000,000 USDC
minor units = 500 USD cents.

Docs: [Monetary Units](https://docs.immersve.com/guides/monetary-units/)

### Supported Regions

Users must reside in a supported region to order and use Immersve cards. The
list of supported regions varies per partner and changes over time. Contact
Immersve to determine which regions are available for your integration. Once
integrated, use the `get-supported-regions` endpoint to check which regions
are enabled for your partner account.

Docs: [Supported Regions](https://docs.immersve.com/guides/regions/)

## Authentication

Two authentication methods:

### API Key Authentication (Backend / Custodial)

For server-to-server integrations. Uses `x-api-key` and `x-api-secret`
headers, with optional `x-account-id` for targeting specific accounts.

### User Session Authentication (Client-side / Non-custodial)

For client-side integrations using JWT access tokens in the
`Authorization: Bearer` header. Login flow:

1. Call `login-init` with wallet address and signing scheme
2. Sign the returned challenge message with the wallet
3. Call `login-complete` with the signature to receive access and refresh tokens

Access tokens expire in ~20 minutes. Refresh tokens last ~30 days and can be
used to obtain new access tokens.

Supported login methods: SIWE (Sign-In With Ethereum), Algorand message
signing, XRPL/Xahau transaction signing.

### Roles and Permissions

- **account-owner**: Full control over own account (for self-custodial users)
- **account-admin**: Manages partner resources (apps, API keys, funding channels)
- **card-issuer**: Manages cardholder resources on behalf of users

Docs: [Authentication](https://docs.immersve.com/guides/authentication/)

## KYC (Know Your Customer)

KYC is required for all individuals before they can issue and use Immersve
cards.

### Two KYC Modes

1. **Partner-Conducted KYC** — The partner collects and verifies identity
   information, then submits a KYC statement to Immersve. Requires agreement
   with Immersve and is not supported in all regions. Accepted documents:
   Passport, Driver's License, National ID, Residence Permit.
2. **Immersve-Conducted KYC** — The partner directs users to an Immersve-hosted
   KYC UI. Recommended for partners not obligated to perform their own KYC.
   Optional steps (region, contact channels, expected spend, residential
   address) can be pre-supplied via API to streamline the flow.

### Detecting KYC Completion

- **Backend Integration (recommended)**: Configure webhooks and wait for
  `kyc-succeeded` event.
- **Direct Integration**: Poll the `spending-prerequisites` endpoint at
  reasonable intervals (5–10 seconds).

### KYC Prerequisite Actions

Various actions may be required before a cardholder can spend. See the
[KYC Spending Prerequisites](https://docs.immersve.com/guides/kyc-spending-prerequisites/)
guide for the full list of actions, call-to-action hints, and reason codes.

Docs:
- [KYC Introduction](https://docs.immersve.com/guides/kyc/)
- [Partner-Conducted KYC](https://docs.immersve.com/guides/partner-conducted-kyc/)
- [Immersve-Conducted KYC](https://docs.immersve.com/guides/immersve-conducted-kyc/)
- [Detecting KYC Completion](https://docs.immersve.com/guides/detecting-kyc-completion/)
- [KYC Spending Prerequisites](https://docs.immersve.com/guides/kyc-spending-prerequisites/)


## Supported Chains

| Chain | Deposit Variant | Deposit-Based | Approval-Based | Custodial |
|---|---|---|---|---|
| Polygon | Universal | Yes | No | No |
| Arbitrum | Universal | Yes | Yes | Yes |
| Base | Universal | Yes | No | Yes |
| Ethereum | Universal | Yes | No | No |
| Sei | Universal | Yes | Yes | Yes |
| BNB Smart Chain | Universal | Yes | Yes | No |
| Algorand | Flexi | Yes | No | No |

Docs: [Supported Chains](https://docs.immersve.com/guides/supported-chains/)

## Supported Tokens

- **USDC** — Supported on Polygon, Arbitrum, Base, Ethereum, Sei, Algorand (6
  decimals)
- **USDT** — Supported on BNB Smart Chain (18 decimals)

Docs: [Supported Tokens](https://docs.immersve.com/guides/supported-tokens/)

## Funding Protocols

### Protocol Variants

- **Approval-Based** — Cardholder approves the Immersve smart contract to spend
  tokens on their behalf. No deposit required.
- **Deposit-Based** — Cardholder deposits stablecoins into an Immersve smart
  contract. Withdrawals require an Immersve-signed approval.
- **Custodial** — Partner maintains a pooled on-chain float and handles
  real-time payment authorization via webhooks.

### Protocol Implementations

- **Universal EVM** — For EVM-compatible chains. Uses a master "Funds Manager"
  contract with many "Funds Storage" contracts. Supports both approval-based
  and deposit-based funding.
- **Flexi Algorand** — For Algorand. Uses a master contract with Partner
  Channel and Card Fund contracts. Card Fund contracts are cardholder-scoped
  with permissionless withdrawals.
- **Custodial Protocol** — Enables real-time payment authorizations delegated to
  the partner via webhook-based payment delegation. See the
  [Custodial Protocol docs](https://docs.immersve.com/guides/custodial-funding-protocol/)
  for message types and webhook specifications.
- **Simulator** — Test-only deposit-based protocol for testing without
  blockchain interaction. Only works with the test environment.

### Funding Types

A Funding Type is a configuration of a Funding Protocol for a particular
network and token. It is the primary discriminator when creating a Funding
Channel. Available types include combinations of chains (Polygon, Arbitrum,
Base, Ethereum, Sei, BSC, Algorand) with tokens (USDC, USDT) and environments
(mainnet, testnet).

Funding type definitions are stored as structured data files at
`imsv-docs-astro/src/content/funding-types/`. Each file specifies the
protocol, network, and token in its frontmatter.

Related data files that define the networks and tokens referenced by funding
types:

- **Networks** (`imsv-docs-astro/src/content/networks/`) — Chain metadata
  including chain identifier, network type (mainnet/testnet), block explorer
  URL, and deployed protocol contract addresses.
- **Network Tokens** (`imsv-docs-astro/src/content/network-tokens/`) — Token
  contract addresses per chain.

Docs:
- [Funding Protocols](https://docs.immersve.com/guides/funding-protocols/)
- [Funding Types](https://docs.immersve.com/guides/funding-types/)
- [Universal EVM](https://docs.immersve.com/guides/universal-evm-funding-protocol/)
- [Algorand Funding Protocol](https://docs.immersve.com/guides/algorand-funding-protocol/)
- [Custodial Protocol](https://docs.immersve.com/guides/custodial-funding-protocol/)
- [Simulator](https://docs.immersve.com/guides/simulator-funding-protocol/)


## Card Issuing Integration

### Non-Custodial (Web3 Wallets, DeFi)

1. User authenticates via wallet message signing
2. Select region and create funding source
3. Complete KYC (Immersve-conducted recommended)
4. Create virtual card
5. Deposit funds via smart contract interaction
6. Verify balance and make payments

Docs: [Web3 Wallet Card Issuing Integration](https://docs.immersve.com/guides/web3-wallet-card-issuing-integration/)

### Custodial (Exchanges, Custodial Wallets)

1. Set up partner account with API keys and webhooks
2. Register funding channel and fund the pool
3. Per cardholder: create account, register funding source, collect KYC/contact
   details
4. Create card and execute payments
5. Immersve settles cleared payments with Mastercard

Docs:
- [Custodial Card Issuing Integration](https://docs.immersve.com/guides/custodial-card-issuing-integration/)
- [Custodial On-Chain Card Issuing Integration](https://docs.immersve.com/guides/custodial-on-chain-card-issuing-integration/)


### Secure Card Information

Card details (PAN, CVV, expiry) are retrieved via a two-step process: generate
a token, then exchange it via a callback URL. PCI-DSS compliance is required
for handling card data.

Docs: [Fetching Secure Card Information](https://docs.immersve.com/guides/fetching-secure-card-information/)

### Digital Wallets (Apple Pay / Google Pay)

Cards can be added to XPay wallets. A DPAN (Device PAN) is provisioned, which
is different from the primary card PAN. Users can add cards via direct
copy/paste or camera scanning.

Docs: [Add Card to XPay Wallet](https://docs.immersve.com/guides/add-card-to-xpay-wallet/)

### Legal Documents

Onboarding requires presenting: General Terms of Use, Privacy Policy, and
Disclosures. All must be fetched dynamically via the `get-supported-regions`
endpoint.

Docs: [Presenting Legal Documents](https://docs.immersve.com/guides/presenting-legal-documents/)

## Webhooks

HTTPS POST requests to registered listener URLs. Setup:

1. Create a webhook listener with a URL
2. Subscribe the listener to topics (e.g., `kyc-succeeded`)
3. Test with the test notification endpoint

Docs: [Configuring Webhook Listeners](https://docs.immersve.com/guides/configuring-webhook-listeners/)

## API Overview

The Immersve API base URL must be configured as an environment variable. Use
the appropriate URL for your target environment:

- **Test**: `https://test.immersve.com` — for development and testing
- **Production**: `https://api.immersve.com` — for live integrations

Full API reference: [API Reference](https://docs.immersve.com/api-reference/)
OpenAPI spec: `imsv-docs-docusaurus/openapi/immersve.yaml`

### Endpoint Categories

- **Authentication**: signup, login-init, login-complete, logout, token
  exchange, SIWE challenge/login
- **Accounts**: create, get details
- **Cards**: create, list, get, set PIN, cancel, freeze, unfreeze, get PAN
  token
- **Transactions**: get transaction, list by account, payment notifications
- **Funding Sources**: list, get, create, get interactions, create withdrawal
  intent
- **Funding Channels**: get, create, list by account
- **KYC**: submit/retrieve KYC statement, get KYC profile, expected spend
  amount, residential addresses
- **Regions**: get supported regions
- **Currencies**: list, convert
- **Spending Prerequisites**: get prerequisites for spending readiness
- **Contact Details**: get, update
- **Webhooks**: create/get/delete listeners, subscribe/unsubscribe topics, test
  notifications
- **Support**: create support session
- **Files**: upload, get upload details
- **Simulator (test only)**: authorize, clear, reverse transactions; execute
  deposits/withdrawals
- **Fault Injection (test only)**: list/set/delete fault configurations

### Key HTTP Status Codes

- 200: Success
- 400: Malformed request
- 401: Missing/expired/invalid credentials
- 403: Permission denied or business rule violation (may include errorCode)
- 404: Not found
- 429: Rate limited (2000 req/min general, 500 req/min for
  spending-prerequisites)
- 5xx: Server error

Docs: [HTTP Status Codes](https://docs.immersve.com/guides/http-status-codes/)

## Testing

- **Test environment**: `https://test.immersve.com`
- **Test tokens**: Obtain USDC from Circle's testnet faucet
- **Simulator protocol**: Test card funding without blockchain interaction
- **KYC in test**: For partner-conducted KYC, use middleName="passall" and age
  21–64. For Immersve-conducted KYC, use provided mock test documents or real
  documents.
- **Sandbox credentials**: A public sandbox account is available with
  pre-configured API keys, funding channels, and card program IDs.

Docs:
- [Obtaining Test Tokens](https://docs.immersve.com/guides/obtaining-test-tokens/)
- [Passing KYC in Test](https://docs.immersve.com/guides/pass-kyc-in-testmode/)
- [Public Sandbox Account](https://docs.immersve.com/resources/public-sandbox-account/)


## Resources

- **Postman Collection**: Pre-built API request collection with two
  sub-collections (API Endpoints and Custodial Integration Guide).
  Docs: [Postman Collection](https://docs.immersve.com/resources/postman-collection/)
- **Smart Contracts**: Deployed contract addresses listed per chain in the
  supported chains documentation.
  Docs: [Smart Contracts](https://docs.immersve.com/resources/smart-contracts/)
- **Public Sandbox Account**: Ready-to-use test credentials including API keys,
  funding channel IDs, and card program ID.
  Docs: [Public Sandbox Account](https://docs.immersve.com/resources/public-sandbox-account/)
