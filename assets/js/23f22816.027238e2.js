"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[5612],{75435:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>l,default:()=>f,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var n=a(87462),r=(a(67294),a(3905)),i=(a(8209),a(26389)),s=a(94891),o=a(75190),c=a(47507),m=a(24310),p=a(63303),d=(a(75035),a(85162));const u={id:"authorize-a-transaction",title:"Authorize a transaction",description:"This endpoint can be used to test authorizing a transaction on a simulated card network",sidebar_label:"Authorize a transaction",hide_title:!0,hide_table_of_contents:!0,api:{tags:["simulator"],description:"This endpoint can be used to test authorizing a transaction on a simulated card network",parameters:[{name:"useMinorUnits",in:"query",description:"When enabled, transactionAmount and fxAmount.amount in request body must be in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}}],requestBody:{content:{"application/json":{schema:{type:"object",required:["transactionType","transactionAmount","cardPan","cardExpiry","cardCvv"],properties:{transactionType:{type:"string",description:"Transaction type",enum:["purchase"]},transactionAmount:{type:"string",pattern:"^[0-9]+(.[0-9]+)?$",description:"Transaction amount in USD"},cardPan:{type:"string",pattern:"^[0-9]{16}$",description:"Card number"},cardExpiry:{type:"string",pattern:"^[0-9]{6}$",description:"Card expiry in YYYYMM format"},cardCvv:{type:"string",pattern:"^[0-9]{3}$",description:"Card CVV"},fxAmount:{type:"object",description:"fxAmount can be specified to process the transaction in a currency other than USD",required:["amount","currencyCode"],properties:{amount:{type:"string",description:"Transaction amount in a different currency. This can be generated by converting the `transactionAmount`"},currencyCode:{type:"string",description:"ISO 4217 currency code"}},title:"fxAmount"}},title:"authorize-request"}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object",properties:{requestMsg:{type:"string",description:"XML formatted ISO 8583 message sent to the simulated card scheme"},responseMsg:{type:"string",description:"XML formatted ISO 8583 message returned from the simulated card scheme"},transactionId:{type:"number",description:"ID of the transaction"}},title:"simulator-response"}}}}},method:"post",path:"/api/simulator/authorize",servers:[{url:"https://test.immersve.com/"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{transactionType:"purchase",transactionAmount:"string",cardPan:"string",cardExpiry:"string",cardCvv:"string",fxAmount:{amount:"string",currencyCode:"string"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Authorize a transaction",description:{content:"This endpoint can be used to test authorizing a transaction on a simulated card network",type:"text/plain"},url:{path:["api","simulator","authorize"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"When enabled, transactionAmount and fxAmount.amount in request body must be in minor units, an integer in the smallest denomination for the given currency.",type:"text/plain"},key:"useMinorUnits",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},l=void 0,h={unversionedId:"api-reference/authorize-a-transaction",id:"api-reference/authorize-a-transaction",title:"Authorize a transaction",description:"This endpoint can be used to test authorizing a transaction on a simulated card network",source:"@site/docs/api-reference/authorize-a-transaction.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/authorize-a-transaction",permalink:"/api-reference/authorize-a-transaction",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"authorize-a-transaction",title:"Authorize a transaction",description:"This endpoint can be used to test authorizing a transaction on a simulated card network",sidebar_label:"Authorize a transaction",hide_title:!0,hide_table_of_contents:!0,api:{tags:["simulator"],description:"This endpoint can be used to test authorizing a transaction on a simulated card network",parameters:[{name:"useMinorUnits",in:"query",description:"When enabled, transactionAmount and fxAmount.amount in request body must be in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}}],requestBody:{content:{"application/json":{schema:{type:"object",required:["transactionType","transactionAmount","cardPan","cardExpiry","cardCvv"],properties:{transactionType:{type:"string",description:"Transaction type",enum:["purchase"]},transactionAmount:{type:"string",pattern:"^[0-9]+(\\.[0-9]+)?$",description:"Transaction amount in USD"},cardPan:{type:"string",pattern:"^[0-9]{16}$",description:"Card number"},cardExpiry:{type:"string",pattern:"^[0-9]{6}$",description:"Card expiry in YYYYMM format"},cardCvv:{type:"string",pattern:"^[0-9]{3}$",description:"Card CVV"},fxAmount:{type:"object",description:"fxAmount can be specified to process the transaction in a currency other than USD",required:["amount","currencyCode"],properties:{amount:{type:"string",description:"Transaction amount in a different currency. This can be generated by converting the `transactionAmount`"},currencyCode:{type:"string",description:"ISO 4217 currency code"}},title:"fxAmount"}},title:"authorize-request"}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object",properties:{requestMsg:{type:"string",description:"XML formatted ISO 8583 message sent to the simulated card scheme"},responseMsg:{type:"string",description:"XML formatted ISO 8583 message returned from the simulated card scheme"},transactionId:{type:"number",description:"ID of the transaction"}},title:"simulator-response"}}}}},method:"post",path:"/api/simulator/authorize",servers:[{url:"https://test.immersve.com/"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{transactionType:"purchase",transactionAmount:"string",cardPan:"string",cardExpiry:"string",cardCvv:"string",fxAmount:{amount:"string",currencyCode:"string"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Authorize a transaction",description:{content:"This endpoint can be used to test authorizing a transaction on a simulated card network",type:"text/plain"},url:{path:["api","simulator","authorize"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"When enabled, transactionAmount and fxAmount.amount in request body must be in minor units, an integer in the smallest denomination for the given currency.",type:"text/plain"},key:"useMinorUnits",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Simulator",permalink:"/api-reference/simulator"},next:{title:"Clear a transaction",permalink:"/api-reference/clear-a-transaction"}},y={},g=[{value:"Authorize a transaction",id:"authorize-a-transaction",level:2}],b={toc:g};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"authorize-a-transaction"},"Authorize a transaction"),(0,r.kt)("p",null,"This endpoint can be used to test authorizing a transaction on a simulated card network"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"useMinorUnits",in:"query",description:"When enabled, transactionAmount and fxAmount.amount in request body must be in minor units, an integer in the smallest denomination for the given currency.",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,r.kt)(s.Z,{mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"transactionType",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`purchase`]",schema:{type:"string",description:"Transaction type",enum:["purchase"]},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"transactionAmount",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[0-9]+(\\.[0-9]+)?$`",schema:{type:"string",pattern:"^[0-9]+(\\.[0-9]+)?$",description:"Transaction amount in USD"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"cardPan",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[0-9]{16}$`",schema:{type:"string",pattern:"^[0-9]{16}$",description:"Card number"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"cardExpiry",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[0-9]{6}$`",schema:{type:"string",pattern:"^[0-9]{6}$",description:"Card expiry in YYYYMM format"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"cardCvv",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[0-9]{3}$`",schema:{type:"string",pattern:"^[0-9]{3}$",description:"Card CVV"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"fxAmount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"fxAmount can be specified to process the transaction in a currency other than USD")),(0,r.kt)(m.Z,{collapsible:!1,name:"amount",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Transaction amount in a different currency. This can be generated by converting the `transactionAmount`"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"currencyCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ISO 4217 currency code"},mdxType:"SchemaItem"})))))))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null),(0,r.kt)("div",null,(0,r.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"requestMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"XML formatted ISO 8583 message sent to the simulated card scheme"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"responseMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"XML formatted ISO 8583 message returned from the simulated card scheme"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"transactionId",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"ID of the transaction"},mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "requestMsg": "string",\n  "responseMsg": "string",\n  "transactionId": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);