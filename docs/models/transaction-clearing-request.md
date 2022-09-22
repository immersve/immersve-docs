---
sidebar_position: 3
id: transaction-clearing-request-model
title: Transaction Clearing Request
tags:
  - transaction
  - real-time
  - funding
  - clearing
  - webhook
---

## Model

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
| transactionId         | String                      |                 |
| authTransactionId     | string                      |
| version               | Number                      |                 |
