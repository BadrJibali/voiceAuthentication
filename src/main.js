// Normalize CSS Files.
import "normalize.css";
// Bootstrap CSS File.
import "bootstrap/dist/css/bootstrap.min.css";
// Vue instance
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
//all solid icons
import { fas } from "@fortawesome/free-solid-svg-icons";
//all regular icons
import { far } from "@fortawesome/free-regular-svg-icons";
//all brands icons
import { fab } from "@fortawesome/free-brands-svg-icons";
// Vue Particles
import VueParticles from 'vue-particles';
Vue.use(VueParticles);
// Axios
import axios from 'axios';
// vue-audio-recorder
import VueRecord from '@codekraft-studio/vue-record'
Vue.use(VueRecord)
// vuelidate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)





// Font Awesome Library Icons
library.add(fas, far, fab);

// Bootstrap JS File.
import "bootstrap/dist/js/bootstrap.bundle.min.js";

Vue.config.productionTip = false

// add font awesome icon component
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$axios = axios
