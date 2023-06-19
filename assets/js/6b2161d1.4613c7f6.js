"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[8875],{27230:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>h,toc:()=>u});var i=t(87462),n=(t(67294),t(3905)),s=(t(8209),t(26389)),r=t(94891),l=(t(75190),t(47507)),c=t(24310),o=t(63303),p=(t(75035),t(85162));const d={id:"get-balance",title:"Get balance",description:"This endpoint returns the balance and available balance for a given asset.",sidebar_label:"Get balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["assets"],description:"This endpoint returns the balance and available balance for a given asset.",responses:{200:{content:{"application/json":{schema:{type:"object",properties:{walletAddress:{type:"string",description:"The blockchain address of the asset holder",example:"0xA3058369d6A481B1ff08F62B352409c3D709De9b"},balance:{type:"string",description:"The amount held in the Immersve smart contract on behalf of the wallet address",example:"21.430493"},availableBalance:{type:"string",description:"The sum amount of funds thats are subject to a fund lock",example:"3.123456"},chainId:{type:"string",description:"Chain ID (see https://chainlist.org/)",example:"1337"},currencySymbol:{type:"string",description:"The symbol of the respective coin being used (currently only USDC)",example:"USDC"}},title:"wallet-balance"}}}}},method:"get",path:"/api/assets",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get balance",description:{content:"This endpoint returns the balance and available balance for a given asset.",type:"text/plain"},url:{path:["api","assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},m=void 0,h={unversionedId:"api-reference/get-balance",id:"api-reference/get-balance",title:"Get balance",description:"This endpoint returns the balance and available balance for a given asset.",source:"@site/docs/api-reference/get-balance.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/get-balance",permalink:"/api-reference/get-balance",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-balance",title:"Get balance",description:"This endpoint returns the balance and available balance for a given asset.",sidebar_label:"Get balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["assets"],description:"This endpoint returns the balance and available balance for a given asset.",responses:{200:{content:{"application/json":{schema:{type:"object",properties:{walletAddress:{type:"string",description:"The blockchain address of the asset holder",example:"0xA3058369d6A481B1ff08F62B352409c3D709De9b"},balance:{type:"string",description:"The amount held in the Immersve smart contract on behalf of the wallet address",example:"21.430493"},availableBalance:{type:"string",description:"The sum amount of funds thats are subject to a fund lock",example:"3.123456"},chainId:{type:"string",description:"Chain ID (see https://chainlist.org/)",example:"1337"},currencySymbol:{type:"string",description:"The symbol of the respective coin being used (currently only USDC)",example:"USDC"}},title:"wallet-balance"}}}}},method:"get",path:"/api/assets",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]},{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get balance",description:{content:"This endpoint returns the balance and available balance for a given asset.",type:"text/plain"},url:{path:["api","assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Assets",permalink:"/api-reference/assets"},next:{title:"Asset activities",permalink:"/api-reference/asset-activities"}},b={},u=[{value:"Get balance",id:"get-balance",level:2}],y={toc:u};function f(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-balance"},"Get balance"),(0,n.kt)("p",null,"This endpoint returns the balance and available balance for a given asset."),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"walletAddress",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The blockchain address of the asset holder",example:"0xA3058369d6A481B1ff08F62B352409c3D709De9b"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"balance",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The amount held in the Immersve smart contract on behalf of the wallet address",example:"21.430493"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"availableBalance",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The sum amount of funds thats are subject to a fund lock",example:"3.123456"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"chainId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Chain ID (see https://chainlist.org/)",example:"1337"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"currencySymbol",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The symbol of the respective coin being used (currently only USDC)",example:"USDC"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "walletAddress": "0xA3058369d6A481B1ff08F62B352409c3D709De9b",\n  "balance": "21.430493",\n  "availableBalance": "3.123456",\n  "chainId": "1337",\n  "currencySymbol": "USDC"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);