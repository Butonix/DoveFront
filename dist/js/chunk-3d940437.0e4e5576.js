(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d940437","chunk-2d0ddbb5","chunk-2d0e6c6b","chunk-2d0e6c6b","chunk-2d0e6c6b","chunk-2d0e6c6b"],{"10d1":function(t,e,r){"use strict";var n,i=r("da84"),a=r("e2cc"),c=r("f183"),o=r("6d61"),s=r("acac"),l=r("861d"),u=r("69f3").enforce,d=r("7f9a"),f=!i.ActiveXObject&&"ActiveXObject"in i,p=Object.isExtensible,h=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},m=t.exports=o("WeakMap",h,s);if(d&&f){n=s.getConstructor(h,"WeakMap",!0),c.REQUIRED=!0;var v=m.prototype,b=v["delete"],g=v.has,y=v.get,x=v.set;a(v,{delete:function(t){if(l(t)&&!p(t)){var e=u(this);return e.frozen||(e.frozen=new n),b.call(this,t)||e.frozen["delete"](t)}return b.call(this,t)},has:function(t){if(l(t)&&!p(t)){var e=u(this);return e.frozen||(e.frozen=new n),g.call(this,t)||e.frozen.has(t)}return g.call(this,t)},get:function(t){if(l(t)&&!p(t)){var e=u(this);return e.frozen||(e.frozen=new n),g.call(this,t)?y.call(this,t):e.frozen.get(t)}return y.call(this,t)},set:function(t,e){if(l(t)&&!p(t)){var r=u(this);r.frozen||(r.frozen=new n),g.call(this,t)?x.call(this,t,e):r.frozen.set(t,e)}else x.call(this,t,e);return this}})}},"1ada":function(t,e,r){"use strict";r("4958")},"2e8a":function(t,e,r){"use strict";r("7c0b")},4958:function(t,e,r){},"4d63":function(t,e,r){var n=r("83ab"),i=r("da84"),a=r("94ca"),c=r("7156"),o=r("9bf2").f,s=r("241c").f,l=r("44e7"),u=r("ad6d"),d=r("9f7f"),f=r("6eeb"),p=r("d039"),h=r("69f3").set,m=r("2626"),v=r("b622"),b=v("match"),g=i.RegExp,y=g.prototype,x=/a/g,k=/a/g,w=new g(x)!==x,C=d.UNSUPPORTED_Y,_=n&&a("RegExp",!w||C||p((function(){return k[b]=!1,g(x)!=x||g(k)==k||"/a/i"!=g(x,"i")})));if(_){var O=function(t,e){var r,n=this instanceof O,i=l(t),a=void 0===e;if(!n&&i&&t.constructor===O&&a)return t;w?i&&!a&&(t=t.source):t instanceof O&&(a&&(e=u.call(t)),t=t.source),C&&(r=!!e&&e.indexOf("y")>-1,r&&(e=e.replace(/y/g,"")));var o=c(w?new g(t,e):g(t,e),n?this:y,O);return C&&r&&h(o,{sticky:r}),o},j=function(t){t in O||o(O,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},I=s(g),$=0;while(I.length>$)j(I[$++]);y.constructor=O,O.prototype=y,f(i,"RegExp",O)}m("RegExp")},6057:function(t,e,r){},"60f3":function(t,e,r){"use strict";var n={delimiter:function(){return"<br/>"},header:function(t){var e=t.data;return"<h"+e.level+">"+e.text+"</h"+e.level+">"},paragraph:function(t){return"<p>"+t.data.text+"</p>"},list:function(t){var e=t.data,r="unordered"===e.style?"ul":"ol",n="";return e.items&&(n=e.items.map((function(t){return"<li>"+t+"</li>"})).reduce((function(t,e){return t+e}),"")),"<"+r+">"+n+"</"+r+">"},image:function(t){var e=t.data,r=e.caption?e.caption:"Image";return'<img src="'+(e.file&&e.file.url?e.file.url:e.file)+'" alt="'+r+'" />'},quote:function(t){var e=t.data;return"<blockquote>"+e.text+"</blockquote> - "+e.caption},code:function(t){return"<pre><code>"+t.data.code+"</code></pre>"},embed:function(t){var e=t.data;switch(e.service){case"vimeo":return'<iframe src="'+e.embed+'" height="'+e.height+'" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';case"youtube":return'<iframe width="'+e.width+'" height="'+e.height+'" src="'+e.embed+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';default:throw new Error('Unsupported embed service type. Supported are "youtube" and "vimeo"')}}};function i(t){return new Error('[31m The Parser function of type "'+t+'" is not defined. \n\n  Define your custom parser functions as: [34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks [0m')}var a=function(t){void 0===t&&(t={});var e=Object.assign({},n,t);return{parse:function(t){return t.blocks.map((function(t){return e[t.type]?e[t.type](t):i(t.type)}))},parseBlock:function(t){return e[t.type]?e[t.type](t):i(t.type)},parseStrict:function(t){var r=t.blocks,n=a(e).validate({blocks:r});if(n.length)throw new Error("Parser Functions missing for blocks: "+n.toString());for(var c=[],o=0;o<r.length;o++){if(!e[r[o].type])throw i(r[o].type);c.push(e[r[o].type](r[o]))}return c},validate:function(t){var r=t.blocks.map((function(t){return t.type})).filter((function(t,e,r){return r.indexOf(t)===e})),n=Object.keys(e);return r.filter((function(t){return!n.includes(t)}))}}};t.exports=a},"7c0b":function(t,e,r){},"80e0":function(t,e,r){var n=r("746f");n("replace")},8348:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.videoUrl?r("iframe",{attrs:{id:"youtube-video-frame",src:t.prepareEmbedUrl(t.videoUrl),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;",allowfullscreen:"",controls:"1",height:t.height,width:"100%"}}):t._e()},i=[],a={name:"YoutubeIframe",props:{videoUrl:{type:String,required:!0},height:{type:String,required:!1,default:"100%"}},methods:{getId:function(t){return this.$helper.getVideoIdFromYoutubeURL(t)},prepareEmbedUrl:function(t){return"https://www.youtube.com/embed/".concat(this.getId(t))}}},c=a,o=r("2877"),s=Object(o["a"])(c,n,i,!1,null,"6e1c361a",null);e["default"]=s.exports},"8adc":function(t,e,r){},"8ce9":function(t,e,r){},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return s}));var n=r("b0af"),i=r("80d2"),a=Object(i["i"])("v-card__actions"),c=Object(i["i"])("v-card__subtitle"),o=Object(i["i"])("v-card__text"),s=Object(i["i"])("v-card__title");n["a"]},acac:function(t,e,r){"use strict";var n=r("e2cc"),i=r("f183").getWeakData,a=r("825a"),c=r("861d"),o=r("19aa"),s=r("2266"),l=r("b727"),u=r("5135"),d=r("69f3"),f=d.set,p=d.getterFor,h=l.find,m=l.findIndex,v=0,b=function(t){return t.frozen||(t.frozen=new g)},g=function(){this.entries=[]},y=function(t,e){return h(t.entries,(function(t){return t[0]===e}))};g.prototype={get:function(t){var e=y(this,t);if(e)return e[1]},has:function(t){return!!y(this,t)},set:function(t,e){var r=y(this,t);r?r[1]=e:this.entries.push([t,e])},delete:function(t){var e=m(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,r,l){var d=t((function(t,n){o(t,d,e),f(t,{type:e,id:v++,frozen:void 0}),void 0!=n&&s(n,t[l],{that:t,AS_ENTRIES:r})})),h=p(e),m=function(t,e,r){var n=h(t),c=i(a(e),!0);return!0===c?b(n).set(e,r):c[n.id]=r,t};return n(d.prototype,{delete:function(t){var e=h(this);if(!c(t))return!1;var r=i(t);return!0===r?b(e)["delete"](t):r&&u(r,e.id)&&delete r[e.id]},has:function(t){var e=h(this);if(!c(t))return!1;var r=i(t);return!0===r?b(e).has(t):r&&u(r,e.id)}}),n(d.prototype,r?{get:function(t){var e=h(this);if(c(t)){var r=i(t);return!0===r?b(e).get(t):r?r[e.id]:void 0}},set:function(t,e){return m(this,t,e)}}:{add:function(t){return m(this,t,!0)}}),d}}},cc20:function(t,e,r){"use strict";var n=r("d0af"),i=r("f3f3"),a=(r("4de4"),r("8adc"),r("58df")),c=r("0789"),o=r("9d26"),s=r("a9ad"),l=r("4e82"),u=r("7560"),d=r("f2e7"),f=r("1c87"),p=r("af2b"),h=r("d9bd");e["a"]=Object(a["a"])(s["a"],p["a"],f["a"],u["a"],Object(l["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({"v-chip":!0},f["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(f["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var r=Object(n["a"])(e,2),i=r[0],a=r[1];t.$attrs.hasOwnProperty(i)&&Object(h["a"])(i,a,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(c["b"],t)},genClose:function(){var t=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),n=r.tag,a=r.data;a.attrs=Object(i["a"])(Object(i["a"])({},a.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex}),a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);var c=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(c,a),e)}})},ce7e:function(t,e,r){"use strict";var n=r("f3f3"),i=(r("8ce9"),r("7560"));e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},dcfd:function(t,e,r){"use strict";r("6057")},fc1e:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.article?r("v-card",{staticClass:"overflow-hidden mx-auto my-4",attrs:{loading:t.loading,"max-width":"900",color:"transparent",tile:""}},[r("v-toolbar",{attrs:{color:"indigo lighten-4",height:"60",tile:""}},[r("v-app-bar-nav-icon",[r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[r("v-icon",[t._v("mdi-arrow-left-thick")])],1)],1),r("v-spacer"),t.status.loved?r("v-btn",{attrs:{icon:""},on:{click:t.unsetLove}},[r("v-icon",[t._v("mdi-heart")])],1):r("v-btn",{attrs:{icon:""},on:{click:t.love}},[r("v-icon",[t._v("mdi-heart-outline")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-comment")])],1),t.status["bookmarked"]?r("v-btn",{attrs:{icon:""},on:{click:t.revokeBookmark}},[r("v-icon",[t._v("mdi-bookmark")])],1):r("v-btn",{attrs:{icon:""},on:{click:t.bookmark}},[r("v-icon",[t._v("mdi-bookmark-outline")])],1)],1),r("v-card",{attrs:{tile:"",height:"450",width:"100%"}},[t.coverImg?r("v-img",{attrs:{src:t.coverImg,height:"450",width:"100%"}}):t._e()],1),r("div",{staticClass:"py-2"}),t.article.tags?r("v-card-subtitle",{staticClass:"pb-0"},t._l(t.article.tags.split(","),(function(e,n){return r("v-chip",{key:n,staticClass:"mr-1",attrs:{label:"",small:""}},[r("span",[t._v("#"+t._s(e))])])})),1):t._e(),r("v-card-title",{staticClass:"display-2 pt-0"},[t._v(" "+t._s(t.article.title)+" ")]),r("v-card-subtitle",{staticClass:"py-1"},[r("v-chip",{staticClass:"mr-1",attrs:{small:""}},[r("v-icon",{staticClass:"pr-1",attrs:{small:""}},[t._v(" mdi-account-circle ")]),r("span",[t._v(t._s(t.article.created_by.username))])],1),r("v-chip",{staticClass:"mx-1",attrs:{small:""}},[r("v-icon",{staticClass:"pr-1",attrs:{small:""}},[t._v(" mdi-calendar-plus ")]),r("span",[t._v(t._s(t.$moment(t.article.timestamp).format("Do MMM YYYY")))])],1),r("v-chip",{staticClass:"mx-1",attrs:{small:""}},[r("v-icon",{staticClass:"pr-1",attrs:{small:""}},[t._v(" mdi-account-check ")]),r("span",[t._v(t._s(t.article.approved_by.username))])],1),r("v-chip",{staticClass:"mx-1",attrs:{small:""}},[r("v-icon",{staticClass:"pr-1",attrs:{small:""}},[t._v(" mdi-calendar-check ")]),r("span",[t._v(t._s(t.$moment(t.article.approved_at).format("Do MMM YYYY")))])],1)],1),r("div",[t._l(t.getArticleHtml,(function(e,n){return r("v-card-text",{key:n,staticClass:"py-2"},[e.includes("iframe")&&e.includes("youtube.com/embed")?[r("v-card",{attrs:{dark:""}},[r("youtube-iframe",{attrs:{height:"400","video-url":t.getIframeSrc(e)}})],1)]:e.includes("<img src=")?[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:t.ifFullWidth(e)?12:8,md:t.ifFullWidth(e)?12:8,lg:t.ifFullWidth(e)?12:8,xl:t.ifFullWidth(e)?12:8}},[r("v-card",{attrs:{dark:"",height:"350"}},[r("v-img",{attrs:{width:"100%",height:"350",src:t.getImageSrc(e),alt:t.getAltText(e)}})],1)],1),t.getAltText(e)?r("v-col",{class:t.$vuetify.breakpoint.smAndDown?"py-2":"py -2",attrs:{cols:"12",sm:12,md:t.ifFullWidthForAlt(e)?12:4,lg:t.ifFullWidthForAlt(e)?12:4,xl:t.ifFullWidthForAlt(e)?12:4}},[r("p",[t._v(" "+t._s(t.getAltText(e))+" ")])]):t._e()],1)]:r("div",{domProps:{innerHTML:t._s(e)}})],2)})),r("v-card-text",{staticClass:"d-flex justify-start align-center"},[r("v-img",{staticStyle:{"border-radius":"4px"},attrs:{src:"https://media.giphy.com/media/MViYNpI0wx69zX7j7w/giphy.gif",height:"80",dark:""}},[r("div",{staticClass:"headline text-center align-center"},[r("v-col",{staticClass:"pt-lg-6 pt-sm-6 pt-lg-6 pt-xl-6"},[t._v(" Thank you! You've made to the end. ")])],1)])],1),r("v-card-text",[r("article-comment-detail")],1)],2)],1):t._e()},i=[],a=(r("4d63"),r("ac1f"),r("25f0"),r("d3b7"),r("3ca3"),r("10d1"),r("ddb0"),r("80e0"),r("5319"),r("a4d3"),r("e01a"),r("b64b"),r("62f5")),c=r.n(a),o=(r("4ec9"),r("f20d")),s=r("0de3");function l(t){return-1!==Function.toString.call(t).indexOf("[native code]")}r("4ae1");var u=r("8151");function d(t,e,r){return d=Object(u["a"])()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var i=Function.bind.apply(t,n),a=new i;return r&&Object(s["a"])(a,r.prototype),a},d.apply(null,arguments)}function f(t){var e="function"===typeof Map?new Map:void 0;return f=function(t){if(null===t||!l(t))return t;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return d(t,arguments,Object(o["a"])(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Object(s["a"])(r,t)},f(t)}r("e1a7");var p=r("920b");function h(t,e){h=function(t,e){return new a(t,void 0,e)};var r=f(RegExp),n=RegExp.prototype,i=new WeakMap;function a(t,e,n){var a=r.call(this,t,e);return i.set(a,n||i.get(t)),a}function o(t,e){var r=i.get(e);return Object.keys(r).reduce((function(e,n){return e[n]=t[r[n]],e}),Object.create(null))}return Object(p["a"])(a,r),a.prototype.exec=function(t){var e=n.exec.call(this,t);return e&&(e.groups=o(e,this)),e},a.prototype[Symbol.replace]=function(t,e){if("string"===typeof e){var r=i.get(this);return n[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+r[e]})))}if("function"===typeof e){var a=this;return n[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!==c()(t[t.length-1])&&t.push(o(t,a)),e.apply(this,t)}))}return n[Symbol.replace].call(this,t,e)},h.apply(this,arguments)}var m=r("c964"),v=r("f3f3"),b=(r("96cf"),r("7db0"),r("8348")),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{color:"transparent",flat:"",loading:t.loading}},[t.comments?r("v-list",{attrs:{"two-line":"",dense:""}},[0===t.comments.results.length?r("v-list-item",{staticStyle:{"border-radius":"4px"}},[t._v(" Be the first to comment! ")]):t._l(t.comments.results,(function(e,n){return r("v-list-item",{key:e.id},[r("v-avatar",{staticClass:"d-flex justify-content-center ma-2 elevation-4 comment-avatar",style:"border: "+t.colors[n%10],attrs:{size:"45",tile:"",color:t.colors[n%10]}},[r("span",{staticClass:"white--text headline"},[t._v(" "+t._s(t.$helper.getCurrentUserInitials(e.writer))+" ")])]),r("v-list-item-content",{staticClass:"pl-0"},[r("v-list-item-title",[e.writer?r("code",{staticClass:"comment-writer mx-1"},[t._v(" "+t._s(e.writer.username)+" ")]):t._e(),r("code",{staticClass:"comment-created-at mx-1"},[t._v(" "+t._s(t.$moment(e.created_at).fromNow())+" ")]),r("v-icon",{attrs:{small:""}},[t._v(" mdi-reply-circle ")])],1),r("v-list-item-subtitle",{staticClass:"comment-text"},[t._v(" "+t._s(e.comment)+" ")])],1),t.$helper.ifWriterIsCurrentUser(e.writer.username)?r("v-list-item-action",[r("v-btn",{attrs:{icon:"",color:"red lighten-1"},on:{click:function(r){return t.deleteConfirmMyComment(e)}}},[r("v-icon",[t._v("mdi-delete")])],1)],1):t._e()],1)}))],2):t._e(),r("v-divider",{staticClass:"my-2"}),r("div",{staticClass:"comment-box pb-2"},[r("v-text-field",{staticClass:"comment",attrs:{solo:"","hide-details":"auto",placeholder:"Add a comment"},on:{keyup:t.submitIfEnterIsPressed},scopedSlots:t._u([{key:"append",fn:function(){return[r("v-icon",{staticClass:"send-icon-button",attrs:{color:"primary"},on:{click:t.postComment}},[t._v(" mdi-send ")])]},proxy:!0}]),model:{value:t.comment.comment,callback:function(e){t.$set(t.comment,"comment",e)},expression:"comment.comment"}})],1)],1)},y=[],x=r("7d85"),k={name:"ArticleCommentsView",mixins:[x["a"]],data:function(){return{loading:!1,colors:["#1F7087","#731231","#254f0d","#6d190d","#952175","#64410d","#952175","#105414","#60250f","#10405f"],comment:{comment:null,article:null},comments:null}},created:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.init();case 2:case"end":return e.stop()}}),e)})))()},methods:{init:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("article/fetchCommentsForId",{id:t.$route.params.id});case 3:r=e.sent,t.comments=r,t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},submitIfEnterIsPressed:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(13!==t.keyCode){r.next=3;break}return r.next=3,e.addCommentToPost();case 3:case"end":return r.stop()}}),r)})))()},postComment:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.comment.article=t.$route.params.id,e.next=3,t.$store.dispatch("article/postComment",{body:t.comment});case 3:if(r=e.sent,!0!==r){e.next=10;break}return t.comment.comment="",e.next=8,t.init();case 8:e.next=17;break;case 10:if(500!==r){e.next=15;break}return e.next=13,t.openSnack("Internal server error. Please try again later");case 13:e.next=17;break;case 15:return e.next=17,t.openSnack(r.comment[0]);case 17:case"end":return e.stop()}}),e)})))()},deleteMyComment:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("article/removeComment",{id:t.id});case 2:if(n=r.sent,!n){r.next=10;break}return r.next=6,e.openSnack("Your comment removed successfully.","success");case 6:return r.next=8,e.init();case 8:r.next=12;break;case 10:return r.next=12,e.openSnack("Comment remove failed. Please try again.");case 12:case"end":return r.stop()}}),r)})))()},deleteConfirmMyComment:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e.$helper.ifWriterIsCurrentUser(t.writer.username)){r.next=5;break}if(r.t0=confirm("Are you sure you want to delete your comment?"),!r.t0){r.next=5;break}return r.next=5,e.deleteMyComment(t);case 5:case"end":return r.stop()}}),r)})))()}}},w=k,C=(r("1ada"),r("2877")),_=r("6544"),O=r.n(_),j=r("8212"),I=r("8336"),$=r("b0af"),S=r("ce7e"),R=r("132d"),V=r("8860"),E=r("da13"),A=r("1800"),F=r("5d23"),M=r("8654"),T=Object(C["a"])(w,g,y,!1,null,"9303898e",null),z=T.exports;O()(T,{VAvatar:j["a"],VBtn:I["a"],VCard:$["a"],VDivider:S["a"],VIcon:R["a"],VList:V["a"],VListItem:E["a"],VListItemAction:A["a"],VListItemContent:F["a"],VListItemSubtitle:F["b"],VListItemTitle:F["c"],VTextField:M["a"]});var B=r("2f62"),Y=r("bbc1"),W=r("60f3"),L={name:"ArticleDetail",components:{YoutubeIframe:b["default"],ArticleCommentDetail:z},mixins:[Y["a"],x["a"]],data:function(){return{loading:null,status:{loved:null,bookmarked:null,love_count:null,bookmark_count:null}}},computed:Object(v["a"])(Object(v["a"])({},Object(B["b"])({article:"article/detail"})),{},{coverImg:function(){return!!this.article&&(this.article["cover_images"].length>0&&this.article["cover_images"][0]["image"])},getArticleHtml:function(){if(!this.article)return null;var t=W(),e=JSON.parse(this.article.description);return t.parse(e)}}),created:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.init();case 2:return e.next=4,t.initStatus();case 4:case"end":return e.stop()}}),e)})))()},methods:{ifFullWidth:function(t){return this.getAltText(t).length>800||this.getAltText(t).length<80},ifFullWidthForAlt:function(t){return this.getAltText(t).length>800||this.getAltText(t).length<80},init:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,r=t.$route.params.id,e.next=4,t.$store.dispatch("article/fetchSingle",{id:r});case 4:t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},initMyStatus:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("article/fetchMyStatus",{id:t.article.id});case 2:t.status=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getRegexMatch:function(t,e){var r,n;while(null!==(n=t.exec(e)))n.index===t.lastIndex&&t.lastIndex++,r=n.groups.find;return r},getIframeSrc:function(t){var e=h(/src="(.+)"/gm,{find:1}),r=this.getRegexMatch(e,t);return r},getImageSrc:function(t){var e=h(/src="(.+)" alt/gm,{find:1}),r=this.getRegexMatch(e,t);return r},getAltText:function(t){var e=h(/alt="(.+)"/gm,{find:1});return this.getRegexMatch(e,t)}}},U=L,P=(r("dcfd"),r("2e8a"),r("5bc1")),D=r("99d9"),G=r("cc20"),N=r("62ad"),q=r("adda"),H=r("0fd9"),J=r("2fa4"),X=r("71d9"),Q=Object(C["a"])(U,n,i,!1,null,"4c7e15ad",null);e["default"]=Q.exports;O()(Q,{VAppBarNavIcon:P["a"],VBtn:I["a"],VCard:$["a"],VCardSubtitle:D["b"],VCardText:D["c"],VCardTitle:D["d"],VChip:G["a"],VCol:N["a"],VIcon:R["a"],VImg:q["a"],VRow:H["a"],VSpacer:J["a"],VToolbar:X["a"]})}}]);
//# sourceMappingURL=chunk-3d940437.0e4e5576.js.map