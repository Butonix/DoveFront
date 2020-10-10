import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import "roboto-fontface/css/roboto/roboto-fontface.css"
import "@fortawesome/fontawesome-free/css/all.css"
import api from "@/handler/axios"
import vuePlayer from "@algoz098/vue-player"
import APlayer from "vue-aplayer"
import $ from "jquery"

Vue.component(vuePlayer)
Vue.component(APlayer)

Vue.prototype.$api = api
Vue.prototype.$jq = $

Vue.config.productionTip = false

new Vue({
	$,
	router,
	store,
	vuetify,
	render: (h) => h(App)
}).$mount("#app")
