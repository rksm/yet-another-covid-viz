import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import CoronaPlot from "./components/CoronaPlot.vue";
import CountrySelector from "./components/CountrySelector.vue";

Vue.config.productionTip = false;
Vue.component("CoronaPlot", CoronaPlot);
Vue.component("CountrySelector", CountrySelector);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
