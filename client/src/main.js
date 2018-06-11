import Vue from "vue";
import App from "./Root/App.vue";
import router from "./Root/Router/router";
import store from "./store";
import "./registerServiceWorker";

import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify";

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
