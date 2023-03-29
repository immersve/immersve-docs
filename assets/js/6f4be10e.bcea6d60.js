"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[4201],{87838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var r=a(87462),i=(a(67294),a(3905)),n=(a(8209),a(26389)),s=a(94891),o=a(75190),c=a(47507),p=a(24310),m=a(63303),l=(a(75035),a(85162));const d={id:"get-prerequisites",title:"Get prerequisites",description:"This endpoint returns the requisite blockchain transactions required to permit the action (ex. creation of a new Immersve Card). It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.",sidebar_label:"Get prerequisites",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card","prerequisites"],description:"This endpoint returns the requisite blockchain transactions required to permit the action (ex. creation of a new Immersve Card). It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.\n",parameters:[{in:"path",name:"action",required:!0,schema:{type:"string",enum:["create-card","deposit"]}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{chainId:{type:"string",description:"Chain ID (see https://chainlist.org/)",example:"1"},amount:{type:"string",description:"The amount to be locked in the smart contract denominated in the major unit."},token:{type:"string",description:"The asset or token the amount is denominated in.",enum:["USDC"]}},title:"get-prerequisite-transactions-request"}}},required:!0},responses:{200:{description:"User is allowed to perform action. Client should be able to request transactions from the user wallet to Immersve wallet\nThe client needs to parse transaction info and convert it to the chain-specific calls\n",content:{"application/json":{schema:{type:"object",properties:{requiredTransactions:{type:"array",items:{type:"object",properties:{type:{type:"string",enum:["erc20_approval","smart_contract_write"]},params:{oneOf:[{title:"erc20_approval",type:"object",properties:{spender:{type:"string",description:"The address of the spender of the ERC-20 approval"},amount:{type:"string",description:"The approval amount"},token:{type:"string"}}},{title:"smart_contract_write",type:"object",properties:{contractAddress:{type:"string",description:"The address of the smart contract"},abi:{type:"string",description:"The ABI of the smart contract"},method:{type:"string",description:"Smart contract method"},params:{type:"object",description:"Smart contract call params"}}}]}}}}},title:"get-prerequisite-transactions-response"},example:'{\n  "requiredTransactions": [\n    {\n        "type": "erc20_approval",\n        "params": {\n            "spender": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",\n            "amount": {\n                "total": 320.22,\n                "token": "USDC"\n            }\n        }\n    },\n    {\n        "type": "smart_contract_write",\n        "params": {\n            "contractAddress": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",\n            "method": "depositAndCreateLockedFund"\n            "params": {\n                "usdcAmount": 320.22\n            }\n        }\n    }\n  ]\n}\n'}}},403:{description:"User is not allowed to get the deposit details with the reason stated in the `message`\n\n**KYC_REQUIRED** \nUser is required to perform KYC because they are about to spend the amount that exceeds the KYC-free limit.\nImmersve requires them to provide identification information to comply with regulatory requirements\n\n**AML_REQUIRED**\nUser is not allowed to create a card due to AML Checks Failing\nImmersve AML Provider found that the funding wallet might not comply with AML and can\u2019t check the origin of funds for the provided wallet. User will need to go through AML process to validate the source of the funds on the wallet\n\n**AML_PERMANENTLY_FAILED**\nSimilar to AML_REQUIRED, except the user can not remediate the failing check, because the intended deposit wallet is permanently blacklisted.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer"},message:{type:"string"},error:{type:"string"}},required:["statusCode","message","error"],title:"api-error"}}}}},method:"post",path:"/api/prerequisites/{action}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{chainId:"1",amount:"string",token:"USDC"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get prerequisites",description:{content:"This endpoint returns the requisite blockchain transactions required to permit the action (ex. creation of a new Immersve Card). It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.\n",type:"text/plain"},url:{path:["api","prerequisites",":action"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"action"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},u=void 0,h={unversionedId:"api-reference/get-prerequisites",id:"api-reference/get-prerequisites",title:"Get prerequisites",description:"This endpoint returns the requisite blockchain transactions required to permit the action (ex. creation of a new Immersve Card). It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.",source:"@site/docs/api-reference/get-prerequisites.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/get-prerequisites",permalink:"/api-reference/get-prerequisites",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-prerequisites",title:"Get prerequisites",description:"This endpoint returns the requisite blockchain transactions required to permit the action (ex. creation of a new Immersve Card). It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.",sidebar_label:"Get prerequisites",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card","prerequisites"],description:"This endpoint returns the requisite blockchain transactions required to permit the action (ex. creation of a new Immersve Card). It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.\n",parameters:[{in:"path",name:"action",required:!0,schema:{type:"string",enum:["create-card","deposit"]}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{chainId:{type:"string",description:"Chain ID (see https://chainlist.org/)",example:"1"},amount:{type:"string",description:"The amount to be locked in the smart contract denominated in the major unit."},token:{type:"string",description:"The asset or token the amount is denominated in.",enum:["USDC"]}},title:"get-prerequisite-transactions-request"}}},required:!0},responses:{200:{description:"User is allowed to perform action. Client should be able to request transactions from the user wallet to Immersve wallet\nThe client needs to parse transaction info and convert it to the chain-specific calls\n",content:{"application/json":{schema:{type:"object",properties:{requiredTransactions:{type:"array",items:{type:"object",properties:{type:{type:"string",enum:["erc20_approval","smart_contract_write"]},params:{oneOf:[{title:"erc20_approval",type:"object",properties:{spender:{type:"string",description:"The address of the spender of the ERC-20 approval"},amount:{type:"string",description:"The approval amount"},token:{type:"string"}}},{title:"smart_contract_write",type:"object",properties:{contractAddress:{type:"string",description:"The address of the smart contract"},abi:{type:"string",description:"The ABI of the smart contract"},method:{type:"string",description:"Smart contract method"},params:{type:"object",description:"Smart contract call params"}}}]}}}}},title:"get-prerequisite-transactions-response"},example:'{\n  "requiredTransactions": [\n    {\n        "type": "erc20_approval",\n        "params": {\n            "spender": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",\n            "amount": {\n                "total": 320.22,\n                "token": "USDC"\n            }\n        }\n    },\n    {\n        "type": "smart_contract_write",\n        "params": {\n            "contractAddress": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",\n            "method": "depositAndCreateLockedFund"\n            "params": {\n                "usdcAmount": 320.22\n            }\n        }\n    }\n  ]\n}\n'}}},403:{description:"User is not allowed to get the deposit details with the reason stated in the `message`\n\n**KYC_REQUIRED** \nUser is required to perform KYC because they are about to spend the amount that exceeds the KYC-free limit.\nImmersve requires them to provide identification information to comply with regulatory requirements\n\n**AML_REQUIRED**\nUser is not allowed to create a card due to AML Checks Failing\nImmersve AML Provider found that the funding wallet might not comply with AML and can\u2019t check the origin of funds for the provided wallet. User will need to go through AML process to validate the source of the funds on the wallet\n\n**AML_PERMANENTLY_FAILED**\nSimilar to AML_REQUIRED, except the user can not remediate the failing check, because the intended deposit wallet is permanently blacklisted.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer"},message:{type:"string"},error:{type:"string"}},required:["statusCode","message","error"],title:"api-error"}}}}},method:"post",path:"/api/prerequisites/{action}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{chainId:"1",amount:"string",token:"USDC"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get prerequisites",description:{content:"This endpoint returns the requisite blockchain transactions required to permit the action (ex. creation of a new Immersve Card). It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response.\n",type:"text/plain"},url:{path:["api","prerequisites",":action"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"action"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get prerequisite transactions",permalink:"/api-reference/get-prerequisite-transactions"},next:{title:"Get secure card details",permalink:"/api-reference/get-secure-card-details"}},y={},g=[{value:"Get prerequisites",id:"get-prerequisites",level:2}],f={toc:g};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-prerequisites"},"Get prerequisites"),(0,i.kt)("p",null,"This endpoint returns the requisite blockchain transactions required to permit the action (ex. creation of a new Immersve Card). It also indicates if everything is in order before instructing the client of any blockchain transactions. Insufficient KYC and AML status may trigger an error response."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{in:"path",name:"action",required:!0,schema:{type:"string",enum:["create-card","deposit"]}},mdxType:"ParamsItem"})))),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"chainId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Chain ID (see https://chainlist.org/)",example:"1"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The amount to be locked in the smart contract denominated in the major unit."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"token",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`USDC`]",schema:{type:"string",description:"The asset or token the amount is denominated in.",enum:["USDC"]},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"User is allowed to perform action. Client should be able to request transactions from the user wallet to Immersve wallet\nThe client needs to parse transaction info and convert it to the chain-specific calls")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"requiredTransactions"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`erc20_approval`, `smart_contract_write`]",schema:{type:"string",enum:["erc20_approval","smart_contract_write"]},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"params"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"erc20_approval",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(p.Z,{collapsible:!1,name:"spender",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The address of the spender of the ERC-20 approval"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The approval amount"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"token",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})),(0,i.kt)(l.Z,{label:"smart_contract_write",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(p.Z,{collapsible:!1,name:"contractAddress",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The address of the smart contract"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"abi",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ABI of the smart contract"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"method",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Smart contract method"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"params",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",description:"Smart contract call params"},mdxType:"SchemaItem"}))))))),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "requiredTransactions": [\n    {\n      "type": "erc20_approval",\n      "params": {\n        "spender": "string",\n        "amount": "string",\n        "token": "string"\n      }\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "requiredTransactions": [\n    {\n        "type": "erc20_approval",\n        "params": {\n            "spender": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",\n            "amount": {\n                "total": 320.22,\n                "token": "USDC"\n            }\n        }\n    },\n    {\n        "type": "smart_contract_write",\n        "params": {\n            "contractAddress": "0xCf0ed659452b092750D9BB54c33c0025b6853aa4",\n            "method": "depositAndCreateLockedFund"\n            "params": {\n                "usdcAmount": 320.22\n            }\n        }\n    }\n  ]\n}\n',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(l.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"User is not allowed to get the deposit details with the reason stated in the ",(0,i.kt)("inlineCode",{parentName:"p"},"message")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"KYC_REQUIRED"),"\nUser is required to perform KYC because they are about to spend the amount that exceeds the KYC-free limit.\nImmersve requires them to provide identification information to comply with regulatory requirements"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AML_REQUIRED"),"\nUser is not allowed to create a card due to AML Checks Failing\nImmersve AML Provider found that the funding wallet might not comply with AML and can\u2019t check the origin of funds for the provided wallet. User will need to go through AML process to validate the source of the funds on the wallet"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AML_PERMANENTLY_FAILED"),"\nSimilar to AML_REQUIRED, except the user can not remediate the failing check, because the intended deposit wallet is permanently blacklisted.")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"error",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "statusCode": 0,\n  "message": "string",\n  "error": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);