"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[8266],{63205:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>l,default:()=>f,frontMatter:()=>m,metadata:()=>u,toc:()=>y});var r=t(87462),i=(t(67294),t(3905)),s=(t(8209),t(26389)),n=t(94891),c=(t(75190),t(47507)),d=t(24310),o=t(63303),p=(t(75035),t(85162));const m={id:"order-card",title:"Order a card",description:"Order a virtual card for the current user.",sidebar_label:"Order a card",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"Order a virtual card for the current user.\n",operationId:"orderCard",requestBody:{content:{"application/json":{schema:{type:"object",required:["transactionHash","amount"],properties:{amount:{type:"string",description:'Amount as monetary value to be loaded. Example $0.1 USDC should be "0.1".'},currency:{type:"string",description:"Coin being used currently only USDC"},transactionHash:{type:"string",description:"The hash of transaction transferring USDC to Immersve Payment Protocol smart contract"}}}}},required:!0},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"Which account this card belongs to",example:"057aa15913a57f50577234c8426534c0"},externalId:{type:"string",description:"The external id for this card",example:"8649543161870318367"},status:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},cardType:{type:"string",description:"The type of the card",enum:["virtual"]},panFirst6:{type:"string",description:"The first 6 digits of the card",example:"123456"},panLast4:{type:"string",description:"The last 4 digits of the card",example:"1920"},expiry:{type:"string",description:"The expiry of the card",example:"202409"},immersveExpiration:{type:"string",description:"The expiry as set by Immersve",example:"2022-11-16T03:18:23.431Z"},createdAt:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},modifiedAt:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},version:{type:"number",example:1},lockedFundId:{type:"string",example:"58"},lockedFundAmount:{type:"number",example:10},lockedFundCurrency:{type:"string",description:"The currency of this card",example:"USDC"}},title:"card"}}}}},method:"post",path:"/api/cards/orders",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{amount:"string",currency:"string",transactionHash:"string"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Order a card",description:{content:"Order a virtual card for the current user.\n",type:"text/plain"},url:{path:["api","cards","orders"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},l=void 0,u={unversionedId:"api-reference/order-card",id:"api-reference/order-card",title:"Order a card",description:"Order a virtual card for the current user.",source:"@site/docs/api-reference/order-card.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/order-card",permalink:"/api-reference/order-card",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"order-card",title:"Order a card",description:"Order a virtual card for the current user.",sidebar_label:"Order a card",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"Order a virtual card for the current user.\n",operationId:"orderCard",requestBody:{content:{"application/json":{schema:{type:"object",required:["transactionHash","amount"],properties:{amount:{type:"string",description:'Amount as monetary value to be loaded. Example $0.1 USDC should be "0.1".'},currency:{type:"string",description:"Coin being used currently only USDC"},transactionHash:{type:"string",description:"The hash of transaction transferring USDC to Immersve Payment Protocol smart contract"}}}}},required:!0},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"Which account this card belongs to",example:"057aa15913a57f50577234c8426534c0"},externalId:{type:"string",description:"The external id for this card",example:"8649543161870318367"},status:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},cardType:{type:"string",description:"The type of the card",enum:["virtual"]},panFirst6:{type:"string",description:"The first 6 digits of the card",example:"123456"},panLast4:{type:"string",description:"The last 4 digits of the card",example:"1920"},expiry:{type:"string",description:"The expiry of the card",example:"202409"},immersveExpiration:{type:"string",description:"The expiry as set by Immersve",example:"2022-11-16T03:18:23.431Z"},createdAt:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},modifiedAt:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},version:{type:"number",example:1},lockedFundId:{type:"string",example:"58"},lockedFundAmount:{type:"number",example:10},lockedFundCurrency:{type:"string",description:"The currency of this card",example:"USDC"}},title:"card"}}}}},method:"post",path:"/api/cards/orders",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{amount:"string",currency:"string",transactionHash:"string"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Order a card",description:{content:"Order a virtual card for the current user.\n",type:"text/plain"},url:{path:["api","cards","orders"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Cards",permalink:"/api-reference/card"},next:{title:"Cancel a card asynchronously",permalink:"/api-reference/cancel-a-card-asynchronously"}},h={},y=[{value:"Order a card",id:"order-a-card",level:2}],g={toc:y};function f(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"order-a-card"},"Order a card"),(0,i.kt)("p",null,"Order a virtual card for the current user."),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"amount",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'Amount as monetary value to be loaded. Example $0.1 USDC should be "0.1".'},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"currency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Coin being used currently only USDC"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"transactionHash",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The hash of transaction transferring USDC to Immersve Payment Protocol smart contract"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful operation")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"accountId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Which account this card belongs to",example:"057aa15913a57f50577234c8426534c0"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"externalId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The external id for this card",example:"8649543161870318367"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`active`, `cancelled`, `created`, `shipped`]",schema:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"cardType",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`virtual`]",schema:{type:"string",description:"The type of the card",enum:["virtual"]},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"panFirst6",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The first 6 digits of the card",example:"123456"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"panLast4",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The last 4 digits of the card",example:"1920"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"expiry",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The expiry of the card",example:"202409"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"immersveExpiration",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The expiry as set by Immersve",example:"2022-11-16T03:18:23.431Z"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of card creation",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"modifiedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of card modification",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"version",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:1},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"lockedFundId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"58"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"lockedFundAmount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:10},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"lockedFundCurrency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The currency of this card",example:"USDC"},mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "id": "91ad6fea3b52ca58d60d7fd310f789ec",\n  "accountId": "057aa15913a57f50577234c8426534c0",\n  "externalId": "8649543161870318367",\n  "status": "active",\n  "cardType": "virtual",\n  "panFirst6": "123456",\n  "panLast4": "1920",\n  "expiry": "202409",\n  "immersveExpiration": "2022-11-16T03:18:23.431Z",\n  "createdAt": "2022-11-16T03:13:18.142Z",\n  "modifiedAt": "2022-11-16T03:13:18.142Z",\n  "version": 1,\n  "lockedFundId": "58",\n  "lockedFundAmount": 10,\n  "lockedFundCurrency": "USDC"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);