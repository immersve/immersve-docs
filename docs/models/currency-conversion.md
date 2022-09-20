---
sidebar_position: 2
id: currency-conversion-model
title: CurrencyConversion
tags:
  - currency
  - conversion
  - usd
  - usdc
  - rate
  - fx
---

## Model

| Field             | Type   | Description                                                                     |
|-------------------|--------|---------------------------------------------------------------------------------|
| currency          | String | The currency to convert from                                                    |
| targetCurrency    | String | The target currency for the conversion                                          |
| convertedCurrency | String | The currency converted to                                                       |
| amount            | Number | The amount of `currency` to convert to destination currency                     |
| convertedAmount   | Number | The resulting amount of the conversion from `currency` into `convertedCurrency` |
| rate              | Number | The conversion rate from `currency` to `convertedCurrency`                      |