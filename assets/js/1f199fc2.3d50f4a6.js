(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[516],{75453:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),r=a(19959);const s={sidebar_position:2,tags:["card","virtual card","non-custodial"]},o="Issue a Virtual Card",l={unversionedId:"guides/non-custodial wallets/issue-a-virtual-card",id:"guides/non-custodial wallets/issue-a-virtual-card",title:"Issue a Virtual Card",description:"A virtual card is a payment card that exists only in digital form. As such, virtual cards are most suitable for online e-commerce purchases as opposed to in-store purchases at brick-and-mortar merchants. Immersve treat virtual cards as being logically time-bound and ephemeral. Beginning at the time of issuance of a virtual card, it has a finite useable lifespan which is often represeted within the UI of the issuing client application as a stopwatch-type timer. This model presents certain benefits over a traditional persistent payment card model (be they virtual, tokenized or physical) in that the potential for card fraud is dramatically reduced. The use of web3-native authentication mechanisms within the context of card issuance mean that the same level of protection to a user's funds in self-custodial wallets is applied to their activities as a cardholder.",source:"@site/docs/guides/non-custodial wallets/issue-a-virtual-card.md",sourceDirName:"guides/non-custodial wallets",slug:"/guides/non-custodial wallets/issue-a-virtual-card",permalink:"/guides/non-custodial wallets/issue-a-virtual-card",draft:!1,tags:[{label:"card",permalink:"/tags/card"},{label:"virtual card",permalink:"/tags/virtual-card"},{label:"non-custodial",permalink:"/tags/non-custodial"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["card","virtual card","non-custodial"]},sidebar:"primarySidebar",previous:{title:"Card Lifecycle",permalink:"/guides/non-custodial wallets/card-lifecycle"},next:{title:"API Reference",permalink:"/category/api-reference"}},c={},d=[{value:"Authentication",id:"authentication",level:2},{value:"Currency Conversion",id:"currency-conversion",level:2},{value:"Lock Funds",id:"lock-funds",level:2},{value:"Wallet Funding for Development and Testing",id:"wallet-funding-for-development-and-testing",level:3},{value:"Order a Card",id:"order-a-card",level:2},{value:"Issue a Card",id:"issue-a-card",level:2},{value:"Get a Card Token",id:"get-a-card-token",level:3},{value:"Get Card Details",id:"get-card-details",level:3},{value:"Virtual Card Issuance Sequence Diagram",id:"virtual-card-issuance-sequence-diagram",level:2}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"issue-a-virtual-card"},"Issue a Virtual Card"),(0,i.kt)("p",null,"A virtual card is a payment card that exists only in digital form. As such, virtual cards are most suitable for online e-commerce purchases as opposed to in-store purchases at brick-and-mortar merchants. Immersve treat virtual cards as being logically time-bound and ephemeral. Beginning at the time of issuance of a virtual card, it has a finite useable lifespan which is often represeted within the UI of the issuing client application as a stopwatch-type timer. This model presents certain benefits over a traditional persistent payment card model (be they virtual, tokenized or physical) in that the potential for card fraud is dramatically reduced. The use of web3-native authentication mechanisms within the context of card issuance mean that the same level of protection to a user's funds in self-custodial wallets is applied to their activities as a cardholder."),(0,i.kt)("p",null,"Prior to being permitted to ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/order-card"},"order a card")," a user must first have successfuly ",(0,i.kt)("a",{parentName:"p",href:"/guides/non-custodial%20wallets/authentication"},"authenticated")," and locked digital assets within the smart contract via digital asset transfer and smart contract invocations as instructed by the ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/get-prerequisite-transactions"},"get prerequisite tranasactions")," operation."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The authentication processes is described in the ",(0,i.kt)("a",{parentName:"p",href:"/guides/non-custodial%20wallets/authentication"},"authentication guide"),". As the user account is anchored by control of the private key, there is no distinct prior explicit registration or signup process needed before authenticating."),(0,i.kt)("h2",{id:"currency-conversion"},"Currency Conversion"),(0,i.kt)("p",null,"A user will more often than not be quoted a price for a purchase by a merchant in a fiat currency. In order to determine the sufficient amount of digital assets to fund a card and be made available for the purchase, you will retrieve the amount from the ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/currency-convert"},"currency conversion")," API endpoint."),(0,i.kt)("h2",{id:"lock-funds"},"Lock Funds"),(0,i.kt)("p",null,"In order to ensure that funds are sufficiently locked within the ",(0,i.kt)("a",{parentName:"p",href:"/contracts/payment-protocol"},"smart contract")," such that Immersve are in a position to approve an authorization request received via the card scheme network you will need to have firstly locked sufficient digital assets within the smart contract via digital asset transfer and smart contract invocations as instructed by the ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/get-prerequisite-transactions"},"get prerequisite tranasactions")," operation. The necessary blockchain transactions are contained within the ",(0,i.kt)("inlineCode",{parentName:"p"},"requiredTransactions")," collection returned."),(0,i.kt)("p",null,"If the user has not transacted using the solution before then the the ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/get-prerequisite-transactions"},"get prerequisite transactions")," response will typically call for and ",(0,i.kt)("inlineCode",{parentName:"p"},"erc20_approval")," in favour of the smart contract followed by a ",(0,i.kt)("inlineCode",{parentName:"p"},"depositAndCreateLockedFund")," invocation of the smart contract."),(0,i.kt)("p",null,"If multiple transactions are present then they should be carried out in the order in which they are presented."),(0,i.kt)("p",null,"The client application is to parse and formulate the raw blockchain transaction message such that it is presented to the user within the web3 wallet and signed and sent to the relevant blockchain."),(0,i.kt)("h3",{id:"wallet-funding-for-development-and-testing"},"Wallet Funding for Development and Testing"),(0,i.kt)("p",null,"To ensure that integrators are able to obtain sufficient ERC-20 tokens to facilitate development and testing, Immersve uses an ERC-20 token contract that allows tokens to be freely minted as needed."),(0,i.kt)("p",null,"In non-production environments any ",(0,i.kt)("inlineCode",{parentName:"p"},"erc20_approval")," transaction type returned by ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/get-prerequisite-transactions"},"get prerequisite transactions"),' will refer to the "IMMUSDC" token. The "IMMUSDC" token has a ',(0,i.kt)("inlineCode",{parentName:"p"},"mint")," function allowing for the unlimited minting of the token to any wallet address."),(0,i.kt)("p",null,"One particularly convenient way to get the necessary tokens is to use the Polygonscan interface."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the ",(0,i.kt)("a",{parentName:"li",href:"https://mumbai.polygonscan.com/address/0x2FaC06acFAeB42CC3B5327fcF53F48D9Da72749d#code"},"IMMUSDC token in Polygonscan")),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Write as Proxy")),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Connect to Web3")," to connect your wallet with Polygonscan"),(0,i.kt)("li",{parentName:"ul"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"mint")," function"),(0,i.kt)("li",{parentName:"ul"},"Set the destination wallet address (where assets are to be sent) in the ",(0,i.kt)("inlineCode",{parentName:"li"},"to")," field. Set an amount in the ",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," field."),(0,i.kt)("li",{parentName:"ul"},"Initiate the web3 transaction clicking the ",(0,i.kt)("inlineCode",{parentName:"li"},"Write")," button"),(0,i.kt)("li",{parentName:"ul"},"Confirm the transaction in the web3 wallet and pay the gas fees")),(0,i.kt)("h2",{id:"order-a-card"},"Order a Card"),(0,i.kt)("p",null,"With the funds locked in the smart contract, it's now time to order a card."),(0,i.kt)("p",null,"Call the ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/order-card"},"order a card")," operation to request Immersve to generate a card."),(0,i.kt)("p",null,"The returned card data returned in response to a ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/order-card"},"order a card")," request includes only truncated or masked sensitive data. Single-use virtual cards are activated and ready to use by default."),(0,i.kt)("h2",{id:"issue-a-card"},"Issue a Card"),(0,i.kt)("p",null,"Having created an virtual card via the ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/order-card"},"order a card")," operation, you are in a position to be able to obtain the sensitive card details to be presented to the cardholder."),(0,i.kt)("p",null,"There are two steps in this process;"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"firstly, obtaining a token for transmission to the client application to which the card details are to be provided (i.e. the application that will display the card data to the cardholder) and;"),(0,i.kt)("li",{parentName:"ol"},"secondly, the exchange, by that client application, of the token for the card data. ")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It is not recommended that the card token is supplied to any application other than one that resides within the cardholder environment (i.e. their mobile application or web application running in their browser) unless that system is sufficiently compliant with PCI-DSS requirements and is audited as such.")),(0,i.kt)("h3",{id:"get-a-card-token"},"Get a Card Token"),(0,i.kt)("p",null,"Generate a single-use card ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," using ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/get-a-card-token"},"the get a card token")," operation. The token is typically then transmitted to the cardholder's environment (i.e. web application or mobile application running in their web browser) to complete the final step completing the card issuance."),(0,i.kt)("h3",{id:"get-card-details"},"Get Card Details"),(0,i.kt)("p",null,"To obtain the full PAN and CVV2 for display to the cardholder your client-side application should exchange the token for the sensitive card data via the ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/get-secure-card-details"},"get secure card details")," operation."),(0,i.kt)("h2",{id:"virtual-card-issuance-sequence-diagram"},"Virtual Card Issuance Sequence Diagram"),(0,i.kt)(r.G,{chart:"sequenceDiagram\n    participant U as User\n    participant C as API Client\n    participant I as Immersve\n    participant W as Wallet\n    participant B as Blockchain\n    note over U: Authentication as per authentication guide\n    U->>C: Input desired fiat card funding amount\n    C->>+I: Currency convert\n    I--\x3e>C: convertedAmount\n    C->>I: Get prerequisite transactions\n    I--\x3e>C: requiredTransactions collection\n    loop For each required transaction\n        C->>C: Construct raw transaction message\n        C->>W: Transmit raw transaction to wallet\n        U->>W: Confirm / authorize transaction\n        W->>B: Transmit transaction\n    end\n    C->>+I: Order card\n    I--\x3e>C: Non-sensitive card data\n    C->>+I: Get card token\n    I--\x3e>C: Card token\n    C->>I: Request sensitive card data\n    I--\x3e>C: Return sensitive card data\n    C--\x3e>U: Display sensitve card data",mdxType:"Mermaid"}))}p.isMDXComponent=!0},11748:(e,t,a)=>{var n={"./locale":89234,"./locale.js":89234};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=11748}}]);