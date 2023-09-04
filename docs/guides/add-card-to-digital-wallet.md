---
sidebar_position: 11
tags:
  - card
  - virtual card
---

# Add a Card to a Digital Wallet

:::tip
Apple Pay and Google Pay manual provisioning support coming soon! Expected Q4 2023
:::

Apple Pay, Google Pay, and Samsung Pay wallets (collectively colloquially known as the 'xPays') allow users to tokenize a card. Such a token held within an xPay wallet may subsequently be used to make payments online and by contactless tap in store.

In order to tokenize a card within an xPay wallet, a card must first be issued to a cardholder. Follow the [issue a virtual card](/guides/issue-a-virtual-card) guide for more information on how to create and issue a card.

Whereas the card itself holds a primary account number (PAN) which is usually depicted on the card, a device PAN (DPAN) is assigned to the card as a pseudonym during tokenization. A DPAN is associated with a particular device (such as a smartphone) which emulates the card virtually when stored in the xPay wallet. If the same card is stored virtually in another wallet it will have DPAN which differs from the one held by the other wallet. Immersve assigns a DPAN at the time of adding the virtual card to the xPay wallet.

The complexity of managing DPANs is opaque to the cardholder and the process to provision a card to an xPay wallet is rather simple from their perspective.

Where your application (within which the virtual card is presented) is colocated with the xPay wallet then the user can simply copy/paste and/or manually enter the card details from your application into the xPay wallet. Where your application resides on a device other than the one that holds the target xPay wallet then the user can scan the virtual card with their camera to add it to their xPay wallet.

See the [Apple guide](https://support.apple.com/en-us/HT204506) and the [Google guide](https://support.google.com/wallet/answer/12058983?hl=en#zippy=%2Cwith-the-google-wallet-app) for more details on how this operates from the user's perspective.


