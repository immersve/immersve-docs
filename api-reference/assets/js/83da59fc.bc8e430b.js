"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[4343],{44095:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>x,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var a=i(25773),n=(i(27378),i(35318)),r=i(7743),o=i(30712),l=i(76377),s=i(30980),p=i(68388),d=i(34806),c=(i(23067),i(39798));const m={id:"update-the-allowed-origins",title:"Update the allowed origins",description:"Add url origins to the client application whitelist.",sidebar_label:"Update the allowed origins",hide_title:!0,hide_table_of_contents:!0,api:{tags:["client-application"],description:"Add url origins to the client application whitelist. \nThe [Generate a challenge endpoint](/api-reference/generate-challenge) will reject non-whitelisted origins.\n**Warning!** This is a destructive operation. The allowed origins will be overwritten with the provided list.\nUse the [Get a client application endpoint](/api-reference/get-a-client-application) to retrieve the current list of allowed origins.\n",parameters:[{name:"clientApplicationId",in:"path",description:"Id of the client application.",example:"65a7e8ef0d230d0a6bf755e07d39eb02",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{allowedOrigins:{type:"array",description:"The allowed origins for the client application. Minimum one origin is required.",items:{type:"string",example:["https://develop-app.com","http://localhost:3000"]}}},title:"client-application-update-origins-request"}}},required:!0},security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],responses:{204:{description:"No content",content:{"application/json":{}}},400:{description:"Request parameters are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"Subject is not allowed to perform the action with the reason stated in the `errorCode`\n\n**FORBIDDEN**\nResource does not exist or there are no sufficient permissions to perform the action.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/api/client-applications/{clientApplicationId}/update-origins",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{allowedOrigins:[["https://develop-app.com","http://localhost:3000"]]},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Update the allowed origins",description:{content:"Add url origins to the client application whitelist. \nThe [Generate a challenge endpoint](/api-reference/generate-challenge) will reject non-whitelisted origins.\n**Warning!** This is a destructive operation. The allowed origins will be overwritten with the provided list.\nUse the [Get a client application endpoint](/api-reference/get-a-client-application) to retrieve the current list of allowed origins.\n",type:"text/plain"},url:{path:["api","client-applications",":clientApplicationId","update-origins"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Id of the client application.",type:"text/plain"},type:"any",value:"",key:"clientApplicationId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},h=void 0,u={unversionedId:"update-the-allowed-origins",id:"update-the-allowed-origins",title:"Update the allowed origins",description:"Add url origins to the client application whitelist.",source:"@site/docs/update-the-allowed-origins.api.mdx",sourceDirName:".",slug:"/update-the-allowed-origins",permalink:"/api-reference/update-the-allowed-origins",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-the-allowed-origins",title:"Update the allowed origins",description:"Add url origins to the client application whitelist.",sidebar_label:"Update the allowed origins",hide_title:!0,hide_table_of_contents:!0,api:{tags:["client-application"],description:"Add url origins to the client application whitelist. \nThe [Generate a challenge endpoint](/api-reference/generate-challenge) will reject non-whitelisted origins.\n**Warning!** This is a destructive operation. The allowed origins will be overwritten with the provided list.\nUse the [Get a client application endpoint](/api-reference/get-a-client-application) to retrieve the current list of allowed origins.\n",parameters:[{name:"clientApplicationId",in:"path",description:"Id of the client application.",example:"65a7e8ef0d230d0a6bf755e07d39eb02",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{allowedOrigins:{type:"array",description:"The allowed origins for the client application. Minimum one origin is required.",items:{type:"string",example:["https://develop-app.com","http://localhost:3000"]}}},title:"client-application-update-origins-request"}}},required:!0},security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],responses:{204:{description:"No content",content:{"application/json":{}}},400:{description:"Request parameters are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"Subject is not allowed to perform the action with the reason stated in the `errorCode`\n\n**FORBIDDEN**\nResource does not exist or there are no sufficient permissions to perform the action.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/api/client-applications/{clientApplicationId}/update-origins",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{allowedOrigins:[["https://develop-app.com","http://localhost:3000"]]},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Update the allowed origins",description:{content:"Add url origins to the client application whitelist. \nThe [Generate a challenge endpoint](/api-reference/generate-challenge) will reject non-whitelisted origins.\n**Warning!** This is a destructive operation. The allowed origins will be overwritten with the provided list.\nUse the [Get a client application endpoint](/api-reference/get-a-client-application) to retrieve the current list of allowed origins.\n",type:"text/plain"},url:{path:["api","client-applications",":clientApplicationId","update-origins"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Id of the client application.",type:"text/plain"},type:"any",value:"",key:"clientApplicationId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get a client application",permalink:"/api-reference/get-a-client-application"}},y={},g=[{value:"Update the allowed origins",id:"update-the-allowed-origins",level:2}],v={toc:g},k="wrapper";function x(e){let{components:t,...i}=e;return(0,n.kt)(k,(0,a.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"update-the-allowed-origins"},"Update the allowed origins"),(0,n.kt)("p",null,"Add url origins to the client application whitelist.\nThe ",(0,n.kt)("a",{parentName:"p",href:"/api-reference/generate-challenge"},"Generate a challenge endpoint")," will reject non-whitelisted origins.\n",(0,n.kt)("strong",{parentName:"p"},"Warning!")," This is a destructive operation. The allowed origins will be overwritten with the provided list.\nUse the ",(0,n.kt)("a",{parentName:"p",href:"/api-reference/get-a-client-application"},"Get a client application endpoint")," to retrieve the current list of allowed origins."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"clientApplicationId",in:"path",description:"Id of the client application.",example:"65a7e8ef0d230d0a6bf755e07d39eb02",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(o.Z,{mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"allowedOrigins",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The allowed origins for the client application. Minimum one origin is required.",items:{type:"string",example:["https://develop-app.com","http://localhost:3000"]}},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"No content")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},"any")))))))),(0,n.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request parameters are invalid")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:400},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bad Request"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BAD_REQUEST"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"Expected string, received number"}},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(s.Z,{responseExample:'{\n  "statusCode": 400,\n  "statusName": "Bad Request",\n  "errorCode": "BAD_REQUEST",\n  "errors": [\n    "Expected string, received number"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Subject is not allowed to perform the action with the reason stated in the ",(0,n.kt)("inlineCode",{parentName:"p"},"errorCode")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"FORBIDDEN"),"\nResource does not exist or there are no sufficient permissions to perform the action.")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(s.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);