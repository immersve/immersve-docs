"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[3556],{60815:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=i(62540),s=i(43023),n=i(13480),c=i(28600);const a={id:"simulator",title:"Simulator",description:"Simulator",custom_edit_url:null},o=void 0,l={id:"simulator",title:"Simulator",description:"Simulator",source:"@site/docs/simulator.tag.mdx",sourceDirName:".",slug:"/simulator",permalink:"/api-reference/simulator",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"simulator",title:"Simulator",description:"Simulator",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get Spending Prerequisites",permalink:"/api-reference/get-spending-prerequisites"},next:{title:"Submit Simulator Authorization",permalink:"/api-reference/submit-simulator-authorization"}},u={},d=[];function m(t){return(0,r.jsx)(n.A,{items:(0,c.$S)().items})}function p(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(m,{...t})}):m()}},13480:(t,e,i)=>{i.d(e,{A:()=>j});i(63696);var r=i(11750),s=i(28600),n=i(45968),c=i(32815),a=i(52616),o=i(6590),l=i(81381);const u={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};var d=i(62540);function m(t){let{href:e,children:i}=t;return(0,d.jsx)(n.default,{href:e,className:(0,r.A)("card padding--lg",u.cardContainer),children:i})}function p(t){let{href:e,icon:i,title:s,description:n}=t;return(0,d.jsxs)(m,{href:e,children:[(0,d.jsxs)(l.default,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[i," ",s]}),n&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:n,children:n})]})}function f(t){let{item:e}=t;const i=(0,s.Nr)(e),r=function(){const{selectMessage:t}=(0,c.W)();return e=>t(e,(0,o.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return i?(0,d.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??r(e.items.length)}):null}function h(t){let{item:e}=t;const i=(0,a.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(e.docId??void 0);return(0,d.jsx)(p,{href:e.href,icon:i,title:e.label,description:e.description??r?.description})}function x(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(h,{item:e});case"category":return(0,d.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g(t){let{className:e}=t;const i=(0,s.$S)();return(0,d.jsx)(j,{items:i.items,className:e})}function j(t){const{items:e,className:i}=t;if(!e)return(0,d.jsx)(g,{...t});const n=(0,s.d1)(e);return(0,d.jsx)("section",{className:(0,r.A)("row",i),children:n.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:t})},e)))})}}}]);