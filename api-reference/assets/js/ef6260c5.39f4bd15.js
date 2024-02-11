"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[1424],{24515:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>T,frontMatter:()=>c,metadata:()=>y,toc:()=>b});var i=a(25773),r=(a(27378),a(35318)),s=a(7743),n=a(30712),m=a(76377),o=a(30980),p=a(68388),l=a(34806),d=(a(23067),a(39798));const c={id:"submit-partner-kyc-statement",title:"Submit Partner KYC Statement",description:"Submit a KYC statement about the cardholder.",sidebar_label:"Submit Partner KYC Statement",hide_title:!0,hide_table_of_contents:!0,api:{tags:["kyc"],description:"Submit a KYC statement about the cardholder.",parameters:[{name:"cardholderAccountId",in:"path",description:"ID of the cardholder account.",example:"65a7e8ef0d230d0a6bf755e07d39eb02",required:!0,schema:{type:"string"}}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{idempotencyKey:{type:"string",description:"A client-supplied identifier that prevents duplicate creation.",example:"21ede8ef0d230d0a6bf755e07d39la54"},claims:{type:"array",description:"A list of claims about the cardholder's identity.",items:{type:"object",properties:{claimType:{type:"string",description:"The type of claim.",enum:["FULL_NAME","DOB","ADDRESS"],example:"FULL_NAME"},attributes:{type:"object",description:"The attributes that support the claim.",oneOf:[{properties:{givenName:{type:"string",description:"Primary name.",example:"John"},middleName:{type:"string",description:"Other name(s).",example:"Foo Bar"},familyName:{type:"string",description:"Family name or surname.",example:"Doe"},honorific:{type:"string",description:"Title used to address the cardholder.",example:"Mr"}},title:"FULL_NAME"},{required:["dateOfBirth"],properties:{dateOfBirth:{type:"string",description:"The cardholder's date of birth formatted as YYYY-MM-DD",example:"1981-11-03"}},title:"DOB"},{required:["country"],properties:{addressType:{type:"string",description:"The type of address.",enum:["RESIDENTIAL"],example:"RESIDENTIAL"},unitNumber:{type:"string",description:"The unit number.",example:"1"},streetNumber:{type:"string",description:"Street number. Generally a number but can also be alphanumeric.",example:"3A"},streetName:{type:"string",description:"Street name.",example:"Victoria"},streetType:{type:"string",description:"Street type. e.g. Road, St, Avenue, Circuit.",example:"Avenue"},town:{type:"string",description:"The town/village/suburb/city.",example:"Auckland"},suburb:{type:"string",description:'The suburb in the town/city. Only use this if you require a suburb AND a town/city, otherwise, just use the "town" parameter.',example:"Epsom"},state:{type:"string",description:"The state. Use local abbreviations such as VIC (Victoria) or TX (Texas).",example:"AKL"},region:{type:"string",description:"The county, province, or cantonment.",example:"AKL"},postalCode:{type:"string",description:"Postal code.",example:"1050"},country:{type:"string",description:"Country code.",enum:["NZL"],example:"NZL"}},title:"ADDRESS"}]}},title:"claims"}},evidence:{type:"array",description:"A list of evidence supporting the claimed identity. At least one piece of evidence is required.",items:{type:"object",required:["evidenceType","documentId","country"],properties:{evidenceType:{type:"string",description:"The type of evidence.",enum:["PASSPORT","DRIVERS_LICENSE"],example:"DRIVERS_LICENSE"},documentId:{type:"string",description:"The passport number or the license number.",example:"DS230475"},country:{type:"string",description:"The country that issued the document.",enum:["NZL"],example:"NZL"},expiry:{type:"string",description:"The passport expiry formatted as YYYY-MM-DD. Required for PASSPORT.",example:"2024-10-12"},version:{type:"string",description:"The driver's license version. Required for DRIVERS_LICENSE.",example:"978"}},title:"evidence"}}},title:"submit-kyc-statement-request"}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request parameters are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"Subject is not allowed to perform the action with the reason stated in the `errorCode`\n\n**FORBIDDEN**\nResource does not exist or there are no sufficient permissions to perform the action.\n\n**KYC_STATEMENTS_NOT_ALLOWED** \nPartner is not configured to submit KYC statements\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"put",path:"/api/accounts/{cardholderAccountId}/partner-kyc-statement",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{idempotencyKey:"21ede8ef0d230d0a6bf755e07d39la54",claims:[{claimType:"FULL_NAME",attributes:{givenName:"John",middleName:"Foo Bar",familyName:"Doe",honorific:"Mr"}}],evidence:[{evidenceType:"DRIVERS_LICENSE",documentId:"DS230475",country:"NZL",expiry:"2024-10-12",version:"978"}]},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Submit Partner KYC Statement",description:{content:"Submit a KYC statement about the cardholder.",type:"text/plain"},url:{path:["api","accounts",":cardholderAccountId","partner-kyc-statement"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the cardholder account.",type:"text/plain"},type:"any",value:"",key:"cardholderAccountId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"put api-method",info_path:"immersve-api",custom_edit_url:null},u=void 0,y={unversionedId:"submit-partner-kyc-statement",id:"submit-partner-kyc-statement",title:"Submit Partner KYC Statement",description:"Submit a KYC statement about the cardholder.",source:"@site/docs/submit-partner-kyc-statement.api.mdx",sourceDirName:".",slug:"/submit-partner-kyc-statement",permalink:"/api-reference/submit-partner-kyc-statement",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"submit-partner-kyc-statement",title:"Submit Partner KYC Statement",description:"Submit a KYC statement about the cardholder.",sidebar_label:"Submit Partner KYC Statement",hide_title:!0,hide_table_of_contents:!0,api:{tags:["kyc"],description:"Submit a KYC statement about the cardholder.",parameters:[{name:"cardholderAccountId",in:"path",description:"ID of the cardholder account.",example:"65a7e8ef0d230d0a6bf755e07d39eb02",required:!0,schema:{type:"string"}}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{idempotencyKey:{type:"string",description:"A client-supplied identifier that prevents duplicate creation.",example:"21ede8ef0d230d0a6bf755e07d39la54"},claims:{type:"array",description:"A list of claims about the cardholder's identity.",items:{type:"object",properties:{claimType:{type:"string",description:"The type of claim.",enum:["FULL_NAME","DOB","ADDRESS"],example:"FULL_NAME"},attributes:{type:"object",description:"The attributes that support the claim.",oneOf:[{properties:{givenName:{type:"string",description:"Primary name.",example:"John"},middleName:{type:"string",description:"Other name(s).",example:"Foo Bar"},familyName:{type:"string",description:"Family name or surname.",example:"Doe"},honorific:{type:"string",description:"Title used to address the cardholder.",example:"Mr"}},title:"FULL_NAME"},{required:["dateOfBirth"],properties:{dateOfBirth:{type:"string",description:"The cardholder's date of birth formatted as YYYY-MM-DD",example:"1981-11-03"}},title:"DOB"},{required:["country"],properties:{addressType:{type:"string",description:"The type of address.",enum:["RESIDENTIAL"],example:"RESIDENTIAL"},unitNumber:{type:"string",description:"The unit number.",example:"1"},streetNumber:{type:"string",description:"Street number. Generally a number but can also be alphanumeric.",example:"3A"},streetName:{type:"string",description:"Street name.",example:"Victoria"},streetType:{type:"string",description:"Street type. e.g. Road, St, Avenue, Circuit.",example:"Avenue"},town:{type:"string",description:"The town/village/suburb/city.",example:"Auckland"},suburb:{type:"string",description:'The suburb in the town/city. Only use this if you require a suburb AND a town/city, otherwise, just use the "town" parameter.',example:"Epsom"},state:{type:"string",description:"The state. Use local abbreviations such as VIC (Victoria) or TX (Texas).",example:"AKL"},region:{type:"string",description:"The county, province, or cantonment.",example:"AKL"},postalCode:{type:"string",description:"Postal code.",example:"1050"},country:{type:"string",description:"Country code.",enum:["NZL"],example:"NZL"}},title:"ADDRESS"}]}},title:"claims"}},evidence:{type:"array",description:"A list of evidence supporting the claimed identity. At least one piece of evidence is required.",items:{type:"object",required:["evidenceType","documentId","country"],properties:{evidenceType:{type:"string",description:"The type of evidence.",enum:["PASSPORT","DRIVERS_LICENSE"],example:"DRIVERS_LICENSE"},documentId:{type:"string",description:"The passport number or the license number.",example:"DS230475"},country:{type:"string",description:"The country that issued the document.",enum:["NZL"],example:"NZL"},expiry:{type:"string",description:"The passport expiry formatted as YYYY-MM-DD. Required for PASSPORT.",example:"2024-10-12"},version:{type:"string",description:"The driver's license version. Required for DRIVERS_LICENSE.",example:"978"}},title:"evidence"}}},title:"submit-kyc-statement-request"}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request parameters are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"Subject is not allowed to perform the action with the reason stated in the `errorCode`\n\n**FORBIDDEN**\nResource does not exist or there are no sufficient permissions to perform the action.\n\n**KYC_STATEMENTS_NOT_ALLOWED** \nPartner is not configured to submit KYC statements\n",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"put",path:"/api/accounts/{cardholderAccountId}/partner-kyc-statement",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{idempotencyKey:"21ede8ef0d230d0a6bf755e07d39la54",claims:[{claimType:"FULL_NAME",attributes:{givenName:"John",middleName:"Foo Bar",familyName:"Doe",honorific:"Mr"}}],evidence:[{evidenceType:"DRIVERS_LICENSE",documentId:"DS230475",country:"NZL",expiry:"2024-10-12",version:"978"}]},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Submit Partner KYC Statement",description:{content:"Submit a KYC statement about the cardholder.",type:"text/plain"},url:{path:["api","accounts",":cardholderAccountId","partner-kyc-statement"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the cardholder account.",type:"text/plain"},type:"any",value:"",key:"cardholderAccountId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"put api-method",info_path:"immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"KYC",permalink:"/api-reference/kyc"},next:{title:"Retrieve Partner KYC Statement",permalink:"/api-reference/retrieve-partner-kyc-statement"}},h={},b=[{value:"Submit Partner KYC Statement",id:"submit-partner-kyc-statement",level:2}],g={toc:b},x="wrapper";function T(e){let{components:t,...a}=e;return(0,r.kt)(x,(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"submit-partner-kyc-statement"},"Submit Partner KYC Statement"),(0,r.kt)("p",null,"Submit a KYC statement about the cardholder."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(m.Z,{className:"paramsItem",param:{name:"cardholderAccountId",in:"path",description:"ID of the cardholder account.",example:"65a7e8ef0d230d0a6bf755e07d39eb02",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(n.Z,{mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"idempotencyKey",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A client-supplied identifier that prevents duplicate creation.",example:"21ede8ef0d230d0a6bf755e07d39la54"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"claims"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"A list of claims about the cardholder's identity.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"claimType",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`FULL_NAME`, `DOB`, `ADDRESS`]",schema:{type:"string",description:"The type of claim.",enum:["FULL_NAME","DOB","ADDRESS"],example:"FULL_NAME"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"attributes"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"The attributes that support the claim.")),(0,r.kt)("li",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"FULL_NAME",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)(p.Z,{collapsible:!1,name:"givenName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Primary name.",example:"John"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"middleName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Other name(s).",example:"Foo Bar"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"familyName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Family name or surname.",example:"Doe"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"honorific",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Title used to address the cardholder.",example:"Mr"},mdxType:"SchemaItem"})),(0,r.kt)(d.Z,{label:"DOB",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)(p.Z,{collapsible:!1,name:"dateOfBirth",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The cardholder's date of birth formatted as YYYY-MM-DD",example:"1981-11-03"},mdxType:"SchemaItem"})),(0,r.kt)(d.Z,{label:"ADDRESS",value:"2-item-properties",mdxType:"TabItem"},(0,r.kt)(p.Z,{collapsible:!1,name:"addressType",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`RESIDENTIAL`]",schema:{type:"string",description:"The type of address.",enum:["RESIDENTIAL"],example:"RESIDENTIAL"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"unitNumber",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The unit number.",example:"1"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"streetNumber",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Street number. Generally a number but can also be alphanumeric.",example:"3A"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"streetName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Street name.",example:"Victoria"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"streetType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Street type. e.g. Road, St, Avenue, Circuit.",example:"Avenue"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"town",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The town/village/suburb/city.",example:"Auckland"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"suburb",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The suburb in the town/city. Only use this if you require a suburb AND a town/city, otherwise, just use the "town" parameter.',example:"Epsom"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The state. Use local abbreviations such as VIC (Victoria) or TX (Texas).",example:"AKL"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"region",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The county, province, or cantonment.",example:"AKL"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"postalCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Postal code.",example:"1050"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"country",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`NZL`]",schema:{type:"string",description:"Country code.",enum:["NZL"],example:"NZL"},mdxType:"SchemaItem"}))))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"evidence"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"A list of evidence supporting the claimed identity. At least one piece of evidence is required.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"evidenceType",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`PASSPORT`, `DRIVERS_LICENSE`]",schema:{type:"string",description:"The type of evidence.",enum:["PASSPORT","DRIVERS_LICENSE"],example:"DRIVERS_LICENSE"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"documentId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The passport number or the license number.",example:"DS230475"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"country",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`NZL`]",schema:{type:"string",description:"The country that issued the document.",enum:["NZL"],example:"NZL"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"expiry",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The passport expiry formatted as YYYY-MM-DD. Required for PASSPORT.",example:"2024-10-12"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"version",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The driver's license version. Required for DRIVERS_LICENSE.",example:"978"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"object")))))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request parameters are invalid")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:400},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bad Request"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BAD_REQUEST"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"Expected string, received number"}},mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "statusCode": 400,\n  "statusName": "Bad Request",\n  "errorCode": "BAD_REQUEST",\n  "errors": [\n    "Expected string, received number"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Subject is not allowed to perform the action with the reason stated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"errorCode")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FORBIDDEN"),"\nResource does not exist or there are no sufficient permissions to perform the action."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"KYC_STATEMENTS_NOT_ALLOWED"),"\nPartner is not configured to submit KYC statements")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);