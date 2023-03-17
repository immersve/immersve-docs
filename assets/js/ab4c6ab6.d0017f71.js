"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[9021],{91851:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>u,default:()=>v,frontMatter:()=>l,metadata:()=>y,toc:()=>h});var r=t(87462),i=(t(67294),t(3905)),s=(t(19959),t(26389)),n=t(94891),o=t(74933),c=t(47507),d=t(24310),p=t(63303),m=(t(75035),t(85162));const l={id:"get-card-information",title:"Get card information",description:"Get card information",sidebar_label:"Get card information",hide_title:!0,hide_table_of_contents:!0,api:{tags:["cards-custodial"],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],parameters:[{name:"cardId",in:"path",description:"ID of card",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{accountId:{type:"string"},cardId:{type:"string"},type:{type:"string",enum:["PHYSICAL","VIRTUAL"]},status:{type:"string",enum:["INACTIVE","ACTIVE","BLOCKED","CANCELLED"]},cardReference:{type:"string"},createdAt:{type:"string"}}}}}},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{errorCode:{description:"The error code",type:"string"},errorMessage:{description:"The error message",type:"string"},errorMap:{description:"An array of key-value pairs describing field errors",type:"array",items:{type:"object"}}},example:{success:!1,errorCode:"INVALID_BODY",errorMessage:"Invalid body",errorMap:{firstName:"Required"}}}}}}},description:"Get card information",method:"get",path:"/api/custodial/cards/{cardId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get card information",description:{type:"text/plain"},url:{path:["api","custodial","cards",":cardId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of card",type:"text/plain"},type:"any",value:"",key:"cardId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api"},u=void 0,y={unversionedId:"api-reference/get-card-information",id:"api-reference/get-card-information",title:"Get card information",description:"Get card information",source:"@site/docs/api-reference/get-card-information.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/get-card-information",permalink:"/api-reference/get-card-information",draft:!1,tags:[],version:"current",frontMatter:{id:"get-card-information",title:"Get card information",description:"Get card information",sidebar_label:"Get card information",hide_title:!0,hide_table_of_contents:!0,api:{tags:["cards-custodial"],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],parameters:[{name:"cardId",in:"path",description:"ID of card",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{accountId:{type:"string"},cardId:{type:"string"},type:{type:"string",enum:["PHYSICAL","VIRTUAL"]},status:{type:"string",enum:["INACTIVE","ACTIVE","BLOCKED","CANCELLED"]},cardReference:{type:"string"},createdAt:{type:"string"}}}}}},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{errorCode:{description:"The error code",type:"string"},errorMessage:{description:"The error message",type:"string"},errorMap:{description:"An array of key-value pairs describing field errors",type:"array",items:{type:"object"}}},example:{success:!1,errorCode:"INVALID_BODY",errorMessage:"Invalid body",errorMap:{firstName:"Required"}}}}}}},description:"Get card information",method:"get",path:"/api/custodial/cards/{cardId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get card information",description:{type:"text/plain"},url:{path:["api","custodial","cards",":cardId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of card",type:"text/plain"},type:"any",value:"",key:"cardId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api"},sidebar:"primarySidebar",previous:{title:"Unblock a card",permalink:"/api-reference/unblock-a-card"},next:{title:"Currency",permalink:"/api-reference/currency"}},f={},h=[{value:"Get card information",id:"get-card-information",level:2}],g={toc:h};function v(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-card-information"},"Get card information"),(0,i.kt)("p",null,"Get card information"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"cardId",in:"path",description:"ID of card",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"accountId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"cardId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`PHYSICAL`, `VIRTUAL`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`INACTIVE`, `ACTIVE`, `BLOCKED`, `CANCELLED`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"cardReference",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "accountId": "string",\n  "cardId": "string",\n  "type": "PHYSICAL",\n  "status": "INACTIVE",\n  "cardReference": "string",\n  "createdAt": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Error")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!1,schemaDescription:"The error code",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"errorMessage",required:!1,schemaDescription:"The error message",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"errorMap",required:!1,schemaDescription:"An array of key-value pairs describing field errors",schemaName:"object[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "success": false,\n  "errorCode": "INVALID_BODY",\n  "errorMessage": "Invalid body",\n  "errorMap": {\n    "firstName": "Required"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);