import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

//core / mode
import Core from './modules/System/Common/Core';
import FrameInfo from './modules/System/Frame/FrameInfo';
import Precinct from './modules/System/Frame/Precinct';

//common
import SearchConditions from './modules/System/Request/SearchConditions';
import RoleButton from './modules/System/Role/RoleButton';
import Table from './modules/System/Table/Table';

//request
import RequestHead from './modules/System/Request/RequestHeader';
import CancelToken from './modules/System/Request/CancelToken';

//User
import User from './modules/System/User/User';
import UserBehavior from './modules/System/User/UserBehavior';

//Layout
import LockScreen from './modules/System/Layout/LockScreen';
import CoverPainting from './modules/System/User/CoverPainting';
import NavMenu from './modules/System/Layout/NavMenu';
import PageInfo from './modules/System/Common/PageInfo';
import PageTabs from './modules/System/Layout/PageTabs';
import Router from './modules/System/Router/Router';

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

    Table,

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
