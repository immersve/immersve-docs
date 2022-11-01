"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[8266],{63205:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>f});var a=t(87462),i=(t(67294),t(3905)),s=t(26389),c=t(94891),n=(t(74933),t(47507)),d=t(24310),o=t(63303),p=(t(75035),t(85162));const l={id:"order-card",title:"Order a card",description:"Order a virtual credit card for the current user ",sidebar_label:"Order a card",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"Order a virtual credit card for the current user\n",operationId:"orderCard",requestBody:{content:{"application/json":{schema:{type:"object",required:["transactionHash"],properties:{transactionHash:{type:"string",description:"The hash of transaction transferring USDC to Immersve Payment Protocol smart contract"}}}}},required:!0},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"Which account this card belongs to",example:"057aa15913a57f50577234c8426534c0"},cardExternalId:{type:"string",description:"The external id for this card",example:"8649543161870318367"},cardCurrency:{type:"string",description:"The currency of this card"},cardState:{type:"string",description:"The state of the card",enum:["active","cancelled"]},cardType:{type:"string",description:"The type of the card",enum:["virtual"]},panFirst6:{type:"string",description:"The first 6 digits of the card",example:"123456"},panLast4:{type:"string",description:"The last 4 digits of the card",example:"1920"},expiry:{type:"string",description:"The expiry of the card",example:"202409"}}}}}}},method:"post",path:"/api/cards/orders",servers:[{url:"https://api.sb1.lol/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"}},jsonRequestBodyExample:{transactionHash:"string"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Order a card",description:{content:"Order a virtual credit card for the current user\n",type:"text/plain"},url:{path:["api","cards","orders"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api"},m=void 0,u={unversionedId:"api-reference/order-card",id:"api-reference/order-card",title:"Order a card",description:"Order a virtual credit card for the current user ",source:"@site/docs/api-reference/order-card.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/order-card",permalink:"/api-reference/order-card",draft:!1,tags:[],version:"current",frontMatter:{id:"order-card",title:"Order a card",description:"Order a virtual credit card for the current user ",sidebar_label:"Order a card",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"Order a virtual credit card for the current user\n",operationId:"orderCard",requestBody:{content:{"application/json":{schema:{type:"object",required:["transactionHash"],properties:{transactionHash:{type:"string",description:"The hash of transaction transferring USDC to Immersve Payment Protocol smart contract"}}}}},required:!0},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Card primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"Which account this card belongs to",example:"057aa15913a57f50577234c8426534c0"},cardExternalId:{type:"string",description:"The external id for this card",example:"8649543161870318367"},cardCurrency:{type:"string",description:"The currency of this card"},cardState:{type:"string",description:"The state of the card",enum:["active","cancelled"]},cardType:{type:"string",description:"The type of the card",enum:["virtual"]},panFirst6:{type:"string",description:"The first 6 digits of the card",example:"123456"},panLast4:{type:"string",description:"The last 4 digits of the card",example:"1920"},expiry:{type:"string",description:"The expiry of the card",example:"202409"}}}}}}},method:"post",path:"/api/cards/orders",servers:[{url:"https://api.sb1.lol/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"}},jsonRequestBodyExample:{transactionHash:"string"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Order a card",description:{content:"Order a virtual credit card for the current user\n",type:"text/plain"},url:{path:["api","cards","orders"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api"},sidebar:"primarySidebar",previous:{title:"Cards",permalink:"/api-reference/card"},next:{title:"Cancel card",permalink:"/api-reference/cancel-card"}},h={},f=[{value:"Order a card",id:"order-a-card",level:2}],y={toc:f};function g(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"order-a-card"},"Order a card"),(0,i.kt)("p",null,"Order a virtual credit card for the current user"),(0,i.kt)(c.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"transactionHash",required:!0,schemaDescription:"The hash of transaction transferring USDC to Immersve Payment Protocol smart contract",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful operation")),(0,i.kt)("div",null,(0,i.kt)(c.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Card primary identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"accountId",required:!1,schemaDescription:"Which account this card belongs to",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"cardExternalId",required:!1,schemaDescription:"The external id for this card",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"cardCurrency",required:!1,schemaDescription:"The currency of this card",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"cardState",required:!1,schemaDescription:"The state of the card",schemaName:"string",qualifierMessage:"**Possible values:** [`active`, `cancelled`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"cardType",required:!1,schemaDescription:"The type of the card",schemaName:"string",qualifierMessage:"**Possible values:** [`virtual`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"panFirst6",required:!1,schemaDescription:"The first 6 digits of the card",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"panLast4",required:!1,schemaDescription:"The last 4 digits of the card",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"expiry",required:!1,schemaDescription:"The expiry of the card",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "id": "string",\n  "accountId": "string",\n  "cardExternalId": "string",\n  "cardCurrency": "string",\n  "cardState": "active",\n  "cardType": "virtual",\n  "panFirst6": "string",\n  "panLast4": "string",\n  "expiry": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);