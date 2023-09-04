---
sidebar_position: 7
tag: 
 - custodial
---

# Custodial Wallets

Organizations acting as custodians of customer funds, such as custodial exchanges and wallet providers, may wish to support card issuance and funding flows for their users. The partnered custodial organization's overarching account may be pre-funded and discrete card transaction authorization determinations made by the the partner.

The below guides are available to assist in your integration: 
1. Your application will authenticate against the API as described in the [API Authentication Guide](/guides/authentication#api-key-authentication). End-user authentication is handled by your application and is outside of Immersve's purview.
1. The [Issue a Virtual Card](/guides/issue-a-virtual-card) guide and [Card Lifecycle](/guides/card-lifecycle) guide will give you an understanding of how to create and issue a card to a user.
1. The [Card Funding](/guides/card-funding) guide describes how a cardholder account is funded such that transactions may be authorized.

:::note
If this doesn't sound right given your use case then check out the [non-custodial wallets guide](/guides/non-custodial-wallets) for information on how cards may be issued to and funded directly by cardholders leveraging various web3 technologies. [Contact us](https://immersve.com/contact/) if you require further assistance to understand how your use case might be supported.
:::