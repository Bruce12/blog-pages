(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{1:function(e,t,n){e.exports=n("74ff")},"256d":function(e,t,n){"use strict";var a=n("6e5b"),r=n.n(a);r.a},3785:function(e,t,n){},"4e9d":function(e,t,n){},"6e5b":function(e,t,n){},"74ff":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=(n("ac6a"),n("f3e2"),function e(t,n){var a=n.$options[t];console.log("lifeCycles",n),a&&a.length&&a.forEach((function(e){e.call(n)})),n.$children&&n.$children.length&&n.$children.forEach((function(n){e(t,n)}))});function c(){var e=a["default"].config.optionMergeStrategies;e.pageVisible=e.beforeCreate,e.pageHidden=e.created,console.log("optionMergeStrategies",a["default"].config.optionMergeStrategies)}function i(e){addEventListener("visibilitychange",(function(){var t="";"hidden"===document.visibilityState?t="pageHidden":"visible"===document.visibilityState&&(t="pageVisible"),t&&r(t,e)}))}n("f5df"),n("4e9d");var o=n("8c4f"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-component"},[n("AppMain"),n("Bar")],1)},s=[],l=n("d225"),f=n("308d"),p=n("6bb5"),d=n("4e2b"),b=n("9ab4"),h=n("60a3"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-main"},[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("keep-alive",[n("router-view")],1)],1)],1)},m=[],O=n("b0b4"),j=function(e){function t(){return Object(l["a"])(this,t),Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(O["a"])(t,[{key:"created",value:function(){}}]),t}(h["c"]);j=b["a"]([Object(h["a"])({name:"AppMain"})],j);var g=j,y=g,w=(n("93be"),n("2877")),E=Object(w["a"])(y,v,m,!1,null,"4781892e",null),x=E.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-component"},[n("ul",{staticClass:"flex bar-wrap text_center"},e._l(e.tags,(function(t){return n("li",{key:t.code,staticClass:"flex1"},[e._v("\n      "+e._s(t.value)+"\n    ")])})),0)])},_=[],k=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.tags=[{value:"首页",code:"home",selected:!0},{value:"笔记",code:"note"},{value:"搜索",code:"search"},{value:"关于",code:"about"}],e}return Object(d["a"])(t,e),t}(h["c"]);k=b["a"]([Object(h["a"])({name:"Bar"})],k);var P=k,R=P,$=(n("be2a"),Object(w["a"])(R,S,_,!1,null,"421c603e",null)),C=$.exports,T=function(e){function t(){return Object(l["a"])(this,t),Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(h["c"]);T=b["a"]([Object(h["a"])({name:"Layout",components:{Bar:C,AppMain:x}})],T);var M=T,U=M,A=(n("256d"),Object(w["a"])(U,u,s,!1,null,"61059546",null)),B=A.exports;a["default"].use(o["a"]);var D=[{path:"/",component:B,redirect:"/index",children:[{path:"/index",component:function(){return Promise.all([n.e("chunk-elementUI"),n.e("vendors~vender"),n.e("vender")]).then(n.bind(null,"3ac4"))},name:"index",meta:{title:"首页"}}]}],I=function(){return new o["a"]({scrollBehavior:function(e,t,n){return n||{x:0,y:0}},base:"",routes:D})},H=I(),J=H,L=(n("1c01"),n("58b2"),n("8e6e"),n("d25f"),n("456d"),n("bd86")),V=(n("96cf"),n("3b8d")),q=n("323e"),z=n.n(q),F=(n("a5d8"),n("6fc5")),G={index:{path:"/index",component:function(){return Promise.all([n.e("chunk-elementUI"),n.e("vendors~vender"),n.e("vender")]).then(n.bind(null,"3ac4"))},meta:{title:"首页"}},note:{path:"/note",component:function(){return Promise.all([n.e("chunk-elementUI"),n.e("vendors~vender"),n.e("vender")]).then(n.bind(null,"8da4"))},meta:{title:"笔记本"}}},K=G,N=n("2f62");a["default"].use(N["a"]);var Q=new N["a"].Store({}),W=function(e){var t=[],n=[];for(var a in e){var r=e[a];r.name=a,n.push(r)}return t.push({name:"root-hidden",path:"/root-hidden",component:B,meta:{hidden:!0},children:n}),t.push({path:"*",redirect:"/404",meta:{hidden:!0}}),t},X=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.routes=[],e.inited=!1,e}return Object(d["a"])(t,e),Object(O["a"])(t,[{key:"SET_ROUTES",value:function(e){this.routes=D.concat(e),this.inited=!0}},{key:"getRouters",value:function(){this.SET_ROUTES(W(K))}}]),t}(F["d"]);b["a"]([F["c"]],X.prototype,"SET_ROUTES",null),b["a"]([F["a"]],X.prototype,"getRouters",null),X=b["a"]([Object(F["b"])({namespaced:!0,dynamic:!0,store:Q,name:"permission"})],X);var Y=Object(F["e"])(X);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(L["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}z.a.configure({showSpinner:!0}),J.beforeEach(function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:z.a.start(),Y.inited?a():(Y.getRouters(),J.addRoutes(Y.routes),a(ee({},t,{replace:!0}))),z.a.done();case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()),J.afterEach((function(e){document.title=e.meta.title,z.a.done()}));var te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},ne=[],ae=function(e){function t(){return Object(l["a"])(this,t),Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(h["c"]);ae=b["a"]([Object(h["a"])({name:"App",components:{}})],ae);var re=ae,ce=re,ie=Object(w["a"])(ce,te,ne,!1,null,null,null),oe=ie.exports;c(),a["default"].config.devtools=!1,a["default"].config.productionTip=!1;var ue=new a["default"]({router:J,render:function(e){return e(oe)}}).$mount("#app");i(ue)},"93be":function(e,t,n){"use strict";var a=n("be1c"),r=n.n(a);r.a},be1c:function(e,t,n){},be2a:function(e,t,n){"use strict";var a=n("3785"),r=n.n(a);r.a}},[[1,"runtime","chunk-libs"]]]);