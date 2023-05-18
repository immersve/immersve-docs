"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[9694],{97955:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>b,frontMatter:()=>m,metadata:()=>u,toc:()=>y});var a=i(87462),r=(i(67294),i(3905)),s=(i(8209),i(26389)),n=i(94891),d=(i(75190),i(47507)),p=i(24310),c=i(63303),o=(i(75035),i(85162));const m={id:"get-secure-card-details",title:"Get secure card details",description:"The secure card details endpoint returns the sensitive card details when presented with a token obtained via the `generate card token` endpoint.",sidebar_label:"Get secure card details",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"The secure card details endpoint returns the sensitive card details when presented with a token obtained via the `generate card token` endpoint.\n",requestBody:{content:{"application/json":{schema:{type:"object",properties:{tokenId:{type:"string",description:"The token returned by the `Get card token` endpoint",example:"abc123"}},title:"secure-card-details-request"}}},required:!0},responses:{200:{description:"Token valid and sensitive card details returned",content:{"application/json":{schema:{type:"object",properties:{creationTime:{type:"string",description:"Timestamp expressed in unix epoch time",example:"2022-11-16T03:13:18.142Z"},modifiedTime:{type:"string",description:"Timestamp expressed in unix epoch time.",example:"2022-11-16T03:13:18.142Z"},id:{type:"string",description:"An encrypted identifier for this instance",example:"8649543161870318367"},cardNumber:{type:"string",description:"Unique number identifying the card",example:"12345"},panFirst6:{type:"string",description:"First six digits of the PAN",example:"511111"},panLast4:{type:"string",description:"Last four digits of the PAN",example:"1111"},type:{type:"string",description:"The card's type",enum:["TEMP","PHY","ONE","VIRTUAL"]},status:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},sequenceNumber:{type:"number",format:"int32",description:"Identification number generated when the card is ordered. This number is incremented each time the card is re-ordered.",example:1},cardProfileName:{type:"string",description:"Name of the card profile used to create the card",example:"immersve-card"},shippingNumber:{type:"string",description:"Number used to identify the card\u2019s shipment",example:"12345"},pinFailCount:{type:"number",format:"int32",description:"Total count of failed pin entries",example:0},reissue:{type:"boolean",description:"Boolean indicating whether the card has been reissued",example:!1},expiry:{type:"string",description:"Expiration date of the card",example:"202706"},customerNumber:{type:"string",description:"Unique number used to identify the customer",example:"12345"},embossedName:{type:"string",description:"Name embossed on the card",example:"JOE SIX"},pan:{type:"string",example:"5111111111111"},cvv2:{type:"string",description:"Full card verification value code",example:"123"}},title:"secure-card-details-response"}}}}},method:"post",path:"/v1/auth/pan/token/validate",servers:[{url:"https://mobile.apac-uat.aws.tst.e6tech.net/restful/",description:"Secure card details server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{tokenId:"abc123"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get secure card details",description:{content:"The secure card details endpoint returns the sensitive card details when presented with a token obtained via the `generate card token` endpoint.\n",type:"text/plain"},url:{path:["v1","auth","pan","token","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},l=void 0,u={unversionedId:"api-reference/get-secure-card-details",id:"api-reference/get-secure-card-details",title:"Get secure card details",description:"The secure card details endpoint returns the sensitive card details when presented with a token obtained via the `generate card token` endpoint.",source:"@site/docs/api-reference/get-secure-card-details.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/get-secure-card-details",permalink:"/api-reference/get-secure-card-details",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-secure-card-details",title:"Get secure card details",description:"The secure card details endpoint returns the sensitive card details when presented with a token obtained via the `generate card token` endpoint.",sidebar_label:"Get secure card details",hide_title:!0,hide_table_of_contents:!0,api:{tags:["card"],description:"The secure card details endpoint returns the sensitive card details when presented with a token obtained via the `generate card token` endpoint.\n",requestBody:{content:{"application/json":{schema:{type:"object",properties:{tokenId:{type:"string",description:"The token returned by the `Get card token` endpoint",example:"abc123"}},title:"secure-card-details-request"}}},required:!0},responses:{200:{description:"Token valid and sensitive card details returned",content:{"application/json":{schema:{type:"object",properties:{creationTime:{type:"string",description:"Timestamp expressed in unix epoch time",example:"2022-11-16T03:13:18.142Z"},modifiedTime:{type:"string",description:"Timestamp expressed in unix epoch time.",example:"2022-11-16T03:13:18.142Z"},id:{type:"string",description:"An encrypted identifier for this instance",example:"8649543161870318367"},cardNumber:{type:"string",description:"Unique number identifying the card",example:"12345"},panFirst6:{type:"string",description:"First six digits of the PAN",example:"511111"},panLast4:{type:"string",description:"Last four digits of the PAN",example:"1111"},type:{type:"string",description:"The card's type",enum:["TEMP","PHY","ONE","VIRTUAL"]},status:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},sequenceNumber:{type:"number",format:"int32",description:"Identification number generated when the card is ordered. This number is incremented each time the card is re-ordered.",example:1},cardProfileName:{type:"string",description:"Name of the card profile used to create the card",example:"immersve-card"},shippingNumber:{type:"string",description:"Number used to identify the card\u2019s shipment",example:"12345"},pinFailCount:{type:"number",format:"int32",description:"Total count of failed pin entries",example:0},reissue:{type:"boolean",description:"Boolean indicating whether the card has been reissued",example:!1},expiry:{type:"string",description:"Expiration date of the card",example:"202706"},customerNumber:{type:"string",description:"Unique number used to identify the customer",example:"12345"},embossedName:{type:"string",description:"Name embossed on the card",example:"JOE SIX"},pan:{type:"string",example:"5111111111111"},cvv2:{type:"string",description:"Full card verification value code",example:"123"}},title:"secure-card-details-response"}}}}},method:"post",path:"/v1/auth/pan/token/validate",servers:[{url:"https://mobile.apac-uat.aws.tst.e6tech.net/restful/",description:"Secure card details server"}],security:[{immersve_auth:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{tokenId:"abc123"},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Get secure card details",description:{content:"The secure card details endpoint returns the sensitive card details when presented with a token obtained via the `generate card token` endpoint.\n",type:"text/plain"},url:{path:["v1","auth","pan","token","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get prerequisites",permalink:"/api-reference/get-prerequisites"},next:{title:"Get card details",permalink:"/api-reference/get-card-details"}},h={},y=[{value:"Get secure card details",id:"get-secure-card-details",level:2}],g={toc:y};function b(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-secure-card-details"},"Get secure card details"),(0,r.kt)("p",null,"The secure card details endpoint returns the sensitive card details when presented with a token obtained via the ",(0,r.kt)("inlineCode",{parentName:"p"},"generate card token")," endpoint."),(0,r.kt)(n.Z,{mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"tokenId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The token returned by the `Get card token` endpoint",example:"abc123"},mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Token valid and sensitive card details returned")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"creationTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp expressed in unix epoch time",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"modifiedTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp expressed in unix epoch time.",example:"2022-11-16T03:13:18.142Z"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"An encrypted identifier for this instance",example:"8649543161870318367"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"cardNumber",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique number identifying the card",example:"12345"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"panFirst6",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"First six digits of the PAN",example:"511111"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"panLast4",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Last four digits of the PAN",example:"1111"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`TEMP`, `PHY`, `ONE`, `VIRTUAL`]",schema:{type:"string",description:"The card's type",enum:["TEMP","PHY","ONE","VIRTUAL"]},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`active`, `cancelled`, `created`, `shipped`]",schema:{type:"string",description:"Status of the card",enum:["active","cancelled","created","shipped"]},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"sequenceNumber",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"number",format:"int32",description:"Identification number generated when the card is ordered. This number is incremented each time the card is re-ordered.",example:1},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"cardProfileName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the card profile used to create the card",example:"immersve-card"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"shippingNumber",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Number used to identify the card\u2019s shipment",example:"12345"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"pinFailCount",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"number",format:"int32",description:"Total count of failed pin entries",example:0},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"reissue",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Boolean indicating whether the card has been reissued",example:!1},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"expiry",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Expiration date of the card",example:"202706"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"customerNumber",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique number used to identify the customer",example:"12345"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"embossedName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name embossed on the card",example:"JOE SIX"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"pan",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"5111111111111"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"cvv2",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Full card verification value code",example:"123"},mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:'{\n  "creationTime": "2022-11-16T03:13:18.142Z",\n  "modifiedTime": "2022-11-16T03:13:18.142Z",\n  "id": "8649543161870318367",\n  "cardNumber": "12345",\n  "panFirst6": "511111",\n  "panLast4": "1111",\n  "type": "TEMP",\n  "status": "active",\n  "sequenceNumber": 1,\n  "cardProfileName": "immersve-card",\n  "shippingNumber": "12345",\n  "pinFailCount": 0,\n  "reissue": false,\n  "expiry": "202706",\n  "customerNumber": "12345",\n  "embossedName": "JOE SIX",\n  "pan": "5111111111111",\n  "cvv2": "123"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);