"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[2673],{47899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>x,frontMatter:()=>l,metadata:()=>h,toc:()=>y});var i=n(87462),a=(n(67294),n(3905)),r=n(26389),s=n(94891),o=n(75190),c=n(47507),d=n(24310),p=n(63303),m=(n(75035),n(85162));const l={id:"list-funding-source-interactions",title:"List Funding Source Interactions",description:"Retrieves a list of Funding Source Interactions for a given Funding Source.",sidebar_label:"List Funding Source Interactions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["funding-source"],description:"Retrieves a list of Funding Source Interactions for a given Funding Source.\n",parameters:[{name:"fundingSourceId",in:"path",description:"ID for the Funding Source.",example:"2be03cd65da12fe29b8910af7b4b85e7",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"amount of records to return (max 100)",required:!1,schema:{type:"number"}},{name:"cursor",in:"query",description:"cursor to retrieve the next page",required:!1,schema:{type:"string"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"ID of the Funding Source Interaction.",example:"f0220f084a182e3f4b4d605cda1d3340"},fundingSourceId:{type:"string",description:"The ID of the Funding Source that this Interaction relates to.",example:"2be03cd65da12fe29b8910af7b4b85e7"},accountId:{type:"string",description:"The ID of the account that this Interaction relates to.",example:"979254377d0e05002242d038926a5691"},type:{type:"string",enum:["Deposit","Withdrawal","Refund","Payment"],description:"The type of Funding Source Interaction:\n  * `Deposit` - Funds added to the Funding Source.  \n  * `Withdrawal` - Funds removed from the Funding Source.\n  * `Refund` - Return of paid funds to the Funding Source. \n  * `Payment` - Transfer of funds from the Funding Source.\n",example:"Payment"},status:{type:"string",description:"The current status of the interaction. It will vary depending on the interaction type.",example:"processing-successful"},amount:{type:"number",description:"The minor units amount of the transaction.",example:2e4},token:{type:"string",description:"The token used in the transaction.",example:"USDC"},createdAt:{type:"string",description:"Date time on which the interaction was created.",example:"2023-11-15T00:48:48.902Z"},modifiedAt:{type:"string",description:"Last modified date of this interaction.",example:"2023-11-15T00:49:59.261Z"},description:{type:"string",description:"A description of the interaction.",example:"1 Queen Street Auckland NZ"},creditOrDebitIndicator:{type:"string",description:"The credit or debit indicator of the interaction.",example:"credit"},context:{type:"object",properties:{ref:{type:"string",description:"A context reference based on the type of the interaction. It could be a `transactionId` in the case of a payment, or an `eventId` in the case of an smart contract event.",example:"1000000488078"},type:{type:"string",description:"A context type for the context reference, which will depend on the interaction type.",enum:["card-transaction","smart-contract-event"],example:"smart-contract-event"},blockNumber:{type:"string",description:"The chain block number in which the transactions was mined, when applicable.",example:"42409064"},transactionHash:{type:"string",description:"The blockchain transaction hash on which the interaction happened, when applicable.",example:"0x3c561ba7fb04b8176f5478d26172d7cef02cf4ac6806e047ffaf5af70ccf1e69"}}},channel:{type:"object",properties:{id:{type:"string",description:"Funding Channel primary identifier.",example:"315bad4e81ce0f26966a41b9d451638b"},type:{type:"string",description:"The type of Funding Channel.",example:"polygon-usdc-universal-evm-live"},strategy:{type:"string",description:"The funding type strategy.",example:"universal-evm"}}}},title:"funding-source-interaction"}},pageInfo:{type:"object",description:"Page info for paginated results, undefined if no page info",properties:{nextCursor:{type:"string",description:"Cursor for next page, undefined if no more pages",example:"dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ=="}},title:"page-info"}},title:"list-funding-source-interactions"}}}},403:{description:"No Authorization to access resource",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/funding-sources/{fundingSourceId}/interactions",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"List Funding Source Interactions",description:{content:"Retrieves a list of Funding Source Interactions for a given Funding Source.\n",type:"text/plain"},url:{path:["api","funding-sources",":fundingSourceId","interactions"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"amount of records to return (max 100)",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to retrieve the next page",type:"text/plain"},key:"cursor",value:""}],variable:[{disabled:!1,description:{content:"(Required) ID for the Funding Source.",type:"text/plain"},type:"any",value:"",key:"fundingSourceId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},u=void 0,h={unversionedId:"api-reference/list-funding-source-interactions",id:"api-reference/list-funding-source-interactions",title:"List Funding Source Interactions",description:"Retrieves a list of Funding Source Interactions for a given Funding Source.",source:"@site/docs/api-reference/list-funding-source-interactions.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/list-funding-source-interactions",permalink:"/api-reference/list-funding-source-interactions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-funding-source-interactions",title:"List Funding Source Interactions",description:"Retrieves a list of Funding Source Interactions for a given Funding Source.",sidebar_label:"List Funding Source Interactions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["funding-source"],description:"Retrieves a list of Funding Source Interactions for a given Funding Source.\n",parameters:[{name:"fundingSourceId",in:"path",description:"ID for the Funding Source.",example:"2be03cd65da12fe29b8910af7b4b85e7",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"amount of records to return (max 100)",required:!1,schema:{type:"number"}},{name:"cursor",in:"query",description:"cursor to retrieve the next page",required:!1,schema:{type:"string"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"ID of the Funding Source Interaction.",example:"f0220f084a182e3f4b4d605cda1d3340"},fundingSourceId:{type:"string",description:"The ID of the Funding Source that this Interaction relates to.",example:"2be03cd65da12fe29b8910af7b4b85e7"},accountId:{type:"string",description:"The ID of the account that this Interaction relates to.",example:"979254377d0e05002242d038926a5691"},type:{type:"string",enum:["Deposit","Withdrawal","Refund","Payment"],description:"The type of Funding Source Interaction:\n  * `Deposit` - Funds added to the Funding Source.  \n  * `Withdrawal` - Funds removed from the Funding Source.\n  * `Refund` - Return of paid funds to the Funding Source. \n  * `Payment` - Transfer of funds from the Funding Source.\n",example:"Payment"},status:{type:"string",description:"The current status of the interaction. It will vary depending on the interaction type.",example:"processing-successful"},amount:{type:"number",description:"The minor units amount of the transaction.",example:2e4},token:{type:"string",description:"The token used in the transaction.",example:"USDC"},createdAt:{type:"string",description:"Date time on which the interaction was created.",example:"2023-11-15T00:48:48.902Z"},modifiedAt:{type:"string",description:"Last modified date of this interaction.",example:"2023-11-15T00:49:59.261Z"},description:{type:"string",description:"A description of the interaction.",example:"1 Queen Street Auckland NZ"},creditOrDebitIndicator:{type:"string",description:"The credit or debit indicator of the interaction.",example:"credit"},context:{type:"object",properties:{ref:{type:"string",description:"A context reference based on the type of the interaction. It could be a `transactionId` in the case of a payment, or an `eventId` in the case of an smart contract event.",example:"1000000488078"},type:{type:"string",description:"A context type for the context reference, which will depend on the interaction type.",enum:["card-transaction","smart-contract-event"],example:"smart-contract-event"},blockNumber:{type:"string",description:"The chain block number in which the transactions was mined, when applicable.",example:"42409064"},transactionHash:{type:"string",description:"The blockchain transaction hash on which the interaction happened, when applicable.",example:"0x3c561ba7fb04b8176f5478d26172d7cef02cf4ac6806e047ffaf5af70ccf1e69"}}},channel:{type:"object",properties:{id:{type:"string",description:"Funding Channel primary identifier.",example:"315bad4e81ce0f26966a41b9d451638b"},type:{type:"string",description:"The type of Funding Channel.",example:"polygon-usdc-universal-evm-live"},strategy:{type:"string",description:"The funding type strategy.",example:"universal-evm"}}}},title:"funding-source-interaction"}},pageInfo:{type:"object",description:"Page info for paginated results, undefined if no page info",properties:{nextCursor:{type:"string",description:"Cursor for next page, undefined if no more pages",example:"dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ=="}},title:"page-info"}},title:"list-funding-source-interactions"}}}},403:{description:"No Authorization to access resource",content:{"application/json":{schema:{type:"object",properties:{statusCode:{type:"integer",example:403},statusName:{type:"string",example:"Forbidden"},errorCode:{type:"string",example:"FORBIDDEN"},reason:{type:"string",example:"Unauthorized"}},required:["statusCode","statusName","errorCode"],title:"api-error-403"}}}}},method:"get",path:"/api/funding-sources/{fundingSourceId}/interactions",servers:[{url:"https://api.immersve.com/",description:"Sandbox server"}],security:[{immersve_auth:[]},{apiKeyHeader:[],apiSecretHeader:[],accountIdHeader:[]}],securitySchemes:{immersve_auth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},apiKeyHeader:{type:"apiKey",in:"header",name:"x-api-key",description:"See Guides -> Authentication for instructions"},apiKeyHeaderWebhook:{type:"apiKey",in:"header",name:"APIKEY",description:"The API key provided by you to Immersve"},apiSecretHeader:{type:"apiKey",in:"header",name:"x-api-secret"},accountIdHeader:{type:"apiKey",in:"header",name:"x-account-id",description:"The target account ID. If targeting the root account, this can be omitted (for example creating an account)"}},info:{version:"1.0.0",title:"Immersve API"},postman:{name:"List Funding Source Interactions",description:{content:"Retrieves a list of Funding Source Interactions for a given Funding Source.\n",type:"text/plain"},url:{path:["api","funding-sources",":fundingSourceId","interactions"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"amount of records to return (max 100)",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to retrieve the next page",type:"text/plain"},key:"cursor",value:""}],variable:[{disabled:!1,description:{content:"(Required) ID for the Funding Source.",type:"text/plain"},type:"any",value:"",key:"fundingSourceId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-reference/immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Create a funding source for an account",permalink:"/api-reference/create-a-funding-source-for-an-account"},next:{title:"Funding Channels",permalink:"/api-reference/funding-channel"}},f={},y=[{value:"List Funding Source Interactions",id:"list-funding-source-interactions",level:2}],g={toc:y},b="wrapper";function x(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"list-funding-source-interactions"},"List Funding Source Interactions"),(0,a.kt)("p",null,"Retrieves a list of Funding Source Interactions for a given Funding Source."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"fundingSourceId",in:"path",description:"ID for the Funding Source.",example:"2be03cd65da12fe29b8910af7b4b85e7",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"amount of records to return (max 100)",required:!1,schema:{type:"number"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"cursor to retrieve the next page",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Successful operation")),(0,a.kt)("div",null,(0,a.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(p.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"items"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the Funding Source Interaction.",example:"f0220f084a182e3f4b4d605cda1d3340"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"fundingSourceId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the Funding Source that this Interaction relates to.",example:"2be03cd65da12fe29b8910af7b4b85e7"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"accountId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the account that this Interaction relates to.",example:"979254377d0e05002242d038926a5691"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Deposit`, `Withdrawal`, `Refund`, `Payment`]",schema:{type:"string",enum:["Deposit","Withdrawal","Refund","Payment"],description:"The type of Funding Source Interaction:\n  * `Deposit` - Funds added to the Funding Source.  \n  * `Withdrawal` - Funds removed from the Funding Source.\n  * `Refund` - Return of paid funds to the Funding Source. \n  * `Payment` - Transfer of funds from the Funding Source.\n",example:"Payment"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The current status of the interaction. It will vary depending on the interaction type.",example:"processing-successful"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The minor units amount of the transaction.",example:2e4},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"token",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The token used in the transaction.",example:"USDC"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Date time on which the interaction was created.",example:"2023-11-15T00:48:48.902Z"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"modifiedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Last modified date of this interaction.",example:"2023-11-15T00:49:59.261Z"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A description of the interaction.",example:"1 Queen Street Auckland NZ"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"creditOrDebitIndicator",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The credit or debit indicator of the interaction.",example:"credit"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"context"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"ref",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A context reference based on the type of the interaction. It could be a `transactionId` in the case of a payment, or an `eventId` in the case of an smart contract event.",example:"1000000488078"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`card-transaction`, `smart-contract-event`]",schema:{type:"string",description:"A context type for the context reference, which will depend on the interaction type.",enum:["card-transaction","smart-contract-event"],example:"smart-contract-event"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"blockNumber",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The chain block number in which the transactions was mined, when applicable.",example:"42409064"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"transactionHash",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The blockchain transaction hash on which the interaction happened, when applicable.",example:"0x3c561ba7fb04b8176f5478d26172d7cef02cf4ac6806e047ffaf5af70ccf1e69"},mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"channel"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Funding Channel primary identifier.",example:"315bad4e81ce0f26966a41b9d451638b"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The type of Funding Channel.",example:"polygon-usdc-universal-evm-live"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"strategy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The funding type strategy.",example:"universal-evm"},mdxType:"SchemaItem"})))),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"pageInfo"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Page info for paginated results, undefined if no page info")),(0,a.kt)(d.Z,{collapsible:!1,name:"nextCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Cursor for next page, undefined if no more pages",example:"dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ=="},mdxType:"SchemaItem"}))))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'{\n  "items": [\n    {\n      "id": "f0220f084a182e3f4b4d605cda1d3340",\n      "fundingSourceId": "2be03cd65da12fe29b8910af7b4b85e7",\n      "accountId": "979254377d0e05002242d038926a5691",\n      "type": "Payment",\n      "status": "processing-successful",\n      "amount": 20000,\n      "token": "USDC",\n      "createdAt": "2023-11-15T00:48:48.902Z",\n      "modifiedAt": "2023-11-15T00:49:59.261Z",\n      "description": "1 Queen Street Auckland NZ",\n      "creditOrDebitIndicator": "credit",\n      "context": {\n        "ref": "1000000488078",\n        "type": "smart-contract-event",\n        "blockNumber": "42409064",\n        "transactionHash": "0x3c561ba7fb04b8176f5478d26172d7cef02cf4ac6806e047ffaf5af70ccf1e69"\n      },\n      "channel": {\n        "id": "315bad4e81ce0f26966a41b9d451638b",\n        "type": "polygon-usdc-universal-evm-live",\n        "strategy": "universal-evm"\n      }\n    }\n  ],\n  "pageInfo": {\n    "nextCursor": "dGhlIG5leHQgY3Vyc29yIGdvZXMgaGVyZQ=="\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"No Authorization to access resource")),(0,a.kt)("div",null,(0,a.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(p.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"},mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);