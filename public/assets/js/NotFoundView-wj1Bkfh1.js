import{k as r,a,d,z as c,m as p,p as s,R as u,u as v,at as m,l as _}from"./vue-vendor-BPxk_gY3.js";const f="/assets/png/qrcode-39AXYHGT.png",g={class:"page"},B={class:"container"},R={class:"complete"},h={class:"percentage"},k={class:"details"},x={class:"qr-image"},M=["src"],C=r({__name:"NotFoundView",setup(T){const l=m(),e=a(0),o=a(0);function i(){e.value+=Math.floor(Math.random()*25),e.value>=100?(e.value=100,l.push("/")):n()}const n=()=>o.value=setTimeout(i,Math.random()*500+500);return d(()=>n()),c(()=>clearTimeout(o.value)),(q,t)=>(_(),p("div",g,[s("div",B,[t[2]||(t[2]=s("div",{class:"font-h1"},":(",-1)),t[3]||(t[3]=s("div",{class:"tip"},"你的电脑遇到问题, 需要重新启动",-1)),t[4]||(t[4]=s("div",{class:"tip"},"我们只收集某些错误信息, 然后自动为你重新启动",-1)),s("div",R,[s("span",h,u(e.value),1),t[0]||(t[0]=s("span",null,"% 完成",-1))]),s("div",k,[s("div",x,[s("img",{src:v(f)},null,8,M)]),t[1]||(t[1]=s("div",{class:"stopcode"},[s("div",{class:"stopcode-text"}," 有关问题的详细信息和可能的解决方法, 请访问 https://cutt.ly/kwErLg0w "),s("div",{class:"stopcode-text"},[s("p",null,"如需致电支持人员, 请向他们提供以下信息:"),s("p",null,"终止代码: TRICKED BY RICKROLL")])],-1))])])]))}});export{C as default};
