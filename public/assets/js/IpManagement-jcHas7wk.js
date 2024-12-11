import{E as A,b as K,c as ee,i as q,j as J,e as te,d as Q,k as ae,v as W,m as le,o as oe,u as ne}from"./element-plus@2.7.7_vue@3.4.32_typescript@5.5.3_-BPm-_N_9.js";import{v as z}from"./@vue_runtime-dom@3.4.32-DNdjNMzo.js";import{i as k}from"./index-BcUQltO2.js";import{d as X,_ as se,$ as ie,o as g,G as C,H as l,i as t,L as u,I as b,c as R,F as B,R as Y,m as de,a as G,K as H}from"./@vue_runtime-core@3.4.32-BofAHbgu.js";import{r as m}from"./@vue_reactivity@3.4.32-DksAu7zd.js";import{L as S}from"./@vue_shared@3.4.32-CaCWPAm8.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./lodash-es@4.17.21-BB-zMWwC.js";import"./async-validator@4.2.5-DKvM95Vc.js";import"./@vueuse_core@9.13.0_vue@3.4.32_typescript@5.5.3_-DkVRVfGD.js";import"./@vueuse_shared@9.13.0_vue@3.4.32_typescript@5.5.3_-BbpdFR9m.js";import"./dayjs@1.11.11-Ct2Knyoi.js";import"./@element-plus_icons-vue@2.3.1_vue@3.4.32_typescript@5.5.3_-x2o2c_8n.js";import"./@sxzz_popperjs-es@2.11.7-D9SI2xQl.js";import"./normalize-wheel-es@1.2.0-B6fDCfyv.js";import"./@ctrl_tinycolor@3.6.1-r5W6hzzQ.js";import"./pinia@2.1.7_typescript@5.5.3_vue@3.4.32_typescript@5.5.3_-BSzeUtha.js";import"./vue-demi@0.14.8_vue@3.4.32_typescript@5.5.3_-Dq6ymT-8.js";import"./axios@1.7.2-B4uVmeYG.js";import"./@fingerprintjs_fingerprintjs@4.5.1-5RNCfJbQ.js";import"./tslib@2.6.3-CPxunF3b.js";import"./vue-router@4.4.0_vue@3.4.32_typescript@5.5.3_-ByijA4Eg.js";const ue=n=>k.post("/admin/ip",n),re=n=>k.get(`/admin/ip?page=${n.page}&size=${n.size}`),me=n=>k.patch(`/admin/ip/${n.id}`,n),ce=n=>k.delete("/admin/ip",{data:{ip_ids:[n.id]}}),fe=n=>k.delete("/admin/ip",{data:{ip_ids:n}}),_e=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,ve=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))/,Z=n=>_e.test(n)||ve.test(n),ge=X({__name:"AddIp",props:{modelValue:{},modelModifiers:{}},emits:se(["getIps"],["update:modelValue"]),setup(n,{emit:d}){const V=d,I=ie(n,"modelValue"),c=m(!1),F=(f,o,y)=>{if(!o)return y(new Error("请输入IP地址"));Z(o)?y():y(new Error("请输入有效的IP地址"))},i=m({ip:"",mode:0}),$=m(null),U={ip:[{validator:F,message:"请输入IP",trigger:"blur"}]},M=async f=>{if(!(!f||!await f.validate()))try{c.value=!0,await ue(i.value),A.success("添加成功")}finally{c.value=!1}},w=f=>{V("getIps"),f()},x=()=>{I.value=!1,V("getIps")};return(f,o)=>{const y=K,a=ee,s=q,_=J,r=te,E=Q,L=ae,D=W;return g(),C(L,{title:"添加IP",width:"60%",modelValue:I.value,"onUpdate:modelValue":o[4]||(o[4]=p=>I.value=p),"before-close":w},{footer:l(()=>[t(E,{type:"info",onClick:o[2]||(o[2]=p=>x())},{default:l(()=>[u("取消")]),_:1}),t(E,{type:"primary",onClick:o[3]||(o[3]=p=>M($.value))},{default:l(()=>[u("添加")]),_:1})]),default:l(()=>[b((g(),C(r,{ref_key:"addIpFormRef",ref:$,model:i.value,rules:U,"label-width":"auto"},{default:l(()=>[t(a,{label:"IP",prop:"ip"},{default:l(()=>[t(y,{modelValue:i.value.ip,"onUpdate:modelValue":o[0]||(o[0]=p=>i.value.ip=p)},null,8,["modelValue"])]),_:1}),t(a,{label:"模式",prop:"mode"},{default:l(()=>[t(_,{modelValue:i.value.mode,"onUpdate:modelValue":o[1]||(o[1]=p=>i.value.mode=p)},{default:l(()=>[(g(),R(B,null,Y(["黑名单","白名单"],(p,P)=>t(s,{key:P,label:p,value:P},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[D,c.value]])]),_:1},8,["modelValue"])}}}),Ie=X({__name:"IpManagement",setup(n){const d=m(!1),V=m(15),I=m(1),c=m(),F=m([]),i=async()=>{try{d.value=!0;const a=await re({page:I.value,size:V.value});c.value=a.data}finally{d.value=!1}},$=async a=>{a.edit=!(a.edit??!1)},U=async a=>{if(!Z(a.ip))return A.error("请输入正确的IP");a.edit=!(a.edit??!0),await M(a)},M=async a=>{try{d.value=!0,await me(a),A.success("修改IP成功")}finally{d.value=!1,await i()}},w=async a=>{try{d.value=!0,await ce(a),A.success("删除IP成功")}finally{d.value=!1,await i()}},x=async()=>{try{d.value=!0;const a=F.value.map(s=>s.id);await fe(a),A.success("批量删除IP成功")}finally{d.value=!1,await i()}},f=a=>F.value=a;de(i);const o=m(!1),y=()=>o.value=!o.value;return(a,s)=>{var N,O,T;const _=Q,r=le,E=K,L=q,D=J,p=oe,P=ne,h=W;return g(),R(B,null,[t(ge,{onGetIps:i,modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=e=>o.value=e)},null,8,["modelValue"]),t(_,{type:"primary",onClick:s[1]||(s[1]=e=>i())},{default:l(()=>[u("刷新列表")]),_:1}),t(_,{type:"primary",onClick:s[2]||(s[2]=e=>y())},{default:l(()=>[u("添加IP")]),_:1}),t(_,{type:"danger",disabled:F.value.length<=0,onClick:s[3]||(s[3]=e=>x())},{default:l(()=>[u(" 批量删除 ")]),_:1},8,["disabled"]),b((g(),C(p,{data:((N=c.value)==null?void 0:N.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:f},{default:l(()=>[t(r,{type:"selection",width:"40"}),t(r,{prop:"id",label:"ID"}),t(r,{prop:"ip",label:"IP"},{default:l(({row:e})=>[b(G("span",null,S(e.ip),513),[[z,!e.edit]]),b(t(E,{modelValue:e.ip,"onUpdate:modelValue":v=>e.ip=v},null,8,["modelValue","onUpdate:modelValue"]),[[z,e.edit]])]),_:1}),t(r,{prop:"mode",label:"模式"},{default:l(({row:e})=>[b(G("span",null,S(e.mode?"白名单":"黑名单"),513),[[z,!e.edit]]),b(t(D,{modelValue:e.mode,"onUpdate:modelValue":v=>e.mode=v},{default:l(()=>[(g(),R(B,null,Y(["黑名单","白名单"],(v,j)=>t(L,{key:j,label:v,value:j},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),[[z,e.edit]])]),_:1}),t(r,{prop:"created_at",label:"创建时间"},{default:l(({row:e})=>[u(S(new Date(e.created_at).toLocaleString()),1)]),_:1}),t(r,{prop:"updated_at",label:"更新时间"},{default:l(({row:e})=>[u(S(new Date(e.updated_at).toLocaleString()),1)]),_:1}),t(r,{width:"150",label:"操作",fixed:"right"},{default:l(({row:e})=>[e.edit?H("",!0):(g(),C(_,{key:0,size:"small",type:"primary",onClick:v=>$(e)},{default:l(()=>[u(" 编辑 ")]),_:2},1032,["onClick"])),e.edit?(g(),C(_,{key:1,size:"small",type:"primary",onClick:v=>U(e)},{default:l(()=>[u(" 保存 ")]),_:2},1032,["onClick"])):H("",!0),t(_,{size:"small",type:"danger",onClick:v=>w(e)},{default:l(()=>[u("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[h,d.value]]),t(P,{"current-page":I.value,"onUpdate:currentPage":s[4]||(s[4]=e=>I.value=e),"page-size":V.value,"onUpdate:pageSize":s[5]||(s[5]=e=>V.value=e),"page-sizes":[15,50,100,500,((O=c.value)==null?void 0:O.total)??100],total:((T=c.value)==null?void 0:T.total)??100,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:i,onCurrentChange:i},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),Te=pe(Ie,[["__scopeId","data-v-bfd061e8"]]);export{Te as default};
