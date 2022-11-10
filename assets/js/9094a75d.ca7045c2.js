(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[9855],{34406:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var i=n(87462),s=(n(67294),n(3905)),a=(n(19959),n(26389)),o=n(94891),r=(n(74933),n(47507)),l=n(24310),m=n(63303),p=(n(75035),n(85162));const c={id:"login",title:"Login",description:"The login endpoint returns the authentication token in exchange",sidebar_label:"Login",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authentication"],description:"The login endpoint returns the authentication token in exchange \nfor the previously issued challenge signed with the users wallet\n",requestBody:{content:{"application/json":{schema:{type:"object",required:["message","signature"],properties:{message:{description:"The EIP-4361 challenge",type:"string",example:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z"},signature:{description:"Signature obtained by signing the message with the wallet",type:"string",example:"OxAC12.."}}}}},required:!0},responses:{200:{description:"successful login",content:{"application/json":{schema:{type:"object",required:["message","signature"],properties:{message:{description:"The EIP-4361 challenge",type:"string",example:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z"},signature:{description:"Signature obtained by signing the message with the wallet",type:"string",example:"OxAC12.."}}}}}},400:{description:"Login unsuccessful",content:{"application/json":{example:{status:400,message:"Invalid message."}}}}},method:"post",path:"/siwe/login",servers:[{url:"https://api.sb1.lol/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"}},jsonRequestBodyExample:{message:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z",signature:"OxAC12.."},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Login",description:{content:"The login endpoint returns the authentication token in exchange \nfor the previously issued challenge signed with the users wallet\n",type:"text/plain"},url:{path:["siwe","login"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api"},h=void 0,u={unversionedId:"api-reference/login",id:"api-reference/login",title:"Login",description:"The login endpoint returns the authentication token in exchange",source:"@site/docs/api-reference/login.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/login",permalink:"/api-reference/login",draft:!1,tags:[],version:"current",frontMatter:{id:"login",title:"Login",description:"The login endpoint returns the authentication token in exchange",sidebar_label:"Login",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authentication"],description:"The login endpoint returns the authentication token in exchange \nfor the previously issued challenge signed with the users wallet\n",requestBody:{content:{"application/json":{schema:{type:"object",required:["message","signature"],properties:{message:{description:"The EIP-4361 challenge",type:"string",example:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z"},signature:{description:"Signature obtained by signing the message with the wallet",type:"string",example:"OxAC12.."}}}}},required:!0},responses:{200:{description:"successful login",content:{"application/json":{schema:{type:"object",required:["message","signature"],properties:{message:{description:"The EIP-4361 challenge",type:"string",example:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z"},signature:{description:"Signature obtained by signing the message with the wallet",type:"string",example:"OxAC12.."}}}}}},400:{description:"Login unsuccessful",content:{"application/json":{example:{status:400,message:"Invalid message."}}}}},method:"post",path:"/siwe/login",servers:[{url:"https://api.sb1.lol/",description:"Sandbox server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"}},jsonRequestBodyExample:{message:"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z",signature:"OxAC12.."},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Login",description:{content:"The login endpoint returns the authentication token in exchange \nfor the previously issued challenge signed with the users wallet\n",type:"text/plain"},url:{path:["siwe","login"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api"},sidebar:"primarySidebar",previous:{title:"Generate Challenge",permalink:"/api-reference/generate-challenge"},next:{title:"Cards",permalink:"/api-reference/card"}},g={},d=[{value:"Login",id:"login",level:2}],y={toc:d};function b(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"login"},"Login"),(0,s.kt)("p",null,"The login endpoint returns the authentication token in exchange\nfor the previously issued challenge signed with the users wallet"),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!0,schemaDescription:"The EIP-4361 challenge",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"signature",required:!0,schemaDescription:"Signature obtained by signing the message with the wallet",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful login")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:"The EIP-4361 challenge",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"signature",required:!1,schemaDescription:"Signature obtained by signing the message with the wallet",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "message": "app.immersve.com wants you to sign in with your Ethereum account:\\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\\n\\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\\n\\nURI: https://app.immersve.com\\nVersion: 1\\nChain ID: 1\\nNonce: 2hFm7TDbZmerUgnrJ\\nIssued At: 2022-08-11T22:29:48.244Z",\n  "signature": "OxAC12.."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Login unsuccessful")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "status": 400,\n  "message": "Invalid message."\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0},11748:(e,t,n)=>{var i={"./locale":89234,"./locale.js":89234};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=a,e.exports=s,s.id=11748}}]);