"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[6861],{32936:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=i(62540),r=i(43023),s=i(13480),c=i(28600);const a={id:"contact-details",title:"Contact Details",description:"Contact Details",custom_edit_url:null},o=void 0,l={id:"contact-details",title:"Contact Details",description:"Contact Details",source:"@site/docs/contact-details.tag.mdx",sourceDirName:".",slug:"/contact-details",permalink:"/api-reference/contact-details",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"contact-details",title:"Contact Details",description:"Contact Details",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"List Cards",permalink:"/api-reference/list-cards"},next:{title:"Get Contact Details",permalink:"/api-reference/get-contact-details"}},d={},u=[];function m(t){return(0,n.jsx)(s.A,{items:(0,c.$S)().items})}function p(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(m,{...t})}):m()}},13480:(t,e,i)=>{i.d(e,{A:()=>j});i(63696);var n=i(11750),r=i(28600),s=i(45968),c=i(32815),a=i(52616),o=i(6590),l=i(81381);const d={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};var u=i(62540);function m(t){let{href:e,children:i}=t;return(0,u.jsx)(s.default,{href:e,className:(0,n.A)("card padding--lg",d.cardContainer),children:i})}function p(t){let{href:e,icon:i,title:r,description:s}=t;return(0,u.jsxs)(m,{href:e,children:[(0,u.jsxs)(l.default,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:r,children:[i," ",r]}),s&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(t){let{item:e}=t;const i=(0,r.Nr)(e),n=function(){const{selectMessage:t}=(0,c.W)();return e=>t(e,(0,o.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return i?(0,u.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??n(e.items.length)}):null}function h(t){let{item:e}=t;const i=(0,a.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(e.docId??void 0);return(0,u.jsx)(p,{href:e.href,icon:i,title:e.label,description:e.description??n?.description})}function x(t){let{item:e}=t;switch(e.type){case"link":return(0,u.jsx)(h,{item:e});case"category":return(0,u.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g(t){let{className:e}=t;const i=(0,r.$S)();return(0,u.jsx)(j,{items:i.items,className:e})}function j(t){const{items:e,className:i}=t;if(!e)return(0,u.jsx)(g,{...t});const s=(0,r.d1)(e);return(0,u.jsx)("section",{className:(0,n.A)("row",i),children:s.map(((t,e)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:t})},e)))})}}}]);