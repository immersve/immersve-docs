---
sidebar_position: 3
tags:
  - simulator
---

# Clearing Without Auth

Instead of authorizing first, a payment can be made by outright creating a `clearing`. This clearing creates a debit for the account, allowing for reconciliation to be
executed with the merchant. At this point, the transaction is considered to be processed.

When this clearing is made successfully, a transaction will show up in the Immersve apps dashboard with a processed date of the current day.
