import Vue from 'vue';
import Vuex from 'vuex';
import getters from '../getters';

//User
import User from '../modules/User/User';
import UserThemeSetting from '../modules/User/UserThemeSetting';
import UserBehavior from '../modules/User/UserBehavior';

Vue.use(Vuex);

const store2 = new Vuex.Store({
  modules: {
    //User
    User,
    UserThemeSetting,
    UserBehavior,
  },
  getters,
});

console.log(8888888888888);
console.log(store2);
console.log(8888888888888);

new Vue({
  store: store2,
});
