"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[5787],{55162:(e,t,r)=>{r.d(t,{Z:()=>k});var i=r(27378),n=r(38944),o=r(45161),s=r(81884),c=r(45626),a=r(99213);const l={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};function m(e){let{href:t,children:r}=e;return i.createElement(s.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:o,description:s}=e;return i.createElement(m,{href:t},i.createElement("h2",{className:(0,n.Z)("text--truncate",l.cardTitle),title:o},r," ",o),s&&i.createElement("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:s},s))}function u(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?i.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.xz)(t.docId??void 0);return i.createElement(d,{href:t.href,icon:r,title:t.label,description:n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(p,{item:t});case"category":return i.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,o.jA)();return i.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return i.createElement(f,e);const s=(0,o.MN)(t);return i.createElement("section",{className:(0,n.Z)("row",r)},s.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(h,{item:e})))))}},18552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var i=r(25773),n=(r(27378),r(35318)),o=r(55162),s=r(45161);const c={id:"immersve-webhooks",title:"Webhooks",description:"Webhooks",custom_edit_url:null},a=void 0,l={unversionedId:"immersve-webhooks",id:"immersve-webhooks",title:"Webhooks",description:"Webhooks",source:"@site/docs/immersve-webhooks.tag.mdx",sourceDirName:".",slug:"/immersve-webhooks",permalink:"/api-reference/immersve-webhooks",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"immersve-webhooks",title:"Webhooks",description:"Webhooks",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get spending prerequisites",permalink:"/api-reference/get-spending-prerequisites"},next:{title:"Authorization",permalink:"/api-reference/authorization"}},m={},d=[],u={toc:d},p="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);