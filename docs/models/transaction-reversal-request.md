---
sidebar_position: 5
id: transaction-reversal-request-model
title: Transaction Reversal
tags:
  - transaction
  - real-time
  - funding
  - reversal
  - webhook
---

## Schema

| Field                 | Type                        | Description     |
| --------------------- | --------------------------- | --------------- |
| currency              | String                      |                 |
| amount                | Number                      |                 |
| customerNumber        | String                      |                 |
| cardNumber            | String                      |                 |
| forcePost             | Boolean                     |                 |
| transactionSourceCode | Number                      |                 |
| transactionTypeCode   | Number                      |                 |
| feeAmount             | Number                      |                 |
| paymentContext        | { [key: String] \| String } |                 |
| rawRequest            | String                      |                 |
| rawReferenceNumber    | String                      |                 |
| partnerName?          | String                      |                 |
| programName?          | String                      |                 |
| retrievalId?          | String                      |                 |
| releaseTime?          | Number                      | UNIX timestamp  |
| createdAt             | String                      | Date ISO string |
| modifiedAt            | String                      | Date ISO string |
| originalTransactionId | String                      |                 |
| reversalTransactionId | String                      |                 |
| version               | Number                      |                 |
