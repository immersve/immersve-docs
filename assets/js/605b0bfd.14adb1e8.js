"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[4564],{85162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),r=t(86010);const i="tabItem_Ymn6";function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:t},a)}},54307:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>C,contentTitle:()=>v,default:()=>I,frontMatter:()=>k,metadata:()=>g,toc:()=>y});var n=t(87462),r=t(67294),i=t(3905),s=t(8209),o=t(86010),l=t(72389),c=t(67392),u=t(7094),d=t(12466);const p="tabList__CuJ",m="tabItem_LNqP";function h(e){var a;const{lazy:t,block:i,defaultValue:s,values:l,groupId:h,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=l??b.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),v=(0,c.l)(k,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===s?s:s??(null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)??b[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:y}=(0,u.U)(),[x,I]=(0,r.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,d.o5)();if(null!=h){const e=C[h];null!=e&&e!==x&&k.some((a=>a.value===e))&&I(e)}const T=e=>{const a=e.currentTarget,t=w.indexOf(a),n=k[t].value;n!==x&&(N(a),I(n),null!=h&&y(h,String(n)))},E=e=>{var a;let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},k.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:e=>w.push(e),onKeyDown:E,onClick:T},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":x===a})}),t??a)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==x})))))}function f(e){const a=(0,l.Z)();return r.createElement(h,(0,n.Z)({key:String(a)},e))}var b=t(85162);const k={},v="Fetching Secure Card Information",g={unversionedId:"guides/fetching-secure-card-information",id:"guides/fetching-secure-card-information",title:"Fetching Secure Card Information",description:"In order to retrieve the secure details of a card (CVV, expiry, PAN), a one-time token must be generated.",source:"@site/docs/guides/fetching-secure-card-information.mdx",sourceDirName:"guides",slug:"/guides/fetching-secure-card-information",permalink:"/guides/fetching-secure-card-information",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"primarySidebar",previous:{title:"Complete headless KYC checks",permalink:"/guides/complete-headless-kyc-checks"},next:{title:"API Reference",permalink:"/category/api-reference"}},C={},y=[{value:"Sequence Diagram",id:"sequence-diagram",level:3}],x={toc:y};function I(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},x,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fetching-secure-card-information"},"Fetching Secure Card Information"),(0,i.kt)("p",null,"In order to retrieve the secure details of a card (CVV, expiry, PAN), a one-time token must be generated."),(0,i.kt)("p",null,"The steps for retrieving secure card details are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Call the ",(0,i.kt)("a",{parentName:"li",href:"/api-reference/get-a-card-token"},"get a card token")," endpoint with the card ID."),(0,i.kt)("li",{parentName:"ol"},"Call the GET URL specified in the ",(0,i.kt)("inlineCode",{parentName:"li"},"callbackUrl")," response body field. The ",(0,i.kt)("inlineCode",{parentName:"li"},"callbackUrl")," can only be used once, subsequent calls to this URL will return a ",(0,i.kt)("inlineCode",{parentName:"li"},"403")," response code.")),(0,i.kt)("h3",{id:"sequence-diagram"},"Sequence Diagram"),(0,i.kt)(s.G,{chart:"sequenceDiagram\n    participant U as User\n    participant C as Your Client Application\n    participant I as Immersve\n    note over U: Authentication as per authentication guide\n\n    C->>I: Get card token\n    I--\x3e>C: Card token\n    C->>I: Request sensitive card data\n    I--\x3e>C: Return sensitive card data\n    C--\x3e>U: Display sensitive card data",mdxType:"Mermaid"}),(0,i.kt)("h1",{id:"example-code-snippet"},"Example code snippet"),(0,i.kt)(f,{mdxType:"Tabs"},(0,i.kt)(b.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import axios from 'axios';\n\n// Using non-custodial authentication\nconst tokenResponse = await axios.post(\n  'https://api.immersve.com/api/cards/123/pan-token',\n  {},\n  {\n    headers: {\n      Authorization: 'Bearer eyJhbvbbfg', // jwt token,\n    },\n  }\n);\n\nconst secureCardDetail = await axios.get(tokenResponse.callbackUrl);\n\n// Using custodial authentication\nconst tokenResponse = await axios.post(\n  'https://api.immersve.com/api/cards/123/pan-token',\n  {},\n  {\n    headers: {\n      'x-api-key': 'imm-key-prod-LIVE-6e7e3821983ef6fe6cecabdbc8571bbf',\n      'x-api-secret': 'imm-secret-prod-LIVE-95b90292dfd747c143a9d258a93fb835',\n      'x-account-ID': '8gh464292dfd747c143a9d258aj6jdkd8', // target account ID (the account ID this card belongs to)\n    },\n  }\n);\n\nconst secureCardDetail = await axios.get(tokenResponse.callbackUrl);\n")))))}I.isMDXComponent=!0}}]);