(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45caa6ba"],{"0fd9":function(t,e,n){"use strict";var a=n("ade3"),i=n("5530"),r=(n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,a){return n[t+Object(o["G"])(a)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),h=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:h}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var a=b[t];if(null!=n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return a+="-".concat(n),a.toLowerCase()}}var y=new Map;e["a"]=r["default"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:h}},v),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var n=e.props,i=e.data,r=e.children,o="";for(var c in n)o+=String(n[c]);var l=y.get(o);return l||function(){var t,e;for(e in l=[],m)m[e].forEach((function(t){var a=n[t],i=x(e,t,a);i&&l.push(i)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),y.set(o,l)}(),t(n.tag,Object(s["a"])(i,{staticClass:"row",class:l}),r)}})},"132d":function(t,e,n){"use strict";var a,i=n("5530"),r=(n("c96a"),n("caad"),n("2532"),n("a9e3"),n("498a"),n("7db0"),n("fb6a"),n("4804"),n("7e2b")),s=n("a9ad"),o=n("af2b"),c=n("7560"),l=n("80d2"),u=n("2b0e"),d=n("58df");function f(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function h(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(a||(a={}));var v=Object(d["a"])(r["a"],s["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["C"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["z"])(t).find((function(e){return t[e]}));return e&&a[e]||Object(l["g"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(i["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(i["a"])(Object(i["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(i["a"])(Object(i["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],a=this.getDefaultData(),i="material-icons",r=t.indexOf("-"),s=r<=-1;s?n.push(t):(i=t.slice(0,r),f(i)&&(i="")),a.class[i]=!0,a.class[t]=!s;var o=this.getSize();return o&&(a.style={fontSize:o}),this.applyColors(a),e(this.hasClickListener?"button":this.tag,a,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},a=this.getSize();return a&&(n.style={fontSize:a,height:a,width:a}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n={class:{"v-icon__component":!0}},a=this.getSize();a&&(n.style={fontSize:a,height:a,width:a}),this.applyColors(n);var i=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(i,n)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?h(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["default"].extend({name:"v-icon",$_wrapperFor:v,functional:!0,render:function(t,e){var n=e.data,a=e.children,i="";return n.domProps&&(i=n.domProps.textContent||n.domProps.innerHTML||i,delete n.domProps.textContent,delete n.domProps.innerHTML),t(v,n,i?[i]:a)}})},"1ad2":function(t,e,n){},3408:function(t,e,n){},"3c78":function(t,e,n){"use strict";n("bcaa")},4804:function(t,e,n){},"4ec9":function(t,e,n){"use strict";var a=n("6d61"),i=n("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var a=n("9bf2").f,i=n("7c73"),r=n("e2cc"),s=n("0366"),o=n("19aa"),c=n("2266"),l=n("7dd0"),u=n("2626"),d=n("83ab"),f=n("f183").fastKey,h=n("69f3"),v=h.set,p=h.getterFor;t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,a){o(t,u,e),v(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=a&&c(a,t[l],{that:t,AS_ENTRIES:n})})),h=p(e),g=function(t,e,n){var a,i,r=h(t),s=m(t,e);return s?s.value=n:(r.last=s={index:i=f(e,!0),key:e,value:n,previous:a=r.last,next:void 0,removed:!1},r.first||(r.first=s),a&&(a.next=s),d?r.size++:t.size++,"F"!==i&&(r.index[i]=s)),t},m=function(t,e){var n,a=h(t),i=f(e);if("F"!==i)return a.index[i];for(n=a.first;n;n=n.next)if(n.key==e)return n};return r(u.prototype,{clear:function(){var t=this,e=h(t),n=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete n[a.index],a=a.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=h(e),a=m(e,t);if(a){var i=a.next,r=a.previous;delete n.index[a.index],a.removed=!0,r&&(r.next=i),i&&(i.previous=r),n.first==a&&(n.first=i),n.last==a&&(n.last=r),d?n.size--:e.size--}return!!a},forEach:function(t){var e,n=h(this),a=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),r(u.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&a(u.prototype,"size",{get:function(){return h(this).size}}),u},setStrong:function(t,e,n){var a=e+" Iterator",i=p(e),r=p(a);l(t,e,(function(t,e){v(this,{type:a,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6d61":function(t,e,n){"use strict";var a=n("23e7"),i=n("da84"),r=n("94ca"),s=n("6eeb"),o=n("f183"),c=n("2266"),l=n("19aa"),u=n("861d"),d=n("d039"),f=n("1c7e"),h=n("d44e"),v=n("7156");t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),m=p?"set":"add",b=i[t],x=b&&b.prototype,y=b,C={},w=function(t){var e=x[t];s(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},k=r(t,"function"!=typeof b||!(g||x.forEach&&!d((function(){(new b).entries().next()}))));if(k)y=n.getConstructor(e,t,p,m),o.REQUIRED=!0;else if(r(t,!0)){var S=new y,j=S[m](g?{}:-0,1)!=S,z=d((function(){S.has(1)})),O=f((function(t){new b(t)})),_=!g&&d((function(){var t=new b,e=5;while(e--)t[m](e,e);return!t.has(-0)}));O||(y=e((function(e,n){l(e,y,t);var a=v(new b,e,y);return void 0!=n&&c(n,a[m],{that:a,AS_ENTRIES:p}),a})),y.prototype=x,x.constructor=y),(z||_)&&(w("delete"),w("has"),p&&w("get")),(_||j)&&w(m),g&&x.clear&&delete x.clear}return C[t]=y,a({global:!0,forced:y!=b},C),h(y,t),g||n.setStrong(y,t,p),y}},8212:function(t,e,n){"use strict";var a=n("5530"),i=(n("a9e3"),n("3408"),n("a9ad")),r=n("24b2"),s=n("a236"),o=n("80d2"),c=n("58df");e["a"]=Object(c["a"])(i["a"],r["a"],s["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(a["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(a["a"])({height:Object(o["g"])(this.size),minWidth:Object(o["g"])(this.size),width:Object(o["g"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},"910b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"d-flex align-center",staticStyle:{position:"relative"},attrs:{"min-height":"100vh",color:"rgb(241 241 242)",flat:"",tile:""}},[n("v-card",{staticClass:"mx-auto elevation-0 rounded-0",staticStyle:{"z-index":"2"},attrs:{"max-width":"1000",color:"transparent"}},[n("v-card-subtitle",{staticClass:"text-center nepali-font",attrs:{id:"kendra_name"}},[t._v(" ईश्वरीय मार्ग भजन मंडल सच्चाई केन्द्र नेपाल ")]),n("v-card-subtitle",{staticClass:"text-center nepali-font",attrs:{id:"kendra_motto"}},[t._v(" हिमाल पहाड तराई, कोहि छैन पराई, सबैलाई समेट्ने एक मात्र सच्चाई ")]),n("v-row",{staticClass:"ma-0 pa-2",attrs:{justify:"center",align:"center"}},t._l(t.kendra,(function(e,a){return n("v-card",{key:a,staticClass:"elevation-0 text-center py-6 ma-2",staticStyle:{border:"2px solid white !important"},attrs:{dark:"",color:"#024b84","max-width":"300",width:"300"}},[n("v-avatar",{staticClass:"rounded-circle resize-avatar",class:"Kendra Pramukh"===e.position?"pramukh":"saha-pramukh",attrs:{size:"200",color:"white"}},[n("v-img",{attrs:{src:e.image}})],1),n("div",{staticClass:"personal-info"},[n("div",{staticClass:"name nepali-font"},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"position nepali-font"},[t._v(" "+t._s(e.position)+" ")]),n("div",{staticClass:"contact nepali-font py-2"},[n("span",[n("v-icon",{attrs:{size:"18"}},[t._v("mdi-phone")])],1),n("span",{staticClass:"px-2"},[t._v(t._s(e.contact))])])])],1)})),1)],1),n("div",{staticClass:"custom-shape-divider-bottom",staticStyle:{"z-index":"1"}},[n("svg",{attrs:{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"}},[n("path",{staticClass:"shape-fill",attrs:{d:"M1200 120L0 16.48 0 0 1200 0 1200 120z"}})])])],1)},i=[],r=n("cffa"),s=n("1dac");s["a"].defaults({toggleActions:"restart pause resume pause",scrub:1}),r["a"].registerPlugin(s["a"]);var o={data:function(){return{kendra:[{image:n("e945"),name:"प्रकाश दिप गैरे",position:"प्रमुख",contact:"9856015401"},{image:n("d00c"),name:"सुशिला कट्टेल गैरे",position:"उप-प्रमुख",contact:"9856015403"}]}},mounted:function(){r["a"].timeline({scrollTrigger:{trigger:".showcase-img-wrapper",start:"top center"},yoyo:!0}).from(".repeating-gradient",{duration:1.5,scale:.5,opacity:0}),r["a"].timeline({scrollTrigger:{trigger:"#kendra_motto",start:"bottom bottom",end:"+=300"},yoyo:!0}).from("#kendra_name",{scale:2,opacity:0,x:-500,duration:.5},0).from("#kendra_motto",{scale:2,opacity:0,duration:.5,x:500},0).from(".kendra-col-0",{x:-500,duration:1},1).from(".kendra-col-1",{x:500,duration:1},1)}},c=o,l=(n("3c78"),n("e7c4"),n("2877")),u=n("6544"),d=n.n(u),f=n("8212"),h=n("b0af"),v=n("99d9"),p=n("132d"),g=n("adda"),m=n("0fd9"),b=Object(l["a"])(c,a,i,!1,null,"05fc100b",null);e["default"]=b.exports;d()(b,{VAvatar:f["a"],VCard:h["a"],VCardSubtitle:v["b"],VIcon:p["a"],VImg:g["a"],VRow:m["a"]})},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));var a=n("b0af"),i=n("80d2"),r=Object(i["i"])("v-card__actions"),s=Object(i["i"])("v-card__subtitle"),o=Object(i["i"])("v-card__text"),c=Object(i["i"])("v-card__title");a["a"]},af2b:function(t,e,n){"use strict";n("c96a");var a=n("2b0e");e["a"]=a["default"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},bcaa:function(t,e,n){},c96a:function(t,e,n){"use strict";var a=n("23e7"),i=n("857a"),r=n("af03");a({target:"String",proto:!0,forced:r("small")},{small:function(){return i(this,"small","","")}})},d00c:function(t,e,n){t.exports=n.p+"img/kendra_saha_pramukh.8dda108c.jpg"},e7c4:function(t,e,n){"use strict";n("1ad2")},e945:function(t,e,n){t.exports=n.p+"img/kendra_pramukh.7785eb2e.jpg"}}]);
//# sourceMappingURL=chunk-45caa6ba.267d61de.js.map