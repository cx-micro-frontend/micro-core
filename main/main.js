import '@babel/polyfill';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

import Vue from 'vue';
import App from './src/App.vue';

//load  UI / plugins / style / components
import './src/UI/index';

//load vuex for data store
import store from './src/store/index';

//load router && page
import router from './src/router/index';
import './src/router/promission/hook';

Vue.config.productionTip = false;



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
