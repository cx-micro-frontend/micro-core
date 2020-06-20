import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

//core / mode
import Core from './modules/Common/Core';
import FrameInfo from './modules/Frame/FrameInfo';
import Precinct from './modules/Frame/Precinct';

//common
import SearchConditions from './modules/Request/SearchConditions';
import RoleButton from './modules/Role/RoleButton';

//request
import RequestHead from './modules/Request/RequestHeader';
import CancelToken from './modules/Request/CancelToken';

//User
import User from './modules/User/User';
import UserBehavior from './modules/User/UserBehavior';

//Layout
import LockScreen from './modules/Layout/LockScreen';
import CoverPainting from './modules/User/CoverPainting';
import NavMenu from './modules/Layout/NavMenu';
import PageInfo from './modules/Common/PageInfo';
import PageTabs from './modules/Layout/PageTabs';
import Router from './modules/Router/Router';

import entrance from '../../../injection/entrance/entrance_core';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: Object.assign({}, entrance.model.modules, {
    //core
    Core,
    FrameInfo,
    Precinct,

    //common
    Search: SearchConditions,
    RoleButton,

    //request
    RequestHead,
    CancelToken,

    //User
    User,
    UserBehavior,

    //Layout
    LockScreen,
    CoverPainting,
    NavMenu,
    PageInfo,
    PageTabs,
    Router,
  }),
  getters: Object.assign({}, entrance.model.getters, getters),
});

export default store;
