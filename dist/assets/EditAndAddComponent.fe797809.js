import{i as k,r as _,o as i,c,b as t,k as h,d as w,w as r,v as l,u as s,l as N,F as S,e as x,t as y,p as A,h as P}from"./index.96a703f6.js";import{_ as V,d as p}from"./_plugin-vue_export-helper.7d31a2b9.js";const f=n=>(A("data-v-f871fed1"),n=n(),P(),n),q={class:"container"},E={class:"row mb-3"},U={class:"col"},I={key:0},D={key:1},B=f(()=>t("hr",{class:"mt-3"},null,-1)),F={class:"row"},G={class:"col d-flex justify-content-between bg-success bg-opacity-25 p-3"},M={class:"col-6"},T={class:"mt-1"},j={class:"mt-1"},L={class:"mt-1"},R={class:"mt-1"},$={class:"mt-1"},z={class:"mt-1"},H=f(()=>t("option",{value:null},"Select group",-1)),J=["value"],K={class:"mt-1"},O={type:"submit",class:"btn btn-success float-end mt-3"},Q={class:"col-6 rounded-circle m-auto w-auto"},W=["src"],X={__name:"EditAndAddComponent",props:{pageName:{type:String,required:!0},id:{type:Number}},setup(n){const u=n,m=k();let a=_({data:{}}),g=_({data:[]});async function v(){try{const d=await p.getAllGroup();g.data=d.data}catch(d){console.log(d)}}if(u.pageName==="editPage"&&u.id){async function d(o){try{const e=await p.getSingleContacts(o);a.data=e.data}catch(e){console.log(e)}}d(u.id)}async function b(){try{const d=await p.addNewContact(a.data);m.push("/")}catch(d){console.log(d)}}async function C(){try{const d=await p.updateContacts(u.id,a.data);m.push("/")}catch(d){console.log(d)}}return v(),(d,o)=>(i(),c("div",q,[t("div",E,[t("div",U,[n.pageName=="addPage"?(i(),c("h3",I,"Add Contact")):h("",!0),n.pageName=="editPage"?(i(),c("h3",D,"Edit Contact")):h("",!0)]),B]),t("div",F,[t("div",G,[t("div",M,[t("form",{onSubmit:o[7]||(o[7]=w(e=>n.pageName==="addPage"?b():C(),["prevent"]))},[t("div",T,[r(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>s(a).data.name=e),class:"form-control bg-transparent border-dark",placeholder:"Name",required:""},null,512),[[l,s(a).data.name]])]),t("div",j,[r(t("input",{type:"email","onUpdate:modelValue":o[1]||(o[1]=e=>s(a).data.email=e),class:"form-control bg-transparent border-dark",placeholder:"Email",required:""},null,512),[[l,s(a).data.email]])]),t("div",L,[r(t("input",{type:"number","onUpdate:modelValue":o[2]||(o[2]=e=>s(a).data.phone=e),class:"form-control bg-transparent border-dark",placeholder:"Phone",required:""},null,512),[[l,s(a).data.phone]])]),t("div",R,[r(t("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=e=>s(a).data.company=e),class:"form-control bg-transparent border-dark",placeholder:"Company",required:""},null,512),[[l,s(a).data.company]])]),t("div",$,[r(t("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=e=>s(a).data.title=e),class:"form-control bg-transparent border-dark",placeholder:"Title",required:""},null,512),[[l,s(a).data.title]])]),t("div",z,[r(t("select",{"onUpdate:modelValue":o[5]||(o[5]=e=>s(a).data.groupId=e),class:"form-select bg-transparent border-dark",required:""},[H,(i(!0),c(S,null,x(s(g).data,e=>(i(),c("option",{key:e.id,value:e.id},y(e.name),9,J))),128))],512),[[N,s(a).data.groupId]])]),t("div",K,[r(t("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=e=>s(a).data.photo=e),class:"form-control bg-transparent border-dark",placeholder:"Paste your image link",required:""},null,512),[[l,s(a).data.photo]])]),t("button",O,y(n.pageName==="editPage"?"Update Contact":"Save Contact"),1)],32)]),t("div",Q,[t("img",{src:s(a).data.photo,alt:"Please upload your picture",class:"img-fluid rounded-circle img-height"},null,8,W)])])])]))}},tt=V(X,[["__scopeId","data-v-f871fed1"]]);export{tt as E};