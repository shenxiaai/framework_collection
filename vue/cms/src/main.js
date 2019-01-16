// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'kx-element-ui';
import store from './store';
import './assets/css/common.css';
import './assets/scss/element-variables.scss';

Vue.config.productionTip = false;

axios.defaults.timeout = 30000;
axios.defaults.baseURL = 'http://172.16.202.45:802/kxtx-cms';
// axios.defaults.baseURL = 'http://172.16.201.141:3000/rulecatalog';

Vue.use(ElementUI);
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
