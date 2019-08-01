// import '@babel/polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import App from './mainstay/App.vue';

import router from './mainstay/router/index';
import './mainstay/router/promission/hook';

import store from './mainstay/store/index';
import './mainstay/UI/index';



Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
});

