---
sidebar_position: 2
tags:
  - card
---

# Card
## Card State
After created, the card is activated. when the card is used or canceled by user, it will go to the cancelled state. 
```mermaid
stateDiagram-v2
    [*]--> Active: create

    Active-->Cancelled : cancel_card
    Active-->Cancelled : once_used
    Cancelled --> [*]
```
## Card Usage
1. Before create a card, users need to transfer USDC from their wallet address to Immersve wallet address. 
2. Then they create a card associate with the transaction. Immersve will locked the funds of the transaction in the card for further spending. For security sake, the returned card only include truncated pan and expiry. 
3. To get the full pan and cvv2, users need to generate card pan token from Immersve that will be used to get full pan and cvv2 from E6 Mobile API. 
4. If users authorize a merchant to use the card, credit network will send authorization and clearing request to Immersve, if the transaction are cleared. the card will be cancelled by Immersve automatically.
5. If users change their mind before the card is used, they can cancel the card by calling cancel card API. 


```mermaid
sequenceDiagram
    participant U as User
    participant C as API Client
    participant I as Immersve
    participant E as E6 Mobile API
    participant CN as Credit Network
    U->>U: Create a transaction that transfers the USDC to Immersve wallet address
    U->>C : Create a card with the hash of the transaction
    C->>+I: Create a card with the hash of the transaction
    I-->>C: Return a Card
    C-->>U: Return a Card
loop user want to get the card's detail    
    C->>I: Request a card pan token
    C->>E: Validate the card details
end
alt if user filled in the card in merchant
    CN->>I: Authorization of the card
    I-->>CN: Approved the Authorization of the card
    CN->>I: Settle the authorization of the card
    I-->>CN: Clear the authorization
    I->>I : Cancel the card
else the card be cancelled before used
    C->>I : Cancel the card
    I-->>-C: card cancelled
end
```