import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { vuetify } from "@/theme/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
