(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64a0baa3"],{"0fd9":function(t,e,n){"use strict";var a=n("ade3"),r=n("5530"),i=(n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return c.reduce((function(n,a){return n[t+Object(o["G"])(a)]=e(),n}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},p=l("justify",(function(){return{type:String,default:null,validator:v}})),h=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=l("alignContent",(function(){return{type:String,default:null,validator:h}})),b={align:Object.keys(f),justify:Object.keys(p),alignContent:Object.keys(g)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var a=m[t];if(null!=n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return a+="-".concat(n),a.toLowerCase()}}var x=new Map;e["a"]=i["default"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:v}},p),{},{alignContent:{type:String,default:null,validator:h}},g),render:function(t,e){var n=e.props,r=e.data,i=e.children,o="";for(var c in n)o+=String(n[c]);var u=x.get(o);return u||function(){var t,e;for(e in u=[],b)b[e].forEach((function(t){var a=n[t],r=y(e,t,a);r&&u.push(r)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(o,u)}(),t(n.tag,Object(s["a"])(r,{staticClass:"row",class:u}),i)}})},3408:function(t,e,n){},"4ec9":function(t,e,n){"use strict";var a=n("6d61"),r=n("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(t,e,n){"use strict";var a=n("9bf2").f,r=n("7c73"),i=n("e2cc"),s=n("0366"),o=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),d=n("83ab"),f=n("f183").fastKey,v=n("69f3"),p=v.set,h=v.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,a){o(t,l,e),p(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=a&&c(a,t[u],{that:t,AS_ENTRIES:n})})),v=h(e),g=function(t,e,n){var a,r,i=v(t),s=b(t,e);return s?s.value=n:(i.last=s={index:r=f(e,!0),key:e,value:n,previous:a=i.last,next:void 0,removed:!1},i.first||(i.first=s),a&&(a.next=s),d?i.size++:t.size++,"F"!==r&&(i.index[r]=s)),t},b=function(t,e){var n,a=v(t),r=f(e);if("F"!==r)return a.index[r];for(n=a.first;n;n=n.next)if(n.key==e)return n};return i(l.prototype,{clear:function(){var t=this,e=v(t),n=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete n[a.index],a=a.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),a=b(e,t);if(a){var r=a.next,i=a.previous;delete n.index[a.index],a.removed=!0,i&&(i.next=r),r&&(r.previous=i),n.first==a&&(n.first=r),n.last==a&&(n.last=i),d?n.size--:e.size--}return!!a},forEach:function(t){var e,n=v(this),a=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),i(l.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&a(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,n){var a=e+" Iterator",r=h(e),i=h(a);u(t,e,(function(t,e){p(this,{type:a,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var a=n("23e7"),r=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("f183"),c=n("2266"),u=n("19aa"),l=n("861d"),d=n("d039"),f=n("1c7e"),v=n("d44e"),p=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),b=h?"set":"add",m=r[t],y=m&&m.prototype,x=m,k={},j=function(t){var e=y[t];s(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},w=i(t,"function"!=typeof m||!(g||y.forEach&&!d((function(){(new m).entries().next()}))));if(w)x=n.getConstructor(e,t,h,b),o.REQUIRED=!0;else if(i(t,!0)){var _=new x,C=_[b](g?{}:-0,1)!=_,O=d((function(){_.has(1)})),S=f((function(t){new m(t)})),z=!g&&d((function(){var t=new m,e=5;while(e--)t[b](e,e);return!t.has(-0)}));S||(x=e((function(e,n){u(e,x,t);var a=p(new m,e,x);return void 0!=n&&c(n,a[b],{that:a,AS_ENTRIES:h}),a})),x.prototype=y,y.constructor=x),(O||z)&&(j("delete"),j("has"),h&&j("get")),(z||C)&&j(b),g&&y.clear&&delete y.clear}return k[t]=x,a({global:!0,forced:x!=m},k),v(x,t),g||n.setStrong(x,t,h),x}},"7edc":function(t,e,n){},8212:function(t,e,n){"use strict";var a=n("5530"),r=(n("a9e3"),n("3408"),n("a9ad")),i=n("24b2"),s=n("a236"),o=n("80d2"),c=n("58df");e["a"]=Object(c["a"])(r["a"],i["a"],s["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(a["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(a["a"])({height:Object(o["g"])(this.size),minWidth:Object(o["g"])(this.size),width:Object(o["g"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},"910b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"d-flex align-center",staticStyle:{position:"relative"},attrs:{"min-height":"100vh",color:"rgb(241 241 242)",flat:"",tile:""}},[n("v-card",{staticClass:"mx-auto elevation-0 rounded-0",attrs:{"max-width":"1000",color:"transparent"}},[n("v-card-subtitle",{staticClass:"text-center nepali-font",attrs:{id:"kendra_name"}},[t._v(" ईश्वरीय मार्ग भजन मण्डल सच्चाई केन्द्र नेपाल ")]),n("v-card-subtitle",{staticClass:"text-center nepali-font",attrs:{id:"kendra_motto"}},[t._v(" हिमाल पहाड तराई, कोहि छैन पराई, सबैलाई समेट्ने एक मात्र सच्चाई ")]),n("v-row",{staticClass:"ma-0 pa-2",attrs:{justify:"center",align:"center"}},t._l(t.kendra,(function(e,a){return n("v-card",{key:a,staticClass:"elevation-0 text-center py-6 ma-2 kendra-card",staticStyle:{border:"2px solid white !important","z-index":"2"},attrs:{dark:"",color:"#024b84","max-width":"300",width:"300",rounded:"xl"}},[n("v-avatar",{staticClass:"rounded-circle resize-avatar",class:"Kendra Pramukh"===e.position?"pramukh":"saha-pramukh",attrs:{size:"200",color:"white"}},[n("v-img",{attrs:{src:e.image}})],1),n("div",{staticClass:"personal-info"},[n("div",{staticClass:"name nepali-font"},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"position nepali-font"},[t._v(" "+t._s(e.position)+" ")])])],1)})),1)],1)],1)},r=[],i=n("cffa"),s=n("1dac");s["a"].defaults({toggleActions:"restart pause resume pause",scrub:1}),i["a"].registerPlugin(s["a"]);var o={data:function(){return{kendra:[{image:n("e945"),name:"प्रकाश दिप गैरे",position:"प्रमुख",contact:"9856015401"},{image:n("d00c"),name:"सुशिला कट्टेल गैरे",position:"उप-प्रमुख",contact:"9856015403"}]}},mounted:function(){i["a"].timeline({scrollTrigger:{trigger:"#kendra_motto",start:"bottom bottom",end:"+=300"},yoyo:!0}).from("#kendra_name",{scale:2,opacity:0,x:-500,duration:.5},0).from("#kendra_motto",{scale:2,opacity:0,duration:.5,x:500},0).from(".kendra-card",{duration:1.5,scale:.5,opacity:0})}},c=o,u=(n("d560"),n("e29e"),n("2877")),l=n("6544"),d=n.n(l),f=n("8212"),v=n("b0af"),p=n("99d9"),h=n("adda"),g=n("0fd9"),b=Object(u["a"])(c,a,r,!1,null,"3221cd70",null);e["default"]=b.exports;d()(b,{VAvatar:f["a"],VCard:v["a"],VCardSubtitle:p["b"],VImg:h["a"],VRow:g["a"]})},"98a1":function(t,e,n){},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));var a=n("b0af"),r=n("80d2"),i=Object(r["i"])("v-card__actions"),s=Object(r["i"])("v-card__subtitle"),o=Object(r["i"])("v-card__text"),c=Object(r["i"])("v-card__title");a["a"]},d00c:function(t,e,n){t.exports=n.p+"img/kendra_saha_pramukh.8dda108c.jpg"},d560:function(t,e,n){"use strict";n("98a1")},e29e:function(t,e,n){"use strict";n("7edc")},e945:function(t,e,n){t.exports=n.p+"img/kendra_pramukh.7785eb2e.jpg"}}]);
//# sourceMappingURL=chunk-64a0baa3.0400936e.js.map