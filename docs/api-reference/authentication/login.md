---
sidebar_position: 2
id: login
title: Login
tags:
  - login
---

# Login

The login endpoint returns the authentication token in exchange for the previously issued challenge signed with the users wallet

### Operations

1. Exchange signed challenge for the authentication token

**POST** */siwe/login*

```shell
curl 'https://app.immersve.com/siwe/login' \
--header 'content-type: application/json' \
--data-raw '{
    "message":"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nBy connecting your wallet and using Immersve, you agree to our Terms of services and Privacy Policy\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 137\nNonce: ocT89WH9QOmeC6nSF\nIssued At: 2022-09-22T21:03:01.064Z","signature":"0x4370802f2b4181bf904eb7f34cf928e2b6f32bb7301cf80f4e559989df3249ab4f21548e97fe27ffcb2a7539c9308442865fe8c524b5c936314d7d958fcbc8931b"
}'
```

**PAYLOAD**: [**LoginRequest**](../../models/login-request)

**RESPONSE**: [**LoginResponse**](../../models/login-response)


**EXAMPLE RESPONSE PAYLOAD**:

```json
{
    "token": "...",
}

```