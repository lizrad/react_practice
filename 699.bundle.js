(self.webpackChunkproject_test=self.webpackChunkproject_test||[]).push([[699],{628:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>T});var a=n(294),i=n(48),o=n(163),s=n(890);const l={msg:[{Name:"Active",Date:"2020-01-01",status:0},{Name:"Finished",Date:"2020-01-01",status:1},{Name:"Inactive",Date:"2020-01-01",status:2}]},d=(0,s.MT)(((e=l,t)=>{switch(t.type){case"addMsg":return{...e,msg:[...e.msg,t.payload]};default:return e}}));window.store=d,window.addMessage=e=>({type:"addMsg",payload:e});const r=o.ZP.div.withConfig({displayName:"TodoList__EditMainDiv",componentId:"sc-1g5bqfg-0"})(["  width:70%;display:flex;flex-direction:column;justify-content:center;align-items:center;border:solid 1px white;border-radius:5px;background:rgb(47,49,54);div{padding:5px;border-radius:5px;}input{color:black;}"]),c=o.ZP.div.withConfig({displayName:"TodoList__EditHeadDiv",componentId:"sc-1g5bqfg-1"})(["  display:flex;font-size:2rem;"]),m=o.ZP.div.withConfig({displayName:"TodoList__EditTitleDiv",componentId:"sc-1g5bqfg-2"})(["  width:100%;display:flex;background-color:rgb(64,68,75);font-size:1.5rem;"]),p=o.ZP.input.withConfig({displayName:"TodoList__EditTitleInput",componentId:"sc-1g5bqfg-3"})(["  width:50%;border-radius:5px;margin-left:5px;"]),g=o.ZP.div.withConfig({displayName:"TodoList__EditDateDiv",componentId:"sc-1g5bqfg-4"})(["  width:100%;display:flex;justify-content:flex-start;background-color:rgb(64,68,75);font-size:1.5rem;.confirmB{margin-left:auto;}"]),u=o.ZP.input.withConfig({displayName:"TodoList__EditDateInput",componentId:"sc-1g5bqfg-5"})(["border-radius:5px;margin-left:5px;"]),f=o.ZP.button.withConfig({displayName:"TodoList__EditButton",componentId:"sc-1g5bqfg-6"})(["  margin-top:0;margin-bottom:0;margin-right:5px;color:white;background-color:rgb(64,68,75);border:solid grey 1px;border-radius:5px;"]),h=e=>{const[t,n]=(0,a.useState)(""),[i,o]=(0,a.useState)("");return a.createElement(r,null,a.createElement(c,null,"新增代辦事項"),a.createElement(m,null,"標題:",a.createElement(p,{id:"Title",placeholder:"輸入標題",onChange:e=>n(e.target.value)})),a.createElement(g,null,"日期:",a.createElement(u,{type:"Date",id:"Date",onChange:e=>o(e.target.value)}),a.createElement(f,{className:"confirmB",onClick:()=>{e.addMsg(t,i)}},"確認"),a.createElement(f,null,"取消")))},b=o.ZP.div.withConfig({displayName:"TodoList__ContMain",componentId:"sc-1g5bqfg-7"})(["display:flex;width:100%;font-size:1.5rem;padding:5px 5px 5px 5%;background-color:rgb(64,68,75);border-radius:5px;.div{padding:0;}.Date{margin-left:auto;}"]),y=o.ZP.div.withConfig({displayName:"TodoList__ContNameDiv",componentId:"sc-1g5bqfg-8"})(["display:flex;.SO{margin-right:12px;}"]),E=o.ZP.div.withConfig({displayName:"TodoList__ContDateDiv",componentId:"sc-1g5bqfg-9"})(["display:flex;.SO{margin-right:12px;}"]),x=o.ZP.div.withConfig({displayName:"TodoList__ContSetting",componentId:"sc-1g5bqfg-10"})(["  display:inline-block;justify-content:center;align-items:center;text-align:center;position:relative;"]),v=o.ZP.button.withConfig({displayName:"TodoList__ContButton",componentId:"sc-1g5bqfg-11"})(["  background:none;color:white;&:focus{outline:none;div{display:flex;}}&:hover{}"]),w=o.ZP.div.withConfig({displayName:"TodoList__ContSettings",componentId:"sc-1g5bqfg-12"})(["  position:absolute;flex-direction:column;width:160px;z-index:1;background:rgb(24,25,28);border-radius:5px;display:none;&:hover{display:flex;}"]),_=o.ZP.div.withConfig({displayName:"TodoList__ContRadioBlk",componentId:"sc-1g5bqfg-13"})(["display:flex;align-items:center;padding:5px;margin:5px;justify-content:space-evenly;&:hover{background:rgb(92,111,177);}"]),C=e=>{const[t,n]=(0,a.useState)("none");return a.createElement(b,null,a.createElement(y,null,a.createElement("span",{className:"SO"},e.so),a.createElement("span",null,e.name)),a.createElement(E,{className:"Date"},a.createElement("span",{className:"SO"},"期限:"),a.createElement("span",null,e.Date)),a.createElement(x,null,a.createElement(v,{onClick:()=>{n("none"==t?"flex":"none")}},"more",a.createElement(w,{display:t},a.createElement(_,{onClick:()=>{e.setSts(e.name,e.status,0)}},a.createElement("input",{type:"radio",name:"status"+e.so,checked:0==e.status}),"進行中"),a.createElement(_,{onClick:()=>{e.setSts(e.name,e.status,1)}},a.createElement("input",{type:"radio",name:"status"+e.so,checked:1==e.status}),"已完成"),a.createElement(_,{onClick:()=>{e.setSts(e.name,e.status,2)}},a.createElement("input",{type:"radio",name:"status"+e.so,checked:2==e.status}),"暫停中")))))},N=o.ZP.div.withConfig({displayName:"TodoList__MainDiv",componentId:"sc-1g5bqfg-14"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:5rem;color:white;min-height:100vh;"]),k=o.ZP.div.withConfig({displayName:"TodoList__CateBlock",componentId:"sc-1g5bqfg-15"})(["display:flex;flex-direction:column;width:70%;height:auto;min-height:10%;border:white solid 1px;border-radius:5px;margin:5px;background:rgb(47,49,54);"]),D=o.ZP.div.withConfig({displayName:"TodoList__CateTitle",componentId:"sc-1g5bqfg-16"})(["width:100%;height:auto;font-size:2rem;"]);function I(){const[e,t]=(0,a.useState)([]),[n,o]=(0,a.useState)([]),[s,l]=(0,a.useState)([]),d=(0,i.v9)((e=>e.msg)),r=(0,i.I0)();let c=[e,n,s],m=[t,o,l];(0,a.useEffect)((()=>{t([]),o([]),l([]),d.map((e=>{0==e.status?t((t=>[...t,e])):1==e.status?o((t=>[...t,e])):2==e.status&&l((t=>[...t,e]))}))}),[d]);let p=(e,t,n)=>{let a=c[t].filter((t=>t.Name===e))[0];(0,m[t])(c[t].filter((t=>t.Name!==e))),a.status=n,(0,m[n])((e=>[...e,a]))};return a.createElement(N,null,a.createElement(k,null,a.createElement(D,null,"Active"),e.map(((e,t)=>a.createElement(C,{name:e.Name,Date:e.Date,so:t+1,status:e.status,setSts:p})))),a.createElement(k,null,a.createElement(D,null,"Finished"),n.map(((e,t)=>a.createElement(C,{name:e.Name,Date:e.Date,so:t+1,status:e.status,setSts:p})))),a.createElement(k,null,a.createElement(D,null,"Inactive"),s.map(((e,t)=>a.createElement(C,{name:e.Name,Date:e.Date,so:t+1,status:e.status,setSts:p})))),a.createElement(h,{addMsg:(e,t)=>{r({type:"addMsg",payload:{Name:e,Date:t,status:0}})}}))}const T=()=>a.createElement(i.zt,{store:d},a.createElement(I,null))}}]);