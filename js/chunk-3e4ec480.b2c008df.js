(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e4ec480","chunk-1c15ac72","chunk-2d0e6c6b","chunk-2d0e6c6b","chunk-2d0e6c6b"],{"3ad0":function(t,e,i){},"5ef0":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"event-detail-container"}},[i("v-row",{staticClass:"ma-0 pa-0",attrs:{id:"event-top-row"}},[i("v-col",{staticClass:"pa-0",attrs:{id:"cover-column",cols:"12"}},[i("v-img",{staticClass:"mx-auto",attrs:{id:"event-banner",src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",height:"300","max-width":"1000"}})],1),i("v-col",{staticClass:"pa-0",attrs:{id:"date-row",cols:"12"}},[i("v-card",{staticClass:"mx-auto",attrs:{id:"date-peek-box",width:"100",height:"100"}},[i("v-card",{attrs:{color:"red",height:"25"}},[i("v-card-text",{staticClass:"date-month"},[t._v(" Nov ")])],1),i("v-card-text",{staticClass:"text-center display-3 pa-0 pt-1 text--darken-3 blue--text"},[i("b",[t._v("15")])])],1)],1),i("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1000",flat:"",color:"transparent"}},[i("v-card-title",{staticClass:"event-title"},[t._v(" "+t._s(t.event.title)+" ")]),i("v-card-subtitle",[t._v(" "+t._s(t.event.description.substr(0,150))+" "),i("span",[t._v("...")]),t._v(" "),i("span",[i("i",[t._v("See more in "),i("code",[t._v("about")]),t._v(" section.")])])]),i("v-card-subtitle",{staticClass:"event-subtitle"},[t._v(" "+t._s(t.event.start_date)+" ● "+t._s(t.event.timeOfDay)+" ● "+t._s(t.event.duration)+" days ● "+t._s(t.event.venue)+" ")]),i("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center",align:"center"}},[i("v-card-actions",[i("v-btn",{attrs:{rounded:"",color:"pink lighten-4"}},[i("v-icon",{attrs:{color:"pink"}},[t._v(" mdi-hand-heart ")]),i("span",{staticClass:"event-action-btn-text"},[t._v("Satsang")])],1)],1),i("v-card-actions",[i("v-btn",{attrs:{rounded:"",color:"blue-grey lighten-3"}},[i("v-icon",{attrs:{color:"blue-grey"}},[t._v(" mdi-star-circle ")]),i("span",{staticClass:"event-action-btn-text"},[t._v("Interested")])],1)],1),i("v-card-actions",[i("v-btn",{attrs:{rounded:"",color:"green lighten-3"}},[i("v-icon",{attrs:{color:"green"}},[t._v(" mdi-check-circle ")]),i("span",{staticClass:"event-action-btn-text"},[t._v("Approve")])],1)],1),i("v-card-actions",[i("v-btn",{attrs:{rounded:"",color:"indigo lighten-3"}},[i("v-icon",{attrs:{color:"indigo"}},[t._v(" mdi-walk ")]),i("span",{staticClass:"event-action-btn-text"},[t._v("Going")])],1)],1),i("v-spacer"),i("v-card-actions",[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),a),[i("v-icon",{attrs:{color:"red darken-2"}},[t._v(" mdi-delete ")])],1)]}}])},[i("span",[t._v("Delete Event")])])],1)],1)],1),i("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[i("v-divider",{staticClass:"mx-auto"})],1),i("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1000",flat:"",color:"transparent"}},[i("v-toolbar",{staticClass:"mx-auto elevation-0",attrs:{"max-width":"1000",color:"transparent"}},[i("v-avatar",{staticClass:"detail-toolbar-avatar",attrs:{color:"primary",size:"42"}},[i("v-icon",{attrs:{color:"white",size:"24"}},[t._v(" mdi-calendar-clock ")])],1),i("v-spacer"),i("v-tabs",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],attrs:{"background-color":"transparent",centered:"","icons-and-text":"","slider-size":"3","slider-color":"red","active-class":"event-detail-active-tab"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.eventTabItems,(function(e,a){return i("v-tab",{key:a,attrs:{href:"#tab-"+e.title}},[t._v(" "+t._s(e.title)+" "),i("v-icon",[t._v(t._s(e.icon))])],1)})),1),i("v-spacer"),i("v-menu",{attrs:{"offset-y":"","nudge-left":"30",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",dark:"",icon:""}},"v-btn",n,!1),a),[i("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[i("v-list",t._l(t.eventActions,(function(e,a){return i("v-list-item",{key:a},[i("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1),i("v-tabs",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],attrs:{"background-color":"transparent",centered:"","show-arrows":"","icons-and-text":"","slider-size":"3","slider-color":"red","active-class":"event-detail-active-tab"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.eventTabItems,(function(e,a){return i("v-tab",{key:a,attrs:{href:"#tab-"+e.title}},[t._v(" "+t._s(e.title)+" "),i("v-icon",[t._v(t._s(e.icon))])],1)})),1)],1)],1)],1)],1),i("v-row",{staticClass:"ma-0 pa-0"},[i("v-card",{staticClass:"mx-auto",attrs:{flat:"","max-width":"1000"}},[i("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("event-about-tab-content",{attrs:{event:t.event}}),i("event-discussions-tab-content",{attrs:{event:t.event}}),i("event-photos-tab-content",{attrs:{event:t.event}}),i("event-multimedia-tab-content",{attrs:{event:t.event}})],1)],1)],1)],1)},n=[],s=(i("d3b7"),{name:"EventDetailView",components:{EventAboutTabContent:function(){return i.e("chunk-f1bb2492").then(i.bind(null,"bc2f"))},EventDiscussionsTabContent:function(){return i.e("chunk-2349a946").then(i.bind(null,"f70a"))},EventPhotosTabContent:function(){return i.e("chunk-53332e43").then(i.bind(null,"d218"))},EventMultimediaTabContent:function(){return i.e("chunk-f1bbba46").then(i.bind(null,"c04b"))}},data:function(){return{tab:null,event:{id:16,title:"Dashain - Tihar Event",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",country:"Nepal",province:"Province No 2",district:"BXABCY",municipality:null,municipality_ward:null,vdc:"HariyoKharka",vdc_ward:"AadhiBeri Gaaupalika",is_main:!1,type:"SATSANG",created_by:"bot25",created_at:"Nov 2, 2020",updated_by:"bot25",updated_at:"Nov 2, 2020",venue:"Deep Housing Auditorium",organizer:"Hero Branch",contacts:[9845689652,6158965],start_date:"Nov 5, 2020",duration:2,timeOfDay:"10AM - 5PM",banner:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ED4B1180197DC35F40612607655B3DC0B5CFD688690B99B39B758927373D4C50",no_of_responses:5},eventTabItems:[{title:"about",icon:"mdi-information-variant"},{title:"discussion",icon:"mdi-account-multiple"},{title:"photos",icon:"mdi-image"},{title:"multimedia",icon:"mdi-video-vintage"}],eventActions:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]}},computed:{aboutEventInfo:function(){return[{index:0,icon:"mdi-account-group",field:"Audiences",value:this.event.no_of_responses+" people responded"},{index:1,icon:"mdi-clock",field:"Date-Time",value:this.event.start_date+" for "+this.event.duration+" days"},{index:2,icon:"mdi-home",field:"Venue",value:this.event.venue},{index:3,icon:"mdi-earth",field:"Organizer",value:"Registred by "+this.event.created_by+" from "+this.event.organizer},{index:4,icon:"mdi-web",field:"Event Type",value:this.event.type}]}}}),o=s,r=(i("a374"),i("2877")),c=i("6544"),l=i.n(c),d=i("8212"),v=i("8336"),u=i("b0af"),h=i("99d9"),b=i("62ad"),p=i("ce7e"),m=i("132d"),f=i("adda"),_=i("8860"),g=i("da13"),C=i("5d23"),k=i("e449"),x=i("0fd9"),y=i("2fa4"),w=i("71a3"),O=i("fe57"),B=i("aac8"),I=i("71d9"),j=i("3a2f"),V=Object(r["a"])(o,a,n,!1,null,"566f59f3",null);e["default"]=V.exports;l()(V,{VAvatar:d["a"],VBtn:v["a"],VCard:u["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VCol:b["a"],VDivider:p["a"],VIcon:m["a"],VImg:f["a"],VList:_["a"],VListItem:g["a"],VListItemTitle:C["c"],VMenu:k["a"],VRow:x["a"],VSpacer:y["a"],VTab:w["a"],VTabs:O["a"],VTabsItems:B["a"],VToolbar:I["a"],VTooltip:j["a"]})},"61d2":function(t,e,i){},8860:function(t,e,i){"use strict";i("c740"),i("0481"),i("a434"),i("4069");var a=i("b85c"),n=i("5530"),s=(i("3ad0"),i("8dd9"));e["a"]=s["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,i=Object(a["a"])(this.groups);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.toggle(t)}}catch(s){i.e(s)}finally{i.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(n["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},"8ce9":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return c}));var a=i("b0af"),n=i("80d2"),s=Object(n["i"])("v-card__actions"),o=Object(n["i"])("v-card__subtitle"),r=Object(n["i"])("v-card__text"),c=Object(n["i"])("v-card__title");a["a"]},a374:function(t,e,i){"use strict";var a=i("ec26"),n=i.n(a);n.a},ce7e:function(t,e,i){"use strict";var a=i("5530"),n=(i("8ce9"),i("7560"));e["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(a["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(a["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},da13:function(t,e,i){"use strict";var a=i("5530"),n=(i("61d2"),i("a9ad")),s=i("1c87"),o=i("4e82"),r=i("7560"),c=i("f2e7"),l=i("5607"),d=i("80d2"),v=i("d9bd"),u=i("58df"),h=Object(u["a"])(n["a"],s["a"],r["a"],Object(o["a"])("listItemGroup"),Object(c["b"])("inputValue"));e["a"]=h.extend().extend({name:"v-list-item",directives:{Ripple:l["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-list-item":!0},s["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(s["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(v["e"])("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=Object(a["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="listitem",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t}},render:function(t){var e=this,i=this.generateRouteLink(),n=i.tag,s=i.data;s.attrs=Object(a["a"])(Object(a["a"])({},s.attrs),this.genAttrs()),s[this.to?"nativeOn":"on"]=Object(a["a"])(Object(a["a"])({},s[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===d["y"].enter&&e.click(t),e.$emit("keydown",t)}}),this.inactive&&(n="div"),this.inactive&&this.to&&(s.on=s.nativeOn,delete s.nativeOn);var o=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(n,this.setTextColor(this.color,s),o)}})},ec26:function(t,e,i){}}]);
//# sourceMappingURL=chunk-3e4ec480.b2c008df.js.map