(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45ee64b0"],{"169a":function(t,e,i){"use strict";var n=i("f3f3"),a=i("d0ff"),s=i("fc11"),o=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),c=i("b848"),l=i("75eb"),d=i("e707"),u=i("e4d3"),h=i("21be"),m=i("f2e7"),f=i("a293"),v=i("58df"),p=i("d9bd"),g=i("80d2"),b=Object(v["a"])(r["a"],c["a"],l["a"],d["a"],u["a"],h["a"],m["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(a["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"269a":function(t,e){t.exports=function(t,e){var i="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var n in"function"===typeof t.exports&&(i.directives=t.exports.options.directives),i.directives=i.directives||{},e)i.directives[n]=i.directives[n]||e[n]}},"2a16":function(t,e,i){"use strict";var n=i("c964"),a=(i("96cf"),{data:function(){return{editedIndex:-1,dialog:!1,model:"user"}},methods:{formTitle:function(t){return-1===this.editedIndex?"Add New ".concat(t):"Edit ".concat(t)},formIcon:function(){return-1===this.editedIndex?"mdi-plus-circle":"mdi-pencil"},openDialog:function(){this.dialog=!0},openCreateDialog:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.editedItem=t.defaultItem,e.next=3,t.$store.dispatch("".concat(t.model,"/clearFormErrors"));case 3:t.openDialog();case 4:case"end":return e.stop()}}),e)})))()},openEditDialog:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:e.editedIndex=t.editedIndex,e.editedItem=t.editedItem,e.editedItem.contact&&(e.editedItem.contact=e.editedItem.contact.substring(4)),e.openDialog();case 4:case"end":return i.stop()}}),i)})))()},closeCreateEditDialog:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))}}});e["a"]=a},"2f50":function(t,e,i){},"368e":function(t,e,i){},"3a2f":function(t,e,i){"use strict";var n=i("fc11"),a=(i("a9e3"),i("9734"),i("4ad4")),s=i("a9ad"),o=i("16b7"),r=i("b848"),c=i("75eb"),l=i("f573"),d=i("f2e7"),u=i("80d2"),h=i("d9bd"),m=i("58df");e["a"]=Object(m["a"])(s["a"],o["a"],r["a"],c["a"],l["a"],d["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||n?s=a+e.width/2-i.width/2:(this.left||this.right)&&(s=a+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=n+e.height/2-i.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(a+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(u["g"])(this.maxWidth),minWidth:Object(u["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(u["t"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=a["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===u["y"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n["a"])(t,this.contentClass,!0),Object(n["a"])(t,"menuable__content__active",this.isActive),Object(n["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},9491:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"","close-delay":"1000","open-delay":"1000",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{staticClass:"rounded-0",attrs:{color:"rgb(251 250 241)"}},[i("v-card-title",{staticClass:"grey darken-3"},[i("v-avatar",{staticClass:"mr-4 elevation-1",attrs:{color:"grey darken-2",size:"40"}},[i("v-icon",{attrs:{dark:"",size:"22"}},[t._v(" "+t._s(t.formIcon())+" ")])],1),i("span",{staticClass:"form-title"},[t._v(t._s(t.formTitle("Follower")))]),i("v-spacer"),i("v-btn",{attrs:{color:"grey darken-2",fab:"",dark:"","x-small":""},on:{click:t.closeCreateEditDialog}},[i("v-icon",[t._v("mdi-close")])],1)],1),i("v-card",{staticClass:"mx-auto",attrs:{flat:"","max-width":"800",color:"transparent"}},[i("v-card",{staticClass:"round-bottom",attrs:{color:"aliceblue"}},[i("v-row",{directives:[{name:"show",rawName:"v-show",value:-1!==t.editedIndex,expression:"editedIndex !== -1"}],staticClass:"ma-0 pa-0"},[i("v-col",{attrs:{cols:"12"}},[t.$helper.getCurrentCoverImage()?i("v-img",{attrs:{src:t.$helper.getCurrentProfileImage()}}):t._e()],1),i("v-col",{staticClass:"profile-av-row pb-0",attrs:{cols:"12"}},[i("v-avatar",{staticClass:"profile-img-avatar",attrs:{color:"blue lighten-1",size:"180"}},[i("span",{staticClass:"display-1 white--text"},[t._v(t._s(t.$helper.getUsernameInitials(t.editedItem)))])])],1),i("v-col",{attrs:{cols:"12"}},[i("v-card",{staticClass:"mx-auto text-center",attrs:{id:"short-member-detail",flat:"",tile:""}},[i("v-list",{staticClass:"pt-0"},[i("v-list-item",[i("v-list-item-content",[i("div",{staticClass:"d-flex justify-center"},[i("span",{staticClass:"follower-full-name",on:{click:function(e){return t.routeToFollowerDetailPage(t.editedItem.id)}}},[t._v(" "+t._s(t.editedItem.first_name)+" "+t._s(t.editedItem.last_name)+" ")]),t.editedItem.is_superuser?i("span",[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-icon",t._g(t._b({directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"mx-1",attrs:{color:"orange lighten-2"}},"v-icon",a,!1),n),[t._v(" mdi-account-cowboy-hat ")])]}}],null,!1,3901885608)},[i("span",[t._v("Super User")])])],1):t._e(),t.editedItem.is_staff?i("span",[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[t.editedItem.is_staff?i("v-icon",t._g(t._b({directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"mx-1",attrs:{size:"26",color:"purple lighten-1"}},"v-icon",a,!1),n),[t._v(" mdi-account-tie ")]):t._e()]}}],null,!1,4239530911)},[i("span",[t._v("Staff Member")])])],1):t._e()]),i("v-divider",{staticClass:"mb-2"}),i("p",{staticClass:"mb-0 mb-4 mt-2"},[i("v-icon",{staticClass:"small-detail-icon"},[t._v(" mdi-shape-plus ")]),i("b",[t._v("Date joined:")]),i("span",{staticClass:"px-1"},[t._v(t._s(t.$moment(t.editedItem.date_joined).fromNow()))])],1),i("p",{staticClass:"mb-0"},[i("v-icon",{staticClass:"small-detail-icon"},[t._v(" mdi-history ")]),i("b",[t._v("Last logged in:")]),t.editedItem.last_login?i("span",{staticClass:"px-1"},[t._v(t._s(t.$moment(t.editedItem.last_login).fromNow()))]):i("span",{staticClass:"px-1"},[t._v("Haven't logged in.")])],1)],1)],1)],1)],1)],1)],1)],1),i("v-card-text",[i("v-container",[i("v-row",{staticClass:"ma-0 pa-0"},[i("admin-form-group-title",{attrs:{icon:"mdi-account-circle",text:"Personal Information"}}),i("text-field",{attrs:{id:"first-name",label:"First Name",name:"first_name",icon:"mdi-form-textbox",errors:t.formErrors},model:{value:t.editedItem.first_name,callback:function(e){t.$set(t.editedItem,"first_name",e)},expression:"editedItem.first_name"}}),i("text-field",{attrs:{id:"last-name",label:"Last Name",name:"last_name",icon:"mdi-form-textbox",errors:t.formErrors},model:{value:t.editedItem.last_name,callback:function(e){t.$set(t.editedItem,"last_name",e)},expression:"editedItem.last_name"}}),i("text-field",{attrs:{id:"username",label:"Username",name:"username",icon:"mdi-card-account-details-outline",errors:t.formErrors},model:{value:t.editedItem.username,callback:function(e){t.$set(t.editedItem,"username",e)},expression:"editedItem.username"}}),i("text-field",{attrs:{id:"email",type:"email",label:"Email",name:"email",icon:"mdi-at",errors:t.formErrors},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}}),i("admin-form-group-title",{attrs:{icon:"mdi-shield-key",text:"Permission Information"}}),i("v-col",{attrs:{cols:"12"}},[i("v-card-actions",{staticClass:"pa-0"},[i("v-spacer"),i("v-btn",{staticClass:"red--text",attrs:{color:"red lighten-5",depressed:""},on:{click:t.closeCreateEditDialog}},[t._v(" Cancel ")]),i("v-btn",{staticClass:"blue--text",attrs:{color:"blue lighten-5",depressed:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1)],1)],1)],1)],1)],1)},a=[],s=i("c964"),o=i("f3f3"),r=(i("96cf"),i("a18c")),c=i("2f62"),l=i("2a16"),d=i("7d85"),u={name:"FollowerFormDialog",mixins:[l["a"],d["a"]],emits:["reload"],data:function(){return{model:"user",userData:null,profileData:null,editedItem:{id:"",email:"",first_name:"",last_name:"",username:"",is_superuser:null,is_staff:null},defaultItem:{}}},computed:Object(o["a"])({},Object(c["b"])({formErrors:"user/formErrors"})),created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$bus.on("open-follower-form-dialog-add-item",t.openCreateDialog),t.$bus.on("open-follower-form-dialog-edit-item",t.openEditDialog);case 2:case"end":return e.stop()}}),e)})))()},beforeUnmount:function(){this.$bus.off("open-follower-form-dialog-add-item"),this.$bus.off("open-follower-form-dialog-edit-item")},methods:{updateFollower:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("user/update",{id:t.editedItem.id,body:t.userData});case 2:if(i=e.sent,!i){e.next=9;break}return e.next=6,t.openSnack("Follower updated successfully.","success");case 6:t.$emit("reload"),e.next=11;break;case 9:return e.next=11,t.openSnack("Follower update failed.");case 11:case"end":return e.stop()}}),e)})))()},createFollower:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("user/create",{body:t.userData});case 2:if(i=e.sent,!i){e.next=10;break}return e.next=6,t.openSnack("Follower created successfully.","success");case 6:t.$bus.emit("reload"),t.closeCreateEditDialog(),e.next=12;break;case 10:return e.next=12,t.openSnack("Follower create failed.");case 12:case"end":return e.stop()}}),e)})))()},save:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.userData={first_name:t.editedItem.first_name,last_name:t.editedItem.last_name,email:t.editedItem.email,username:t.editedItem.username,is_staff:t.editedItem.is_staff,password:"Cartoon-Duck-14-Coffee-Glvs"},!(t.editedIndex>-1)){e.next=6;break}return e.next=4,t.updateFollower();case 4:e.next=8;break;case 6:return e.next=8,t.createFollower();case 8:case"end":return e.stop()}}),e)})))()},routeToFollowerDetailPage:function(t){r["a"].push({name:"FOLLOWER ADMINISTRATION",params:{id:t}})}}},h=u,m=(i("b38d"),i("2877")),f=i("6544"),v=i.n(f),p=i("8212"),g=i("8336"),b=i("b0af"),x=i("99d9"),w=i("62ad"),C=i("a523"),I=i("169a"),_=i("ce7e"),y=i("132d"),k=i("adda"),O=i("8860"),A=i("da13"),$=i("5d23"),D=i("0fd9"),j=i("2fa4"),T=i("3a2f"),E=i("269a"),S=i.n(E),F=i("5607"),B=Object(m["a"])(h,n,a,!1,null,"655ae016",null);e["default"]=B.exports;v()(B,{VAvatar:p["a"],VBtn:g["a"],VCard:b["a"],VCardActions:x["a"],VCardText:x["c"],VCardTitle:x["d"],VCol:w["a"],VContainer:C["a"],VDialog:I["a"],VDivider:_["a"],VIcon:y["a"],VImg:k["a"],VList:O["a"],VListItem:A["a"],VListItemContent:$["a"],VRow:D["a"],VSpacer:j["a"],VTooltip:T["a"]}),S()(B,{Ripple:F["a"]})},9734:function(t,e,i){},b38d:function(t,e,i){"use strict";i("2f50")}}]);
//# sourceMappingURL=chunk-45ee64b0.39deb95b.js.map