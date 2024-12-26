"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[7166],{77240:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>y,contentTitle:()=>N,default:()=>k,frontMatter:()=>b,metadata:()=>v,toc:()=>q});var i=a(62540),r=a(43023),n=a(71552),t=a.n(n),l=(a(77180),a(3188)),o=a.n(l),d=(a(81738),a(64544)),p=a.n(d),c=(a(50449),a(81730)),m=a.n(c),u=a(97672),h=a.n(u),x=a(88443),j=a.n(x),f=(a(18565),a(81381)),g=(a(26269),a(22491));const b={id:"create-support-session",title:"Create Support Session",description:"This endpoint can be used to create a support session for a cardholder account",sidebar_label:"Create Support Session",hide_title:!0,hide_table_of_contents:!0,api:"eJy1V21z2zYM/is8fNpy8suSpun0YXd53XnrtV3s3D44vpUWYYutRKok5CTz+b/3QMqvcXPJ2vmLJRIAgQcPQGgOJKce0iH4uqqsIxglYCt0krQ1PQUpZA4lYavZb3n0XlsDCSj0mdMVC0IKg1x7gUZVVhsSmTRijKL2qARZEW0IKRororEiJtYJKTLpVG4LhU7ILLO1oVs+wOGXGj2dWfUA6RwyawgN8aOsqkJnwcfOJ8/nz8FnOZaSn+ihQkjBjj9hRo0d7VBxmI39nuJAK8ehkkYfjK621jY8OW2me4JF0bsQdiIoxz3uC8olCYOo/DJkSADvZVkVbPb1sTzBNzjpqsOjrurK1+PJyfExdk/U0a847h7CYpEAaQrC30jAgmXWoZGrMSz4yhofIzrsdvlv2/d+nWXo/aQuxCrRkPwYdGtXPMaVF5+F6M312yWkOzzZAi8nqnza6eRYVG1dluj8DNuZLTvPgK3l0NcFMXqLBF7tA+g60k5MNBbKC+lQaDOThVbfA9M2Jp4k1f7cKtyQ1YZwim4z2Ffd7iJppN/JEvcBuUbmTCrReA+LBNA563bO2Kd1evHP9eVfN5f9wUrLb6hI5+QDJKAJS/+0qcv7CjNCJeJeIhxmqGeohKnLMbpd0g43gdiKc9P70TqpstKtsNHi1C2TePQ4iTcendBeGEtCFoW9i42oQjexrgwckxnLijtNeXh3KL01gp1AJbQJix9Xbny8Nbfm4ODq/fVZ7+Li8t3Bwa3pGV9PJjrTaIhtlzqQzO8/qn37XYX2Xxl09AIGXVk31kqheQF/VohAyK1sAvm2wo2RNeXW6X9RwQ8kxFEgxCKBEim3fHdV1gfkJOWQQkdWurPTDzyfgm6GTPlh06xWLUZWeqvDPGpbb/UMxemHnugHG7BIdk0QenraxoCbzaaNEbuU1U7TQ/DpNDRsMbCf0UA6HPEhu2sJDKSbIonTeAOt5Cot/sSHKMIvfcwcPmd7r8UN1/pM1MjFbWdWqWcIGN4gCCmMUbpAzvhwZV0pCVL44+/QeFa+rDtPpXkhAc045ShVUDeBxnDf4uR/DgI7Vxyi+L3WCr1o/SZOa8rRUFNoYeTQxpOrQ1H65dHLyF90uo9Ki8dgPd9M1GiF6+XxpUjR7nKw6F20RW/SrGozjZ3L2pVEIognsWYAs6Um7mY/cdRNBcZpjHWlWWr9HOqQe9D1eui6XFbs1mz0jOGFY51Y1uO6irH80u62u7Au3F5TEsx81uBSLWWgTwPNeRwa+80o0N8/eG7Mhf/HDNokkfCeOlUhdWiMzUQT28qQM8w0320sowRy7j/pEObzsfR444rFgpe/1OiamptJp+WYEeGCXNKDq56JncJ5DK41YD9YvKgjqXZuDi7mqMHFWNGTsqONFvnhfX/AJdkM2WVo9+DkHY928g5SAP4iiKWSzuPaHAppprWcsmy0yb+vhRY75A==",sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},N=void 0,v={id:"create-support-session",title:"Create Support Session",description:"This endpoint can be used to create a support session for a cardholder account",source:"@site/docs/create-support-session.api.mdx",sourceDirName:".",slug:"/create-support-session",permalink:"/api-reference/create-support-session",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-support-session",title:"Create Support Session",description:"This endpoint can be used to create a support session for a cardholder account",sidebar_label:"Create Support Session",hide_title:!0,hide_table_of_contents:!0,api:"eJy1V21z2zYM/is8fNpy8suSpun0YXd53XnrtV3s3D44vpUWYYutRKok5CTz+b/3QMqvcXPJ2vmLJRIAgQcPQGgOJKce0iH4uqqsIxglYCt0krQ1PQUpZA4lYavZb3n0XlsDCSj0mdMVC0IKg1x7gUZVVhsSmTRijKL2qARZEW0IKRororEiJtYJKTLpVG4LhU7ILLO1oVs+wOGXGj2dWfUA6RwyawgN8aOsqkJnwcfOJ8/nz8FnOZaSn+ihQkjBjj9hRo0d7VBxmI39nuJAK8ehkkYfjK621jY8OW2me4JF0bsQdiIoxz3uC8olCYOo/DJkSADvZVkVbPb1sTzBNzjpqsOjrurK1+PJyfExdk/U0a847h7CYpEAaQrC30jAgmXWoZGrMSz4yhofIzrsdvlv2/d+nWXo/aQuxCrRkPwYdGtXPMaVF5+F6M312yWkOzzZAi8nqnza6eRYVG1dluj8DNuZLTvPgK3l0NcFMXqLBF7tA+g60k5MNBbKC+lQaDOThVbfA9M2Jp4k1f7cKtyQ1YZwim4z2Ffd7iJppN/JEvcBuUbmTCrReA+LBNA563bO2Kd1evHP9eVfN5f9wUrLb6hI5+QDJKAJS/+0qcv7CjNCJeJeIhxmqGeohKnLMbpd0g43gdiKc9P70TqpstKtsNHi1C2TePQ4iTcendBeGEtCFoW9i42oQjexrgwckxnLijtNeXh3KL01gp1AJbQJix9Xbny8Nbfm4ODq/fVZ7+Li8t3Bwa3pGV9PJjrTaIhtlzqQzO8/qn37XYX2Xxl09AIGXVk31kqheQF/VohAyK1sAvm2wo2RNeXW6X9RwQ8kxFEgxCKBEim3fHdV1gfkJOWQQkdWurPTDzyfgm6GTPlh06xWLUZWeqvDPGpbb/UMxemHnugHG7BIdk0QenraxoCbzaaNEbuU1U7TQ/DpNDRsMbCf0UA6HPEhu2sJDKSbIonTeAOt5Cot/sSHKMIvfcwcPmd7r8UN1/pM1MjFbWdWqWcIGN4gCCmMUbpAzvhwZV0pCVL44+/QeFa+rDtPpXkhAc045ShVUDeBxnDf4uR/DgI7Vxyi+L3WCr1o/SZOa8rRUFNoYeTQxpOrQ1H65dHLyF90uo9Ki8dgPd9M1GiF6+XxpUjR7nKw6F20RW/SrGozjZ3L2pVEIognsWYAs6Um7mY/cdRNBcZpjHWlWWr9HOqQe9D1eui6XFbs1mz0jOGFY51Y1uO6irH80u62u7Au3F5TEsx81uBSLWWgTwPNeRwa+80o0N8/eG7Mhf/HDNokkfCeOlUhdWiMzUQT28qQM8w0320sowRy7j/pEObzsfR444rFgpe/1OiamptJp+WYEeGCXNKDq56JncJ5DK41YD9YvKgjqXZuDi7mqMHFWNGTsqONFvnhfX/AJdkM2WVo9+DkHY928g5SAP4iiKWSzuPaHAppprWcsmy0yb+vhRY75A==",sidebar_class_name:"post api-method",info_path:"immersve-api",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Support",permalink:"/api-reference/support"}},y={},q=[];function C(e){const s={code:"code",p:"p",strong:"strong",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Create Support Session"}),"\n",(0,i.jsx)(o(),{method:"post",path:"/api/support-sessions"}),"\n",(0,i.jsx)(s.p,{children:"This endpoint can be used to create a support session for a cardholder account"}),"\n",(0,i.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(p(),{className:"openapi-tabs__mime",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!1,name:"accountId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the cardholder account that needs support",example:"65a7e8ef0d230d0a6bf755e07d39eb02"}})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(t(),{label:void 0,id:void 0,children:[(0,i.jsxs)(g.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Successful operation"})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!1,name:"url",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The URL of the support session",example:"https://help.immersve.com/"}})})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(m(),{responseExample:'{\n  "url": "https://help.immersve.com/"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(g.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Request fields are invalid"})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(h(),{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:400}}),(0,i.jsx)(h(),{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bad Request"}}),(0,i.jsx)(h(),{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BAD_REQUEST"}}),(0,i.jsx)(h(),{collapsible:!1,name:"errors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"Expected string, received number"}}})]})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(m(),{responseExample:'{\n  "statusCode": 400,\n  "statusName": "Bad Request",\n  "errorCode": "BAD_REQUEST",\n  "errors": [\n    "Expected string, received number"\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(g.default,{label:"403",value:"403",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)(s.p,{children:["User is not allowed to perform the action with the reason stated in the ",(0,i.jsx)(s.code,{children:"errorCode"})]}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"FORBIDDEN"}),"\nInsufficient permissions to perform the action."]})]}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(h(),{collapsible:!1,name:"statusCode",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:403}}),(0,i.jsx)(h(),{collapsible:!1,name:"statusName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Forbidden"}}),(0,i.jsx)(h(),{collapsible:!1,name:"errorCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"FORBIDDEN"}}),(0,i.jsx)(h(),{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unauthorized"}})]})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(m(),{responseExample:'{\n  "statusCode": 403,\n  "statusName": "Forbidden",\n  "errorCode": "FORBIDDEN",\n  "reason": "Unauthorized"\n}',language:"json"})})]})})})})]})]})})})]})}function k(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(C,{...e})}):C(e)}}}]);