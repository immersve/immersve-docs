"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[8112],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>A});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,A=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return n?a.createElement(A,i(i({ref:t},d),{},{components:n})):a.createElement(A,i({ref:t},d))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(25773),r=(n(27378),n(35318));const o={sidebar_position:12,tags:["card","funding","funding-channel","funding-source"]},i="Universal EVM Smart Contract Integration",l={unversionedId:"guides/universal-evm-smart-contract",id:"guides/universal-evm-smart-contract",title:"Universal EVM Smart Contract Integration",description:"Introduction",source:"@site/docs/guides/universal-evm-smart-contract.md",sourceDirName:"guides",slug:"/guides/universal-evm-smart-contract",permalink:"/guides/universal-evm-smart-contract",draft:!1,tags:[{label:"card",permalink:"/tags/card"},{label:"funding",permalink:"/tags/funding"},{label:"funding-channel",permalink:"/tags/funding-channel"},{label:"funding-source",permalink:"/tags/funding-source"}],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,tags:["card","funding","funding-channel","funding-source"]},sidebar:"primarySidebar",previous:{title:"Monetary Units",permalink:"/guides/monetary-units"},next:{title:"Complete headless KYC checks",permalink:"/guides/complete-headless-kyc-checks"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Components",id:"components",level:2},{value:"<strong>Funds Manager Contract</strong>",id:"funds-manager-contract",level:3},{value:"Funds Storage Contract",id:"funds-storage-contract",level:3},{value:"Deposits",id:"deposits",level:2},{value:"Deployed Contract Addresses",id:"deployed-contract-addresses",level:2},{value:"Mainnet",id:"mainnet",level:3},{value:"Testnet",id:"testnet",level:3},{value:"Creating a Funds Storage Instance",id:"creating-a-funds-storage-instance",level:2}],d={toc:c},p="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"universal-evm-smart-contract-integration"},"Universal EVM Smart Contract Integration"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Immersve Universal EVM protocol allows client applications to fund Immersve cards via simple ERC-20 transfers. Depositors can withdraw funds at any time with signed withdrawal approvals. Depositor funds can only be settled to Immersve\u2019s approved settlement address. Deposits are scoped to the client application that registers the Funds Storage contract as an Immersve Funding Channel."),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polygonscan-contract-landing",src:n(97959).Z,width:"2588",height:"1545"})),(0,r.kt)("h3",{id:"funds-manager-contract"},(0,r.kt)("strong",{parentName:"h3"},"Funds Manager Contract")),(0,r.kt)("p",null,"The Funds Manager contract is the main entry point and is a factory for Funds Storage contracts. It is also used by Immersve for performing administrative operations. The ",(0,r.kt)("inlineCode",{parentName:"p"},"createFundsStorage")," function can be used by any message signer to deploy a Funds Storage contract address."),(0,r.kt)("h3",{id:"funds-storage-contract"},"Funds Storage Contract"),(0,r.kt)("p",null,"Funds Storage contracts are the target for depositor ERC-20 transfers. The Funds Storage contract is scoped to the integrating application. It only needs to be deployed once for all depositors. After it has been deployed it must be registered with the Immersve backend using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.immersve.com/api-reference/create-a-funding-channel"},"Create Funding Channel API"),"."),(0,r.kt)("h2",{id:"deposits"},"Deposits"),(0,r.kt)("p",null,"Depositors can send ERC-20 transfers directly to the Funds Storage address. Each depositor address needs to have a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.immersve.com/api-reference/register-a-funding-source-for-an-account"},"Funding Source")," created that is linked with the Funding Channel. After an ERC-20 transfer transaction is confirmed, the connected Funding Source will be credited to the customer funding source to use with a card."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.immersve.com/api-reference/get-spending-prerequisites"},"Spending Pre-requisites API")," can be used to reliably obtain the Web3 transaction parameters for depositing into a Funding Source."),(0,r.kt)("p",null,"When a Funding Source is created, any deposits made prior to the creation of the Funding Source and associated with the depositing address will be credited immediately."),(0,r.kt)("h2",{id:"deployed-contract-addresses"},"Deployed Contract Addresses"),(0,r.kt)("p",null,"The Funds Manager contract is designed to work on any EVM. Currently supported chains and their contract address can be found below:"),(0,r.kt)("h3",{id:"mainnet"},"Mainnet"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Tokens"),(0,r.kt)("th",{parentName:"tr",align:null},"Funds Manager Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Funding Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Polygon POS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("nobr",null,(0,r.kt)("a",{parentName:"td",href:"https://polygonscan.com/token/0x3c499c542cef5e3811e1192ce70d8cc03d5c3359"},"USDC"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0xcd1c3d1c12437bD0375E3C4331771b31220125Bd#writeProxyContract"},"0xcd1c3d1c12437bD0375E3C4331771b31220125Bd")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"polygon-usdc-universal-evm-live"))))),(0,r.kt)("h3",{id:"testnet"},"Testnet"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f Do not transfer mainnet real assets to this address or funds will be lost. The following contracts are only intended to be used for testing integration with fake tokens.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Tokens"),(0,r.kt)("th",{parentName:"tr",align:null},"Funds Manager Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Funding Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Polygon Mumbai"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("nobr",null,(0,r.kt)("a",{parentName:"td",href:"https://mumbai.polygonscan.com/address/0x2FaC06acFAeB42CC3B5327fcF53F48D9Da72749d#code"},"IMMUSDC"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mumbai.polygonscan.com/address/0xe50FF3C352C0176c12c0a130dCa7655eC518fc40#writeProxyContract"},"0xe50FF3C352C0176c12c0a130dCa7655eC518fc40")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"polygon-usdc-universal-evm-test"))))),(0,r.kt)("h2",{id:"creating-a-funds-storage-instance"},"Creating a Funds Storage Instance"),(0,r.kt)("p",null,"Once a Funds Manager Address is selected, open it in it\u2019s corresponding Etherscan like page link from the tables above. We are going to use the Polygon one as an example:"),(0,r.kt)("p",null,"Link will land in the following page:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polygonscan-contract-landing",src:n(81110).Z,width:"1201",height:"784"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," section")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Write as Proxy")," section")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect with the desired web3 wallet:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"polygonscan-connect-web3",src:n(30967).Z,width:"149",height:"46"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Some Etherscan like pages will give a warning like the following."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"polygonscan-disclosure",src:n(86493).Z,width:"458",height:"231"})),(0,r.kt)("p",{parentName:"li"},"It can be ignored. Press OK to continue")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the desired wallet connection mechanism"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"polygonscan-connect-wallet",src:n(62352).Z,width:"513",height:"286"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Accept the connection in the wallet")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the wallet is connected, the following indicator should turn green and would indicate the connected wallet address"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"polygonscan-wallet-connected",src:n(32868).Z,width:"253",height:"51"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now that the wallet is connected, the next step is to actually create the Funds Storage instance. This is done via the ",(0,r.kt)("inlineCode",{parentName:"p"},"createFundsStorage")," function on the contract, and it can be invoked directly here:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"create-funds-storage-emtpy",src:n(57564).Z,width:"1155",height:"228"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Token address is the ERC-20 token that the integrator wants to support. Grab the address of the supported token from the table above. Integrator can provide any alphanumeric name for their own reference. Here is an example with the IMMUSDC token address:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"create-funds-storage-sample",src:n(17586).Z,width:"1144",height:"232"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Write")," to submit the transaction")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Accept the transaction on the connected wallet. Once the transaction is accepted on the wallet, it is submitted to the blockchain and a button will appear to keep track of the transaction:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"create-funds-storage-submitted",src:n(38634).Z,width:"368",height:"227"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This will open up the transaction details page. Details will appear once the transaction is confirmed so it can take up a few seconds to show up"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"create-funds-storage-trx",src:n(28206).Z,width:"951",height:"640"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go To the ",(0,r.kt)("inlineCode",{parentName:"p"},"Logs")," section and find the ",(0,r.kt)("inlineCode",{parentName:"p"},"FundsStorageCreated")," event log:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"create-funds-storage-trx-logs",src:n(98960).Z,width:"1075",height:"790"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In this example, the created funds storage instance address is ",(0,r.kt)("inlineCode",{parentName:"p"},"0x53C6A0cd42d8115B84BE3D5458b6cde15428752D"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the created funds storage address as the storageAddress in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.immersve.com/api-reference/create-a-funding-channel"},"Create Funding Channel")," endpoint"))))}g.isMDXComponent=!0},57564:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-funds-storage-emtpy-206b29f532483de78a6187d3c42940e9.png"},17586:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-funds-storage-sample-29aa83b44792514438a78355d753b7c1.png"},38634:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-funds-storage-submitted-ed36c5d257d23a20bf08d127db9cc095.png"},98960:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-funds-storage-trx-logs-a550da29489ce7873efaf3af938b6e27.png"},28206:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-funds-storage-trx-485cd1983683dba210fc47748aa05c48.png"},97959:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/overview-f94b3fb3dc61ef0788413494011f56bc.jpg"},62352:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/polygonscan-connect-wallet-fa66e5ad3bcdb1540c62c78ff6fc78a7.png"},30967:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},81110:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/polygonscan-contract-landing-ee58ef4fcc3ddb420678b4145186db08.png"},86493:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/polygonscan-disclosure-35314780b0a461f351568ec8d3ba4af0.png"},32868:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);