---
sidebar_position: 3
id: transaction-authorization-request-model
title: Transaction Authorization Request
tags:
  - transaction
  - real-time
  - funding
  - authorization
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
| authTransactionId     | String                      |                 |
| version               | Number                      |                 |
