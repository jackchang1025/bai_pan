import{E as M,i as ee,j as te,c as le,r as H,b as K,e as ae,d as J,k as ne,v as Q,m as oe,w as ue,o as de,u as se}from"./element-plus@2.7.7_vue@3.4.32_typescript@5.5.3_-BPm-_N_9.js";import{v as y}from"./@vue_runtime-dom@3.4.32-DNdjNMzo.js";import{i as x}from"./index-B0cHC-7S.js";import{d as W,_ as ie,$ as pe,o as g,G as T,H as l,i as t,L as c,I as r,c as X,F as Y,R as me,m as re,a as z,K as q}from"./@vue_runtime-core@3.4.32-BofAHbgu.js";import{r as V,u as N}from"./@vue_reactivity@3.4.32-DksAu7zd.js";import{c as R}from"./copy-Cz63vl_6.js";import{f as O}from"./format-CyW-QbYa.js";import{L as _}from"./@vue_shared@3.4.32-CaCWPAm8.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./lodash-es@4.17.21-BB-zMWwC.js";import"./async-validator@4.2.5-DKvM95Vc.js";import"./@vueuse_core@9.13.0_vue@3.4.32_typescript@5.5.3_-DkVRVfGD.js";import"./@vueuse_shared@9.13.0_vue@3.4.32_typescript@5.5.3_-BbpdFR9m.js";import"./dayjs@1.11.11-Ct2Knyoi.js";import"./@element-plus_icons-vue@2.3.1_vue@3.4.32_typescript@5.5.3_-x2o2c_8n.js";import"./@sxzz_popperjs-es@2.11.7-D9SI2xQl.js";import"./normalize-wheel-es@1.2.0-B6fDCfyv.js";import"./@ctrl_tinycolor@3.6.1-r5W6hzzQ.js";import"./pinia@2.1.7_typescript@5.5.3_vue@3.4.32_typescript@5.5.3_-BSzeUtha.js";import"./vue-demi@0.14.8_vue@3.4.32_typescript@5.5.3_-Dq6ymT-8.js";import"./axios@1.7.2-B4uVmeYG.js";import"./@fingerprintjs_fingerprintjs@4.5.1-5RNCfJbQ.js";import"./tslib@2.6.3-CPxunF3b.js";import"./vue-router@4.4.0_vue@3.4.32_typescript@5.5.3_-ByijA4Eg.js";const _e=i=>x.post("/admin/token",i),fe=i=>x.post("/admin/token/generate",i),ve=i=>x.get(`/admin/token?page=${i.page}&size=${i.size}`),ye=i=>x.patch(`/admin/token/${i.id}`,i),ge=i=>x.delete("/admin/token",{data:{token_ids:[i.id]}}),ke=i=>x.delete("/admin/token",{data:{token_ids:i}}),Ve=W({__name:"AddToken",props:{modelValue:{},modelModifiers:{}},emits:ie(["getTokens"],["update:modelValue"]),setup(i,{emit:f}){const $=f,C=pe(i,"modelValue"),b=V(!1),a=V({type:"single",name:"",count:1,size:1,day:1}),v=V(null),F={name:[{required:!0,message:"请输入卡密名称",trigger:"blur"}],token_count:[{required:!0,message:"请输入卡密个数",trigger:"blur"}],day:[{required:!0,message:"请输入卡密天数",trigger:"blur"}],count:[{required:!0,message:"请输入可下载次数",trigger:"blur"}],size:[{required:!0,message:"请输入可下载大小",trigger:"blur"}]},L=async U=>{if(!(!U||!await U.validate()))try{b.value=!0,a.value.type==="single"?await _e({type:"single",name:a.value.name,count:a.value.count,size:a.value.size,day:a.value.day}):await fe({type:"random",token_count:a.value.token_count,count:a.value.count,size:a.value.size,day:a.value.day}),M.success("添加成功")}finally{b.value=!1}},B=U=>{$("getTokens"),U()},j=()=>{C.value=!1,$("getTokens")};return(U,d)=>{const E=ee,I=te,k=le,n=H,o=K,s=ae,p=J,D=ne,S=Q;return g(),T(D,{title:"添加卡密",width:"60%",modelValue:C.value,"onUpdate:modelValue":d[8]||(d[8]=u=>C.value=u),"before-close":B},{footer:l(()=>[t(p,{type:"info",onClick:d[6]||(d[6]=u=>j())},{default:l(()=>[c("取消")]),_:1}),t(p,{type:"primary",onClick:d[7]||(d[7]=u=>L(v.value))},{default:l(()=>[c("添加")]),_:1})]),default:l(()=>[r((g(),T(s,{ref_key:"addTokenFormRef",ref:v,model:a.value,rules:F,"label-width":"auto"},{default:l(()=>[t(k,{label:"创建方式",prop:"type"},{default:l(()=>[t(I,{modelValue:a.value.type,"onUpdate:modelValue":d[0]||(d[0]=u=>a.value.type=u)},{default:l(()=>[(g(),X(Y,null,me(["single","random"],u=>t(E,{key:u,label:u,value:u},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),t(k,{label:"可用次数",prop:"count"},{default:l(()=>[t(n,{modelValue:a.value.count,"onUpdate:modelValue":d[1]||(d[1]=u=>a.value.count=u)},null,8,["modelValue"])]),_:1}),t(k,{label:"可用天数",prop:"day"},{default:l(()=>[t(n,{modelValue:a.value.day,"onUpdate:modelValue":d[2]||(d[2]=u=>a.value.day=u)},null,8,["modelValue"])]),_:1}),t(k,{label:"可用大小(GB)",prop:"size"},{default:l(()=>[t(n,{modelValue:a.value.size,"onUpdate:modelValue":d[3]||(d[3]=u=>a.value.size=u)},null,8,["modelValue"])]),_:1}),a.value.type==="single"?(g(),T(k,{key:0,label:"卡密名称",prop:"name"},{default:l(()=>[t(o,{modelValue:a.value.name,"onUpdate:modelValue":d[4]||(d[4]=u=>a.value.name=u)},null,8,["modelValue"])]),_:1})):(g(),T(k,{key:1,label:"卡密个数",prop:"token_count"},{default:l(()=>[t(n,{modelValue:a.value.token_count,"onUpdate:modelValue":d[5]||(d[5]=u=>a.value.token_count=u)},null,8,["modelValue"])]),_:1}))]),_:1},8,["model"])),[[S,b.value]])]),_:1},8,["modelValue"])}}}),be=W({__name:"TokenManagement",setup(i){const f=V(!1),$=V(15),C=V(1),b=V(),a=V([]),v=async()=>{try{f.value=!0;const n=await ve({page:C.value,size:$.value});b.value=n.data}finally{f.value=!1}},F=async n=>{n.edit=!(n.edit??!1)},L=async n=>{n.edit=!(n.edit??!0),await B(n)},B=async n=>{try{f.value=!0,await ye(n),M.success("修改卡密成功")}finally{f.value=!1,await v()}},j=async n=>{try{f.value=!0,await ge(n),M.success("删除卡密成功")}finally{f.value=!1,await v()}},U=async()=>{try{f.value=!0;const n=a.value.map(o=>o.id);await ke(n),M.success("删除卡密成功")}finally{f.value=!1,await v()}},d=n=>a.value=n;re(v);const E=V(!1),I=()=>E.value=!E.value,k=(n=!0)=>{if(!n){R(a.value.map(s=>s.name).join(`
`));return}const o=a.value.map(s=>[s.name,s.count,s.size,s.day].join(" | "));o.unshift(["卡密","可用次数","可下载量","可用天数"].join(" | ")),R(o.join(`
`))};return(n,o)=>{var A,P,G;const s=J,p=oe,D=K,S=H,u=ue,Z=de,w=se,h=Q;return g(),X(Y,null,[t(Ve,{onGetTokens:v,modelValue:E.value,"onUpdate:modelValue":o[0]||(o[0]=e=>E.value=e)},null,8,["modelValue"]),t(s,{type:"primary",onClick:o[1]||(o[1]=e=>v())},{default:l(()=>[c("刷新列表")]),_:1}),t(s,{type:"primary",onClick:o[2]||(o[2]=e=>I())},{default:l(()=>[c("添加卡密")]),_:1}),t(s,{type:"primary",disabled:a.value.length<=0,onClick:o[3]||(o[3]=e=>k())},{default:l(()=>[c(" 批量复制 ")]),_:1},8,["disabled"]),t(s,{type:"primary",disabled:a.value.length<=0,onClick:o[4]||(o[4]=e=>k(!1))},{default:l(()=>[c(" 批量复制(无格式) ")]),_:1},8,["disabled"]),t(s,{type:"danger",disabled:a.value.length<=0,onClick:o[5]||(o[5]=e=>U())},{default:l(()=>[c(" 批量删除 ")]),_:1},8,["disabled"]),r((g(),T(Z,{data:((A=b.value)==null?void 0:A.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:d},{default:l(()=>[t(p,{type:"selection",width:"40"}),t(p,{prop:"id",label:"ID"}),t(p,{prop:"name",label:"卡密名称"},{default:l(({row:e})=>[r(z("span",null,_(e.name),513),[[y,!e.edit]]),r(t(D,{modelValue:e.name,"onUpdate:modelValue":m=>e.name=m},null,8,["modelValue","onUpdate:modelValue"]),[[y,e.edit]])]),_:1}),t(p,{prop:"today_size",label:"今日解析"},{default:l(({row:e})=>[z("span",null,_(e.today_count)+" ("+_(N(O)(e.today_size??0))+")",1)]),_:1}),t(p,{prop:"today_size",label:"縂共解析"},{default:l(({row:e})=>[z("span",null,_(e.total_count)+" ("+_(N(O)(e.total_size??0))+")",1)]),_:1}),t(p,{prop:"count",label:"可用次数"},{default:l(({row:e})=>[r(z("span",null,_(e.count),513),[[y,!e.edit]]),r(t(S,{modelValue:e.count,"onUpdate:modelValue":m=>e.count=m},null,8,["modelValue","onUpdate:modelValue"]),[[y,e.edit]])]),_:1}),t(p,{prop:"size",label:"可下载大小"},{default:l(({row:e})=>[r(z("span",null,_(e.size),513),[[y,!e.edit]]),r(t(S,{modelValue:e.size,"onUpdate:modelValue":m=>e.size=m},null,8,["modelValue","onUpdate:modelValue"]),[[y,e.edit]])]),_:1}),t(p,{prop:"day",label:"有效期"},{default:l(({row:e})=>[r(z("span",null,_(e.day),513),[[y,!e.edit]]),r(t(S,{modelValue:e.day,"onUpdate:modelValue":m=>e.day=m},null,8,["modelValue","onUpdate:modelValue"]),[[y,e.edit]])]),_:1}),t(p,{prop:"expired_at",label:"到期时间",width:"250"},{default:l(({row:e})=>[r(z("span",null,_(e.expired_at?`${new Date(e.expired_at).getTime()<Date.now()?"(已过期) ":""}${new Date(e.expired_at).toLocaleString()}`:"未使用"),513),[[y,!e.edit]]),e.edit?(g(),T(u,{key:0,modelValue:e.expired_at,"onUpdate:modelValue":m=>e.expired_at=m,type:"datetime",placeholder:"请选择日期"},null,8,["modelValue","onUpdate:modelValue"])):q("",!0)]),_:1}),t(p,{prop:"ip",label:"ip"},{default:l(({row:e})=>[r(z("span",null,_(e.ip??"未绑定ip"),513),[[y,!e.edit]]),r(t(D,{modelValue:e.ip,"onUpdate:modelValue":m=>e.ip=m},null,8,["modelValue","onUpdate:modelValue"]),[[y,e.edit]])]),_:1}),t(p,{prop:"created_at",label:"创建时间"},{default:l(({row:e})=>[c(_(new Date(e.created_at).toLocaleString()),1)]),_:1}),t(p,{prop:"updated_at",label:"更新时间"},{default:l(({row:e})=>[c(_(new Date(e.updated_at).toLocaleString()),1)]),_:1}),t(p,{width:"200",label:"操作",fixed:"right"},{default:l(({row:e})=>[e.edit?q("",!0):(g(),T(s,{key:0,size:"small",type:"primary",onClick:m=>F(e)},{default:l(()=>[c(" 编辑 ")]),_:2},1032,["onClick"])),e.edit?(g(),T(s,{key:1,size:"small",type:"primary",onClick:m=>L(e)},{default:l(()=>[c(" 保存 ")]),_:2},1032,["onClick"])):q("",!0),t(s,{size:"small",type:"primary",onClick:m=>N(R)(e.name)},{default:l(()=>[c("复制")]),_:2},1032,["onClick"]),t(s,{size:"small",type:"danger",onClick:m=>j(e)},{default:l(()=>[c("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[h,f.value]]),t(w,{"current-page":C.value,"onUpdate:currentPage":o[6]||(o[6]=e=>C.value=e),"page-size":$.value,"onUpdate:pageSize":o[7]||(o[7]=e=>$.value=e),"page-sizes":[15,50,100,500,((P=b.value)==null?void 0:P.total)??100],total:((G=b.value)==null?void 0:G.total)??100,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:v,onCurrentChange:v},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),Je=ce(be,[["__scopeId","data-v-9f80afaa"]]);export{Je as default};
