const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/UserView-EJBQ5Pca.js","assets/js/@vue_runtime-core@3.4.32-BofAHbgu.js","assets/js/@vue_reactivity@3.4.32-DksAu7zd.js","assets/js/@vue_shared@3.4.32-CaCWPAm8.js","assets/js/_plugin-vue_export-helper-DlAUqK2U.js","assets/js/element-plus@2.7.7_vue@3.4.32_typescript@5.5.3_-BPm-_N_9.js","assets/js/@vue_runtime-dom@3.4.32-DNdjNMzo.js","assets/js/lodash-es@4.17.21-BB-zMWwC.js","assets/js/async-validator@4.2.5-DKvM95Vc.js","assets/js/@vueuse_core@9.13.0_vue@3.4.32_typescript@5.5.3_-DkVRVfGD.js","assets/js/@vueuse_shared@9.13.0_vue@3.4.32_typescript@5.5.3_-BbpdFR9m.js","assets/js/dayjs@1.11.11-Ct2Knyoi.js","assets/js/@element-plus_icons-vue@2.3.1_vue@3.4.32_typescript@5.5.3_-x2o2c_8n.js","assets/js/@sxzz_popperjs-es@2.11.7-D9SI2xQl.js","assets/js/normalize-wheel-es@1.2.0-B6fDCfyv.js","assets/js/@ctrl_tinycolor@3.6.1-r5W6hzzQ.js","assets/css/element-plus@2.7.7_vue@3.4.32_typescript@5.5-YF1DmkJl.css","assets/js/pinia@2.1.7_typescript@5.5.3_vue@3.4.32_typescript@5.5.3_-BSzeUtha.js","assets/js/vue-demi@0.14.8_vue@3.4.32_typescript@5.5.3_-Dq6ymT-8.js","assets/js/axios@1.7.2-B4uVmeYG.js","assets/js/vue-router@4.4.0_vue@3.4.32_typescript@5.5.3_-ByijA4Eg.js","assets/css/UserView-BUO1heXg.css","assets/js/LoginView-CVwcOw90.js","assets/js/favicon-BrYC5Vmz.js","assets/css/LoginView-kFAD-Fzo.css","assets/js/RegisterView-CARk48h8.js","assets/css/RegisterView-BnKfmdM9.css","assets/js/AdminView-BHUVIk_7.js","assets/js/InstallView-xr1OdHDL.js","assets/css/InstallView-CRaRKPdy.css","assets/js/NotFoundView-D8J8xe3g.js","assets/css/NotFoundView-B8o8jygP.css"])))=>i.map(i=>d[i]);
import{E as p}from"./element-plus@2.7.7_vue@3.4.32_typescript@5.5.3_-BPm-_N_9.js";import{d as L,c as S}from"./pinia@2.1.7_typescript@5.5.3_vue@3.4.32_typescript@5.5.3_-BSzeUtha.js";import{e as b}from"./@vue_runtime-dom@3.4.32-DNdjNMzo.js";import{a as A}from"./axios@1.7.2-B4uVmeYG.js";import{r as P,u as R}from"./@vue_reactivity@3.4.32-DksAu7zd.js";import{R as I,c as O,a as k}from"./vue-router@4.4.0_vue@3.4.32_typescript@5.5.3_-ByijA4Eg.js";import{d as C,m as $,G as T,o as D}from"./@vue_runtime-core@3.4.32-BofAHbgu.js";import"./@vue_shared@3.4.32-CaCWPAm8.js";import"./lodash-es@4.17.21-BB-zMWwC.js";import"./async-validator@4.2.5-DKvM95Vc.js";import"./@vueuse_core@9.13.0_vue@3.4.32_typescript@5.5.3_-DkVRVfGD.js";import"./@vueuse_shared@9.13.0_vue@3.4.32_typescript@5.5.3_-BbpdFR9m.js";import"./dayjs@1.11.11-Ct2Knyoi.js";import"./@element-plus_icons-vue@2.3.1_vue@3.4.32_typescript@5.5.3_-x2o2c_8n.js";import"./@sxzz_popperjs-es@2.11.7-D9SI2xQl.js";import"./normalize-wheel-es@1.2.0-B6fDCfyv.js";import"./@ctrl_tinycolor@3.6.1-r5W6hzzQ.js";import"./vue-demi@0.14.8_vue@3.4.32_typescript@5.5.3_-Dq6ymT-8.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const V="modulepreload",x=function(e){return"/"+e},f={},u=function(n,o,s){let r=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),a=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(o.map(c=>{if(c=x(c),c in f)return;f[c]=!0;const d=c.endsWith(".css"),E=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${E}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":V,d||(l.as="script",l.crossOrigin=""),l.href=c,a&&l.setAttribute("nonce",a),document.head.appendChild(l),d)return new Promise((v,w)=>{l.addEventListener("load",v),l.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}return r.then(()=>n()).catch(t=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=t,window.dispatchEvent(a),!a.defaultPrevented)throw t})},ce=()=>localStorage.getItem("login_state")??"0",g=e=>localStorage.setItem("login_state",e),le=()=>localStorage.getItem("login_role")??"user",h=e=>localStorage.setItem("login_role",e),q=()=>localStorage.getItem("announce")??"",me=e=>localStorage.setItem("announce",e),ue=async()=>(await u(async()=>{const{default:e}=await import("./package-Bok8koxj.js");return{default:e}},[])).default.version,N=()=>{var e;return((e=document.querySelector("meta[name='app_name']"))==null?void 0:e.getAttribute("content"))??"94list-laravel"},pe=()=>{const e=localStorage.getItem("aria2_config");return e?JSON.parse(e):{host:"http://localhost",port:6800,token:""}},de=e=>localStorage.setItem("aria2_config",JSON.stringify(e));function M(){return window.APP_CONFIG}const i=A.create({baseURL:M().apiBaseUrl,timeout:1/0,headers:{Accept:"application/json","Content-Type":"application/json"}});i.interceptors.request.use(e=>{if(e.data||(e.data={}),e.params||(e.params={}),e.url){const n=new URLSearchParams(e.url.split("?")[1]);e.params={...e.params,...Object.fromEntries(n)}}return e});i.interceptors.response.use(e=>e==null?void 0:e.data,e=>{var o,s;const n=(s=(o=e.response)==null?void 0:o.data)==null?void 0:s.message;return n?n==="用户未登陆"?(p.error("登陆已过期, 请重新登陆!"),g("0"),setTimeout(()=>location.href="/login",1e3)):n==="Too Many Attempts."?p.error("请求量过大! 请等待10分钟后重试!"):n==="用户权限不足"?(p.error("用户权限不足, 请联系管理员!"),h("user"),setTimeout(()=>location.href="/user",1e3)):p.error(n):(p.error("服务器异常, 请稍后再试"),console.log(e)),Promise.reject(e.response.data)});const m=e=>typeof e=="string"?parseInt(e):e,U=()=>i.get("/parse/config"),ge=async e=>{const n=await i.post("/parse/get_file_list",e);return n.data.list=n.data.list.map(o=>(o.category=m(o.category),o.fs_id=m(o.fs_id),o.isdir=m(o.isdir),o.local_ctime=m(o.local_ctime),o.local_mtime=m(o.local_mtime),o.server_ctime=m(o.local_mtime),o.server_mtime=m(o.local_mtime),o.size=m(o.size),o)),n},_e=e=>i.post("/parse/get_vcode",e),fe=e=>i.post("/parse/get_download_links",e),he=e=>i.get(`/parse/limit?token=${e.token}`),ye=e=>i.post("/user/login",e),Ee=e=>i.post("/user/register",e),j=()=>i.delete("/user"),B=L("mainStore",()=>{const e=P({show_announce:!1,announce:"",debug:!1,max_once:0,have_account:!1,have_login:!1,need_inv_code:!1,need_password:!1,is_https:!1,show_copyright:!1,custom_copyright:"",min_single_filesize:0,max_single_filesize:0,token_mode:!1,button_link:"",show_login_button:!1});return{config:e,logout:async()=>{try{await j()}finally{g("0"),h("user"),location.reload(),p.success("退出登陆成功~")}},getConfig:async(s=!0)=>{const t=(await U()).data;t.announce=t.announce.replaceAll("[NextLine]","<br>"),t.announce===q()&&(t.show_announce=!1),s||(t.show_announce=!1),e.value={...t,is_https:document.location.protocol==="https:"},g(t.have_login?"1":"0")}}}),F=C({__name:"App",setup(e){const n=B();function o(){const s="0123456789ABCDEF";let r="#";for(let t=0;t<6;t++)r+=s[Math.floor(Math.random()*16)];return r}return $(async()=>{console.info(`%c
 █████╗   ██╗  ██╗  ██╗       ██╗  ███████╗  ████████╗          ██╗        █████╗   ██████╗    █████╗   ██╗   ██╗  ███████╗  ██╗     
██╔══██╗  ██║  ██║  ██║       ██║  ██╔════╝  ╚══██╔══╝          ██║       ██╔══██╗  ██╔══██╗  ██╔══██╗  ██║   ██║  ██╔════╝  ██║     
╚██████║  ███████║  ██║       ██║  ███████╗     ██║     █████╗  ██║       ███████║  ██████╔╝  ███████║  ██║   ██║  █████╗    ██║     
 ╚═══██║  ╚════██║  ██║       ██║  ╚════██║     ██║     ╚════╝  ██║       ██╔══██║  ██╔══██╗  ██╔══██║  ╚██╗ ██╔╝  ██╔══╝    ██║     
 █████╔╝       ██║  ███████╗  ██║  ███████║     ██║             ███████╗  ██║  ██║  ██║  ██║  ██║  ██║   ╚████╔╝   ███████╗  ███████╗
 ╚════╝        ╚═╝  ╚══════╝  ╚═╝  ╚══════╝     ╚═╝             ╚══════╝  ╚═╝  ╚═╝  ╚═╝  ╚═╝  ╚═╝  ╚═╝    ╚═══╝    ╚══════╝  ╚══════╝ `,`font-family: courier; background: linear-gradient(to right, ${o()}, ${o()});-webkit-background-clip: text;color: transparent;`);const s=window.matchMedia("(prefers-color-scheme: dark)");r(s),s.addEventListener("change",r);function r(t){t.matches?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")}await n.getConfig()}),(s,r)=>(D(),T(R(I)))}}),y=O({history:k("/"),routes:[{path:"/",name:"index",redirect:"/user"},{path:"/user",name:"user",meta:{title:"前台解析中心"},component:()=>u(()=>import("./UserView-EJBQ5Pca.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]))},{path:"/login",name:"login",meta:{title:"登陆"},component:()=>u(()=>import("./LoginView-CVwcOw90.js"),__vite__mapDeps([22,5,6,1,2,3,7,8,9,10,11,12,13,14,15,16,23,20,4,17,18,19,24]))},{path:"/register",name:"register",meta:{title:"注册"},component:()=>u(()=>import("./RegisterView-CARk48h8.js"),__vite__mapDeps([25,5,6,1,2,3,7,8,9,10,11,12,13,14,15,16,23,20,4,17,18,19,26]))},{path:"/admin",name:"admin",meta:{title:"后台控制中心"},component:()=>u(()=>import("./AdminView-BHUVIk_7.js"),__vite__mapDeps([27,5,6,1,2,3,7,8,9,10,11,12,13,14,15,16,20,17,18,19]))},{path:"/install",name:"install",meta:{title:"安装"},component:()=>u(()=>import("./InstallView-xr1OdHDL.js"),__vite__mapDeps([28,5,6,1,2,3,7,8,9,10,11,12,13,14,15,16,23,20,4,17,18,19,29]))},{path:"/404",name:"404",meta:{title:"404页面不存在"},component:()=>u(()=>import("./NotFoundView-D8J8xe3g.js"),__vite__mapDeps([30,20,2,3,1,31]))},{path:"/:pathMatch(.*)",redirect:"/404"}]});y.beforeEach((e,n,o)=>{document.title=`${e.meta.title} | ${N()}`,o()});const _=b(F);_.use(S());_.use(y);_.mount("#app");export{u as _,N as a,h as b,le as c,me as d,ge as e,fe as f,ce as g,_e as h,i,he as j,pe as k,ye as l,de as m,ue as n,Ee as r,g as s,B as u};