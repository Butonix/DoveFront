(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5520383c","chunk-6fc69ad8","chunk-74b12caa","chunk-7d8077a0","chunk-607b7457"],{"132d":function(t,e,i){"use strict";var n,a=i("5530"),s=(i("c96a"),i("caad"),i("2532"),i("a9e3"),i("498a"),i("7db0"),i("fb6a"),i("4804"),i("7e2b")),r=i("a9ad"),o=i("af2b"),c=i("7560"),l=i("80d2"),u=i("2b0e"),d=i("58df");function h(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function v(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(n||(n={}));var f=Object(d["a"])(s["a"],r["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["C"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["z"])(t).find((function(e){return t[e]}));return e&&n[e]||Object(l["g"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(a["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(a["a"])(Object(a["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(a["a"])(Object(a["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],n=this.getDefaultData(),a="material-icons",s=t.indexOf("-"),r=s<=-1;r?i.push(t):(a=t.slice(0,s),h(a)&&(a="")),n.class[a]=!0,n.class[t]=!r;var o=this.getSize();return o&&(n.style={fontSize:o}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,i)},renderSvgIcon:function(t,e){var i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},n=this.getSize();return n&&(i.style={fontSize:n,height:n,width:n}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i={class:{"v-icon__component":!0}},n=this.getSize();n&&(i.style={fontSize:n,height:n,width:n}),this.applyColors(i);var a=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(a,i)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?v(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["default"].extend({name:"v-icon",$_wrapperFor:f,functional:!0,render:function(t,e){var i=e.data,n=e.children,a="";return i.domProps&&(a=i.domProps.textContent||i.domProps.innerHTML||a,delete i.domProps.textContent,delete i.domProps.innerHTML),t(f,i,a?[a]:n)}})},"169a":function(t,e,i){"use strict";var n=i("5530"),a=i("2909"),s=i("ade3"),r=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),o=i("4ad4"),c=i("b848"),l=i("75eb"),u=i("e707"),d=i("e4d3"),h=i("21be"),v=i("f2e7"),f=i("a293"),m=i("58df"),p=i("d9bd"),b=i("80d2"),g=Object(m["a"])(o["a"],c["a"],l["a"],u["a"],d["a"],h["a"],v["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(a["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(r["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"16b7":function(t,e,i){"use strict";i("a9e3");var n=i("2b0e");e["a"]=n["default"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}})},"208e":function(t,e,i){},"21be":function(t,e,i){"use strict";var n=i("2909"),a=(i("99af"),i("caad"),i("2532"),i("2b0e")),s=i("80d2");e["a"]=a["default"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(s["u"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(s["u"])(e)],a=[].concat(Object(n["a"])(document.getElementsByClassName("v-menu__content--active")),Object(n["a"])(document.getElementsByClassName("v-dialog__content--active"))),r=0;r<a.length;r++)t.includes(a[r])||i.push(Object(s["u"])(a[r]));return Math.max.apply(Math,i)}}})},"22da":function(t,e,i){"use strict";var n=i("490a");e["a"]=n["a"]},"2fa4":function(t,e,i){"use strict";i("20f6");var n=i("80d2");e["a"]=Object(n["i"])("spacer","div","v-spacer")},3206:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return c}));var n=i("ade3"),a=(i("99af"),i("2b0e")),s=i("d9bd");function r(t,e){return function(){return Object(s["c"])("The ".concat(t," component must be used inside a ").concat(e))}}function o(t,e,i){var s=e&&i?{register:r(e,i),unregister:r(e,i)}:null;return a["default"].extend({name:"registrable-inject",inject:Object(n["a"])({},t,{default:s})})}function c(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["default"].extend({name:"registrable-provide",provide:function(){return Object(n["a"])({},t,e?this:{register:this.register,unregister:this.unregister})}})}},"368e":function(t,e,i){},4804:function(t,e,i){},"480e":function(t,e,i){"use strict";i("7db0");var n=i("7560");e["a"]=n["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:n["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},"490a":function(t,e,i){"use strict";i("a9e3"),i("99af"),i("8d4f");var n=i("90a2"),a=i("a9ad"),s=i("80d2");e["a"]=a["a"].extend({name:"v-progress-circular",directives:{intersect:n["a"]},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(s["g"])(this.calculatedSize),width:Object(s["g"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,i){this.isVisible=i}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},"4ad4":function(t,e,i){"use strict";var n=i("53ca"),a=(i("caad"),i("b64b"),i("b0c0"),i("16b7")),s=i("f2e7"),r=i("58df"),o=i("80d2"),c=i("d9bd"),l=Object(r["a"])(a["a"],s["a"]);e["a"]=l.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(n["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(o["t"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(c["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(o["s"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var i=t.getActivator(e);i&&i.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){var e;if(this.activatorElement)return this.activatorElement;var i=null;if(this.activator){var n=this.internalActivator?this.$el:document;i="string"===typeof this.activator?n.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var a=this.activatorNode[0].componentInstance;i=a&&a.$options.mixins&&a.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?a.getActivator():this.activatorNode[0].elm}else t&&(i=t.currentTarget||t.target);return this.activatorElement=(null==(e=i)?void 0:e.nodeType)===Node.ELEMENT_NODE?i:null,this.activatorElement},getContentSlot:function(){return Object(o["s"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"4e82":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("ade3"),a=i("3206");function s(t,e,i){return Object(a["a"])(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(n["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}s("itemGroup")},"5c07":function(t,e,i){"use strict";i("208e")},"75eb":function(t,e,i){"use strict";var n=i("ade3"),a=i("53ca"),s=(i("159b"),i("9d65")),r=i("80d2"),o=i("58df"),c=i("d9bd");function l(t){var e=Object(a["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]=Object(o["a"])(s["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:l},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var i=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,i)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(r["p"])(this.$vnode,"context.$options._scopeId");return t&&Object(n["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(c["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},8063:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card-actions",{staticClass:"pa-2 pt-0 flex-wrap justify-space-between"},[t.$helper.isCurrentUserSuperAdmin()?i("v-btn",{staticClass:"ma-1",attrs:{icon:t.ifScreenWidthIsLessThanSmall,small:!t.ifScreenWidthIsLessThanSmall,height:"40",depressed:"",color:"#953b93",dark:""},on:{click:function(e){return t.$emit("edit")}}},[i("v-icon",[t._v(" mdi-pencil ")])],1):t._e(),i("v-btn",{staticClass:"ma-1",attrs:{depressed:"",icon:t.ifScreenWidthIsLessThanSmall,small:!t.ifScreenWidthIsLessThanSmall,height:"40"}},[i("v-icon",[t._v(" mdi-heart-outline ")])],1),i("v-btn",{staticClass:"ma-1",attrs:{depressed:"",icon:t.ifScreenWidthIsLessThanSmall,small:!t.ifScreenWidthIsLessThanSmall,height:"40"}},[i("v-icon",[t._v(" mdi-comment-outline ")])],1),i("v-btn",{staticClass:"ma-1",attrs:{depressed:"",icon:t.ifScreenWidthIsLessThanSmall,small:!t.ifScreenWidthIsLessThanSmall,height:"40"}},[i("v-icon",[t._v(" mdi-share ")])],1),i("v-spacer"),i("v-btn",{staticClass:"ma-1",attrs:{depressed:"",icon:t.ifScreenWidthIsLessThanSmall,small:!t.ifScreenWidthIsLessThanSmall,height:"40"}},[i("v-icon",[t._v(" mdi-bookmark-outline ")])],1)],1)},a=[],s={name:"MultimediaAction",props:{},emits:["edit"],data:function(){return{}},computed:{ifScreenWidthIsLessThanSmall:function(){return this.$vuetify.breakpoint.width<500}},methods:{}},r=s,o=i("2877"),c=i("6544"),l=i.n(c),u=i("8336"),d=i("99d9"),h=i("132d"),v=i("2fa4"),f=Object(o["a"])(r,n,a,!1,null,"ebab612e",null);e["default"]=f.exports;l()(f,{VBtn:u["a"],VCardActions:d["a"],VIcon:h["a"],VSpacer:v["a"]})},8336:function(t,e,i){"use strict";var n=i("53ca"),a=i("3835"),s=i("5530"),r=(i("c7cd"),i("a9e3"),i("caad"),i("86cc"),i("10d2")),o=i("22da"),c=i("4e82"),l=i("f2e7"),u=i("c995"),d=i("fe6c"),h=i("1c87"),v=i("af2b"),f=i("58df"),m=i("d9bd"),p=Object(f["a"])(r["a"],h["a"],d["a"],v["a"],Object(c["a"])("btnToggle"),Object(l["b"])("inputValue"));e["a"]=p.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({"v-btn":!0},h["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return u["a"].options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(s["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(a["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(m["a"])(n,s,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(o["a"],{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),a=i.tag,s=i.data,r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===a&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(Object(n["a"])(this.value))?this.value:JSON.stringify(this.value),t(a,this.disabled?s:r(this.color,s),e)}})},"86cc":function(t,e,i){},"8ce9":function(t,e,i){},"8d4f":function(t,e,i){},9560:function(t,e,i){},9640:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"pa-4 no-data",attrs:{color:"no-data-gradient",height:"600"}},[n("v-img",{attrs:{src:i("fb40"),height:"100%"},scopedSlots:t._u([{key:"default",fn:function(){return[n("div",{staticClass:"fill-height d-flex align-center justify-center"},[n("div",[n("div",{staticClass:"d-flex justify-center"},[n("p",{staticClass:"text-center main"},[t._v(" "+t._s(t.text)+" ")])]),n("v-card-actions",{staticClass:"d-flex justify-center"},[n("v-btn",{attrs:{to:"/home/multimedia/images"}},[t._v(" Images ")]),n("v-btn",{attrs:{to:"/home/multimedia/videos"}},[t._v(" Videos ")]),n("v-btn",{attrs:{to:"/home/multimedia/youtube"}},[t._v(" Youtube ")])],1)],1)])]},proxy:!0}])})],1)},a=[],s={name:"NoMultimediaCard",props:{text:{type:String,required:!0}}},r=s,o=(i("5c07"),i("f25c"),i("2877")),c=i("6544"),l=i.n(c),u=i("8336"),d=i("b0af"),h=i("99d9"),v=i("adda"),f=Object(o["a"])(r,n,a,!1,null,"fca8f7da",null);e["default"]=f.exports;l()(f,{VBtn:u["a"],VCard:d["a"],VCardActions:h["a"],VImg:v["a"]})},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return c}));var n=i("b0af"),a=i("80d2"),s=Object(a["i"])("v-card__actions"),r=Object(a["i"])("v-card__subtitle"),o=Object(a["i"])("v-card__text"),c=Object(a["i"])("v-card__title");n["a"]},"9d65":function(t,e,i){"use strict";var n=i("d9bd"),a=i("2b0e");e["a"]=a["default"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(n["e"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},a7b3:function(t,e,i){"use strict";var n=i("1da1"),a=(i("96cf"),i("159b"),{computed:{player:function(){return this.$refs.youtube.yt}},created:function(){window.addEventListener("scroll",this.handleScroll);var t=document.querySelector(".router-column");t&&t.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll);var t=document.querySelector(".router-column");t&&t.removeEventListener("scroll",this.handleScroll)},methods:{isElementOnViewPort:function(t){if(!t)return!1;var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.right<=(window.innerWidth||document.documentElement.clientWidth)&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)},handleScroll:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=document.querySelectorAll("video"),i.forEach((function(e){var i=t.isElementOnViewPort(e);i||e.paused||e.pause()})),!Array.isArray(t.$refs.yt)){e.next=5;break}return e.next=5,t.$refs.yt.forEach(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(i){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.player.getPlayerState();case 2:if(n=e.sent,a=t.isElementOnViewPort(i.$parent.$el),a){e.next=8;break}if(1!==n){e.next=8;break}return e.next=8,i.player.pauseVideo();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e)})))()},onPlay:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.pauseAllYt();case 2:document.querySelectorAll("video").forEach((function(e){e!==t.currentTarget&&(e.paused||e.pause())}));case 3:case"end":return i.stop()}}),i)})))()},pauseAllPlayingHTMLVideos:function(){document.querySelectorAll("video").forEach((function(t){t.paused||t.pause()}))},playing:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.pauseAllPlayingHTMLVideos(),!Array.isArray(t.$refs.yt)){e.next=4;break}return e.next=4,t.$refs.yt.forEach(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.player.get){t.next=3;break}return t.next=3,e.player.pauseVideo();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})))()},pauseAllYt:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!Array.isArray(t.$refs.yt)){e.next=3;break}return e.next=3,t.$refs.yt.forEach(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.player.getPlayerState();case 2:i=t.sent,1===i&&e.player.pauseVideo();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})))()}}});e["a"]=a},af2b:function(t,e,i){"use strict";i("c96a");var n=i("2b0e");e["a"]=n["default"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},c96a:function(t,e,i){"use strict";var n=i("23e7"),a=i("857a"),s=i("af03");n({target:"String",proto:!0,forced:s("small")},{small:function(){return a(this,"small","","")}})},ce7e:function(t,e,i){"use strict";var n=i("5530"),a=(i("8ce9"),i("7560"));e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},e4d3:function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["default"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},ee84:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{flat:"","min-height":"82vh",color:"transparent"}},[i("div",{staticClass:"py-1"}),i("v-card",[i("v-card-title",[t._v("Watch our videos from youtube")]),i("v-card-subtitle",[t._v("All of these videos are also available in youtube")]),i("v-card-subtitle",[t._v("You can go to youtube and watch out videos directly from there.")])],1),i("div",{staticClass:"py-1"}),0===t.youtube_medias.length?i("no-multimedia-card",{attrs:{text:"Youtube database is empty."}}):t._e(),i("multimedia-youtube",{staticClass:"mx-1",attrs:{videos:t.youtube_medias}})],1)},a=[],s=i("5530"),r=(i("159b"),i("99af"),i("2f62")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.videos,(function(e){return i("v-card",{key:e.id,staticClass:"my-2 pa-0",attrs:{"min-height":"40vh",width:"100%",outlined:""}},[i("v-card",{staticStyle:{"border-radius":"4px 4px 0 0 !important"},attrs:{height:"40vh",tile:""}},[i("youtube",{ref:"yt",refInFor:!0,attrs:{height:"100%",width:"100%","video-id":t.$youtube.getIdFromUrl(e.video_url)},on:{playing:t.playing}})],1),i("v-card-title",{staticClass:"py-2",staticStyle:{"font-size":"18px"}},[t._v(" "+t._s(e.yt_info.title)+" ")]),t.$helper.isUserLoggedIn()?i("multimedia-action",{on:{edit:function(i){return t.editVideoUrl(e)}}}):t._e()],1)})),i("v-dialog",{model:{value:t.edit,callback:function(e){t.edit=e},expression:"edit"}},[i("v-card",[i("v-card-title",{staticClass:"elevation-4"},[t._v(" Update youtube url ")]),i("div",{staticClass:"py-3"}),i("text-field",{attrs:{name:"video_url",label:"Youtube Video Url",icon:"mdi-youtube",hint:"Copy a youtube video url and paste the link here",errors:t.formErrors},model:{value:t.editedItem.video_url,callback:function(e){t.$set(t.editedItem,"video_url",e)},expression:"editedItem.video_url"}}),i("div",{staticClass:"py-3"}),i("v-divider"),i("v-card-actions",[i("v-btn",{attrs:{color:"error lighten-3",depressed:""},on:{click:function(e){t.edit=!1}}},[t._v(" Cancel ")]),i("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.updateVideoUrl()}}},[t._v(" Save ")])],1)],1)],1)],2)},c=[],l=i("1da1"),u=(i("96cf"),i("8063")),d=i("a7b3"),h={name:"MultimediaYoutube",components:{MultimediaAction:u["default"]},mixins:[d["a"]],props:{videos:{type:Array,required:!0}},data:function(){return{edit:!1,editedItem:{video_url:null},formErrors:{}}},methods:{editVideoUrl:function(t){this.edit=!0,this.editedItem.video_url=t.video_url,this.editedItem["id"]=t.id},updateVideoUrl:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$api.patch("multimedia-video-url/"+t.editedItem.id+"/",{video_url:t.editedItem.video_url});case 3:return e.next=5,t.$store.dispatch("multimedia/filter",{is_approved:!0});case 5:return t.edit=!1,e.next=8,t.openSnack("Your video is updated successfully. This might take a while to load. Please keep your calm.","success");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),400===e.t0.response.status&&(t.formErrors=e.t0.response.body);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}},v=h,f=i("2877"),m=i("6544"),p=i.n(m),b=i("8336"),g=i("b0af"),y=i("99d9"),x=i("169a"),C=i("ce7e"),O=Object(f["a"])(v,o,c,!1,null,"a407b6e2",null),S=O.exports;p()(O,{VBtn:b["a"],VCard:g["a"],VCardActions:y["a"],VCardTitle:y["d"],VDialog:x["a"],VDivider:C["a"]});var w=i("9640"),k={name:"Youtube",components:{NoMultimediaCard:w["default"],MultimediaYoutube:S},computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])({multimedias:"multimedia/list"})),{},{youtube_medias:function(){if(!this.multimedias)return[];if(!this.multimedias.results)return[];var t=[];return this.multimedias.results.forEach((function(e){t=t.concat(e["multimedia_video_urls"])})),t}})},A=k,$=Object(f["a"])(A,n,a,!1,null,null,null);e["default"]=$.exports;p()($,{VCard:g["a"],VCardSubtitle:y["b"],VCardTitle:y["d"]})},f25c:function(t,e,i){"use strict";i("9560")},fb40:function(t,e,i){t.exports=i.p+"img/empty-copy.4a45bb8c.jpg"}}]);
//# sourceMappingURL=chunk-5520383c.51c01df3.js.map