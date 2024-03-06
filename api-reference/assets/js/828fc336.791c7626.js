"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[4e3],{74241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>x,frontMatter:()=>h,metadata:()=>u,toc:()=>y});var i=a(25773),n=(a(27378),a(35318)),s=a(7743),r=a(30712),o=a(76377),p=a(30980),c=a(68388),l=a(34806),d=(a(23067),a(39798));const h={id:"auth-token-exchange",title:"Auth Token Exchange",description:"This endpoint can be used to request a new access token using a refresh token.",sidebar_label:"Auth Token Exchange",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authentication"],description:"This endpoint can be used to request a new access token using a refresh token.\n",parameters:[{name:"origin",in:"header",description:"Origin header to specify the origin of the request.",required:!0,schema:{type:"string"}}],security:[],requestBody:{content:{"application/json":{schema:{type:"object",properties:{refreshToken:{type:"string",description:"JWT that is used to request a new access token. (Valid for 30 days.)",example:"eyJhbGciOiJSUzI1NiIsI..."},clientApplicationId:{type:"string",description:"Id of the client application.",example:"29097f50d221858223a17633e36716f9"}},required:["clientApplicationId","refreshToken"]}}},required:!0},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{accessToken:{type:"string",description:"The new access token that will be used for subsequent authenticated requests. This token replaces the previous access token that has expired or is about to expire.",example:"eyJhbGciOiJSUzI1NiIsI..."},refreshToken:{type:"string",description:"The new refresh token to request a new access token.",example:"eyJhbGciOiJSUzI1NiIsI..."}},title:"auth-token-exchange"}}}},403:{description:"**REFRESH_TOKEN_EXPIRED**\nThe refresh token has expired.\n\n**CLIENT_APPLICATION_MISMATCH**\nThe client application does not match the refresh token.\n\n**ORIGIN_NOT_ALLOWED**\nThe origin is not allowed to access this endpoint.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/auth/token",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{refreshToken:"eyJhbGciOiJSUzI1NiIsI...",clientApplicationId:"29097f50d221858223a17633e36716f9"},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Auth Token Exchange",description:{content:"This endpoint can be used to request a new access token using a refresh token.\n",type:"text/plain"},url:{path:["auth","token"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) Origin header to specify the origin of the request.",type:"text/plain"},key:"origin",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},m=void 0,u={unversionedId:"auth-token-exchange",id:"auth-token-exchange",title:"Auth Token Exchange",description:"This endpoint can be used to request a new access token using a refresh token.",source:"@site/docs/auth-token-exchange.api.mdx",sourceDirName:".",slug:"/auth-token-exchange",permalink:"/api-reference/auth-token-exchange",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"auth-token-exchange",title:"Auth Token Exchange",description:"This endpoint can be used to request a new access token using a refresh token.",sidebar_label:"Auth Token Exchange",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authentication"],description:"This endpoint can be used to request a new access token using a refresh token.\n",parameters:[{name:"origin",in:"header",description:"Origin header to specify the origin of the request.",required:!0,schema:{type:"string"}}],security:[],requestBody:{content:{"application/json":{schema:{type:"object",properties:{refreshToken:{type:"string",description:"JWT that is used to request a new access token. (Valid for 30 days.)",example:"eyJhbGciOiJSUzI1NiIsI..."},clientApplicationId:{type:"string",description:"Id of the client application.",example:"29097f50d221858223a17633e36716f9"}},required:["clientApplicationId","refreshToken"]}}},required:!0},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{accessToken:{type:"string",description:"The new access token that will be used for subsequent authenticated requests. This token replaces the previous access token that has expired or is about to expire.",example:"eyJhbGciOiJSUzI1NiIsI..."},refreshToken:{type:"string",description:"The new refresh token to request a new access token.",example:"eyJhbGciOiJSUzI1NiIsI..."}},title:"auth-token-exchange"}}}},403:{description:"**REFRESH_TOKEN_EXPIRED**\nThe refresh token has expired.\n\n**CLIENT_APPLICATION_MISMATCH**\nThe client application does not match the refresh token.\n\n**ORIGIN_NOT_ALLOWED**\nThe origin is not allowed to access this endpoint.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/auth/token",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{refreshToken:"eyJhbGciOiJSUzI1NiIsI...",clientApplicationId:"29097f50d221858223a17633e36716f9"},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Auth Token Exchange",description:{content:"This endpoint can be used to request a new access token using a refresh token.\n",type:"text/plain"},url:{path:["auth","token"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) Origin header to specify the origin of the request.",type:"text/plain"},key:"origin",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Login",permalink:"/api-reference/login"},next:{title:"Accounts",permalink:"/api-reference/accounts"}},k={},y=[{value:"Auth Token Exchange",id:"auth-token-exchange",level:2}],g={toc:y},T="wrapper";function x(e){let{components:t,...a}=e;return(0,n.kt)(T,(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"auth-token-exchange"},"Auth Token Exchange"),(0,n.kt)("p",null,"This endpoint can be used to request a new access token using a refresh token."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"origin",in:"header",description:"Origin header to specify the origin of the request.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(r.Z,{mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"refreshToken",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"JWT that is used to request a new access token. (Valid for 30 days.)",example:"eyJhbGciOiJSUzI1NiIsI..."},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"clientApplicationId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Id of the client application.",example:"29097f50d221858223a17633e36716f9"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"accessToken",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The new access token that will be used for subsequent authenticated requests. This token replaces the previous access token that has expired or is about to expire.",example:"eyJhbGciOiJSUzI1NiIsI..."},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"refreshToken",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The new refresh token to request a new access token.",example:"eyJhbGciOiJSUzI1NiIsI..."},mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "accessToken": "eyJhbGciOiJSUzI1NiIsI...",\n  "refreshToken": "eyJhbGciOiJSUzI1NiIsI..."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"REFRESH_TOKEN_EXPIRED"),"\nThe refresh token has expired."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CLIENT_APPLICATION_MISMATCH"),"\nThe client application does not match the refresh token."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ORIGIN_NOT_ALLOWED"),"\nThe origin is not allowed to access this endpoint.")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);