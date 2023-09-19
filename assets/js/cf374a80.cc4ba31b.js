"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[4254],{97269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>y,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),r=(a(8209),a(26389)),n=a(94891),o=a(75190),c=a(47507),d=a(24310),p=a(63303),m=(a(75035),a(85162));const l={id:"list-asset-activities",title:"List asset activities",description:"List parsed smart contract event/log(s) for a single asset",sidebar_label:"List asset activities",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset-activities"],description:"List parsed smart contract event/log(s) for a single asset",parameters:[{name:"assetId",in:"path",description:"ID for the asset to fetch activities for",required:!0,schema:{type:"string"}},{name:"walletAddress",in:"query",description:"This address must be a funding wallet",required:!1,schema:{type:"string"}},{name:"fromUTC",in:"query",description:"Filter for activities from this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",required:!1,schema:{type:"string"}},{name:"toUTC",in:"query",description:"Filter for activities up to this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",required:!1,schema:{type:"string"}},{name:"eventTypes",in:"query",description:"Comma-separated list of smart contract event names that should be included",required:!1,schema:{type:"string",enum:["DepositedAndLocked","Withdrawal","ProcessedPartialPayment","ExtendedLockedFund","UnlockedLockedFund"]}},{name:"limit",in:"query",description:"Amount of records to return (max 1000)",required:!1,schema:{type:"number"}},{name:"cursor",in:"query",description:"Cursor to retrieve the next page",required:!1,schema:{type:"string"}},{name:"order",in:"query",description:'Order of activities. Use "asc" for oldest first and "desc" for newest first',required:!1,schema:{type:"string",enum:["asc","desc"]}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{eventId:{type:"string",description:"Event identifier. A unique ID generated from hash of blockHash, transactionHash, logIndex",example:"0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b"},eventType:{type:"string",description:"Smart contract event name",example:"LockedFundsWithDeposit"},chain:{type:"string",description:"Blockchain from where the event was fetched. Currently only supports Polygon",example:"Polygon"},lockedFundCurrency:{type:"string",description:"Transaction currency symbol. Currently only supports USDC currency",example:"USDC"},blockNumber:{type:"number",description:"Blockchain block number of the transaction initiating the event",example:3009},transactionHash:{type:"string",description:"The transaction ID on the blockchain",example:"0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b"},transactionDate:{type:"string",description:"ISO formatted date of the event",example:"2023-03-16T03:13:18.142Z"},sourceAddress:{type:"string",description:"Initiating actor of the transaction containing this event, in the form of a smart contract or wallet address",example:"0x777ab28C2A21cD99B3cDb27A416ed453b3b7cD3f"},targetAddress:{type:"string",description:"Target actor of the transaction containing this event, in the form of a smart contract or wallet address",example:"0xa0947892376e8c4da58ce68cdb100412aa126222"},amount:{type:"number",description:"Value of the transaction",example:10}},required:["eventId","eventType","chain","lockedFundCurrency","blockNumber","sourceAddress","transactionHash","transactionDate"],title:"asset-activity"}},pageInfo:{type:"object",description:"Page info for paginated results, undefined if no page info",properties:{nextCursor:{type:"string",description:"Cursor for next page, undefined if no more pages",example:"dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ=="},previousCursor:{type:"string",description:"Cursor for previous page, undefined if no previous page",example:"dGhlIHByZXZpb3VzIGN1cnNvciBnb2VzIGhlcmU="}},title:"page-info"}},title:"asset-activities-paging-result"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"No Authorization to access resource.",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/assets/{assetId}/activities",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"List asset activities",description:{content:"List parsed smart contract event/log(s) for a single asset",type:"text/plain"},url:{path:["api","assets",":assetId","activities"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"This address must be a funding wallet",type:"text/plain"},key:"walletAddress",value:""},{disabled:!1,description:{content:"Filter for activities from this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",type:"text/plain"},key:"fromUTC",value:""},{disabled:!1,description:{content:"Filter for activities up to this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",type:"text/plain"},key:"toUTC",value:""},{disabled:!1,description:{content:"Comma-separated list of smart contract event names that should be included",type:"text/plain"},key:"eventTypes",value:""},{disabled:!1,description:{content:"Amount of records to return (max 1000)",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor to retrieve the next page",type:"text/plain"},key:"cursor",value:""},{disabled:!1,description:{content:'Order of activities. Use "asc" for oldest first and "desc" for newest first',type:"text/plain"},key:"order",value:""}],variable:[{disabled:!1,description:{content:"(Required) ID for the asset to fetch activities for",type:"text/plain"},type:"any",value:"",key:"assetId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},u=void 0,y={unversionedId:"api-reference/list-asset-activities",id:"api-reference/list-asset-activities",title:"List asset activities",description:"List parsed smart contract event/log(s) for a single asset",source:"@site/docs/api-reference/list-asset-activities.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/list-asset-activities",permalink:"/api-reference/list-asset-activities",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-asset-activities",title:"List asset activities",description:"List parsed smart contract event/log(s) for a single asset",sidebar_label:"List asset activities",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset-activities"],description:"List parsed smart contract event/log(s) for a single asset",parameters:[{name:"assetId",in:"path",description:"ID for the asset to fetch activities for",required:!0,schema:{type:"string"}},{name:"walletAddress",in:"query",description:"This address must be a funding wallet",required:!1,schema:{type:"string"}},{name:"fromUTC",in:"query",description:"Filter for activities from this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",required:!1,schema:{type:"string"}},{name:"toUTC",in:"query",description:"Filter for activities up to this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",required:!1,schema:{type:"string"}},{name:"eventTypes",in:"query",description:"Comma-separated list of smart contract event names that should be included",required:!1,schema:{type:"string",enum:["DepositedAndLocked","Withdrawal","ProcessedPartialPayment","ExtendedLockedFund","UnlockedLockedFund"]}},{name:"limit",in:"query",description:"Amount of records to return (max 1000)",required:!1,schema:{type:"number"}},{name:"cursor",in:"query",description:"Cursor to retrieve the next page",required:!1,schema:{type:"string"}},{name:"order",in:"query",description:'Order of activities. Use "asc" for oldest first and "desc" for newest first',required:!1,schema:{type:"string",enum:["asc","desc"]}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{eventId:{type:"string",description:"Event identifier. A unique ID generated from hash of blockHash, transactionHash, logIndex",example:"0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b"},eventType:{type:"string",description:"Smart contract event name",example:"LockedFundsWithDeposit"},chain:{type:"string",description:"Blockchain from where the event was fetched. Currently only supports Polygon",example:"Polygon"},lockedFundCurrency:{type:"string",description:"Transaction currency symbol. Currently only supports USDC currency",example:"USDC"},blockNumber:{type:"number",description:"Blockchain block number of the transaction initiating the event",example:3009},transactionHash:{type:"string",description:"The transaction ID on the blockchain",example:"0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b"},transactionDate:{type:"string",description:"ISO formatted date of the event",example:"2023-03-16T03:13:18.142Z"},sourceAddress:{type:"string",description:"Initiating actor of the transaction containing this event, in the form of a smart contract or wallet address",example:"0x777ab28C2A21cD99B3cDb27A416ed453b3b7cD3f"},targetAddress:{type:"string",description:"Target actor of the transaction containing this event, in the form of a smart contract or wallet address",example:"0xa0947892376e8c4da58ce68cdb100412aa126222"},amount:{type:"number",description:"Value of the transaction",example:10}},required:["eventId","eventType","chain","lockedFundCurrency","blockNumber","sourceAddress","transactionHash","transactionDate"],title:"asset-activity"}},pageInfo:{type:"object",description:"Page info for paginated results, undefined if no page info",properties:{nextCursor:{type:"string",description:"Cursor for next page, undefined if no more pages",example:"dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ=="},previousCursor:{type:"string",description:"Cursor for previous page, undefined if no previous page",example:"dGhlIHByZXZpb3VzIGN1cnNvciBnb2VzIGhlcmU="}},title:"page-info"}},title:"asset-activities-paging-result"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"No Authorization to access resource.",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/assets/{assetId}/activities",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"List asset activities",description:{content:"List parsed smart contract event/log(s) for a single asset",type:"text/plain"},url:{path:["api","assets",":assetId","activities"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"This address must be a funding wallet",type:"text/plain"},key:"walletAddress",value:""},{disabled:!1,description:{content:"Filter for activities from this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",type:"text/plain"},key:"fromUTC",value:""},{disabled:!1,description:{content:"Filter for activities up to this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",type:"text/plain"},key:"toUTC",value:""},{disabled:!1,description:{content:"Comma-separated list of smart contract event names that should be included",type:"text/plain"},key:"eventTypes",value:""},{disabled:!1,description:{content:"Amount of records to return (max 1000)",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor to retrieve the next page",type:"text/plain"},key:"cursor",value:""},{disabled:!1,description:{content:'Order of activities. Use "asc" for oldest first and "desc" for newest first',type:"text/plain"},key:"order",value:""}],variable:[{disabled:!1,description:{content:"(Required) ID for the asset to fetch activities for",type:"text/plain"},type:"any",value:"",key:"assetId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Asset Activities",permalink:"/api-reference/asset-activities"},next:{title:"Get activity",permalink:"/api-reference/get-activity"}},h={},g=[{value:"List asset activities",id:"list-asset-activities",level:2}],f={toc:g};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"list-asset-activities"},"List asset activities"),(0,s.kt)("p",null,"List parsed smart contract event/log(s) for a single asset"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"assetId",in:"path",description:"ID for the asset to fetch activities for",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"walletAddress",in:"query",description:"This address must be a funding wallet",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"fromUTC",in:"query",description:"Filter for activities from this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"toUTC",in:"query",description:"Filter for activities up to this date (inclusive). Value should be a ISO 8601 string or RFC 2822 string",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"eventTypes",in:"query",description:"Comma-separated list of smart contract event names that should be included",required:!1,schema:{type:"string",enum:["DepositedAndLocked","Withdrawal","ProcessedPartialPayment","ExtendedLockedFund","UnlockedLockedFund"]}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Amount of records to return (max 1000)",required:!1,schema:{type:"number"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"Cursor to retrieve the next page",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"order",in:"query",description:'Order of activities. Use "asc" for oldest first and "desc" for newest first',required:!1,schema:{type:"string",enum:["asc","desc"]}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful operation")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"items"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"eventId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Event identifier. A unique ID generated from hash of blockHash, transactionHash, logIndex",example:"0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"eventType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Smart contract event name",example:"LockedFundsWithDeposit"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"chain",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Blockchain from where the event was fetched. Currently only supports Polygon",example:"Polygon"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"lockedFundCurrency",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Transaction currency symbol. Currently only supports USDC currency",example:"USDC"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"blockNumber",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Blockchain block number of the transaction initiating the event",example:3009},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"transactionHash",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The transaction ID on the blockchain",example:"0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"transactionDate",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ISO formatted date of the event",example:"2023-03-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"sourceAddress",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Initiating actor of the transaction containing this event, in the form of a smart contract or wallet address",example:"0x777ab28C2A21cD99B3cDb27A416ed453b3b7cD3f"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"targetAddress",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Target actor of the transaction containing this event, in the form of a smart contract or wallet address",example:"0xa0947892376e8c4da58ce68cdb100412aa126222"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Value of the transaction",example:10},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"pageInfo"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Page info for paginated results, undefined if no page info")),(0,s.kt)(d.Z,{collapsible:!1,name:"nextCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Cursor for next page, undefined if no more pages",example:"dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ=="},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"previousCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Cursor for previous page, undefined if no previous page",example:"dGhlIHByZXZpb3VzIGN1cnNvciBnb2VzIGhlcmU="},mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "items": [\n    {\n      "eventId": "0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b",\n      "eventType": "LockedFundsWithDeposit",\n      "chain": "Polygon",\n      "lockedFundCurrency": "USDC",\n      "blockNumber": 3009,\n      "transactionHash": "0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b",\n      "transactionDate": "2023-03-16T03:13:18.142Z",\n      "sourceAddress": "0x777ab28C2A21cD99B3cDb27A416ed453b3b7cD3f",\n      "targetAddress": "0xa0947892376e8c4da58ce68cdb100412aa126222",\n      "amount": 10\n    }\n  ],\n  "pageInfo": {\n    "nextCursor": "dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ==",\n    "previousCursor": "dGhlIHByZXZpb3VzIGN1cnNvciBnb2VzIGhlcmU="\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Request fields are invalid")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:400},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bad Request"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BAD_REQUEST"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"Expected string, received number"}},mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "statusCode": 400,\n  "statusName": "Bad Request",\n  "errorCode": "BAD_REQUEST",\n  "errors": [\n    "Expected string, received number"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"No Authorization to access resource.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);