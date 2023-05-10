"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[6983],{65495:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>y,toc:()=>k});var r=t(87462),s=(t(67294),t(3905)),i=(t(8209),t(26389)),o=t(94891),n=t(75190),d=t(47507),c=t(24310),l=t(63303),p=(t(75035),t(85162));const m={id:"block-a-card",title:"Block a card",description:"Block a card",sidebar_label:"Block a card",hide_title:!0,hide_table_of_contents:!0,api:{tags:["cards-custodial"],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],parameters:[{name:"cardId",in:"path",description:"ID of card",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",required:["reason"],properties:{reason:{type:"string",description:"- loststolen: Card has been reported lost or stolen.\n- suspended: Card has been suspended by the issuer.\n- fraud: Card has been blocked due to suspected fraudulent activity.\n- activation: Card has not been activated yet.\n",enum:["loststolen","suspended","fraud","activation"]},context:{type:"string",description:"Any context describing why the card was blocked",example:"Card lost"}},title:"block-card-request"}}},required:!0},responses:{200:{description:"Card blocked"},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{errorCode:{description:"The error code",type:"string"},errorMessage:{description:"The error message",type:"string"},errorMap:{description:"An array of key-value pairs describing field errors",type:"array",items:{type:"object"}}},example:{success:!1,errorCode:"INVALID_BODY",errorMessage:"Invalid body",errorMap:{firstName:"Required"}},title:"error-response-custodial"}}}}},description:"Block a card",method:"post",path:"/api/custodial/cards/{cardId}/block",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{reason:"loststolen",context:"Card lost"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Block a card",description:{type:"text/plain"},url:{path:["api","custodial","cards",":cardId","block"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of card",type:"text/plain"},type:"any",value:"",key:"cardId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},u=void 0,y={unversionedId:"api-reference/block-a-card",id:"api-reference/block-a-card",title:"Block a card",description:"Block a card",source:"@site/docs/api-reference/block-a-card.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/block-a-card",permalink:"/api-reference/block-a-card",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"block-a-card",title:"Block a card",description:"Block a card",sidebar_label:"Block a card",hide_title:!0,hide_table_of_contents:!0,api:{tags:["cards-custodial"],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],parameters:[{name:"cardId",in:"path",description:"ID of card",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",required:["reason"],properties:{reason:{type:"string",description:"- loststolen: Card has been reported lost or stolen.\n- suspended: Card has been suspended by the issuer.\n- fraud: Card has been blocked due to suspected fraudulent activity.\n- activation: Card has not been activated yet.\n",enum:["loststolen","suspended","fraud","activation"]},context:{type:"string",description:"Any context describing why the card was blocked",example:"Card lost"}},title:"block-card-request"}}},required:!0},responses:{200:{description:"Card blocked"},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{errorCode:{description:"The error code",type:"string"},errorMessage:{description:"The error message",type:"string"},errorMap:{description:"An array of key-value pairs describing field errors",type:"array",items:{type:"object"}}},example:{success:!1,errorCode:"INVALID_BODY",errorMessage:"Invalid body",errorMap:{firstName:"Required"}},title:"error-response-custodial"}}}}},description:"Block a card",method:"post",path:"/api/custodial/cards/{cardId}/block",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{reason:"loststolen",context:"Card lost"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Block a card",description:{type:"text/plain"},url:{path:["api","custodial","cards",":cardId","block"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of card",type:"text/plain"},type:"any",value:"",key:"cardId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Close a card",permalink:"/api-reference/close-a-card"},next:{title:"Activate a card (for physical cards only)",permalink:"/api-reference/activate-a-card-for-physical-cards-only"}},h={},k=[{value:"Block a card",id:"block-a-card",level:2}],b={toc:k};function v(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"block-a-card"},"Block a card"),(0,s.kt)("p",null,"Block a card"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"cardId",in:"path",description:"ID of card",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"reason",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`loststolen`, `suspended`, `fraud`, `activation`]",schema:{type:"string",description:"- loststolen: Card has been reported lost or stolen.\n- suspended: Card has been suspended by the issuer.\n- fraud: Card has been blocked due to suspected fraudulent activity.\n- activation: Card has not been activated yet.\n",enum:["loststolen","suspended","fraud","activation"]},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"context",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Any context describing why the card was blocked",example:"Card lost"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Card blocked")),(0,s.kt)("div",null)),(0,s.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Error")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The error code",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"errorMessage",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The error message",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"errorMap",required:!1,schemaName:"object[]",qualifierMessage:void 0,schema:{description:"An array of key-value pairs describing field errors",type:"array",items:{type:"object"}},mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "success": false,\n  "errorCode": "INVALID_BODY",\n  "errorMessage": "Invalid body",\n  "errorMap": {\n    "firstName": "Required"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);