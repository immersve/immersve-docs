"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[7604],{65639:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>h,toc:()=>y});var t=a(25773),i=(a(27378),a(35318)),r=a(7743),s=a(30712),d=a(76377),p=a(30980),o=a(68388),l=a(34806),c=(a(23067),a(39798));const m={id:"get-a-funding-channel",title:"Get a Funding Channel",description:"Retrieves a specific Funding Channel for the given account",sidebar_label:"Get a Funding Channel",hide_title:!0,hide_table_of_contents:!0,api:{tags:["funding-channel"],description:"Retrieves a specific Funding Channel for the given account",parameters:[{name:"fundingChannelId",in:"path",description:"id for the Funding Channel",example:"315bad4e81ce0f26966a41b9d451638b",required:!0,schema:{type:"string"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Funding Channel primary identifier.",example:"315bad4e81ce0f26966a41b9d451638b"},createdAt:{type:"string",description:"Timestamp of Funding Channel creation.",example:"2023-08-14T12:32:54"},storageAddress:{type:"string",description:"Fund storage smart contract address.",example:"0x2e429C4324227F70f0101a17214d249cb04035Ec0"},fundingTypeName:{type:"string",description:"The type of Funding Channel registered.",example:"polygon-usdc-universal-evm-test"},name:{type:"string",description:"Name of the Funding Channel.",example:"immersve-polygon-usdc"}},title:"funding-channel"}}}},403:{description:"No Authorization to access resource",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/funding-channel/{fundingChannelId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Get a Funding Channel",description:{content:"Retrieves a specific Funding Channel for the given account",type:"text/plain"},url:{path:["api","funding-channel",":fundingChannelId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) id for the Funding Channel",type:"text/plain"},type:"any",value:"",key:"fundingChannelId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"immersve-api",custom_edit_url:null},u=void 0,h={unversionedId:"get-a-funding-channel",id:"get-a-funding-channel",title:"Get a Funding Channel",description:"Retrieves a specific Funding Channel for the given account",source:"@site/docs/get-a-funding-channel.api.mdx",sourceDirName:".",slug:"/get-a-funding-channel",permalink:"/api-reference/get-a-funding-channel",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-a-funding-channel",title:"Get a Funding Channel",description:"Retrieves a specific Funding Channel for the given account",sidebar_label:"Get a Funding Channel",hide_title:!0,hide_table_of_contents:!0,api:{tags:["funding-channel"],description:"Retrieves a specific Funding Channel for the given account",parameters:[{name:"fundingChannelId",in:"path",description:"id for the Funding Channel",example:"315bad4e81ce0f26966a41b9d451638b",required:!0,schema:{type:"string"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Funding Channel primary identifier.",example:"315bad4e81ce0f26966a41b9d451638b"},createdAt:{type:"string",description:"Timestamp of Funding Channel creation.",example:"2023-08-14T12:32:54"},storageAddress:{type:"string",description:"Fund storage smart contract address.",example:"0x2e429C4324227F70f0101a17214d249cb04035Ec0"},fundingTypeName:{type:"string",description:"The type of Funding Channel registered.",example:"polygon-usdc-universal-evm-test"},name:{type:"string",description:"Name of the Funding Channel.",example:"immersve-polygon-usdc"}},title:"funding-channel"}}}},403:{description:"No Authorization to access resource",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/funding-channel/{fundingChannelId}",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Get a Funding Channel",description:{content:"Retrieves a specific Funding Channel for the given account",type:"text/plain"},url:{path:["api","funding-channel",":fundingChannelId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) id for the Funding Channel",type:"text/plain"},type:"any",value:"",key:"fundingChannelId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Funding Channels",permalink:"/api-reference/funding-channel"},next:{title:"Create a Funding Channel",permalink:"/api-reference/create-a-funding-channel"}},g={},y=[{value:"Get a Funding Channel",id:"get-a-funding-channel",level:2}],f={toc:y},b="wrapper";function v(e){let{components:n,...a}=e;return(0,i.kt)(b,(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-a-funding-channel"},"Get a Funding Channel"),(0,i.kt)("p",null,"Retrieves a specific Funding Channel for the given account"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"fundingChannelId",in:"path",description:"id for the Funding Channel",example:"315bad4e81ce0f26966a41b9d451638b",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful operation")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Funding Channel primary identifier.",example:"315bad4e81ce0f26966a41b9d451638b"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of Funding Channel creation.",example:"2023-08-14T12:32:54"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"storageAddress",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fund storage smart contract address.",example:"0x2e429C4324227F70f0101a17214d249cb04035Ec0"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"fundingTypeName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The type of Funding Channel registered.",example:"polygon-usdc-universal-evm-test"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the Funding Channel.",example:"immersve-polygon-usdc"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "id": "315bad4e81ce0f26966a41b9d451638b",\n  "createdAt": "2023-08-14T12:32:54",\n  "storageAddress": "0x2e429C4324227F70f0101a17214d249cb04035Ec0",\n  "fundingTypeName": "polygon-usdc-universal-evm-test",\n  "name": "immersve-polygon-usdc"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"No Authorization to access resource")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);