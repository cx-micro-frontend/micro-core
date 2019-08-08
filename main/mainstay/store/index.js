import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

import Core from './modules/System/Common/Core';

import FrameMode from './modules/System/FrameMode/FrameMode';

import User from './modules/System/User/User';

import Sidebar from './modules/System/Layout/Sidebar';
import PageInfo from './modules/System/Common/PageInfo';
import PageTabs from './modules/System/Layout/PageTabs';
import AsyncRouter from './modules/System/Router/AsyncRouter';

import OrganizeTree from './modules/System/Tree/Organize-tree';

import SearchConditions from './modules/System/Common/SearchConditions';
import RoleButton from './modules/System/Role/RoleButton';
import Table from './modules/System/Table/Table';
import RequestHead from './modules/System/Common/RequestHeader';

import entrance from '../../injection/entrance/entrance_core'

import AutoForm from './modules/AutoForm';

Vue.use(Vuex);

const store = new Vuex.Store(
  Object.assign({}, entrance.model, {
      modules: {
        Core,

        FrameMode,

        User,

        Sidebar,
        PageInfo,
        PageTabs,
        AsyncRouter,


        OrganizeTree,

        Search: SearchConditions,
        RoleButton,

        Table,
        RequestHead,

        AutoForm
      },
      getters,
    }
  )
);
export default store;
