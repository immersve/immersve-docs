"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[8212],{80673:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=c(62540),r=c(43023),i=c(13480),s=c(28600);const o={id:"accounts",title:"Accounts",description:"Accounts",custom_edit_url:null},a=void 0,l={id:"accounts",title:"Accounts",description:"Accounts",source:"@site/docs/accounts.tag.mdx",sourceDirName:".",slug:"/accounts",permalink:"/api-reference/accounts",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"accounts",title:"Accounts",description:"Accounts",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Complete SIWE Login",permalink:"/api-reference/complete-siwe-login"},next:{title:"Create Account",permalink:"/api-reference/create-account"}},u={},d=[];function m(e){return(0,n.jsx)(i.A,{items:(0,s.$S)().items})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},13480:(e,t,c)=>{c.d(t,{A:()=>j});c(63696);var n=c(11750),r=c(28600),i=c(45968),s=c(32815),o=c(52616),a=c(6590),l=c(81381);const u={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};var d=c(62540);function m(e){let{href:t,children:c}=e;return(0,d.jsx)(i.default,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:c})}function p(e){let{href:t,icon:c,title:r,description:i}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.default,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:r,children:[c," ",r]}),i&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e;const c=(0,r.Nr)(t),n=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return c?(0,d.jsx)(p,{href:c,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const c=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:c,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const c=(0,r.$S)();return(0,d.jsx)(j,{items:c.items,className:t})}function j(e){const{items:t,className:c}=e;if(!t)return(0,d.jsx)(g,{...e});const i=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",c),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}}}]);