import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { vuetify } from "@/theme/vuetify";

Vue.config.productionTip = false;

// import spells from "@/./spells.json";
// spells.forEach((elem, index) => {
//   spells[index].summary = "";
//   console.log(spells[index].id, index);
// });
// localStorage.setItem('spells', JSON.stringify(spells));

// import test from "@/test.html";
// const toto = test.querySelectorAll('tr');
// toto.forEach(elem => {
//   console.log(elem);
// });

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
