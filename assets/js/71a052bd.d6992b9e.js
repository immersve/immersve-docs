"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[86],{46520:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var r=a(87462),n=(a(67294),a(3905)),s=(a(8209),a(26389)),i=a(94891),o=(a(75190),a(47507)),c=a(24310),p=a(63303),m=(a(75035),a(85162));const d={id:"reverse-a-transaction",title:"Reverse a transaction",description:"This endpoint can be used to test reversing a transaction on a simulated card network",sidebar_label:"Reverse a transaction",hide_title:!0,hide_table_of_contents:!0,api:{tags:["simulator"],description:"This endpoint can be used to test reversing a transaction on a simulated card network",requestBody:{content:{"application/json":{schema:{type:"object",required:["transactionType","reversalAmount"],properties:{transactionType:{type:"string",description:"Transaction type",enum:["purchase"]},reversalAmount:{type:"string",pattern:"^[0-9]+(.[0-9]+)?$",description:"Transaction amount in USD"},fxReversalAmount:{type:"object",description:"fxAmount can be specified to process the transaction in a currency other than USD",required:["amount","currencyCode"],properties:{amount:{type:"string",description:"Transaction amount in a different currency. This can be generated by converting the `transactionAmount`"},currencyCode:{type:"string",description:"ISO 4217 currency code"}},title:"fxAmount"}},oneOf:[{properties:{authorizationRequestMsg:{type:"string",description:"requestMsg returned by the [Authorize a transaction](/api-reference/authorize-a-transaction) endpoint"}},required:["authorizationRequestMsg"],title:"ReverseAuthorization"},{properties:{clearingRequestMsg:{type:"string",description:"requestMsg returned by the [Clear a transaction](/api-reference/clear-a-transaction) endpoint"}},required:["clearingRequestMsg"],title:"ReverseClearing"}],title:"reverse-request"}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object",properties:{requestMsg:{type:"string",description:"XML formatted ISO 8583 message sent to the simulated card scheme"},responseMsg:{type:"string",description:"XML formatted ISO 8583 message returned from the simulated card scheme"},transactionId:{type:"number",description:"ID of the transaction"}},title:"simulator-response"}}}}},method:"post",path:"/api/simulator/reverse",servers:[{url:"https://test.immersve.com/"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{transactionType:"purchase",reversalAmount:"string",fxReversalAmount:{amount:"string",currencyCode:"string"},authorizationRequestMsg:"string"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Reverse a transaction",description:{content:"This endpoint can be used to test reversing a transaction on a simulated card network",type:"text/plain"},url:{path:["api","simulator","reverse"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},l=void 0,u={unversionedId:"api-reference/reverse-a-transaction",id:"api-reference/reverse-a-transaction",title:"Reverse a transaction",description:"This endpoint can be used to test reversing a transaction on a simulated card network",source:"@site/docs/api-reference/reverse-a-transaction.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/reverse-a-transaction",permalink:"/api-reference/reverse-a-transaction",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"reverse-a-transaction",title:"Reverse a transaction",description:"This endpoint can be used to test reversing a transaction on a simulated card network",sidebar_label:"Reverse a transaction",hide_title:!0,hide_table_of_contents:!0,api:{tags:["simulator"],description:"This endpoint can be used to test reversing a transaction on a simulated card network",requestBody:{content:{"application/json":{schema:{type:"object",required:["transactionType","reversalAmount"],properties:{transactionType:{type:"string",description:"Transaction type",enum:["purchase"]},reversalAmount:{type:"string",pattern:"^[0-9]+(\\.[0-9]+)?$",description:"Transaction amount in USD"},fxReversalAmount:{type:"object",description:"fxAmount can be specified to process the transaction in a currency other than USD",required:["amount","currencyCode"],properties:{amount:{type:"string",description:"Transaction amount in a different currency. This can be generated by converting the `transactionAmount`"},currencyCode:{type:"string",description:"ISO 4217 currency code"}},title:"fxAmount"}},oneOf:[{properties:{authorizationRequestMsg:{type:"string",description:"requestMsg returned by the [Authorize a transaction](/api-reference/authorize-a-transaction) endpoint"}},required:["authorizationRequestMsg"],title:"ReverseAuthorization"},{properties:{clearingRequestMsg:{type:"string",description:"requestMsg returned by the [Clear a transaction](/api-reference/clear-a-transaction) endpoint"}},required:["clearingRequestMsg"],title:"ReverseClearing"}],title:"reverse-request"}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object",properties:{requestMsg:{type:"string",description:"XML formatted ISO 8583 message sent to the simulated card scheme"},responseMsg:{type:"string",description:"XML formatted ISO 8583 message returned from the simulated card scheme"},transactionId:{type:"number",description:"ID of the transaction"}},title:"simulator-response"}}}}},method:"post",path:"/api/simulator/reverse",servers:[{url:"https://test.immersve.com/"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{transactionType:"purchase",reversalAmount:"string",fxReversalAmount:{amount:"string",currencyCode:"string"},authorizationRequestMsg:"string"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Reverse a transaction",description:{content:"This endpoint can be used to test reversing a transaction on a simulated card network",type:"text/plain"},url:{path:["api","simulator","reverse"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Clear a transaction",permalink:"/api-reference/clear-a-transaction"},next:{title:"Immersve Payment Protocol",permalink:"/contracts/payment-protocol"}},h={},y=[{value:"Reverse a transaction",id:"reverse-a-transaction",level:2}],g={toc:y};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"reverse-a-transaction"},"Reverse a transaction"),(0,n.kt)("p",null,"This endpoint can be used to test reversing a transaction on a simulated card network"),(0,n.kt)(i.Z,{mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("span",{className:"badge badge--info"},"oneOf"),(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"ReverseAuthorization",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)(c.Z,{collapsible:!1,name:"authorizationRequestMsg",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"requestMsg returned by the [Authorize a transaction](/api-reference/authorize-a-transaction) endpoint"},mdxType:"SchemaItem"})),(0,n.kt)(m.Z,{label:"ReverseClearing",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)(c.Z,{collapsible:!1,name:"clearingRequestMsg",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"requestMsg returned by the [Clear a transaction](/api-reference/clear-a-transaction) endpoint"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{collapsible:!1,name:"transactionType",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`purchase`]",schema:{type:"string",description:"Transaction type",enum:["purchase"]},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"reversalAmount",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[0-9]+(\\.[0-9]+)?$`",schema:{type:"string",pattern:"^[0-9]+(\\.[0-9]+)?$",description:"Transaction amount in USD"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"fxReversalAmount"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"fxAmount can be specified to process the transaction in a currency other than USD")),(0,n.kt)(c.Z,{collapsible:!1,name:"amount",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Transaction amount in a different currency. This can be generated by converting the `transactionAmount`"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"currencyCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ISO 4217 currency code"},mdxType:"SchemaItem"})))))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null),(0,n.kt)("div",null,(0,n.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"requestMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"XML formatted ISO 8583 message sent to the simulated card scheme"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"responseMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"XML formatted ISO 8583 message returned from the simulated card scheme"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"transactionId",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"ID of the transaction"},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "requestMsg": "string",\n  "responseMsg": "string",\n  "transactionId": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);