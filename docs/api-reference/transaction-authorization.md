---
sidebar_position: 3
id: transaction-authorization
title: Transaction Authorization
tags:
  - transaction
  - real-time
  - funding
  - authorization
  - webhook
---

# Authorizing Real-time funding

When you want to authorize a Real-time funding (RTF) transaction using the PUT authorizations webhook, this call includes the amount, currency, and the customer external reference for the transaction and the transaction's authorization.

### Models

[**Transaction Authorization**](../models/transaction-authorization)

### Operations

1. Authorize Real-Time Funding

**PUT** _/api/webhooks/authorizations_\*\*

```bash
curl -X PUT https://api.immersve.com//api/webhooks/authorizations \
	-H "Authorization: Bearer $IMMERSVE_JWT_TOKEN"
  -d '{
  "type" : "authorization",
  "currency" : "GBP",
  "amount" : 37.55,
  "customerNumber" : "10000060570254",
  "cardNumber" : "3041994786611926174",
  "partnerName" : "rtf_test_partner",
  "programName" : "rtf_test_program",
  "forcePost" : false,
  "transactionSourceCode" : 2,
  "transactionTypeCode" : 3,
  "retrievalId" : "1000000010021",
  "releaseTime" : 1647810266707,
  "feeAmount" : 0.00,
  "partnerTransactionType" : "load",
  "paymentContext" : {
    "transactionSource" : "OutOfWalletPOS",
    "cardAcceptorId" : "ABC123TESTMTF19",
    "complianceAmount" : "-37.55",
    "acquiringInstitutionId" : "999901",
    "mcc" : "5311",
    "authorization" : "true",
    "referenceNumber" : "010000000403151604250000099990100000000000",
    "billingCurrency" : "GBP",
    "authReleasedTime" : "0",
    "complianceCurrency" : "GBP",
    "cardAcceptorName" : "Department Store",
    "posCondition" : "0000000000",
    "billingAmount" : "37.55",
    "authCode" : "209500",
    "cardAcceptorTerminalId" : "MTF TEST",
    "cardAcceptorCountryCode" : "USA",
    "settlementDate" : "20220315",
    "acquirerAmount" : "56.33",
    "transactionType" : "purchase",
    "cardAcceptorCity" : "Las Vegas",
    "reversal" : "false",
    "originalReferenceNumber" : "MRW011B630315",
    "acquirerCurrency" : "USD",
    "forcePost" : "false",
    "posEntryMode" : "072",
    "cardPresent" : "true"
  },
  "rawRequest" : "<isomsg>
  <field id=\"0\" value=\"0100\"/>
  <field id=\"2\" value=\"*\"/>
  <field id=\"3\" value=\"000000\"/>
  <field id=\"4\" value=\"000000005633\"/>
  <field id=\"6\" value=\"000000003755\"/>
  <field id=\"7\" value=\"0315160425\"/>
  <field id=\"10\" value=\"76666000\"/>
  <field id=\"11\" value=\"000004\"/>
  <field id=\"12\" value=\"160425\"/>
  <field id=\"13\" value=\"0315\"/>
  <field id=\"15\" value=\"0315\"/>
  <field id=\"16\" value=\"0315\"/>
  <field id=\"18\" value=\"5311\"/>
  <field id=\"22\" value=\"072\"/>
  <field id=\"23\" value=\"001\"/>
  <field id=\"32\" value=\"999901\"/>
  <field id=\"37\" value=\"085037100011\"/>
  <field id=\"41\" value=\"MTF TEST\"/>
  <field id=\"42\" value=\"ABC123TESTMTF19\"/>
  <field id=\"43\" value=\"Department Store       Las Vegas         USA \"/>
  <field id=\"49\" value=\"840\"/>
  <field id=\"51\" value=\"826\"/>
  <field id=\"55\" value=\"5F2A020840820258008407A0000000041010950500000000009A032203159C01009F02060000000056339F10120110250000044000DAC100000000000000009F1A0208409F2608F74B81A9433809289F2701809F3303E0E8E89F34034103029F360201409F37042B65FF1F\" type=\"binary\"/>
  <field id=\"56\" value=\"013301295001ABCDEFGHIJ123456789012345\"/>
  <field id=\"61\" value=\"000000000030084011111-1111\"/>
  <field id=\"63\" value=\"MRW011B63\"/>
  </isomsg>",
  "rawReferenceNumber" : "010000000403151604250000099990100000000000",
  "authTransactionId" : "1000000010021"
}'
```

**RESPONSE**:

> **Schema**:
>
> [**Transaction Response**](../models/transaction-response-model)

**EXAMPLE RESPONSE PAYLOAD**:

```json
{
  "responseCode": "0", // 0:success, rest of codes for failure
  "message": null, // relevant message on response like insufficientFunds, riskRule error or specific exception
  "externalReference": null, // relevant reference
  "returnAfterBalanceFromJIT": false, // to get balance from third party when enabled or else customer wallet
  "afterBalances": [
    {
      // Array of the after balance
      "amount": 0.0, // Amount of the after balance of the account
      "currencyCode": "GBP" // Currency code of the after balance of the account
    }
  ]
}
```
