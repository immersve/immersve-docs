"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[8266],{63205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>y,toc:()=>g});var r=a(87462),i=(a(67294),a(3905)),n=a(26389),s=a(94891),o=a(75190),d=a(47507),c=a(24310),p=a(63303),m=(a(75035),a(85162));const l={id:"order-card",title:"Order a card - Legacy",description:"Order a virtual card for the current user.",sidebar_label:"Order a card - Legacy",hide_title:!0,hide_table_of_contents:!0,api:{deprecated:!0,tags:["card"],description:"Order a virtual card for the current user.\n",operationId:"orderCard",parameters:[{name:"useMinorUnits",in:"query",description:"When enabled, amount in request body must be in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}}],requestBody:{content:{"application/json":{schema:{type:"object",required:["transactionHash","amount","cardProgramId"],properties:{amount:{type:"string",description:'Amount as monetary value to be loaded. Example 1.1 USDC should be "1.1". If `useMinorUnits` is true, $1.1 USDC should be "1100000"'},currency:{type:"string",description:"Coin being used. Currently only USDC",example:"USDC"},transactionHash:{type:"string",description:"The hash of transaction transferring USDC to Immersve Payment Protocol smart contract",example:8234104122482341e60},cardProgramId:{type:"string",description:"The id of the card program"}},title:"card-order-request"}}},required:!0},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"Which account this card belongs to",example:"057aa15913a57f50577234c8426534c0"},externalId:{type:"string",description:"The external ID for this card",example:"8649543161870318367"},status:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},cardType:{type:"string",description:"The type of the card",enum:["virtual"]},panFirst6:{type:"string",description:"The first 6 digits of the card",example:"123456"},panLast4:{type:"string",description:"The last 4 digits of the card",example:"1920"},expiry:{type:"string",description:"The expiry of the card",example:"202409"},immersveExpiration:{type:"string",description:"The expiry as set by Immersve",example:"2022-11-16T03:18:23.431Z"},createdAt:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},modifiedAt:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},version:{type:"number",example:1},lockedFundId:{type:"string",example:"58"},lockedFundAmount:{type:"number",example:10},lockedFundCurrency:{type:"string",description:"The currency of this card",example:"USDC"}},title:"card"}}}}},method:"post",path:"/api/cards/orders",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{amount:"string",currency:"USDC",transactionHash:8234104122482341e60,cardProgramId:"string"},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Order a card - Legacy",description:{content:"Order a virtual card for the current user.\n",type:"text/plain"},url:{path:["api","cards","orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"When enabled, amount in request body must be in minor units, an integer in the smallest denomination for the given currency.",type:"text/plain"},key:"useMinorUnits",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},u=void 0,y={unversionedId:"api-reference/order-card",id:"api-reference/order-card",title:"Order a card - Legacy",description:"Order a virtual card for the current user.",source:"@site/docs/api-reference/order-card.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/order-card",permalink:"/api-reference/order-card",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"order-card",title:"Order a card - Legacy",description:"Order a virtual card for the current user.",sidebar_label:"Order a card - Legacy",hide_title:!0,hide_table_of_contents:!0,api:{deprecated:!0,tags:["card"],description:"Order a virtual card for the current user.\n",operationId:"orderCard",parameters:[{name:"useMinorUnits",in:"query",description:"When enabled, amount in request body must be in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}}],requestBody:{content:{"application/json":{schema:{type:"object",required:["transactionHash","amount","cardProgramId"],properties:{amount:{type:"string",description:'Amount as monetary value to be loaded. Example 1.1 USDC should be "1.1". If `useMinorUnits` is true, $1.1 USDC should be "1100000"'},currency:{type:"string",description:"Coin being used. Currently only USDC",example:"USDC"},transactionHash:{type:"string",description:"The hash of transaction transferring USDC to Immersve Payment Protocol smart contract",example:8234104122482341e60},cardProgramId:{type:"string",description:"The id of the card program"}},title:"card-order-request"}}},required:!0},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"Which account this card belongs to",example:"057aa15913a57f50577234c8426534c0"},externalId:{type:"string",description:"The external ID for this card",example:"8649543161870318367"},status:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},cardType:{type:"string",description:"The type of the card",enum:["virtual"]},panFirst6:{type:"string",description:"The first 6 digits of the card",example:"123456"},panLast4:{type:"string",description:"The last 4 digits of the card",example:"1920"},expiry:{type:"string",description:"The expiry of the card",example:"202409"},immersveExpiration:{type:"string",description:"The expiry as set by Immersve",example:"2022-11-16T03:18:23.431Z"},createdAt:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},modifiedAt:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},version:{type:"number",example:1},lockedFundId:{type:"string",example:"58"},lockedFundAmount:{type:"number",example:10},lockedFundCurrency:{type:"string",description:"The currency of this card",example:"USDC"}},title:"card"}}}}},method:"post",path:"/api/cards/orders",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{amount:"string",currency:"USDC",transactionHash:8234104122482341e60,cardProgramId:"string"},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Order a card - Legacy",description:{content:"Order a virtual card for the current user.\n",type:"text/plain"},url:{path:["api","cards","orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"When enabled, amount in request body must be in minor units, an integer in the smallest denomination for the given currency.",type:"text/plain"},key:"useMinorUnits",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"List cards",permalink:"/api-reference/list-cards"},next:{title:"Cancel a card synchronously",permalink:"/api-reference/cancel-a-card-synchronously"}},h={},g=[{value:"Order a card - Legacy",id:"order-a-card---legacy",level:2}],f={toc:g},x="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(x,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"order-a-card---legacy"},"Order a card - Legacy"),(0,i.kt)("admonition",{title:"deprecated",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,i.kt)("p",null,"Order a virtual card for the current user."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"useMinorUnits",in:"query",description:"When enabled, amount in request body must be in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"amount",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'Amount as monetary value to be loaded. Example 1.1 USDC should be "1.1". If `useMinorUnits` is true, $1.1 USDC should be "1100000"'},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"currency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Coin being used. Currently only USDC",example:"USDC"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"transactionHash",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The hash of transaction transferring USDC to Immersve Payment Protocol smart contract",example:8234104122482341e60},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"cardProgramId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the card program"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful operation")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"accountId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Which account this card belongs to",example:"057aa15913a57f50577234c8426534c0"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"externalId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The external ID for this card",example:"8649543161870318367"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`active`, `cancelled`, `created`, `shipped`]",schema:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"cardType",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`virtual`]",schema:{type:"string",description:"The type of the card",enum:["virtual"]},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"panFirst6",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The first 6 digits of the card",example:"123456"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"panLast4",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The last 4 digits of the card",example:"1920"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"expiry",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The expiry of the card",example:"202409"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"immersveExpiration",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The expiry as set by Immersve",example:"2022-11-16T03:18:23.431Z"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"modifiedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"version",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:1},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"lockedFundId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"58"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"lockedFundAmount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:10},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"lockedFundCurrency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The currency of this card",example:"USDC"},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "id": "91ad6fea3b52ca58d60d7fd310f789ec",\n  "accountId": "057aa15913a57f50577234c8426534c0",\n  "externalId": "8649543161870318367",\n  "status": "active",\n  "cardType": "virtual",\n  "panFirst6": "123456",\n  "panLast4": "1920",\n  "expiry": "202409",\n  "immersveExpiration": "2022-11-16T03:18:23.431Z",\n  "createdAt": "2022-11-16T03:13:18.142Z",\n  "modifiedAt": "2022-11-16T03:13:18.142Z",\n  "version": 1,\n  "lockedFundId": "58",\n  "lockedFundAmount": 10,\n  "lockedFundCurrency": "USDC"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);