(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[2706],{96806:(e,r,t)=>{"use strict";t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var n=t(87462),c=(t(67294),t(3905)),a=(t(19959),t(26389)),o=t(94891),i=t(74933),s=t(47507),u=t(24310),m=t(63303),p=(t(75035),t(85162));const d={id:"currency-convert",title:"Currency Convert",description:"Convert a source currency to a target currency using Mastercard rates",sidebar_label:"Currency Convert",hide_title:!0,hide_table_of_contents:!0,api:{tags:["currency"],description:"Convert a source currency to a target currency using Mastercard rates",parameters:[{name:"currency",in:"query",required:!0,description:"The currency alpha code to convert from",schema:{type:"string"}},{name:"amount",in:"query",description:"The amount of `currency` to convert to destination currency",required:!0,schema:{type:"number",format:"decimal"}},{name:"targetCurrency",in:"query",description:"The target currency alpha code for the conversion. Defaults to `USD`",required:!1,schema:{type:"string"}},{name:"fee",in:"query",description:"Optional fee added on top of the conversion. Defaults to `0`",required:!1,schema:{type:"number",format:"decimal"}}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{currency:{type:"string",description:"The currency to convert from"},targetCurrency:{type:"string",description:"The target currency for the conversion"},convertedCurrency:{type:"string",description:"The currency converted to"},amount:{type:"number",description:"The amount of currency to convert to destination currency"},convertedAmount:{type:"number",description:"The resulting amount of the conversion from currency into convertedCurrency"},rate:{type:"number",description:"The conversion rate from currency to convertedCurrency"}}},example:'{\n  "currency": "NZD",\n  "convertedCurrency": "USD",\n  "amount": 1000,\n  "convertedAmount": 696.2285,\n  "rate": 0.6962285\n}\n'}}}},method:"post",path:"/api/currency/convert",servers:[{url:"https://api.sb1.lol/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Currency Convert",description:{content:"Convert a source currency to a target currency using Mastercard rates",type:"text/plain"},url:{path:["api","currency","convert"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The currency alpha code to convert from",type:"text/plain"},key:"currency",value:""},{disabled:!1,description:{content:"(Required) The amount of `currency` to convert to destination currency",type:"text/plain"},key:"amount",value:""},{disabled:!1,description:{content:"The target currency alpha code for the conversion. Defaults to `USD`",type:"text/plain"},key:"targetCurrency",value:""},{disabled:!1,description:{content:"Optional fee added on top of the conversion. Defaults to `0`",type:"text/plain"},key:"fee",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api"},l=void 0,y={unversionedId:"api-reference/currency-convert",id:"api-reference/currency-convert",title:"Currency Convert",description:"Convert a source currency to a target currency using Mastercard rates",source:"@site/docs/api-reference/currency-convert.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/currency-convert",permalink:"/api-reference/currency-convert",draft:!1,tags:[],version:"current",frontMatter:{id:"currency-convert",title:"Currency Convert",description:"Convert a source currency to a target currency using Mastercard rates",sidebar_label:"Currency Convert",hide_title:!0,hide_table_of_contents:!0,api:{tags:["currency"],description:"Convert a source currency to a target currency using Mastercard rates",parameters:[{name:"currency",in:"query",required:!0,description:"The currency alpha code to convert from",schema:{type:"string"}},{name:"amount",in:"query",description:"The amount of `currency` to convert to destination currency",required:!0,schema:{type:"number",format:"decimal"}},{name:"targetCurrency",in:"query",description:"The target currency alpha code for the conversion. Defaults to `USD`",required:!1,schema:{type:"string"}},{name:"fee",in:"query",description:"Optional fee added on top of the conversion. Defaults to `0`",required:!1,schema:{type:"number",format:"decimal"}}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{currency:{type:"string",description:"The currency to convert from"},targetCurrency:{type:"string",description:"The target currency for the conversion"},convertedCurrency:{type:"string",description:"The currency converted to"},amount:{type:"number",description:"The amount of currency to convert to destination currency"},convertedAmount:{type:"number",description:"The resulting amount of the conversion from currency into convertedCurrency"},rate:{type:"number",description:"The conversion rate from currency to convertedCurrency"}}},example:'{\n  "currency": "NZD",\n  "convertedCurrency": "USD",\n  "amount": 1000,\n  "convertedAmount": 696.2285,\n  "rate": 0.6962285\n}\n'}}}},method:"post",path:"/api/currency/convert",servers:[{url:"https://api.sb1.lol/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Currency Convert",description:{content:"Convert a source currency to a target currency using Mastercard rates",type:"text/plain"},url:{path:["api","currency","convert"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The currency alpha code to convert from",type:"text/plain"},key:"currency",value:""},{disabled:!1,description:{content:"(Required) The amount of `currency` to convert to destination currency",type:"text/plain"},key:"amount",value:""},{disabled:!1,description:{content:"The target currency alpha code for the conversion. Defaults to `USD`",type:"text/plain"},key:"targetCurrency",value:""},{disabled:!1,description:{content:"Optional fee added on top of the conversion. Defaults to `0`",type:"text/plain"},key:"fee",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api"},sidebar:"primarySidebar",previous:{title:"Currency List",permalink:"/api-reference/currency-list"},next:{title:"Immersve Payment Protocol",permalink:"/contracts/payment-protocol"}},v={},h=[{value:"Currency Convert",id:"currency-convert",level:2}],f={toc:h};function g(e){let{components:r,...t}=e;return(0,c.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"currency-convert"},"Currency Convert"),(0,c.kt)("p",null,"Convert a source currency to a target currency using Mastercard rates"),(0,c.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,c.kt)("summary",{style:{}},(0,c.kt)("strong",null,"Query Parameters")),(0,c.kt)("div",null,(0,c.kt)("ul",null,(0,c.kt)(i.Z,{className:"paramsItem",param:{name:"currency",in:"query",required:!0,description:"The currency alpha code to convert from",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,c.kt)(i.Z,{className:"paramsItem",param:{name:"amount",in:"query",description:"The amount of `currency` to convert to destination currency",required:!0,schema:{type:"number",format:"decimal"}},mdxType:"ParamsItem"}),(0,c.kt)(i.Z,{className:"paramsItem",param:{name:"targetCurrency",in:"query",description:"The target currency alpha code for the conversion. Defaults to `USD`",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,c.kt)(i.Z,{className:"paramsItem",param:{name:"fee",in:"query",description:"Optional fee added on top of the conversion. Defaults to `0`",required:!1,schema:{type:"number",format:"decimal"}},mdxType:"ParamsItem"})))),(0,c.kt)("div",null,(0,c.kt)(a.Z,{mdxType:"ApiTabs"},(0,c.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,c.kt)("div",null),(0,c.kt)("div",null,(0,c.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,c.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,c.kt)(m.Z,{mdxType:"SchemaTabs"},(0,c.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,c.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,c.kt)("summary",{style:{textAlign:"left"}},(0,c.kt)("strong",null,"Schema")),(0,c.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,c.kt)("ul",{style:{marginLeft:"1rem"}},(0,c.kt)(u.Z,{collapsible:!1,name:"currency",required:!1,schemaDescription:"The currency to convert from",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,c.kt)(u.Z,{collapsible:!1,name:"targetCurrency",required:!1,schemaDescription:"The target currency for the conversion",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,c.kt)(u.Z,{collapsible:!1,name:"convertedCurrency",required:!1,schemaDescription:"The currency converted to",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,c.kt)(u.Z,{collapsible:!1,name:"amount",required:!1,schemaDescription:"The amount of currency to convert to destination currency",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,c.kt)(u.Z,{collapsible:!1,name:"convertedAmount",required:!1,schemaDescription:"The resulting amount of the conversion from currency into convertedCurrency",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,c.kt)(u.Z,{collapsible:!1,name:"rate",required:!1,schemaDescription:"The conversion rate from currency to convertedCurrency",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,c.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,c.kt)(s.Z,{responseExample:'{\n  "currency": "string",\n  "targetCurrency": "string",\n  "convertedCurrency": "string",\n  "amount": 0,\n  "convertedAmount": 0,\n  "rate": 0\n}',language:"json",mdxType:"ResponseSamples"})),(0,c.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,c.kt)(s.Z,{responseExample:'{\n  "currency": "NZD",\n  "convertedCurrency": "USD",\n  "amount": 1000,\n  "convertedAmount": 696.2285,\n  "rate": 0.6962285\n}\n',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0},11748:(e,r,t)=>{var n={"./locale":89234,"./locale.js":89234};function c(e){var r=a(e);return t(r)}function a(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=a,e.exports=c,c.id=11748}}]);