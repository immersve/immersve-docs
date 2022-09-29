---
sidebar_position: 2
id: generate-card-pan-token
title: Generate card pan token
tags:
  - card
---

# Generate card pan token

Immersve provides a private generate card pan token API that is limited to authenticated users.
The APIs generate a token to get the card's detail (full pan and cvv2) from E6 mobile API.

### Models

[**Token**](../../models/token-model)

### Operations

1. Generate a token to get card's detail
 
**POST** */api/cards/{card-id}/panToken*

```console
curl --location --request POST 'https://api.immersve.com/api/cards/{card-id}/panToken' \
	--header "Authorization: Bearer $IMMERSVE_JWT_TOKEN"
```
**RESPONSE**:

> **Schema**:
>
> [**Token**](../../models/currency-model)


**EXAMPLE RESPONSE PAYLOAD**:

```json
{
    "tokenId": "1E2426184B3676720F36E43A22649AFF-1000041153",
}

```

2. Get the card's details from E6 mobile API

**POST** *E6_MOBILE_BASE_URL/v1/auth/pan/token/validate*

```console
curl --location --request POST 'https://E6_MOBILE_BASE_URL/v1/auth/pan/token/validate' \
    --data-raw '{
        "tokenId":"A token got from above operation"
    }'
```
**RESPONSE**:

> **Schema**:
>
> The schema is defined in external provider's website
> The response must contains fields: pan and cvv2


**EXAMPLE RESPONSE PAYLOAD**:

```json
{
    "creationTime": 1663888904887,
    "modifiedTime": 1663888904887,
    "id": "1F63FE470D29ABC5C727570C1AD42B82-1000041003",
    "cardNumber": "5713851215688026472",
    "panFirst6": "424211",
    "panLast4": "0528",
    "type": "virtual",
    "state": "activated",
    "sequenceNumber": 1,
    "cardProfileName": "Test card",
    "pinFailCount": 0,
    "reissue": false,
    "expiry": "202409",
    "customerNumber": "10000021250574",
    "embossedName": "CARDHOLDER/IMMERSVE",
    "programName": "vcc",
    "pan": "<the full pan of the card>",
    "cvv2": "<the cvv2 of the card>"
}
```

