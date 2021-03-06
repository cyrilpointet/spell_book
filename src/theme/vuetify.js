import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#6D0000"
      }
    }
  }
});
