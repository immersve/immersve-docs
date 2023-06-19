"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[3821],{32250:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>l,metadata:()=>y,toc:()=>f});var t=r(87462),i=(r(67294),r(3905)),s=(r(8209),r(26389)),n=r(94891),o=r(75190),c=r(47507),p=r(24310),d=r(63303),m=(r(75035),r(85162));const l={id:"get-secure-card-information",title:"Get secure card information",description:"Get secure card information",sidebar_label:"Get secure card information",hide_title:!0,hide_table_of_contents:!0,api:{tags:["cards-custodial"],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],parameters:[{name:"cardId",in:"path",description:"ID of card",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{cvv2:{type:"string",description:"Card CVV",example:"442"},pan:{type:"string",description:"Full card PAN",example:"1234123412345678"},expirationDate:{type:"string",description:"Card expiration date in the format YYYYMM",example:"202501"}},title:"get-card-secure-custodial-response"}}}},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{errorCode:{description:"The error code",type:"string"},errorMessage:{description:"The error message",type:"string"},errorMap:{description:"An array of key-value pairs describing field errors",type:"array",items:{type:"object"}}},example:{success:!1,errorCode:"INVALID_BODY",errorMessage:"Invalid body",errorMap:{firstName:"Required"}},title:"error-response-custodial"}}}}},description:"Get secure card information",method:"get",path:"/api/custodial/cards/{cardId}/secure",servers:[{url:"https://api-sec.immersve.com/",description:"Secure server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get secure card information",description:{type:"text/plain"},url:{path:["api","custodial","cards",":cardId","secure"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of card",type:"text/plain"},type:"any",value:"",key:"cardId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},u=void 0,y={unversionedId:"api-reference/get-secure-card-information",id:"api-reference/get-secure-card-information",title:"Get secure card information",description:"Get secure card information",source:"@site/docs/api-reference/get-secure-card-information.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/get-secure-card-information",permalink:"/api-reference/get-secure-card-information",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-secure-card-information",title:"Get secure card information",description:"Get secure card information",sidebar_label:"Get secure card information",hide_title:!0,hide_table_of_contents:!0,api:{tags:["cards-custodial"],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],parameters:[{name:"cardId",in:"path",description:"ID of card",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{cvv2:{type:"string",description:"Card CVV",example:"442"},pan:{type:"string",description:"Full card PAN",example:"1234123412345678"},expirationDate:{type:"string",description:"Card expiration date in the format YYYYMM",example:"202501"}},title:"get-card-secure-custodial-response"}}}},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{errorCode:{description:"The error code",type:"string"},errorMessage:{description:"The error message",type:"string"},errorMap:{description:"An array of key-value pairs describing field errors",type:"array",items:{type:"object"}}},example:{success:!1,errorCode:"INVALID_BODY",errorMessage:"Invalid body",errorMap:{firstName:"Required"}},title:"error-response-custodial"}}}}},description:"Get secure card information",method:"get",path:"/api/custodial/cards/{cardId}/secure",servers:[{url:"https://api-sec.immersve.com/",description:"Secure server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get secure card information",description:{type:"text/plain"},url:{path:["api","custodial","cards",":cardId","secure"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of card",type:"text/plain"},type:"any",value:"",key:"cardId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get card information",permalink:"/api-reference/get-card-information"},next:{title:"Set card pin",permalink:"/api-reference/set-card-pin"}},h={},f=[{value:"Get secure card information",id:"get-secure-card-information",level:2}],g={toc:f};function v(e){let{components:a,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},g,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-secure-card-information"},"Get secure card information"),(0,i.kt)("p",null,"Get secure card information"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"cardId",in:"path",description:"ID of card",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"cvv2",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Card CVV",example:"442"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"pan",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Full card PAN",example:"1234123412345678"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"expirationDate",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Card expiration date in the format YYYYMM",example:"202501"},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "cvv2": "442",\n  "pan": "1234123412345678",\n  "expirationDate": "202501"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Error")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The error code",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"errorMessage",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The error message",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"errorMap",required:!1,schemaName:"object[]",qualifierMessage:void 0,schema:{description:"An array of key-value pairs describing field errors",type:"array",items:{type:"object"}},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "success": false,\n  "errorCode": "INVALID_BODY",\n  "errorMessage": "Invalid body",\n  "errorMap": {\n    "firstName": "Required"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);