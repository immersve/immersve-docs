---
sidebar_position: 1
tags:
  - authentication
  - sign-in
  - sign-up
  - login
  - non-custodial
---

# Authentication

Accounts are identified by way of blockchain addresses. Proof of ownership of an address is based upon a process of authentication by way of verification of [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) challenges signed by the private key underlying an address. Upon successful authentication, Immersve will issue an access token for subsequent use in interactions with the Immersve API.

Subsequent requests for protected resources from the Immersve API may be authenticated by supplying the access token in the `Authorization` header.

### Login Flow

```mermaid
sequenceDiagram
    participant W as Web3 Wallet
    participant C as API Client
    participant I as Immersve
    C->>+I: Generate challenge
    I-->>-C: Challenge
    C->>W: Request to sign a message
    W-->>C: Signature
    C->>+I: Send challenge + signature
    I-->>-C: Return access token
	  note over C: Access token will be used for subsequent requests for protected resources from the Immersve API
```

1. [Generate a challenge](/api-reference/generate-challenge). The response is an [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) message in plain text to be signed by the wallet. For example:

   ```
   app.immersve.com wants you to sign in with your Ethereum account:
   0xA3058369d6A481B1ff08F62B352409c3D709De9b

   Sign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.

   URI: https://app.immersve.com
   Version: 1
   Chain ID: 1
   Nonce: 2hFm7TDbZmerUgnrJ
   Issued At: 2022-08-11T22:29:48.244Z
   ```

2. Invoke the wallet's message signing capability to get a signature for the given challenge message. The specific nature of the invocation of the message signing function is specific to the particular wallet in use.

   For a quick start fork our sandbox on [Replit](https://replit.com/@Immersve/Authentication-Sign-Challenge?v=1) and use your private key to create a new wallet and sign the generated challenge.

3. [Submit the signed challenge along with the signature](/api-reference/login) to get the access token.
4. The access token should be used for subsequent requests for protected resources from the Immersve API by supplying it in the `Authorization` header.