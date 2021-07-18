(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9052756","chunk-0902e417","chunk-2fd271c9"],{"171d":function(t,e,n){"use strict";n("2729")},"1e6c":function(t,e,n){"use strict";var i=n("9d65"),r=n("4e82"),s=n("c3f0"),o=n("80d2"),a=n("58df"),u=Object(a["a"])(i["a"],Object(r["a"])("windowGroup","v-window-item","v-window"));e["a"]=u.extend().extend().extend({name:"v-window-item",directives:{Touch:s["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(o["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(o["g"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},2729:function(t,e,n){},"3e35":function(t,e,n){"use strict";var i=n("f3f3"),r=n("1e6c"),s=n("adda"),o=n("58df"),a=n("80d2"),u=n("1c87"),c=Object(o["a"])(r["a"],u["a"]);e["a"]=c.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(s["a"],{staticClass:"v-carousel__item",props:Object(i["a"])(Object(i["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(a["s"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,n=t.data;return n.staticClass="v-window-item",n.directives.push({name:"show",value:this.isActive}),this.$createElement(e,n,this.genDefaultSlot())}}})},"5e66":function(t,e,n){"use strict";var i=n("f3f3"),r=(n("a9e3"),n("63b7"),n("f665")),s=n("afdd"),o=n("9d26"),a=n("37c6"),u=n("604c"),c=u["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return u["a"].options.computed.classes.call(this)}},methods:{genData:u["a"].options.methods.genData}}),l=n("80d2"),h=n("d9bd");e["a"]=r["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(h["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:r["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(s["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(o["a"],{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(c,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(a["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=r["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(l["g"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},"63b7":function(t,e,n){},"9bbb":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.posts,(function(e){return n("div",{key:e.id,staticClass:"mb-2"},[n("base-post-card",{attrs:{post:e},scopedSlots:t._u([{key:"media",fn:function(){return[n("v-col",{staticClass:"pt-0 px-2",attrs:{cols:"12"}},[n("v-card",{attrs:{height:"40vh",dark:""}},[n("v-carousel",{attrs:{height:"40vh","hide-delimiters":"","show-arrows-on-hover":""},scopedSlots:t._u([{key:"next",fn:function(i){var r=i.on,s=i.attrs;return[n("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.moreThanOneItem(e),expression:"moreThanOneItem(post)"}],style:t.carouselNavItemStyle,attrs:{dark:"",icon:""},on:{click:function(e){return t.pauseAllPlaying()}}},"v-btn",s,!1),r),[n("v-icon",[t._v("mdi-chevron-right")])],1)]}},{key:"prev",fn:function(i){var r=i.on,s=i.attrs;return[n("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.moreThanOneItem(e),expression:"moreThanOneItem(post)"}],style:t.carouselNavItemStyle,attrs:{dark:"",icon:""},on:{click:function(e){return t.pauseAllPlaying()}}},"v-btn",s,!1),r),[n("v-icon",[t._v("mdi-chevron-left")])],1)]}}],null,!0)},[t._l(e["multimedia_images"],(function(t){return n("v-carousel-item",{key:t.image},[n("v-card",{attrs:{height:"40vh"}},[n("v-img",{attrs:{src:t.image,height:"40vh"}})],1)],1)})),t._l(e["multimedia_videos"],(function(e){return n("v-carousel-item",{key:e.video},[n("v-card",{staticClass:"ma-0 pa-0",attrs:{height:"40vh","max-width":"100%",dark:""}},[n("video",{attrs:{poster:e.poster,controls:"",height:"100%",width:"100%",src:e.video},on:{play:t.onPlay}})])],1)})),t._l(e["multimedia_video_urls"],(function(e){return n("v-carousel-item",{key:e.video_url},[n("youtube",{ref:"yt",refInFor:!0,attrs:{height:"100%",width:"100%","video-id":t.$youtube.getIdFromUrl(e.video_url)},on:{playing:t.playing}})],1)}))],2)],1)],1)]},proxy:!0}],null,!0)})],1)})),0)},r=[],s=n("c964"),o=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("a7b3")),a={name:"MultimediaList",components:{BasePostCard:function(){return n.e("chunk-98f29c18").then(n.bind(null,"ebae"))}},mixins:[o["a"]],props:{posts:{type:Array,required:!0}},data:function(){return{carouselNavItemStyle:"height: 30px !important; width: 30px !important;",dialog:!1}},methods:{pauseAllPlaying:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.pauseAllYt();case 2:return e.next=4,t.pauseAllPlayingHTMLVideos();case 4:case"end":return e.stop()}}),e)})))()},moreThanOneItem:function(t){var e=t["multimedia_images"],n=t["multimedia_videos"],i=t["multimedia_video_urls"],r=[];return r=r.concat(e),r=r.concat(n),r=r.concat(i),r.length>1}}},u=a,c=(n("171d"),n("2877")),l=n("6544"),h=n.n(l),d=n("8336"),m=n("b0af"),p=n("5e66"),f=n("3e35"),v=n("62ad"),g=n("132d"),w=n("adda"),y=Object(c["a"])(u,i,r,!1,null,"73045c44",null);e["default"]=y.exports;h()(y,{VBtn:d["a"],VCard:m["a"],VCarousel:p["a"],VCarouselItem:f["a"],VCol:v["a"],VIcon:g["a"],VImg:w["a"]})},a7b3:function(t,e,n){"use strict";var i=n("c964"),r=(n("96cf"),n("159b"),{computed:{player:function(){return this.$refs.youtube.yt}},methods:{onPlay:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.pauseAllYt();case 2:document.querySelectorAll("video").forEach((function(e){e!==t.currentTarget&&(e.paused||e.pause())}));case 3:case"end":return n.stop()}}),n)})))()},pauseAllPlayingHTMLVideos:function(){document.querySelectorAll("video").forEach((function(t){t.paused||t.pause()}))},playing:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.getVideoUrl(),e.pauseAllPlayingHTMLVideos(),!Array.isArray(e.$refs.yt)){n.next=5;break}return n.next=5,e.$refs.yt.forEach(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.player.getVideoUrl();case 2:if(n=t.sent,n===r){t.next=6;break}return t.next=6,e.player.pauseVideo();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return n.stop()}}),n)})))()},pauseAllYt:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!Array.isArray(t.$refs.yt)){e.next=3;break}return e.next=3,t.$refs.yt.forEach(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.player.pauseVideo();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})))()}}});e["a"]=r}}]);
//# sourceMappingURL=chunk-d9052756.9d412a0e.js.map