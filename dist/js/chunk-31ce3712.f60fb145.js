(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31ce3712"],{b543:function(t,e,a){"use strict";a("bdd6")},bdd6:function(t,e,a){},f204:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{loading:t.loading,"max-width":"1000",flat:"",color:"transparent rounded-0"}},[a("div",{staticStyle:{padding:"200px"}}),t.gallery?a("div",{staticClass:"demo-wrapper"},[a("section",{staticClass:"scatter-section demo-text"},[a("div",{staticClass:"wrapper text"},[t._v(" LOVEDGALLERYFROMUS ")])]),a("section",{staticClass:"scatter-section demo-gallery"},[a("v-card",{staticClass:"wrapper",attrs:{height:"340",flat:""}},t._l(t.gallery.slice(0,4),(function(e){return a("li",{key:e.id},[a("v-img",{staticClass:"scatter-image",attrs:{height:"340",eager:"",src:t.$helper.replaceBackendHost(e.image)}})],1)})),0)],1),a("section",{staticClass:"scatter-section demo-gallery"},[a("ul",{staticClass:"wrapper"},t._l(t.gallery.slice(3,7),(function(e){return a("li",{key:e.id},[a("v-img",{staticClass:"scatter-image",attrs:{height:"340",eager:"",src:t.$helper.replaceBackendHost(e.image)}})],1)})),0)]),a("section",{staticClass:"scatter-section demo-gallery"},[a("ul",{staticClass:"wrapper"},t._l(t.gallery.slice(7,11),(function(e){return a("li",{key:e.id},[a("v-img",{staticClass:"scatter-image",attrs:{height:"340",eager:"",src:t.$helper.replaceBackendHost(e.image)}})],1)})),0)]),a("section",{staticClass:"scatter-section demo-gallery"},[a("ul",{staticClass:"wrapper"},t._l(t.gallery.slice(-4),(function(e){return a("li",{key:e.id},[a("v-img",{staticClass:"scatter-image",attrs:{height:"340",eager:"",src:t.$helper.replaceBackendHost(e.image)}})],1)})),0)]),a("section",{staticClass:"scatter-section demo-text"},[a("div",{staticClass:"wrapper text"},[t._v(" SACHCHAIKENDRANEPAL ")])]),a("div",{staticStyle:{padding:"100px"}})]):t._e()])},s=[],i=a("3835"),c=a("1da1"),n=a("5530"),l=(a("159b"),a("96cf"),a("cffa")),o=a("1dac"),d=a("2f62"),u={name:"Scatter",data:function(){return{loading:null}},computed:Object(n["a"])({},Object(d["b"])({gallery:"utilities/galleryList"})),created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.init();case 2:l["a"].registerPlugin(o["a"]),t.initializeAnimation();case 4:case"end":return e.stop()}}),e)})))()},methods:{init:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("utilities/fetchGalleryImages");case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},initializeAnimation:function(){document.body.style.overflow="auto",document.scrollingElement.scrollTo(0,0),l["a"].utils.toArray(".scatter-section").forEach((function(t,e){var a=t.querySelector(".wrapper"),r=e%2?["100%",-1*(a.scrollWidth-t.offsetWidth)]:[-1*a.scrollWidth,0],s=Object(i["a"])(r,2),c=s[0],n=s[1];l["a"].fromTo(a,{x:c},{x:n,scrollTrigger:{trigger:t,scrub:1,start:"top bottom"}})}))}}},g=u,p=(a("b543"),a("2877")),m=a("6544"),f=a.n(m),h=a("b0af"),w=a("adda"),y=Object(p["a"])(g,r,s,!1,null,"352b3563",null);e["default"]=y.exports;f()(y,{VCard:h["a"],VImg:w["a"]})}}]);
//# sourceMappingURL=chunk-31ce3712.f60fb145.js.map