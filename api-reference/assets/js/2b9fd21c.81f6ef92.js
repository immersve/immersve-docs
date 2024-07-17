"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[516],{43042:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>Z,contentTitle:()=>v,default:()=>q,frontMatter:()=>g,metadata:()=>y,toc:()=>A});var i=s(62540),t=s(43023),c=s(71552),n=s.n(c),r=(s(77180),s(3188)),l=s.n(r),o=(s(81738),s(64544)),d=s.n(o),m=(s(50449),s(81730)),p=s.n(m),u=s(97672),h=s.n(u),x=s(88443),f=s.n(x),b=(s(18565),s(81381)),j=(s(26269),s(22491));const g={id:"list-accounts",title:"List Accounts",description:"Get accounts for authenticated subject",sidebar_label:"List Accounts",hide_title:!0,hide_table_of_contents:!0,api:"eJydVttu4zYQ/RWCTy0gO5bt2IEeCrhNNnW3yC6aLII2MAqKHFvcSKRCjoy4hv69GEryLdnC3SfLw7memTPklqNYeZ48cSGlrQx6voi4Ai+dLlFbwxN+C8i6U7a0jokKMzCopUBQzFfpV5DII+7Al9Z48DzZ8uFgQD/Hru4rKcH7ZZUzW4ITQRxxaQ2CQdIXZZmTY23NxVdPRlvuZQaFoC/clMATLpwTGx5xjVD4A7ntMikduUfdpKLVgY5Hp82Knxb5kAGrjH6poKuVza95xOFVFGVOhjBOJxMVKwUyXV7GV8vL5Wg0NZdwKcbLydWQ1xGXDgiTGZ4RUBfgURQls8tdyGDfYLIPPBwMh7047sWTh8EoiUdJfNWPx8O/KGBhlV7q74iYC7/rKmu8yP8IffU2dCkcGnCzxsf8TIxbqwOQGWYCGWba74Qp5NasPEN7lI2cqquxmKbLWI7Go+FoOhqqYZzKyUDFUz8dTygt7WcS9RoO0kmtzUGYN/k8ZoAZOIbZvukhC7Jn1jFj8TABdBXUUev1nGI7p0Ez4mCqgqgmhVOZzRU4mmFFVEIa5xYbvqgpisZQdOuDH4hy7bHXMbLXsY7XNdmNB6O3vLuzbFZhZp3+JzSZoaXkwHvmwNvKSeh/Bw+/wTePAiv/i1WHMGmDsAoV7/AcD0Z11GrfieJdUPfd/2BdqpUCQ1CAc9adRHjP5tMfP8+vr2/uyMaBaAv5tsEXI1qcQPE6GL1U2oGivh3UdZT2YTqLg86VuhcOetSTumlPAZhZxRO+ggCcwIwn/EKU+mK3gSPuwa3B0V7e8srlPOEZYumTC1Ls66IA59fQl7Z4M3f3wqjUvrLGBa8X5E1WjkaM3HXGf1OhPHla1BF1W3+Eza8gaCaTp0VEknuQDvBI2HF9Lzz0f0/z0a7c4yg7yKkMqi9oEjVBuDAUzccH6wqBPOG/PT5Qy47z2u//ICbyUMVZcxxxE2aIv/YI+eegcIINALuttALPej8FRrTXGFGCbjZtPLpK0n9/Gv8R0sza57PTmH2ef7z58929MPs8Z8+wYaWza61AsXTDNrYiVs5b4Nroxz34XwD4YBr8nLbtfD+NZU+rd+tA4Vb7xwGbX/fZfNlKtVmFxeqs3WlEzZqXwrAUmC000gPiB0K+pWB7A5oVE6az+jEQUZulpcyJF00GcX/QH/A93zroCN5wQVmPhQiEbwv6XXtksz3Njira7tff+U+eFkeEV7woc6HDcgqM3bbcfiKQeXT0vsqsRzrZblPh4YvL65rELxW4TcO0tXBapFQWEbTrDPGX5jrhMymhpATWIq+aTp7sayLmbtnc3jzwuv4XxZVhPg==",sidebar_class_name:"get api-method",info_path:"immersve-api",custom_edit_url:null},v=void 0,y={id:"list-accounts",title:"List Accounts",description:"Get accounts for authenticated subject",source:"@site/docs/list-accounts.api.mdx",sourceDirName:".",slug:"/list-accounts",permalink:"/api-reference/list-accounts",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-accounts",title:"List Accounts",description:"Get accounts for authenticated subject",sidebar_label:"List Accounts",hide_title:!0,hide_table_of_contents:!0,api:"eJydVttu4zYQ/RWCTy0gO5bt2IEeCrhNNnW3yC6aLII2MAqKHFvcSKRCjoy4hv69GEryLdnC3SfLw7memTPklqNYeZ48cSGlrQx6voi4Ai+dLlFbwxN+C8i6U7a0jokKMzCopUBQzFfpV5DII+7Al9Z48DzZ8uFgQD/Hru4rKcH7ZZUzW4ITQRxxaQ2CQdIXZZmTY23NxVdPRlvuZQaFoC/clMATLpwTGx5xjVD4A7ntMikduUfdpKLVgY5Hp82Knxb5kAGrjH6poKuVza95xOFVFGVOhjBOJxMVKwUyXV7GV8vL5Wg0NZdwKcbLydWQ1xGXDgiTGZ4RUBfgURQls8tdyGDfYLIPPBwMh7047sWTh8EoiUdJfNWPx8O/KGBhlV7q74iYC7/rKmu8yP8IffU2dCkcGnCzxsf8TIxbqwOQGWYCGWba74Qp5NasPEN7lI2cqquxmKbLWI7Go+FoOhqqYZzKyUDFUz8dTygt7WcS9RoO0kmtzUGYN/k8ZoAZOIbZvukhC7Jn1jFj8TABdBXUUev1nGI7p0Ez4mCqgqgmhVOZzRU4mmFFVEIa5xYbvqgpisZQdOuDH4hy7bHXMbLXsY7XNdmNB6O3vLuzbFZhZp3+JzSZoaXkwHvmwNvKSeh/Bw+/wTePAiv/i1WHMGmDsAoV7/AcD0Z11GrfieJdUPfd/2BdqpUCQ1CAc9adRHjP5tMfP8+vr2/uyMaBaAv5tsEXI1qcQPE6GL1U2oGivh3UdZT2YTqLg86VuhcOetSTumlPAZhZxRO+ggCcwIwn/EKU+mK3gSPuwa3B0V7e8srlPOEZYumTC1Ls66IA59fQl7Z4M3f3wqjUvrLGBa8X5E1WjkaM3HXGf1OhPHla1BF1W3+Eza8gaCaTp0VEknuQDvBI2HF9Lzz0f0/z0a7c4yg7yKkMqi9oEjVBuDAUzccH6wqBPOG/PT5Qy47z2u//ICbyUMVZcxxxE2aIv/YI+eegcIINALuttALPej8FRrTXGFGCbjZtPLpK0n9/Gv8R0sza57PTmH2ef7z58929MPs8Z8+wYaWza61AsXTDNrYiVs5b4Nroxz34XwD4YBr8nLbtfD+NZU+rd+tA4Vb7xwGbX/fZfNlKtVmFxeqs3WlEzZqXwrAUmC000gPiB0K+pWB7A5oVE6az+jEQUZulpcyJF00GcX/QH/A93zroCN5wQVmPhQiEbwv6XXtksz3Njira7tff+U+eFkeEV7woc6HDcgqM3bbcfiKQeXT0vsqsRzrZblPh4YvL65rELxW4TcO0tXBapFQWEbTrDPGX5jrhMymhpATWIq+aTp7sayLmbtnc3jzwuv4XxZVhPg==",sidebar_class_name:"get api-method",info_path:"immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Accounts",permalink:"/api-reference/accounts"},next:{title:"Create Account",permalink:"/api-reference/create-account"}},Z={},A=[];function z(e){const a={p:"p",...(0,t.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"List Accounts"}),"\n",(0,i.jsx)(l(),{method:"get",path:"/api/accounts"}),"\n",(0,i.jsx)(a.p,{children:"Get accounts for authenticated subject"}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(j.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Successful operation"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(j.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"Array ["})})}),(0,i.jsx)(h(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The unique account ID",example:"e4b66d1ddecbf518f5f337n5e5a4f682"}}),(0,i.jsx)(h(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of account creation",example:"2022-11-16T03:13:18.142Z"}}),(0,i.jsx)(h(),{collapsible:!1,name:"modifiedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp of last account modification",example:"2022-11-18T03:13:18.142Z"}}),(0,i.jsx)(h(),{collapsible:!1,name:"partnerAccountId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The partner account ID that this account belongs to",example:"c7d84a7bf1c34323732d21bc60d17s746"}}),(0,i.jsx)(h(),{collapsible:!1,name:"isActive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the account is active or not",example:!0}}),(0,i.jsx)(h(),{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`cardholder`, `identity`, `partner`]",schema:{type:"string",description:"The account type",enum:["cardholder","identity","partner"]}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(a.p,{children:"]"})})})]})]})}),(0,i.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'[\n  {\n    "id": "e4b66d1ddecbf518f5f337n5e5a4f682",\n    "createdAt": "2022-11-16T03:13:18.142Z",\n    "modifiedAt": "2022-11-18T03:13:18.142Z",\n    "partnerAccountId": "c7d84a7bf1c34323732d21bc60d17s746",\n    "isActive": true,\n    "type": "cardholder"\n  }\n]',language:"json"})})]})})})})]}),(0,i.jsxs)(j.default,{label:"403",value:"403",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"No Authorization to access resource."})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(j.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(h(),{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403}}),(0,i.jsx)(h(),{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"}}),(0,i.jsx)(h(),{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"}}),(0,i.jsx)(h(),{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"}})]})]})}),(0,i.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json"})})]})})})})]})]})})})]})}function q(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(z,{...e})}):z(e)}}}]);