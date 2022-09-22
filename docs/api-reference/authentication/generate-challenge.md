---
sidebar_position: 1
id: generate-challenge
title: Generate Challenge
---

# Generate Challenge

Generating the challenge is the first step in the process of getting the authentication token.

### Operations

1. Request a challenge to be signed

**POST** */siwe/generateChallenge*


```shell
curl --location --request POST 'https://app.immersve.com/siwe/generateChallenge' \
--header 'Content-Type: application/json' \
--data-raw '{
    "walletAddress": "123",
    "chainId": 123
}'
```

**PAYLOAD**:
[**ChallengeRequest**](../../models/challenge-request)

**RESPONSE**:
Plain text in EIP-4361 format

**EXAMPLE RESPONSE PAYLOAD**:

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