(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c76d2e66","chunk-2d0e6c6b","chunk-2d0e6c6b","chunk-2d0e6c6b","chunk-2d0e6c6b"],{1377:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"peek-services-wrapper"},[a("v-card",{staticClass:"mx-auto",attrs:{id:"peek-services-card",loading:t.loading,flat:"",outlined:"","max-width":"1200",color:"transparent"}},[a("v-card-title",{staticClass:"overline text-uppercase pt-0"},[t._v(" Our Services ")]),a("v-divider"),a("p",{staticClass:"pb-0 quote"},[t._v(' "The essence of all religions is one. Only their approaches are different." ')]),a("p",{staticClass:"text-center quoter"},[t._v(" - Mahatma Gandhi ")]),t.services?a("v-row",{staticClass:"text-center ma-0 pa-0",attrs:{align:"center"}},t._l(t.services,(function(e,r){return a("v-col",{key:r,attrs:{id:e.id,cols:"12",xl:"4",lg:"4",md:"4",sm:"4"}},[a("v-card",{staticClass:"pa-2 service-card d-flex justify-center align-start",attrs:{"min-height":r%2===0?700:680}},[a("div",[a("v-avatar",{staticClass:"rounded-circle service-img",attrs:{color:"grey",size:"200"}},[e.images.length?a("v-img",{attrs:{src:t.$helper.replaceBackendHost(e.images[0].image)}}):t._e()],1),a("p",{staticClass:"peek-title"},[t._v(" "+t._s(e.title)+" ")]),a("v-card",{staticClass:"ma-2 mx-auto",attrs:{flat:"",outlined:"","max-width":"450"}},[a("v-card-text",[t._v(t._s(t.getPeekDescription(e.description)))])],1)],1)])],1)})),1):t._e()],1)],1)},i=[],s=a("1da1"),n=a("5530"),c=(a("d3b7"),a("25f0"),a("96cf"),a("2f62")),o={name:"PeekServicesBox",data:function(){return{loading:null}},computed:Object(n["a"])({},Object(c["b"])({services:"utilities/serviceList"})),created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.init();case 2:case"end":return e.stop()}}),e)})))()},methods:{init:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("utilities/fetchServices");case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},getPeekDescription:function(t){return this.$vuetify.breakpoint.width>400?t:t.toString().substr(0,100)+"<span>...</span><br/><a href='#' class='see-more'>See More</a>"}}},d=o,l=(a("54d0"),a("2877")),u=a("6544"),v=a.n(u),h=a("8212"),f=a("b0af"),p=a("99d9"),b=a("62ad"),g=a("ce7e"),m=a("adda"),x=a("0fd9"),_=Object(l["a"])(d,r,i,!1,null,"08979a76",null);e["default"]=_.exports;v()(_,{VAvatar:h["a"],VCard:f["a"],VCardText:p["c"],VCardTitle:p["d"],VCol:b["a"],VDivider:g["a"],VImg:m["a"],VRow:x["a"]})},3408:function(t,e,a){},"4dce":function(t,e,a){},"54d0":function(t,e,a){"use strict";a("4dce")},8212:function(t,e,a){"use strict";var r=a("5530"),i=(a("a9e3"),a("3408"),a("a9ad")),s=a("24b2"),n=a("a236"),c=a("80d2"),o=a("58df");e["a"]=Object(o["a"])(i["a"],s["a"],n["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(r["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(r["a"])({height:Object(c["g"])(this.size),minWidth:Object(c["g"])(this.size),width:Object(c["g"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},"8ce9":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return c})),a.d(e,"d",(function(){return o}));var r=a("b0af"),i=a("80d2"),s=Object(i["i"])("v-card__actions"),n=Object(i["i"])("v-card__subtitle"),c=Object(i["i"])("v-card__text"),o=Object(i["i"])("v-card__title");r["a"]},ce7e:function(t,e,a){"use strict";var r=a("5530"),i=(a("8ce9"),a("7560"));e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(r["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(r["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-c76d2e66.14a0e019.js.map