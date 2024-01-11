"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[6157],{10562:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>x,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var i=a(87462),n=(a(67294),a(3905)),p=(a(8209),a(26389)),r=a(94891),s=a(75190),o=a(47507),l=a(24310),c=a(63303),m=(a(75035),a(85162));const d={id:"get-a-client-application",title:"Get a client application",description:"Get a client application",sidebar_label:"Get a client application",hide_title:!0,hide_table_of_contents:!0,api:{tags:["client-application"],parameters:[{name:"clientApplicationId",in:"path",description:"Id of the client application.",example:"65a7e8ef0d230d0a6bf755e07d39eb02",required:!0,schema:{type:"string"}}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"The client application id.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},accountId:{type:"string",description:"The partner account id that is affiliated with the client application.",example:"225d85e65495722bf6517ea0ba0d6f56"},allowedOrigins:{type:"array",description:"The allowed origins for the client application.",items:{type:"string",example:["https://develop-app.com","http://localhost:3000"]}},createdAt:{type:"string",description:"Timestamp of client application creation.",example:"2022-11-16T03:13:18.142Z"},modifiedAt:{type:"string",description:"Timestamp of modification.",example:"2022-11-16T03:13:18.142Z"}},title:"client-application-get-response"}}}},400:{description:"Request parameters are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"Subject is not allowed to perform the action with the reason stated in the `errorCode`\n\n**FORBIDDEN**\nResource does not exist or there are no sufficient permissions to perform the action.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},description:"Get a client application",method:"get",path:"/api/client-applications/{clientApplicationId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Get a client application",description:{type:"text/plain"},url:{path:["api","client-applications",":clientApplicationId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Id of the client application.",type:"text/plain"},type:"any",value:"",key:"clientApplicationId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},y=void 0,u={unversionedId:"api-reference/get-a-client-application",id:"api-reference/get-a-client-application",title:"Get a client application",description:"Get a client application",source:"@site/docs/api-reference/get-a-client-application.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/get-a-client-application",permalink:"/api-reference/get-a-client-application",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-a-client-application",title:"Get a client application",description:"Get a client application",sidebar_label:"Get a client application",hide_title:!0,hide_table_of_contents:!0,api:{tags:["client-application"],parameters:[{name:"clientApplicationId",in:"path",description:"Id of the client application.",example:"65a7e8ef0d230d0a6bf755e07d39eb02",required:!0,schema:{type:"string"}}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"The client application id.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},accountId:{type:"string",description:"The partner account id that is affiliated with the client application.",example:"225d85e65495722bf6517ea0ba0d6f56"},allowedOrigins:{type:"array",description:"The allowed origins for the client application.",items:{type:"string",example:["https://develop-app.com","http://localhost:3000"]}},createdAt:{type:"string",description:"Timestamp of client application creation.",example:"2022-11-16T03:13:18.142Z"},modifiedAt:{type:"string",description:"Timestamp of modification.",example:"2022-11-16T03:13:18.142Z"}},title:"client-application-get-response"}}}},400:{description:"Request parameters are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"Subject is not allowed to perform the action with the reason stated in the `errorCode`\n\n**FORBIDDEN**\nResource does not exist or there are no sufficient permissions to perform the action.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},description:"Get a client application",method:"get",path:"/api/client-applications/{clientApplicationId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Get a client application",description:{type:"text/plain"},url:{path:["api","client-applications",":clientApplicationId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Id of the client application.",type:"text/plain"},type:"any",value:"",key:"clientApplicationId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Client application",permalink:"/api-reference/client-application"},next:{title:"Immersve Payment Protocol",permalink:"/contracts/payment-protocol"}},h={},g=[{value:"Get a client application",id:"get-a-client-application",level:2}],f={toc:g};function x(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-a-client-application"},"Get a client application"),(0,n.kt)("p",null,"Get a client application"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"clientApplicationId",in:"path",description:"Id of the client application.",example:"65a7e8ef0d230d0a6bf755e07d39eb02",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(p.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The client application id.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"accountId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The partner account id that is affiliated with the client application.",example:"225d85e65495722bf6517ea0ba0d6f56"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"allowedOrigins",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The allowed origins for the client application.",items:{type:"string",example:["https://develop-app.com","http://localhost:3000"]}},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of client application creation.",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"modifiedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of modification.",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "id": "65a7e8ef0d230d0a6bf755e07d39eb02",\n  "accountId": "225d85e65495722bf6517ea0ba0d6f56",\n  "allowedOrigins": [\n    [\n      "https://develop-app.com",\n      "http://localhost:3000"\n    ]\n  ],\n  "createdAt": "2022-11-16T03:13:18.142Z",\n  "modifiedAt": "2022-11-16T03:13:18.142Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request parameters are invalid")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:400},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bad Request"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BAD_REQUEST"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"Expected string, received number"}},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "statusCode": 400,\n  "statusName": "Bad Request",\n  "errorCode": "BAD_REQUEST",\n  "errors": [\n    "Expected string, received number"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Subject is not allowed to perform the action with the reason stated in the ",(0,n.kt)("inlineCode",{parentName:"p"},"errorCode")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"FORBIDDEN"),"\nResource does not exist or there are no sufficient permissions to perform the action.")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);