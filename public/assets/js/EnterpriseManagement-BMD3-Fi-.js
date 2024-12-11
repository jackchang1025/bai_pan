import{E as _,b as T,c as R,q as Y,e as N,d as P,k as Z,v as j,s as L,i as ee,j as le,m as te,t as ae,o as oe,u as ne}from"./element-plus@2.7.7_vue@3.4.32_typescript@5.5.3_-BPm-_N_9.js";import{c as se}from"./@vue_runtime-dom@3.4.32-DNdjNMzo.js";import{u as re,c as ie,g as ue,d as de,a as pe,t as ce}from"./enterprise-T2y2z5S7.js";import{d as G,w as me,o as z,G as B,H as l,i as e,L as p,I as K,m as ve,c as _e,a as M,F as fe}from"./@vue_runtime-core@3.4.32-BofAHbgu.js";import{r as u}from"./@vue_reactivity@3.4.32-DksAu7zd.js";import{L as $}from"./@vue_shared@3.4.32-CaCWPAm8.js";import{_ as ge}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./lodash-es@4.17.21-BB-zMWwC.js";import"./async-validator@4.2.5-DKvM95Vc.js";import"./@vueuse_core@9.13.0_vue@3.4.32_typescript@5.5.3_-DkVRVfGD.js";import"./@vueuse_shared@9.13.0_vue@3.4.32_typescript@5.5.3_-BbpdFR9m.js";import"./dayjs@1.11.11-Ct2Knyoi.js";import"./@element-plus_icons-vue@2.3.1_vue@3.4.32_typescript@5.5.3_-x2o2c_8n.js";import"./@sxzz_popperjs-es@2.11.7-D9SI2xQl.js";import"./normalize-wheel-es@1.2.0-B6fDCfyv.js";import"./@ctrl_tinycolor@3.6.1-r5W6hzzQ.js";import"./index-BKyFJOvG.js";import"./pinia@2.1.7_typescript@5.5.3_vue@3.4.32_typescript@5.5.3_-BSzeUtha.js";import"./vue-demi@0.14.8_vue@3.4.32_typescript@5.5.3_-Dq6ymT-8.js";import"./axios@1.7.2-B4uVmeYG.js";import"./@fingerprintjs_fingerprintjs@4.5.1-5RNCfJbQ.js";import"./tslib@2.6.3-CPxunF3b.js";import"./vue-router@4.4.0_vue@3.4.32_typescript@5.5.3_-ByijA4Eg.js";const be=G({__name:"AddEnterprise",props:{modelValue:{type:Boolean}},emits:["update:modelValue","getEnterprises"],setup(F,{expose:c,emit:V}){const E=F,y=V,w=u(),f=u(!1),d=u(null),t=u({cid:"",cookie:"",bdstoken:"",surl:"",pwd:"",path:"",is_active:!0}),C={cid:[{required:!0,message:"请输入企业CID",trigger:"blur"}],cookie:[{required:!0,message:"请输入Cookie",trigger:"blur"}],bdstoken:[{required:!0,message:"请输入安全令牌",trigger:"blur"}],surl:[{required:!0,message:"请输入分享链接",trigger:"blur"}],path:[{required:!0,message:"请输入存储路径",trigger:"blur"}]};me(()=>E.modelValue,i=>{i||h()});const m=i=>{d.value=i,t.value={cid:i.cid,cookie:i.cookie,bdstoken:i.bdstoken,surl:i.surl,pwd:i.pwd||"",path:i.path,is_active:i.is_active}},h=()=>{w.value&&w.value.resetFields(),d.value=null,t.value={cid:"",cookie:"",bdstoken:"",surl:"",pwd:"",path:"",is_active:!0}},U=()=>{y("update:modelValue",!1),h()},D=async i=>{if(i)try{await i.validate(),f.value=!0,d.value?(await re(d.value.id,t.value),_.success("更新成功")):(await ie(t.value),_.success("添加成功")),y("getEnterprises"),y("update:modelValue",!1)}catch(o){o!=="cancel"&&_.error(d.value?"更新失败":"添加失败")}finally{f.value=!1}};return c({setEditingEnterprise:m}),(i,o)=>{const g=T,v=R,S=Y,x=N,r=P,a=Z,I=j;return z(),B(a,{title:d.value?"编辑企业账号":"添加企业账号",width:"60%","model-value":i.modelValue,"onUpdate:modelValue":o[8]||(o[8]=s=>y("update:modelValue",s)),"before-close":U},{footer:l(()=>[e(r,{onClick:U},{default:l(()=>[p("取消")]),_:1}),e(r,{type:"primary",onClick:o[7]||(o[7]=s=>D(w.value))},{default:l(()=>[p("确定")]),_:1})]),default:l(()=>[K((z(),B(x,{ref_key:"formRef",ref:w,model:t.value,rules:C,"label-width":"120px"},{default:l(()=>[e(v,{label:"企业CID",prop:"cid"},{default:l(()=>[e(g,{modelValue:t.value.cid,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value.cid=s),placeholder:"请输入企业CID"},null,8,["modelValue"])]),_:1}),e(v,{label:"Cookie",prop:"cookie"},{default:l(()=>[e(g,{modelValue:t.value.cookie,"onUpdate:modelValue":o[1]||(o[1]=s=>t.value.cookie=s),type:"textarea",rows:3,placeholder:"请输入Cookie"},null,8,["modelValue"])]),_:1}),e(v,{label:"安全令牌",prop:"bdstoken"},{default:l(()=>[e(g,{modelValue:t.value.bdstoken,"onUpdate:modelValue":o[2]||(o[2]=s=>t.value.bdstoken=s),placeholder:"请输入bdstoken"},null,8,["modelValue"])]),_:1}),e(v,{label:"分享链接",prop:"surl"},{default:l(()=>[e(g,{modelValue:t.value.surl,"onUpdate:modelValue":o[3]||(o[3]=s=>t.value.surl=s),placeholder:"请输入分享链接"},null,8,["modelValue"])]),_:1}),e(v,{label:"提取密码",prop:"pwd"},{default:l(()=>[e(g,{modelValue:t.value.pwd,"onUpdate:modelValue":o[4]||(o[4]=s=>t.value.pwd=s),placeholder:"请输入提取密码(可选)"},null,8,["modelValue"])]),_:1}),e(v,{label:"存储路径",prop:"path"},{default:l(()=>[e(g,{modelValue:t.value.path,"onUpdate:modelValue":o[5]||(o[5]=s=>t.value.path=s),placeholder:"请输入存储路径"},{prepend:l(()=>[p("/")]),_:1},8,["modelValue"])]),_:1}),e(v,{label:"状态",prop:"is_active"},{default:l(()=>[e(S,{modelValue:t.value.is_active,"onUpdate:modelValue":o[6]||(o[6]=s=>t.value.is_active=s)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[I,f.value]])]),_:1},8,["title","model-value"])}}}),ye={class:"toolbar"},we={class:"action-buttons"},ke=G({__name:"EnterpriseManagement",setup(F){const c=u(!1),V=u(1),E=u(15),y=u(0),w=u([]),f=u([]),d=u(!1),t=u({keyword:"",is_active:void 0}),C=u(null),m=async()=>{try{c.value=!0;const r=await ue({page:V.value,size:E.value,...t.value});w.value=r.data.list,y.value=r.data.pagination.total}finally{c.value=!1}},h=()=>{V.value=1,m()},U=()=>m(),D=()=>m(),i=r=>{f.value=r},o=()=>{d.value=!d.value},g=async r=>{try{await L.confirm("确定要删除该企业账号吗？","提示",{type:"warning"}),c.value=!0,await de(r.id),_.success("删除成功"),m()}catch(a){a!=="cancel"&&_.error("删除失败")}finally{c.value=!1}},v=async()=>{try{await L.confirm(`确定要删除选中的 ${f.value.length} 个企业账号吗？`,"提示",{type:"warning"}),c.value=!0,await pe(f.value.map(r=>r.id)),_.success("批量删除成功"),m()}catch(r){r!=="cancel"&&_.error("批量删除失败")}finally{c.value=!1}},S=async r=>{try{c.value=!0;const a=await ce(r.id);_.success(a.data.status),m()}catch{_.error("操作失败")}finally{c.value=!1}},x=r=>{var a;(a=C.value)==null||a.setEditingEnterprise(r),d.value=!0};return ve(m),(r,a)=>{const I=T,s=R,q=ee,H=le,k=P,O=N,b=te,J=ae,Q=oe,W=ne,X=j;return z(),_e(fe,null,[e(be,{onGetEnterprises:m,modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=n=>d.value=n),ref_key:"addEnterpriseRef",ref:C},null,8,["modelValue"]),M("div",ye,[e(O,{inline:!0,model:t.value},{default:l(()=>[e(s,{label:"关键词"},{default:l(()=>[e(I,{modelValue:t.value.keyword,"onUpdate:modelValue":a[1]||(a[1]=n=>t.value.keyword=n),placeholder:"搜索CID/短链/路径",clearable:"",onKeyup:se(h,["enter"])},null,8,["modelValue"])]),_:1}),e(s,{label:"状态"},{default:l(()=>[e(H,{modelValue:t.value.is_active,"onUpdate:modelValue":a[2]||(a[2]=n=>t.value.is_active=n),clearable:"",placeholder:"全部"},{default:l(()=>[e(q,{label:"激活",value:!0}),e(q,{label:"停用",value:!1})]),_:1},8,["modelValue"])]),_:1}),e(s,null,{default:l(()=>[e(k,{type:"primary",onClick:h},{default:l(()=>[p("搜索")]),_:1})]),_:1})]),_:1},8,["model"]),M("div",we,[e(k,{type:"primary",onClick:a[3]||(a[3]=n=>m())},{default:l(()=>[p("刷新列表")]),_:1}),e(k,{type:"primary",onClick:a[4]||(a[4]=n=>o())},{default:l(()=>[p("添加账号")]),_:1}),e(k,{type:"danger",disabled:f.value.length<=0,onClick:v},{default:l(()=>[p(" 批量删除 ")]),_:1},8,["disabled"])])]),K((z(),B(Q,{data:w.value,border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:i},{default:l(()=>[e(b,{type:"selection",width:"40"}),e(b,{prop:"id",label:"ID",width:"80"}),e(b,{prop:"cid",label:"企业CID","min-width":"120"}),e(b,{prop:"surl",label:"分享链接","min-width":"120","show-overflow-tooltip":""}),e(b,{prop:"path",label:"存储路径","min-width":"120","show-overflow-tooltip":""}),e(b,{prop:"is_active",label:"状态",width:"100"},{default:l(({row:n})=>[e(J,{type:n.is_active?"success":"danger"},{default:l(()=>[p($(n.is_active?"已激活":"已停用"),1)]),_:2},1032,["type"])]),_:1}),e(b,{prop:"created_at",label:"创建时间",width:"180"},{default:l(({row:n})=>[p($(new Date(n.created_at).toLocaleString()),1)]),_:1}),e(b,{width:"250",label:"操作",fixed:"right"},{default:l(({row:n})=>[e(k,{size:"small",type:n.is_active?"warning":"success",onClick:A=>S(n)},{default:l(()=>[p($(n.is_active?"停用":"激活"),1)]),_:2},1032,["type","onClick"]),e(k,{size:"small",type:"primary",onClick:A=>x(n)},{default:l(()=>[p(" 编辑 ")]),_:2},1032,["onClick"]),e(k,{size:"small",type:"danger",onClick:A=>g(n)},{default:l(()=>[p(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[X,c.value]]),e(W,{"current-page":V.value,"onUpdate:currentPage":a[5]||(a[5]=n=>V.value=n),"page-size":E.value,"onUpdate:pageSize":a[6]||(a[6]=n=>E.value=n),"page-sizes":[15,50,100],total:y.value,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:U,onCurrentChange:D},null,8,["current-page","page-size","total"])],64)}}}),Ke=ge(ke,[["__scopeId","data-v-503b4b6c"]]);export{Ke as default};
