(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d18a21e0"],{"81ab":function(e,t,a){"use strict";var i=a("c964"),n=(a("96cf"),a("ac1f"),a("5319"),{methods:{getCapitalizedModelName:function(){return this.mixinData["modelName"].replace(/\w\S*/g,(function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))}))},toggleApproval:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var i,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.mixinData["toggleApprovalAction"]){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,t.$store.dispatch(t.mixinData["toggleApprovalAction"],{id:e.id});case 4:if(i=a.sent,!i){a.next=13;break}return n=t.mixinData["modelName"].replace(/\w\S*/g,(function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))})),a.next=9,t.openSnack(n+" approval toggled.","success");case 9:return a.next=11,t.$bus.emit("reload");case 11:a.next=15;break;case 13:return a.next=15,t.openSnack(t.mixinData["modelName"]+"  approval toggle failed. Try again.");case 15:case"end":return a.stop()}}),a)})))()},approve:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var i,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i="".concat(t.mixinData["modelName"],"/approve"),a.next=3,t.$store.dispatch(i,{id:e.id});case 3:if(n=a.sent,!n){a.next=11;break}return a.next=7,t.openSnack("".concat(t.getCapitalizedModelName()," approved"),"success");case 7:return a.next=9,t.$bus.emit("reload");case 9:a.next=13;break;case 11:return a.next=13,t.openSnack("".concat(t.getCapitalizedModelName()," approve failed. Try again."),"success");case 13:case"end":return a.stop()}}),a)})))()},revokeApprove:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var i,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i="".concat(t.mixinData["modelName"],"/disapprove"),a.next=3,t.$store.dispatch(i,{id:e.id});case 3:if(n=a.sent,!n){a.next=11;break}return a.next=7,t.openSnack("".concat(t.getCapitalizedModelName()," approve revoked"),"success");case 7:return a.next=9,t.$bus.emit("reload");case 9:a.next=13;break;case 11:return a.next=13,t.openSnack("".concat(t.getCapitalizedModelName()," approve revoke failed. Try again."),"success");case 13:case"end":return a.stop()}}),a)})))()}}});t["a"]=n},"9b0c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("div",{staticClass:"py-6"}),a("v-data-table",{staticClass:"elevation-1 mx-4",attrs:{options:e.options,headers:e.headers,items:e.items.results,"server-items-length":e.getTotalPaginationData,"items-per-page":e.getItemsPerPageCount,loading:e.loading,"loading-text":"Loading multimedias...","footer-props":{showFirstLastPage:!0,disableItemsPerPage:!0,itemsPerPageOptions:[1,5,10,50],itemsPerPageText:"Rows per page:",pageText:e.options.page+"-"+e.getTotalPaginationData+" of "+e.getTotalPaginationData}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"grey lighten-2"}},[a("v-app-bar-nav-icon",[a("v-avatar",{staticClass:"table-avatar elevation-4",attrs:{size:"30"}},[a("v-icon",{attrs:{color:"white",size:"20"}},[e._v(" mdi-video ")])],1)],1),a("v-toolbar-title",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.smAndUp,expression:"$vuetify.breakpoint.smAndUp"}],staticClass:"table-title pl-1"},[e._v(" Sachchai Nepal Multimedias ")]),a("v-spacer"),a("v-text-field",{staticClass:"mx-2",attrs:{solo:"",label:"Search...",dense:"","hide-details":"","prepend-inner-icon":"mdi-magnify",color:"primary"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.approval_status",fn:function(t){var i=t.item;return[a("v-switch",{attrs:{color:"grey darken-2",disabled:""},model:{value:i.is_approved,callback:function(t){e.$set(i,"is_approved",t)},expression:"item.is_approved"}})]}},{key:"item.timestamp",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.$moment(a.timestamp).fromNow())+" ")]}},{key:"item.approver",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.approved_by?a.approved_by.username:"-")+" ")]}},{key:"item.actions",fn:function(t){var i=t.item;return[i.is_approved?e._e():a("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"green"},on:{click:function(t){return e.approve(i)}}},[e._v(" mdi-check ")]),i.is_approved?a("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"red"},on:{click:function(t){return e.revokeApprove(i)}}},[e._v(" mdi-close ")]):e._e(),a("v-icon",{attrs:{small:"",color:"red"},on:{click:function(t){return e.openAdminDeleteItemDialog(i.id,i.title)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}])}),a("admin-delete-item-dialog",{attrs:{"model-name":"multimedia","delete-action":"multimedia/delete"}}),a("div",{staticClass:"py-6"})],1)},n=[],r=a("c964"),s=a("f3f3"),o=(a("96cf"),a("2f62")),l=a("7400"),c=a("81ab"),u=a("b9ae"),p=(a("ce45"),{name:"MultimediaView",mixins:[u["a"],l["a"],c["a"]],data:function(){return{headers:[{text:"ACTIONS",value:"actions",sortable:!1},{text:"ID",value:"id"},{text:"TITLE",value:"title"},{text:"WRITER",value:"uploaded_by.username"},{text:"STATUS",value:"approval_status"},{text:"APPROVER",value:"approver"},{text:"TIMESTAMP",value:"timestamp"}],mixinData:{modelName:"multimedia"}}},computed:Object(s["a"])({},Object(o["b"])({multimedias:"multimedia/list"})),created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.initialize();case 2:case"end":return t.stop()}}),t)})))()},methods:{initialize:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.loading=!0,e||(e=1),a.next=4,t.$store.dispatch("multimedia/filter",{page:e});case 4:t.items=t.multimedias,t.totalItems=t.multimedias.count,t.loading=!1;case 7:case"end":return a.stop()}}),a)})))()}}}),d=p,h=a("2877"),m=a("6544"),v=a.n(m),f=a("5bc1"),g=a("8212"),b=a("8336"),x=a("b0af"),w=a("8fea"),k=a("132d"),y=a("2fa4"),C=a("b73d"),S=a("8654"),V=a("71d9"),_=a("2a7f"),A=Object(h["a"])(d,i,n,!1,null,"6c62c3fe",null);t["default"]=A.exports;v()(A,{VAppBarNavIcon:f["a"],VAvatar:g["a"],VBtn:b["a"],VCard:x["a"],VDataTable:w["a"],VIcon:k["a"],VSpacer:y["a"],VSwitch:C["a"],VTextField:S["a"],VToolbar:V["a"],VToolbarTitle:_["b"]})},"9d01":function(e,t,a){},b73d:function(e,t,a){"use strict";var i=a("f3f3"),n=(a("0481"),a("ec29"),a("9d01"),a("fe09")),r=a("c37a"),s=a("c3f0"),o=a("0789"),l=a("490a"),c=a("80d2");t["a"]=n["a"].extend({name:"v-switch",directives:{Touch:s["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(o["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(l["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===c["y"].left&&this.isActive||e.keyCode===c["y"].right&&!this.isActive)&&this.onChange()}}})},ec29:function(e,t,a){},fe09:function(e,t,a){"use strict";a("d3b7"),a("25f0"),a("4de4");var i=a("c37a"),n=a("5607"),r=a("2b0e"),s=r["default"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),o=a("8547"),l=a("58df");function c(e){e.preventDefault()}t["a"]=Object(l["a"])(i["a"],s,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return e.valueComparator(a,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=i["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:c},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var i=a.length;a=a.filter((function(a){return!e.valueComparator(a,t)})),a.length===i&&a.push(t)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(a,t)?null:t:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}})}}]);
//# sourceMappingURL=chunk-d18a21e0.a9bad0c2.js.map