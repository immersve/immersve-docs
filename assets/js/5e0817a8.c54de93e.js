"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[1914],{786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(87462),i=(t(67294),t(3905)),r=t(8209);const s={sidebar_position:4,tags:["card","virtual card","non-custodial"]},o="Card Funding",c={unversionedId:"guides/card-funding",id:"guides/card-funding",title:"Card Funding",description:"A Funding Source is an off-chain record of available balance against which card",source:"@site/docs/guides/card-funding.md",sourceDirName:"guides",slug:"/guides/card-funding",permalink:"/guides/card-funding",draft:!1,tags:[{label:"card",permalink:"/tags/card"},{label:"virtual card",permalink:"/tags/virtual-card"},{label:"non-custodial",permalink:"/tags/non-custodial"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["card","virtual card","non-custodial"]},sidebar:"primarySidebar",previous:{title:"Card Lifecycle",permalink:"/guides/card-lifecycle"},next:{title:"Issue a Virtual Card",permalink:"/guides/issue-a-virtual-card"}},l={},d=[{value:"Authentication",id:"authentication",level:2},{value:"Funding Source Provisioning",id:"funding-source-provisioning",level:2},{value:"Funding Process",id:"funding-process",level:2},{value:"Currency Conversion",id:"currency-conversion",level:3},{value:"Lock Funds",id:"lock-funds",level:3},{value:"How to use prerequisites example for ts/js",id:"how-to-use-prerequisites-example-for-tsjs",level:4},{value:"Wallet Funding for Development and Testing",id:"wallet-funding-for-development-and-testing",level:3},{value:"Funding Sequence Diagram",id:"funding-sequence-diagram",level:3}],u={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"card-funding"},"Card Funding"),(0,i.kt)("p",null,"A Funding Source is an off-chain record of available balance against which card\ntransactions are authorized. A Funding Source is owned by a cardholder and can\nbe associated with many cards transacting against the same available balance .\nA Funding Source must have sufficient balance for a transaction to be\nauthorized."),(0,i.kt)("p",null,"A Funding Source balance is eventually consistent with the on-chain deposits.\nHowever, the balance available to spend may differ. This could happen if deposit\nor load limits are exceeded. AML/CFT rules can dictate that the funds should not\nbe included in the balance."),(0,i.kt)("p",null,"A card will not authorize transactions without an associated Funding Source. You\nmust reference a Funding Source when creating a card."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The authentication processes are described in the ",(0,i.kt)("a",{parentName:"p",href:"/guides/authentication"},"authentication guide"),"."),(0,i.kt)("h2",{id:"funding-source-provisioning"},"Funding Source Provisioning"),(0,i.kt)("p",null,"A Funding Source is created by a request to the ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/claim-a-funding-source-for-an-account"},"claim a Funding Source for an account")," endpoint.\nThe funding wallet may be an EOA or a smart contract implementing the ERC-1271 interface."),(0,i.kt)("h2",{id:"funding-process"},"Funding Process"),(0,i.kt)("p",null,"On-chain funding can be done at any time regardless of card or Funding Source provisioning.\nA Funding Source can be loaded with digital assets without using Immersve APIs by depositing funds directly to our smart contract."),(0,i.kt)("p",null,"However, our APIs aim to reduce the complexity of determining what is the amount of digital assets needed to meet a users desired spend in their desired fiat currency. They also provide pre-built ",(0,i.kt)("inlineCode",{parentName:"p"},'"smart-contract-write"')," transactions for successful interactions with the Immersve smart contract."),(0,i.kt)("h3",{id:"currency-conversion"},"Currency Conversion"),(0,i.kt)("p",null,"A user may be quoted a price for a purchase by a merchant in a local fiat currency. To determine the sufficient amount of local fiat currency to fund a card in its billing currency (USD), use the ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/currency-conversion"},"currency conversion")," API endpoint."),(0,i.kt)("p",null,"The returned value can passed to the get spending prerequisites endpoint as detailed below."),(0,i.kt)("h3",{id:"lock-funds"},"Lock Funds"),(0,i.kt)("p",null,"To ensure that funds are sufficiently locked within the ",(0,i.kt)("a",{parentName:"p",href:"/contracts/payment-protocol"},"smart contract")," such that Immersve are in a position to approve an authorization request received via the card scheme network you will need to have first locked sufficient digital assets within the smart contract via digital asset transfer and smart contract invocations as instructed by the ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/get-spending-prerequisites"},"get spending prerequisites")," operation. The necessary blockchain transactions are contained within the ",(0,i.kt)("inlineCode",{parentName:"p"},"prerequisites")," collection returned."),(0,i.kt)("p",null,"If the user has not transacted using the solution before then the ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/get-spending-prerequisites"},"get spending prerequisites")," response will typically call for an ERC20 ",(0,i.kt)("inlineCode",{parentName:"p"},"approve")," in favour of the smart contract followed by a ",(0,i.kt)("inlineCode",{parentName:"p"},"depositAndLock")," invocation of the smart contract."),(0,i.kt)("p",null,"If multiple transactions are present then they should be carried out in the order in which they are presented."),(0,i.kt)("p",null,"The client application is to parse and formulate the raw blockchain transaction message such that it is presented to the user within the web3 wallet and signed and sent to the relevant blockchain."),(0,i.kt)("h4",{id:"how-to-use-prerequisites-example-for-tsjs"},"How to use prerequisites example for ts/js"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/get-spending-prerequisites"},"get spending prerequisites")," endpoint returns an array of both regulatory and smart contract prerequisite transactions.",(0,i.kt)("br",{parentName:"p"}),"\n","Each object in the array has ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Type ",(0,i.kt)("inlineCode",{parentName:"p"},'"smart_contract_write"')," means that this action is about interaction with the smart contract. ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," contains all the details required to perform this interaction."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Code snippet (using ethers.js)"),(0,i.kt)("p",null,"Typescript code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { abi, contractAddress, method, params } =\n  response.data.prerequisites.params;\n\nconst contract = new Contract(contractAddress, abi, signer); // third param Signer is required\n\nconst { hash } = await contract[method](...Object.values(params));\n"))),(0,i.kt)("h3",{id:"wallet-funding-for-development-and-testing"},"Wallet Funding for Development and Testing"),(0,i.kt)("p",null,"To ensure that integrators can obtain sufficient ERC-20 tokens to facilitate development and testing, Immersve uses an ERC-20 token contract that allows tokens to be freely minted as needed."),(0,i.kt)("p",null,"In non-production environments, any transaction returned by ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/get-spending-prerequisites"},"get spending prerequisites"),' with actions related to ERC20 smart contract will refer to the "IMMUSDC" token. The "IMMUSDC" token has a ',(0,i.kt)("inlineCode",{parentName:"p"},"mint")," function allowing for the unlimited minting of the token to any wallet address."),(0,i.kt)("p",null,"One particularly convenient way to get the necessary tokens is to use the Polygonscan interface."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the ",(0,i.kt)("a",{parentName:"li",href:"https://mumbai.polygonscan.com/address/0x2FaC06acFAeB42CC3B5327fcF53F48D9Da72749d#code"},"IMMUSDC token in Polygonscan")),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Write as Proxy")),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Connect to Web3")," to connect your wallet with Polygonscan"),(0,i.kt)("li",{parentName:"ul"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"mint")," function"),(0,i.kt)("li",{parentName:"ul"},"Set the destination wallet address (where assets are to be sent) in the ",(0,i.kt)("inlineCode",{parentName:"li"},"to")," field. Set an amount in the ",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," field."),(0,i.kt)("li",{parentName:"ul"},"Initiate the web3 transaction by clicking the ",(0,i.kt)("inlineCode",{parentName:"li"},"Write")," button"),(0,i.kt)("li",{parentName:"ul"},"Confirm the transaction in the web3 wallet and pay the gas fees")),(0,i.kt)("h3",{id:"funding-sequence-diagram"},"Funding Sequence Diagram"),(0,i.kt)(r.G,{chart:"sequenceDiagram\n    participant U as User\n    participant C as Your Application\n    participant I as Immersve\n    participant W as Wallet\n    participant B as Blockchain\n    note over U: Authentication as per authentication guide\n\n    C->>I: Create Funding Source\n    I--\x3e>C: Funding Source ID\n    C->>I: Get spending prerequisites\n    I--\x3e>C: prerequisites collection\n      loop For each smart-contract-write transaction\n      C->>C: Construct raw transaction message\n      C->>W: Transmit raw transaction to wallet\n      U->>W: Confirm / authorize transaction\n      W->>B: Transmit transaction\n      end\n    C->>I: List Funding Sources\n    I--\x3e>C: Funding Source list",mdxType:"Mermaid"}))}p.isMDXComponent=!0}}]);