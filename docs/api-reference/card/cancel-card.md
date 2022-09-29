---
sidebar_position: 3
id: cancel-card
title: Cancel card
tags:
  - card
---

# Cancel card

Immersve provides a private cancel card API that is limited to authenticated users.
The APIs will cancel the card.

### Models

[**Card**](../../models/card-model)

### Operations

1. Cancel the card
 
**PUT** */api/cards/orders/{card-id}*

```console
curl --location --request PUT 'https://api.immersve.com//api/cards/orders/{card-id}' \
	--header "Authorization: Bearer $IMMERSVE_JWT_TOKEN"
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
    "state": "cancelled"
}

```