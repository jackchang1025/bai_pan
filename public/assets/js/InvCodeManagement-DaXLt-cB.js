/* empty css             *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                        *//* empty css                        *//* empty css                  */import{k as T,av as Y,aw as Z,a as g,l as c,J as I,K as n,S as l,Q as p,L as C,m as O,F as G,a7 as h,d as ee,p as N,R as U,T as z,P,u as te}from"./vue-vendor-BPxk_gY3.js";import{i as E}from"./index-PNpWQo2V.js";/* empty css                   *//* empty css                     */import{E as x,i as le,j as ae,c as ne,r as J,b as K,e as oe,d as Q,k as de,v as H,m as ue,o as se,u as ie}from"./element-plus-vendor-C_pH9kLN.js";import{c as R}from"./copy-DePUZc8M.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./other-vendor-DRuaNSIU.js";const re=i=>E.post("/admin/inv_code",i),me=i=>E.post("/admin/inv_code/generate",i),ve=i=>E.get(`/admin/inv_code?page=${i.page}&size=${i.size}`),_e=i=>E.patch(`/admin/inv_code/${i.id}`,i),ge=i=>E.delete("/admin/inv_code",{data:{inv_code_ids:[i.id]}}),ce=i=>E.delete("/admin/inv_code",{data:{inv_code_ids:i}}),fe=T({__name:"AddInvCode",props:{modelValue:{},modelModifiers:{}},emits:Y(["getInvCodes"],["update:modelValue"]),setup(i,{emit:m}){const k=m,V=Z(i,"modelValue"),f=g(!1),a=g({type:"single",group_id:2,name:"",can_count:10}),v=g(null),D={group_id:[{required:!0,message:"请输入邀请码用户组ID",trigger:"blur"}],name:[{required:!0,message:"请输入邀请码名称",trigger:"blur"}],can_count:[{required:!0,message:"请输入可注册次数",trigger:"blur"}],count:[{required:!0,message:"请输入邀请码个数",trigger:"blur"}]},M=async b=>{if(!(!b||!await b.validate()))try{f.value=!0,a.value.type==="single"?await re({type:"single",name:a.value.name,can_count:a.value.can_count,group_id:a.value.group_id}):await me({type:"random",count:a.value.count,can_count:a.value.can_count,group_id:a.value.group_id}),x.success("添加成功")}finally{f.value=!1}},F=b=>{k("getInvCodes"),b()},j=()=>{V.value=!1,k("getInvCodes")};return(b,d)=>{const $=le,L=ae,y=ne,o=J,e=K,s=oe,r=Q,B=de,S=H;return c(),I(B,{title:"添加邀请码",width:"60%",modelValue:V.value,"onUpdate:modelValue":d[7]||(d[7]=u=>V.value=u),"before-close":F},{footer:n(()=>[l(r,{type:"info",onClick:d[5]||(d[5]=u=>j())},{default:n(()=>d[8]||(d[8]=[p("取消")])),_:1}),l(r,{type:"primary",onClick:d[6]||(d[6]=u=>M(v.value))},{default:n(()=>d[9]||(d[9]=[p("添加")])),_:1})]),default:n(()=>[C((c(),I(s,{ref_key:"addInvCodeFormRef",ref:v,model:a.value,rules:D,"label-width":"auto"},{default:n(()=>[l(y,{label:"创建方式",prop:"type"},{default:n(()=>[l(L,{modelValue:a.value.type,"onUpdate:modelValue":d[0]||(d[0]=u=>a.value.type=u)},{default:n(()=>[(c(),O(G,null,h(["single","random"],u=>l($,{key:u,label:u,value:u},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),l(y,{label:"可用次数",prop:"can_count"},{default:n(()=>[l(o,{modelValue:a.value.can_count,"onUpdate:modelValue":d[1]||(d[1]=u=>a.value.can_count=u)},null,8,["modelValue"])]),_:1}),l(y,{label:"用户组ID",prop:"group_id"},{default:n(()=>[l(o,{modelValue:a.value.group_id,"onUpdate:modelValue":d[2]||(d[2]=u=>a.value.group_id=u)},null,8,["modelValue"])]),_:1}),a.value.type==="single"?(c(),I(y,{key:0,label:"邀请码名称",prop:"name"},{default:n(()=>[l(e,{modelValue:a.value.name,"onUpdate:modelValue":d[3]||(d[3]=u=>a.value.name=u)},null,8,["modelValue"])]),_:1})):(c(),I(y,{key:1,label:"邀请码个数",prop:"count"},{default:n(()=>[l(o,{modelValue:a.value.count,"onUpdate:modelValue":d[4]||(d[4]=u=>a.value.count=u)},null,8,["modelValue"])]),_:1}))]),_:1},8,["model"])),[[S,f.value]])]),_:1},8,["modelValue"])}}}),ye=T({__name:"InvCodeManagement",setup(i){const m=g(!1),k=g(15),V=g(1),f=g(),a=g([]),v=async()=>{try{m.value=!0;const o=await ve({page:V.value,size:k.value});f.value=o.data}finally{m.value=!1}},D=async o=>{o.edit=!(o.edit??!1)},M=async o=>{o.edit=!(o.edit??!0),await F(o)},F=async o=>{try{m.value=!0,await _e(o),x.success("修改邀请码成功")}finally{m.value=!1,await v()}},j=async o=>{try{m.value=!0,await ge(o),x.success("删除邀请码成功")}finally{m.value=!1,await v()}},b=async()=>{try{m.value=!0;const o=a.value.map(e=>e.id);await ce(o),x.success("删除邀请码成功")}finally{m.value=!1,await v()}},d=o=>a.value=o;ee(v);const $=g(!1),L=()=>$.value=!$.value,y=(o=!0)=>{if(!o){R(a.value.map(s=>s.name).join(`
`));return}const e=a.value.map(s=>[s.name,s.group.count,s.group.size].join(" | "));e.unshift(["邀请码","可用次数","可下载量"].join(" | ")),R(e.join(`
`))};return(o,e)=>{var q,w,A;const s=Q,r=ue,B=K,S=J,u=se,W=ie,X=H;return c(),O(G,null,[l(fe,{onGetInvCodes:v,modelValue:$.value,"onUpdate:modelValue":e[0]||(e[0]=t=>$.value=t)},null,8,["modelValue"]),l(s,{type:"primary",onClick:e[1]||(e[1]=t=>v())},{default:n(()=>e[8]||(e[8]=[p("刷新列表")])),_:1}),l(s,{type:"primary",onClick:e[2]||(e[2]=t=>L())},{default:n(()=>e[9]||(e[9]=[p("添加邀请码")])),_:1}),l(s,{type:"primary",disabled:a.value.length<=0,onClick:e[3]||(e[3]=t=>y())},{default:n(()=>e[10]||(e[10]=[p(" 批量复制 ")])),_:1},8,["disabled"]),l(s,{type:"primary",disabled:a.value.length<=0,onClick:e[4]||(e[4]=t=>y())},{default:n(()=>e[11]||(e[11]=[p(" 批量复制(无格式) ")])),_:1},8,["disabled"]),l(s,{type:"danger",disabled:a.value.length<=0,onClick:e[5]||(e[5]=t=>b())},{default:n(()=>e[12]||(e[12]=[p(" 批量删除 ")])),_:1},8,["disabled"]),C((c(),I(u,{data:((q=f.value)==null?void 0:q.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:d},{default:n(()=>[l(r,{type:"selection",width:"40"}),l(r,{prop:"id",label:"ID"}),l(r,{prop:"name",label:"邀请码名称"},{default:n(({row:t})=>[C(N("span",null,U(t.name),513),[[z,!t.edit]]),C(l(B,{modelValue:t.name,"onUpdate:modelValue":_=>t.name=_},null,8,["modelValue","onUpdate:modelValue"]),[[z,t.edit]])]),_:1}),l(r,{prop:"group_id",label:"用户组ID"},{default:n(({row:t})=>[C(N("span",null,U(t.group_id),513),[[z,!t.edit]]),C(l(S,{modelValue:t.group_id,"onUpdate:modelValue":_=>t.group_id=_},null,8,["modelValue","onUpdate:modelValue"]),[[z,t.edit]])]),_:1}),l(r,{prop:"can_count",label:"可用次数"},{default:n(({row:t})=>[C(N("span",null,U(t.can_count),513),[[z,!t.edit]]),C(l(S,{modelValue:t.can_count,"onUpdate:modelValue":_=>t.can_count=_},null,8,["modelValue","onUpdate:modelValue"]),[[z,t.edit]])]),_:1}),l(r,{prop:"use_count",label:"已使用次数"}),l(r,{prop:"created_at",label:"创建时间"},{default:n(({row:t})=>[p(U(new Date(t.created_at).toLocaleString()),1)]),_:1}),l(r,{prop:"updated_at",label:"更新时间"},{default:n(({row:t})=>[p(U(new Date(t.updated_at).toLocaleString()),1)]),_:1}),l(r,{width:"200",label:"操作",fixed:"right"},{default:n(({row:t})=>[t.edit?P("",!0):(c(),I(s,{key:0,size:"small",type:"primary",onClick:_=>D(t)},{default:n(()=>e[13]||(e[13]=[p(" 编辑 ")])),_:2},1032,["onClick"])),t.edit?(c(),I(s,{key:1,size:"small",type:"primary",onClick:_=>M(t)},{default:n(()=>e[14]||(e[14]=[p(" 保存 ")])),_:2},1032,["onClick"])):P("",!0),l(s,{size:"small",type:"primary",onClick:_=>te(R)(t.name)},{default:n(()=>e[15]||(e[15]=[p(" 复制 ")])),_:2},1032,["onClick"]),l(s,{size:"small",type:"danger",onClick:_=>j(t)},{default:n(()=>e[16]||(e[16]=[p("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[X,m.value]]),l(W,{"current-page":V.value,"onUpdate:currentPage":e[6]||(e[6]=t=>V.value=t),"page-size":k.value,"onUpdate:pageSize":e[7]||(e[7]=t=>k.value=t),"page-sizes":[15,50,100,500,((w=f.value)==null?void 0:w.total)??100],total:((A=f.value)==null?void 0:A.total)??100,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:v,onCurrentChange:v},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),Ne=pe(ye,[["__scopeId","data-v-3f8aea2f"]]);export{Ne as default};
