"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[2614],{10247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>f});var i=a(87462),r=(a(67294),a(3905)),s=(a(8209),a(26389)),p=a(94891),o=a(75190),n=a(47507),c=a(24310),d=a(63303),m=(a(75035),a(85162));const l={id:"get-a-kyc-profile",title:"Get a KYC profile",description:"Get a KYC profile by account id if exists",sidebar_label:"Get a KYC profile",hide_title:!0,hide_table_of_contents:!0,api:{tags:["kyc"],description:"Get a KYC profile by account id if exists",parameters:[{name:"accountId",in:"path",description:"Id of the account.",example:"225d85e65495722bf6517ea0ba0d6f56",required:!0,schema:{type:"string"}}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"The KYC profile id.",example:"afd4772562be47f8a3467a11d06c96ba"},accountId:{type:"string",description:"The account id.",example:"225d85e65495722bf6517ea0ba0d6f56"},status:{type:"string",description:"The status of the KYC profile.",example:"completed"},region:{type:"string",description:"Region code.",example:"NZ"},createdAt:{type:"string",description:"Timestamp of KYC profile creation.",example:"2022-11-16T03:13:18.142Z"},createdBy:{type:"string",description:"The Immersve Resource Name (IRN) that created the resource.",example:"irn:314d85e65495722bf6517ea0ba0d4lp3:api-key:SLOs3U38hdhfEqwF1JKpTw"},modifiedAt:{type:"string",description:"Timestamp of this KYC profile modification.",example:"2022-11-16T03:13:18.142Z"},modifiedBy:{type:"string",description:"The Immersve Resource Name (IRN) that modified the resource.",example:"irn:314d85e65495722bf6517ea0ba0d4lp3:api-key:SLOs3U38hdhfEqwF1JKpTw"}},title:"get-kyc-profile-response"}}}},403:{description:"No Authorization to access resource or it does not exist.",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/accounts/{accountId}/kyc-profile",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Get a KYC profile",description:{content:"Get a KYC profile by account id if exists",type:"text/plain"},url:{path:["api","accounts",":accountId","kyc-profile"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Id of the account.",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},y=void 0,u={unversionedId:"api-reference/get-a-kyc-profile",id:"api-reference/get-a-kyc-profile",title:"Get a KYC profile",description:"Get a KYC profile by account id if exists",source:"@site/docs/api-reference/get-a-kyc-profile.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/get-a-kyc-profile",permalink:"/api-reference/get-a-kyc-profile",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-a-kyc-profile",title:"Get a KYC profile",description:"Get a KYC profile by account id if exists",sidebar_label:"Get a KYC profile",hide_title:!0,hide_table_of_contents:!0,api:{tags:["kyc"],description:"Get a KYC profile by account id if exists",parameters:[{name:"accountId",in:"path",description:"Id of the account.",example:"225d85e65495722bf6517ea0ba0d6f56",required:!0,schema:{type:"string"}}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"The KYC profile id.",example:"afd4772562be47f8a3467a11d06c96ba"},accountId:{type:"string",description:"The account id.",example:"225d85e65495722bf6517ea0ba0d6f56"},status:{type:"string",description:"The status of the KYC profile.",example:"completed"},region:{type:"string",description:"Region code.",example:"NZ"},createdAt:{type:"string",description:"Timestamp of KYC profile creation.",example:"2022-11-16T03:13:18.142Z"},createdBy:{type:"string",description:"The Immersve Resource Name (IRN) that created the resource.",example:"irn:314d85e65495722bf6517ea0ba0d4lp3:api-key:SLOs3U38hdhfEqwF1JKpTw"},modifiedAt:{type:"string",description:"Timestamp of this KYC profile modification.",example:"2022-11-16T03:13:18.142Z"},modifiedBy:{type:"string",description:"The Immersve Resource Name (IRN) that modified the resource.",example:"irn:314d85e65495722bf6517ea0ba0d4lp3:api-key:SLOs3U38hdhfEqwF1JKpTw"}},title:"get-kyc-profile-response"}}}},403:{description:"No Authorization to access resource or it does not exist.",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/accounts/{accountId}/kyc-profile",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Get a KYC profile",description:{content:"Get a KYC profile by account id if exists",type:"text/plain"},url:{path:["api","accounts",":accountId","kyc-profile"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Id of the account.",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Retrieve Partner KYC Statement",permalink:"/api-reference/retrieve-partner-kyc-statement"},next:{title:"Prerequisites",permalink:"/api-reference/prerequisites"}},h={},f=[{value:"Get a KYC profile",id:"get-a-kyc-profile",level:2}],b={toc:f};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-a-kyc-profile"},"Get a KYC profile"),(0,r.kt)("p",null,"Get a KYC profile by account id if exists"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"accountId",in:"path",description:"Id of the account.",example:"225d85e65495722bf6517ea0ba0d6f56",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null),(0,r.kt)("div",null,(0,r.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The KYC profile id.",example:"afd4772562be47f8a3467a11d06c96ba"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"accountId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The account id.",example:"225d85e65495722bf6517ea0ba0d6f56"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The status of the KYC profile.",example:"completed"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"region",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Region code.",example:"NZ"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of KYC profile creation.",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"createdBy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The Immersve Resource Name (IRN) that created the resource.",example:"irn:314d85e65495722bf6517ea0ba0d4lp3:api-key:SLOs3U38hdhfEqwF1JKpTw"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"modifiedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of this KYC profile modification.",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"modifiedBy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The Immersve Resource Name (IRN) that modified the resource.",example:"irn:314d85e65495722bf6517ea0ba0d4lp3:api-key:SLOs3U38hdhfEqwF1JKpTw"},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "id": "afd4772562be47f8a3467a11d06c96ba",\n  "accountId": "225d85e65495722bf6517ea0ba0d6f56",\n  "status": "completed",\n  "region": "NZ",\n  "createdAt": "2022-11-16T03:13:18.142Z",\n  "createdBy": "irn:314d85e65495722bf6517ea0ba0d4lp3:api-key:SLOs3U38hdhfEqwF1JKpTw",\n  "modifiedAt": "2022-11-16T03:13:18.142Z",\n  "modifiedBy": "irn:314d85e65495722bf6517ea0ba0d4lp3:api-key:SLOs3U38hdhfEqwF1JKpTw"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"No Authorization to access resource or it does not exist.")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);