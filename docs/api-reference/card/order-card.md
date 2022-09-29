---
sidebar_position: 1
id: order-card
title: Order a card
tags:
  - card
---

# Order card

Immersve provides a private order card API that is limited to authenticated users.
The APIs will create a card for current user.

### Models

[**Card**](../../models/card-model)

### Operations

1. Create a card by Immersve

**POST** */api/cards/orders*

```console
curl --location --request POST 'https://api.immersve.com/api/cards/orders' \
	--header 'Authorization: Bearer $IMMERSVE_JWT_TOKEN' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "transactionHash":"the hash of transaction transferring USDC to Immersve wallet address "
    }'
```
**RESPONSE**:

> **Schema**:
>
> [**Card**](../../models/card-model)


**EXAMPLE RESPONSE PAYLOAD**:

```json
{
    "id": "91ad6fea3b52ca58d60d7fd310f789ec",
    "externalId": "8649543161870318367",
    "expiry": "202409",
    "accountId": "057aa15913a57f50577234c8426534c0",
    "createdAt": "2022-09-23T03:52:36.909Z",
    "modifiedAt": "2022-09-23T03:52:36.909Z",
    "version": 1,
    "type": "virtual",
    "state": "active"
}

```