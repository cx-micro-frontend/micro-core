import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

//core / mode
import Core from './modules/System/Common/Core';
import FrameMode from './modules/System/FrameMode/FrameMode';

//common
import SearchConditions from './modules/System/Common/SearchConditions';
import RoleButton from './modules/System/Role/RoleButton';
import Table from './modules/System/Table/Table';

//request
import RequestHead from './modules/System/Request/RequestHeader';
import CancelToken from './modules/System/Request/CancelToken';

//User
import User from './modules/System/User/User';

//Layout
import LockScreen from './modules/System/Layout/LockScreen';
import CoverPainting from './modules/System/Layout/CoverPainting';
import Sidebar from './modules/System/Layout/Sidebar';
import PageInfo from './modules/System/Common/PageInfo';
import PageTabs from './modules/System/Layout/PageTabs';
import Router from './modules/System/Router/Router';

//Tree
import OrganizeTree from './modules/System/Tree/Organize-tree';

import entrance from '../../../injection/entrance/entrance_core';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: Object.assign({}, entrance.model.modules, {
    //core
    Core,
    FrameMode,

    //common
    Search: SearchConditions,
    RoleButton,

    Table,

    //request
    RequestHead,
    CancelToken,

    //User
    User,

    //Layout
    LockScreen,
    CoverPainting,
    Sidebar,
    PageInfo,
    PageTabs,
    Router,

    //Tree
    OrganizeTree,

    // AutoForm,
  }),
  getters: Object.assign({}, entrance.model.getters, getters),
});

export default store;
