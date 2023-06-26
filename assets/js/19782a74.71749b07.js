"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[6403],{41258:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>y,toc:()=>g});var i=a(87462),r=(a(67294),a(3905)),s=(a(8209),a(26389)),n=a(94891),d=a(75190),c=a(47507),o=a(24310),m=a(63303),p=(a(75035),a(85162));const l={id:"get-card-details",title:"Get card details",description:"Returns the non-sensitive details of a card by a given id.",sidebar_label:"Get card details",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"Returns the non-sensitive details of a card by a given id.",parameters:[{name:"cardId",in:"path",description:"Primary identifier of the card to fetch",required:!0,schema:{type:"string"}},{name:"useMinorUnits",in:"query",description:"When enabled, lockedFundAmount in payload will be returned in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}}],responses:{200:{content:{"application/json":{schema:{type:"object",required:["id","accountId","type","createdAt","modifiedAt","isBlocked","status"],properties:{id:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"User account id linked to card",example:"057aa15913a57f50577234c8426534c0"},type:{type:"string",description:"Type of the card",enum:["virtual"]},createdAt:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},modifiedAt:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},isBlocked:{type:"boolean",description:"Whether the card is blocked"},status:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},expiry:{type:"string",description:"Expiry date of the card of physical cards",example:"202409"},currency:{type:"string",description:"The currency of this card",example:"USDC"},panFirst6:{type:"string",description:"First 6 digits of the card Primary Account Number",example:"123456"},panLast4:{type:"string",description:"Last 4 digits of the card Primary Account Number",example:"1920"},immersveExpiration:{type:"string",description:"Expiry as set by Immersve for short-lived cards",example:"2022-11-16T03:18:23.431Z"},lockedFundId:{type:"string",description:"Id of AssetLockedFund on the Immersve Payment Protocol",example:"58"},lockedFundAmount:{type:"number",example:10},lockedFundCurrency:{type:"string",description:"Currency used to lock funds on card creation",example:"USDC"},fundingWallet:{type:"string",description:"Address of the wallet used to fund the card",example:"0x7D0b0d249A7fB85A5c5F5A5e3b6A2d6c9A6D684B"}},title:"get-card"}}}},403:{description:"No Authorization to access resource.",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer"},message:{type:"string"},error:{type:"string"}},required:["statusCode","message","error"],title:"api-error"}}}}},method:"get",path:"/api/cards/{cardId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get card details",description:{content:"Returns the non-sensitive details of a card by a given id.",type:"text/plain"},url:{path:["api","cards",":cardId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"When enabled, lockedFundAmount in payload will be returned in minor units, an integer in the smallest denomination for the given currency.",type:"text/plain"},key:"useMinorUnits",value:""}],variable:[{disabled:!1,description:{content:"(Required) Primary identifier of the card to fetch",type:"text/plain"},type:"any",value:"",key:"cardId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},u=void 0,y={unversionedId:"api-reference/get-card-details",id:"api-reference/get-card-details",title:"Get card details",description:"Returns the non-sensitive details of a card by a given id.",source:"@site/docs/api-reference/get-card-details.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/get-card-details",permalink:"/api-reference/get-card-details",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-card-details",title:"Get card details",description:"Returns the non-sensitive details of a card by a given id.",sidebar_label:"Get card details",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"Returns the non-sensitive details of a card by a given id.",parameters:[{name:"cardId",in:"path",description:"Primary identifier of the card to fetch",required:!0,schema:{type:"string"}},{name:"useMinorUnits",in:"query",description:"When enabled, lockedFundAmount in payload will be returned in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}}],responses:{200:{content:{"application/json":{schema:{type:"object",required:["id","accountId","type","createdAt","modifiedAt","isBlocked","status"],properties:{id:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"User account id linked to card",example:"057aa15913a57f50577234c8426534c0"},type:{type:"string",description:"Type of the card",enum:["virtual"]},createdAt:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},modifiedAt:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},isBlocked:{type:"boolean",description:"Whether the card is blocked"},status:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},expiry:{type:"string",description:"Expiry date of the card of physical cards",example:"202409"},currency:{type:"string",description:"The currency of this card",example:"USDC"},panFirst6:{type:"string",description:"First 6 digits of the card Primary Account Number",example:"123456"},panLast4:{type:"string",description:"Last 4 digits of the card Primary Account Number",example:"1920"},immersveExpiration:{type:"string",description:"Expiry as set by Immersve for short-lived cards",example:"2022-11-16T03:18:23.431Z"},lockedFundId:{type:"string",description:"Id of AssetLockedFund on the Immersve Payment Protocol",example:"58"},lockedFundAmount:{type:"number",example:10},lockedFundCurrency:{type:"string",description:"Currency used to lock funds on card creation",example:"USDC"},fundingWallet:{type:"string",description:"Address of the wallet used to fund the card",example:"0x7D0b0d249A7fB85A5c5F5A5e3b6A2d6c9A6D684B"}},title:"get-card"}}}},403:{description:"No Authorization to access resource.",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer"},message:{type:"string"},error:{type:"string"}},required:["statusCode","message","error"],title:"api-error"}}}}},method:"get",path:"/api/cards/{cardId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get card details",description:{content:"Returns the non-sensitive details of a card by a given id.",type:"text/plain"},url:{path:["api","cards",":cardId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"When enabled, lockedFundAmount in payload will be returned in minor units, an integer in the smallest denomination for the given currency.",type:"text/plain"},key:"useMinorUnits",value:""}],variable:[{disabled:!1,description:{content:"(Required) Primary identifier of the card to fetch",type:"text/plain"},type:"any",value:"",key:"cardId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get prerequisites",permalink:"/api-reference/get-prerequisites"},next:{title:"List cards",permalink:"/api-reference/list-cards"}},h={},g=[{value:"Get card details",id:"get-card-details",level:2}],f={toc:g};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-card-details"},"Get card details"),(0,r.kt)("p",null,"Returns the non-sensitive details of a card by a given id."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"cardId",in:"path",description:"Primary identifier of the card to fetch",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"useMinorUnits",in:"query",description:"When enabled, lockedFundAmount in payload will be returned in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"User account id linked to card",example:"057aa15913a57f50577234c8426534c0"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`virtual`]",schema:{type:"string",description:"Type of the card",enum:["virtual"]},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"modifiedAt",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"isBlocked",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the card is blocked"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`active`, `cancelled`, `created`, `shipped`]",schema:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"expiry",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Expiry date of the card of physical cards",example:"202409"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"currency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The currency of this card",example:"USDC"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"panFirst6",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"First 6 digits of the card Primary Account Number",example:"123456"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"panLast4",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Last 4 digits of the card Primary Account Number",example:"1920"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"immersveExpiration",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Expiry as set by Immersve for short-lived cards",example:"2022-11-16T03:18:23.431Z"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lockedFundId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Id of AssetLockedFund on the Immersve Payment Protocol",example:"58"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lockedFundAmount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:10},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lockedFundCurrency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Currency used to lock funds on card creation",example:"USDC"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"fundingWallet",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Address of the wallet used to fund the card",example:"0x7D0b0d249A7fB85A5c5F5A5e3b6A2d6c9A6D684B"},mdxType:"SchemaItem"})))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "id": "91ad6fea3b52ca58d60d7fd310f789ec",\n  "accountId": "057aa15913a57f50577234c8426534c0",\n  "type": "virtual",\n  "createdAt": "2022-11-16T03:13:18.142Z",\n  "modifiedAt": "2022-11-16T03:13:18.142Z",\n  "isBlocked": true,\n  "status": "active",\n  "expiry": "202409",\n  "currency": "USDC",\n  "panFirst6": "123456",\n  "panLast4": "1920",\n  "immersveExpiration": "2022-11-16T03:18:23.431Z",\n  "lockedFundId": "58",\n  "lockedFundAmount": 10,\n  "lockedFundCurrency": "USDC",\n  "fundingWallet": "0x7D0b0d249A7fB85A5c5F5A5e3b6A2d6c9A6D684B"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(p.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"No Authorization to access resource.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"message",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"error",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "statusCode": 0,\n  "message": "string",\n  "error": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);