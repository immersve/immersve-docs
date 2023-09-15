---
sidebar_position: 11
tags:
  - card
  - asset-activities
  - currency
  - funding-source
  - transactions
  - prerequisites
  - immersve-webhooks
  - simulator
---

# Monetary Units

## Minor Units Format

All monetary values must be formatted as an integer in the smallest denomination for the given currency.  
Fiat currencies are specified with an [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code.

* Two-decimal fiat currency (for example US Dollars): $13.14 USD, amount will be `1314`.
* Zero-decimal fiat currency (for example Japanese Yen): ¥1314 JPY, amount will be `1314`.
* Six-decimal crypto assets (for example USDC): $13.14 USDC, amount will be `13140000`.

#### Converting USDC to USD

USDC is pegged 1:1 for USD, the smallest possible unit of USDC represents one 10,000th of 1 USD cent.

Example: 5,000,000 USDC minor units = 500 USD minor units (cents)