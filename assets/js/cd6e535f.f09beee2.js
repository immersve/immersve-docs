"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[1087],{56467:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>y,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>v});var n=t(87462),c=(t(67294),t(3905)),o=(t(8209),t(26389)),a=t(94891),i=t(75190),s=t(47507),u=t(24310),m=t(63303),p=(t(75035),t(85162));const d={id:"currency-conversion",title:"Currency conversion",description:"Convert a source currency to a target currency.",sidebar_label:"Currency conversion",hide_title:!0,hide_table_of_contents:!0,api:{tags:["currency"],description:"Convert a source currency to a target currency.",parameters:[{name:"currency",in:"query",required:!0,description:"The currency alpha code to convert from",schema:{type:"string"}},{name:"amount",in:"query",description:"The amount of `currency` to convert to destination currency",required:!0,schema:{type:"number",format:"decimal"}},{name:"targetCurrency",in:"query",description:"The target currency alpha code for the conversion. Defaults to `USD`",required:!1,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{currency:{type:"string",description:"The currency to convert from."},targetCurrency:{type:"string",description:"The target currency to convert to."},convertedCurrency:{type:"string",description:"The currency converted to."},amount:{type:"number",description:"The amount of currency to convert to destination currency denominated in the major unit."},convertedAmount:{type:"number",description:"The resulting amount of the conversion from `currency` into `convertedCurrency` denominated in the major unit."},rate:{type:"number",description:"The conversion rate applied to arrive at the `convertedAmount` of the `convertedCurrency` from the `amount` of `currency`."}},title:"currency-conversion"},example:'{\n  "currency": "NZD",\n  "convertedCurrency": "USD",\n  "amount": 1000,\n  "convertedAmount": 696.2285,\n  "rate": 0.6962285\n}\n'}}}},method:"get",path:"/api/currency/convert",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Currency conversion",description:{content:"Convert a source currency to a target currency.",type:"text/plain"},url:{path:["api","currency","convert"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The currency alpha code to convert from",type:"text/plain"},key:"currency",value:""},{disabled:!1,description:{content:"(Required) The amount of `currency` to convert to destination currency",type:"text/plain"},key:"amount",value:""},{disabled:!1,description:{content:"The target currency alpha code for the conversion. Defaults to `USD`",type:"text/plain"},key:"targetCurrency",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},y=void 0,l={unversionedId:"api-reference/currency-conversion",id:"api-reference/currency-conversion",title:"Currency conversion",description:"Convert a source currency to a target currency.",source:"@site/docs/api-reference/currency-conversion.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/currency-conversion",permalink:"/api-reference/currency-conversion",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"currency-conversion",title:"Currency conversion",description:"Convert a source currency to a target currency.",sidebar_label:"Currency conversion",hide_title:!0,hide_table_of_contents:!0,api:{tags:["currency"],description:"Convert a source currency to a target currency.",parameters:[{name:"currency",in:"query",required:!0,description:"The currency alpha code to convert from",schema:{type:"string"}},{name:"amount",in:"query",description:"The amount of `currency` to convert to destination currency",required:!0,schema:{type:"number",format:"decimal"}},{name:"targetCurrency",in:"query",description:"The target currency alpha code for the conversion. Defaults to `USD`",required:!1,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{currency:{type:"string",description:"The currency to convert from."},targetCurrency:{type:"string",description:"The target currency to convert to."},convertedCurrency:{type:"string",description:"The currency converted to."},amount:{type:"number",description:"The amount of currency to convert to destination currency denominated in the major unit."},convertedAmount:{type:"number",description:"The resulting amount of the conversion from `currency` into `convertedCurrency` denominated in the major unit."},rate:{type:"number",description:"The conversion rate applied to arrive at the `convertedAmount` of the `convertedCurrency` from the `amount` of `currency`."}},title:"currency-conversion"},example:'{\n  "currency": "NZD",\n  "convertedCurrency": "USD",\n  "amount": 1000,\n  "convertedAmount": 696.2285,\n  "rate": 0.6962285\n}\n'}}}},method:"get",path:"/api/currency/convert",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Currency conversion",description:{content:"Convert a source currency to a target currency.",type:"text/plain"},url:{path:["api","currency","convert"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The currency alpha code to convert from",type:"text/plain"},key:"currency",value:""},{disabled:!1,description:{content:"(Required) The amount of `currency` to convert to destination currency",type:"text/plain"},key:"amount",value:""},{disabled:!1,description:{content:"The target currency alpha code for the conversion. Defaults to `USD`",type:"text/plain"},key:"targetCurrency",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"List currencies",permalink:"/api-reference/list-currencies"},next:{title:"Transactions",permalink:"/api-reference/transactions"}},h={},v=[{value:"Currency conversion",id:"currency-conversion",level:2}],g={toc:v};function f(e){let{components:r,...t}=e;return(0,c.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"currency-conversion"},"Currency conversion"),(0,c.kt)("p",null,"Convert a source currency to a target currency."),(0,c.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,c.kt)("summary",{style:{}},(0,c.kt)("strong",null,"Query Parameters")),(0,c.kt)("div",null,(0,c.kt)("ul",null,(0,c.kt)(i.Z,{className:"paramsItem",param:{name:"currency",in:"query",required:!0,description:"The currency alpha code to convert from",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,c.kt)(i.Z,{className:"paramsItem",param:{name:"amount",in:"query",description:"The amount of `currency` to convert to destination currency",required:!0,schema:{type:"number",format:"decimal"}},mdxType:"ParamsItem"}),(0,c.kt)(i.Z,{className:"paramsItem",param:{name:"targetCurrency",in:"query",description:"The target currency alpha code for the conversion. Defaults to `USD`",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,c.kt)("div",null,(0,c.kt)(o.Z,{mdxType:"ApiTabs"},(0,c.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,c.kt)("div",null),(0,c.kt)("div",null,(0,c.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,c.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,c.kt)(m.Z,{mdxType:"SchemaTabs"},(0,c.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,c.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,c.kt)("summary",{style:{textAlign:"left"}},(0,c.kt)("strong",null,"Schema")),(0,c.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,c.kt)("ul",{style:{marginLeft:"1rem"}},(0,c.kt)(u.Z,{collapsible:!1,name:"currency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The currency to convert from."},mdxType:"SchemaItem"}),(0,c.kt)(u.Z,{collapsible:!1,name:"targetCurrency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The target currency to convert to."},mdxType:"SchemaItem"}),(0,c.kt)(u.Z,{collapsible:!1,name:"convertedCurrency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The currency converted to."},mdxType:"SchemaItem"}),(0,c.kt)(u.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The amount of currency to convert to destination currency denominated in the major unit."},mdxType:"SchemaItem"}),(0,c.kt)(u.Z,{collapsible:!1,name:"convertedAmount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The resulting amount of the conversion from `currency` into `convertedCurrency` denominated in the major unit."},mdxType:"SchemaItem"}),(0,c.kt)(u.Z,{collapsible:!1,name:"rate",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The conversion rate applied to arrive at the `convertedAmount` of the `convertedCurrency` from the `amount` of `currency`."},mdxType:"SchemaItem"})))),(0,c.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,c.kt)(s.Z,{responseExample:'{\n  "currency": "string",\n  "targetCurrency": "string",\n  "convertedCurrency": "string",\n  "amount": 0,\n  "convertedAmount": 0,\n  "rate": 0\n}',language:"json",mdxType:"ResponseSamples"})),(0,c.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,c.kt)(s.Z,{responseExample:'{\n  "currency": "NZD",\n  "convertedCurrency": "USD",\n  "amount": 1000,\n  "convertedAmount": 696.2285,\n  "rate": 0.6962285\n}\n',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);