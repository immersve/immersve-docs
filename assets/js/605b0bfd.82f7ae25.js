"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[4564],{85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},54307:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>x,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var n=a(87462),r=a(67294),o=a(3905),i=(a(8209),a(86010)),s=a(72389),l=a(67392),c=a(7094),u=a(12466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:a,block:o,defaultValue:s,values:m,groupId:h,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,l.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===s?s:s??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,c.U)(),[x,N]=(0,r.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==x&&k.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==x&&(E(t),N(n),null!=h&&w(h,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},b)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:I,onClick:C},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function h(e){const t=(0,s.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}var b=a(85162);const f={},k="Fetching secure card information",v={unversionedId:"guides/fetching-secure-card-information",id:"guides/fetching-secure-card-information",title:"Fetching secure card information",description:"In order to retrieve the secure details of a card (cvv, expiry, pan), a one-time token must be generated.",source:"@site/docs/guides/fetching-secure-card-information.mdx",sourceDirName:"guides",slug:"/guides/fetching-secure-card-information",permalink:"/guides/fetching-secure-card-information",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"primarySidebar",previous:{title:"Webhooks",permalink:"/guides/webhooks"},next:{title:"API Reference",permalink:"/category/api-reference"}},g={},y=[],w={toc:y};function x(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fetching-secure-card-information"},"Fetching secure card information"),(0,o.kt)("p",null,"In order to retrieve the secure details of a card (cvv, expiry, pan), a one-time token must be generated."),(0,o.kt)("p",null,"The steps for retrieving secure card details is as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Call the ",(0,o.kt)("a",{parentName:"li",href:"/api-reference/get-a-card-token"},"get a card token")," endpoint with the card id."),(0,o.kt)("li",{parentName:"ol"},"Call the GET url specified in the ",(0,o.kt)("inlineCode",{parentName:"li"},"callbackUrl")," response body field. The ",(0,o.kt)("inlineCode",{parentName:"li"},"callbackUrl")," can only be used once, subsequent calls to this url will return a ",(0,o.kt)("inlineCode",{parentName:"li"},"403")," response code.")),(0,o.kt)("h1",{id:"example-code-snippet"},"Example code snippet"),(0,o.kt)(h,{mdxType:"Tabs"},(0,o.kt)(b.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import axios from 'axios';\n\n// Using non-custodial authentication\nconst tokenResponse = await axios.post(\n  'https://api.immersve.com/api/cards/123/pan-token',\n  {},\n  {\n    headers: {\n      Authorization: 'Bearer eyJhbvbbfg', // jwt token,\n    },\n  }\n);\n\nconst secureCardDetail = await axios.get(tokenResponse.callbackUrl);\n\n// Using custodial authentication\nconst tokenResponse = await axios.post(\n  'https://api.immersve.com/api/cards/123/pan-token',\n  {},\n  {\n    headers: {\n      'x-api-key': 'imm-key-prod-LIVE-6e7e3821983ef6fe6cecabdbc8571bbf',\n      'x-api-secret': 'imm-secret-prod-LIVE-95b90292dfd747c143a9d258a93fb835',\n      'x-account-id': '8gh464292dfd747c143a9d258aj6jdkd8', // target account id (the account id this card belongs to)\n    },\n  }\n);\n\nconst secureCardDetail = await axios.get(tokenResponse.callbackUrl);\n")))))}x.isMDXComponent=!0}}]);