(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe2d735e"],{"166a":function(e,t,n){},"43db":function(e,t,n){e.exports=n.p+"img/noPostsImg.1a99b482.jpg"},"604c":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5530"),a=(n("a9e3"),n("4de4"),n("caad"),n("2532"),n("a434"),n("159b"),n("fb6a"),n("7db0"),n("c740"),n("166a"),n("a452")),i=n("7560"),u=n("58df"),s=n("d9bd"),o=Object(u["a"])(a["a"],i["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(r["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var e=this;return this.items.filter((function(t,n){return e.toggleMethod(e.getValue(t,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var e=this;if(!this.multiple)return function(t){return e.internalValue===t};var t=this.internalValue;return Array.isArray(t)?function(e){return t.includes(e)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(s["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(e,t){return null==e.value||""===e.value?t:e.value},onClick:function(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register:function(e){var t=this,n=this.items.push(e)-1;e.$on("change",(function(){return t.onClick(e)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,n)},unregister:function(e){if(!this._isDestroyed){var t=this.items.indexOf(e),n=this.getValue(e,t);this.items.splice(t,1);var r=this.selectedValues.indexOf(n);if(!(r<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(e){return e!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(e,t){var n=this.getValue(e,t);e.isActive=this.toggleMethod(n)},updateItemsState:function(){var e=this;this.$nextTick((function(){if(e.mandatory&&!e.selectedItems.length)return e.updateMandatory();e.items.forEach(e.updateItem)}))},updateInternalValue:function(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory:function(e){if(this.items.length){var t=this.items.slice();e&&t.reverse();var n=t.find((function(e){return!e.disabled}));if(n){var r=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,r))}}},updateMultiple:function(e){var t=Array.isArray(this.internalValue)?this.internalValue:[],n=t.slice(),r=n.findIndex((function(t){return t===e}));this.mandatory&&r>-1&&n.length-1<1||null!=this.max&&r<0&&n.length+1>this.max||(r>-1?n.splice(r,1):n.push(e),this.internalValue=n)},updateSingle:function(e){var t=e===this.internalValue;this.mandatory&&t||(this.internalValue=t?void 0:e)}},render:function(e){return e(this.tag,this.genData(),this.$slots.default)}});o.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"65d8":function(e,t,n){"use strict";n("be90")},"9bbb":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.multimedias?r("div",[r("v-fade-transition",[r("v-overlay",{attrs:{value:e.loading}},[r("skeleton-home-loader")],1)],1),0===e.multimedias.length?r("no-home-data",{attrs:{image:n("43db")}}):r("v-card",{attrs:{flat:"",tile:"","min-height":"100vh",color:"transparent"}},[e._l(e.multimedias,(function(t){return r("div",{key:t.id,staticClass:"mb-2"},[r("base-post-card",{attrs:{post:t},scopedSlots:e._u([{key:"media",fn:function(){return[r("v-col",{staticClass:"pt-0 px-2",attrs:{cols:"12"}},[r("v-card",{attrs:{height:"40vh",dark:"",rounded:"xl"}},[r("v-carousel",{attrs:{height:"40vh","hide-delimiters":"","show-arrows-on-hover":""},scopedSlots:e._u([{key:"next",fn:function(n){var a=n.on,i=n.attrs;return[r("v-btn",e._g(e._b({directives:[{name:"show",rawName:"v-show",value:e.moreThanOneItem(t),expression:"moreThanOneItem(post)"}],style:e.carouselNavItemStyle,attrs:{dark:"",icon:""},on:{click:function(t){return e.pauseAllPlaying()}}},"v-btn",i,!1),a),[r("v-icon",[e._v("mdi-chevron-right")])],1)]}},{key:"prev",fn:function(n){var a=n.on,i=n.attrs;return[r("v-btn",e._g(e._b({directives:[{name:"show",rawName:"v-show",value:e.moreThanOneItem(t),expression:"moreThanOneItem(post)"}],style:e.carouselNavItemStyle,attrs:{dark:"",icon:""},on:{click:function(t){return e.pauseAllPlaying()}}},"v-btn",i,!1),a),[r("v-icon",[e._v("mdi-chevron-left")])],1)]}}],null,!0)},[e._l(t["multimedia_images"],(function(t){return r("v-carousel-item",{key:e.$helper.replaceBackendHost(t.image)},[r("v-card",{attrs:{height:"40vh"}},[r("v-img",{attrs:{src:e.$helper.replaceBackendHost(t.image),height:"40vh"}})],1)],1)})),e._l(t["multimedia_videos"],(function(t){return r("v-carousel-item",{key:e.$helper.replaceBackendHost(t.video)},[r("v-card",{staticClass:"ma-0 pa-0",attrs:{height:"40vh","max-width":"100%",dark:""}},[r("video",{attrs:{poster:e.$helper.replaceBackendHost(t.poster),controls:"",height:"100%",width:"100%",src:e.$helper.replaceBackendHost(t.video)},on:{play:e.onPlay}})])],1)})),e._l(t["multimedia_video_urls"],(function(t){return r("v-carousel-item",{key:t.video_url},[r("youtube",{ref:"yt",refInFor:!0,attrs:{height:"100%",width:"100%","video-id":e.$youtube.getIdFromUrl(t.video_url),nocookie:"","player-vars":e.playerVars},on:{playing:e.playing}})],1)}))],2)],1)],1)]},proxy:!0}],null,!0)})],1)})),r("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.handleScrollToBottom,expression:"handleScrollToBottom"}]})],2)],1):e._e()},a=[],i=n("1da1"),u=n("5530"),s=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("ac1f"),n("5319"),n("a7b3")),o=n("2f62"),l={name:"MultimediaList",components:{SkeletonHomeLoader:function(){return n.e("chunk-2881e7f5").then(n.bind(null,"5bd2"))},BasePostCard:function(){return Promise.all([n.e("chunk-5da55a2e"),n.e("chunk-702f994c")]).then(n.bind(null,"ebae"))},NoHomeData:function(){return n.e("chunk-372e2aae").then(n.bind(null,"006b"))}},mixins:[s["a"]],data:function(){return{carouselNavItemStyle:"height: 30px !important; width: 30px !important;",dialog:!1,playerVars:{autoplay:0,origin:window.location.href},loading:!0,posts:[],occ:0,next:{next:null,count:0}}},computed:Object(u["a"])({},Object(o["b"])({multimedias:"multimedia/list",nextInfo:"multimedia/next"})),watch:{"$route.query.type":{handler:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.loading=!0,n.next=3,t.$store.dispatch("multimedia/filter",{is_approved:!0,type:e});case 3:t.next=t.nextInfo,t.loading=!1;case 5:case"end":return n.stop()}}),n)})))()},immediate:!0}},methods:Object(u["a"])(Object(u["a"])({},Object(o["c"])("multimedia",["MERGE_MULTIMEDIAS","SET_NEXT"])),{},{pauseAllPlaying:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.pauseAllYt();case 2:return t.next=4,e.pauseAllPlayingHTMLVideos();case 4:case"end":return t.stop()}}),t)})))()},moreThanOneItem:function(e){var t=e["multimedia_images"],n=e["multimedia_videos"],r=e["multimedia_video_urls"],a=[];return a=a.concat(t),a=a.concat(n),a=a.concat(r),a.length>1},handleScrollToBottom:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e){n.next=10;break}if(t.occ++,!(t.occ>1)){n.next=10;break}if(console.log(t.nextInfo),!(t.nextInfo.next&&t.nextInfo.count>=1)){n.next=10;break}return n.next=7,t.$api.getWithPayload(t.next.next.replace("http://sachchaikendranepal.org.np:8000","https://backend.sachchaikendranepal.org.np"));case 7:r=n.sent,t.MERGE_MULTIMEDIAS(r.results),t.SET_NEXT({next:r.next,previous:r.previous,count:r.count});case 10:case"end":return n.stop()}}),n)})))()}})},c=l,d=(n("65d8"),n("2877")),h=n("6544"),m=n.n(h),p=n("8336"),f=n("b0af"),v=n("5e66"),g=n("3e35"),y=n("62ad"),b=n("0789"),x=n("132d"),w=n("adda"),k=n("a797"),V=Object(d["a"])(c,r,a,!1,null,"5a4c7ea1",null);t["default"]=V.exports;m()(V,{VBtn:p["a"],VCard:f["a"],VCarousel:v["a"],VCarouselItem:g["a"],VCol:y["a"],VFadeTransition:b["d"],VIcon:x["a"],VImg:w["a"],VOverlay:k["a"]})},a7b3:function(e,t,n){"use strict";var r=n("1da1"),a=(n("96cf"),n("159b"),{computed:{player:function(){return this.$refs.youtube.yt}},created:function(){window.addEventListener("scroll",this.handleScroll);var e=document.querySelector(".router-column");e&&e.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll);var e=document.querySelector(".router-column");e&&e.removeEventListener("scroll",this.handleScroll)},methods:{isElementOnViewPort:function(e){if(!e)return!1;var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.right<=(window.innerWidth||document.documentElement.clientWidth)&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)},handleScroll:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=document.querySelectorAll("video"),n.forEach((function(t){var n=e.isElementOnViewPort(t);n||t.paused||t.pause()})),!Array.isArray(e.$refs.yt)){t.next=5;break}return t.next=5,e.$refs.yt.forEach(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.player.getPlayerState();case 2:if(r=t.sent,a=e.isElementOnViewPort(n.$parent.$el),a){t.next=8;break}if(1!==r){t.next=8;break}return t.next=8,n.player.pauseVideo();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return t.stop()}}),t)})))()},onPlay:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.pauseAllYt();case 2:document.querySelectorAll("video").forEach((function(t){t!==e.currentTarget&&(t.paused||t.pause())}));case 3:case"end":return n.stop()}}),n)})))()},pauseAllPlayingHTMLVideos:function(){document.querySelectorAll("video").forEach((function(e){e.paused||e.pause()}))},playing:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.pauseAllPlayingHTMLVideos(),!Array.isArray(e.$refs.yt)){t.next=4;break}return t.next=4,e.$refs.yt.forEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.player.get){e.next=3;break}return e.next=3,t.player.pauseVideo();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})))()},pauseAllYt:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!Array.isArray(e.$refs.yt)){t.next=3;break}return t.next=3,e.$refs.yt.forEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.player.getPlayerState();case 2:n=e.sent,1===n&&t.player.pauseVideo();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()}}});t["a"]=a},be90:function(e,t,n){}}]);
//# sourceMappingURL=chunk-fe2d735e.bab43d23.js.map