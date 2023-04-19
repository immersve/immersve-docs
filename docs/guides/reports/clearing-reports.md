---
sidebar_position: 4
tags:
  - reports
  - custodial
  - non-custodial
---

# Clearing Reports

The clearing report can be used to review all card purchase clearings for a given period. 

## Schema
|       Field        |                                                    Description                                                    |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| cardToken          | Unique identifier of the Card.                                                                                    |
| transactionId      | Unique identifier of the associated Card transaction.                                                             |
| authorizationId    | Unique identifier of the original authorization request received via the card scheme network.                     |
| transactionType    | ISO 8583 message class. This is a messaging standard for payments initiated with a financial transaction card.    |
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
| channel            | Channel used to initialize the Transaction. Examples include ATM, and Online.                                     |

## Example

`169286b0603e6a75122cc0b217d3b850_clearing_2023-04-18T00:00:00.000Z_2023-04-18T00:00:00.000Z.csv`

```
card_token,transaction_id,authorization_id,transaction_type,merchant_currency,merchant_amount,billing_currency,billing_amount,settlement_currency,settlement_amount,exchange_rate,account_id,merchant_id,merchant_name,merchant_city,merchant_country,creation_at,approved_at,mcc,channel
789f7719eab12100789653487c136165,1000000324137,1000000324138,1200,USD,500,USD,500,USDC,6000000,1.0000000000,e64aa69f0a9af2d664e5989bd7f22562,000000000000000,Family Clothing Store,Auckland,NZL,2023-04-18T01:08:06.435Z,2023-04-18T01:08:09.144Z,5651,Online
```