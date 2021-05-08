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
import RequestHeader from './modules/Request/RequestHeader';
import CancelToken from './modules/Request/CancelToken';

//User or Operator
import User from './modules/User/User';
import UserThemeSetting from './modules/ThemeInfo/UserThemeSetting';
import UserBehavior from './modules/User/UserBehavior';

import Operator from './modules/User/Operator';
import LoginInfo from './modules/User/LoginInfo';

//Layout
import LockScreen from './modules/Layout/LockScreen';
import CoverPainting from './modules/ThemeInfo/CoverPainting';
import NavMenu from './modules/Layout/NavMenu';
import PageInfo from './modules/Common/PageInfo';
import PageTabs from './modules/Layout/PageTabs';
import Router from './modules/Router/Router';

//other
import BizExpand from './modules/BizExpand/BizExpand';

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
    RequestHeader,
    CancelToken,

    //User or Operator
    User,
    LoginInfo,
    UserThemeSetting,
    UserBehavior,
    Operator,

    //Layout
    LockScreen,
    CoverPainting,
    NavMenu,
    PageInfo,
    PageTabs,
    Router,

    //Other
    BizExpand,
  }),
  getters: Object.assign({}, entrance.model.getters, getters),
});

export default store;
