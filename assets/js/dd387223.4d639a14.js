"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[4635],{32329:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>x,frontMatter:()=>l,metadata:()=>h,toc:()=>b});var s=a(25773),i=(a(27378),a(35318)),r=a(7743),o=a(30712),n=a(76377),c=a(30980),d=a(68388),p=a(34806),m=(a(23067),a(39798));const l={id:"update-contact-details",title:"Update contact details",description:"This endpoint sets or updates the contact details (email and phone) for the account. The contact details are used to send notifications to the cardholder, such as for 3DSecure and one time passwords.",sidebar_label:"Update contact details",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contact-details"],description:"This endpoint sets or updates the contact details (email and phone) for the account. The contact details are used to send notifications to the cardholder, such as for 3DSecure and one time passwords.\n",parameters:[{name:"accountId",in:"path",description:"AccountId for the contact details",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{email:{type:"object",required:["emailAddress"],properties:{emailAddress:{type:"string",description:"Email address",example:"joe@joecardholder.com"}}},phone:{type:"object",required:["phoneNumber"],properties:{phoneNumber:{type:"string",description:"Phone number",example:"+1234567890"}}}},title:"update-contact-details-request"}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object",properties:{email:{allOf:[{type:"object",properties:{accountId:{type:"string",example:"9b7552cf9abab0f2efed72df6b3ce4bc"},createdAt:{type:"string",format:"date-time"},modifiedAt:{type:"string",format:"date-time"}},title:"contact-channel"},{type:"object",required:["accountId","createdAt","modifiedAt","emailAddress"],properties:{emailAddress:{type:"string",example:"joe@joecardholder.com"}}}],title:"contact-channel-email"},phone:{allOf:[{type:"object",properties:{accountId:{type:"string",example:"9b7552cf9abab0f2efed72df6b3ce4bc"},createdAt:{type:"string",format:"date-time"},modifiedAt:{type:"string",format:"date-time"}},title:"contact-channel"},{type:"object",required:["accountId","createdAt","modifiedAt","phoneNumber"],properties:{phoneNumber:{type:"string",example:"+1234567890"}}}],title:"contact-channel-phone"}},title:"get-contact-details-response"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"API caller is not allowed to perform the action",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"patch",path:"/api/accounts/{accountId}/contact-details",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{email:{emailAddress:"joe@joecardholder.com"},phone:{phoneNumber:"+1234567890"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Update contact details",description:{content:"This endpoint sets or updates the contact details (email and phone) for the account. The contact details are used to send notifications to the cardholder, such as for 3DSecure and one time passwords.\n",type:"text/plain"},url:{path:["api","accounts",":accountId","contact-details"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) AccountId for the contact details",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},u=void 0,h={unversionedId:"api-reference/update-contact-details",id:"api-reference/update-contact-details",title:"Update contact details",description:"This endpoint sets or updates the contact details (email and phone) for the account. The contact details are used to send notifications to the cardholder, such as for 3DSecure and one time passwords.",source:"@site/docs/api-reference/update-contact-details.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/update-contact-details",permalink:"/api-reference/update-contact-details",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-contact-details",title:"Update contact details",description:"This endpoint sets or updates the contact details (email and phone) for the account. The contact details are used to send notifications to the cardholder, such as for 3DSecure and one time passwords.",sidebar_label:"Update contact details",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contact-details"],description:"This endpoint sets or updates the contact details (email and phone) for the account. The contact details are used to send notifications to the cardholder, such as for 3DSecure and one time passwords.\n",parameters:[{name:"accountId",in:"path",description:"AccountId for the contact details",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{email:{type:"object",required:["emailAddress"],properties:{emailAddress:{type:"string",description:"Email address",example:"joe@joecardholder.com"}}},phone:{type:"object",required:["phoneNumber"],properties:{phoneNumber:{type:"string",description:"Phone number",example:"+1234567890"}}}},title:"update-contact-details-request"}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object",properties:{email:{allOf:[{type:"object",properties:{accountId:{type:"string",example:"9b7552cf9abab0f2efed72df6b3ce4bc"},createdAt:{type:"string",format:"date-time"},modifiedAt:{type:"string",format:"date-time"}},title:"contact-channel"},{type:"object",required:["accountId","createdAt","modifiedAt","emailAddress"],properties:{emailAddress:{type:"string",example:"joe@joecardholder.com"}}}],title:"contact-channel-email"},phone:{allOf:[{type:"object",properties:{accountId:{type:"string",example:"9b7552cf9abab0f2efed72df6b3ce4bc"},createdAt:{type:"string",format:"date-time"},modifiedAt:{type:"string",format:"date-time"}},title:"contact-channel"},{type:"object",required:["accountId","createdAt","modifiedAt","phoneNumber"],properties:{phoneNumber:{type:"string",example:"+1234567890"}}}],title:"contact-channel-phone"}},title:"get-contact-details-response"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"API caller is not allowed to perform the action",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"patch",path:"/api/accounts/{accountId}/contact-details",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{email:{emailAddress:"joe@joecardholder.com"},phone:{phoneNumber:"+1234567890"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Update contact details",description:{content:"This endpoint sets or updates the contact details (email and phone) for the account. The contact details are used to send notifications to the cardholder, such as for 3DSecure and one time passwords.\n",type:"text/plain"},url:{path:["api","accounts",":accountId","contact-details"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) AccountId for the contact details",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get contact details",permalink:"/api-reference/get-contact-details"},next:{title:"Currency",permalink:"/api-reference/currency"}},y={},b=[{value:"Update contact details",id:"update-contact-details",level:2}],f={toc:b},g="wrapper";function x(e){let{components:t,...a}=e;return(0,i.kt)(g,(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"update-contact-details"},"Update contact details"),(0,i.kt)("p",null,"This endpoint sets or updates the contact details (email and phone) for the account. The contact details are used to send notifications to the cardholder, such as for 3DSecure and one time passwords."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"accountId",in:"path",description:"AccountId for the contact details",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"email"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"emailAddress",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Email address",example:"joe@joecardholder.com"},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"phone"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"phoneNumber",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Phone number",example:"+1234567890"},mdxType:"SchemaItem"})))))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"email"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9b7552cf9abab0f2efed72df6b3ce4bc"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"modifiedAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"emailAddress",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"joe@joecardholder.com"},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"phone"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9b7552cf9abab0f2efed72df6b3ce4bc"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"modifiedAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"phoneNumber",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"+1234567890"},mdxType:"SchemaItem"}))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "email": {\n    "accountId": "9b7552cf9abab0f2efed72df6b3ce4bc",\n    "createdAt": "2024-02-04T22:39:43.849Z",\n    "modifiedAt": "2024-02-04T22:39:43.849Z",\n    "emailAddress": "joe@joecardholder.com"\n  },\n  "phone": {\n    "accountId": "9b7552cf9abab0f2efed72df6b3ce4bc",\n    "createdAt": "2024-02-04T22:39:43.849Z",\n    "modifiedAt": "2024-02-04T22:39:43.849Z",\n    "phoneNumber": "+1234567890"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request fields are invalid")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:400},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bad Request"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BAD_REQUEST"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"Expected string, received number"}},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "statusCode": 400,\n  "statusName": "Bad Request",\n  "errorCode": "BAD_REQUEST",\n  "errors": [\n    "Expected string, received number"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"API caller is not allowed to perform the action")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);