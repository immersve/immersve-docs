const __vite__fileDeps=["_astro/ui-core.NwwMeOjz.js","_astro/Tabs.astro_astro_type_script_index_0_lang.CCIyraCc.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"./Tabs.astro_astro_type_script_index_0_lang.CCIyraCc.js";const S="_top";class L extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const s=[...this.querySelectorAll("a")],u=t=>{if(t instanceof HTMLHeadingElement){if(t.id===S)return!0;const d=t.tagName[1];if(d){const e=parseInt(d,10);if(e>=this.minH&&e<=this.maxH)return!0}}return!1},i=t=>{if(!t)return null;const d=t;for(;t;){if(u(t))return t;for(t=t.previousElementSibling;t?.lastElementChild;)t=t.lastElementChild;const e=i(t);if(e)return e}return i(d.parentElement)},g=t=>{for(const{isIntersecting:d,target:e}of t){if(!d)continue;const r=i(e);if(!r)continue;const l=s.find(f=>f.hash==="#"+encodeURIComponent(r.id));if(l){this.current=l;break}}},a=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let o;const h=()=>{o&&o.disconnect(),o=new IntersectionObserver(g,{rootMargin:this.getRootMargin()}),a.forEach(t=>o.observe(t))};h();const c=window.requestIdleCallback||(t=>setTimeout(t,1));let m;window.addEventListener("resize",()=>{o&&o.disconnect(),clearTimeout(m),m=setTimeout(()=>c(h),200)})}set current(s){s!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),s.setAttribute("aria-current","true"),this._current=s)}getRootMargin(){const s=document.querySelector("header")?.getBoundingClientRect().height||0,u=this.querySelector("summary")?.getBoundingClientRect().height||0,i=s+u+32,g=i+53,a=document.documentElement.clientHeight;return`-${i}px 0% ${g-a}px`}}customElements.define("starlight-toc",L);const w="modulepreload",k=function(n){return"/"+n},E={},T=function(s,u,i){let g=Promise.resolve();if(u&&u.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),h=o?.nonce||o?.getAttribute("nonce");g=Promise.all(u.map(c=>{if(c=k(c),c in E)return;E[c]=!0;const m=c.endsWith(".css"),t=m?'[rel="stylesheet"]':"";if(!!i)for(let r=a.length-1;r>=0;r--){const l=a[r];if(l.href===c&&(!m||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${t}`))return;const e=document.createElement("link");if(e.rel=m?"stylesheet":w,m||(e.as="script",e.crossOrigin=""),e.href=c,h&&e.setAttribute("nonce",h),document.head.appendChild(e),m)return new Promise((r,l)=>{e.addEventListener("load",r),e.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${c}`)))})}))}return g.then(()=>s()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})};class _ extends HTMLElement{constructor(){super();const s=this.querySelector("button[data-open-modal]"),u=this.querySelector("button[data-close-modal]"),i=this.querySelector("dialog"),g=this.querySelector(".dialog-frame"),a=e=>{("href"in(e.target||{})||document.body.contains(e.target)&&!g.contains(e.target))&&h()},o=e=>{i.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),e?.stopPropagation(),window.addEventListener("click",a)},h=()=>i.close();s.addEventListener("click",o),s.disabled=!1,u.addEventListener("click",h),i.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",a)}),window.addEventListener("keydown",e=>{const r=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);(e.metaKey===!0||e.ctrlKey===!0)&&e.key==="k"?(i.open?h():o(),e.preventDefault()):e.key==="/"&&!i.open&&!r&&(o(),e.preventDefault())});let c={};try{c=JSON.parse(this.dataset.translations||"{}")}catch{}const d=this.dataset.stripTrailingSlash!==void 0?e=>e.replace(/(.)\/(#.*)?$/,"$1$2"):e=>e;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(r=>setTimeout(r,1)))(async()=>{const{PagefindUI:r}=await T(()=>import("./ui-core.NwwMeOjz.js"),__vite__mapDeps([0,1]));new r({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:c,showSubResults:!0,processResult:l=>{l.url=d(l.url),l.sub_results=l.sub_results.map(f=>(f.url=d(f.url),f))}})})})}}customElements.define("site-search",_);const v="starlight-theme",b=n=>n==="auto"||n==="dark"||n==="light"?n:"auto",y=()=>b(typeof localStorage<"u"&&localStorage.getItem(v));function H(n){typeof localStorage<"u"&&localStorage.setItem(v,n==="light"||n==="dark"?n:"")}const M=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function p(n){StarlightThemeProvider.updatePickers(n),document.documentElement.dataset.theme=n==="auto"?M():n,H(n)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{y()==="auto"&&p("auto")});class I extends HTMLElement{constructor(){super(),p(y()),this.querySelector("select")?.addEventListener("change",s=>{s.currentTarget instanceof HTMLSelectElement&&p(b(s.currentTarget.value))})}}customElements.define("starlight-theme-select",I);class q extends HTMLElement{constructor(){super(),this.closeBtn=this.querySelector("button"),this.content=this.querySelector("#__menu_content"),this.addEventListener("click",()=>this.close()),this.closeBtn.addEventListener("click",()=>this.close()),this.content.addEventListener("click",s=>s.stopPropagation()),document.body.addEventListener("keyup",s=>this.closeOnEscape(s))}close(){document.body.toggleAttribute("data-mobile-menu-expanded",!1)}closeOnEscape(s){s.code==="Escape"&&this.close()}}customElements.define("nav-menu",q);class C extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.setExpanded())}setExpanded(){document.body.toggleAttribute("data-mobile-menu-expanded",!0)}}customElements.define("starlight-menu-button",C);export{T as _};
