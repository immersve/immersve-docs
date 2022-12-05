(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[9690],{55903:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>u,toc:()=>f});var n=a(87462),r=(a(67294),a(3905)),i=(a(19959),a(26389)),s=a(94891),o=(a(74933),a(47507)),c=a(24310),l=a(63303),m=(a(75035),a(85162));const p={id:"get-prerequisite-transactions",title:"Get Prerequisite Transactions",description:"This endpoint returns the requisite blockchain transactions required to permit the creation of a new Immersve Card. It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.",sidebar_label:"Get Prerequisite Transactions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"This endpoint returns the requisite blockchain transactions required to permit the creation of a new Immersve Card. It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.\n",requestBody:{content:{"application/json":{schema:{type:"object",properties:{chainId:{type:"string",description:"Chain ID (see https://chainlist.org/)",example:"1"},amount:{type:"string",description:"The amount to be locked in the smart contract denominated in the major unit."},token:{type:"string",description:"The asset or token the amount is denominated in.",enum:["USDC"]}}}}},required:!0},responses:{200:{description:"User is allowed to generate a new card. Client should be able to request transactions from the user wallet to Immersve wallet\nThe client needs to parse transaction info and convert it to the chain-specific calls\n",content:{"application/json":{schema:{type:"object",properties:{requiredTransactions:{type:"array",items:{type:"object",properties:{type:{type:"string",enum:["erc20_approval","smart_contract_write"]},params:{oneOf:[{title:"erc20_approval",type:"object",properties:{spender:{type:"string",description:"The address of the spender of the ERC-20 approval"},amount:{type:"string",description:"The approval amount"},token:{type:"string"}}},{title:"smart_contract_write",type:"object",properties:{contractAddress:{type:"string",description:"The address of the smart contract"},abi:{type:"string",description:"The ABI of the smart contract"},method:{type:"string",description:"Smart contract method"},params:{type:"object",description:"Smart contract call params"}}}]}}}}}},example:'{\n  "requiredTransactions": [\n    {\n        "type": "erc20_approval",\n        "params": {\n            "spender": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",\n            "amount": {\n                "total": 320.22,\n                "token": "USDC"\n            }\n        }\n    },\n    {\n        "type": "smart_contract_write",\n        "params": {\n            "contractAddress": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",\n            "method": "depositAndCreateLockedFund"\n            "params": {\n                "usdcAmount": 320.22\n            }\n        }\n    }\n  ]\n}\n'}}},403:{description:"User is not allowed to get the deposit details with the reason stated in the `message`\n\n**KYC_REQUIRED** \nUser is required to perform KYC because they are about to spend the amount that exceeds the KYC-free limit.\nImmersve requires them to provide identification information to comply with regulatory requirements\n\n**AML_REQUIRED**\nUser is not allowed to create a card due to AML Checks Failing\nImmersve AML Provider found that the funding wallet might not comply with AML and can\u2019t check the origin of funds for the provided wallet. User will need to go through AML process to validate the source of the funds on the wallet\n\n**AML_PERMANENTLY_FAILED**\nSimilar to AML_REQUIRED, except the user can not remediate the failing check, because the intended deposit wallet is permanently blacklisted.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer"},message:{type:"string"},error:{type:"string"}},required:["statusCode","message","error"]}}}}},method:"post",path:"/api/cards/get-prerequisite-transactions",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"}},jsonRequestBodyExample:{chainId:"1",amount:"string",token:"USDC"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get Prerequisite Transactions",description:{content:"This endpoint returns the requisite blockchain transactions required to permit the creation of a new Immersve Card. It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.\n",type:"text/plain"},url:{path:["api","cards","get-prerequisite-transactions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api"},d=void 0,u={unversionedId:"api-reference/get-prerequisite-transactions",id:"api-reference/get-prerequisite-transactions",title:"Get Prerequisite Transactions",description:"This endpoint returns the requisite blockchain transactions required to permit the creation of a new Immersve Card. It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.",source:"@site/docs/api-reference/get-prerequisite-transactions.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/get-prerequisite-transactions",permalink:"/api-reference/get-prerequisite-transactions",draft:!1,tags:[],version:"current",frontMatter:{id:"get-prerequisite-transactions",title:"Get Prerequisite Transactions",description:"This endpoint returns the requisite blockchain transactions required to permit the creation of a new Immersve Card. It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.",sidebar_label:"Get Prerequisite Transactions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"This endpoint returns the requisite blockchain transactions required to permit the creation of a new Immersve Card. It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.\n",requestBody:{content:{"application/json":{schema:{type:"object",properties:{chainId:{type:"string",description:"Chain ID (see https://chainlist.org/)",example:"1"},amount:{type:"string",description:"The amount to be locked in the smart contract denominated in the major unit."},token:{type:"string",description:"The asset or token the amount is denominated in.",enum:["USDC"]}}}}},required:!0},responses:{200:{description:"User is allowed to generate a new card. Client should be able to request transactions from the user wallet to Immersve wallet\nThe client needs to parse transaction info and convert it to the chain-specific calls\n",content:{"application/json":{schema:{type:"object",properties:{requiredTransactions:{type:"array",items:{type:"object",properties:{type:{type:"string",enum:["erc20_approval","smart_contract_write"]},params:{oneOf:[{title:"erc20_approval",type:"object",properties:{spender:{type:"string",description:"The address of the spender of the ERC-20 approval"},amount:{type:"string",description:"The approval amount"},token:{type:"string"}}},{title:"smart_contract_write",type:"object",properties:{contractAddress:{type:"string",description:"The address of the smart contract"},abi:{type:"string",description:"The ABI of the smart contract"},method:{type:"string",description:"Smart contract method"},params:{type:"object",description:"Smart contract call params"}}}]}}}}}},example:'{\n  "requiredTransactions": [\n    {\n        "type": "erc20_approval",\n        "params": {\n            "spender": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",\n            "amount": {\n                "total": 320.22,\n                "token": "USDC"\n            }\n        }\n    },\n    {\n        "type": "smart_contract_write",\n        "params": {\n            "contractAddress": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",\n            "method": "depositAndCreateLockedFund"\n            "params": {\n                "usdcAmount": 320.22\n            }\n        }\n    }\n  ]\n}\n'}}},403:{description:"User is not allowed to get the deposit details with the reason stated in the `message`\n\n**KYC_REQUIRED** \nUser is required to perform KYC because they are about to spend the amount that exceeds the KYC-free limit.\nImmersve requires them to provide identification information to comply with regulatory requirements\n\n**AML_REQUIRED**\nUser is not allowed to create a card due to AML Checks Failing\nImmersve AML Provider found that the funding wallet might not comply with AML and can\u2019t check the origin of funds for the provided wallet. User will need to go through AML process to validate the source of the funds on the wallet\n\n**AML_PERMANENTLY_FAILED**\nSimilar to AML_REQUIRED, except the user can not remediate the failing check, because the intended deposit wallet is permanently blacklisted.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer"},message:{type:"string"},error:{type:"string"}},required:["statusCode","message","error"]}}}}},method:"post",path:"/api/cards/get-prerequisite-transactions",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"}},jsonRequestBodyExample:{chainId:"1",amount:"string",token:"USDC"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get Prerequisite Transactions",description:{content:"This endpoint returns the requisite blockchain transactions required to permit the creation of a new Immersve Card. It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.\n",type:"text/plain"},url:{path:["api","cards","get-prerequisite-transactions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api"},sidebar:"primarySidebar",previous:{title:"Get a Card Token",permalink:"/api-reference/get-a-card-token"},next:{title:"Get Secure Card Details",permalink:"/api-reference/get-secure-card-details"}},h={},f=[{value:"Get Prerequisite Transactions",id:"get-prerequisite-transactions",level:2}],g={toc:f};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-prerequisite-transactions"},"Get Prerequisite Transactions"),(0,r.kt)("p",null,"This endpoint returns the requisite blockchain transactions required to permit the creation of a new Immersve Card. It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response."),(0,r.kt)(s.Z,{mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"chainId",required:!1,schemaDescription:"Chain ID (see https://chainlist.org/)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"amount",required:!1,schemaDescription:"The amount to be locked in the smart contract denominated in the major unit.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"token",required:!1,schemaDescription:"The asset or token the amount is denominated in.",schemaName:"string",qualifierMessage:"**Possible values:** [`USDC`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"User is allowed to generate a new card. Client should be able to request transactions from the user wallet to Immersve wallet\nThe client needs to parse transaction info and convert it to the chain-specific calls")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"requiredTransactions"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`erc20_approval`, `smart_contract_write`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"params"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"erc20_approval",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)(c.Z,{collapsible:!1,name:"spender",required:!1,schemaDescription:"The address of the spender of the ERC-20 approval",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"amount",required:!1,schemaDescription:"The approval amount",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"token",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,r.kt)(m.Z,{label:"smart_contract_write",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)(c.Z,{collapsible:!1,name:"contractAddress",required:!1,schemaDescription:"The address of the smart contract",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"abi",required:!1,schemaDescription:"The ABI of the smart contract",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"method",required:!1,schemaDescription:"Smart contract method",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"params",required:!1,schemaDescription:"Smart contract call params",schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "requiredTransactions": [\n    {\n      "type": "erc20_approval",\n      "params": {\n        "spender": "string",\n        "amount": "string",\n        "token": "string"\n      }\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,r.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "requiredTransactions": [\n    {\n        "type": "erc20_approval",\n        "params": {\n            "spender": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",\n            "amount": {\n                "total": 320.22,\n                "token": "USDC"\n            }\n        }\n    },\n    {\n        "type": "smart_contract_write",\n        "params": {\n            "contractAddress": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",\n            "method": "depositAndCreateLockedFund"\n            "params": {\n                "usdcAmount": 320.22\n            }\n        }\n    }\n  ]\n}\n',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"User is not allowed to get the deposit details with the reason stated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"message")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"KYC_REQUIRED"),"\nUser is required to perform KYC because they are about to spend the amount that exceeds the KYC-free limit.\nImmersve requires them to provide identification information to comply with regulatory requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AML_REQUIRED"),"\nUser is not allowed to create a card due to AML Checks Failing\nImmersve AML Provider found that the funding wallet might not comply with AML and can\u2019t check the origin of funds for the provided wallet. User will need to go through AML process to validate the source of the funds on the wallet"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AML_PERMANENTLY_FAILED"),"\nSimilar to AML_REQUIRED, except the user can not remediate the failing check, because the intended deposit wallet is permanently blacklisted.")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"statusCode",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "statusCode": 0,\n  "message": "string",\n  "error": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0},11748:(e,t,a)=>{var n={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=11748}}]);