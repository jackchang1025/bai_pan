import{E as r,d as M,n as R,m as G,p as H,o as I,k as P}from"./element-plus@2.7.7_vue@3.4.32_typescript@5.5.3_-BPm-_N_9.js";import{i as D,a as x}from"./index--MJ3Ntw9.js";import{u as q}from"./aria2Store-BS58A1_x.js";import{u as J}from"./fileListStore-Cz3h90ev.js";import{c as A}from"./copy-Cz63vl_6.js";import{s as E}from"./pinia@2.1.7_typescript@5.5.3_vue@3.4.32_typescript@5.5.3_-BSzeUtha.js";import{d as K,o as p,G as f,H as a,i as o,L as s,c as O,F as Q,a as k}from"./@vue_runtime-core@3.4.32-BofAHbgu.js";import{r as W,u as _,a as X}from"./@vue_reactivity@3.4.32-DksAu7zd.js";import{L as C}from"./@vue_shared@3.4.32-CaCWPAm8.js";import"./@vue_runtime-dom@3.4.32-DNdjNMzo.js";import"./lodash-es@4.17.21-BB-zMWwC.js";import"./async-validator@4.2.5-DKvM95Vc.js";import"./@vueuse_core@9.13.0_vue@3.4.32_typescript@5.5.3_-DkVRVfGD.js";import"./@vueuse_shared@9.13.0_vue@3.4.32_typescript@5.5.3_-BbpdFR9m.js";import"./dayjs@1.11.11-Ct2Knyoi.js";import"./@element-plus_icons-vue@2.3.1_vue@3.4.32_typescript@5.5.3_-x2o2c_8n.js";import"./@sxzz_popperjs-es@2.11.7-D9SI2xQl.js";import"./normalize-wheel-es@1.2.0-B6fDCfyv.js";import"./@ctrl_tinycolor@3.6.1-r5W6hzzQ.js";import"./axios@1.7.2-B4uVmeYG.js";import"./vue-router@4.4.0_vue@3.4.32_typescript@5.5.3_-ByijA4Eg.js";import"./vue-demi@0.14.8_vue@3.4.32_typescript@5.5.3_-Dq6ymT-8.js";const Y=h=>new Promise(u=>setTimeout(u,h)),Z=k("h3",null,[s("下载请推荐使用Aria2下载器,如 "),k("a",{href:"https://motrix.app/",target:"_blank"},"Motrix")],-1),w=k("h3",null,"IDM下载需要手动指定UA,点击即可复制",-1),ee=k("h3",null,"如果当前链接下载失败,请尝试更换链接,如果全部不可用可以单独重新解析单个文件",-1),$e=K({__name:"DownloadLinks",setup(h){const u=J(),{downloadLinks:g,dialogVisible:y}=E(u),v=W([]),L=t=>v.value=t,V=q(),{aria2ConfigForm:i,aria2ConfigDialogVisible:F}=E(V),b=async t=>{try{await D.post(`${i.value.host}:${i.value.port}/jsonrpc`,{jsonrpc:"2.0",id:x(),method:"aria2.getVersion",params:[`token:${i.value.token}`]})}catch{return r.error("检查 Aria2 服务状态失败")}try{await D.post(`${i.value.host}:${i.value.port}/jsonrpc`,{jsonrpc:"2.0",id:x(),method:"aria2.addUri",params:[`token:${i.value.token}`,[t.urls?t.urls[t.index]:t.url],{out:t.filename,header:[`User-Agent: ${t.ua}`]}]})}catch{return r.error("发送失败, 请检查控制台输出, 自行谷歌搜索或提交issue")}r.success(`已把${t.filename}任务发送给下载器`)},S=async()=>{r.error("请确保最大同时下载文件数在5及以下,否则可能出现下载失败!"),await Y(3e3),r.success("开始下载"),v.value.forEach(t=>b(t))},U=()=>F.value=!0,$=async(t,l)=>{const n=await u.getDownloadLinks(l,!0);if(!n)return r.error("重新解析失败");g.value[t]=n[0]},z=t=>{g.value[t].index++};return(t,l)=>{const n=M,B=R,c=G,T=H,j=I,N=P;return p(),f(N,{title:"链接列表",modelValue:_(y),"onUpdate:modelValue":l[2]||(l[2]=e=>X(y)?y.value=e:null),"align-center":"","show-close":"","close-on-click-modal":!1},{default:a(()=>[Z,w,ee,o(B,null,{default:a(()=>[o(n,{type:"primary",disabled:v.value.length<=0,onClick:l[0]||(l[0]=e=>S())},{default:a(()=>[s(" 批量下载 ")]),_:1},8,["disabled"]),o(n,{type:"primary",onClick:l[1]||(l[1]=e=>U())},{default:a(()=>[s("下载配置")]),_:1})]),_:1}),o(j,{border:"","show-overflow-tooltip":"",class:"table",data:_(g),onSelectionChange:L},{default:a(()=>[o(c,{type:"selection",width:"40"}),o(c,{prop:"ua",label:"UA"},{default:a(({row:e})=>[o(T,{type:"danger",onClick:m=>_(A)(e.ua,"已复制UA")},{default:a(()=>[s(C(e.ua??e.url),1)]),_:2},1032,["onClick"])]),_:1}),o(c,{prop:"filename",label:"文件名"}),o(c,{prop:"url",label:"下载链接"},{default:a(({row:e})=>[s(C(e.urls?e.urls[e.index]:e.url),1)]),_:1}),o(c,{label:"操作",width:"400"},{default:a(({row:e,$index:m})=>[o(n,{type:"primary",size:"small",onClick:d=>_(A)(e.urls?e.urls[e.index]:e.url,"已将链接复制到粘贴板内")},{default:a(()=>[s(" 复制链接 ")]),_:2},1032,["onClick"]),o(n,{type:"primary",size:"small",onClick:d=>b(e)},{default:a(()=>[s(" 发送Aria2 ")]),_:2},1032,["onClick"]),e.urls?(p(),O(Q,{key:0},[e.index<e.urls.length-1?(p(),f(n,{key:0,type:"danger",size:"small",onClick:d=>z(m)},{default:a(()=>[s(" 更换链接 (当前第"+C(e.index+1)+"条链接) ",1)]),_:2},1032,["onClick"])):(p(),f(n,{key:1,type:"danger",size:"small",onClick:d=>$(m,e.fs_id)},{default:a(()=>[s(" 重新解析 ")]),_:2},1032,["onClick"]))],64)):(p(),f(n,{key:1,type:"danger",size:"small",onClick:d=>$(m,e.fs_id)},{default:a(()=>[s(" 重新解析 ")]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue"])}}});export{$e as default};
