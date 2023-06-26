"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[8032],{99021:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>x,frontMatter:()=>l,metadata:()=>y,toc:()=>g});var a=i(87462),r=(i(67294),i(3905)),s=(i(8209),i(26389)),n=i(94891),d=i(75190),c=i(47507),o=i(24310),p=i(63303),m=(i(75035),i(85162));const l={id:"list-cards",title:"List cards",description:"Lists cards by account",sidebar_label:"List cards",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"Lists cards by account",parameters:[{name:"accountId",in:"path",description:"AccountId linked to transactions",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"Number of records to return",required:!1,schema:{type:"number"}},{name:"cursor",in:"query",description:"Cursor to retrieve the next page of records",required:!1,schema:{type:"string"}},{name:"excludeExpired",in:"query",description:"Filter by expiry state",required:!1,schema:{type:"boolean"}},{name:"status",in:"query",description:"Filter by card status",required:!1,schema:{type:"string",enum:["created","active","cancelled","shipped"]}},{name:"expiresAfter",in:"query",description:"Timestamp to filter out cards with an expiration date after the given time. Value should be an ISO 8601 string or RFC 2822 string. excludeExpired must be false",required:!1,schema:{type:"string"}},{name:"useMinorUnits",in:"query",description:"When enabled, lockedFundAmount in payload items will be returned in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{items:{type:"array",items:{type:"object",required:["id","accountId","type","createdAt","modifiedAt","isBlocked","status"],properties:{id:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"User account id linked to card",example:"057aa15913a57f50577234c8426534c0"},type:{type:"string",description:"Type of the card",enum:["virtual"]},createdAt:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},modifiedAt:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},isBlocked:{type:"boolean",description:"Whether the card is blocked"},status:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},expiry:{type:"string",description:"Expiry date of the card of physical cards",example:"202409"},currency:{type:"string",description:"The currency of this card",example:"USDC"},panFirst6:{type:"string",description:"First 6 digits of the card Primary Account Number",example:"123456"},panLast4:{type:"string",description:"Last 4 digits of the card Primary Account Number",example:"1920"},immersveExpiration:{type:"string",description:"Expiry as set by Immersve for short-lived cards",example:"2022-11-16T03:18:23.431Z"},lockedFundId:{type:"string",description:"Id of AssetLockedFund on the Immersve Payment Protocol",example:"58"},lockedFundAmount:{type:"number",example:10},lockedFundCurrency:{type:"string",description:"Currency used to lock funds on card creation",example:"USDC"},fundingWallet:{type:"string",description:"Address of the wallet used to fund the card",example:"0x7D0b0d249A7fB85A5c5F5A5e3b6A2d6c9A6D684B"}},title:"get-card"}},pageInfo:{type:"object",description:"Page info for paginated results, undefined if no page info",properties:{nextCursor:{type:"string",description:"Cursor for next page, undefined if no more pages",example:"dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ=="},previousCursor:{type:"string",description:"Cursor for previous page, undefined if no previous page",example:"dGhlIHByZXZpb3VzIGN1cnNvciBnb2VzIGhlcmU="}},title:"page-info"}},title:"list-cards-paging-result"}}}},403:{description:"User is not allowed to list cards\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer"},message:{type:"string"},error:{type:"string"}},required:["statusCode","message","error"],title:"api-error"}}}}},method:"get",path:"/api/cards/account/{accountId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"List cards",description:{content:"Lists cards by account",type:"text/plain"},url:{path:["api","cards","account",":accountId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of records to return",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor to retrieve the next page of records",type:"text/plain"},key:"cursor",value:""},{disabled:!1,description:{content:"Filter by expiry state",type:"text/plain"},key:"excludeExpired",value:""},{disabled:!1,description:{content:"Filter by card status",type:"text/plain"},key:"status",value:""},{disabled:!1,description:{content:"Timestamp to filter out cards with an expiration date after the given time. Value should be an ISO 8601 string or RFC 2822 string. excludeExpired must be false",type:"text/plain"},key:"expiresAfter",value:""},{disabled:!1,description:{content:"When enabled, lockedFundAmount in payload items will be returned in minor units, an integer in the smallest denomination for the given currency.",type:"text/plain"},key:"useMinorUnits",value:""}],variable:[{disabled:!1,description:{content:"(Required) AccountId linked to transactions",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},u=void 0,y={unversionedId:"api-reference/list-cards",id:"api-reference/list-cards",title:"List cards",description:"Lists cards by account",source:"@site/docs/api-reference/list-cards.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/list-cards",permalink:"/api-reference/list-cards",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-cards",title:"List cards",description:"Lists cards by account",sidebar_label:"List cards",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"Lists cards by account",parameters:[{name:"accountId",in:"path",description:"AccountId linked to transactions",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"Number of records to return",required:!1,schema:{type:"number"}},{name:"cursor",in:"query",description:"Cursor to retrieve the next page of records",required:!1,schema:{type:"string"}},{name:"excludeExpired",in:"query",description:"Filter by expiry state",required:!1,schema:{type:"boolean"}},{name:"status",in:"query",description:"Filter by card status",required:!1,schema:{type:"string",enum:["created","active","cancelled","shipped"]}},{name:"expiresAfter",in:"query",description:"Timestamp to filter out cards with an expiration date after the given time. Value should be an ISO 8601 string or RFC 2822 string. excludeExpired must be false",required:!1,schema:{type:"string"}},{name:"useMinorUnits",in:"query",description:"When enabled, lockedFundAmount in payload items will be returned in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{items:{type:"array",items:{type:"object",required:["id","accountId","type","createdAt","modifiedAt","isBlocked","status"],properties:{id:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"User account id linked to card",example:"057aa15913a57f50577234c8426534c0"},type:{type:"string",description:"Type of the card",enum:["virtual"]},createdAt:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},modifiedAt:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},isBlocked:{type:"boolean",description:"Whether the card is blocked"},status:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},expiry:{type:"string",description:"Expiry date of the card of physical cards",example:"202409"},currency:{type:"string",description:"The currency of this card",example:"USDC"},panFirst6:{type:"string",description:"First 6 digits of the card Primary Account Number",example:"123456"},panLast4:{type:"string",description:"Last 4 digits of the card Primary Account Number",example:"1920"},immersveExpiration:{type:"string",description:"Expiry as set by Immersve for short-lived cards",example:"2022-11-16T03:18:23.431Z"},lockedFundId:{type:"string",description:"Id of AssetLockedFund on the Immersve Payment Protocol",example:"58"},lockedFundAmount:{type:"number",example:10},lockedFundCurrency:{type:"string",description:"Currency used to lock funds on card creation",example:"USDC"},fundingWallet:{type:"string",description:"Address of the wallet used to fund the card",example:"0x7D0b0d249A7fB85A5c5F5A5e3b6A2d6c9A6D684B"}},title:"get-card"}},pageInfo:{type:"object",description:"Page info for paginated results, undefined if no page info",properties:{nextCursor:{type:"string",description:"Cursor for next page, undefined if no more pages",example:"dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ=="},previousCursor:{type:"string",description:"Cursor for previous page, undefined if no previous page",example:"dGhlIHByZXZpb3VzIGN1cnNvciBnb2VzIGhlcmU="}},title:"page-info"}},title:"list-cards-paging-result"}}}},403:{description:"User is not allowed to list cards\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer"},message:{type:"string"},error:{type:"string"}},required:["statusCode","message","error"],title:"api-error"}}}}},method:"get",path:"/api/cards/account/{accountId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"List cards",description:{content:"Lists cards by account",type:"text/plain"},url:{path:["api","cards","account",":accountId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of records to return",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor to retrieve the next page of records",type:"text/plain"},key:"cursor",value:""},{disabled:!1,description:{content:"Filter by expiry state",type:"text/plain"},key:"excludeExpired",value:""},{disabled:!1,description:{content:"Filter by card status",type:"text/plain"},key:"status",value:""},{disabled:!1,description:{content:"Timestamp to filter out cards with an expiration date after the given time. Value should be an ISO 8601 string or RFC 2822 string. excludeExpired must be false",type:"text/plain"},key:"expiresAfter",value:""},{disabled:!1,description:{content:"When enabled, lockedFundAmount in payload items will be returned in minor units, an integer in the smallest denomination for the given currency.",type:"text/plain"},key:"useMinorUnits",value:""}],variable:[{disabled:!1,description:{content:"(Required) AccountId linked to transactions",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get card details",permalink:"/api-reference/get-card-details"},next:{title:"Cards (Custodial)",permalink:"/api-reference/cards-custodial"}},h={},g=[{value:"List cards",id:"list-cards",level:2}],f={toc:g};function x(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"list-cards"},"List cards"),(0,r.kt)("p",null,"Lists cards by account"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"accountId",in:"path",description:"AccountId linked to transactions",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Number of records to return",required:!1,schema:{type:"number"}},mdxType:"ParamsItem"}),(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"Cursor to retrieve the next page of records",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"excludeExpired",in:"query",description:"Filter by expiry state",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"status",in:"query",description:"Filter by card status",required:!1,schema:{type:"string",enum:["created","active","cancelled","shipped"]}},mdxType:"ParamsItem"}),(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"expiresAfter",in:"query",description:"Timestamp to filter out cards with an expiration date after the given time. Value should be an ISO 8601 string or RFC 2822 string. excludeExpired must be false",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"useMinorUnits",in:"query",description:"When enabled, lockedFundAmount in payload items will be returned in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Successful operation")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"items"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(o.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"User account id linked to card",example:"057aa15913a57f50577234c8426534c0"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`virtual`]",schema:{type:"string",description:"Type of the card",enum:["virtual"]},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"modifiedAt",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"isBlocked",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the card is blocked"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`active`, `cancelled`, `created`, `shipped`]",schema:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"expiry",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Expiry date of the card of physical cards",example:"202409"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"currency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The currency of this card",example:"USDC"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"panFirst6",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"First 6 digits of the card Primary Account Number",example:"123456"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"panLast4",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Last 4 digits of the card Primary Account Number",example:"1920"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"immersveExpiration",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Expiry as set by Immersve for short-lived cards",example:"2022-11-16T03:18:23.431Z"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lockedFundId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Id of AssetLockedFund on the Immersve Payment Protocol",example:"58"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lockedFundAmount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:10},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lockedFundCurrency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Currency used to lock funds on card creation",example:"USDC"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"fundingWallet",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Address of the wallet used to fund the card",example:"0x7D0b0d249A7fB85A5c5F5A5e3b6A2d6c9A6D684B"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"pageInfo"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Page info for paginated results, undefined if no page info")),(0,r.kt)(o.Z,{collapsible:!1,name:"nextCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Cursor for next page, undefined if no more pages",example:"dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ=="},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"previousCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Cursor for previous page, undefined if no previous page",example:"dGhlIHByZXZpb3VzIGN1cnNvciBnb2VzIGhlcmU="},mdxType:"SchemaItem"}))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "items": [\n    {\n      "id": "91ad6fea3b52ca58d60d7fd310f789ec",\n      "accountId": "057aa15913a57f50577234c8426534c0",\n      "type": "virtual",\n      "createdAt": "2022-11-16T03:13:18.142Z",\n      "modifiedAt": "2022-11-16T03:13:18.142Z",\n      "isBlocked": true,\n      "status": "active",\n      "expiry": "202409",\n      "currency": "USDC",\n      "panFirst6": "123456",\n      "panLast4": "1920",\n      "immersveExpiration": "2022-11-16T03:18:23.431Z",\n      "lockedFundId": "58",\n      "lockedFundAmount": 10,\n      "lockedFundCurrency": "USDC",\n      "fundingWallet": "0x7D0b0d249A7fB85A5c5F5A5e3b6A2d6c9A6D684B"\n    }\n  ],\n  "pageInfo": {\n    "nextCursor": "dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ==",\n    "previousCursor": "dGhlIHByZXZpb3VzIGN1cnNvciBnb2VzIGhlcmU="\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"User is not allowed to list cards")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"message",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"error",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "statusCode": 0,\n  "message": "string",\n  "error": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);