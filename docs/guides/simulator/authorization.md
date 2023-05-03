---
sidebar_position: 2
tags:
  - simulator
---

# Authorization

An `authorization` is an initial step in a transaction that checks if funds are available and sets up the approval for the transaction.
At this point the transaction is initialized, with an initial hold being made on the funds, however no funds are settled with the merchant itself.

The amount being supplied as the value for such an authorization cannot exceed the funds initially allocated to the card on creation.

When the authorization has succeded, a transaction will show up on the Immersve apps dashboard with a processed date of `pending`
