"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[8915],{52991:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(67294),c=r(86010),a=r(53438),i=r(39960),s=r(13919),l=r(95999);const o="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",o)},r)}function p(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",d),title:a},r," ",a),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",m),title:i},i))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:null==c?void 0:c.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function E(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(E,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},34715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=r(87462),c=(r(67294),r(3905)),a=(r(19959),r(52991)),i=r(53438);const s={id:"card",title:"Cards",description:"Cards",custom_edit_url:null},l=void 0,o={unversionedId:"api-reference/card",id:"api-reference/card",title:"Cards",description:"Cards",source:"@site/docs/api-reference/card.tag.mdx",sourceDirName:"api-reference",slug:"/api-reference/card",permalink:"/api-reference/card",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"card",title:"Cards",description:"Cards",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get Balance",permalink:"/api-reference/get-balance"},next:{title:"Order a Card",permalink:"/api-reference/order-card"}},d={},m=[],u={toc:m};function p(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);