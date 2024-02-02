"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[4564],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},54307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>x,frontMatter:()=>b,metadata:()=>v,toc:()=>k});var a=n(87462),r=n(67294),o=n(3905),i=n(86010),s=n(72389),c=n(67392),l=n(7094),u=n(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){const{lazy:t,block:n,defaultValue:o,values:s,groupId:d,className:m}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=s??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,c.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,l.U)(),[y,w]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=d){const e=g[d];null!=e&&e!==y&&b.some((t=>t.value===e))&&w(e)}const I=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==y&&(C(t),w(a),null!=d&&k(d,String(a)))},O=e=>{let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>x.push(e),onKeyDown:O,onClick:I},o,{className:(0,i.Z)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}var f=n(85162);const b={},h="Fetching Secure Card Information",v={unversionedId:"guides/fetching-secure-card-information",id:"guides/fetching-secure-card-information",title:"Fetching Secure Card Information",description:"In order to retrieve the secure details of a card (CVV, expiry, PAN), a one-time token must be generated.",source:"@site/docs/guides/fetching-secure-card-information.mdx",sourceDirName:"guides",slug:"/guides/fetching-secure-card-information",permalink:"/guides/fetching-secure-card-information",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"primarySidebar",previous:{title:"Complete headless KYC checks",permalink:"/guides/complete-headless-kyc-checks"},next:{title:"API Reference",permalink:"/category/api-reference"}},g={},k=[{value:"Sequence Diagram",id:"sequence-diagram",level:3}],y={toc:k},w="wrapper";function x(e){let{components:t,...n}=e;return(0,o.kt)(w,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fetching-secure-card-information"},"Fetching Secure Card Information"),(0,o.kt)("p",null,"In order to retrieve the secure details of a card (CVV, expiry, PAN), a one-time token must be generated."),(0,o.kt)("p",null,"The steps for retrieving secure card details are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Call the ",(0,o.kt)("a",{parentName:"li",href:"/api-reference/get-a-card-token"},"get a card token")," endpoint with the card ID."),(0,o.kt)("li",{parentName:"ol"},"Call the GET URL specified in the ",(0,o.kt)("inlineCode",{parentName:"li"},"callbackUrl")," response body field. The ",(0,o.kt)("inlineCode",{parentName:"li"},"callbackUrl")," can only be used once, subsequent calls to this URL will return a ",(0,o.kt)("inlineCode",{parentName:"li"},"403")," response code.")),(0,o.kt)("h3",{id:"sequence-diagram"},"Sequence Diagram"),(0,o.kt)("mermaid",{chart:"sequenceDiagram\n    participant U as User\n    participant C as Your Client Application\n    participant I as Immersve\n    note over U: Authentication as per authentication guide\n\n    C->>I: Get card token\n    I--\x3e>C: Card token\n    C->>I: Request sensitive card data\n    I--\x3e>C: Return sensitive card data\n    C--\x3e>U: Display sensitive card data"}),(0,o.kt)("h1",{id:"example-code-snippet"},"Example code snippet"),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(f.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import axios from 'axios';\n\n// Using non-custodial authentication\nconst tokenResponse = await axios.post(\n  'https://api.immersve.com/api/cards/123/pan-token',\n  {},\n  {\n    headers: {\n      Authorization: 'Bearer eyJhbvbbfg', // jwt token,\n    },\n  }\n);\n\nconst secureCardDetail = await axios.get(tokenResponse.callbackUrl);\n\n// Using custodial authentication\nconst tokenResponse = await axios.post(\n  'https://api.immersve.com/api/cards/123/pan-token',\n  {},\n  {\n    headers: {\n      'x-api-key': 'imm-key-prod-LIVE-6e7e3821983ef6fe6cecabdbc8571bbf',\n      'x-api-secret': 'imm-secret-prod-LIVE-95b90292dfd747c143a9d258a93fb835',\n      'x-account-ID': '8gh464292dfd747c143a9d258aj6jdkd8', // target account ID (the account ID this card belongs to)\n    },\n  }\n);\n\nconst secureCardDetail = await axios.get(tokenResponse.callbackUrl);\n")))))}x.isMDXComponent=!0}}]);