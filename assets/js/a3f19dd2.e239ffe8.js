"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[8915],{52991:(e,t,r)=>{r.d(t,{Z:()=>k});var i=r(67294),n=r(86010),c=r(53438),a=r(39960),s=r(13919),o=r(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return i.createElement(a.Z,{href:t,className:(0,n.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:c,description:a}=e;return i.createElement(u,{href:t},i.createElement("h2",{className:(0,n.Z)("text--truncate",d),title:c},r," ",c),a&&i.createElement("p",{className:(0,n.Z)("text--truncate",m),title:a},a))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?i.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.xz)(t.docId??void 0);return i.createElement(p,{href:t.href,icon:r,title:t.label,description:null==n?void 0:n.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(h,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function E(e){let{className:t}=e;const r=(0,c.jA)();return i.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return i.createElement(E,e);const a=(0,c.MN)(t);return i.createElement("section",{className:(0,n.Z)("row",r)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(g,{item:e})))))}},34715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var i=r(87462),n=(r(67294),r(3905)),c=(r(8209),r(52991)),a=r(53438);const s={id:"card",title:"Cards",description:"Cards",custom_edit_url:null},o=void 0,l={unversionedId:"api-reference/card",id:"api-reference/card",title:"Cards",description:"Cards",source:"@site/docs/api-reference/card.tag.mdx",sourceDirName:"api-reference",slug:"/api-reference/card",permalink:"/api-reference/card",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"card",title:"Cards",description:"Cards",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"List Asset Activities",permalink:"/api-reference/list-asset-activities"},next:{title:"Order a Card",permalink:"/api-reference/order-card"}},d={},m=[],u={toc:m};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);