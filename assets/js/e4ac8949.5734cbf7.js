"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[8108],{60774:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>f});var i=a(87462),n=(a(67294),a(3905)),r=(a(8209),a(26389)),s=a(94891),c=a(75190),o=a(47507),d=a(24310),p=a(63303),m=(a(75035),a(85162));const l={id:"get-a-transaction",title:"Get a transaction",description:"This endpoint returns the details of a card purchase transaction by a given ID.",sidebar_label:"Get a transaction",hide_title:!0,hide_table_of_contents:!0,api:{tags:["transactions"],description:"This endpoint returns the details of a card purchase transaction by a given ID.",parameters:[{name:"transactionId",in:"path",description:"Primary identifier of the transaction to fetch",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{allOf:[{type:"object",properties:{id:{type:"string",description:"The transaction ID",example:"1000000178145"},description:{type:"string",description:"A description of the transaction",example:"Air NZ Online Auckland"},accountId:{type:"string",description:"Which account this transaction belongs to",example:"225d85e65495722bf6517ea0ba0d6f56"},status:{type:"string",description:"The status of the transaction",enum:["init","holding","cleared","failed"]},cardId:{type:"string",description:"Which card this transaction belongs to",example:"6c474aa7a5dc45bff721b5a207cf0f47"},amount:{type:"string",description:"The billing amount of the transaction, an integer in the smallest denomination for the given currency",example:"31412"},currency:{type:"string",description:"The billing currency of the transaction",example:"USD"},acquirerAmount:{type:"string",description:"The acquirer amount of the transaction, an integer in the smallest denomination for the given currency",example:"31412"},acquirerCurrency:{type:"string",description:"The acquirer currency of the transaction",example:"NZD"},lockedFundCurrency:{type:"string",description:"The locked funds' currency of the transaction",example:"USDC"},feeAmount:{type:"string",description:"The fee amount of the transaction",example:"12"},chain:{type:"string",description:"The chain of the locked funds on",example:"Polygon"},transactionDate:{type:"string",format:"date-time",description:"The created date formatted in ISO of the transactions",example:"2022-11-09T03:24:15.182Z"},processedDate:{type:"string",format:"date-time",description:"The cleared date formatted in ISO of the transactions",example:"2022-11-09T03:24:15.182Z"},reference:{type:"string",description:"The reference used when making an enquiry through customer support",example:"1000000178145"},cardAcceptor:{type:"object",required:["city","countryCode","name"],properties:{city:{type:"string",description:"The city of the card acceptor",example:"Auckland"},countryCode:{type:"string",description:"The country code of the card acceptor",example:"NZ"},name:{type:"string",description:"The name of the card acceptor",example:"Air NZ Online"}}},creditDebitIndicator:{type:"string",description:"Indicates if the transaction was a credit or debit",enum:["credit","debit"]}},required:["id","description","accountId","status","cardId","amount","currency","acquirerAmount","acquirerCurrency","lockedFundCurrency","feeAmount","chain","transactionDate","reference","cardAcceptor"],title:"transaction"},{type:"object",required:["web3Transactions","panFirst6","panLast4"],properties:{web3Transactions:{items:{type:"object",required:["type","hash"],properties:{type:{type:"string",enum:["debit","credit"],description:"The type of the web3 transaction:\n  * `debit` - The transaction is from the cardholders\u2019 balance to Immersve balance\n  * `credit` - The transaction is from Immersve balance to cardholders\u2019 balance\n"},hash:{type:"string",description:"The hash of the web3 transaction",example:"0x6f87ad90847828cb8575bd8f3c9a9cdde12a2e53e047604b6012f156495cce1e"},transactionId:{type:"string",description:"The associated credit card transaction ID",example:"1000000178145"},transactionType:{type:"string",description:"The associated credit card transaction type",enum:["authorization","clearing","reversal"]}}}},panFirst6:{type:"string",description:"The first 6 digits of the card's PAN",example:"123456"},panLast6:{type:"string",description:"The last 4 digits of the card's PAN",example:"1234"}},title:"transaction-detail-extension"}]}}}}},method:"get",path:"/api/transactions/{transactionId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Get a transaction",description:{content:"This endpoint returns the details of a card purchase transaction by a given ID.",type:"text/plain"},url:{path:["api","transactions",":transactionId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Primary identifier of the transaction to fetch",type:"text/plain"},type:"any",value:"",key:"transactionId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},h=void 0,u={unversionedId:"api-reference/get-a-transaction",id:"api-reference/get-a-transaction",title:"Get a transaction",description:"This endpoint returns the details of a card purchase transaction by a given ID.",source:"@site/docs/api-reference/get-a-transaction.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/get-a-transaction",permalink:"/api-reference/get-a-transaction",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-a-transaction",title:"Get a transaction",description:"This endpoint returns the details of a card purchase transaction by a given ID.",sidebar_label:"Get a transaction",hide_title:!0,hide_table_of_contents:!0,api:{tags:["transactions"],description:"This endpoint returns the details of a card purchase transaction by a given ID.",parameters:[{name:"transactionId",in:"path",description:"Primary identifier of the transaction to fetch",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{allOf:[{type:"object",properties:{id:{type:"string",description:"The transaction ID",example:"1000000178145"},description:{type:"string",description:"A description of the transaction",example:"Air NZ Online Auckland"},accountId:{type:"string",description:"Which account this transaction belongs to",example:"225d85e65495722bf6517ea0ba0d6f56"},status:{type:"string",description:"The status of the transaction",enum:["init","holding","cleared","failed"]},cardId:{type:"string",description:"Which card this transaction belongs to",example:"6c474aa7a5dc45bff721b5a207cf0f47"},amount:{type:"string",description:"The billing amount of the transaction, an integer in the smallest denomination for the given currency",example:"31412"},currency:{type:"string",description:"The billing currency of the transaction",example:"USD"},acquirerAmount:{type:"string",description:"The acquirer amount of the transaction, an integer in the smallest denomination for the given currency",example:"31412"},acquirerCurrency:{type:"string",description:"The acquirer currency of the transaction",example:"NZD"},lockedFundCurrency:{type:"string",description:"The locked funds' currency of the transaction",example:"USDC"},feeAmount:{type:"string",description:"The fee amount of the transaction",example:"12"},chain:{type:"string",description:"The chain of the locked funds on",example:"Polygon"},transactionDate:{type:"string",format:"date-time",description:"The created date formatted in ISO of the transactions",example:"2022-11-09T03:24:15.182Z"},processedDate:{type:"string",format:"date-time",description:"The cleared date formatted in ISO of the transactions",example:"2022-11-09T03:24:15.182Z"},reference:{type:"string",description:"The reference used when making an enquiry through customer support",example:"1000000178145"},cardAcceptor:{type:"object",required:["city","countryCode","name"],properties:{city:{type:"string",description:"The city of the card acceptor",example:"Auckland"},countryCode:{type:"string",description:"The country code of the card acceptor",example:"NZ"},name:{type:"string",description:"The name of the card acceptor",example:"Air NZ Online"}}},creditDebitIndicator:{type:"string",description:"Indicates if the transaction was a credit or debit",enum:["credit","debit"]}},required:["id","description","accountId","status","cardId","amount","currency","acquirerAmount","acquirerCurrency","lockedFundCurrency","feeAmount","chain","transactionDate","reference","cardAcceptor"],title:"transaction"},{type:"object",required:["web3Transactions","panFirst6","panLast4"],properties:{web3Transactions:{items:{type:"object",required:["type","hash"],properties:{type:{type:"string",enum:["debit","credit"],description:"The type of the web3 transaction:\n  * `debit` - The transaction is from the cardholders\u2019 balance to Immersve balance\n  * `credit` - The transaction is from Immersve balance to cardholders\u2019 balance\n"},hash:{type:"string",description:"The hash of the web3 transaction",example:"0x6f87ad90847828cb8575bd8f3c9a9cdde12a2e53e047604b6012f156495cce1e"},transactionId:{type:"string",description:"The associated credit card transaction ID",example:"1000000178145"},transactionType:{type:"string",description:"The associated credit card transaction type",enum:["authorization","clearing","reversal"]}}}},panFirst6:{type:"string",description:"The first 6 digits of the card's PAN",example:"123456"},panLast6:{type:"string",description:"The last 4 digits of the card's PAN",example:"1234"}},title:"transaction-detail-extension"}]}}}}},method:"get",path:"/api/transactions/{transactionId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Get a transaction",description:{content:"This endpoint returns the details of a card purchase transaction by a given ID.",type:"text/plain"},url:{path:["api","transactions",":transactionId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Primary identifier of the transaction to fetch",type:"text/plain"},type:"any",value:"",key:"transactionId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Transactions",permalink:"/api-reference/transactions"},next:{title:"List transactions",permalink:"/api-reference/list-transactions"}},y={},f=[{value:"Get a transaction",id:"get-a-transaction",level:2}],g={toc:f};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-a-transaction"},"Get a transaction"),(0,n.kt)("p",null,"This endpoint returns the details of a card purchase transaction by a given ID."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(c.Z,{className:"paramsItem",param:{name:"transactionId",in:"path",description:"Primary identifier of the transaction to fetch",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The transaction ID",example:"1000000178145"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A description of the transaction",example:"Air NZ Online Auckland"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Which account this transaction belongs to",example:"225d85e65495722bf6517ea0ba0d6f56"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`init`, `holding`, `cleared`, `failed`]",schema:{type:"string",description:"The status of the transaction",enum:["init","holding","cleared","failed"]},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"cardId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Which card this transaction belongs to",example:"6c474aa7a5dc45bff721b5a207cf0f47"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"amount",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The billing amount of the transaction, an integer in the smallest denomination for the given currency",example:"31412"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"currency",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The billing currency of the transaction",example:"USD"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"acquirerAmount",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The acquirer amount of the transaction, an integer in the smallest denomination for the given currency",example:"31412"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"acquirerCurrency",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The acquirer currency of the transaction",example:"NZD"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"lockedFundCurrency",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locked funds' currency of the transaction",example:"USDC"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"feeAmount",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The fee amount of the transaction",example:"12"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"chain",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The chain of the locked funds on",example:"Polygon"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"transactionDate",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The created date formatted in ISO of the transactions",example:"2022-11-09T03:24:15.182Z"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"processedDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The cleared date formatted in ISO of the transactions",example:"2022-11-09T03:24:15.182Z"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"reference",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The reference used when making an enquiry through customer support",example:"1000000178145"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"cardAcceptor"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"city",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The city of the card acceptor",example:"Auckland"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"countryCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The country code of the card acceptor",example:"NZ"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the card acceptor",example:"Air NZ Online"},mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!1,name:"creditDebitIndicator",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`credit`, `debit`]",schema:{type:"string",description:"Indicates if the transaction was a credit or debit",enum:["credit","debit"]},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"web3Transactions"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`debit`, `credit`]",schema:{type:"string",enum:["debit","credit"],description:"The type of the web3 transaction:\n  * `debit` - The transaction is from the cardholders\u2019 balance to Immersve balance\n  * `credit` - The transaction is from Immersve balance to cardholders\u2019 balance\n"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"hash",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The hash of the web3 transaction",example:"0x6f87ad90847828cb8575bd8f3c9a9cdde12a2e53e047604b6012f156495cce1e"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"transactionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The associated credit card transaction ID",example:"1000000178145"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"transactionType",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`authorization`, `clearing`, `reversal`]",schema:{type:"string",description:"The associated credit card transaction type",enum:["authorization","clearing","reversal"]},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(d.Z,{collapsible:!1,name:"panFirst6",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The first 6 digits of the card's PAN",example:"123456"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"panLast6",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The last 4 digits of the card's PAN",example:"1234"},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "id": "1000000178145",\n  "description": "Air NZ Online Auckland",\n  "accountId": "225d85e65495722bf6517ea0ba0d6f56",\n  "status": "init",\n  "cardId": "6c474aa7a5dc45bff721b5a207cf0f47",\n  "amount": "31412",\n  "currency": "USD",\n  "acquirerAmount": "31412",\n  "acquirerCurrency": "NZD",\n  "lockedFundCurrency": "USDC",\n  "feeAmount": "12",\n  "chain": "Polygon",\n  "transactionDate": "2022-11-09T03:24:15.182Z",\n  "processedDate": "2022-11-09T03:24:15.182Z",\n  "reference": "1000000178145",\n  "cardAcceptor": {\n    "city": "Auckland",\n    "countryCode": "NZ",\n    "name": "Air NZ Online"\n  },\n  "creditDebitIndicator": "credit",\n  "web3Transactions": [\n    {\n      "type": "debit",\n      "hash": "0x6f87ad90847828cb8575bd8f3c9a9cdde12a2e53e047604b6012f156495cce1e",\n      "transactionId": "1000000178145",\n      "transactionType": "authorization"\n    }\n  ],\n  "panFirst6": "123456",\n  "panLast6": "1234"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);