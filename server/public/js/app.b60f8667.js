(function(e){function t(t){for(var n,s,c=t[0],i=t[1],u=t[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"0f13":function(e,t,r){"use strict";var n=r("a06d"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("PostComponent",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Dates & Titles")]),r("div",{staticClass:"container-md d-flex flex-column align-items-center"},[r("form",{staticClass:"form-inline",on:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"form-group mx-sm-3 mb-2"},[r("label",{staticClass:"sr-only",attrs:{for:"create-post"}},[e._v("Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],staticClass:"form-control",attrs:{type:"text",id:"create-post",placeholder:"Enter title"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})]),r("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"},on:{click:e.createPost}},[e._v(" Create Post! ")])])]),r("hr"),e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),r("div",{staticClass:"container-md d-flex flex-column align-items-center"},e._l(e.posts,(function(t,n){return r("div",{key:t.id,staticClass:"alert alert-primary posts",attrs:{item:t,index:n}},[r("span",{staticClass:"dt"},[e._v(" "+e._s(t.createdAt.getDate()+"/"+(t.createdAt.getMonth()+1)+"/"+t.createdAt.getFullYear())+" ")]),e._v(" "+e._s(t.text)+" "),r("span",{staticClass:"pointer",on:{click:function(r){return e.deletePost(t._id)}}},[e._v("X")])])})),0)])},c=[],i=(r("d3b7"),r("96cf"),r("a4d3"),r("4de4"),r("4160"),r("d81d"),r("0d03"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),u=r("d4ec"),l=r("bee2"),p=r("bc3a"),f=r.n(p);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b="api/posts/",v=function(){function e(){Object(u["a"])(this,e)}return Object(l["a"])(e,null,[{key:"getPosts",value:function(){return new Promise((function(e,t){var r,n;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,regeneratorRuntime.awrap(f.a.get(b));case 3:r=o.sent,n=r.data,e(n.map((function(e){return m({},e,{createdAt:new Date(e.createdAt)})}))),o.next=11;break;case 8:o.prev=8,o.t0=o["catch"](0),t(o.t0);case 11:case"end":return o.stop()}}),null,null,[[0,8]])}))}},{key:"insertPost",value:function(e){return f.a.post(b,{text:e})}},{key:"deletePost",value:function(e){return f.a.delete("".concat(b).concat(e))}}]),e}(),g=v,h={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(g.getPosts());case 3:this.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.error=e.t0.message;case 9:case"end":return e.stop()}}),null,this,[[0,6]])},methods:{createPost:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(g.insertPost(this.text));case 2:return e.next=4,regeneratorRuntime.awrap(g.getPosts());case 4:this.posts=e.sent,this.text="";case 6:case"end":return e.stop()}}),null,this)},deletePost:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(g.deletePost(e));case 2:return t.next=4,regeneratorRuntime.awrap(g.getPosts());case 4:this.posts=t.sent;case 5:case"end":return t.stop()}}),null,this)}}},y=h,x=(r("0f13"),r("2877")),w=Object(x["a"])(y,s,c,!1,null,"d0db0348",null),O=w.exports,P={name:"app",components:{PostComponent:O}},j=P,_=(r("034f"),Object(x["a"])(j,o,a,!1,null,null,null)),C=_.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(C)}}).$mount("#app")},"85ec":function(e,t,r){},a06d:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.b60f8667.js.map