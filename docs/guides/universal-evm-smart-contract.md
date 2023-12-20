---
sidebar_position: 12
tags:
  - card
  - funding
  - funding-channel
  - funding-source
---

# Universal EVM Smart Contract Integration

## Introduction

The Immersve Universal EVM protocol allows client applications to fund Immersve cards via simple ERC-20 transfers. Depositors can withdraw funds at any time with signed withdrawal approvals. Depositor funds can only be settled to Immersve’s approved settlement address. Deposits are scoped to the client application that registers the Funds Storage contract as an Immersve Funding Channel.

## Components

![polygonscan-contract-landing](/img/universal-evm/overview.jpg) 

### **Funds Manager Contract**

The Funds Manager contract is the main entry point and is a factory for Funds Storage contracts. It is also used by Immersve for performing administrative operations. The `createFundsStorage` function can be used by any message signer to deploy a Funds Storage contract address.

### Funds Storage Contract

Funds Storage contracts are the target for depositor ERC-20 transfers. The Funds Storage contract is scoped to the integrating application. It only needs to be deployed once for all depositors. After it has been deployed it must be registered with the Immersve backend using the [Create Funding Channel API](https://docs.immersve.com/api-reference/create-a-funding-channel).

## Deposits

Depositors can send ERC-20 transfers directly to the Funds Storage address. Each depositor address needs to have a [Funding Source](https://docs.immersve.com/api-reference/register-a-funding-source-for-an-account) created that is linked with the Funding Channel. After an ERC-20 transfer transaction is confirmed, the connected Funding Source will be credited to the customer funding source to use with a card.

The [Spending Pre-requisites API](https://docs.immersve.com/api-reference/get-spending-prerequisites) can be used to reliably obtain the Web3 transaction parameters for depositing into a Funding Source.

When a Funding Source is created, any deposits made prior to the creation of the Funding Source and associated with the depositing address will be credited immediately.

## Deployed Contract Addresses

The Funds Manager contract is designed to work on any EVM. Currently supported chains and their contract address can be found below:

### Mainnet

| Chain | Tokens | Funds Manager Address | Funding Type |
| --- | --- | --- | --- |
| Polygon POS | [USDC](https://polygonscan.com/token/0x3c499c542cef5e3811e1192ce70d8cc03d5c3359) | [Funds Manager](https://polygonscan.com/address/0xcd1c3d1c12437bD0375E3C4331771b31220125Bd#writeProxyContract) | `polygon-usdc-universal-evm-live` |

### Testnet

:::note
⚠️ Do not transfer mainnet real assets to this address or funds will be lost. The following contracts are only intended to be used for testing integration with fake tokens.
:::

| Chain | Tokens | Funds Manager Address | Funding Type |
| --- | --- | --- | --- |
| Polygon Mumbai | [IMMUSDC](https://mumbai.polygonscan.com/address/0x2FaC06acFAeB42CC3B5327fcF53F48D9Da72749d#code) | [Funds Manager](https://mumbai.polygonscan.com/address/0xe50FF3C352C0176c12c0a130dCa7655eC518fc40#writeProxyContract) | `polygon-usdc-universal-evm-test` |


## Creating a Funds Storage Instance

Once a Funds Manager Address is selected, open it in it’s corresponding Etherscan like page link from the tables above. We are going to use the Polygon one as an example:

Link will land in the following page:

![polygonscan-contract-landing](/img/universal-evm/polygonscan-contract-landing.png) 

1. Open the `Contract` section
2. Open the `Write as Proxy` section
3. Connect with the desired web3 wallet:
    
    ![polygonscan-connect-web3](/img/universal-evm/polygonscan-connect-web3.png) 
    
4. Some Etherscan like pages will give a warning like the following.
    
    ![polygonscan-disclosure](/img/universal-evm/polygonscan-disclosure.png) 
    
    It can be ignored. Press OK to continue
    
5. Select the desired wallet connection mechanism
    
    ![polygonscan-connect-wallet](/img/universal-evm/polygonscan-connect-wallet.png) 
    
6. Accept the connection in the wallet
7. Once the wallet is connected, the following indicator should turn green and would indicate the connected wallet address
    
    ![polygonscan-wallet-connected](/img/universal-evm/polygonscan-wallet-connected.png)
    
8. Now that the wallet is connected, the next step is to actually create the Funds Storage instance. This is done via the `createFundsStorage` function on the contract, and it can be invoked directly here:
    
    ![create-funds-storage-emtpy](/img/universal-evm/create-funds-storage-emtpy.png)
    
9. Token address is the ERC-20 token that the integrator wants to support. Grab the address of the supported token from the table above. Integrator can provide any alphanumeric name for their own reference. Here is an example with the IMMUSDC token address:

    ![create-funds-storage-sample](/img/universal-evm/create-funds-storage-sample.png) 

10. Click on `Write` to submit the transaction
11. Accept the transaction on the connected wallet. Once the transaction is accepted on the wallet, it is submitted to the blockchain and a button will appear to keep track of the transaction:
    
    ![create-funds-storage-submitted](/img/universal-evm/create-funds-storage-submitted.png) 
    
12. This will open up the transaction details page. Details will appear once the transaction is confirmed so it can take up a few seconds to show up
    
    ![create-funds-storage-trx](/img/universal-evm/create-funds-storage-trx.png) 
    
13. Go To the `Logs` section and find the `FundsStorageCreated` event log:
    
    ![create-funds-storage-trx-logs](/img/universal-evm/create-funds-storage-trx-logs.png) 
    
14. In this example, the created funds storage instance address is `0x53C6A0cd42d8115B84BE3D5458b6cde15428752D`
15. Use the created funds storage address as the storageAddress in the [Create Funding Channel](https://docs.immersve.com/api-reference/create-a-funding-channel) endpoint
