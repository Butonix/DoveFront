(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fa7aa44","chunk-2d0e1fc0"],{"3f7c":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.article?r("v-card",{staticClass:"list-card",attrs:{loading:t.loading}},[t.article["is_pinned"]?r("v-card",{attrs:{dark:""}},[r("v-img",{staticClass:"cursor",attrs:{gradient:"to top, rgba(100,115,201, 0), rgba(25,32,72, .6)",src:t.article["cover_images"]["image"],height:"250"},on:{click:function(e){return t.routeToArticleDetail(t.article.id)}}},[r("v-icon",{staticClass:"ma-2",staticStyle:{transform:"rotate(30deg)"},attrs:{color:"white",size:"20"}},[t._v(" mdi-pin ")])],1)],1):t._e(),r("v-list",{attrs:{color:"transparent","three-line":""}},[r("v-list-item",[r("v-list-item-avatar",{staticClass:"d-flex justify-center author-av",attrs:{size:"48",color:t.$constants.pickBackgroundColor()}},[r("span",{staticClass:"text-uppercase headline white--text"},[t._v(t._s(t.$helper.getUsernameInitials(t.article.created_by)))])]),r("v-list-item-content",[r("v-list-item-subtitle",{staticClass:"d-flex justify-start"},[r("div",{staticClass:"writer-subtitle grey lighten-3"},[t._v(" "+t._s(t.article.created_by.username)+" ")]),r("div",{staticClass:"writer-subtitle grey lighten-3 ml-1"},[t._v(" "+t._s(t.$moment(t.article.timestamp).fromNow())+" ")])]),r("v-list-item-title",{staticClass:"article-title",on:{click:function(e){return t.routeToArticleDetail(t.article.id)}}},[t._v(" "+t._s(t.article.title)+" ")]),t.article.tags?r("v-list-item-subtitle",{staticClass:"d-flex justify-start"},t._l(t.article.tags.split(","),(function(e){return r("div",{key:e[0],staticClass:"pa-1 mr-1 mb-2 purple lighten-5",staticStyle:{"border-radius":"4px","font-weight":"500"}},[t._v(" #"+t._s(e)+" ")])})),0):t._e(),r("v-list-item-subtitle",{staticClass:"d-flex flex-wrap justify-start"},[r("v-chip",{attrs:{color:"grey lighten-3"}},[r("v-icon",{staticClass:"pr-1 mb-1",attrs:{size:"20"}},[t._v(" mdi-heart-multiple-outline ")]),t._v(" Reactions ("+t._s(t.status["love_count"])+") ")],1),r("v-chip",{staticClass:"mx-1 mb-1",attrs:{color:"grey lighten-3"}},[r("v-icon",{staticClass:"pr-1",attrs:{size:"20"}},[t._v(" mdi-comment-outline ")]),t._v(" Comments ")],1),t.status["bookmarked"]?r("v-chip",{staticClass:"mb-1",attrs:{color:"grey lighten-3"},on:{click:t.revokeBookmark}},[r("v-icon",{staticClass:"pr-1",attrs:{size:"20"}},[t._v(" mdi-bookmark ")]),t._v(" Bookmark ")],1):r("v-chip",{on:{click:t.bookmark}},[r("v-icon",{staticClass:"pr-1",attrs:{size:"20"}},[t._v(" mdi-bookmark-outline ")]),t._v(" Bookmark ")],1),r("v-spacer"),r("v-chip",{staticClass:"mb-1",attrs:{color:"grey lighten-2"}},[r("v-icon",{staticClass:"pr-1",attrs:{size:"20"}},[t._v(" mdi-chevron-double-right ")]),t._v(" "+t._s(parseInt(t.article.description.length/1e3))+" mins read ")],1)],1)],1)],1)],1)],1):t._e()},i=[],s=r("c964"),n=(r("96cf"),r("7d85")),c=r("bbc1"),o={name:"ArticleCard",mixins:[n["a"],c["a"]],props:{article:{type:Object,required:!0}},data:function(){return{loading:!1,status:{bookmarked:null,love_count:null}}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.initStatus();case 2:case"end":return e.stop()}}),e)})))()},methods:{routeToArticleDetail:function(t){this.$router.push({name:"SACHCHAI NEPAL ARTICLE",params:{id:t}})}}},l=o,u=(r("8a49"),r("2877")),d=r("6544"),m=r.n(d),v=r("b0af"),k=r("cc20"),p=r("132d"),f=r("adda"),h=r("8860"),b=r("da13"),g=r("8270"),x=r("5d23"),_=r("2fa4"),w=Object(u["a"])(l,a,i,!1,null,"e48eb8a6",null);e["default"]=w.exports;m()(w,{VCard:v["a"],VChip:k["a"],VIcon:p["a"],VImg:f["a"],VList:h["a"],VListItem:b["a"],VListItemAvatar:g["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VSpacer:_["a"]})},"72fa":function(t,e,r){},"7d85":function(t,e,r){"use strict";var a=r("c964"),i=(r("96cf"),{methods:{openSnack:function(t){var e=arguments,r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.length>1&&void 0!==e[1]?e[1]:"error",a.next=3,r.$store.dispatch("snack/setSnackState",!0);case 3:return a.next=5,r.$store.dispatch("snack/setSnackColor",i);case 5:return a.next=7,r.$store.dispatch("snack/setSnackText",t);case 7:case"end":return a.stop()}}),a)})))()}}});e["a"]=i},"8a49":function(t,e,r){"use strict";r("72fa")},bbc1:function(t,e,r){"use strict";var a=r("c964"),i=(r("96cf"),{methods:{initStatus:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("article/fetchMyStatus",{id:t.article.id});case 3:t.status=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},bookmark:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.$store.dispatch("article/bookmark",{id:t.article.id}),!r){e.next=8;break}return e.next=4,t.openSnack("Article bookmarked successfully.","success");case 4:return e.next=6,t.initStatus();case 6:e.next=10;break;case 8:return e.next=10,t.openSnack("Article bookmark failed. Pleas try again.");case 10:case"end":return e.stop()}}),e)})))()},revokeBookmark:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.$store.dispatch("article/revokeBookmark",{id:t.article.id}),!r){e.next=8;break}return e.next=4,t.openSnack("Article bookmark revoked successfully.","success");case 4:return e.next=6,t.initStatus();case 6:e.next=10;break;case 8:return e.next=10,t.openSnack("Article bookmark revoke failed. Pleas try again.");case 10:case"end":return e.stop()}}),e)})))()},love:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.$store.dispatch("article/love",{id:t.article.id}),!r){e.next=8;break}return e.next=4,t.openSnack("Article loved successfully.","success");case 4:return e.next=6,t.initStatus();case 6:e.next=10;break;case 8:return e.next=10,t.openSnack("Article reaction set failed. Pleas try again.");case 10:case"end":return e.stop()}}),e)})))()},unsetLove:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.$store.dispatch("article/unsetLove",{id:t.article.id}),!r){e.next=8;break}return e.next=4,t.openSnack("Article love revoked successfully.","success");case 4:return e.next=6,t.initStatus();case 6:e.next=10;break;case 8:return e.next=10,t.openSnack("Article reaction revoke failed. Pleas try again.");case 10:case"end":return e.stop()}}),e)})))()}}});e["a"]=i}}]);
//# sourceMappingURL=chunk-6fa7aa44.d9c7cbaf.js.map