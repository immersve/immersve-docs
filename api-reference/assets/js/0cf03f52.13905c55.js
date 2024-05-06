"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[6599],{6195:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var a=i(25773),n=(i(27378),i(35318)),s=i(7743),o=i(30712),r=(i(76377),i(30980)),l=i(68388),p=i(34806),c=(i(23067),i(39798));const d={id:"complete-login",title:"Complete Login",description:"Complete a login sequence to obtain access and refresh tokens, and cardholder account id.",sidebar_label:"Complete Login",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authentication"],description:"Complete a login sequence to obtain access and refresh tokens, and cardholder account id.\nThe login sequence is initialized by [Login Init](/api-reference/initiate-login)\nor [Sign Up](/api-reference/sign-up/). For more details, see\n[Authentication](https://docs.immersve.com/guides/authentication).\n",security:[{none:[]}],requestBody:{content:{"application/json":{schema:{type:"object",required:["loginRequestId","signature"],properties:{loginRequestId:{description:"The unique identifier of the login request.",type:"string",example:"49ae8f3a3928491"},signature:{description:"The signature of the challenge.",type:"string",example:"0xa91fd3b8bf..."}},title:"login-complete-request"}}},required:!0},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{accessToken:{type:"string",description:"The access token that will be used for subsequent authenticated requests.",example:"eyJhbGasddweUzI1NiIsI..."},refreshToken:{type:"string",description:"JWT that is used to request a new access token. Refresh tokens are valid for 30 days.",example:"eyJhbGciOiJSUzI1NiIsI..."},cardholderAccountId:{type:"string",description:"The unique identifier of the cardholder.",example:"29097f50d221858223a17633e36716f9"}},title:"login-complete-response"}}}},403:{description:"**INVALID_SIGNATURE**\nInvalid signature.\n\n**CHALLENGE_EXPIRED**\nChallenge expired.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/auth/login-complete",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{loginRequestId:"49ae8f3a3928491",signature:"0xa91fd3b8bf..."},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Complete Login",description:{content:"Complete a login sequence to obtain access and refresh tokens, and cardholder account id.\nThe login sequence is initialized by [Login Init](/api-reference/initiate-login)\nor [Sign Up](/api-reference/sign-up/). For more details, see\n[Authentication](https://docs.immersve.com/guides/authentication).\n",type:"text/plain"},url:{path:["auth","login-complete"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},m=void 0,u={unversionedId:"complete-login",id:"complete-login",title:"Complete Login",description:"Complete a login sequence to obtain access and refresh tokens, and cardholder account id.",source:"@site/docs/complete-login.api.mdx",sourceDirName:".",slug:"/complete-login",permalink:"/api-reference/complete-login",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"complete-login",title:"Complete Login",description:"Complete a login sequence to obtain access and refresh tokens, and cardholder account id.",sidebar_label:"Complete Login",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authentication"],description:"Complete a login sequence to obtain access and refresh tokens, and cardholder account id.\nThe login sequence is initialized by [Login Init](/api-reference/initiate-login)\nor [Sign Up](/api-reference/sign-up/). For more details, see\n[Authentication](https://docs.immersve.com/guides/authentication).\n",security:[{none:[]}],requestBody:{content:{"application/json":{schema:{type:"object",required:["loginRequestId","signature"],properties:{loginRequestId:{description:"The unique identifier of the login request.",type:"string",example:"49ae8f3a3928491"},signature:{description:"The signature of the challenge.",type:"string",example:"0xa91fd3b8bf..."}},title:"login-complete-request"}}},required:!0},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{accessToken:{type:"string",description:"The access token that will be used for subsequent authenticated requests.",example:"eyJhbGasddweUzI1NiIsI..."},refreshToken:{type:"string",description:"JWT that is used to request a new access token. Refresh tokens are valid for 30 days.",example:"eyJhbGciOiJSUzI1NiIsI..."},cardholderAccountId:{type:"string",description:"The unique identifier of the cardholder.",example:"29097f50d221858223a17633e36716f9"}},title:"login-complete-response"}}}},403:{description:"**INVALID_SIGNATURE**\nInvalid signature.\n\n**CHALLENGE_EXPIRED**\nChallenge expired.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/auth/login-complete",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{loginRequestId:"49ae8f3a3928491",signature:"0xa91fd3b8bf..."},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Complete Login",description:{content:"Complete a login sequence to obtain access and refresh tokens, and cardholder account id.\nThe login sequence is initialized by [Login Init](/api-reference/initiate-login)\nor [Sign Up](/api-reference/sign-up/). For more details, see\n[Authentication](https://docs.immersve.com/guides/authentication).\n",type:"text/plain"},url:{path:["auth","login-complete"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Initiate Login",permalink:"/api-reference/initiate-login"},next:{title:"Sign Up",permalink:"/api-reference/sign-up"}},h={},g=[{value:"Complete Login",id:"complete-login",level:2}],y={toc:g},f="wrapper";function b(e){let{components:t,...i}=e;return(0,n.kt)(f,(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"complete-login"},"Complete Login"),(0,n.kt)("p",null,"Complete a login sequence to obtain access and refresh tokens, and cardholder account id.\nThe login sequence is initialized by ",(0,n.kt)("a",{parentName:"p",href:"/api-reference/initiate-login"},"Login Init"),"\nor ",(0,n.kt)("a",{parentName:"p",href:"/api-reference/sign-up/"},"Sign Up"),". For more details, see\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.immersve.com/guides/authentication"},"Authentication"),"."),(0,n.kt)(o.Z,{mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"loginRequestId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The unique identifier of the login request.",type:"string",example:"49ae8f3a3928491"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"signature",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The signature of the challenge.",type:"string",example:"0xa91fd3b8bf..."},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Successful operation")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"accessToken",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The access token that will be used for subsequent authenticated requests.",example:"eyJhbGasddweUzI1NiIsI..."},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"refreshToken",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"JWT that is used to request a new access token. Refresh tokens are valid for 30 days.",example:"eyJhbGciOiJSUzI1NiIsI..."},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"cardholderAccountId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The unique identifier of the cardholder.",example:"29097f50d221858223a17633e36716f9"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:'{\n  "accessToken": "eyJhbGasddweUzI1NiIsI...",\n  "refreshToken": "eyJhbGciOiJSUzI1NiIsI...",\n  "cardholderAccountId": "29097f50d221858223a17633e36716f9"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"INVALID_SIGNATURE"),"\nInvalid signature."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CHALLENGE_EXPIRED"),"\nChallenge expired.")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);