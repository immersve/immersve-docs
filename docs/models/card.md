---
id: card-model
title: Card
hide_table_of_contents: true
tags:
  - card
---

## Model

| Field          | Type    | Description                                       |
| -------------- | ------- | ------------------------------------------------- |
| accountId      | String  | Which account this card belongs to                |
| cardExternalId | Integer | The external id for this card                     |
| cardCurrency   | String  | The currency of this card                         |
| cardState      | String  | The state of the card, enum "active", "cancelled" |
| cardType       | String  | The type of the card, Now only support "virtual"  |
| panFirst6      | String  | The first 6 digits of the card                    |
| panLast4       | String  | The last 4 digits of the card                     |
| expiry         | String  | The expiry of the card                            |
