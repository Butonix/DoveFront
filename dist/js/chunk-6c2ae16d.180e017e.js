(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c2ae16d"],{"52da":function(t,e,a){},af4b:function(t,e,a){"use strict";a("52da")},ef1e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.articles?a("v-card",{staticClass:"mx-auto",attrs:{loading:t.loading,flat:"",tile:"",color:"transparent","max-width":"1000"}},[a("div",{staticClass:"py-2"}),a("div",{staticClass:"mx-4"},[a("chip-filter")],1),a("article-pin-bar"),t.articles.results?a("v-card",{staticClass:"transparent",attrs:{loading:t.loading,flat:"",tile:""}},[0===t.articles.results.length?a("no-home-data",{staticClass:"ma-3"}):t._l(t.articles.results,(function(t){return a("article-card",{key:t.id,staticClass:"ma-3",attrs:{article:t}})}))],2):t._e(),a("div",{staticClass:"py-16"})],1):t._e()},r=[],i=a("1da1"),c=a("5530"),s=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2f62")),l={name:"Articles",components:{ChipFilter:function(){return Promise.all([a.e("chunk-5a3345a9"),a.e("chunk-2d0b8a83")]).then(a.bind(null,"302b"))},ArticlePinBar:function(){return Promise.all([a.e("chunk-482155ff"),a.e("chunk-2111243a")]).then(a.bind(null,"2ec4"))},NoHomeData:function(){return a.e("chunk-945978f0").then(a.bind(null,"006b"))},ArticleCard:function(){return a.e("chunk-fab6ebfc").then(a.bind(null,"3f7c"))}},data:function(){return{loading:!0}},computed:Object(c["a"])({},Object(s["b"])({articles:"article/list"})),created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.articles.count){e.next=3;break}return e.next=3,t.$store.dispatch("article/filter",{is_approved:!0});case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()}},u=l,o=(a("af4b"),a("2877")),d=a("6544"),f=a.n(d),b=a("b0af"),h=Object(o["a"])(u,n,r,!1,null,"02e383f8",null);e["default"]=h.exports;f()(h,{VCard:b["a"]})}}]);
//# sourceMappingURL=chunk-6c2ae16d.180e017e.js.map