(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dd38d64","chunk-2d0e6c6b","chunk-2d0e6c6b","chunk-2d0e6c6b","chunk-2d0e6c6b"],{"0bff":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("auth-component",{attrs:{height:"35vh","top-image":t.resetPwPage.image,"page-icon":t.resetPwPage.pageIcon,title:t.resetPwPage.title,subtitle:t.resetPwPage.subtitle,"menu-title":"Not a follower yet","menu-items":t.menuItems},scopedSlots:t._u([{key:"form",fn:function(){return[r("v-form",{staticClass:"reset-password-form",on:{submit:function(e){return e.preventDefault(),t.requestReset()}}},[r("v-row",{staticClass:"ma-0 pa-0 px-6 px-sm-16 px-md-16 px-lg-16 px-xs-16",attrs:{justify:"center",align:"center"}},[r("v-col",{staticClass:"py-8",attrs:{cols:"12",lg:"8",md:"7",sm:"8"}},[r("v-text-field",{attrs:{id:"username",dense:"",outlined:"","hide-details":"",label:"Username/Email","prepend-inner-icon":"mdi-account-circle","background-color":"white"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1)],1),r("v-card-actions",{staticClass:"justify-center my-0 pt-0 pb-3"},[r("v-btn",{staticClass:"my-0",attrs:{color:"primary"},on:{click:function(e){return t.requestReset()}}},[t._v(" Forget Password ")])],1),r("v-divider",{staticClass:"mx-4"}),r("v-card-text",[r("div",{attrs:{id:"login-terms"}},[t._v(" By clicking "),r("code",[t._v("Forget Password")]),t._v(", you agree to our "),r("code",[t._v("Terms")]),t._v(", "),r("code",[t._v("Data Policy")]),t._v(" and "),r("code",[t._v("Cookies Policy")]),t._v(". You may receive "),r("i",[t._v("Email Notifications")]),t._v(" from us and can opt out any time. ")])])],1),r("v-overlay",{attrs:{value:t.overlay}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)]},proxy:!0}])})},n=[],a=r("c964"),s=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("ac1f"),r("5319"),{name:"ResetPasswordComponent",components:{AuthComponent:function(){return Promise.all([r.e("chunk-253ad2cf"),r.e("chunk-56b16c5a")]).then(r.bind(null,"6f14"))}},data:function(){return{overlay:!1,resetPwPage:{image:r("cc95"),pageIcon:"mdi-lock-reset",title:"Reset your password",subtitle:"Provide <b>username / email</b> to reset your password. <br/> Reset password link will be sent to your email address."},menuItems:[{icon:"mdi-lock-question",title:"Login",to:"/auth/login"},{icon:"mdi-account-plus",title:"Become a follower",to:"/auth/register"}],user:{username:""}}},methods:{requestReset:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.overlay=!0,e.next=4,t.$router.replace("login");case 4:return e.prev=4,t.overlay=!1,e.finish(4);case 7:case"end":return e.stop()}}),e,null,[[0,,4,7]])})))()}}}),o=s,u=r("2877"),c=r("6544"),d=r.n(c),l=r("8336"),f=r("99d9"),h=r("62ad"),v=r("ce7e"),m=r("4bd4"),p=r("a797"),b=r("490a"),g=r("0fd9"),w=r("8654"),_=Object(u["a"])(o,i,n,!1,null,null,null);e["default"]=_.exports;d()(_,{VBtn:l["a"],VCardActions:f["a"],VCardText:f["c"],VCol:h["a"],VDivider:v["a"],VForm:m["a"],VOverlay:p["a"],VProgressCircular:b["a"],VRow:g["a"],VTextField:w["a"]})},"4bd4":function(t,e,r){"use strict";var i=r("f3f3"),n=(r("caad"),r("2532"),r("07ac"),r("4de4"),r("159b"),r("7db0"),r("58df")),a=r("7e2b"),s=r("3206");e["a"]=Object(n["a"])(a["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=r(t)))})):i.valid=r(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"8ce9":function(t,e,r){},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return u}));var i=r("b0af"),n=r("80d2"),a=Object(n["i"])("v-card__actions"),s=Object(n["i"])("v-card__subtitle"),o=Object(n["i"])("v-card__text"),u=Object(n["i"])("v-card__title");i["a"]},cc95:function(t,e,r){t.exports=r.p+"img/forget_password.84ebc6f5.png"},ce7e:function(t,e,r){"use strict";var i=r("f3f3"),n=(r("8ce9"),r("7560"));e["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(i["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(i["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-2dd38d64.8768ad11.js.map