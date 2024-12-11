import{a as R,v as x,E as B,b as K,c as L,d as N,e as $}from"./element-plus@2.7.7_vue@3.4.32_typescript@5.5.3_-BPm-_N_9.js";import{c as d}from"./@vue_runtime-dom@3.4.32-DNdjNMzo.js";import{g as I,u as S,a as q,r as U}from"./index--MJ3Ntw9.js";import{f as D}from"./favicon-BrYC5Vmz.js";import{u as M}from"./vue-router@4.4.0_vue@3.4.32_typescript@5.5.3_-ByijA4Eg.js";import{d as A,c as G,I as H,G as V,H as a,o as f,a as v,i as r,K as T,L as b}from"./@vue_runtime-core@3.4.32-BofAHbgu.js";import{r as _,u as c}from"./@vue_reactivity@3.4.32-DksAu7zd.js";import{L as j}from"./@vue_shared@3.4.32-CaCWPAm8.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./lodash-es@4.17.21-BB-zMWwC.js";import"./async-validator@4.2.5-DKvM95Vc.js";import"./@vueuse_core@9.13.0_vue@3.4.32_typescript@5.5.3_-DkVRVfGD.js";import"./@vueuse_shared@9.13.0_vue@3.4.32_typescript@5.5.3_-BbpdFR9m.js";import"./dayjs@1.11.11-Ct2Knyoi.js";import"./@element-plus_icons-vue@2.3.1_vue@3.4.32_typescript@5.5.3_-x2o2c_8n.js";import"./@sxzz_popperjs-es@2.11.7-D9SI2xQl.js";import"./normalize-wheel-es@1.2.0-B6fDCfyv.js";import"./@ctrl_tinycolor@3.6.1-r5W6hzzQ.js";import"./pinia@2.1.7_typescript@5.5.3_vue@3.4.32_typescript@5.5.3_-BSzeUtha.js";import"./vue-demi@0.14.8_vue@3.4.32_typescript@5.5.3_-Dq6ymT-8.js";import"./axios@1.7.2-B4uVmeYG.js";const J={class:"container"},O=["src"],P=A({__name:"RegisterView",setup(Q){const i=M();I()==="1"&&i.push("/admin");const k=()=>i.push("/login"),u=_(!1),o=_({username:"",password:"",inv_code:""}),s=_(null),g={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},w=S();w.config.need_inv_code&&(g.inv_code=[{required:!0,message:"请输入邀请码",trigger:"blur"}]);const n=async m=>{if(!(!m||!await m.validate()))try{u.value=!0,await U({username:o.value.username,password:o.value.password,inv_code:o.value.inv_code}),B.success("注册成功"),i.push("/login")}finally{u.value=!1}};return(m,e)=>{const p=K,l=L,y=N,E=$,F=R,C=x;return f(),G("div",J,[H((f(),V(F,null,{default:a(()=>[v("h1",null,[v("img",{src:c(D),alt:"logo"},null,8,O)]),v("h2",null,"注册 | "+j(c(q)()),1),r(E,{ref_key:"registerFormRef",ref:s,model:o.value,rules:g,"label-width":"auto"},{default:a(()=>[r(l,{label:"用户名",prop:"username"},{default:a(()=>[r(p,{modelValue:o.value.username,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value.username=t),onKeyup:e[1]||(e[1]=d(t=>n(s.value),["enter"]))},null,8,["modelValue"])]),_:1}),r(l,{label:"密码",prop:"password"},{default:a(()=>[r(p,{modelValue:o.value.password,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value.password=t),type:"password",onKeyup:e[3]||(e[3]=d(t=>n(s.value),["enter"]))},null,8,["modelValue"])]),_:1}),c(w).config.need_inv_code?(f(),V(l,{key:0,label:"邀请码",prop:"inv_code"},{default:a(()=>[r(p,{modelValue:o.value.inv_code,"onUpdate:modelValue":e[4]||(e[4]=t=>o.value.inv_code=t),onKeyup:e[5]||(e[5]=d(t=>n(s.value),["enter"]))},null,8,["modelValue"])]),_:1})):T("",!0),r(l,{class:"center"},{default:a(()=>[r(y,{type:"primary",onClick:e[6]||(e[6]=t=>k())},{default:a(()=>[b("登陆")]),_:1}),r(y,{type:"primary",onClick:e[7]||(e[7]=t=>n(s.value))},{default:a(()=>[b("注册")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})),[[C,u.value]])])}}}),ce=z(P,[["__scopeId","data-v-da197fbf"]]);export{ce as default};
