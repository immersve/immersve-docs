---
sidebar_position: 1
id: currency-list
title: Currency List
tags:
  - currency
  - symbol
  - fiat
  - conversion
  - list
  - settlement
---

# Currency List

Immersve provides a private currency conversion API that is limited to authenticated users.
The APIs provide the list of currencies available for conversion.

### Models

[**Currency**](../models/currency-model)

### Operations

1. Get list of supported currencies by Immersve

**GET** */api/currencies*

```console
curl https://api.immersve.com/api/currencies \
	-H "Authorization: Bearer $IMMERSVE_JWT_TOKEN"
```
**RESPONSE**:

> **Schema**:
>
> Array<[**Currency**](../models/currency-model)>


**EXAMPLE RESPONSE PAYLOAD**:

```json
[
	{
        "symbol": "KYD",
        "label": "CAYMAN ISLAND DOLLAR"
    },{
        "symbol": "JPY",
        "label": "JAPANESE YEN"
    },{
        "symbol": "NZD",
        "label": "NEW ZEALAND DOLLAR"
    },{
        "symbol": "USD",
        "label": "UNITED STATES DOLLAR"
    }
]

```