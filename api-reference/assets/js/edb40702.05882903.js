"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[3477],{29022:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>T,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var t=a(25773),i=(a(27378),a(35318)),s=a(7743),r=a(30712),o=(a(76377),a(30980)),d=a(68388),p=a(34806),l=(a(23067),a(39798));const m={id:"create-a-funding-channel",title:"Create a Funding Channel",description:"This endpoint can be used to create a Funding Channel.",sidebar_label:"Create a Funding Channel",hide_title:!0,hide_table_of_contents:!0,api:{tags:["funding-channel"],description:"This endpoint can be used to create a Funding Channel.\n",requestBody:{content:{"application/json":{schema:{type:"object",required:["accountId","fundingTypeName","params"],properties:{accountId:{type:"string",description:"The id of the partner account to add this Funding Channel to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},fundingTypeName:{type:"string",description:"The name of the Funding Type.",enum:["polygon-amoy-usdc-universal-evm-test","polygon-usdc-universal-evm-live"],example:"polygon-amoy-usdc-universal-evm-test"},params:{type:"object",description:"Parameters for the Funding Channel. The valid parameters depend on the Funding Type.",properties:{storageAddress:{type:"string",description:"The address of the storage contract. Required for universal evm Funding Types.",example:"0x1234567890123456789012345678901234567890"}}}},title:"create-funding-channel"}}},required:!0},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Funding Channel primary identifier.",example:"315bad4e81ce0f26966a41b9d451638b"},createdAt:{type:"string",description:"Timestamp of Funding Channel creation.",example:"2023-08-14T12:32:54"},storageAddress:{type:"string",description:"Fund storage smart contract address.",example:"0x2e429C4324227F70f0101a17214d249cb04035Ec0"},fundingTypeName:{type:"string",description:"The type of Funding Channel registered.",example:"polygon-amoy-usdc-universal-evm-test"},name:{type:"string",description:"Name of the Funding Channel.",example:"immersve-polygon-usdc"}},title:"funding-channel"}}}},403:{description:"User is not allowed to perform the action with the reason stated in the `errorCode`\n\n**FORBIDDEN**\nInsufficient permissions to perform the action.\n\n**ACCOUNT_TYPE_INVALID**\n`accountType` of the `accountId` is not of type `PARTNER`.\n\n**FUNDING_CHANNEL_EXISTS**\nInstance of this FundingChannel has already been claimed.\n\n**STORAGE_ADDRESS_INVALID**\n`storageAddress` provided is invalid.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/api/funding-channels",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{accountId:"65a7e8ef0d230d0a6bf755e07d39eb02",fundingTypeName:"polygon-amoy-usdc-universal-evm-test",params:{storageAddress:"0x1234567890123456789012345678901234567890"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Create a Funding Channel",description:{content:"This endpoint can be used to create a Funding Channel.\n",type:"text/plain"},url:{path:["api","funding-channels"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},c=void 0,u={unversionedId:"create-a-funding-channel",id:"create-a-funding-channel",title:"Create a Funding Channel",description:"This endpoint can be used to create a Funding Channel.",source:"@site/docs/create-a-funding-channel.api.mdx",sourceDirName:".",slug:"/create-a-funding-channel",permalink:"/api-reference/create-a-funding-channel",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-a-funding-channel",title:"Create a Funding Channel",description:"This endpoint can be used to create a Funding Channel.",sidebar_label:"Create a Funding Channel",hide_title:!0,hide_table_of_contents:!0,api:{tags:["funding-channel"],description:"This endpoint can be used to create a Funding Channel.\n",requestBody:{content:{"application/json":{schema:{type:"object",required:["accountId","fundingTypeName","params"],properties:{accountId:{type:"string",description:"The id of the partner account to add this Funding Channel to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},fundingTypeName:{type:"string",description:"The name of the Funding Type.",enum:["polygon-amoy-usdc-universal-evm-test","polygon-usdc-universal-evm-live"],example:"polygon-amoy-usdc-universal-evm-test"},params:{type:"object",description:"Parameters for the Funding Channel. The valid parameters depend on the Funding Type.",properties:{storageAddress:{type:"string",description:"The address of the storage contract. Required for universal evm Funding Types.",example:"0x1234567890123456789012345678901234567890"}}}},title:"create-funding-channel"}}},required:!0},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Funding Channel primary identifier.",example:"315bad4e81ce0f26966a41b9d451638b"},createdAt:{type:"string",description:"Timestamp of Funding Channel creation.",example:"2023-08-14T12:32:54"},storageAddress:{type:"string",description:"Fund storage smart contract address.",example:"0x2e429C4324227F70f0101a17214d249cb04035Ec0"},fundingTypeName:{type:"string",description:"The type of Funding Channel registered.",example:"polygon-amoy-usdc-universal-evm-test"},name:{type:"string",description:"Name of the Funding Channel.",example:"immersve-polygon-usdc"}},title:"funding-channel"}}}},403:{description:"User is not allowed to perform the action with the reason stated in the `errorCode`\n\n**FORBIDDEN**\nInsufficient permissions to perform the action.\n\n**ACCOUNT_TYPE_INVALID**\n`accountType` of the `accountId` is not of type `PARTNER`.\n\n**FUNDING_CHANNEL_EXISTS**\nInstance of this FundingChannel has already been claimed.\n\n**STORAGE_ADDRESS_INVALID**\n`storageAddress` provided is invalid.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/api/funding-channels",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{accountId:"65a7e8ef0d230d0a6bf755e07d39eb02",fundingTypeName:"polygon-amoy-usdc-universal-evm-test",params:{storageAddress:"0x1234567890123456789012345678901234567890"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Create a Funding Channel",description:{content:"This endpoint can be used to create a Funding Channel.\n",type:"text/plain"},url:{path:["api","funding-channels"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get a Funding Channel",permalink:"/api-reference/get-a-funding-channel"},next:{title:"List Funding Channels",permalink:"/api-reference/list-funding-channels"}},h={},g=[{value:"Create a Funding Channel",id:"create-a-funding-channel",level:2}],y={toc:g},f="wrapper";function T(e){let{components:n,...a}=e;return(0,i.kt)(f,(0,t.Z)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-a-funding-channel"},"Create a Funding Channel"),(0,i.kt)("p",null,"This endpoint can be used to create a Funding Channel."),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the partner account to add this Funding Channel to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"fundingTypeName",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`polygon-amoy-usdc-universal-evm-test`, `polygon-usdc-universal-evm-live`]",schema:{type:"string",description:"The name of the Funding Type.",enum:["polygon-amoy-usdc-universal-evm-test","polygon-usdc-universal-evm-live"],example:"polygon-amoy-usdc-universal-evm-test"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"params"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Parameters for the Funding Channel. The valid parameters depend on the Funding Type.")),(0,i.kt)(d.Z,{collapsible:!1,name:"storageAddress",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The address of the storage contract. Required for universal evm Funding Types.",example:"0x1234567890123456789012345678901234567890"},mdxType:"SchemaItem"})))))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful operation")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Funding Channel primary identifier.",example:"315bad4e81ce0f26966a41b9d451638b"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of Funding Channel creation.",example:"2023-08-14T12:32:54"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"storageAddress",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fund storage smart contract address.",example:"0x2e429C4324227F70f0101a17214d249cb04035Ec0"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"fundingTypeName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The type of Funding Channel registered.",example:"polygon-amoy-usdc-universal-evm-test"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the Funding Channel.",example:"immersve-polygon-usdc"},mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "id": "315bad4e81ce0f26966a41b9d451638b",\n  "createdAt": "2023-08-14T12:32:54",\n  "storageAddress": "0x2e429C4324227F70f0101a17214d249cb04035Ec0",\n  "fundingTypeName": "polygon-amoy-usdc-universal-evm-test",\n  "name": "immersve-polygon-usdc"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(l.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"User is not allowed to perform the action with the reason stated in the ",(0,i.kt)("inlineCode",{parentName:"p"},"errorCode")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FORBIDDEN"),"\nInsufficient permissions to perform the action."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ACCOUNT_TYPE_INVALID"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"accountType")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"accountId")," is not of type ",(0,i.kt)("inlineCode",{parentName:"p"},"PARTNER"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FUNDING_CHANNEL_EXISTS"),"\nInstance of this FundingChannel has already been claimed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STORAGE_ADDRESS_INVALID"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"storageAddress")," provided is invalid.")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);