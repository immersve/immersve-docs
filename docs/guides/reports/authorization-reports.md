---
sidebar_position: 3
tags:
  - reports
  - custodial
  - non-custodial
---

# Authorization Reports

The authorization report can be used to review all card purchase authorizations for a given period. 

## Schema

|       Field        |                                                    Description                                                    |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| cardToken          | Unique identifier of the Card.                                                                                    |
| transactionId      | Unique identifier of the associated Card transaction.                                                             |
| authorizationId    | Unique identifier of the original authorization request received via the card scheme network.                     |
| authorizationCode  | Source of the transaction. See [Authorization Codes](/guides/reports/authorization-codes).                        |
| transactionType    | ISO 8583 message class. This is a messaging standard for payments initiated with a financial transaction card.    |
| status             | Status of the transaction. Valid values are `approved` or `declined`.                                             |
| merchantCurrency   | Local currency of the country where the transaction was processed.                                                |
| merchantAmount     | Amount of the transaction, in minor units of the local currency.                                                  |
| billingCurrency    | Currency Immersve transacts in.                                                                                   |
| billingAmount      | Amount of the transaction, in minor units of the billing currency.                                                |
| settlementCurrency | Currency a vendor selects to be paid in.                                                                          |
| settlementAmount   | Amount to be settled, in minor units of the settlement currency. This amount may include fees.                    |
| exchangeRate       | Exchange rate applied between the merchant amount and the billing amount.                                         |
| accountId          | Unique identifier of the Account which the Card belongs to.                                                       |
| merchantId         | Unique identifier of the Merchant.                                                                                |
| merchantName       | Name of the Merchant.                                                                                             |
| merchantCity       | City of the Merchant.                                                                                             |
| merchantCountry    | Country of the Merchant.                                                                                          |
| createdAt          | When the Transaction was created, expressed in UNIX epoch time.                                                   |
| approvedAt         | When the Transaction was approved, expressed in UNIX epoch time.                                                  |
| mcc                | Four-digit number listed in ISO 18245. Used to classify a business by the types of goods or services it provides. |
| channel            | Channel used to initialize the Transaction. Examples include `ATM`, and `Online`.                                 |

## Example

`82cc0b217d3b850169286b0603e6a756_authorization_2023-03-28T00:00:00.000Z_2023-03-28T00:00:00.000Z.csv`

```
  cardToken,transactionId,authorizationId,authorizationCode,transactionType,status,merchantCurrency,merchantAmount,billingCurrency,billingAmount,settlementCurrency,settlementAmount,exchangeRate,accountId,merchantId,merchantName,merchantCity,merchantCountry,createdAt,approvedAt,mcc,channel
  6c474aa7a5dc45bff721b5a207cf0f47,1000000318081,1000000318080,5,0100,approved,USD,10000,NZD,16172,USDC,100000000,1.6172000000,225d85e65495722bf6517ea0ba0d6f56,47e4d565f99457119fd9c672f6edf0aa,Family Clothing Store,Auckland,NZL,2023-03-28T23:23:22.958Z,2023-03-28T23:23:24.533Z,5651,Online
```