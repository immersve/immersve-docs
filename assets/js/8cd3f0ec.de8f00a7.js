(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[5589],{43046:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>y});var s=t(87462),r=(t(67294),t(3905)),i=(t(19959),t(26389)),n=t(94891),c=(t(74933),t(47507)),o=t(24310),m=t(63303),d=(t(75035),t(85162));const p={id:"create-an-account",title:"Create an Account",description:"Create an Account",sidebar_label:"Create an Account",hide_title:!0,hide_table_of_contents:!0,api:{tags:["accounts"],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],requestBody:{content:{"application/json":{schema:{type:"object",required:["accountReference","firstName","lastName","email","phoneNumber","address"],properties:{accountReference:{type:"string",description:"The external account refernce generated by the caller.",minLength:1,maxLength:256},firstName:{type:"string",description:"The users first name",minLength:1,maxLength:64},lastName:{type:"string",description:"The users last name",minLength:1,maxLength:64},cardName:{type:"string",description:"The personalised card name",maxLength:26},birthDate:{type:"string",description:"The users birth date, formatted as YYYY-MM-DD",maxLength:10},email:{type:"string",description:"The users email address",minLength:1,maxLength:303},phoneNumber:{type:"string",description:"The users phone number, formatted as +xxxxxx",minLength:1,maxLength:38},address:{type:"object",required:["country","city","state","address1","address2","zipCode"],properties:{country:{type:"string",description:"The users country code, as a ISO 3166-1 alpha-2-code",example:"US",minLength:2,maxLength:1},city:{type:"string",description:"The users city",minLength:1,maxLength:50},state:{type:"string",description:"The users state",minLength:1,maxLength:12},address1:{type:"string",description:"Address line 1",minLength:1,maxLength:50},address2:{type:"string",description:"Address line 2",minLength:1,maxLength:50},address3:{type:"string",description:"Address line 3",maxLength:50},zipCode:{type:"string",description:"Zip code",minLength:1,maxLength:20}}}}}}},required:!0},responses:{201:{content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean"},accountId:{type:"string"}}}}}},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean"},errorCode:{description:"The error code",type:"string"},errorMap:{description:"An array of key-value pairs describing field errors",type:"array",items:{type:"object"}}},example:{success:!1,errorCode:"INVALID_BODY",errorMap:{firstName:"Required"}}}}}}},description:"Create an Account",method:"post",path:"/api/accounts",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{accountReference:"string",firstName:"string",lastName:"string",cardName:"string",birthDate:"string",email:"string",phoneNumber:"string",address:{country:"US",city:"string",state:"string",address1:"string",address2:"string",address3:"string",zipCode:"string"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Create an Account",description:{type:"text/plain"},url:{path:["api","accounts"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api"},l=void 0,u={unversionedId:"api-reference/create-an-account",id:"api-reference/create-an-account",title:"Create an Account",description:"Create an Account",source:"@site/docs/api-reference/create-an-account.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/create-an-account",permalink:"/api-reference/create-an-account",draft:!1,tags:[],version:"current",frontMatter:{id:"create-an-account",title:"Create an Account",description:"Create an Account",sidebar_label:"Create an Account",hide_title:!0,hide_table_of_contents:!0,api:{tags:["accounts"],security:[{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],requestBody:{content:{"application/json":{schema:{type:"object",required:["accountReference","firstName","lastName","email","phoneNumber","address"],properties:{accountReference:{type:"string",description:"The external account refernce generated by the caller.",minLength:1,maxLength:256},firstName:{type:"string",description:"The users first name",minLength:1,maxLength:64},lastName:{type:"string",description:"The users last name",minLength:1,maxLength:64},cardName:{type:"string",description:"The personalised card name",maxLength:26},birthDate:{type:"string",description:"The users birth date, formatted as YYYY-MM-DD",maxLength:10},email:{type:"string",description:"The users email address",minLength:1,maxLength:303},phoneNumber:{type:"string",description:"The users phone number, formatted as +xxxxxx",minLength:1,maxLength:38},address:{type:"object",required:["country","city","state","address1","address2","zipCode"],properties:{country:{type:"string",description:"The users country code, as a ISO 3166-1 alpha-2-code",example:"US",minLength:2,maxLength:1},city:{type:"string",description:"The users city",minLength:1,maxLength:50},state:{type:"string",description:"The users state",minLength:1,maxLength:12},address1:{type:"string",description:"Address line 1",minLength:1,maxLength:50},address2:{type:"string",description:"Address line 2",minLength:1,maxLength:50},address3:{type:"string",description:"Address line 3",maxLength:50},zipCode:{type:"string",description:"Zip code",minLength:1,maxLength:20}}}}}}},required:!0},responses:{201:{content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean"},accountId:{type:"string"}}}}}},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean"},errorCode:{description:"The error code",type:"string"},errorMap:{description:"An array of key-value pairs describing field errors",type:"array",items:{type:"object"}}},example:{success:!1,errorCode:"INVALID_BODY",errorMap:{firstName:"Required"}}}}}}},description:"Create an Account",method:"post",path:"/api/accounts",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account id. If targeting the root account, this can be omitted (for example creating an account)"}},jsonRequestBodyExample:{accountReference:"string",firstName:"string",lastName:"string",cardName:"string",birthDate:"string",email:"string",phoneNumber:"string",address:{country:"US",city:"string",state:"string",address1:"string",address2:"string",address3:"string",zipCode:"string"}},info:{version:"1.0.0",title:"Immersve API","x-logo":{url:"https://www.immersve.com/img/immersvelogo-bf8a9fe8408d733c996c2f7d8251e521.svg",altText:"Immersve logo"}},postman:{name:"Create an Account",description:{type:"text/plain"},url:{path:["api","accounts"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"api-reference/immersve-api"},sidebar:"primarySidebar",previous:{title:"Accounts",permalink:"/api-reference/accounts"},next:{title:"Update an Account",permalink:"/api-reference/update-an-account"}},h={},y=[{value:"Create an Account",id:"create-an-account",level:2}],g={toc:y};function f(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-an-account"},"Create an Account"),(0,r.kt)("p",null,"Create an Account"),(0,r.kt)(n.Z,{mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"accountReference",required:!0,schemaDescription:"The external account refernce generated by the caller.",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 256 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"firstName",required:!0,schemaDescription:"The users first name",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 64 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lastName",required:!0,schemaDescription:"The users last name",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 64 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"cardName",required:!1,schemaDescription:"The personalised card name",schemaName:"string",qualifierMessage:"**Possible values:** `<= 26 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"birthDate",required:!1,schemaDescription:"The users birth date, formatted as YYYY-MM-DD",schemaName:"string",qualifierMessage:"**Possible values:** `<= 10 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"email",required:!0,schemaDescription:"The users email address",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 303 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"phoneNumber",required:!0,schemaDescription:"The users phone number, formatted as +xxxxxx",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 38 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"address"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"country",required:!0,schemaDescription:"The users country code, as a ISO 3166-1 alpha-2-code",schemaName:"string",qualifierMessage:"**Possible values:** `>= 2 characters` and `<= 1 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"city",required:!0,schemaDescription:"The users city",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 50 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"state",required:!0,schemaDescription:"The users state",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 12 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"address1",required:!0,schemaDescription:"Address line 1",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 50 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"address2",required:!0,schemaDescription:"Address line 2",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 50 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"address3",required:!1,schemaDescription:"Address line 3",schemaName:"string",qualifierMessage:"**Possible values:** `<= 50 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"zipCode",required:!0,schemaDescription:"Zip code",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 20 characters`",defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,r.kt)("div",null),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"success",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"accountId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "success": true,\n  "accountId": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(d.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Error")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"success",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!1,schemaDescription:"The error code",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorMap",required:!1,schemaDescription:"An array of key-value pairs describing field errors",schemaName:"object[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "success": false,\n  "errorCode": "INVALID_BODY",\n  "errorMap": {\n    "firstName": "Required"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0},11748:(e,a,t)=>{var s={"./locale":89234,"./locale.js":89234};function r(e){var a=i(e);return t(a)}function i(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=i,e.exports=r,r.id=11748}}]);