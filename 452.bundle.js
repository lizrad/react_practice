(self.webpackChunkproject_test=self.webpackChunkproject_test||[]).push([[452],{1216:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>wn});var r=t(7757),i=t.n(r),a=t(8926),o=t.n(a),c=t(4575),l=t.n(c),u=t(3913),s=t.n(u),d=t(1506),m=t.n(d),p=t(2205),f=t.n(p),h=t(8585),y=t.n(h),v=t(9754),g=t.n(v),x=t(9713),w=t.n(x),b=t(8655),D=t.n(b),E=t(7294),P=t(8048),T=t(9163),k=t(319),j=t.n(k),O=t(4890);function S(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function I(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?S(Object(t),!0).forEach((function(e){w()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var z={title:"New Year!!",year:2021,month:1,day:1,hour:0,minute:0,second:0,isAnnually:!0},Z={dates:[]},C=function(n){return{type:"deleteDate",payload:n}},B=(0,O.MT)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"addDate":return I(I({},n),{},{dates:[].concat(j()(n.dates),[e.payload])});case"deleteDate":return I(I({},n),{},{dates:n.dates.filter((function(n){return n.title!==e.payload}))});default:return n}}));function M(){var n=D()(["\n    font-size:          5rem;\n    border-radius:      50%;\n    width:              5.5rem;\n    height:             5.5rem;\n    margin:             2rem;\n    display:            flex;\n    justify-content:    center;\n    align-items:        center;\n    background:         white;\n    -webkit-appearance: none;\n    appearance:         none;\n\n    @media screen and (max-width:   768px){\n        width:      40px;\n        height:     40px;\n        font-size:  1.5rem;\n    }\n\n    &:hover {\n        box-shadow: 0 0 20px rgba(255,255,255, 0.5)\n    }\n\n    &:focus {\n        outline:    none;\n    }\n"]);return M=function(){return n},n}function N(){var n=D()(['\n    * {\n        box-sizing:     border-box;\n    }\n    padding-top:        4rem;\n    min-width:          320px;\n    width:              100vw;\n    min-height:         100vh;\n    height:             auto;\n    color:              white;\n    display:            flex;\n    justify-content:    center;\n    align-items:        center;\n    flex-direction:     column;\n    font-size:          3rem;\n    font-family:        "Poppins", sans-serif;\n    @media screen and (max-width:   800px){\n        padding-top:    0;\n        font-size:      2.5rem;\n    }\n']);return N=function(){return n},n}function A(){var n=D()(["\n    width:  25%;\n    display:    flex;\n"]);return A=function(){return n},n}function F(){var n=D()(["\n    font-size:          3rem;\n    background:         none;\n    color:              #B6B8C1;\n    text-align:         right;\n\n    @media screen and (max-width:   425px){\n        font-size:  2rem;\n    }\n    \n    &:hover, &:active {\n        color:      white;\n    }\n\n    &:focus {\n        outline:    none;\n        div {\n            display:    flex;\n        }\n    }\n"]);return F=function(){return n},n}function R(){var n=D()(["\n    display:            flex;\n    width:              100%;\n    justify-content:    space-between;\n    align-items:        center;\n\n    .lastButton {\n        justify-content:    flex-end;\n    }\n\n    .blockTitle {\n        justify-content:    center;\n        text-align:         center;\n    }\n"]);return R=function(){return n},n}function J(){var n=D()(["\n    display:            flex;\n    justify-content:    center;\n    align-items:        center;\n    background:         grey;\n    opacity:            0.3;\n    \n    &:hover {\n        opacity:        0.7;\n    }\n"]);return J=function(){return n},n}function Y(){var n=D()(["\n    display:            flex;\n    align-items:        center;\n    justify-content:    center;\n    flex-direction:     column;\n    margin-bottom:      2rem;\n    border-radius:      20px;\n    width:              90%;\n\n    &:hover {\n        box-shadow:     0 0 20px black;\n    }\n"]);return Y=function(){return n},n}function H(){var n=D()(["\n    display:        flex;\n    font-size:      2rem;\n    text-align:     center;\n\n    div {\n        margin:         0 2rem;\n\n        @media screen and (max-width:   540px){\n            margin:     0 1rem;\n        }\n    }\n\n    p {\n        font-weight:    bold;\n        font-size:      5rem;\n    }\n\n    @media screen and (max-width: 800px) and (min-width:    426px){\n        div {\n            font-size:  2rem;\n            margin:     0 2rem;\n        }\n        p {\n            font-size:  3rem;\n        }\n    }\n\n    @media screen and (max-width:   425px){\n        div{\n            font-size:  1rem;\n            margin:     0 0.9rem;\n        }\n\n        p {\n            font-size:  2rem;\n        }\n    }\n"]);return H=function(){return n},n}function _(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=g()(n);if(e){var i=g()(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return y()(this,t)}}function U(){var n=D()(["\n    font-size:          2rem;\n    margin-bottom:      0;\n\n    @media screen and (max-width:   425px){\n        font-size:      1rem;\n    }\n"]);return U=function(){return n},n}function W(){var n=D()(["\n    margin:             5px;\n    width:              31.719px;\n    height:             31.719px;\n\n    @media screen and (max-width:   425px){\n        width:          15px;\n        height:         15px;\n    }\n"]);return W=function(){return n},n}function $(){var n=D()(["\n    display:            flex;\n    align-items:        center;\n    justify-content:    center;\n    width:              15%;\n\n    @media screen and (max-width:  768px){\n        width:          25%;\n    }\n\n    @media screen and (max-width:   540px){\n        width:          36%;\n    }\n\n    @media screen and (max-width:   375px){\n        width:          27%;\n    }\n"]);return $=function(){return n},n}function q(){var n=D()(["\n    margin:             0 1rem;\n    font-size:          2rem;\n    background:         rgb(47,49,54);\n    border:             1px solid rgba(255,255,255,0.3);\n    border-radius:      9px;\n    color:              white;\n\n    @media screen and (max-width:   414px){\n        font-size:      1rem;\n        margin:         0 0.2rem;\n    }\n"]);return q=function(){return n},n}function G(){var n=D()(["\n    display:            flex;\n    justify-content:    flex-end;\n    width:              100%;\n    margin:             1rem 0;\n"]);return G=function(){return n},n}function K(){var n=D()(["\n    display:        flex;\n    width:          100%;\n    margin:         1rem 0;\n\n    #title {\n        width:      80%;\n    }\n"]);return K=function(){return n},n}function L(){var n=D()(["\n    font-size:      2rem;\n    width:          100%;\n    background:     rgb(47, 49, 54);\n    border:         1px solid rgba(255,255,255,0.5);\n    border-radius:  9px;\n    margin:         0 1rem;\n    color:          white;\n\n    &:hover {\n        box-shadow: inset 0 0 10px white;\n    }\n\n    @media screen and (max-width:   767px) and (min-width:  375px){\n        font-size:  1rem;\n    }\n\n    @media screen and (max-width:   374px){\n        font-size:  0.7rem;\n    }\n"]);return L=function(){return n},n}function Q(){var n=D()(["\n    width:          70%;\n    height:         auto;\n    display:        ",";\n    flex-direction: column;\n    align-items:    center;\n\n    @media screen and (max-width:   767px){\n        font-size:      1.5rem;\n    }\n\n    &:hover {\n        box-shadow: 0 0 20px rgba(0,0,0,0.5)\n    }\n"]);return Q=function(){return n},n}window.store=B,window.deleteDate=C;var V=T.ZP.div(Q(),(function(n){return n.display||"flex"})),X=T.ZP.input(L()),nn=T.ZP.div(K()),en=T.ZP.div(G()),tn=T.ZP.button(q()),rn=T.ZP.div($()),an=T.ZP.input(W()),on=T.ZP.label(U()),cn=function(n){f()(t,n);var e=_(t);function t(){var n;l()(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i)),w()(m()(n),"gatherDateInfo",(function(){var e={title:document.getElementById("title").value,year:document.getElementById("y").value,month:document.getElementById("m").value,day:document.getElementById("d").value,hour:document.getElementById("hr").value,minute:document.getElementById("min").value,second:document.getElementById("sec").value};n.props.sendDate(e)})),n}return s()(t,[{key:"render",value:function(){var n=this;return E.createElement(V,{display:this.props.display},"Add your own timer",E.createElement(nn,null,E.createElement(X,{id:"title",className:"title",placeholder:"Title"}),E.createElement(rn,null,E.createElement(an,{type:"checkbox",id:"IsAnnually"}),E.createElement(on,null,"每年"))),E.createElement(nn,null,E.createElement(X,{id:"y",placeholder:"year"}),E.createElement(X,{id:"m",placeholder:"month"}),E.createElement(X,{id:"d",placeholder:"day"})),E.createElement(nn,null,E.createElement(X,{id:"hr",placeholder:"hour"}),E.createElement(X,{id:"min",placeholder:"minute"}),E.createElement(X,{id:"sec",placeholder:"second"})),E.createElement(en,null,E.createElement(tn,{onClick:this.gatherDateInfo},"Save"),E.createElement(tn,{onClick:function(){n.props.setDis("none")}},"Cancel")))}}]),t}(E.Component),ln=T.ZP.div(H()),un=T.ZP.div(Y()),sn=(T.ZP.button(J()),T.ZP.div(R())),dn=T.ZP.button(F()),mn=T.ZP.div(A()),pn=864e5,fn=36e5,hn=function(n){f()(t,n);var e=_(t);function t(n){var r;return l()(this,t),r=e.call(this,n),w()(m()(r),"ToDays",(function(){var n=Math.floor((r.props.targetDate-r.props.passTime)/pn);return n<10?"0"+n:n})),w()(m()(r),"ToHour",(function(){var n=Math.floor((r.props.targetDate-r.props.passTime)%pn/fn);return n<10?"0"+n:n})),w()(m()(r),"ToMin",(function(){var n=Math.floor((r.props.targetDate-r.props.passTime)%fn/6e4);return n<10?"0"+n:n})),w()(m()(r),"ToSec",(function(){var n=Math.floor((r.props.targetDate-r.props.passTime)%6e4/1e3);return n<10?"0"+n:n})),r}return s()(t,[{key:"render",value:function(){var n=this;return E.createElement(un,null,E.createElement(sn,null,E.createElement(mn,null),E.createElement(mn,{className:"blockTitle"},this.props.title),E.createElement(mn,{className:"lastButton"},E.createElement(dn,{onClick:function(){n.props.delTimer(n.props.title)}},"x"))),E.createElement(ln,null,E.createElement("div",null,E.createElement("p",null,this.ToDays()),"days"),E.createElement("div",null,E.createElement("p",null,this.ToHour()),"hours"),E.createElement("div",null,E.createElement("p",null,this.ToMin()),"minutes"),E.createElement("div",null,E.createElement("p",null,this.ToSec()),"seconds")))}}]),t}(E.Component),yn=T.ZP.div(N()),vn=T.ZP.button(M()),gn=function(n){f()(t,n);var e=_(t);function t(n){var r;return l()(this,t),r=e.call(this,n),w()(m()(r),"FetchOld",o()(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:fetch("http://114.32.157.74/PythonFlask/api/v1/",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:"get-timer"})}).then((function(n){return n.json()})).then((function(n){n.timers.map((function(n){r.SendDateToStore(n,!1)}))})).catch((function(n){console.log(n)}));case 1:case"end":return n.stop()}}),n)})))),w()(m()(r),"countdown",(function(){var n=new Date;r.setState({passTime:n})})),w()(m()(r),"SetEditDisplay",(function(n){r.setState({editDis:n})})),w()(m()(r),"SendDateToStore",(function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e&&fetch("http://114.32.157.74/PythonFlask/api/v1/",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:"insert-timer",title:n.title,year:parseInt(n.year),month:parseInt(n.month),day:parseInt(n.day),hour:parseInt(n.hour),minute:parseInt(n.minute),second:parseInt(n.second)})}),r.props.addDate(n),r.setState({editDis:"none"})})),w()(m()(r),"deleteTimerAPI",(function(n){fetch("http://114.32.157.74/PythonFlask/api/v1/",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:"del-timer",title:n})}).catch((function(n){console.log(n)}))})),w()(m()(r),"deleteTimer",(function(n){r.deleteTimerAPI(n),r.props.deleteDate(n)})),r.state={passTime:0,editDis:"none"},r.newYear=new Date("1 Jan 2021"),r.timerID=0,r}return s()(t,[{key:"componentDidMount",value:function(){var n=this;this.timerID=setInterval(this.countdown,1e3),this.props.data.length<=0&&this.FetchOld().then((function(){n.props.data.length<=0&&n.props.addDate(z)}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var n=this,e=this.props.data.map((function(e,t){var r=(new Date).getFullYear(),i=new Date(e.year,e.month-1,e.day,e.hour,e.minute,e.second);return i<new Date&&(i=new Date(r+1,e.month-1,e.day,e.hour,e.minute,e.second)),E.createElement(hn,{title:e.title,targetDate:i,passTime:n.state.passTime,delTimer:n.deleteTimer})}));return E.createElement(yn,null,e,E.createElement(cn,{display:this.state.editDis,setDis:this.SetEditDisplay,sendDate:this.SendDateToStore}),E.createElement(vn,{onClick:function(){n.setState({editDis:"flex"})}},"+"))}}]),t}(E.Component),xn=(0,P.$j)((function(n){return{data:n.dates}}),(function(n){return{addDate:function(e){return n(function(n){return{type:"addDate",payload:n}}(e))},deleteDate:function(e){return n(C(e))}}}))(gn),wn=function(n){f()(t,n);var e=_(t);function t(){return l()(this,t),e.apply(this,arguments)}return s()(t,[{key:"render",value:function(){return E.createElement(P.zt,{store:B},E.createElement(xn,null))}}]),t}(E.Component)}}]);