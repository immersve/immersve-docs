"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[7980],{55162:(t,e,c)=>{c.d(e,{Z:()=>g});var n=c(27378),i=c(38944),r=c(45161),a=c(81884),s=c(45626),o=c(99213);const l={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};function d(t){let{href:e,children:c}=t;return n.createElement(a.Z,{href:e,className:(0,i.Z)("card padding--lg",l.cardContainer)},c)}function m(t){let{href:e,icon:c,title:r,description:a}=t;return n.createElement(d,{href:e},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:r},c," ",r),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:a},a))}function u(t){let{item:e}=t;const c=(0,r.Wl)(e);return c?n.createElement(m,{href:c,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function p(t){let{item:e}=t;const c=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(e.docId??void 0);return n.createElement(m,{href:e.href,icon:c,title:e.label,description:i?.description})}function f(t){let{item:e}=t;switch(e.type){case"link":return n.createElement(p,{item:e});case"category":return n.createElement(u,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h(t){let{className:e}=t;const c=(0,r.jA)();return n.createElement(g,{items:c.items,className:e})}function g(t){const{items:e,className:c}=t;if(!e)return n.createElement(h,t);const a=(0,r.MN)(e);return n.createElement("section",{className:(0,i.Z)("row",c)},a.map(((t,e)=>n.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:t})))))}},94694:(t,e,c)=>{c.r(e),c.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var n=c(25773),i=(c(27378),c(35318)),r=c(55162),a=c(45161);const s={id:"contact-details",title:"Contact Details",description:"Contact Details",custom_edit_url:null},o=void 0,l={unversionedId:"contact-details",id:"contact-details",title:"Contact Details",description:"Contact Details",source:"@site/docs/contact-details.tag.mdx",sourceDirName:".",slug:"/contact-details",permalink:"/api-reference/contact-details",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"contact-details",title:"Contact Details",description:"Contact Details",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"List cards",permalink:"/api-reference/list-cards"},next:{title:"Get contact details",permalink:"/api-reference/get-contact-details"}},d={},m=[],u={toc:m},p="wrapper";function f(t){let{components:e,...c}=t;return(0,i.kt)(p,(0,n.Z)({},u,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);