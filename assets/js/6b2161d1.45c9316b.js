(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[8875],{27230:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>p,metadata:()=>h,toc:()=>b});var s=t(87462),n=(t(67294),t(3905)),i=(t(19959),t(26389)),r=t(94891),l=(t(74933),t(47507)),c=t(24310),o=t(63303),m=(t(75035),t(85162));const p={id:"get-balance",title:"Get Balance",description:"This endpoint returns the balance and available balance for a given asset.",sidebar_label:"Get Balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["assets"],description:"This endpoint returns the balance and available balance for a given asset.",responses:{200:{content:{"application/json":{schema:{type:"object",properties:{walletAddress:{type:"string",description:"The blockchain address of the asset holder",example:"0xA3058369d6A481B1ff08F62B352409c3D709De9b"},balance:{type:"string",description:"The amount held in the Immersve smart contract on behalf of the wallet address",example:"21.430493"},availableBalance:{type:"string",description:"The sum amount of funds thats are subject to a fund lock",example:"3.123456"},chainId:{type:"string",description:"Chain ID (see https://chainlist.org/)",example:"1337"},currencySymbol:{type:"string",description:"The symbol of the respective coin being used (currently only USDC)",example:"USDC"}}}}}}},method:"get",path:"/api/assets",servers:[{url:"https://mobile.apac-uat.aws.tst.e6tech.net/restful/",description:"Secure card details server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get Balance",description:{content:"This endpoint returns the balance and available balance for a given asset.",type:"text/plain"},url:{path:["api","assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api"},d=void 0,h={unversionedId:"api-reference/get-balance",id:"api-reference/get-balance",title:"Get Balance",description:"This endpoint returns the balance and available balance for a given asset.",source:"@site/docs/api-reference/get-balance.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/get-balance",permalink:"/api-reference/get-balance",draft:!1,tags:[],version:"current",frontMatter:{id:"get-balance",title:"Get Balance",description:"This endpoint returns the balance and available balance for a given asset.",sidebar_label:"Get Balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["assets"],description:"This endpoint returns the balance and available balance for a given asset.",responses:{200:{content:{"application/json":{schema:{type:"object",properties:{walletAddress:{type:"string",description:"The blockchain address of the asset holder",example:"0xA3058369d6A481B1ff08F62B352409c3D709De9b"},balance:{type:"string",description:"The amount held in the Immersve smart contract on behalf of the wallet address",example:"21.430493"},availableBalance:{type:"string",description:"The sum amount of funds thats are subject to a fund lock",example:"3.123456"},chainId:{type:"string",description:"Chain ID (see https://chainlist.org/)",example:"1337"},currencySymbol:{type:"string",description:"The symbol of the respective coin being used (currently only USDC)",example:"USDC"}}}}}}},method:"get",path:"/api/assets",servers:[{url:"https://mobile.apac-uat.aws.tst.e6tech.net/restful/",description:"Secure card details server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get Balance",description:{content:"This endpoint returns the balance and available balance for a given asset.",type:"text/plain"},url:{path:["api","assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api"},sidebar:"primarySidebar",previous:{title:"Assets",permalink:"/api-reference/assets"},next:{title:"Immersve Payment Protocol",permalink:"/contracts/payment-protocol"}},u={},b=[{value:"Get Balance",id:"get-balance",level:2}],f={toc:b};function v(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-balance"},"Get Balance"),(0,n.kt)("p",null,"This endpoint returns the balance and available balance for a given asset."),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"walletAddress",required:!1,schemaDescription:"The blockchain address of the asset holder",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"balance",required:!1,schemaDescription:"The amount held in the Immersve smart contract on behalf of the wallet address",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"availableBalance",required:!1,schemaDescription:"The sum amount of funds thats are subject to a fund lock",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"chainId",required:!1,schemaDescription:"Chain ID (see https://chainlist.org/)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"currencySymbol",required:!1,schemaDescription:"The symbol of the respective coin being used (currently only USDC)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "walletAddress": "0xA3058369d6A481B1ff08F62B352409c3D709De9b",\n  "balance": "21.430493",\n  "availableBalance": "3.123456",\n  "chainId": "1337",\n  "currencySymbol": "USDC"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0},11748:(e,a,t)=>{var s={"./locale":89234,"./locale.js":89234};function n(e){var a=i(e);return t(a)}function i(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id=11748}}]);