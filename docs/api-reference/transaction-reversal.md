---
sidebar_position: 5
id: transaction-reversal
title: Transaction Reversal
tags:
  - transaction
  - real-time
  - funding
  - reversal
  - webhook
---

# Currency Convert

Immersve provides a private currency conversion API that is limited to authenticated users.
The API provides a way to convert fiat currency to USD.
It can be used to determine the amount of USDC required to pay for a transaction on a website that
does not support USD currency

### Models

[**Currency Conversion**](../models/currency-conversion-model)

### Operations

1. Convert a source currency to a target currency using Mastercard rates

**GET** _/api/currency/convert_?**_currency={sourceCurrency}&targetCurrency={targetCurrency}&amount={amountToConvert}&fee={extraFee}_**

```bash
curl https://api.immersve.com/api/currency/convert?currency=NZD&targetCurrency=USD&amount=1000 \
	-H "Authorization: Bearer $IMMERSVE_JWT_TOKEN"
```

**PARAMETERS**:

| Field          | Type   | Required | Description                                                          |
| -------------- | ------ | :------: | -------------------------------------------------------------------- |
| currency       | String |    X     | The currency alpha code to convert from                              |
| amount         | Number |    X     | The amount of `currency` to convert to destination currency          |
| targetCurrency | String |          | The target currency alpha code for the conversion. Defaults to `USD` |
| fee            | Number |          | Optional fee added on top of the conversion. Defaults to `0`         |

**RESPONSE**:

> **Schema**:
>
> [**Currency Conversion**](../models/currency-conversion-model)

**EXAMPLE RESPONSE PAYLOAD**:

```json
{
  "currency": "NZD",
  "convertedCurrency": "USD",
  "amount": 1000,
  "convertedAmount": 696.2285,
  "rate": 0.6962285
}
```
