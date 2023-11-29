"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[7278],{76138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var n=a(87462),s=(a(67294),a(3905)),r=(a(8209),a(26389)),i=a(94891),o=(a(75190),a(47507)),d=a(24310),c=a(63303),m=(a(75035),a(85162));const p={id:"register-a-funding-source-for-an-account",title:"Register a funding source for an account",description:"This endpoint can be used to claim a wallet address as a source of funds. The funding wallet may be an EOA or a smart contract",sidebar_label:"Register a funding source for an account",hide_title:!0,hide_table_of_contents:!0,api:{tags:["funding-source"],description:"This endpoint can be used to claim a wallet address as a source of funds. The funding wallet may be an EOA or a smart contract \nimplementing the ERC-1271 interface. If the wallet is a smart contract, the `ownerAddress`, `message`, and `signature` fields \nare required.\n",requestBody:{content:{"application/json":{schema:{oneOf:[{type:"object",required:["accountId","fundingAddress","ownerAddress","fundingSourceType","message","signature"],properties:{accountId:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},fundingAddress:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},ownerAddress:{type:"string",description:"EOA address that matches a login wallet."},fundingSourceType:{type:"string",description:"The type of Funding Source to create.",enum:["ImmersvePolygonMumbaiUSDC","ImmersvePolygonUSDC"]},message:{type:"string",description:"An EIP-4361 message which is signed by the ownerAddress. This is used to verify ownership of the owner address."},signature:{type:"string",description:"The signature of the message."}},title:"create-funding-source-erc-1271"},{type:"object",required:["accountId","fundingAddress","fundingSourceType"],properties:{accountId:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},fundingAddress:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},fundingSourceType:{type:"string",description:"The type of Funding Source to create.",enum:["ImmersvePolygonMumbaiUSDC","ImmersvePolygonUSDC"]}},title:"create-funding-source-eoa"}]}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"User is not allowed to perform the action with the reason stated in the `errorCode`\n\n**FORBIDDEN**\nInsufficient permissions to perform the action.\n\n**SIGNATURE_DENIED**\nThe signature was rejected by the ERC-1271 contract `isValidSignature` function.\n\n**SIGNATURE_INVALID**\nThe message signature was invalid.\n\n**ADDRESS_MISMATCH**\nThe `ownerAddress` does not match the EIP-4361 message address.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/api/funding-sources",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{accountId:"65a7e8ef0d230d0a6bf755e07d39eb02",fundingAddress:10392900530713021e31,ownerAddress:"string",fundingSourceType:"ImmersvePolygonMumbaiUSDC",message:"string",signature:"string"},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Register a funding source for an account",description:{content:"This endpoint can be used to claim a wallet address as a source of funds. The funding wallet may be an EOA or a smart contract \nimplementing the ERC-1271 interface. If the wallet is a smart contract, the `ownerAddress`, `message`, and `signature` fields \nare required.\n",type:"text/plain"},url:{path:["api","funding-sources"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},l=void 0,u={unversionedId:"api-reference/register-a-funding-source-for-an-account",id:"api-reference/register-a-funding-source-for-an-account",title:"Register a funding source for an account",description:"This endpoint can be used to claim a wallet address as a source of funds. The funding wallet may be an EOA or a smart contract",source:"@site/docs/api-reference/register-a-funding-source-for-an-account.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/register-a-funding-source-for-an-account",permalink:"/api-reference/register-a-funding-source-for-an-account",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"register-a-funding-source-for-an-account",title:"Register a funding source for an account",description:"This endpoint can be used to claim a wallet address as a source of funds. The funding wallet may be an EOA or a smart contract",sidebar_label:"Register a funding source for an account",hide_title:!0,hide_table_of_contents:!0,api:{tags:["funding-source"],description:"This endpoint can be used to claim a wallet address as a source of funds. The funding wallet may be an EOA or a smart contract \nimplementing the ERC-1271 interface. If the wallet is a smart contract, the `ownerAddress`, `message`, and `signature` fields \nare required.\n",requestBody:{content:{"application/json":{schema:{oneOf:[{type:"object",required:["accountId","fundingAddress","ownerAddress","fundingSourceType","message","signature"],properties:{accountId:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},fundingAddress:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},ownerAddress:{type:"string",description:"EOA address that matches a login wallet."},fundingSourceType:{type:"string",description:"The type of Funding Source to create.",enum:["ImmersvePolygonMumbaiUSDC","ImmersvePolygonUSDC"]},message:{type:"string",description:"An EIP-4361 message which is signed by the ownerAddress. This is used to verify ownership of the owner address."},signature:{type:"string",description:"The signature of the message."}},title:"create-funding-source-erc-1271"},{type:"object",required:["accountId","fundingAddress","fundingSourceType"],properties:{accountId:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},fundingAddress:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},fundingSourceType:{type:"string",description:"The type of Funding Source to create.",enum:["ImmersvePolygonMumbaiUSDC","ImmersvePolygonUSDC"]}},title:"create-funding-source-eoa"}]}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"User is not allowed to perform the action with the reason stated in the `errorCode`\n\n**FORBIDDEN**\nInsufficient permissions to perform the action.\n\n**SIGNATURE_DENIED**\nThe signature was rejected by the ERC-1271 contract `isValidSignature` function.\n\n**SIGNATURE_INVALID**\nThe message signature was invalid.\n\n**ADDRESS_MISMATCH**\nThe `ownerAddress` does not match the EIP-4361 message address.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/api/funding-sources",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{accountId:"65a7e8ef0d230d0a6bf755e07d39eb02",fundingAddress:10392900530713021e31,ownerAddress:"string",fundingSourceType:"ImmersvePolygonMumbaiUSDC",message:"string",signature:"string"},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Register a funding source for an account",description:{content:"This endpoint can be used to claim a wallet address as a source of funds. The funding wallet may be an EOA or a smart contract \nimplementing the ERC-1271 interface. If the wallet is a smart contract, the `ownerAddress`, `message`, and `signature` fields \nare required.\n",type:"text/plain"},url:{path:["api","funding-sources"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"List funding sources",permalink:"/api-reference/list-funding-sources"},next:{title:"Transactions",permalink:"/api-reference/transactions"}},g={},h=[{value:"Register a funding source for an account",id:"register-a-funding-source-for-an-account",level:2}],y={toc:h};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"register-a-funding-source-for-an-account"},"Register a funding source for an account"),(0,s.kt)("p",null,"This endpoint can be used to claim a wallet address as a source of funds. The funding wallet may be an EOA or a smart contract\nimplementing the ERC-1271 interface. If the wallet is a smart contract, the ",(0,s.kt)("inlineCode",{parentName:"p"},"ownerAddress"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"message"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"signature")," fields\nare required."),(0,s.kt)(i.Z,{mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"create-funding-source-erc-1271",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(d.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"fundingAddress",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"ownerAddress",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"EOA address that matches a login wallet."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"fundingSourceType",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`ImmersvePolygonMumbaiUSDC`, `ImmersvePolygonUSDC`]",schema:{type:"string",description:"The type of Funding Source to create.",enum:["ImmersvePolygonMumbaiUSDC","ImmersvePolygonUSDC"]},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"An EIP-4361 message which is signed by the ownerAddress. This is used to verify ownership of the owner address."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"signature",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The signature of the message."},mdxType:"SchemaItem"})),(0,s.kt)(m.Z,{label:"create-funding-source-eoa",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(d.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"fundingAddress",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"fundingSourceType",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`ImmersvePolygonMumbaiUSDC`, `ImmersvePolygonUSDC`]",schema:{type:"string",description:"The type of Funding Source to create.",enum:["ImmersvePolygonMumbaiUSDC","ImmersvePolygonUSDC"]},mdxType:"SchemaItem"})))))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Request fields are invalid")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:400},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bad Request"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BAD_REQUEST"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"Expected string, received number"}},mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "statusCode": 400,\n  "statusName": "Bad Request",\n  "errorCode": "BAD_REQUEST",\n  "errors": [\n    "Expected string, received number"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"User is not allowed to perform the action with the reason stated in the ",(0,s.kt)("inlineCode",{parentName:"p"},"errorCode")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"FORBIDDEN"),"\nInsufficient permissions to perform the action."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SIGNATURE_DENIED"),"\nThe signature was rejected by the ERC-1271 contract ",(0,s.kt)("inlineCode",{parentName:"p"},"isValidSignature")," function."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SIGNATURE_INVALID"),"\nThe message signature was invalid."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"ADDRESS_MISMATCH"),"\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"ownerAddress")," does not match the EIP-4361 message address.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);