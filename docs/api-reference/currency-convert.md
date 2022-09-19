---
sidebar_position: 2
id: currency-convert
title: Currency Convert
tags:
  - symbol
  - currency
  - fiat
  - conversion
  - convert
  - settlement
  - usd
  - usdc
  - rate
  - fx
---

# Currency Convert

Immersve provides a private currency conversion API that is limited to authenticated users.
The API provides a way to convert fiat currency to USD.
It can be used to determine the amount of USDC required to pay for a transaction on a website that
does not support USD currency

### Models

**Conversion**

| Field             | Type   | Description                                                                     |
|-------------------|--------|---------------------------------------------------------------------------------|
| currency          | String | The currency to convert from                                                    |
| targetCurrency    | String | The target currency for the conversion                                          |
| convertedCurrency | String | The currency converted to                                                       |
| amount            | Number | The amount of `currency` to convert to destination currency                     |
| convertedAmount   | Number | The resulting amount of the conversion from `currency` into `convertedCurrency` |
| rate              | Number | The conversion rate from `currency` to `convertedCurrency`                      |

### Operations

1. Convert a source currency to a target currency using Mastercard rates

**GET** */api/currency/convert*?**currency={sourceCurrency}**&**targetCurrency={targetCurrency}**&**amount={amountToConvert}**


```console
curl https://api.immersve.com/api/currency/convert?currency=NZD&targetCurrency=USD&amount=1000 \
	-H "Authorization: Bearer $IMMERSVE_JWT_TOKEN"
```

**REQUIRED FIELDS**:

| Field          | Type   | Description                                                                     |
|----------------|--------|---------------------------------------------------------------------------------|
| currency       | String | The currency to convert from                                                    |
| amount         | Number | The amount of `currency` to convert to destination currency                     |


**OPTIONAL FIELDS**:

| Field          | Type   | Description                                                                     |
|----------------|--------|---------------------------------------------------------------------------------|
| targetCurrency | String | The target currency for the conversion. Defaults to `USD`						|
| fee            | Number | Optional fee added on top of the conversion.                      				|

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