import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

//core / mode
import Core from './modules/System/Common/Core';
import FrameMode from './modules/System/FrameMode/FrameMode';

//common
import SearchConditions from './modules/System/Common/SearchConditions';
import RoleButton from './modules/System/Role/RoleButton';
import RequestHead from './modules/System/Common/RequestHeader';
import Table from './modules/System/Table/Table';


//User
import User from './modules/System/User/User';

//Layout
import CoverPainting from './modules/System/Layout/CoverPainting';
import Sidebar from './modules/System/Layout/Sidebar';
import PageInfo from './modules/System/Common/PageInfo';
import PageTabs from './modules/System/Layout/PageTabs';
import AsyncRouter from './modules/System/Router/AsyncRouter';

//Tree
import OrganizeTree from './modules/System/Tree/Organize-tree';


import entrance from '../../injection/entrance/entrance_core'

import AutoForm from './modules/AutoForm';

Vue.use(Vuex);

const store = new Vuex.Store(
  Object.assign({}, entrance.model, {
      modules: {

        //core
        Core,
        FrameMode,

        //common
        Search: SearchConditions,
        RoleButton,
        RequestHead,
        Table,

        //User
        User,

        //Layout
        CoverPainting,
        Sidebar,
        PageInfo,
        PageTabs,
        AsyncRouter,

        //Tree
        OrganizeTree,

        AutoForm
      },
      getters,
    }
  )
);
export default store;
