(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f2daf2b"],{a4ba:function(t,e,i){"use strict";i("d2e6")},d2e6:function(t,e,i){},d4bc:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.article?i("v-card",{staticClass:"list-card",attrs:{loading:t.loading}},[t.article["is_pinned"]?i("v-card",{attrs:{dark:""}},[i("v-img",{staticClass:"cursor",attrs:{gradient:"to top, rgba(100,115,201, 0), rgba(25,32,72, .6)",src:t.article["cover_images"][0]["image"],height:"250"},on:{click:function(e){return t.routeToArticleDetail(t.article.id)}}},[i("v-icon",{staticClass:"ma-2",staticStyle:{transform:"rotate(30deg)"},attrs:{color:"white",size:"20"}},[t._v(" mdi-pin ")])],1)],1):t._e(),i("v-list",{attrs:{color:"transparent","three-line":""}},[i("v-list-item",[i("v-list-item-avatar",{staticClass:"d-flex justify-center author-av",attrs:{size:"48",color:t.getAvColor}},[i("span",{staticClass:"text-uppercase headline white--text"},[t._v(t._s(t.$helper.getUsernameInitials(t.article.created_by)))])]),i("v-list-item-content",[i("v-list-item-subtitle",{staticClass:"d-flex justify-start"},[i("div",{staticClass:"writer-subtitle grey lighten-3"},[t._v(" "+t._s(t.article.created_by.username)+" ")]),i("div",{staticClass:"writer-subtitle grey lighten-3 ml-1"},[t._v(" "+t._s(t.$moment(t.article.timestamp).fromNow())+" ")])]),i("v-list-item-title",{staticClass:"article-title",on:{click:function(e){return t.routeToArticleDetail(t.article.id)}}},[t._v(" "+t._s(t.article.title)+" ")]),t.article.tags?i("v-list-item-subtitle",{staticClass:"d-flex justify-start"},t._l(t.article.tags.split(","),(function(e){return i("div",{key:e[0],staticClass:"pa-1 mr-1 mb-2 purple lighten-5",staticStyle:{"border-radius":"4px","font-weight":"500"}},[t._v(" #"+t._s(e)+" ")])})),0):t._e(),i("v-list-item-subtitle",{staticClass:"d-flex flex-wrap justify-start"},[i("v-chip",{attrs:{color:"grey lighten-3"}},[i("v-icon",{staticClass:"pr-1 mb-1",attrs:{size:"20"}},[t._v(" mdi-heart-multiple-outline ")]),t._v(" Reactions ("+t._s(t.status["love_count"])+") ")],1),i("v-chip",{staticClass:"mx-1 mb-1",attrs:{color:"grey lighten-3"}},[i("v-icon",{staticClass:"pr-1",attrs:{size:"20"}},[t._v(" mdi-comment-outline ")]),t._v(" Comments ")],1),t.status["bookmarked"]?i("v-chip",{staticClass:"mb-1",attrs:{color:"grey lighten-3"},on:{click:t.revokeBookmark}},[i("v-icon",{staticClass:"pr-1",attrs:{size:"20"}},[t._v(" mdi-bookmark ")]),t._v(" Bookmark ")],1):i("v-chip",{on:{click:t.bookmark}},[i("v-icon",{staticClass:"pr-1",attrs:{size:"20"}},[t._v(" mdi-bookmark-outline ")]),t._v(" Bookmark ")],1),i("v-spacer"),i("v-chip",{staticClass:"mb-1",attrs:{color:"grey lighten-2"}},[i("v-icon",{staticClass:"pr-1",attrs:{size:"20"}},[t._v(" mdi-chevron-double-right ")]),t._v(" "+t._s(parseInt(t.article.description.length/1e3))+" mins read ")],1)],1)],1)],1)],1)],1):t._e()},s=[],r=i("c964"),c=(i("96cf"),i("7d85")),l=i("bbc1"),n={name:"ArticleCard",mixins:[c["a"],l["a"]],props:{article:{type:Object,required:!0}},data:function(){return{loading:!1,status:{bookmarked:null,love_count:null},colors:["#1F7087","#731231","#254f0d","#650887","#952175","#64410d","#952175","#105414","#60250f","#10405f"]}},computed:{getAvColor:function(){var t=this.article.id%10;return this.colors[t]}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.initStatus();case 2:case"end":return e.stop()}}),e)})))()},methods:{routeToArticleDetail:function(t){this.$router.push({name:"SACHCHAI NEPAL ARTICLE",params:{id:t}})}}},o=n,u=(i("a4ba"),i("2877")),m=i("6544"),d=i.n(m),v=i("b0af"),p=i("cc20"),h=i("132d"),b=i("adda"),f=i("8860"),g=i("da13"),_=i("8270"),C=i("5d23"),k=i("2fa4"),w=Object(u["a"])(o,a,s,!1,null,"459e26e6",null);e["default"]=w.exports;d()(w,{VCard:v["a"],VChip:p["a"],VIcon:h["a"],VImg:b["a"],VList:f["a"],VListItem:g["a"],VListItemAvatar:_["a"],VListItemContent:C["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VSpacer:k["a"]})}}]);
//# sourceMappingURL=chunk-0f2daf2b.e7e81ac5.js.map