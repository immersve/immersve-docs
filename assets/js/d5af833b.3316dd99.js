"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[5515],{484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>m,metadata:()=>d,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),i=a(26389),c=a(94891),o=(a(75190),a(47507),a(24310)),s=(a(63303),a(75035),a(85162));const m={id:"transaction",title:"Transaction",description:"This custodial integrator webhook endpoint is called when a clearing or refund request is made.",sidebar_label:"Transaction",hide_title:!0,hide_table_of_contents:!0,api:{tags:["immersve-webhooks"],security:[{apiKeyHeaderWebhook:[]}],description:"This custodial integrator webhook endpoint is called when a clearing or refund request is made. \n\nFor more information on setting up webhooks \nsee the [webhooks guide](/guides/webhooks)\n",requestBody:{content:{"application/json":{schema:{type:"object",required:["cardId","transactionId","transactionType","accountId","merchantId","merchantName","merchantCity","merchantCountry","merchantCurrency","merchantAmount","billingCurrency","billingAmount","settlementCurrency","settlementAmount","mcc","exchangeRate","channel","approvedAt"],properties:{cardId:{type:"string",example:"h458c8f49c8c8ca651615a33371e3da7",description:"The card ID"},transactionId:{type:"string",example:0xe8d4a53725},authorizationId:{type:"string",nullable:!0,example:100000001e4},transactionType:{type:"string",enum:[1200,1400],description:"The transaction type:\n\n1200 - clearing \n\n1400 - refund\n",example:1200},accountId:{type:"string",example:"8ce8c8f49c8c8ca651615a33371e3da7"},merchantId:{type:"string",description:"Card acceptor ID",example:100000001},merchantName:{type:"string",description:"Card acceptor name",example:"Amazon"},merchantCity:{type:"string",description:"Card acceptor city",example:"New York"},merchantCountry:{type:"string",description:"Card acceptor country",example:"US"},merchantCurrency:{type:"string",description:"Card acceptor currency",example:"USD"},merchantAmount:{type:"number",description:"Card acceptor amount in minor units of the merchant currency",example:100},billingCurrency:{type:"string",description:"Billing currency",example:"USDC"},billingAmount:{type:"number",description:"Billing amount in minor units of the billing currency",example:100},settlementCurrency:{type:"string",example:"USDC"},settlementAmount:{type:"number",description:"Settlement amount in minor units of the settlement currency",example:1e4},mcc:{type:"string",description:"Merchant category code",example:5411},exchangeRate:{type:"string",description:"Exchange rate between merchant and settlement currencies",example:1},channel:{type:"string",description:"Channel",example:"ECOMMERCE"},approvedAt:{type:"string",format:"date-time",description:"Transaction approval date",example:"2021-01-01T00:00:00.000Z"},creationAt:{type:"string",format:"date-time",description:"Transaction creation date",example:"2021-01-01T00:00:00.000Z"}},title:"transaction-custodial-request"}}},required:!0},responses:{200:{description:"Transaction request accepted"}},method:"post",path:"/transactions",servers:[{url:"https://<partnerBaseUrl>/transactions"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{cardId:"h458c8f49c8c8ca651615a33371e3da7",transactionId:0xe8d4a53725,authorizationId:100000001e4,transactionType:1200,accountId:"8ce8c8f49c8c8ca651615a33371e3da7",merchantId:100000001,merchantName:"Amazon",merchantCity:"New York",merchantCountry:"US",merchantCurrency:"USD",merchantAmount:100,billingCurrency:"USDC",billingAmount:100,settlementCurrency:"USDC",settlementAmount:1e4,mcc:5411,exchangeRate:1,channel:"ECOMMERCE",approvedAt:"2021-01-01T00:00:00.000Z",creationAt:"2021-01-01T00:00:00.000Z"},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Transaction",description:{content:"This custodial integrator webhook endpoint is called when a clearing or refund request is made. \n\nFor more information on setting up webhooks \nsee the [webhooks guide](/guides/webhooks)\n",type:"text/plain"},url:{path:["transactions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"APIKEY",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},p=void 0,d={unversionedId:"api-reference/transaction",id:"api-reference/transaction",title:"Transaction",description:"This custodial integrator webhook endpoint is called when a clearing or refund request is made.",source:"@site/docs/api-reference/transaction.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/transaction",permalink:"/api-reference/transaction",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"transaction",title:"Transaction",description:"This custodial integrator webhook endpoint is called when a clearing or refund request is made.",sidebar_label:"Transaction",hide_title:!0,hide_table_of_contents:!0,api:{tags:["immersve-webhooks"],security:[{apiKeyHeaderWebhook:[]}],description:"This custodial integrator webhook endpoint is called when a clearing or refund request is made. \n\nFor more information on setting up webhooks \nsee the [webhooks guide](/guides/webhooks)\n",requestBody:{content:{"application/json":{schema:{type:"object",required:["cardId","transactionId","transactionType","accountId","merchantId","merchantName","merchantCity","merchantCountry","merchantCurrency","merchantAmount","billingCurrency","billingAmount","settlementCurrency","settlementAmount","mcc","exchangeRate","channel","approvedAt"],properties:{cardId:{type:"string",example:"h458c8f49c8c8ca651615a33371e3da7",description:"The card ID"},transactionId:{type:"string",example:0xe8d4a53725},authorizationId:{type:"string",nullable:!0,example:100000001e4},transactionType:{type:"string",enum:[1200,1400],description:"The transaction type:\n\n1200 - clearing \n\n1400 - refund\n",example:1200},accountId:{type:"string",example:"8ce8c8f49c8c8ca651615a33371e3da7"},merchantId:{type:"string",description:"Card acceptor ID",example:100000001},merchantName:{type:"string",description:"Card acceptor name",example:"Amazon"},merchantCity:{type:"string",description:"Card acceptor city",example:"New York"},merchantCountry:{type:"string",description:"Card acceptor country",example:"US"},merchantCurrency:{type:"string",description:"Card acceptor currency",example:"USD"},merchantAmount:{type:"number",description:"Card acceptor amount in minor units of the merchant currency",example:100},billingCurrency:{type:"string",description:"Billing currency",example:"USDC"},billingAmount:{type:"number",description:"Billing amount in minor units of the billing currency",example:100},settlementCurrency:{type:"string",example:"USDC"},settlementAmount:{type:"number",description:"Settlement amount in minor units of the settlement currency",example:1e4},mcc:{type:"string",description:"Merchant category code",example:5411},exchangeRate:{type:"string",description:"Exchange rate between merchant and settlement currencies",example:1},channel:{type:"string",description:"Channel",example:"ECOMMERCE"},approvedAt:{type:"string",format:"date-time",description:"Transaction approval date",example:"2021-01-01T00:00:00.000Z"},creationAt:{type:"string",format:"date-time",description:"Transaction creation date",example:"2021-01-01T00:00:00.000Z"}},title:"transaction-custodial-request"}}},required:!0},responses:{200:{description:"Transaction request accepted"}},method:"post",path:"/transactions",servers:[{url:"https://<partnerBaseUrl>/transactions"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{cardId:"h458c8f49c8c8ca651615a33371e3da7",transactionId:0xe8d4a53725,authorizationId:100000001e4,transactionType:1200,accountId:"8ce8c8f49c8c8ca651615a33371e3da7",merchantId:100000001,merchantName:"Amazon",merchantCity:"New York",merchantCountry:"US",merchantCurrency:"USD",merchantAmount:100,billingCurrency:"USDC",billingAmount:100,settlementCurrency:"USDC",settlementAmount:1e4,mcc:5411,exchangeRate:1,channel:"ECOMMERCE",approvedAt:"2021-01-01T00:00:00.000Z",creationAt:"2021-01-01T00:00:00.000Z"},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"Transaction",description:{content:"This custodial integrator webhook endpoint is called when a clearing or refund request is made. \n\nFor more information on setting up webhooks \nsee the [webhooks guide](/guides/webhooks)\n",type:"text/plain"},url:{path:["transactions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"APIKEY",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Authorization",permalink:"/api-reference/authorization"},next:{title:"Card Status Change",permalink:"/api-reference/card-status-change"}},l={},u=[{value:"Transaction",id:"transaction",level:2}],h={toc:u},y="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"transaction"},"Transaction"),(0,r.kt)("p",null,"This custodial integrator webhook endpoint is called when a clearing or refund request is made. "),(0,r.kt)("p",null,"For more information on setting up webhooks\nsee the ",(0,r.kt)("a",{parentName:"p",href:"/guides/webhooks"},"webhooks guide")),(0,r.kt)(c.Z,{mdxType:"MimeTabs"},(0,r.kt)(s.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"cardId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"h458c8f49c8c8ca651615a33371e3da7",description:"The card ID"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"transactionId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:0xe8d4a53725},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"authorizationId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:100000001e4},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"transactionType",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`1200`, `1400`]",schema:{type:"string",enum:[1200,1400],description:"The transaction type:\n\n1200 - clearing \n\n1400 - refund\n",example:1200},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"8ce8c8f49c8c8ca651615a33371e3da7"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"merchantId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Card acceptor ID",example:100000001},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"merchantName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Card acceptor name",example:"Amazon"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"merchantCity",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Card acceptor city",example:"New York"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"merchantCountry",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Card acceptor country",example:"US"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"merchantCurrency",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Card acceptor currency",example:"USD"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"merchantAmount",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Card acceptor amount in minor units of the merchant currency",example:100},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"billingCurrency",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Billing currency",example:"USDC"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"billingAmount",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Billing amount in minor units of the billing currency",example:100},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"settlementCurrency",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"USDC"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"settlementAmount",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Settlement amount in minor units of the settlement currency",example:1e4},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"mcc",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Merchant category code",example:5411},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"exchangeRate",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Exchange rate between merchant and settlement currencies",example:1},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"channel",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Channel",example:"ECOMMERCE"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"approvedAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Transaction approval date",example:"2021-01-01T00:00:00.000Z"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"creationAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Transaction creation date",example:"2021-01-01T00:00:00.000Z"},mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(s.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Transaction request accepted")),(0,r.kt)("div",null)))))}g.isMDXComponent=!0}}]);