import Vue from "vue";
import App from "./app.vue";
import "./main.scss";

if (process.env.NODE_ENV === "development") {
  Vue.config.debug = true;
}

const VueApp = new Vue({
  el: "#app",
  render: h => h(App)
});
