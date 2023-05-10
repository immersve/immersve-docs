"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[8665],{21420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>f,frontMatter:()=>m,metadata:()=>d,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=(n(8209),n(26389)),s=n(94891),o=(n(75190),n(47507)),l=n(24310),c=n(63303),p=(n(75035),n(85162));const m={id:"generate-challenge",title:"Generate challenge",description:"Generating the challenge is the first step in the process of getting the authentication token.",sidebar_label:"Generate challenge",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authentication"],description:"Generating the challenge is the first step in the process of getting the authentication token.\n",requestBody:{content:{"application/json":{schema:{type:"object",required:["walletAddress","chainId"],properties:{walletAddress:{description:"The address of the signing wallet or the smart contract that implements ERC-1271",type:"string",example:"0xA3058369d6A481B1ff08F62B352409c3D709De9b"},chainId:{description:"Chain ID (see https://chainlist.org/)",type:"number",example:1},url:{description:'A URL referring to the resource that requests the signing.\nAlso, domain in the "<domain> wants you to sign in.." is derived from the host fragment of this parameter.\n',type:"url",example:"https://example.service/login"}},title:"challenge-request"}}},required:!0},responses:{200:{description:"Challenge to be signed in EIP-4361 format. ([Quick start signing](https://replit.com/@Immersve/Authentication-Sign-Challenge?v=1))",content:{"text/plain":{example:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nBy connecting your wallet and using Immersve, you agree to our Terms of services and Privacy Policy\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z\n"}}}},method:"post",path:"/siwe/generate-challenge",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{walletAddress:"0xA3058369d6A481B1ff08F62B352409c3D709De9b",chainId:1,url:"https://example.service/login"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Generate challenge",description:{content:"Generating the challenge is the first step in the process of getting the authentication token.\n",type:"text/plain"},url:{path:["siwe","generate-challenge"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"text/plain"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},h=void 0,d={unversionedId:"api-reference/generate-challenge",id:"api-reference/generate-challenge",title:"Generate challenge",description:"Generating the challenge is the first step in the process of getting the authentication token.",source:"@site/docs/api-reference/generate-challenge.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/generate-challenge",permalink:"/api-reference/generate-challenge",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"generate-challenge",title:"Generate challenge",description:"Generating the challenge is the first step in the process of getting the authentication token.",sidebar_label:"Generate challenge",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authentication"],description:"Generating the challenge is the first step in the process of getting the authentication token.\n",requestBody:{content:{"application/json":{schema:{type:"object",required:["walletAddress","chainId"],properties:{walletAddress:{description:"The address of the signing wallet or the smart contract that implements ERC-1271",type:"string",example:"0xA3058369d6A481B1ff08F62B352409c3D709De9b"},chainId:{description:"Chain ID (see https://chainlist.org/)",type:"number",example:1},url:{description:'A URL referring to the resource that requests the signing.\nAlso, domain in the "\\<domain\\> wants you to sign in.." is derived from the host fragment of this parameter.\n',type:"url",example:"https://example.service/login"}},title:"challenge-request"}}},required:!0},responses:{200:{description:"Challenge to be signed in EIP-4361 format. ([Quick start signing](https://replit.com/@Immersve/Authentication-Sign-Challenge?v=1))",content:{"text/plain":{example:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nBy connecting your wallet and using Immersve, you agree to our Terms of services and Privacy Policy\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z\n"}}}},method:"post",path:"/siwe/generate-challenge",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{walletAddress:"0xA3058369d6A481B1ff08F62B352409c3D709De9b",chainId:1,url:"https://example.service/login"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Generate challenge",description:{content:"Generating the challenge is the first step in the process of getting the authentication token.\n",type:"text/plain"},url:{path:["siwe","generate-challenge"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"text/plain"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Authentication",permalink:"/api-reference/authentication"},next:{title:"Login",permalink:"/api-reference/login"}},g={},u=[{value:"Generate challenge",id:"generate-challenge",level:2}],y={toc:u};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"generate-challenge"},"Generate challenge"),(0,i.kt)("p",null,"Generating the challenge is the first step in the process of getting the authentication token."),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"walletAddress",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The address of the signing wallet or the smart contract that implements ERC-1271",type:"string",example:"0xA3058369d6A481B1ff08F62B352409c3D709De9b"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"chainId",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{description:"Chain ID (see https://chainlist.org/)",type:"number",example:1},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"url",required:!1,schemaName:"url",qualifierMessage:void 0,schema:{description:'A URL referring to the resource that requests the signing.\nAlso, domain in the "\\<domain\\> wants you to sign in.." is derived from the host fragment of this parameter.\n',type:"url",example:"https://example.service/login"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Challenge to be signed in EIP-4361 format. (",(0,i.kt)("a",{parentName:"p",href:"https://replit.com/@Immersve/Authentication-Sign-Challenge?v=1"},"Quick start signing"),")")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"text/plain",value:"text/plain",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},"any"))),(0,i.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nBy connecting your wallet and using Immersve, you agree to our Terms of services and Privacy Policy\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z\n",language:"shell",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);