/* empty css             *//* empty css                   *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import{i as p}from"./index-PNpWQo2V.js";import{E as v,q,c as P,b as U,i as k,j as E,d as F,e as x,v as B}from"./element-plus-vendor-C_pH9kLN.js";import{k as L,a as i,d as R,L as $,l as _,J as I,K as t,S as o,m as N,F as j,a7 as z,Q as V}from"./vue-vendor-BPxk_gY3.js";import"./other-vendor-DRuaNSIU.js";const D=()=>p.get("/admin/config/mail"),J=d=>p.patch("/admin/config/mail",d),K=d=>p.post("/admin/config/mail",d),ae=L({__name:"ChangeMailConfig",setup(d){const s=i(!1),a=i({switch:!1,host:"",port:"",username:"",password:"",encryption:"tls",from_address:"",from_name:"",to_address:"",to_name:""}),m=i(null),b={host:[{required:!0,message:"请输入SMTP服务器地址",trigger:"blur"}],port:[{required:!0,message:"请输入SMTP服务器端口",trigger:"blur"}],username:[{required:!0,message:"请输入SMTP服务器账户",trigger:"blur"}],password:[{required:!0,message:"请输入SMTP服务器密码",trigger:"blur"}],encryption:[{required:!0,message:"请选择SMTP服务器加密方式",trigger:"blur"}],from_address:[{required:!0,message:"请输入发件人地址",trigger:"blur"}],from_name:[{required:!0,message:"请输入发件人名称",trigger:"blur"}],to_address:[{required:!0,message:"请输入收件人地址",trigger:"blur"}],to_name:[{required:!0,message:"请输入收件人名称",trigger:"blur"}]},f=async()=>{try{s.value=!0;const u=await D();a.value=u.data}finally{s.value=!1}},w=async u=>{if(!(!u||!await u.validate()))try{s.value=!0,await J(a.value),v.success("保存成功")}finally{s.value=!1,await f()}},y=async u=>{if(!(!u||!await u.validate()))try{s.value=!0,await K(a.value),v.success("发送成功,请检查邮箱是否收到")}finally{s.value=!1}};return R(f),(u,e)=>{const M=q,r=P,n=U,c=k,C=E,g=F,S=x,T=B;return $((_(),I(S,{ref_key:"changeMailConfigFormRef",ref:m,model:a.value,rules:b,"label-width":"auto"},{default:t(()=>[o(r,{label:"是否开启",prop:"switch"},{default:t(()=>[o(M,{modelValue:a.value.switch,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value.switch=l),size:"large"},null,8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器地址",prop:"host"},{default:t(()=>[o(n,{modelValue:a.value.host,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value.host=l)},null,8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器加密方式",prop:"encryption"},{default:t(()=>[o(C,{modelValue:a.value.encryption,"onUpdate:modelValue":e[2]||(e[2]=l=>a.value.encryption=l),placeholder:"选择加密方式"},{default:t(()=>[(_(),N(j,null,z(["tls","ssl"],l=>o(c,{key:l,label:l,value:l},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器端口",prop:"port"},{default:t(()=>[o(n,{modelValue:a.value.port,"onUpdate:modelValue":e[3]||(e[3]=l=>a.value.port=l)},null,8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器用户名",prop:"username"},{default:t(()=>[o(n,{modelValue:a.value.username,"onUpdate:modelValue":e[4]||(e[4]=l=>a.value.username=l)},null,8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器密码",prop:"password"},{default:t(()=>[o(n,{modelValue:a.value.password,"onUpdate:modelValue":e[5]||(e[5]=l=>a.value.password=l)},null,8,["modelValue"])]),_:1}),o(r,{label:"发件人地址",prop:"from_address"},{default:t(()=>[o(n,{modelValue:a.value.from_address,"onUpdate:modelValue":e[6]||(e[6]=l=>a.value.from_address=l)},null,8,["modelValue"])]),_:1}),o(r,{label:"发件人名称",prop:"from_name"},{default:t(()=>[o(n,{modelValue:a.value.from_name,"onUpdate:modelValue":e[7]||(e[7]=l=>a.value.from_name=l)},null,8,["modelValue"])]),_:1}),o(r,{label:"收件人名称",prop:"to_name"},{default:t(()=>[o(n,{modelValue:a.value.to_name,"onUpdate:modelValue":e[8]||(e[8]=l=>a.value.to_name=l)},null,8,["modelValue"])]),_:1}),o(r,{label:"收件人地址",prop:"to_address"},{default:t(()=>[o(n,{modelValue:a.value.to_address,"onUpdate:modelValue":e[9]||(e[9]=l=>a.value.to_address=l)},null,8,["modelValue"])]),_:1}),o(r,{label:" "},{default:t(()=>[o(g,{type:"primary",onClick:e[10]||(e[10]=l=>w(m.value))},{default:t(()=>e[12]||(e[12]=[V("保存")])),_:1}),o(g,{type:"primary",onClick:e[11]||(e[11]=l=>y(m.value))},{default:t(()=>e[13]||(e[13]=[V(" 发送测试邮件 ")])),_:1})]),_:1})]),_:1},8,["model"])),[[T,s.value]])}}});export{ae as default};
