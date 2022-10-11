---
sidebar_position: 5
title: Get prerequisite transactions
tags:
  - card
---
This endpoint returns web3 transactions required to authorize the creation of a new Immersve Card. 

It is also intended for integrating clients to check that everything is in place before making the actual web3 transactions. Among such things are KYC and AML checks. These are early checks before creating the card to prevent end-users unnecessarily paying for the gas fees of two transactions, should any of the checks fail.

## Usage guide

The client should be calling this endpoint prior to creating VCC to get the details of the deposit to the Immersve Payment Gateway smart contract (IPGSC). It is step 2 in the whole card creation flow described below.

The entire card creation flow:

1. Call currency conversion API to convert total from the shopping cart into USDC (amount)
2. **Get blockchain transactions required to be done before card creation, if all checks are in place for it**
    1. **ERROR SCENARIO: some of the checks are failed and the response has status code 403**
3. Make the required transactions
4. Send card creation request passing the hash of the last trx from step 3

### Models

[**Card**](../../models/card-model)

### Operations

1. Get prerequisite transactions for card order

POST **/api/card/get-prerequisite-transactions**

```shell
curl --location --request POST 'https://api.sb1.lol/api/cards/get-prerequisite-transactions' \
--header 'Authorization: Bearer $IMMERSVE_JWT_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "chainId": "1",
    "amount": "300.123",
    "token": "USDC"
}'
```

**PAYLOAD**:
[**PrerequisiteTransactionsRequest**](../../models/get-prerequisite-transactions-request)

**RESPONSE**:
[**PrerequisiteTransactionsResponse**](../../models/get-prerequisite-transactions-response)

Body:

```json
{
    "chainId": 137, // for now, just the Polygon network
    "amount": "320.22",
    "token": "USDC"
}
```

Web3 Wallet address is inferred from the JWT Token

**200 - Response Successful**

User is allowed to generate a new card. Client should be able to request transactions from the user wallet to Immersve wallet

The client needs to parse transaction info and converts it to the chain-specific calls)

```json
{
  "requiredTransactions": [
    {//ERC20 approval trx details,
        "type": "erc20_approval",
        "params": {//trx type specific
            "receiver": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",
            "amount": {
                "total": 320.22,
                "token": "USDC"
            }
        }
    },
    {//Immersve depositAndCreateLockedFund trx details
        "type": "smart_contract_write",
        "params": {//trx type specific
            "contractAddress": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",
            "method": "depositAndCreateLockedFund",
            "params": {
                "usdcAmount": 320.22
            }
        }
    }
  ]
}
```

**403 - Forbidden**

User is not allowed to get the deposit details with the reason stated in the message

```json
{
    "statusCode": 403,
    "error": "Forbidden",
    "message": "KYC_REQUIRED"|"AML_REQUIRED"|"AML_PERMANENTLY_FAILED"
}
```

**KYC_REQUIRED** 

User is required to perform an action before creating the card, for example, user needs to complete KYC

When the user reaches a certain amount spent in the platform, Immersve will require them to provide some identification information to comply with regulatory requirements

**AML_REQUIRED**

User is not allowed to create a card due to AML Checks Failing

Immersve AML Provider found that the funding wallet might not comply with AML and can’t check the origin of funds for the provided wallet. User will need to go through AML process to validate the source of the funds on the wallet

**AML_PERMANENTLY_FAILED**

Similar to AML_REQUIRED, except the user can not remediate the failing check, because the intended deposit wallet is permanently blacklisted.

### Request model

```yaml
DepositDetailsRequest:
    type: object
    properties:
        chainId:
            type: integer
        address:
            type: string
            description: Spender wallet address
            example: "0xA3058369d6A481B1ff08F62B352409c3D709De9b"
        amount:
            description: Amount for the intended deposit
            type: object
            properties:
                currency:
                    type: string
                    example: "USDC"
                total:
                    type: number
                    example: 320.22
```

### Response model

```yaml
DepositDetailsResponse:
    type: object
    properties:
      immersvePaymentGatewayContractAddress:
        description: The address of the Immersve payment gateway smart contract where the deposit should be made to via depositAndCreateLockedFund method
        type: string
        example: "0xCf0ed659452b092750D9BB54c33c0025b6853aa4"
      amount:
        description: Amount for the intended deposit
        type: object
        properties:
            currency:
                type: string
                example: "USDC"
            total:
                type: number
                example: 320.22
```