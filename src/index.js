import Vue from "vue";
import App from "./js/components/App.vue";

import "./assets/scss/main.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
