(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[8319],{85162:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(67294),s=r(86010);const o="tabItem_Ymn6";function a(e){let{children:t,hidden:r,className:a}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(o,a),hidden:r},t)}},65130:(e,t,r)=>{"use strict";r.d(t,{b:()=>a,k:()=>l});var n=r(67294),s=r(902);const o=n.createContext(null);function a(e){let{children:t,content:r}=e;const s=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return n.createElement(o.Provider,{value:s},t)}function l(){const e=(0,n.useContext)(o);if(null===e)throw new s.i6("DocProvider");return e}},14353:(e,t,r)=>{"use strict";r.d(t,{D:()=>l,f:()=>c});var n=r(67294),s=r(902);const o=Symbol("EmptyContext"),a=n.createContext(o);function l(e){let{children:t}=e;const[r,s]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:r,setExpandedItem:s})),[r]);return n.createElement(a.Provider,{value:o},t)}function c(){const e=(0,n.useContext)(a);if(e===o)throw new s.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,r)=>{"use strict";r.d(t,{a:()=>a});var n=r(67294),s=r(12466),o=r(85936);function a(e){let{threshold:t}=e;const[r,a]=(0,n.useState)(!1),l=(0,n.useRef)(!1),{startScroll:c,cancelScroll:i}=(0,s.Ct)();return(0,s.RF)(((e,r)=>{let{scrollY:n}=e;const s=null==r?void 0:r.scrollY;s&&(l.current?l.current=!1:n>=s?(i(),a(!1)):n<t?a(!1):n+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,o.S)((e=>{e.location.hash&&(l.current=!0,a(!1))})),{shown:r,scrollToTop:()=>c(0)}}},85448:(e,t,r)=>{"use strict";r.d(t,{F:()=>l});var n=r(67294),s=r(902);const o={attributes:!0,characterData:!0,childList:!0,subtree:!0};function a(e,t){const[r,a]=(0,n.useState)(),l=(0,n.useCallback)((()=>{var t;a(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,n.useEffect)((()=>{l()}),[l]),function(e,t,r){void 0===r&&(r=o);const a=(0,s.zX)(t),l=(0,s.Ql)(r);(0,n.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,l),()=>t.disconnect()}),[e,a,l])}(r,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function l(){const[e,t]=(0,n.useState)(!1),[r,s]=(0,n.useState)(!1),o=(0,n.useRef)(null),l=(0,n.useCallback)((()=>{const r=o.current.querySelector("code");e?r.removeAttribute("style"):(r.style.whiteSpace="pre-wrap",r.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,n.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,r=e>t||o.current.querySelector("code").hasAttribute("style");s(r)}),[o]);return a(o,c),(0,n.useEffect)((()=>{c()}),[e,c]),(0,n.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:r,toggle:l}}},66412:(e,t,r)=>{"use strict";r.d(t,{p:()=>o});var n=r(92949),s=r(86668);function o(){const{prism:e}=(0,s.L)(),{colorMode:t}=(0,n.I)(),r=e.theme,o=e.darkTheme||r;return"dark"===t?o:r}},96841:(e,t,r)=>{"use strict";r.d(t,{S:()=>c});var n=r(67294),s=r(86668);function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function a(e,t){let{anchorTopOffset:r}=t;const n=e.find((e=>o(e).top>=r));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function l(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){const t=(0,n.useRef)(void 0),r=l();(0,n.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:s,minHeadingLevel:o,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:r}=e;const n=[];for(let s=t;s<=r;s+=1)n.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),i=a(c,{anchorTopOffset:r.current}),u=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,r){r?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,r])}},15147:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AnnouncementBarProvider:()=>D.pl,BlogPostProvider:()=>N,Collapsible:()=>c.z,ColorModeProvider:()=>m.S,DEFAULT_SEARCH_TAG:()=>o.HX,DocProvider:()=>T.b,DocSidebarItemsExpandedStateProvider:()=>y.D,DocsPreferredVersionContextProvider:()=>E.L5,DocsSidebarProvider:()=>L.b,DocsVersionProvider:()=>w.q,HtmlClassNameProvider:()=>d.FG,NavbarProvider:()=>Z.V,NavbarSecondaryMenuFiller:()=>f.Zo,PageMetadata:()=>d.d,PluginHtmlClassNameProvider:()=>d.VC,ReactContextError:()=>u.i6,ScrollControllerProvider:()=>_.OC,SkipToContentFallbackId:()=>k.u,SkipToContentLink:()=>k.l,TabGroupChoiceProvider:()=>I.z,ThemeClassNames:()=>i.k,composeProviders:()=>u.Qc,containsLineNumbers:()=>H.nt,createStorageSlot:()=>s.W,docVersionSearchTag:()=>o.os,duplicates:()=>g.l,filterDocCardListItems:()=>a.MN,findFirstCategoryLink:()=>a.Wl,findSidebarCategory:()=>a.em,getPrismCssVariables:()=>H.QC,isActiveSidebarItem:()=>a._F,isDocsPluginEnabled:()=>a.cE,isMultiColumnFooterLinks:()=>v.a,isRegexpStringMatch:()=>b.F,isSamePath:()=>z.Mg,keyboardFocusedClassName:()=>G.h,listStorageKeys:()=>s._,listTagsByLetters:()=>p.P,parseCodeBlockTitle:()=>H.bc,parseLanguage:()=>H.Vo,parseLines:()=>H.nZ,processAdmonitionProps:()=>P,splitNavbarItems:()=>Z.A,translateTagsPageTitle:()=>p.M,uniq:()=>g.j,useAlternatePageUtils:()=>B.l,useAnnouncementBar:()=>D.nT,useBackToTopButton:()=>ee.a,useBlogPost:()=>j,useCodeWordWrap:()=>J.F,useCollapsible:()=>c.u,useColorMode:()=>m.I,useContextualSearchFilters:()=>o._q,useCurrentSidebarCategory:()=>a.jA,useDoc:()=>T.k,useDocById:()=>a.xz,useDocRouteMetadata:()=>a.hI,useDocSidebarItemsExpandedState:()=>y.f,useDocsPreferredVersion:()=>E.J,useDocsPreferredVersionByPluginId:()=>E.Oh,useDocsSidebar:()=>L.V,useDocsVersion:()=>w.E,useDocsVersionCandidates:()=>a.lO,useEvent:()=>u.zX,useFilteredAndTreeifiedTOC:()=>V.b,useHideableNavbar:()=>q.c,useHistoryPopHandler:()=>$.R,useHomePageRoute:()=>z.Ns,useIsomorphicLayoutEffect:()=>u.LI,useKeyboardNavigation:()=>G.t,useLayoutDoc:()=>a.vY,useLayoutDocsSidebar:()=>a.oz,useLocalPathname:()=>R.b,useLocationChange:()=>O.S,useLockBodyScroll:()=>U.N,useNavbarMobileSidebar:()=>A.e,useNavbarSecondaryMenu:()=>M.Y,usePluralForm:()=>l.c,usePrevious:()=>u.D9,usePrismTheme:()=>C.p,useScrollController:()=>_.sG,useScrollPosition:()=>_.RF,useScrollPositionBlocker:()=>_.o5,useSearchPage:()=>K,useSidebarBreadcrumbs:()=>a.s1,useSmoothScrollTo:()=>_.Ct,useTOCHighlight:()=>W.S,useTabGroupChoice:()=>I.U,useThemeConfig:()=>n.L,useTitleFormatter:()=>F.p,useTreeifiedTOC:()=>V.a,useWindowSize:()=>h.i});var n=r(86668),s=r(50012),o=r(43320),a=r(53438),l=r(88824),c=r(86043),i=r(35281),u=r(902),d=r(10833),m=r(92949),f=r(13102),h=r(87524),p=r(35155),v=r(42489),b=r(98022),g=r(67392),C=r(66412),E=r(60373),S=r(67294);function P(e){const{mdxAdmonitionTitle:t,rest:r}=function(e){const t=S.Children.toArray(e),r=t.find((e=>{var t;return S.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),n=S.createElement(S.Fragment,null,t.filter((e=>e!==r)));return{mdxAdmonitionTitle:null==r?void 0:r.props.children,rest:n}}(e.children),n=e.title??t;return{...e,...n&&{title:n},children:r}}var k=r(55225),y=r(14353),w=r(74477),L=r(1116),T=r(65130);const x=S.createContext(null);function N(e){let{children:t,content:r,isBlogPostPage:n=!1}=e;const s=function(e){let{content:t,isBlogPostPage:r}=e;return(0,S.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:r})),[t,r])}({content:r,isBlogPostPage:n});return S.createElement(x.Provider,{value:s},t)}function j(){const e=(0,S.useContext)(x);if(null===e)throw new u.i6("BlogPostProvider");return e}var D=r(59689),I=r(7094),A=r(93163),M=r(76857),B=r(94711),H=r(37016),F=r(82128),O=r(85936),R=r(51753),$=r(91980),V=r(39665),_=r(12466),z=r(48596),Z=r(58978),W=r(96841),q=r(99445),G=r(19727),U=r(69800),Q=r(16550),Y=r(52263);const X="q";function K(){const e=(0,Q.k6)(),{siteConfig:{baseUrl:t}}=(0,Y.Z)(),[r,n]=(0,S.useState)("");(0,S.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get(X)??"";n(e)}),[]);return{searchQuery:r,setSearchQuery:(0,S.useCallback)((t=>{const r=new URLSearchParams(window.location.search);t?r.set(X,t):r.delete(X),e.replace({search:r.toString()}),n(t)}),[e]),generateSearchPageLink:(0,S.useCallback)((e=>`${t}search?q=${encodeURIComponent(e)}`),[t])}}var J=r(85448),ee=r(2730)},37016:(e,t,r)=>{"use strict";r.d(t,{QC:()=>f,Vo:()=>d,bc:()=>i,nZ:()=>m,nt:()=>u});var n=r(87594),s=r.n(n);const o=/title=(?<quote>["'])(?<title>.*?)\1/,a=/\{(?<range>[\d,-]+)\}/,l={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function c(e,t){const r=e.map((e=>{const{start:r,end:n}=l[e];return`(?:${r}\\s*(${t.flatMap((e=>{var t,r;return[e.line,null==(t=e.block)?void 0:t.start,null==(r=e.block)?void 0:r.end].filter(Boolean)})).join("|")})\\s*${n})`})).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)}function i(e){var t;return(null==e||null==(t=e.match(o))?void 0:t.groups.title)??""}function u(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function d(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}function m(e,t){let r=e.replace(/\n$/,"");const{language:n,magicComments:o,metastring:i}=t;if(i&&a.test(i)){const e=i.match(a).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,n=s()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(n),code:r}}if(void 0===n)return{lineClassNames:{},code:r};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return c(["js","jsBlock"],t);case"jsx":case"tsx":return c(["js","jsBlock","jsx"],t);case"html":return c(["js","jsBlock","html"],t);case"python":case"py":case"bash":return c(["bash"],t);case"markdown":case"md":return c(["html","jsx","bash"],t);default:return c(Object.keys(l),t)}}(n,o),d=r.split("\n"),m=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),f=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:r}=e;return[r,t]}))),h=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:r}=e;return[r.start,t]}))),p=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:r}=e;return[r.end,t]})));for(let s=0;s<d.length;){const e=d[s].match(u);if(!e){s+=1;continue}const t=e.slice(1).find((e=>void 0!==e));f[t]?m[f[t]].range+=`${s},`:h[t]?m[h[t]].start=s:p[t]&&(m[p[t]].range+=`${m[p[t]].start}-${s-1},`),d.splice(s,1)}r=d.join("\n");const v={};return Object.entries(m).forEach((e=>{let[t,{range:r}]=e;s()(r).forEach((e=>{v[e]??=[],v[e].push(t)}))})),{lineClassNames:v,code:r}}function f(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach((e=>{let[n,s]=e;const o=t[n];o&&"string"==typeof s&&(r[o]=s)})),r}},35155:(e,t,r)=>{"use strict";r.d(t,{M:()=>s,P:()=>o});var n=r(95999);const s=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function o(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);t[r]??=[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[r]=e,[n]=t;return r.localeCompare(n)})).map((e=>{let[t,r]=e;return{letter:t,tags:r.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},39665:(e,t,r)=>{"use strict";r.d(t,{a:()=>o,b:()=>l});var n=r(67294);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),r=Array(7).fill(-1);t.forEach(((e,t)=>{const n=r.slice(2,e.level);e.parentIndex=Math.max(...n),r[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:r,...s}=e;r>=0?t[r].children.push(s):n.push(s)})),n}function o(e){return(0,n.useMemo)((()=>s(e)),[e])}function a(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:r,maxHeadingLevel:n});return function(e){return e.level>=r&&e.level<=n}(e)?[{...e,children:t}]:t}))}function l(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:o}=e;return(0,n.useMemo)((()=>a({toc:s(t),minHeadingLevel:r,maxHeadingLevel:o})),[t,r,o])}},88824:(e,t,r)=>{"use strict";r.d(t,{c:()=>u});var n=r(67294),s=r(52263),o=r(25108);const a=["zero","one","two","few","many","other"];function l(e){return a.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,s.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return o.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=i();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&o.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),a=r.pluralForms.indexOf(s);return n[Math.min(a,n.length-1)]}(r,t,e)}}},63303:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(87462),s=r(67294),o=r(67392),a=r(72389),l=r(86010);const c="tabItem_es3Q",i="schemaTabActive_dWHR",u="schemaTabsTopSection_sc6Y",d="schemaTabsListContainer_wmy4",m="schemaTabLabel_clV0",f="schemaTabsContainer_HVyG",h="tabArrow_zmvw",p="tabArrowLeft_RzDG",v="tabArrowRight_X4Xu",b="marginVertical_VWja",{useScrollPositionBlocker:g,useTabGroupChoice:C}=r(15147);function E(e){var t,r;const{lazy:a,block:E,defaultValue:S,values:P,groupId:k,className:y}=e,w=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),L=P??w.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),T=(0,o.l)(L,((e,t)=>e.value===t.value));if(T.length>0)throw new Error(`Docusaurus error: Duplicate values "${T.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===S?S:S??(null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=w[0])?void 0:r.props.value);if(null!==x&&!L.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${L.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:j}=C(),[D,I]=(0,s.useState)(x),A=[],{blockElementScrollPositionUntilNextRender:M}=g();if(null!=k){const e=N[k];null!=e&&e!==D&&L.some((t=>t.value===e))&&I(e)}const B=e=>{const t=e.currentTarget,r=A.indexOf(t),n=L[r].value;n!==D&&(M(t),I(n),null!=k&&j(k,n))},H=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=A.indexOf(e.currentTarget)+1;r=A[t]||A[0];break}case"ArrowLeft":{const t=A.indexOf(e.currentTarget)-1;r=A[t]||A[A.length-1];break}}null==(t=r)||t.focus()},F=(0,s.useRef)(null),[O,R]=(0,s.useState)(!1);(0,s.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)t.target.offsetWidth<t.target.scrollWidth?R(!0):R(!1)}));return e.observe(F.current),()=>{e.disconnect()}}),[]);return s.createElement("div",{className:"tabs__container"},s.createElement("div",{className:u},s.createElement("div",{className:f},O&&s.createElement("button",{className:(0,l.Z)(h,p),onClick:()=>{F.current.scrollLeft-=90}}),s.createElement("ul",{ref:F,role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)(d,"tabs",{"tabs--block":E},y)},L.map((e=>{let{value:t,label:r,attributes:o}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:e=>A.push(e),onKeyDown:H,onFocus:B,onClick:B},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{[i]:D===t})}),s.createElement("span",{className:m},r??t))}))),O&&s.createElement("button",{className:(0,l.Z)(h,v),onClick:()=>{F.current.scrollLeft+=90}}))),s.createElement("hr",null),a?(0,s.cloneElement)(w.filter((e=>e.props.value===D))[0]??w.filter((e=>e.props.value===x))[0],{className:b}):s.createElement("div",{className:b},w.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function S(e){const t=(0,a.Z)();return s.createElement(E,(0,n.Z)({key:String(t)},e))}},87594:(e,t)=>{function r(e){let t,r=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))r.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,s,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(o+=e);for(let t=n;t!==o;t+=e)r.push(t)}}return r}t.default=r,e.exports=r}}]);