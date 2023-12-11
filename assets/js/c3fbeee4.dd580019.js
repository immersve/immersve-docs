"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[9086],{47062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>h,toc:()=>y});var a=n(87462),i=(n(67294),n(3905)),s=(n(8209),n(26389)),r=n(94891),o=n(75190),d=n(47507),c=n(24310),p=n(63303),l=(n(75035),n(85162));const m={id:"list-funding-channels",title:"List Funding Channels",description:"Retrieves a list of Funding Channels for the given account",sidebar_label:"List Funding Channels",hide_title:!0,hide_table_of_contents:!0,api:{tags:["funding-channel"],description:"Retrieves a list of Funding Channels for the given account",parameters:[{name:"accountId",in:"path",description:"Partner account id to retrieve Funding Channels for.",required:!0,schema:{type:"string"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"Funding Channel primary identifier.",example:"315bad4e81ce0f26966a41b9d451638b"},createdAt:{type:"string",description:"Timestamp of Funding Channel creation.",example:"2023-08-14T12:32:54"},address:{type:"string",description:"Fund storage smart contract address.",example:"0x2e429C4324227F70f0101a17214d249cb04035Ec0"},fundingTypeName:{type:"string",description:"The type of Funding Channel registered.",example:"polygon-usdc-universal-evm-test"},name:{type:"string",description:"Name of the Funding Channel.",example:"immersve-polygon-usdc"}},title:"funding-channel"}}},title:"get-funding-channels"}}}},403:{description:"No Authorization to access resource",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/account/{accountId}/funding-channels",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"List Funding Channels",description:{content:"Retrieves a list of Funding Channels for the given account",type:"text/plain"},url:{path:["api","account",":accountId","funding-channels"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Partner account id to retrieve Funding Channels for.",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},u=void 0,h={unversionedId:"api-reference/list-funding-channels",id:"api-reference/list-funding-channels",title:"List Funding Channels",description:"Retrieves a list of Funding Channels for the given account",source:"@site/docs/api-reference/list-funding-channels.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/list-funding-channels",permalink:"/api-reference/list-funding-channels",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-funding-channels",title:"List Funding Channels",description:"Retrieves a list of Funding Channels for the given account",sidebar_label:"List Funding Channels",hide_title:!0,hide_table_of_contents:!0,api:{tags:["funding-channel"],description:"Retrieves a list of Funding Channels for the given account",parameters:[{name:"accountId",in:"path",description:"Partner account id to retrieve Funding Channels for.",required:!0,schema:{type:"string"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"Funding Channel primary identifier.",example:"315bad4e81ce0f26966a41b9d451638b"},createdAt:{type:"string",description:"Timestamp of Funding Channel creation.",example:"2023-08-14T12:32:54"},address:{type:"string",description:"Fund storage smart contract address.",example:"0x2e429C4324227F70f0101a17214d249cb04035Ec0"},fundingTypeName:{type:"string",description:"The type of Funding Channel registered.",example:"polygon-usdc-universal-evm-test"},name:{type:"string",description:"Name of the Funding Channel.",example:"immersve-polygon-usdc"}},title:"funding-channel"}}},title:"get-funding-channels"}}}},403:{description:"No Authorization to access resource",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/account/{accountId}/funding-channels",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"List Funding Channels",description:{content:"Retrieves a list of Funding Channels for the given account",type:"text/plain"},url:{path:["api","account",":accountId","funding-channels"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Partner account id to retrieve Funding Channels for.",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Create a Funding Channel",permalink:"/api-reference/create-a-funding-channel"},next:{title:"Transactions",permalink:"/api-reference/transactions"}},g={},y=[{value:"List Funding Channels",id:"list-funding-channels",level:2}],f={toc:y};function v(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"list-funding-channels"},"List Funding Channels"),(0,i.kt)("p",null,"Retrieves a list of Funding Channels for the given account"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"accountId",in:"path",description:"Partner account id to retrieve Funding Channels for.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful operation")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"items"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Funding Channel primary identifier.",example:"315bad4e81ce0f26966a41b9d451638b"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of Funding Channel creation.",example:"2023-08-14T12:32:54"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fund storage smart contract address.",example:"0x2e429C4324227F70f0101a17214d249cb04035Ec0"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"fundingTypeName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The type of Funding Channel registered.",example:"polygon-usdc-universal-evm-test"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the Funding Channel.",example:"immersve-polygon-usdc"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "items": [\n    {\n      "id": "315bad4e81ce0f26966a41b9d451638b",\n      "createdAt": "2023-08-14T12:32:54",\n      "address": "0x2e429C4324227F70f0101a17214d249cb04035Ec0",\n      "fundingTypeName": "polygon-usdc-universal-evm-test",\n      "name": "immersve-polygon-usdc"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(l.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"No Authorization to access resource")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);