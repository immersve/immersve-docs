"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[4267],{53192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>y,toc:()=>g});var i=a(25773),r=(a(27378),a(35318)),s=a(7743),n=a(30712),d=a(76377),c=a(30980),o=a(68388),p=a(34806),m=(a(23067),a(39798));const l={id:"get-card-details",title:"Get card details",description:"Returns the non-sensitive details of a card by a given ID.",sidebar_label:"Get card details",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"Returns the non-sensitive details of a card by a given ID.",parameters:[{name:"cardId",in:"path",description:"Primary identifier of the card to fetch",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{type:"object",required:["id","accountId","type","createdAt","modifiedAt","isBlocked","status","fundingSourceIds","expiresAt"],properties:{id:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"User account ID linked to card",example:"057aa15913a57f50577234c8426534c0"},type:{type:"string",description:"Type of the card",enum:["virtual"]},createdAt:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},modifiedAt:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},expiresAt:{type:"string",description:"Timestamp of card expiration",example:"2029-02-28T23:59:59.999Z"},isBlocked:{type:"boolean",description:"Whether the card is blocked"},status:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},fundingSourceIds:{type:"array",description:"List of Funding Source IDs linked to the card"},expiry:{type:"string",description:"Expiry date of the card",example:"202409"},currency:{type:"string",description:"The currency of this card",example:"USDC | USD"},panFirst6:{type:"string",description:"First 6 digits of the card's PAN (Primary Account Number)",example:"123456"},panLast4:{type:"string",description:"Last 4 digits of the card's PAN (Primary Account Number)",example:"1920"},immersveExpiration:{type:"string",description:"Deprecated field, use expiresAt",example:"2022-11-16T03:18:23.431Z"},lockedFundAmount:{type:"string",description:"Legacy cards only. An integer in the smallest denomination for the given currency",example:10},lockedFundCurrency:{type:"string",description:"Legacy cards only. Currency used to lock funds on card creation",example:"USDC"},fundingWallet:{type:"string",description:"Legacy cards only. Address of the wallet used to fund the card",example:"0x7D0b0d249A7fB85A5c5F5A5e3b6A2d6c9A6D684B"}},title:"card"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"No Authorization to access resource.",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/cards/{cardId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Get card details",description:{content:"Returns the non-sensitive details of a card by a given ID.",type:"text/plain"},url:{path:["api","cards",":cardId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Primary identifier of the card to fetch",type:"text/plain"},type:"any",value:"",key:"cardId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"immersve-api",custom_edit_url:null},u=void 0,y={unversionedId:"get-card-details",id:"get-card-details",title:"Get card details",description:"Returns the non-sensitive details of a card by a given ID.",source:"@site/docs/get-card-details.api.mdx",sourceDirName:".",slug:"/get-card-details",permalink:"/api-reference/get-card-details",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-card-details",title:"Get card details",description:"Returns the non-sensitive details of a card by a given ID.",sidebar_label:"Get card details",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"Returns the non-sensitive details of a card by a given ID.",parameters:[{name:"cardId",in:"path",description:"Primary identifier of the card to fetch",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{type:"object",required:["id","accountId","type","createdAt","modifiedAt","isBlocked","status","fundingSourceIds","expiresAt"],properties:{id:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"User account ID linked to card",example:"057aa15913a57f50577234c8426534c0"},type:{type:"string",description:"Type of the card",enum:["virtual"]},createdAt:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},modifiedAt:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},expiresAt:{type:"string",description:"Timestamp of card expiration",example:"2029-02-28T23:59:59.999Z"},isBlocked:{type:"boolean",description:"Whether the card is blocked"},status:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},fundingSourceIds:{type:"array",description:"List of Funding Source IDs linked to the card"},expiry:{type:"string",description:"Expiry date of the card",example:"202409"},currency:{type:"string",description:"The currency of this card",example:"USDC | USD"},panFirst6:{type:"string",description:"First 6 digits of the card's PAN (Primary Account Number)",example:"123456"},panLast4:{type:"string",description:"Last 4 digits of the card's PAN (Primary Account Number)",example:"1920"},immersveExpiration:{type:"string",description:"Deprecated field, use expiresAt",example:"2022-11-16T03:18:23.431Z"},lockedFundAmount:{type:"string",description:"Legacy cards only. An integer in the smallest denomination for the given currency",example:10},lockedFundCurrency:{type:"string",description:"Legacy cards only. Currency used to lock funds on card creation",example:"USDC"},fundingWallet:{type:"string",description:"Legacy cards only. Address of the wallet used to fund the card",example:"0x7D0b0d249A7fB85A5c5F5A5e3b6A2d6c9A6D684B"}},title:"card"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"No Authorization to access resource.",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/cards/{cardId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Get card details",description:{content:"Returns the non-sensitive details of a card by a given ID.",type:"text/plain"},url:{path:["api","cards",":cardId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Primary identifier of the card to fetch",type:"text/plain"},type:"any",value:"",key:"cardId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get a card token",permalink:"/api-reference/get-a-card-token"},next:{title:"List cards",permalink:"/api-reference/list-cards"}},h={},g=[{value:"Get card details",id:"get-card-details",level:2}],f={toc:g},x="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(x,(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-card-details"},"Get card details"),(0,r.kt)("p",null,"Returns the non-sensitive details of a card by a given ID."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"cardId",in:"path",description:"Primary identifier of the card to fetch",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"User account ID linked to card",example:"057aa15913a57f50577234c8426534c0"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`virtual`]",schema:{type:"string",description:"Type of the card",enum:["virtual"]},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"modifiedAt",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"expiresAt",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of card expiration",example:"2029-02-28T23:59:59.999Z"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"isBlocked",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the card is blocked"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`active`, `cancelled`, `created`, `shipped`]",schema:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"fundingSourceIds",required:!0,schemaName:"array",qualifierMessage:void 0,schema:{type:"array",description:"List of Funding Source IDs linked to the card"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"expiry",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Expiry date of the card",example:"202409"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"currency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The currency of this card",example:"USDC | USD"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"panFirst6",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"First 6 digits of the card's PAN (Primary Account Number)",example:"123456"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"panLast4",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Last 4 digits of the card's PAN (Primary Account Number)",example:"1920"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"immersveExpiration",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Deprecated field, use expiresAt",example:"2022-11-16T03:18:23.431Z"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lockedFundAmount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Legacy cards only. An integer in the smallest denomination for the given currency",example:10},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lockedFundCurrency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Legacy cards only. Currency used to lock funds on card creation",example:"USDC"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"fundingWallet",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Legacy cards only. Address of the wallet used to fund the card",example:"0x7D0b0d249A7fB85A5c5F5A5e3b6A2d6c9A6D684B"},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "id": "91ad6fea3b52ca58d60d7fd310f789ec",\n  "accountId": "057aa15913a57f50577234c8426534c0",\n  "type": "virtual",\n  "createdAt": "2022-11-16T03:13:18.142Z",\n  "modifiedAt": "2022-11-16T03:13:18.142Z",\n  "expiresAt": "2029-02-28T23:59:59.999Z",\n  "isBlocked": true,\n  "status": "active",\n  "fundingSourceIds": [\n    null\n  ],\n  "expiry": "202409",\n  "currency": "USDC | USD",\n  "panFirst6": "123456",\n  "panLast4": "1920",\n  "immersveExpiration": "2022-11-16T03:18:23.431Z",\n  "lockedFundAmount": 10,\n  "lockedFundCurrency": "USDC",\n  "fundingWallet": "0x7D0b0d249A7fB85A5c5F5A5e3b6A2d6c9A6D684B"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request fields are invalid")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:400},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bad Request"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BAD_REQUEST"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"Expected string, received number"}},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "statusCode": 400,\n  "statusName": "Bad Request",\n  "errorCode": "BAD_REQUEST",\n  "errors": [\n    "Expected string, received number"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"No Authorization to access resource.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);