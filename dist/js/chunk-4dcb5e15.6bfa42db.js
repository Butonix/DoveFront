(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dcb5e15","chunk-f4f5b72e"],{"22da":function(t,e,i){"use strict";var s=i("490a");e["a"]=s["a"]},"29fb":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ads-container"},[i("v-card",{attrs:{color:"teal",dark:"",rounded:"xl"}},[i("v-card-title",[t._v(" Ads One"),i("v-icon",{staticClass:"pl-3",attrs:{color:"aliceblue"}},[t._v(" mdi-cash-usd ")]),i("v-spacer"),i("v-icon",[t._v("mdi-adobe")])],1),i("v-card-subtitle",[t._v("First Advertisement")]),i("v-card-text",[t._v("This is a first advertisement.")]),i("v-card-actions",[i("v-btn",{attrs:{depressed:"",color:"teal darken-3",rounded:""}},[t._v(" See More ")])],1)],1),i("v-card",{staticClass:"mt-3",attrs:{color:"orange darken-4",dark:"",rounded:"xl"}},[i("v-card-title",[t._v(" Ads Two"),i("v-icon",{staticClass:"pl-3",attrs:{color:"aliceblue"}},[t._v(" mdi-cash-usd ")]),i("v-spacer"),i("v-icon",[t._v("mdi-bird")])],1),i("v-card-subtitle",[t._v("Second Advertisement")]),i("v-card-text",[t._v("This is a second advertisement.")]),i("v-card-actions",[i("v-btn",{attrs:{depressed:"",color:"orange darken-3",rounded:""}},[t._v(" See More ")])],1)],1)],1)},n=[],a={name:"HomeAdsColumn"},r=a,o=i("2877"),c=i("6544"),l=i.n(c),u=i("8336"),d=i("b0af"),h=i("99d9"),v=i("132d"),b=i("2fa4"),f=Object(o["a"])(r,s,n,!1,null,null,null);e["default"]=f.exports;l()(f,{VBtn:u["a"],VCard:d["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VIcon:v["a"],VSpacer:b["a"]})},"2fa4":function(t,e,i){"use strict";i("20f6");var s=i("80d2");e["a"]=Object(s["i"])("spacer","div","v-spacer")},"490a":function(t,e,i){"use strict";i("a9e3"),i("99af"),i("8d4f");var s=i("90a2"),n=i("a9ad"),a=i("80d2");e["a"]=n["a"].extend({name:"v-progress-circular",directives:{intersect:s["a"]},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(a["g"])(this.calculatedSize),width:Object(a["g"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,i){this.isVisible=i}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},8336:function(t,e,i){"use strict";var s=i("53ca"),n=i("3835"),a=i("5530"),r=(i("c7cd"),i("a9e3"),i("caad"),i("86cc"),i("10d2")),o=i("22da"),c=i("4e82"),l=i("f2e7"),u=i("c995"),d=i("fe6c"),h=i("1c87"),v=i("af2b"),b=i("58df"),f=i("d9bd"),p=Object(b["a"])(r["a"],h["a"],d["a"],v["a"],Object(c["a"])("btnToggle"),Object(l["b"])("inputValue"));e["a"]=p.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({"v-btn":!0},h["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return u["a"].options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(a["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(n["a"])(e,2),s=i[0],a=i[1];t.$attrs.hasOwnProperty(s)&&Object(f["a"])(s,a,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(o["a"],{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),n=i.tag,a=i.data,r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(a.attrs.type=this.type,a.attrs.disabled=this.disabled),a.attrs.value=["string","number"].includes(Object(s["a"])(this.value))?this.value:JSON.stringify(this.value),t(n,this.disabled?a:r(this.color,a),e)}})},"86cc":function(t,e,i){},"8d4f":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return c}));var s=i("b0af"),n=i("80d2"),a=Object(n["i"])("v-card__actions"),r=Object(n["i"])("v-card__subtitle"),o=Object(n["i"])("v-card__text"),c=Object(n["i"])("v-card__title");s["a"]}}]);
//# sourceMappingURL=chunk-4dcb5e15.6bfa42db.js.map