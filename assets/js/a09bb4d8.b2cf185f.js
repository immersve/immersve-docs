"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[6561],{52991:(e,t,n)=>{n.d(t,{Z:()=>k});var c=n(67294),r=n(86010),i=n(53438),a=n(39960),s=n(13919),o=n(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return c.createElement(a.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:i,description:a}=e;return c.createElement(d,{href:t},c.createElement("h2",{className:(0,r.Z)("text--truncate",u),title:i},n," ",i),a&&c.createElement("p",{className:(0,r.Z)("text--truncate",m),title:a},a))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?c.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return c.createElement(p,{href:t.href,icon:n,title:t.label,description:null==r?void 0:r.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return c.createElement(h,{item:t});case"category":return c.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function E(e){let{className:t}=e;const n=(0,i.jA)();return c.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return c.createElement(E,e);const a=(0,i.MN)(t);return c.createElement("section",{className:(0,r.Z)("row",n)},a.map(((e,t)=>c.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},c.createElement(g,{item:e})))))}},94704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var c=n(87462),r=(n(67294),n(3905)),i=(n(8209),n(52991)),a=n(53438);const s={id:"accounts",title:"Accounts",description:"Accounts",custom_edit_url:null},o=void 0,l={unversionedId:"api-reference/accounts",id:"api-reference/accounts",title:"Accounts",description:"Accounts",source:"@site/docs/api-reference/accounts.tag.mdx",sourceDirName:"api-reference",slug:"/api-reference/accounts",permalink:"/api-reference/accounts",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"accounts",title:"Accounts",description:"Accounts",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get balance",permalink:"/api-reference/get-balance"},next:{title:"List Accounts",permalink:"/api-reference/list-accounts"}},u={},m=[],d={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,c.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);