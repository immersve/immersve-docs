"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[5274],{88370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>m,metadata:()=>h,toc:()=>g});var i=a(25773),n=(a(27378),a(35318)),s=a(7743),r=a(30712),o=(a(76377),a(30980)),l=a(68388),c=a(34806),p=(a(23067),a(39798));const m={id:"login",title:"Login",description:"The login endpoint returns the authentication token in exchange",sidebar_label:"Login",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authentication"],description:"The login endpoint returns the authentication token in exchange \nfor the previously-issued challenge signed with the users wallet.\n",security:[{none:[]}],requestBody:{content:{"application/json":{schema:{type:"object",required:["message","signature"],properties:{message:{description:"The EIP-4361 challenge",type:"string",example:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z"},signature:{description:"Signature obtained by signing the message with the wallet",type:"string",example:"OxAC12.."},createCardholderAccount:{description:"A flag to indicate whether a cardholder should be automatically created. Defaults to `false`.",type:"boolean",example:!0}},title:"login-request"}}},required:!0},responses:{200:{description:"successful login",content:{"application/json":{schema:{type:"object",required:["token"],properties:{token:{description:"The authentication token",type:"string",example:"eyJhbGciOiJSUzI1NiIsI..."},refreshToken:{description:"JWT that is used to request a new access token. Refresh tokens are valid for 30 days.",type:"string",example:"eyJhbGciOiJSUzI1NiIsI..."},cardholderAccountId:{description:"The unique identifier of the cardholder.",type:"string",example:"29097f50d221858223a17633e36716f9"}},title:"login-response"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}}},method:"post",path:"/siwe/login",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{message:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z",signature:"OxAC12..",createCardholderAccount:!0},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Login",description:{content:"The login endpoint returns the authentication token in exchange \nfor the previously-issued challenge signed with the users wallet.\n",type:"text/plain"},url:{path:["siwe","login"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},d=void 0,h={unversionedId:"login",id:"login",title:"Login",description:"The login endpoint returns the authentication token in exchange",source:"@site/docs/login.api.mdx",sourceDirName:".",slug:"/login",permalink:"/api-reference/login",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"login",title:"Login",description:"The login endpoint returns the authentication token in exchange",sidebar_label:"Login",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authentication"],description:"The login endpoint returns the authentication token in exchange \nfor the previously-issued challenge signed with the users wallet.\n",security:[{none:[]}],requestBody:{content:{"application/json":{schema:{type:"object",required:["message","signature"],properties:{message:{description:"The EIP-4361 challenge",type:"string",example:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z"},signature:{description:"Signature obtained by signing the message with the wallet",type:"string",example:"OxAC12.."},createCardholderAccount:{description:"A flag to indicate whether a cardholder should be automatically created. Defaults to `false`.",type:"boolean",example:!0}},title:"login-request"}}},required:!0},responses:{200:{description:"successful login",content:{"application/json":{schema:{type:"object",required:["token"],properties:{token:{description:"The authentication token",type:"string",example:"eyJhbGciOiJSUzI1NiIsI..."},refreshToken:{description:"JWT that is used to request a new access token. Refresh tokens are valid for 30 days.",type:"string",example:"eyJhbGciOiJSUzI1NiIsI..."},cardholderAccountId:{description:"The unique identifier of the cardholder.",type:"string",example:"29097f50d221858223a17633e36716f9"}},title:"login-response"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}}},method:"post",path:"/siwe/login",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{message:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z",signature:"OxAC12..",createCardholderAccount:!0},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Login",description:{content:"The login endpoint returns the authentication token in exchange \nfor the previously-issued challenge signed with the users wallet.\n",type:"text/plain"},url:{path:["siwe","login"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Generate challenge",permalink:"/api-reference/generate-challenge"},next:{title:"Auth Token Exchange",permalink:"/api-reference/auth-token-exchange"}},u={},g=[{value:"Login",id:"login",level:2}],y={toc:g},b="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(b,(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"login"},"Login"),(0,n.kt)("p",null,"The login endpoint returns the authentication token in exchange\nfor the previously-issued challenge signed with the users wallet."),(0,n.kt)(r.Z,{mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The EIP-4361 challenge",type:"string",example:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"signature",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Signature obtained by signing the message with the wallet",type:"string",example:"OxAC12.."},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"createCardholderAccount",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"A flag to indicate whether a cardholder should be automatically created. Defaults to `false`.",type:"boolean",example:!0},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful login")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"token",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The authentication token",type:"string",example:"eyJhbGciOiJSUzI1NiIsI..."},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"refreshToken",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"JWT that is used to request a new access token. Refresh tokens are valid for 30 days.",type:"string",example:"eyJhbGciOiJSUzI1NiIsI..."},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"cardholderAccountId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The unique identifier of the cardholder.",type:"string",example:"29097f50d221858223a17633e36716f9"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "token": "eyJhbGciOiJSUzI1NiIsI...",\n  "refreshToken": "eyJhbGciOiJSUzI1NiIsI...",\n  "cardholderAccountId": "29097f50d221858223a17633e36716f9"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request fields are invalid")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:400},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bad Request"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BAD_REQUEST"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"Expected string, received number"}},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "statusCode": 400,\n  "statusName": "Bad Request",\n  "errorCode": "BAD_REQUEST",\n  "errors": [\n    "Expected string, received number"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);