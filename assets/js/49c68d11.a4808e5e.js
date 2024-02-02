"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[2910],{66748:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>x,frontMatter:()=>l,metadata:()=>y,toc:()=>b});var i=a(87462),r=(a(67294),a(3905)),s=a(26389),n=a(94891),c=a(75190),o=a(47507),p=a(24310),m=a(63303),d=(a(75035),a(85162));const l={id:"get-activity",title:"Get activity",description:"Get a single parsed smart contract event/log by ID",sidebar_label:"Get activity",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset-activities"],description:"Get a single parsed smart contract event/log by ID",parameters:[{name:"assetId",in:"path",description:"ID of the asset",example:"USDC",required:!0,schema:{type:"string"}},{name:"eventId",in:"path",description:"ID of the event to fetch",required:!0,schema:{type:"string"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{eventId:{type:"string",description:"Event identifier. A unique ID generated from hash of blockHash, transactionHash, logIndex",example:"0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b"},eventType:{type:"string",description:"Smart contract event name",example:"LockedFundsWithDeposit"},chain:{type:"string",description:"Blockchain from where the event was fetched. Currently only supports Polygon",example:"Polygon"},lockedFundCurrency:{type:"string",description:"Transaction currency symbol. Currently only supports USDC currency",example:"USDC"},blockNumber:{type:"number",description:"Blockchain block number of the transaction initiating the event",example:3009},transactionHash:{type:"string",description:"The transaction ID on the blockchain",example:"0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b"},transactionDate:{type:"string",description:"ISO formatted date of the event",example:"2023-03-16T03:13:18.142Z"},sourceAddress:{type:"string",description:"Initiating actor of the transaction containing this event, in the form of a smart contract or wallet address",example:"0x777ab28C2A21cD99B3cDb27A416ed453b3b7cD3f"},targetAddress:{type:"string",description:"Target actor of the transaction containing this event, in the form of a smart contract or wallet address",example:"0xa0947892376e8c4da58ce68cdb100412aa126222"},amount:{type:"number",description:"Value of the transaction",example:10}},required:["eventId","eventType","chain","lockedFundCurrency","blockNumber","sourceAddress","transactionHash","transactionDate"],title:"asset-activity"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"No Authorization to access resource.",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/assets/{assetId}/activities/{eventId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Get activity",description:{content:"Get a single parsed smart contract event/log by ID",type:"text/plain"},url:{path:["api","assets",":assetId","activities",":eventId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the asset",type:"text/plain"},type:"any",value:"",key:"assetId"},{disabled:!1,description:{content:"(Required) ID of the event to fetch",type:"text/plain"},type:"any",value:"",key:"eventId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},u=void 0,y={unversionedId:"api-reference/get-activity",id:"api-reference/get-activity",title:"Get activity",description:"Get a single parsed smart contract event/log by ID",source:"@site/docs/api-reference/get-activity.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/get-activity",permalink:"/api-reference/get-activity",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-activity",title:"Get activity",description:"Get a single parsed smart contract event/log by ID",sidebar_label:"Get activity",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset-activities"],description:"Get a single parsed smart contract event/log by ID",parameters:[{name:"assetId",in:"path",description:"ID of the asset",example:"USDC",required:!0,schema:{type:"string"}},{name:"eventId",in:"path",description:"ID of the event to fetch",required:!0,schema:{type:"string"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{eventId:{type:"string",description:"Event identifier. A unique ID generated from hash of blockHash, transactionHash, logIndex",example:"0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b"},eventType:{type:"string",description:"Smart contract event name",example:"LockedFundsWithDeposit"},chain:{type:"string",description:"Blockchain from where the event was fetched. Currently only supports Polygon",example:"Polygon"},lockedFundCurrency:{type:"string",description:"Transaction currency symbol. Currently only supports USDC currency",example:"USDC"},blockNumber:{type:"number",description:"Blockchain block number of the transaction initiating the event",example:3009},transactionHash:{type:"string",description:"The transaction ID on the blockchain",example:"0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b"},transactionDate:{type:"string",description:"ISO formatted date of the event",example:"2023-03-16T03:13:18.142Z"},sourceAddress:{type:"string",description:"Initiating actor of the transaction containing this event, in the form of a smart contract or wallet address",example:"0x777ab28C2A21cD99B3cDb27A416ed453b3b7cD3f"},targetAddress:{type:"string",description:"Target actor of the transaction containing this event, in the form of a smart contract or wallet address",example:"0xa0947892376e8c4da58ce68cdb100412aa126222"},amount:{type:"number",description:"Value of the transaction",example:10}},required:["eventId","eventType","chain","lockedFundCurrency","blockNumber","sourceAddress","transactionHash","transactionDate"],title:"asset-activity"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"No Authorization to access resource.",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/assets/{assetId}/activities/{eventId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Get activity",description:{content:"Get a single parsed smart contract event/log by ID",type:"text/plain"},url:{path:["api","assets",":assetId","activities",":eventId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the asset",type:"text/plain"},type:"any",value:"",key:"assetId"},{disabled:!1,description:{content:"(Required) ID of the event to fetch",type:"text/plain"},type:"any",value:"",key:"eventId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"List asset activities",permalink:"/api-reference/list-asset-activities"},next:{title:"Get balance",permalink:"/api-reference/get-balance"}},h={},b=[{value:"Get activity",id:"get-activity",level:2}],g={toc:b},v="wrapper";function x(e){let{components:t,...a}=e;return(0,r.kt)(v,(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-activity"},"Get activity"),(0,r.kt)("p",null,"Get a single parsed smart contract event/log by ID"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(c.Z,{className:"paramsItem",param:{name:"assetId",in:"path",description:"ID of the asset",example:"USDC",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(c.Z,{className:"paramsItem",param:{name:"eventId",in:"path",description:"ID of the event to fetch",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Successful operation")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"eventId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Event identifier. A unique ID generated from hash of blockHash, transactionHash, logIndex",example:"0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"eventType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Smart contract event name",example:"LockedFundsWithDeposit"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"chain",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Blockchain from where the event was fetched. Currently only supports Polygon",example:"Polygon"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"lockedFundCurrency",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Transaction currency symbol. Currently only supports USDC currency",example:"USDC"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"blockNumber",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Blockchain block number of the transaction initiating the event",example:3009},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"transactionHash",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The transaction ID on the blockchain",example:"0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"transactionDate",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ISO formatted date of the event",example:"2023-03-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"sourceAddress",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Initiating actor of the transaction containing this event, in the form of a smart contract or wallet address",example:"0x777ab28C2A21cD99B3cDb27A416ed453b3b7cD3f"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"targetAddress",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Target actor of the transaction containing this event, in the form of a smart contract or wallet address",example:"0xa0947892376e8c4da58ce68cdb100412aa126222"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Value of the transaction",example:10},mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "eventId": "0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b",\n  "eventType": "LockedFundsWithDeposit",\n  "chain": "Polygon",\n  "lockedFundCurrency": "USDC",\n  "blockNumber": 3009,\n  "transactionHash": "0xa0a08a5c5e72cc7d52beb1867bb5c328809af27c423e202b2c6394e528b5797b",\n  "transactionDate": "2023-03-16T03:13:18.142Z",\n  "sourceAddress": "0x777ab28C2A21cD99B3cDb27A416ed453b3b7cD3f",\n  "targetAddress": "0xa0947892376e8c4da58ce68cdb100412aa126222",\n  "amount": 10\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request fields are invalid")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:400},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bad Request"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BAD_REQUEST"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"Expected string, received number"}},mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "statusCode": 400,\n  "statusName": "Bad Request",\n  "errorCode": "BAD_REQUEST",\n  "errors": [\n    "Expected string, received number"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"No Authorization to access resource.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);