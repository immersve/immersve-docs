---
sidebar_position: 3
tags:
  - reports
  - custodial
  - non-custodial
---

# Authorization Reports

The authorization report can be used to review all card purchase authorizations for a given period.

The report is in CSV format.

- The file name format is `{reportId}_authorization_{startDate}_{endDate}.csv`
- `reportId` is the unique identifier for the report.
- `startDate` (inclusive) and `endDate` (exclusive) represent the time period being reported on.


|       Field        |                                                                                  Description                                                                                  |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cardToken          | Unique identifier of the [card](/api-reference/card).                                                                                                                         |
| transactionId      | Unique identifier of the associated card [transaction](/api-reference/transactions).                                                                                          |
| authorizationId    | Unique identifier of the original authorization request received via the card scheme network.                                                                                 |
| authorizationCode  | Source of the [transaction](/api-reference/transactions). See [Authorization Codes](#authorization-codes).                                                                    |
| transactionType    | [ISO 8583](https://www.iso.org/obp/ui/#iso:std:iso:8583:-1:ed-1:v1:en) message class. This is a messaging standard for payments initiated with a [card](/api-reference/card). |
| status             | Status of the [transaction](/api-reference/transactions). Valid values are `approved` or `declined`.                                                                          |
| merchantCurrency   | Local currency of the country where the [transaction](/api-reference/transactions) was processed.                                                                             |
| merchantAmount     | Amount of the [transaction](/api-reference/transactions), in minor units of the local currency.                                                                               |
| billingCurrency    | Currency of the card holder's account balance.                                                                                                                                |
| billingAmount      | Amount of the [transaction](/api-reference/transactions), in minor units of the billing currency.                                                                             |
| settlementCurrency | Currency the card issuer selects to be paid in.                                                                                                                               |
| settlementAmount   | Amount to be settled, in minor units of the settlement currency. This amount may include fees.                                                                                |
| exchangeRate       | Exchange rate applied between the merchant amount and the billing amount.                                                                                                     |
| accountId          | Unique identifier of the [account](/api-reference/accounts-custodial) which the [card](/api-reference/card) belongs to.                                                       |
| merchantId         | Unique identifier of the merchant.                                                                                                                                            |
| merchantName       | Name of the merchant.                                                                                                                                                         |
| merchantCity       | City of the merchant.                                                                                                                                                         |
| merchantCountry    | Country of the merchant.                                                                                                                                                      |
| createdAt          | When the [transaction](/api-reference/transactions) was created, expressed in UNIX epoch time.                                                                                |
| approvedAt         | When the [transaction](/api-reference/transactions) was approved, expressed in UNIX epoch time.                                                                               |
| mcc                | Four-digit number listed in [ISO 18245](https://www.iso.org/obp/ui/#iso:std:iso:18245:ed-2:v1:en). Used to classify a business by the types of goods or services it provides. |
| channel            | Channel used to initialize the [transaction](/api-reference/transactions). Examples include `ATM`, and `Online`.                                                              |

## Authorization Codes

| Code |    Description    |
| ---- | ----------------- |
| 0    | Unknown           |
| 1    | InWalletPOS       |
| 2    | OutOfWalletPOS    |
| 3    | InWalletATM       |
| 4    | OutOfWalletATM    |
| 5    | Online            |
| 6    | Partner           |
| 7    | Customer          |
| 8    | Internal          |
| 9    | Static            |
| 10   | MobileCommerce    |
| 11   | OnUs              |
| 12   | OutOfWalletOnline |

## Example

`82cc0b217d3b850169286b0603e6a756_authorization_2023-03-28T00:00:00.000Z_2023-03-28T00:00:00.000Z.csv`

```
  cardToken,transactionId,authorizationId,authorizationCode,transactionType,status,merchantCurrency,merchantAmount,billingCurrency,billingAmount,settlementCurrency,settlementAmount,exchangeRate,accountId,merchantId,merchantName,merchantCity,merchantCountry,createdAt,approvedAt,mcc,channel
  6c474aa7a5dc45bff721b5a207cf0f47,1000000318081,1000000318080,5,0100,approved,USD,10000,NZD,16172,USDC,100000000,1.6172000000,225d85e65495722bf6517ea0ba0d6f56,47e4d565f99457119fd9c672f6edf0aa,Family Clothing Store,Auckland,NZL,2023-03-28T23:23:22.958Z,2023-03-28T23:23:24.533Z,5651,Online
```