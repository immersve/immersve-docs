"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[386],{95656:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>m,default:()=>y,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var n=t(25773),r=(t(27378),t(35318)),s=t(7743),i=t(30712),d=(t(76377),t(30980)),o=t(68388),c=t(34806),l=(t(23067),t(39798));const p={id:"create-a-funding-source-for-an-account",title:"Create a funding source for an account",description:"This endpoint can be used to claim a web3 address as a source of funds. The funding address may be an EOA or a smart contract implementing the ERC-1271 interface. If the address is a smart contract, the `ownerAddress`, `message`, and `signature` fields are required.<br/>",sidebar_label:"Create a funding source for an account",hide_title:!0,hide_table_of_contents:!0,api:{tags:["funding-source"],description:"This endpoint can be used to claim a web3 address as a source of funds. The funding address may be an EOA or a smart contract implementing the ERC-1271 interface. If the address is a smart contract, the `ownerAddress`, `message`, and `signature` fields are required.<br/>\nThe [Create challenge endpoint](/api-reference/create-challenge) can be used to prove ownership of a web3 address by signing the returned message.\n",requestBody:{content:{"application/json":{schema:{oneOf:[{type:"object",required:["accountId","fundingAddress","fundingChannelId"],properties:{accountId:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},fundingAddress:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},fundingChannelId:{type:"string",description:"The id of the Funding Channel that this Funding Source relates to.",example:"315bad4e81ce0f26966a41b9d451638b"}},title:"create-funding-source-eoa"},{type:"object",required:["accountId","fundingAddress","ownerAddress","fundingChannelId","message","signature"],properties:{accountId:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},fundingAddress:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},ownerAddress:{type:"string",description:"EOA address that matches a login wallet."},fundingChannelId:{type:"string",description:"The id of the Funding Channel that this Funding Source relates to.",example:"315bad4e81ce0f26966a41b9d451638b"},message:{type:"string",description:"An EIP-4361 message which is signed by the ownerAddress. This is used to verify ownership of the owner address."},signature:{type:"string",description:"The signature of the message."}},title:"create-funding-source-erc-1271"},{type:"object",required:["accountId","fundingAddress","fundingChannelId","challengeId","signature"],properties:{accountId:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},fundingAddress:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},fundingChannelId:{type:"string",description:"The id of the Funding Channel that this Funding Source relates to.",example:"315bad4e81ce0f26966a41b9d451638b"},challengeId:{type:"string",description:"Id of challenge returned by [Create challenge endpoint](/api-reference/create-challenge)",example:"d0d8e6571eae4392f696f2399213e485"},signature:{type:"string",description:"Signature generated by signing message from challenge returned by [Create challenge endpoint](/api-reference/create-challenge)",example:3356988409151797e141}},title:"create-funding-source-challenge"}]}}},required:!0},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Funding Source primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"Cardholder account this Funding Source belongs to",example:"057aa15913a57f50577234c8426534c0"},createdAt:{type:"string",description:"Timestamp of Funding Source creation",example:"2022-11-16T03:13:18.142Z"},balance:{type:"string",description:"Current balance of Funding Source in minor units",example:"1000000"},balanceCurrency:{type:"string",description:"Currency of the balance",example:"USDC"},fundingChannelId:{type:"string",description:"The id of the Funding Channel that this Funding Source relates to.",example:"315bad4e81ce0f26966a41b9d451638b"}},title:"funding-source"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"User is not allowed to perform the action with the reason stated in the `errorCode`\n\n**FORBIDDEN**\nInsufficient permissions to perform the action.\n\n**SIGNATURE_DENIED**\nThe signature was rejected by the ERC-1271 contract `isValidSignature` function.\n\n**SIGNATURE_INVALID**\nThe message signature was invalid.\n\n**ADDRESS_MISMATCH**\nThe `ownerAddress` does not match the EIP-4361 message address.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/api/funding-sources",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{accountId:"65a7e8ef0d230d0a6bf755e07d39eb02",fundingAddress:10392900530713021e31,fundingChannelId:"315bad4e81ce0f26966a41b9d451638b"},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Create a funding source for an account",description:{content:"This endpoint can be used to claim a web3 address as a source of funds. The funding address may be an EOA or a smart contract implementing the ERC-1271 interface. If the address is a smart contract, the `ownerAddress`, `message`, and `signature` fields are required.<br/>\nThe [Create challenge endpoint](/api-reference/create-challenge) can be used to prove ownership of a web3 address by signing the returned message.\n",type:"text/plain"},url:{path:["api","funding-sources"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},m=void 0,u={unversionedId:"create-a-funding-source-for-an-account",id:"create-a-funding-source-for-an-account",title:"Create a funding source for an account",description:"This endpoint can be used to claim a web3 address as a source of funds. The funding address may be an EOA or a smart contract implementing the ERC-1271 interface. If the address is a smart contract, the `ownerAddress`, `message`, and `signature` fields are required.<br/>",source:"@site/docs/create-a-funding-source-for-an-account.api.mdx",sourceDirName:".",slug:"/create-a-funding-source-for-an-account",permalink:"/api-reference/create-a-funding-source-for-an-account",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-a-funding-source-for-an-account",title:"Create a funding source for an account",description:"This endpoint can be used to claim a web3 address as a source of funds. The funding address may be an EOA or a smart contract implementing the ERC-1271 interface. If the address is a smart contract, the `ownerAddress`, `message`, and `signature` fields are required.<br/>",sidebar_label:"Create a funding source for an account",hide_title:!0,hide_table_of_contents:!0,api:{tags:["funding-source"],description:"This endpoint can be used to claim a web3 address as a source of funds. The funding address may be an EOA or a smart contract implementing the ERC-1271 interface. If the address is a smart contract, the `ownerAddress`, `message`, and `signature` fields are required.<br/>\nThe [Create challenge endpoint](/api-reference/create-challenge) can be used to prove ownership of a web3 address by signing the returned message.\n",requestBody:{content:{"application/json":{schema:{oneOf:[{type:"object",required:["accountId","fundingAddress","fundingChannelId"],properties:{accountId:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},fundingAddress:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},fundingChannelId:{type:"string",description:"The id of the Funding Channel that this Funding Source relates to.",example:"315bad4e81ce0f26966a41b9d451638b"}},title:"create-funding-source-eoa"},{type:"object",required:["accountId","fundingAddress","ownerAddress","fundingChannelId","message","signature"],properties:{accountId:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},fundingAddress:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},ownerAddress:{type:"string",description:"EOA address that matches a login wallet."},fundingChannelId:{type:"string",description:"The id of the Funding Channel that this Funding Source relates to.",example:"315bad4e81ce0f26966a41b9d451638b"},message:{type:"string",description:"An EIP-4361 message which is signed by the ownerAddress. This is used to verify ownership of the owner address."},signature:{type:"string",description:"The signature of the message."}},title:"create-funding-source-erc-1271"},{type:"object",required:["accountId","fundingAddress","fundingChannelId","challengeId","signature"],properties:{accountId:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},fundingAddress:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},fundingChannelId:{type:"string",description:"The id of the Funding Channel that this Funding Source relates to.",example:"315bad4e81ce0f26966a41b9d451638b"},challengeId:{type:"string",description:"Id of challenge returned by [Create challenge endpoint](/api-reference/create-challenge)",example:"d0d8e6571eae4392f696f2399213e485"},signature:{type:"string",description:"Signature generated by signing message from challenge returned by [Create challenge endpoint](/api-reference/create-challenge)",example:3356988409151797e141}},title:"create-funding-source-challenge"}]}}},required:!0},responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Funding Source primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},accountId:{type:"string",description:"Cardholder account this Funding Source belongs to",example:"057aa15913a57f50577234c8426534c0"},createdAt:{type:"string",description:"Timestamp of Funding Source creation",example:"2022-11-16T03:13:18.142Z"},balance:{type:"string",description:"Current balance of Funding Source in minor units",example:"1000000"},balanceCurrency:{type:"string",description:"Currency of the balance",example:"USDC"},fundingChannelId:{type:"string",description:"The id of the Funding Channel that this Funding Source relates to.",example:"315bad4e81ce0f26966a41b9d451638b"}},title:"funding-source"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"User is not allowed to perform the action with the reason stated in the `errorCode`\n\n**FORBIDDEN**\nInsufficient permissions to perform the action.\n\n**SIGNATURE_DENIED**\nThe signature was rejected by the ERC-1271 contract `isValidSignature` function.\n\n**SIGNATURE_INVALID**\nThe message signature was invalid.\n\n**ADDRESS_MISMATCH**\nThe `ownerAddress` does not match the EIP-4361 message address.\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/api/funding-sources",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{accountId:"65a7e8ef0d230d0a6bf755e07d39eb02",fundingAddress:10392900530713021e31,fundingChannelId:"315bad4e81ce0f26966a41b9d451638b"},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Create a funding source for an account",description:{content:"This endpoint can be used to claim a web3 address as a source of funds. The funding address may be an EOA or a smart contract implementing the ERC-1271 interface. If the address is a smart contract, the `ownerAddress`, `message`, and `signature` fields are required.<br/>\nThe [Create challenge endpoint](/api-reference/create-challenge) can be used to prove ownership of a web3 address by signing the returned message.\n",type:"text/plain"},url:{path:["api","funding-sources"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get a Funding Source",permalink:"/api-reference/get-a-funding-source"},next:{title:"List Funding Source Interactions",permalink:"/api-reference/list-funding-source-interactions"}},g={},h=[{value:"Create a funding source for an account",id:"create-a-funding-source-for-an-account",level:2}],f={toc:h},b="wrapper";function y(e){let{components:a,...t}=e;return(0,r.kt)(b,(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-a-funding-source-for-an-account"},"Create a funding source for an account"),(0,r.kt)("p",null,"This endpoint can be used to claim a web3 address as a source of funds. The funding address may be an EOA or a smart contract implementing the ERC-1271 interface. If the address is a smart contract, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerAddress"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," fields are required.",(0,r.kt)("br",null),"\nThe ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/create-challenge"},"Create challenge endpoint")," can be used to prove ownership of a web3 address by signing the returned message."),(0,r.kt)(i.Z,{mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(l.Z,{label:"create-funding-source-eoa",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)(o.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"fundingAddress",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"fundingChannelId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the Funding Channel that this Funding Source relates to.",example:"315bad4e81ce0f26966a41b9d451638b"},mdxType:"SchemaItem"})),(0,r.kt)(l.Z,{label:"create-funding-source-erc-1271",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)(o.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"fundingAddress",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"ownerAddress",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"EOA address that matches a login wallet."},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"fundingChannelId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the Funding Channel that this Funding Source relates to.",example:"315bad4e81ce0f26966a41b9d451638b"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"message",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"An EIP-4361 message which is signed by the ownerAddress. This is used to verify ownership of the owner address."},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"signature",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The signature of the message."},mdxType:"SchemaItem"})),(0,r.kt)(l.Z,{label:"create-funding-source-challenge",value:"2-item-properties",mdxType:"TabItem"},(0,r.kt)(o.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the cardholder account to add this Funding Source to.",example:"65a7e8ef0d230d0a6bf755e07d39eb02"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"fundingAddress",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The address to claim as a Funding Source. This can be a smart contract implementing ERC-1271 or an EOA address.",example:10392900530713021e31},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"fundingChannelId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the Funding Channel that this Funding Source relates to.",example:"315bad4e81ce0f26966a41b9d451638b"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"challengeId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Id of challenge returned by [Create challenge endpoint](/api-reference/create-challenge)",example:"d0d8e6571eae4392f696f2399213e485"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"signature",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Signature generated by signing message from challenge returned by [Create challenge endpoint](/api-reference/create-challenge)",example:3356988409151797e141},mdxType:"SchemaItem"})))))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Successful operation")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Funding Source primary identifier",example:"91ad6fea3b52ca58d60d7fd310f789ec"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"accountId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Cardholder account this Funding Source belongs to",example:"057aa15913a57f50577234c8426534c0"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of Funding Source creation",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"balance",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Current balance of Funding Source in minor units",example:"1000000"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"balanceCurrency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Currency of the balance",example:"USDC"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"fundingChannelId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the Funding Channel that this Funding Source relates to.",example:"315bad4e81ce0f26966a41b9d451638b"},mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:'{\n  "id": "91ad6fea3b52ca58d60d7fd310f789ec",\n  "accountId": "057aa15913a57f50577234c8426534c0",\n  "createdAt": "2022-11-16T03:13:18.142Z",\n  "balance": "1000000",\n  "balanceCurrency": "USDC",\n  "fundingChannelId": "315bad4e81ce0f26966a41b9d451638b"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request fields are invalid")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:400},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bad Request"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BAD_REQUEST"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"Expected string, received number"}},mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:'{\n  "statusCode": 400,\n  "statusName": "Bad Request",\n  "errorCode": "BAD_REQUEST",\n  "errors": [\n    "Expected string, received number"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(l.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"User is not allowed to perform the action with the reason stated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"errorCode")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FORBIDDEN"),"\nInsufficient permissions to perform the action."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SIGNATURE_DENIED"),"\nThe signature was rejected by the ERC-1271 contract ",(0,r.kt)("inlineCode",{parentName:"p"},"isValidSignature")," function."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SIGNATURE_INVALID"),"\nThe message signature was invalid."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ADDRESS_MISMATCH"),"\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerAddress")," does not match the EIP-4361 message address.")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);