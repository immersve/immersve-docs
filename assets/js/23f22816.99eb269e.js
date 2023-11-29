"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[5612],{75435:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var r=a(87462),i=(a(67294),a(3905)),n=(a(8209),a(26389)),s=a(94891),o=(a(75190),a(47507)),m=a(24310),c=a(63303),p=(a(75035),a(85162));const d={id:"authorize-a-transaction",title:"Authorize a transaction",description:"This endpoint can be used to test authorizing a transaction on a simulated card network",sidebar_label:"Authorize a transaction",hide_title:!0,hide_table_of_contents:!0,api:{tags:["simulator"],description:"This endpoint can be used to test authorizing a transaction on a simulated card network",requestBody:{content:{"application/json":{schema:{type:"object",required:["transactionType","transactionAmount","cardPan","cardExpiry","cardCvv"],properties:{transactionType:{type:"string",description:"Transaction type",enum:["purchase"]},transactionAmount:{type:"string",description:"Transaction amount as an integer in the smallest denomination of USD."},cardPan:{type:"string",pattern:"^[0-9]{16}$",description:"Card number"},cardExpiry:{type:"string",pattern:"^[0-9]{6}$",description:"Card expiry in YYYYMM format"},cardCvv:{type:"string",pattern:"^[0-9]{3}$",description:"Card CVV"},fxAmount:{type:"object",description:"fxAmount can be specified to process the transaction in a currency other than USD",required:["amount","currencyCode"],properties:{amount:{type:"string",description:"Transaction amount as an integer in the smallest denomination for the given currency. Convert the `transactionAmount` from USD to the desired currency."},currencyCode:{type:"string",description:"ISO 4217 currency code"}},title:"fxAmount"}},title:"authorize-request"}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object",properties:{requestMsg:{type:"string",description:"XML formatted ISO 8583 message sent to the simulated card scheme"},responseMsg:{type:"string",description:"XML formatted ISO 8583 message returned from the simulated card scheme"},transactionId:{type:"number",description:"ID of the transaction"}},title:"simulator-response"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"No Authorization to access resource.",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/api/simulator/authorize",servers:[{url:"https://test.immersve.com/"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{transactionType:"purchase",transactionAmount:"string",cardPan:"string",cardExpiry:"string",cardCvv:"string",fxAmount:{amount:"string",currencyCode:"string"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Authorize a transaction",description:{content:"This endpoint can be used to test authorizing a transaction on a simulated card network",type:"text/plain"},url:{path:["api","simulator","authorize"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},l=void 0,u={unversionedId:"api-reference/authorize-a-transaction",id:"api-reference/authorize-a-transaction",title:"Authorize a transaction",description:"This endpoint can be used to test authorizing a transaction on a simulated card network",source:"@site/docs/api-reference/authorize-a-transaction.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/authorize-a-transaction",permalink:"/api-reference/authorize-a-transaction",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"authorize-a-transaction",title:"Authorize a transaction",description:"This endpoint can be used to test authorizing a transaction on a simulated card network",sidebar_label:"Authorize a transaction",hide_title:!0,hide_table_of_contents:!0,api:{tags:["simulator"],description:"This endpoint can be used to test authorizing a transaction on a simulated card network",requestBody:{content:{"application/json":{schema:{type:"object",required:["transactionType","transactionAmount","cardPan","cardExpiry","cardCvv"],properties:{transactionType:{type:"string",description:"Transaction type",enum:["purchase"]},transactionAmount:{type:"string",description:"Transaction amount as an integer in the smallest denomination of USD."},cardPan:{type:"string",pattern:"^[0-9]{16}$",description:"Card number"},cardExpiry:{type:"string",pattern:"^[0-9]{6}$",description:"Card expiry in YYYYMM format"},cardCvv:{type:"string",pattern:"^[0-9]{3}$",description:"Card CVV"},fxAmount:{type:"object",description:"fxAmount can be specified to process the transaction in a currency other than USD",required:["amount","currencyCode"],properties:{amount:{type:"string",description:"Transaction amount as an integer in the smallest denomination for the given currency. Convert the `transactionAmount` from USD to the desired currency."},currencyCode:{type:"string",description:"ISO 4217 currency code"}},title:"fxAmount"}},title:"authorize-request"}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object",properties:{requestMsg:{type:"string",description:"XML formatted ISO 8583 message sent to the simulated card scheme"},responseMsg:{type:"string",description:"XML formatted ISO 8583 message returned from the simulated card scheme"},transactionId:{type:"number",description:"ID of the transaction"}},title:"simulator-response"}}}},400:{description:"Request fields are invalid",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:400},statusName:{type:"string",example:"Bad Request"},errorCode:{type:"string",example:"BAD_REQUEST"},errors:{type:"array",items:{type:"string",example:"Expected string, received number"}}},required:["statusCode","statusName","errorCode"],title:"api-error-400"}}}},403:{description:"No Authorization to access resource.",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"post",path:"/api/simulator/authorize",servers:[{url:"https://test.immersve.com/"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{transactionType:"purchase",transactionAmount:"string",cardPan:"string",cardExpiry:"string",cardCvv:"string",fxAmount:{amount:"string",currencyCode:"string"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Authorize a transaction",description:{content:"This endpoint can be used to test authorizing a transaction on a simulated card network",type:"text/plain"},url:{path:["api","simulator","authorize"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Simulator",permalink:"/api-reference/simulator"},next:{title:"Clear a transaction",permalink:"/api-reference/clear-a-transaction"}},y={},h=[{value:"Authorize a transaction",id:"authorize-a-transaction",level:2}],g={toc:h};function x(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"authorize-a-transaction"},"Authorize a transaction"),(0,i.kt)("p",null,"This endpoint can be used to test authorizing a transaction on a simulated card network"),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"transactionType",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`purchase`]",schema:{type:"string",description:"Transaction type",enum:["purchase"]},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"transactionAmount",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Transaction amount as an integer in the smallest denomination of USD."},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"cardPan",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[0-9]{16}$`",schema:{type:"string",pattern:"^[0-9]{16}$",description:"Card number"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"cardExpiry",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[0-9]{6}$`",schema:{type:"string",pattern:"^[0-9]{6}$",description:"Card expiry in YYYYMM format"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"cardCvv",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[0-9]{3}$`",schema:{type:"string",pattern:"^[0-9]{3}$",description:"Card CVV"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"fxAmount"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"fxAmount can be specified to process the transaction in a currency other than USD")),(0,i.kt)(m.Z,{collapsible:!1,name:"amount",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Transaction amount as an integer in the smallest denomination for the given currency. Convert the `transactionAmount` from USD to the desired currency."},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"currencyCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ISO 4217 currency code"},mdxType:"SchemaItem"})))))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"requestMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"XML formatted ISO 8583 message sent to the simulated card scheme"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"responseMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"XML formatted ISO 8583 message returned from the simulated card scheme"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"transactionId",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"ID of the transaction"},mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "requestMsg": "string",\n  "responseMsg": "string",\n  "transactionId": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request fields are invalid")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:400},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bad Request"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BAD_REQUEST"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"Expected string, received number"}},mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "statusCode": 400,\n  "statusName": "Bad Request",\n  "errorCode": "BAD_REQUEST",\n  "errors": [\n    "Expected string, received number"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"No Authorization to access resource.")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);