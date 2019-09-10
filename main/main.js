// import '@babel/polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import App from './src/App';

import router from './src/router/index';
import './src/router/promission/hook';

import store from './src/store/index';
import './src/UI/index';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
