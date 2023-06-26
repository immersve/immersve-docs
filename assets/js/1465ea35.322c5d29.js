"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[1701],{43867:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>h,toc:()=>f});var i=a(87462),n=(a(67294),a(3905)),r=(a(8209),a(26389)),s=a(94891),o=a(75190),c=a(47507),p=a(24310),d=a(63303),m=(a(75035),a(85162));const l={id:"list-transactions",title:"List transactions",description:"List card purchase transactions by account",sidebar_label:"List transactions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["transactions"],description:"List card purchase transactions by account",parameters:[{name:"accountId",in:"path",description:"accountId linked to transactions",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"amount of records to return (max 1000)",required:!1,schema:{type:"number"}},{name:"cursor",in:"query",description:"cursor to retrieve the next page",required:!1,schema:{type:"string"}},{name:"fromUTC",in:"query",description:"Filter for transactions from this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",required:!1,schema:{type:"string"}},{name:"toUTC",in:"query",description:"Filter for transactions up to this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",required:!1,schema:{type:"string"}},{name:"useMinorUnits",in:"query",description:"When enabled, amount and acquirerAmount in payload items will be returned in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"The transaction Id",example:"1000000178145"},description:{type:"string",description:"A description of the transaction",example:"Air NZ Online Auckland"},accountId:{type:"string",description:"Which account this transaction belongs to",example:"225d85e65495722bf6517ea0ba0d6f56"},status:{type:"string",description:"The status of the transaction",enum:["init","holding","cleared","failed"]},cardId:{type:"string",description:"Which card this transaction belongs to",example:"6c474aa7a5dc45bff721b5a207cf0f47"},amount:{type:"number",description:"The billing amount of the transaction",example:314.12},currency:{type:"string",description:"The billing currency of the transaction",example:"USD"},acquirerAmount:{type:"number",description:"The acquirer amount of the transaction",example:314.12},acquirerCurrency:{type:"string",description:"The acquirer currency of the transaction",example:"NZD"},lockedFundCurrency:{type:"string",description:"The locked funds' currency of the transaction",example:"USDC"},feeAmount:{type:"number",description:"The fee amount of the transaction",example:.12},chain:{type:"string",description:"The chain of the locked funds on",example:"Polygon"},transactionDate:{type:"string",format:"date-time",description:"The created date formatted in ISO of the transactions.",example:"2022-11-09T03:24:15.182Z"},processedDate:{type:"string",format:"date-time",description:"the cleared date formatted in ISO of the transactions.",example:"2022-11-09T03:24:15.182Z"},reference:{type:"string",description:"The reference used when making an enquiry through customer support",example:"1000000178145"},cardAcceptor:{type:"object",required:["city","countryCode","name"],properties:{city:{type:"string",description:"The city of the card acceptor",example:"Auckland"},countryCode:{type:"string",description:"The country code of the card acceptor",example:"NZ"},name:{type:"string",description:"The name of the card acceptor",example:"Air NZ Online"}}}},required:["id","description","accountId","status","cardId","amount","currency","acquirerAmount","acquirerCurrency","lockedFundCurrency","feeAmount","chain","transactionDate","reference","cardAcceptor"],title:"transaction"}},pageInfo:{type:"object",description:"Page info for paginated results, undefined if no page info",properties:{nextCursor:{type:"string",description:"Cursor for next page, undefined if no more pages",example:"dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ=="},previousCursor:{type:"string",description:"Cursor for previous page, undefined if no previous page",example:"dGhlIHByZXZpb3VzIGN1cnNvciBnb2VzIGhlcmU="}},title:"page-info"}},title:"transactions-paging-result"}}}}},method:"post",path:"/api/accounts/{account-id}/transactions",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"List transactions",description:{content:"List card purchase transactions by account",type:"text/plain"},url:{path:["api","accounts",":account-id","transactions"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"amount of records to return (max 1000)",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to retrieve the next page",type:"text/plain"},key:"cursor",value:""},{disabled:!1,description:{content:"Filter for transactions from this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",type:"text/plain"},key:"fromUTC",value:""},{disabled:!1,description:{content:"Filter for transactions up to this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",type:"text/plain"},key:"toUTC",value:""},{disabled:!1,description:{content:"When enabled, amount and acquirerAmount in payload items will be returned in minor units, an integer in the smallest denomination for the given currency.",type:"text/plain"},key:"useMinorUnits",value:""}],variable:[{disabled:!1,description:{content:"(Required) accountId linked to transactions",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},u=void 0,h={unversionedId:"api-reference/list-transactions",id:"api-reference/list-transactions",title:"List transactions",description:"List card purchase transactions by account",source:"@site/docs/api-reference/list-transactions.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/list-transactions",permalink:"/api-reference/list-transactions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-transactions",title:"List transactions",description:"List card purchase transactions by account",sidebar_label:"List transactions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["transactions"],description:"List card purchase transactions by account",parameters:[{name:"accountId",in:"path",description:"accountId linked to transactions",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"amount of records to return (max 1000)",required:!1,schema:{type:"number"}},{name:"cursor",in:"query",description:"cursor to retrieve the next page",required:!1,schema:{type:"string"}},{name:"fromUTC",in:"query",description:"Filter for transactions from this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",required:!1,schema:{type:"string"}},{name:"toUTC",in:"query",description:"Filter for transactions up to this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",required:!1,schema:{type:"string"}},{name:"useMinorUnits",in:"query",description:"When enabled, amount and acquirerAmount in payload items will be returned in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"The transaction Id",example:"1000000178145"},description:{type:"string",description:"A description of the transaction",example:"Air NZ Online Auckland"},accountId:{type:"string",description:"Which account this transaction belongs to",example:"225d85e65495722bf6517ea0ba0d6f56"},status:{type:"string",description:"The status of the transaction",enum:["init","holding","cleared","failed"]},cardId:{type:"string",description:"Which card this transaction belongs to",example:"6c474aa7a5dc45bff721b5a207cf0f47"},amount:{type:"number",description:"The billing amount of the transaction",example:314.12},currency:{type:"string",description:"The billing currency of the transaction",example:"USD"},acquirerAmount:{type:"number",description:"The acquirer amount of the transaction",example:314.12},acquirerCurrency:{type:"string",description:"The acquirer currency of the transaction",example:"NZD"},lockedFundCurrency:{type:"string",description:"The locked funds' currency of the transaction",example:"USDC"},feeAmount:{type:"number",description:"The fee amount of the transaction",example:.12},chain:{type:"string",description:"The chain of the locked funds on",example:"Polygon"},transactionDate:{type:"string",format:"date-time",description:"The created date formatted in ISO of the transactions.",example:"2022-11-09T03:24:15.182Z"},processedDate:{type:"string",format:"date-time",description:"the cleared date formatted in ISO of the transactions.",example:"2022-11-09T03:24:15.182Z"},reference:{type:"string",description:"The reference used when making an enquiry through customer support",example:"1000000178145"},cardAcceptor:{type:"object",required:["city","countryCode","name"],properties:{city:{type:"string",description:"The city of the card acceptor",example:"Auckland"},countryCode:{type:"string",description:"The country code of the card acceptor",example:"NZ"},name:{type:"string",description:"The name of the card acceptor",example:"Air NZ Online"}}}},required:["id","description","accountId","status","cardId","amount","currency","acquirerAmount","acquirerCurrency","lockedFundCurrency","feeAmount","chain","transactionDate","reference","cardAcceptor"],title:"transaction"}},pageInfo:{type:"object",description:"Page info for paginated results, undefined if no page info",properties:{nextCursor:{type:"string",description:"Cursor for next page, undefined if no more pages",example:"dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ=="},previousCursor:{type:"string",description:"Cursor for previous page, undefined if no previous page",example:"dGhlIHByZXZpb3VzIGN1cnNvciBnb2VzIGhlcmU="}},title:"page-info"}},title:"transactions-paging-result"}}}}},method:"post",path:"/api/accounts/{account-id}/transactions",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"List transactions",description:{content:"List card purchase transactions by account",type:"text/plain"},url:{path:["api","accounts",":account-id","transactions"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"amount of records to return (max 1000)",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to retrieve the next page",type:"text/plain"},key:"cursor",value:""},{disabled:!1,description:{content:"Filter for transactions from this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",type:"text/plain"},key:"fromUTC",value:""},{disabled:!1,description:{content:"Filter for transactions up to this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",type:"text/plain"},key:"toUTC",value:""},{disabled:!1,description:{content:"When enabled, amount and acquirerAmount in payload items will be returned in minor units, an integer in the smallest denomination for the given currency.",type:"text/plain"},key:"useMinorUnits",value:""}],variable:[{disabled:!1,description:{content:"(Required) accountId linked to transactions",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get a transaction",permalink:"/api-reference/get-a-transaction"},next:{title:"KYC (Custodial)",permalink:"/api-reference/kyc-custodial"}},y={},f=[{value:"List transactions",id:"list-transactions",level:2}],g={toc:f};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"list-transactions"},"List transactions"),(0,n.kt)("p",null,"List card purchase transactions by account"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"accountId",in:"path",description:"accountId linked to transactions",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"amount of records to return (max 1000)",required:!1,schema:{type:"number"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"cursor to retrieve the next page",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"fromUTC",in:"query",description:"Filter for transactions from this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"toUTC",in:"query",description:"Filter for transactions up to this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"useMinorUnits",in:"query",description:"When enabled, amount and acquirerAmount in payload items will be returned in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Successful operation")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"items"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The transaction Id",example:"1000000178145"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A description of the transaction",example:"Air NZ Online Auckland"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Which account this transaction belongs to",example:"225d85e65495722bf6517ea0ba0d6f56"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`init`, `holding`, `cleared`, `failed`]",schema:{type:"string",description:"The status of the transaction",enum:["init","holding","cleared","failed"]},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"cardId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Which card this transaction belongs to",example:"6c474aa7a5dc45bff721b5a207cf0f47"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"amount",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The billing amount of the transaction",example:314.12},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"currency",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The billing currency of the transaction",example:"USD"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"acquirerAmount",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The acquirer amount of the transaction",example:314.12},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"acquirerCurrency",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The acquirer currency of the transaction",example:"NZD"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"lockedFundCurrency",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locked funds' currency of the transaction",example:"USDC"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"feeAmount",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The fee amount of the transaction",example:.12},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"chain",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The chain of the locked funds on",example:"Polygon"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"transactionDate",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The created date formatted in ISO of the transactions.",example:"2022-11-09T03:24:15.182Z"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"processedDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"the cleared date formatted in ISO of the transactions.",example:"2022-11-09T03:24:15.182Z"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"reference",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The reference used when making an enquiry through customer support",example:"1000000178145"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"cardAcceptor"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"city",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The city of the card acceptor",example:"Auckland"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"countryCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The country code of the card acceptor",example:"NZ"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the card acceptor",example:"Air NZ Online"},mdxType:"SchemaItem"})))),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"pageInfo"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Page info for paginated results, undefined if no page info")),(0,n.kt)(p.Z,{collapsible:!1,name:"nextCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Cursor for next page, undefined if no more pages",example:"dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ=="},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"previousCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Cursor for previous page, undefined if no previous page",example:"dGhlIHByZXZpb3VzIGN1cnNvciBnb2VzIGhlcmU="},mdxType:"SchemaItem"}))))))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "items": [\n    {\n      "id": "1000000178145",\n      "description": "Air NZ Online Auckland",\n      "accountId": "225d85e65495722bf6517ea0ba0d6f56",\n      "status": "init",\n      "cardId": "6c474aa7a5dc45bff721b5a207cf0f47",\n      "amount": 314.12,\n      "currency": "USD",\n      "acquirerAmount": 314.12,\n      "acquirerCurrency": "NZD",\n      "lockedFundCurrency": "USDC",\n      "feeAmount": 0.12,\n      "chain": "Polygon",\n      "transactionDate": "2022-11-09T03:24:15.182Z",\n      "processedDate": "2022-11-09T03:24:15.182Z",\n      "reference": "1000000178145",\n      "cardAcceptor": {\n        "city": "Auckland",\n        "countryCode": "NZ",\n        "name": "Air NZ Online"\n      }\n    }\n  ],\n  "pageInfo": {\n    "nextCursor": "dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ==",\n    "previousCursor": "dGhlIHByZXZpb3VzIGN1cnNvciBnb2VzIGhlcmU="\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);