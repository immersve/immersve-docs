"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[4793],{55162:(e,t,r)=>{r.d(t,{Z:()=>g});var i=r(27378),n=r(38944),a=r(45161),c=r(81884),o=r(45626),s=r(99213);const l={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};function m(e){let{href:t,children:r}=e;return i.createElement(c.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer)},r)}function u(e){let{href:t,icon:r,title:a,description:c}=e;return i.createElement(m,{href:t},i.createElement("h2",{className:(0,n.Z)("text--truncate",l.cardTitle),title:a},r," ",a),c&&i.createElement("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:c},c))}function d(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?i.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,a.xz)(t.docId??void 0);return i.createElement(u,{href:t.href,icon:r,title:t.label,description:n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(p,{item:t});case"category":return i.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,a.jA)();return i.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return i.createElement(h,e);const c=(0,a.MN)(t);return i.createElement("section",{className:(0,n.Z)("row",r)},c.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(f,{item:e})))))}},67131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=r(25773),n=(r(27378),r(35318)),a=r(55162),c=r(45161);const o={id:"simulator",title:"Simulator",description:"Simulator",custom_edit_url:null},s=void 0,l={unversionedId:"simulator",id:"simulator",title:"Simulator",description:"Simulator",source:"@site/docs/simulator.tag.mdx",sourceDirName:".",slug:"/simulator",permalink:"/api-reference/simulator",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"simulator",title:"Simulator",description:"Simulator",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Card Status Change",permalink:"/api-reference/card-status-change"},next:{title:"Authorize a transaction",permalink:"/api-reference/authorize-a-transaction"}},m={},u=[],d={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);