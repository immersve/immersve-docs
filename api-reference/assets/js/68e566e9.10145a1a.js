"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[7481],{12073:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(62540),s=n(43023),i=n(13480),c=n(28600);const a={id:"transactions",title:"Transactions",description:"Transactions",custom_edit_url:null},o=void 0,l={id:"transactions",title:"Transactions",description:"Transactions",source:"@site/docs/transactions.tag.mdx",sourceDirName:".",slug:"/transactions",permalink:"/api-reference/transactions",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"transactions",title:"Transactions",description:"Transactions",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"List Funding Channels",permalink:"/api-reference/list-funding-channels"},next:{title:"Get a transaction",permalink:"/api-reference/get-a-transaction"}},d={},u=[];function m(t){return(0,r.jsx)(i.A,{items:(0,c.$S)().items})}function f(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(m,{...t})}):m()}},13480:(t,e,n)=>{n.d(e,{A:()=>j});n(63696);var r=n(12689),s=n(28600),i=n(45968),c=n(32815),a=n(52616),o=n(6590),l=n(81381);const d={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};var u=n(62540);function m(t){let{href:e,children:n}=t;return(0,u.jsx)(i.default,{href:e,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function f(t){let{href:e,icon:n,title:s,description:i}=t;return(0,u.jsxs)(m,{href:e,children:[(0,u.jsxs)(l.default,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(t){let{item:e}=t;const n=(0,s.Nr)(e),r=function(){const{selectMessage:t}=(0,c.W)();return e=>t(e,(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return n?(0,u.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??r(e.items.length)}):null}function h(t){let{item:e}=t;const n=(0,a.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(e.docId??void 0);return(0,u.jsx)(f,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function x(t){let{item:e}=t;switch(e.type){case"link":return(0,u.jsx)(h,{item:e});case"category":return(0,u.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g(t){let{className:e}=t;const n=(0,s.$S)();return(0,u.jsx)(j,{items:n.items,className:e})}function j(t){const{items:e,className:n}=t;if(!e)return(0,u.jsx)(g,{...t});const i=(0,s.d1)(e);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((t,e)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:t})},e)))})}}}]);