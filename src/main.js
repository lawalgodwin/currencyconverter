import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import VuCountryIntl from "vue-country-intl";
// import css
import "vue-country-intl/lib/vue-country-intl.css";
// Global registration component
Vue.component(VuCountryIntl.name, VuCountryIntl);

import vueCountryRegionSelect from "vue-country-region-select";
import vuetify from "./plugins/vuetify";

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);
Vue.use(vueCountryRegionSelect);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
