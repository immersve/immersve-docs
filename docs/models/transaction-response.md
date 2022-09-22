---
sidebar_position: 4
id: transaction-response-model
title: Transaction Response
tags:
  - transaction
  - real-time
  - funding
  - clearing
  - authorization
  - reversal
  - webhook
---

## Model

| Field                     | Type    | Description                                                                               |
| ------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| responseCode              | String  | 0:success, rest of codes for failure                                                      |
| message                   | String  | relevant message on response like insufficientFunds, riskRule error or specific exception |
| externalReference         | String  | relevant reference                                                                        |
| returnAfterBalanceFromJIT | Boolean | to get balance from third party when enabled or else customer wallet                      |
