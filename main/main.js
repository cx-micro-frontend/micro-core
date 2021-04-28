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

// load global mixins
// import GlobalMixins from './src/mixins/Global';
// Vue.mixin(GlobalMixins);

Vue.config.productionTip = false;

import { cache } from './plugins';

Vue.use(cache, {
  switch: true,
  router,
  store,
  Layout: resolve => require(['./src/layout/Layout.vue'], resolve),
});


Vue.prototype.$eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});

