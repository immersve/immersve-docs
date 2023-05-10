"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[7747],{62491:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=t(87462),i=(t(67294),t(3905)),r=(t(8209),t(26389)),n=t(94891),o=(t(75190),t(47507),t(24310)),c=(t(63303),t(75035),t(85162));const d={id:"card-status-change",title:"Card Status Change",description:"This custodial integrator webhook endpoint is called when a card status is changed.",sidebar_label:"Card Status Change",hide_title:!0,hide_table_of_contents:!0,api:{tags:["immersve-webhooks"],security:[{apiKeyHeaderWebhook:[]}],description:"This custodial integrator webhook endpoint is called when a card status is changed. \n\nFor more information on setting up webhooks \nsee the [webhooks guide](/guides/webhooks)\n",requestBody:{content:{"application/json":{schema:{type:"object",required:["cardId","accountId","cardReference","status","reasonCode","reasonMessage","previousStatus","updateDate"],properties:{cardId:{type:"string",example:"h458c8f49c8c8ca651615a33371e3da7",description:"The card ID"},accountId:{type:"string",example:"8ce8c8f49c8c8ca651615a33371e3da7"},cardReference:{type:"string",example:100000001,description:"The card reference on the integrator side"},status:{type:"string",example:"active",enum:["active","inactive","shipped","blocked","canceled"]},reasonCode:{type:"string",example:"loststolen",description:"The reason code for the card status change"},reasonMessage:{type:"string",example:"Card was lost or stolen",description:"The reason message for the card status change"},previousStatus:{type:"string",example:"active",enum:["active","inactive","shipped","blocked","canceled"],description:"The previous card status"},updateDate:{type:"string",format:"date-time",example:"2020-01-01T00:00:00Z",description:"The date and time of the card status change"}},title:"card-status-change-custodial-request"}}},required:!0},responses:{200:{description:"Card status change request accepted"}},method:"post",path:"/card-status-change",servers:[{url:"https://<partnerBaseUrl>/card/notification"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{cardId:"h458c8f49c8c8ca651615a33371e3da7",accountId:"8ce8c8f49c8c8ca651615a33371e3da7",cardReference:100000001,status:"active",reasonCode:"loststolen",reasonMessage:"Card was lost or stolen",previousStatus:"active",updateDate:"2020-01-01T00:00:00Z"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Card Status Change",description:{content:"This custodial integrator webhook endpoint is called when a card status is changed. \n\nFor more information on setting up webhooks \nsee the [webhooks guide](/guides/webhooks)\n",type:"text/plain"},url:{path:["card-status-change"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"APIKEY",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},p=void 0,l={unversionedId:"api-reference/card-status-change",id:"api-reference/card-status-change",title:"Card Status Change",description:"This custodial integrator webhook endpoint is called when a card status is changed.",source:"@site/docs/api-reference/card-status-change.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/card-status-change",permalink:"/api-reference/card-status-change",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"card-status-change",title:"Card Status Change",description:"This custodial integrator webhook endpoint is called when a card status is changed.",sidebar_label:"Card Status Change",hide_title:!0,hide_table_of_contents:!0,api:{tags:["immersve-webhooks"],security:[{apiKeyHeaderWebhook:[]}],description:"This custodial integrator webhook endpoint is called when a card status is changed. \n\nFor more information on setting up webhooks \nsee the [webhooks guide](/guides/webhooks)\n",requestBody:{content:{"application/json":{schema:{type:"object",required:["cardId","accountId","cardReference","status","reasonCode","reasonMessage","previousStatus","updateDate"],properties:{cardId:{type:"string",example:"h458c8f49c8c8ca651615a33371e3da7",description:"The card ID"},accountId:{type:"string",example:"8ce8c8f49c8c8ca651615a33371e3da7"},cardReference:{type:"string",example:100000001,description:"The card reference on the integrator side"},status:{type:"string",example:"active",enum:["active","inactive","shipped","blocked","canceled"]},reasonCode:{type:"string",example:"loststolen",description:"The reason code for the card status change"},reasonMessage:{type:"string",example:"Card was lost or stolen",description:"The reason message for the card status change"},previousStatus:{type:"string",example:"active",enum:["active","inactive","shipped","blocked","canceled"],description:"The previous card status"},updateDate:{type:"string",format:"date-time",example:"2020-01-01T00:00:00Z",description:"The date and time of the card status change"}},title:"card-status-change-custodial-request"}}},required:!0},responses:{200:{description:"Card status change request accepted"}},method:"post",path:"/card-status-change",servers:[{url:"https://<partnerBaseUrl>/card/notification"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{cardId:"h458c8f49c8c8ca651615a33371e3da7",accountId:"8ce8c8f49c8c8ca651615a33371e3da7",cardReference:100000001,status:"active",reasonCode:"loststolen",reasonMessage:"Card was lost or stolen",previousStatus:"active",updateDate:"2020-01-01T00:00:00Z"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Card Status Change",description:{content:"This custodial integrator webhook endpoint is called when a card status is changed. \n\nFor more information on setting up webhooks \nsee the [webhooks guide](/guides/webhooks)\n",type:"text/plain"},url:{path:["card-status-change"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"APIKEY",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Transaction",permalink:"/api-reference/transaction"},next:{title:"Simulator",permalink:"/api-reference/simulator"}},u={},h=[{value:"Card Status Change",id:"card-status-change",level:2}],m={toc:h};function g(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,s.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"card-status-change"},"Card Status Change"),(0,i.kt)("p",null,"This custodial integrator webhook endpoint is called when a card status is changed. "),(0,i.kt)("p",null,"For more information on setting up webhooks\nsee the ",(0,i.kt)("a",{parentName:"p",href:"/guides/webhooks"},"webhooks guide")),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"cardId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"h458c8f49c8c8ca651615a33371e3da7",description:"The card ID"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"8ce8c8f49c8c8ca651615a33371e3da7"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"cardReference",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:100000001,description:"The card reference on the integrator side"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`active`, `inactive`, `shipped`, `blocked`, `canceled`]",schema:{type:"string",example:"active",enum:["active","inactive","shipped","blocked","canceled"]},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"reasonCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"loststolen",description:"The reason code for the card status change"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"reasonMessage",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Card was lost or stolen",description:"The reason message for the card status change"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"previousStatus",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`active`, `inactive`, `shipped`, `blocked`, `canceled`]",schema:{type:"string",example:"active",enum:["active","inactive","shipped","blocked","canceled"],description:"The previous card status"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"updateDate",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2020-01-01T00:00:00Z",description:"The date and time of the card status change"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Card status change request accepted")),(0,i.kt)("div",null)))))}g.isMDXComponent=!0}}]);