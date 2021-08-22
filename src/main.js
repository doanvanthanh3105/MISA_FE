import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import axiosConfig from './services/axiosConfig';
Vue.config.productionTip = false;

axiosConfig();

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
