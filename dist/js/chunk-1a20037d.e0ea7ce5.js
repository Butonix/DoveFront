(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a20037d","chunk-2d214497","chunk-2d0e1fc0","chunk-2d0e6c6b","chunk-2d0e6c6b","chunk-2d0e6c6b","chunk-2d0e6c6b"],{"10d1":function(t,e,n){"use strict";var i,r=n("da84"),s=n("e2cc"),a=n("f183"),o=n("6d61"),c=n("acac"),l=n("861d"),u=n("69f3").enforce,h=n("7f9a"),d=!r.ActiveXObject&&"ActiveXObject"in r,f=Object.isExtensible,p=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},m=t.exports=o("WeakMap",p,c);if(h&&d){i=c.getConstructor(p,"WeakMap",!0),a.REQUIRED=!0;var v=m.prototype,g=v["delete"],b=v.has,y=v.get,k=v.set;s(v,{delete:function(t){if(l(t)&&!f(t)){var e=u(this);return e.frozen||(e.frozen=new i),g.call(this,t)||e.frozen["delete"](t)}return g.call(this,t)},has:function(t){if(l(t)&&!f(t)){var e=u(this);return e.frozen||(e.frozen=new i),b.call(this,t)||e.frozen.has(t)}return b.call(this,t)},get:function(t){if(l(t)&&!f(t)){var e=u(this);return e.frozen||(e.frozen=new i),b.call(this,t)?y.call(this,t):e.frozen.get(t)}return y.call(this,t)},set:function(t,e){if(l(t)&&!f(t)){var n=u(this);n.frozen||(n.frozen=new i),b.call(this,t)?k.call(this,t,e):n.frozen.set(t,e)}else k.call(this,t,e);return this}})}},1647:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{padless:"",color:t.color}},[n("v-col",{staticClass:"text-center",staticStyle:{"font-size":"12px"},attrs:{cols:"12"}},[t._v(" ©️ "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Ishworiya Marg Bhajan Mandal Sachchai Kendra Nepal")])])],1)},r=[],s={name:"SmallFooter",props:{color:{type:String,default:null}}},a=s,o=n("2877"),c=n("6544"),l=n.n(c),u=n("62ad"),h=n("553a"),d=Object(o["a"])(a,i,r,!1,null,"52653276",null);e["a"]=d.exports;l()(d,{VCol:u["a"],VFooter:h["a"]})},"1b2c":function(t,e,n){},"38cb":function(t,e,n){"use strict";var i=n("0122"),r=(n("a9e3"),n("fb6a"),n("a9ad")),s=n("7560"),a=n("3206"),o=n("80d2"),c=n("d9bd"),l=n("58df"),u=Object(l["a"])(r["a"],Object(a["a"])("form"),s["a"]);e["a"]=u.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled:function(){return this.disabled||!!this.form&&this.form.disabled},isInteractive:function(){return!this.isDisabled&&!this.isReadonly},isReadonly:function(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){Object(o["j"])(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var t=this;setTimeout((function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()}),0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var r=0;r<this.rules.length;r++){var s=this.rules[r],a="function"===typeof s?s(e):s;!1===a||"string"===typeof a?n.push(a||""):"boolean"!==typeof a&&Object(c["b"])("Rules should return a string or boolean, received '".concat(Object(i["a"])(a),"' instead"),this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}})},"486c":function(t,e,n){"use strict";n("8009")},"4d63":function(t,e,n){var i=n("83ab"),r=n("da84"),s=n("94ca"),a=n("7156"),o=n("9bf2").f,c=n("241c").f,l=n("44e7"),u=n("ad6d"),h=n("9f7f"),d=n("6eeb"),f=n("d039"),p=n("69f3").set,m=n("2626"),v=n("b622"),g=v("match"),b=r.RegExp,y=b.prototype,k=/a/g,x=/a/g,w=new b(k)!==k,C=h.UNSUPPORTED_Y,S=i&&s("RegExp",!w||C||f((function(){return x[g]=!1,b(k)!=k||b(x)==x||"/a/i"!=b(k,"i")})));if(S){var _=function(t,e){var n,i=this instanceof _,r=l(t),s=void 0===e;if(!i&&r&&t.constructor===_&&s)return t;w?r&&!s&&(t=t.source):t instanceof _&&(s&&(e=u.call(t)),t=t.source),C&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var o=a(w?new b(t,e):b(t,e),i?this:y,_);return C&&n&&p(o,{sticky:n}),o},O=function(t){t in _||o(_,t,{configurable:!0,get:function(){return b[t]},set:function(e){b[t]=e}})},j=c(b),$=0;while(j.length>$)O(j[$++]);y.constructor=_,_.prototype=y,d(r,"RegExp",_)}m("RegExp")},"4e4f":function(t,e,n){"use strict";n("88be")},"553a":function(t,e,n){"use strict";var i=n("f3f3"),r=(n("a9e3"),n("c7cd"),n("b5b6"),n("8dd9")),s=n("3a66"),a=n("d10f"),o=n("58df"),c=n("80d2");e["a"]=Object(o["a"])(r["a"],Object(s["a"])("footer",["height","inset"]),a["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(i["a"])(Object(i["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(i["a"])(Object(i["a"])({},r["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(c["g"])(t),left:Object(c["g"])(this.computedLeft),right:Object(c["g"])(this.computedRight),bottom:Object(c["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},"59a9":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{width:"100vw"}},[n("v-toolbar",{attrs:{color:"indigo lighten-4",height:"60",tile:""}},[n("v-app-bar-nav-icon",[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left-thick")])],1)],1),n("v-spacer"),t.status.loved?n("v-btn",{attrs:{icon:""},on:{click:t.unsetLove}},[n("v-icon",[t._v("mdi-heart")])],1):n("v-btn",{attrs:{icon:""},on:{click:t.love}},[n("v-icon",[t._v("mdi-heart-outline")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-comment")])],1),t.status["bookmarked"]?n("v-btn",{attrs:{icon:""},on:{click:t.revokeBookmark}},[n("v-icon",[t._v("mdi-bookmark")])],1):n("v-btn",{attrs:{icon:""},on:{click:t.bookmark}},[n("v-icon",[t._v("mdi-bookmark-outline")])],1)],1),t.article?n("v-card",{staticClass:"overflow-hidden mx-auto my-4",attrs:{loading:t.loading,"max-width":"900",color:"transparent",tile:""}},[t.coverImg?n("v-card",{attrs:{tile:"",height:"450",width:"100%"}},[t.coverImg?n("v-img",{attrs:{src:t.coverImg,height:"450",width:"100%"}}):t._e()],1):t._e(),n("div",{staticClass:"py-2"}),t.article.tags?n("v-card-subtitle",{staticClass:"pb-0"},t._l(t.article.tags.split(","),(function(e,i){return n("v-chip",{key:i,staticClass:"mr-1",attrs:{label:"",small:""}},[n("span",[t._v("#"+t._s(e))])])})),1):t._e(),n("v-card-title",{staticClass:"display-2"},[t._v(" "+t._s(t.article.title)+" ")]),n("v-card-subtitle",{staticClass:"py-1"},[n("v-chip",{staticClass:"mr-1",attrs:{small:""}},[n("v-icon",{staticClass:"pr-1",attrs:{small:""}},[t._v(" mdi-account-circle ")]),n("span",[t._v(t._s(t.article.created_by.username))])],1),n("v-chip",{staticClass:"mx-1",attrs:{small:""}},[n("v-icon",{staticClass:"pr-1",attrs:{small:""}},[t._v(" mdi-calendar-plus ")]),n("span",[t._v(t._s(t.$moment(t.article.timestamp).format("Do MMM YYYY")))])],1),n("v-chip",{staticClass:"mx-1",attrs:{small:""}},[n("v-icon",{staticClass:"pr-1",attrs:{small:""}},[t._v(" mdi-account-check ")]),n("span",[t._v(t._s(t.article.approved_by.username))])],1),n("v-chip",{staticClass:"mx-1",attrs:{small:""}},[n("v-icon",{staticClass:"pr-1",attrs:{small:""}},[t._v(" mdi-calendar-check ")]),n("span",[t._v(t._s(t.$moment(t.article.approved_at).format("Do MMM YYYY")))])],1)],1),n("div",{staticClass:"py-4"},[t._l(t.getArticleHtml,(function(e,i){return n("v-card-text",{key:i,staticClass:"py-2"},[e.includes("iframe")&&e.includes("youtube.com/embed")?[n("v-card",{attrs:{dark:""}},[n("youtube-iframe",{attrs:{height:"400","video-url":t.getIframeSrc(e)}})],1)]:e.includes("<img src=")?[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:t.ifFullWidth(e)?12:8,md:t.ifFullWidth(e)?12:8,lg:t.ifFullWidth(e)?12:8,xl:t.ifFullWidth(e)?12:8}},[n("v-card",{attrs:{dark:"",height:"350"}},[n("v-img",{attrs:{width:"100%",height:"350",src:t.getImageSrc(e),alt:t.getAltText(e)}})],1)],1),t.getAltText(e)?n("v-col",{class:t.$vuetify.breakpoint.smAndDown?"py-2":"py -2",attrs:{cols:"12",sm:12,md:t.ifFullWidthForAlt(e)?12:4,lg:t.ifFullWidthForAlt(e)?12:4,xl:t.ifFullWidthForAlt(e)?12:4}},[n("p",[t._v(" "+t._s(t.getAltText(e))+" ")])]):t._e()],1)]:n("div",{domProps:{innerHTML:t._s(e)}})],2)})),n("v-card-text",{staticClass:"d-flex justify-start align-center"},[n("v-img",{staticStyle:{"border-radius":"4px"},attrs:{src:"https://media.giphy.com/media/MViYNpI0wx69zX7j7w/giphy.gif",height:"80",dark:"",eager:""}},[n("div",{staticClass:"headline text-center align-center"},[n("v-col",{staticClass:"pt-lg-6 pt-sm-6 pt-lg-6 pt-xl-6"},[t._v(" Thank you! You've made to the end. ")])],1)])],1),n("v-card-text",[n("article-comment-detail")],1)],2)],1):t._e(),n("small-footer")],1)},r=[],s=(n("4d63"),n("ac1f"),n("25f0"),n("d3b7"),n("3ca3"),n("10d1"),n("ddb0"),n("80e0"),n("5319"),n("a4d3"),n("e01a"),n("b64b"),n("62f5")),a=n.n(s),o=(n("4ec9"),n("f20d")),c=n("0de3");function l(t){return-1!==Function.toString.call(t).indexOf("[native code]")}n("4ae1");var u=n("8151");function h(t,e,n){return h=Object(u["a"])()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var r=Function.bind.apply(t,i),s=new r;return n&&Object(c["a"])(s,n.prototype),s},h.apply(null,arguments)}function d(t){var e="function"===typeof Map?new Map:void 0;return d=function(t){if(null===t||!l(t))return t;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return h(t,arguments,Object(o["a"])(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Object(c["a"])(n,t)},d(t)}n("e1a7");var f=n("920b");function p(t,e){p=function(t,e){return new s(t,void 0,e)};var n=d(RegExp),i=RegExp.prototype,r=new WeakMap;function s(t,e,i){var s=n.call(this,t,e);return r.set(s,i||r.get(t)),s}function o(t,e){var n=r.get(e);return Object.keys(n).reduce((function(e,i){return e[i]=t[n[i]],e}),Object.create(null))}return Object(f["a"])(s,n),s.prototype.exec=function(t){var e=i.exec.call(this,t);return e&&(e.groups=o(e,this)),e},s.prototype[Symbol.replace]=function(t,e){if("string"===typeof e){var n=r.get(this);return i[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+n[e]})))}if("function"===typeof e){var s=this;return i[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!==a()(t[t.length-1])&&t.push(o(t,s)),e.apply(this,t)}))}return i[Symbol.replace].call(this,t,e)},p.apply(this,arguments)}var m=n("c964"),v=n("f3f3"),g=(n("96cf"),n("7db0"),n("affb")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:"transparent",flat:"",loading:t.loading}},[t.comments?n("v-list",{attrs:{"two-line":"",dense:""}},[0===t.comments.results.length?n("v-list-item",{staticStyle:{"border-radius":"4px"}},[t._v(" Be the first to comment! ")]):t._l(t.comments.results,(function(e){return n("v-list-item",{key:e.id},[n("v-avatar",{staticClass:"d-flex justify-content-center ma-2 elevation-4 comment-avatar",style:"border: "+t.avColor,attrs:{size:"45",tile:"",color:t.avColor}},[n("span",{staticClass:"white--text headline"},[t._v(" "+t._s(t.$helper.getCurrentUserInitials(e.writer))+" ")])]),n("v-list-item-content",{staticClass:"pl-0"},[n("v-list-item-title",[e.writer?n("code",{staticClass:"comment-writer mx-1"},[t._v(" "+t._s(e.writer.username)+" ")]):t._e(),n("code",{staticClass:"comment-created-at mx-1"},[t._v(" "+t._s(t.$moment(e.created_at).fromNow())+" ")]),n("v-icon",{attrs:{small:""}},[t._v(" mdi-reply-circle ")])],1),n("v-list-item-subtitle",{staticClass:"comment-text"},[t._v(" "+t._s(e.comment)+" ")])],1),t.$helper.ifWriterIsCurrentUser(e.writer.username)?n("v-list-item-action",[n("v-btn",{attrs:{icon:"",color:"red lighten-1"},on:{click:function(n){return t.deleteConfirmMyComment(e)}}},[n("v-icon",[t._v("mdi-delete")])],1)],1):t._e()],1)}))],2):t._e(),n("v-divider",{staticClass:"my-2"}),n("div",{staticClass:"comment-box pb-2"},[n("v-text-field",{staticClass:"comment",attrs:{solo:"","hide-details":"auto",placeholder:"Add a comment"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.postComment(e)}},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-icon",{staticClass:"send-icon-button",attrs:{color:"primary"},on:{click:t.postComment}},[t._v(" mdi-send ")])]},proxy:!0}]),model:{value:t.comment.comment,callback:function(e){t.$set(t.comment,"comment",e)},expression:"comment.comment"}})],1)],1)},y=[],k=n("7d85"),x={name:"ArticleCommentsView",mixins:[k["a"]],data:function(){return{loading:!1,comment:{comment:null,article:null},comments:null}},computed:{avColor:function(){return this.$constants.pickBackgroundColor()}},created:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.init();case 2:case"end":return e.stop()}}),e)})))()},methods:{init:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("article/fetchCommentsForId",{id:t.$route.params.id});case 3:n=e.sent,t.comments=n,t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},postComment:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.comment.article=t.$route.params.id,e.next=3,t.$store.dispatch("article/postComment",{body:t.comment});case 3:if(n=e.sent,!0!==n){e.next=10;break}return t.comment.comment="",e.next=8,t.init();case 8:e.next=17;break;case 10:if(500!==n){e.next=15;break}return e.next=13,t.openSnack("Internal server error. Please try again later");case 13:e.next=17;break;case 15:return e.next=17,t.openSnack(n.comment[0]);case 17:case"end":return e.stop()}}),e)})))()},deleteMyComment:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$store.dispatch("article/removeComment",{id:t.id});case 2:if(i=n.sent,!i){n.next=10;break}return n.next=6,e.openSnack("Your comment removed successfully.","success");case 6:return n.next=8,e.init();case 8:n.next=12;break;case 10:return n.next=12,e.openSnack("Comment remove failed. Please try again.");case 12:case"end":return n.stop()}}),n)})))()},deleteConfirmMyComment:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.$helper.ifWriterIsCurrentUser(t.writer.username)){n.next=5;break}if(n.t0=confirm("Are you sure you want to delete your comment?"),!n.t0){n.next=5;break}return n.next=5,e.deleteMyComment(t);case 5:case"end":return n.stop()}}),n)})))()}}},w=x,C=(n("b615"),n("2877")),S=n("6544"),_=n.n(S),O=n("8212"),j=n("8336"),$=n("b0af"),I=n("ce7e"),M=n("132d"),R=n("8860"),V=n("da13"),A=n("1800"),B=n("5d23"),E=n("8654"),D=Object(C["a"])(w,b,y,!1,null,"21fe7004",null),F=D.exports;_()(D,{VAvatar:O["a"],VBtn:j["a"],VCard:$["a"],VDivider:I["a"],VIcon:M["a"],VList:R["a"],VListItem:V["a"],VListItemAction:A["a"],VListItemContent:B["a"],VListItemSubtitle:B["b"],VListItemTitle:B["c"],VTextField:E["a"]});var T=n("2f62"),z=n("bbc1"),L=n("1647"),P=n("60f3"),N={name:"ArticleDetail",components:{SmallFooter:L["a"],YoutubeIframe:g["default"],ArticleCommentDetail:F},mixins:[z["a"],k["a"]],data:function(){return{loading:null,status:{loved:null,bookmarked:null,love_count:null,bookmark_count:null}}},computed:Object(v["a"])(Object(v["a"])({},Object(T["b"])({article:"article/detail"})),{},{coverImg:function(){return!!this.article&&(!!this.article["cover_image"]&&this.article["cover_image"]["image"])},getArticleHtml:function(){if(!this.article)return null;var t=P(),e=JSON.parse(this.article.description);return t.parse(e)}}),created:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.init();case 2:return e.next=4,t.initStatus();case 4:case"end":return e.stop()}}),e)})))()},methods:{ifFullWidth:function(t){return this.getAltText(t).length>800||this.getAltText(t).length<80},ifFullWidthForAlt:function(t){return this.getAltText(t).length>800||this.getAltText(t).length<80},init:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,n=t.$route.params.id,e.next=4,t.$store.dispatch("article/fetchSingle",{id:n});case 4:t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},initMyStatus:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("article/fetchMyStatus",{id:t.article.id});case 2:t.status=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getRegexMatch:function(t,e){var n,i;while(null!==(i=t.exec(e)))i.index===t.lastIndex&&t.lastIndex++,n=i.groups.find;return n},getIframeSrc:function(t){var e=p(/src="(.+)"/gm,{find:1});return this.getRegexMatch(e,t)},getImageSrc:function(t){var e=p(/src="(.+)" alt/gm,{find:1});return this.getRegexMatch(e,t)},getAltText:function(t){var e=p(/alt="(.+)"/gm,{find:1});return this.getRegexMatch(e,t)}}},Y=N,U=(n("486c"),n("4e4f"),n("5bc1")),W=n("99d9"),H=n("cc20"),q=n("62ad"),G=n("adda"),J=n("0fd9"),X=n("2fa4"),K=n("71d9"),Q=Object(C["a"])(Y,i,r,!1,null,"66676390",null);e["default"]=Q.exports;_()(Q,{VAppBarNavIcon:U["a"],VBtn:j["a"],VCard:$["a"],VCardSubtitle:W["b"],VCardText:W["c"],VCardTitle:W["d"],VChip:H["a"],VCol:q["a"],VIcon:M["a"],VImg:G["a"],VRow:J["a"],VSpacer:X["a"],VToolbar:K["a"]})},"60f3":function(t,e,n){"use strict";var i={delimiter:function(){return"<br/>"},header:function(t){var e=t.data;return"<h"+e.level+">"+e.text+"</h"+e.level+">"},paragraph:function(t){return"<p>"+t.data.text+"</p>"},list:function(t){var e=t.data,n="unordered"===e.style?"ul":"ol",i="";return e.items&&(i=e.items.map((function(t){return"<li>"+t+"</li>"})).reduce((function(t,e){return t+e}),"")),"<"+n+">"+i+"</"+n+">"},image:function(t){var e=t.data,n=e.caption?e.caption:"Image";return'<img src="'+(e.file&&e.file.url?e.file.url:e.file)+'" alt="'+n+'" />'},quote:function(t){var e=t.data;return"<blockquote>"+e.text+"</blockquote> - "+e.caption},code:function(t){return"<pre><code>"+t.data.code+"</code></pre>"},embed:function(t){var e=t.data;switch(e.service){case"vimeo":return'<iframe src="'+e.embed+'" height="'+e.height+'" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';case"youtube":return'<iframe width="'+e.width+'" height="'+e.height+'" src="'+e.embed+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';default:throw new Error('Unsupported embed service type. Supported are "youtube" and "vimeo"')}}};function r(t){return new Error('[31m The Parser function of type "'+t+'" is not defined. \n\n  Define your custom parser functions as: [34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks [0m')}var s=function(t){void 0===t&&(t={});var e=Object.assign({},i,t);return{parse:function(t){return t.blocks.map((function(t){return e[t.type]?e[t.type](t):r(t.type)}))},parseBlock:function(t){return e[t.type]?e[t.type](t):r(t.type)},parseStrict:function(t){var n=t.blocks,i=s(e).validate({blocks:n});if(i.length)throw new Error("Parser Functions missing for blocks: "+i.toString());for(var a=[],o=0;o<n.length;o++){if(!e[n[o].type])throw r(n[o].type);a.push(e[n[o].type](n[o]))}return a},validate:function(t){var n=t.blocks.map((function(t){return t.type})).filter((function(t,e,n){return n.indexOf(t)===e})),i=Object.keys(e);return n.filter((function(t){return!i.includes(t)}))}}};t.exports=s},"7d85":function(t,e,n){"use strict";var i=n("c964"),r=(n("96cf"),{methods:{openSnack:function(t){var e=arguments,n=this;return Object(i["a"])(regeneratorRuntime.mark((function i(){var r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r=e.length>1&&void 0!==e[1]?e[1]:"error",i.next=3,n.$store.dispatch("snack/setSnackState",!0);case 3:return i.next=5,n.$store.dispatch("snack/setSnackColor",r);case 5:return i.next=7,n.$store.dispatch("snack/setSnackText",t);case 7:case"end":return i.stop()}}),i)})))()}}});e["a"]=r},8009:function(t,e,n){},"80e0":function(t,e,n){var i=n("746f");i("replace")},"88be":function(t,e,n){},"8adc":function(t,e,n){},"8ff2":function(t,e,n){},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));var i=n("b0af"),r=n("80d2"),s=Object(r["i"])("v-card__actions"),a=Object(r["i"])("v-card__subtitle"),o=Object(r["i"])("v-card__text"),c=Object(r["i"])("v-card__title");i["a"]},acac:function(t,e,n){"use strict";var i=n("e2cc"),r=n("f183").getWeakData,s=n("825a"),a=n("861d"),o=n("19aa"),c=n("2266"),l=n("b727"),u=n("5135"),h=n("69f3"),d=h.set,f=h.getterFor,p=l.find,m=l.findIndex,v=0,g=function(t){return t.frozen||(t.frozen=new b)},b=function(){this.entries=[]},y=function(t,e){return p(t.entries,(function(t){return t[0]===e}))};b.prototype={get:function(t){var e=y(this,t);if(e)return e[1]},has:function(t){return!!y(this,t)},set:function(t,e){var n=y(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=m(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,l){var h=t((function(t,i){o(t,h,e),d(t,{type:e,id:v++,frozen:void 0}),void 0!=i&&c(i,t[l],{that:t,AS_ENTRIES:n})})),p=f(e),m=function(t,e,n){var i=p(t),a=r(s(e),!0);return!0===a?g(i).set(e,n):a[i.id]=n,t};return i(h.prototype,{delete:function(t){var e=p(this);if(!a(t))return!1;var n=r(t);return!0===n?g(e)["delete"](t):n&&u(n,e.id)&&delete n[e.id]},has:function(t){var e=p(this);if(!a(t))return!1;var n=r(t);return!0===n?g(e).has(t):n&&u(n,e.id)}}),i(h.prototype,n?{get:function(t){var e=p(this);if(a(t)){var n=r(t);return!0===n?g(e).get(t):n?n[e.id]:void 0}},set:function(t,e){return m(this,t,e)}}:{add:function(t){return m(this,t,!0)}}),h}}},affb:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.videoUrl?n("iframe",{attrs:{id:"youtube-video-frame",src:t.prepareEmbedUrl(t.videoUrl),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;",allowfullscreen:"",controls:"1",height:t.height,width:"100%"}}):t._e()},r=[],s={name:"YoutubeIframe",props:{videoUrl:{type:String,required:!0},height:{type:String,required:!1,default:"100%"}},methods:{getId:function(t){return this.$helper.getVideoIdFromYoutubeURL(t)},prepareEmbedUrl:function(t){return"https://www.youtube.com/embed/".concat(this.getId(t))}}},a=s,o=n("2877"),c=Object(o["a"])(a,i,r,!1,null,"07ac4174",null);e["default"]=c.exports},b5b6:function(t,e,n){},b615:function(t,e,n){"use strict";n("ed3b")},ba87:function(t,e,n){"use strict";var i=n("f3f3"),r=(n("a9e3"),n("1b2c"),n("a9ad")),s=n("7560"),a=n("58df"),o=n("80d2"),c=Object(a["a"])(s["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var n=e.children,a=e.listeners,c=e.props,l={staticClass:"v-label",class:Object(i["a"])({"v-label--active":c.value,"v-label--is-disabled":c.disabled},Object(s["b"])(e)),attrs:{for:c.for,"aria-hidden":!c.for},on:a,style:{left:Object(o["g"])(c.left),right:Object(o["g"])(c.right),position:c.absolute?"absolute":"relative"},ref:"label"};return t("label",r["a"].options.methods.setTextColor(c.focused&&c.color,l),n)}});e["a"]=c},bbc1:function(t,e,n){"use strict";var i=n("c964"),r=(n("96cf"),{methods:{initStatus:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("article/fetchMyStatus",{id:t.article.id});case 3:t.status=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},bookmark:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.$store.dispatch("article/bookmark",{id:t.article.id}),!n){e.next=8;break}return e.next=4,t.openSnack("Article bookmarked successfully.","success");case 4:return e.next=6,t.initStatus();case 6:e.next=10;break;case 8:return e.next=10,t.openSnack("Article bookmark failed. Pleas try again.");case 10:case"end":return e.stop()}}),e)})))()},revokeBookmark:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.$store.dispatch("article/revokeBookmark",{id:t.article.id}),!n){e.next=8;break}return e.next=4,t.openSnack("Article bookmark revoked successfully.","success");case 4:return e.next=6,t.initStatus();case 6:e.next=10;break;case 8:return e.next=10,t.openSnack("Article bookmark revoke failed. Pleas try again.");case 10:case"end":return e.stop()}}),e)})))()},love:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.$store.dispatch("article/love",{id:t.article.id}),!n){e.next=8;break}return e.next=4,t.openSnack("Article loved successfully.","success");case 4:return e.next=6,t.initStatus();case 6:e.next=10;break;case 8:return e.next=10,t.openSnack("Article reaction set failed. Pleas try again.");case 10:case"end":return e.stop()}}),e)})))()},unsetLove:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.$store.dispatch("article/unsetLove",{id:t.article.id}),!n){e.next=8;break}return e.next=4,t.openSnack("Article love revoked successfully.","success");case 4:return e.next=6,t.initStatus();case 6:e.next=10;break;case 8:return e.next=10,t.openSnack("Article reaction revoke failed. Pleas try again.");case 10:case"end":return e.stop()}}),e)})))()}}});e["a"]=r},c37a:function(t,e,n){"use strict";var i=n("f3f3"),r=(n("a9e3"),n("4de4"),n("d81d"),n("ac1f"),n("1276"),n("99af"),n("d191"),n("9d26")),s=n("ba87"),a=(n("8ff2"),n("a9ad")),o=n("7560"),c=n("58df"),l=n("80d2"),u=Object(c["a"])(a["a"],o["a"]).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(l["s"])(this,"default",{message:t,key:e})||[t])}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),h=u,d=n("7e2b"),f=n("38cb"),p=n("d9f7"),m=Object(c["a"])(d["a"],f["a"]),v=m.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data:function(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return Object(i["a"])({"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense},this.themeClasses)},computedId:function(){return this.id||"input-".concat(this._uid)},hasDetails:function(){return this.messagesToDisplay.length>0},hasHint:function(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return!(!this.$slots.label&&!this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isLabelActive:function(){return this.isDirty},messagesToDisplay:function(){var t=this;return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((function(e){if("string"===typeof e)return e;var n=e(t.internalValue);return"string"===typeof n?n:""})).filter((function(t){return""!==t})):[]},showDetails:function(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=this["".concat(t,"Icon")],a="click:".concat(Object(l["x"])(t)),o=!(!this.listeners$[a]&&!e),c=Object(p["a"])({attrs:{"aria-label":o?Object(l["x"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:o?{click:function(t){t.preventDefault(),t.stopPropagation(),n.$emit(a,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:void 0},i);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--".concat(Object(l["x"])(t)):void 0},[this.$createElement(r["a"],c,s)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(l["g"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(s["a"],{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){var t=this;return this.showDetails?this.$createElement(h,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:function(e){return Object(l["s"])(t,"message",e)}}}):null},genSlot:function(t,e,n){if(!n.length)return null;var i="".concat(t,"-").concat(e);return this.$createElement("div",{staticClass:"v-input__".concat(i),ref:i},n)},genPrependSlot:function(){var t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}});e["a"]=v},cc20:function(t,e,n){"use strict";var i=n("d0af"),r=n("f3f3"),s=(n("4de4"),n("8adc"),n("58df")),a=n("0789"),o=n("9d26"),c=n("a9ad"),l=n("4e82"),u=n("7560"),h=n("f2e7"),d=n("1c87"),f=n("af2b"),p=n("d9bd");e["a"]=Object(s["a"])(c["a"],f["a"],d["a"],u["a"],Object(l["a"])("chipGroup"),Object(h["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({"v-chip":!0},d["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var n=Object(i["a"])(e,2),r=n[0],s=n[1];t.$attrs.hasOwnProperty(r)&&Object(p["a"])(r,s,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a["b"],t)},genClose:function(){var t=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),i=n.tag,s=n.data;s.attrs=Object(r["a"])(Object(r["a"])({},s.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var a=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(a,s),e)}})},d191:function(t,e,n){},ed3b:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1a20037d.e0ea7ce5.js.map