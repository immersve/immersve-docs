const y="_top";class L extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const o=[...this.querySelectorAll("a")],d=t=>{if(t instanceof HTMLHeadingElement){if(t.id===y)return!0;const r=t.tagName[1];if(r){const e=parseInt(r,10);if(e>=this.minH&&e<=this.maxH)return!0}}return!1},c=t=>{if(!t)return null;const r=t;for(;t;){if(d(t))return t;for(t=t.previousElementSibling;t?.lastElementChild;)t=t.lastElementChild;const e=c(t);if(e)return e}return c(r.parentElement)},m=t=>{for(const{isIntersecting:r,target:e}of t){if(!r)continue;const l=c(e);if(!l)continue;const h=o.find(f=>f.hash==="#"+encodeURIComponent(l.id));if(h){this.current=h;break}}},u=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let s;const i=()=>{s&&s.disconnect(),s=new IntersectionObserver(m,{rootMargin:this.getRootMargin()}),u.forEach(t=>s.observe(t))};i();const a=window.requestIdleCallback||(t=>setTimeout(t,1));let g;window.addEventListener("resize",()=>{s&&s.disconnect(),clearTimeout(g),g=setTimeout(()=>a(i),200)})}set current(o){o!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),o.setAttribute("aria-current","true"),this._current=o)}getRootMargin(){const o=document.querySelector("header")?.getBoundingClientRect().height||0,d=this.querySelector("summary")?.getBoundingClientRect().height||0,c=o+d+32,m=c+53,u=document.documentElement.clientHeight;return`-${c}px 0% ${m-u}px`}}customElements.define("starlight-toc",L);const w="modulepreload",T=function(n){return"/"+n},E={},k=function(o,d,c){let m=Promise.resolve();if(d&&d.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),i=s?.nonce||s?.getAttribute("nonce");m=Promise.allSettled(d.map(a=>{if(a=T(a),a in E)return;E[a]=!0;const g=a.endsWith(".css"),t=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const r=document.createElement("link");if(r.rel=g?"stylesheet":w,g||(r.as="script"),r.crossOrigin="",r.href=a,i&&r.setAttribute("nonce",i),document.head.appendChild(r),g)return new Promise((e,l)=>{r.addEventListener("load",e),r.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${a}`)))})}))}function u(s){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s}return m.then(s=>{for(const i of s||[])i.status==="rejected"&&u(i.reason);return o().catch(u)})};class _ extends HTMLElement{constructor(){super();const o=this.querySelector("button[data-open-modal]"),d=this.querySelector("button[data-close-modal]"),c=this.querySelector("dialog"),m=this.querySelector(".dialog-frame"),u=e=>{("href"in(e.target||{})||document.body.contains(e.target)&&!m.contains(e.target))&&i()},s=e=>{c.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),e?.stopPropagation(),window.addEventListener("click",u)},i=()=>c.close();o.addEventListener("click",s),o.disabled=!1,d.addEventListener("click",i),c.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",u)}),window.addEventListener("keydown",e=>{const l=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);(e.metaKey===!0||e.ctrlKey===!0)&&e.key==="k"?(c.open?i():s(),e.preventDefault()):e.key==="/"&&!c.open&&!l&&(s(),e.preventDefault())});let a={};try{a=JSON.parse(this.dataset.translations||"{}")}catch{}const r=this.dataset.stripTrailingSlash!==void 0?e=>e.replace(/(.)\/(#.*)?$/,"$1$2"):e=>e;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(l=>setTimeout(l,1)))(async()=>{const{PagefindUI:l}=await k(async()=>{const{PagefindUI:h}=await import("./ui-core.BMNXcI8I.js");return{PagefindUI:h}},[]);new l({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:a,showSubResults:!0,processResult:h=>{h.url=r(h.url),h.sub_results=h.sub_results.map(f=>(f.url=r(f.url),f))}})})})}}customElements.define("site-search",_);const v="starlight-theme",b=n=>n==="auto"||n==="dark"||n==="light"?n:"auto",S=()=>b(typeof localStorage<"u"&&localStorage.getItem(v));function H(n){typeof localStorage<"u"&&localStorage.setItem(v,n==="light"||n==="dark"?n:"")}const I=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function p(n){StarlightThemeProvider.updatePickers(n),document.documentElement.dataset.theme=n==="auto"?I():n,H(n)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{S()==="auto"&&p("auto")});class M extends HTMLElement{constructor(){super(),p(S()),this.querySelector("select")?.addEventListener("change",o=>{o.currentTarget instanceof HTMLSelectElement&&p(b(o.currentTarget.value))})}}customElements.define("starlight-theme-select",M);class q extends HTMLElement{constructor(){super(),this.closeBtn=this.querySelector("button"),this.content=this.querySelector("#__menu_content"),this.addEventListener("click",()=>this.close()),this.closeBtn.addEventListener("click",()=>this.close()),this.content.addEventListener("click",o=>o.stopPropagation()),document.body.addEventListener("keyup",o=>this.closeOnEscape(o))}close(){document.body.toggleAttribute("data-mobile-menu-expanded",!1)}closeOnEscape(o){o.code==="Escape"&&this.close()}}customElements.define("nav-menu",q);class C extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.setExpanded())}setExpanded(){document.body.toggleAttribute("data-mobile-menu-expanded",!0)}}customElements.define("starlight-menu-button",C);export{k as _};