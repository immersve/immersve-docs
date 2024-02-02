"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[8319],{85162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294),o=r(86010);const n={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(n.tabItem,s),hidden:r},t)}},65130:(e,t,r)=>{r.d(t,{b:()=>s,k:()=>l});var a=r(67294),o=r(902);const n=a.createContext(null);function s(e){let{children:t,content:r}=e;const o=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return a.createElement(n.Provider,{value:o},t)}function l(){const e=(0,a.useContext)(n);if(null===e)throw new o.i6("DocProvider");return e}},14353:(e,t,r)=>{r.d(t,{D:()=>l,f:()=>c});var a=r(67294),o=r(902);const n=Symbol("EmptyContext"),s=a.createContext(n);function l(e){let{children:t}=e;const[r,o]=(0,a.useState)(null),n=(0,a.useMemo)((()=>({expandedItem:r,setExpandedItem:o})),[r]);return a.createElement(s.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(s);if(e===n)throw new o.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,r)=>{r.d(t,{a:()=>s});var a=r(67294),o=r(12466),n=r(85936);function s(e){let{threshold:t}=e;const[r,s]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:c,cancelScroll:i}=(0,o.Ct)();return(0,o.RF)(((e,r)=>{let{scrollY:a}=e;const o=r?.scrollY;o&&(l.current?l.current=!1:a>=o?(i(),s(!1)):a<t?s(!1):a+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,n.S)((e=>{e.location.hash&&(l.current=!0,s(!1))})),{shown:r,scrollToTop:()=>c(0)}}},15147:(e,t,r)=>{r.r(t),r.d(t,{AnnouncementBarProvider:()=>N.pl,BlogPostProvider:()=>D,Collapsible:()=>c.z,ColorModeProvider:()=>m.S,DEFAULT_SEARCH_TAG:()=>n.HX,DocProvider:()=>L.b,DocSidebarItemsExpandedStateProvider:()=>E.D,DocsPreferredVersionContextProvider:()=>T.L5,DocsSidebarProvider:()=>k.b,DocsVersionProvider:()=>y.q,HtmlClassNameProvider:()=>d.FG,NavbarProvider:()=>G.V,NavbarSecondaryMenuFiller:()=>b.Zo,PageMetadata:()=>d.d,PluginHtmlClassNameProvider:()=>d.VC,ReactContextError:()=>u.i6,ScrollControllerProvider:()=>H.OC,SkipToContentFallbackId:()=>w.u,SkipToContentLink:()=>w.l,TabGroupChoiceProvider:()=>x.z,ThemeClassNames:()=>i.k,composeProviders:()=>u.Qc,containsLineNumbers:()=>R.nt,createStorageSlot:()=>o.W,docVersionSearchTag:()=>n.os,duplicates:()=>g.l,filterDocCardListItems:()=>s.MN,findFirstCategoryLink:()=>s.Wl,findSidebarCategory:()=>s.em,getPrismCssVariables:()=>R.QC,isActiveSidebarItem:()=>s._F,isDocsPluginEnabled:()=>s.cE,isMultiColumnFooterLinks:()=>f.a,isRegexpStringMatch:()=>v.F,isSamePath:()=>z.Mg,keyboardFocusedClassName:()=>j.h,listStorageKeys:()=>o._,listTagsByLetters:()=>p.P,parseCodeBlockTitle:()=>R.bc,parseLanguage:()=>R.Vo,parseLines:()=>R.nZ,processAdmonitionProps:()=>S,splitNavbarItems:()=>G.A,translateTagsPageTitle:()=>p.M,uniq:()=>g.j,useAlternatePageUtils:()=>M.l,useAnnouncementBar:()=>N.nT,useBackToTopButton:()=>ee.a,useBlogPost:()=>I,useCodeWordWrap:()=>J.F,useCollapsible:()=>c.u,useColorMode:()=>m.I,useContextualSearchFilters:()=>n._q,useCurrentSidebarCategory:()=>s.jA,useDoc:()=>L.k,useDocById:()=>s.xz,useDocRouteMetadata:()=>s.hI,useDocSidebarItemsExpandedState:()=>E.f,useDocsPreferredVersion:()=>T.J,useDocsPreferredVersionByPluginId:()=>T.Oh,useDocsSidebar:()=>k.V,useDocsVersion:()=>y.E,useDocsVersionCandidates:()=>s.lO,useEvent:()=>u.zX,useFilteredAndTreeifiedTOC:()=>$.b,useHideableNavbar:()=>W.c,useHistoryPopHandler:()=>Z.R,useHomePageRoute:()=>z.Ns,useIsomorphicLayoutEffect:()=>u.LI,useKeyboardNavigation:()=>j.t,useLayoutDoc:()=>s.vY,useLayoutDocsSidebar:()=>s.oz,useLocalPathname:()=>O.b,useLocationChange:()=>B.S,useLockBodyScroll:()=>q.N,useNavbarMobileSidebar:()=>F.e,useNavbarSecondaryMenu:()=>V.Y,usePluralForm:()=>l.c,usePrevious:()=>u.D9,usePrismTheme:()=>C.p,useScrollController:()=>H.sG,useScrollPosition:()=>H.RF,useScrollPositionBlocker:()=>H.o5,useSearchPage:()=>K,useSidebarBreadcrumbs:()=>s.s1,useSmoothScrollTo:()=>H.Ct,useTOCHighlight:()=>U.S,useTabGroupChoice:()=>x.U,useThemeConfig:()=>a.L,useTitleFormatter:()=>_.p,useTreeifiedTOC:()=>$.a,useWindowSize:()=>h.i});var a=r(86668),o=r(50012),n=r(43320),s=r(53438),l=r(88824),c=r(86043),i=r(35281),u=r(902),d=r(10833),m=r(92949),b=r(13102),h=r(87524),p=r(35155),f=r(42489),v=r(98022),g=r(67392),C=r(66412),T=r(60373),P=r(67294);function S(e){const{mdxAdmonitionTitle:t,rest:r}=function(e){const t=P.Children.toArray(e),r=t.find((e=>P.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=P.createElement(P.Fragment,null,t.filter((e=>e!==r)));return{mdxAdmonitionTitle:r?.props.children,rest:a}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:r}}var w=r(55225),E=r(14353),y=r(74477),k=r(1116),L=r(65130);const A=P.createContext(null);function D(e){let{children:t,content:r,isBlogPostPage:a=!1}=e;const o=function(e){let{content:t,isBlogPostPage:r}=e;return(0,P.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:r})),[t,r])}({content:r,isBlogPostPage:a});return P.createElement(A.Provider,{value:o},t)}function I(){const e=(0,P.useContext)(A);if(null===e)throw new u.i6("BlogPostProvider");return e}var N=r(59689),x=r(7094),F=r(93163),V=r(76857),M=r(94711),R=r(37016),_=r(82128),B=r(85936),O=r(51753),Z=r(91980),$=r(39665),H=r(12466),z=r(48596),G=r(58978),U=r(96841),W=r(99445),j=r(19727),q=r(69800),Y=r(16550),Q=r(52263);const X="q";function K(){const e=(0,Y.k6)(),{siteConfig:{baseUrl:t}}=(0,Q.Z)(),[r,a]=(0,P.useState)("");(0,P.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get(X)??"";a(e)}),[]);return{searchQuery:r,setSearchQuery:(0,P.useCallback)((t=>{const r=new URLSearchParams(window.location.search);t?r.set(X,t):r.delete(X),e.replace({search:r.toString()}),a(t)}),[e]),generateSearchPageLink:(0,P.useCallback)((e=>`${t}search?${X}=${encodeURIComponent(e)}`),[t])}}var J=r(85448),ee=r(2730)},35155:(e,t,r)=>{r.d(t,{M:()=>o,P:()=>n});var a=r(95999);const o=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function n(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);t[r]??=[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[r]=e,[a]=t;return r.localeCompare(a)})).map((e=>{let[t,r]=e;return{letter:t,tags:r.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},88824:(e,t,r)=>{r.d(t,{c:()=>u});var a=r(67294),o=r(52263),n=r(25108);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return n.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=i();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&n.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return a[Math.min(s,a.length-1)]}(r,t,e)}}},63303:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),o=r(67294),n=r(67392),s=r(72389),l=r(86010);const c={tabItem:"tabItem_es3Q",schemaTabActive:"schemaTabActive_dWHR",schemaTabsTopSection:"schemaTabsTopSection_sc6Y",schemaTabsListContainer:"schemaTabsListContainer_wmy4",schemaTabLabel:"schemaTabLabel_clV0",schemaTabsContainer:"schemaTabsContainer_HVyG",tabArrow:"tabArrow_zmvw",tabArrowLeft:"tabArrowLeft_RzDG",tabArrowRight:"tabArrowRight_X4Xu",marginVertical:"marginVertical_VWja"},{useScrollPositionBlocker:i,useTabGroupChoice:u}=r(15147);function d(e){const{lazy:t,block:r,defaultValue:s,values:d,groupId:m,className:b}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),p=d??h.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),f=(0,n.l)(p,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===s?s:s??h.find((e=>e.props.default))?.props.value??h[0]?.props.value;if(null!==v&&!p.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${p.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:C}=u(),[T,P]=(0,o.useState)(v),S=[],{blockElementScrollPositionUntilNextRender:w}=i();if(null!=m){const e=g[m];null!=e&&e!==T&&p.some((t=>t.value===e))&&P(e)}const E=e=>{const t=e.currentTarget,r=S.indexOf(t),a=p[r].value;a!==T&&(w(t),P(a),null!=m&&C(m,a))},y=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=S.indexOf(e.currentTarget)+1;t=S[r]||S[0];break}case"ArrowLeft":{const r=S.indexOf(e.currentTarget)-1;t=S[r]||S[S.length-1];break}}t?.focus()},k=(0,o.useRef)(null),[L,A]=(0,o.useState)(!1);(0,o.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)t.target.offsetWidth<t.target.scrollWidth?A(!0):A(!1)}));return e.observe(k.current),()=>{e.disconnect()}}),[]);return o.createElement("div",{className:"tabs__container"},o.createElement("div",{className:c.schemaTabsTopSection},o.createElement("div",{className:c.schemaTabsContainer},L&&o.createElement("button",{className:(0,l.Z)(c.tabArrow,c.tabArrowLeft),onClick:()=>{k.current.scrollLeft-=90}}),o.createElement("ul",{ref:k,role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)(c.schemaTabsListContainer,"tabs",{"tabs--block":r},b)},p.map((e=>{let{value:t,label:r,attributes:n}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>S.push(e),onKeyDown:y,onFocus:E,onClick:E},n,{className:(0,l.Z)("tabs__item",c.tabItem,n?.className,{[c.schemaTabActive]:T===t})}),o.createElement("span",{className:c.schemaTabLabel},r??t))}))),L&&o.createElement("button",{className:(0,l.Z)(c.tabArrow,c.tabArrowRight),onClick:()=>{k.current.scrollLeft+=90}}))),o.createElement("hr",null),t?(0,o.cloneElement)(h.filter((e=>e.props.value===T))[0]??h.filter((e=>e.props.value===v))[0],{className:c.marginVertical}):o.createElement("div",{className:c.marginVertical},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,s.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);