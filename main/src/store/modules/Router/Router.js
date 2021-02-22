import { storageHandle } from '../../../utils/storage/storage';
import asyncTransform from '../../../router/promission/routeconver';
import errorPathDistribute from '../../../router/promission/errorDistribute';
import expand from '../../../../expand';
import { flattenMenu } from '../../../layout/components/NS-nav-menu/utils/dataHandle';

const Router = {
  state: {
    addRouteFlag: true,
    asyncRouterList: JSON.parse(storageHandle('get', 'sign_async_router')) || [],
    errorSign: storageHandle('get', 'sign_error_sign') || '',
  },
  mutations: {
    /**
     * toggle add route flag - 切换注入路由的标识
     * @param state
     * @param flag
     */
    TOGGLE_ADD_ROUTE_FLAG: (state, flag) => {
      state.addRouteFlag = flag;
    },

    /**
     * set async router list
     * @param state
     * @param navData - moduleMenu/sideMenu
     * @constructor
     */
    SET_ASYNC_ROUTER: (state, navData) => {
      let _r = [];

      const { moduleMenu, sideMenu } = navData;
      /**
       * two case：
       * single application mode（单系统门户模式情况) - should flatten menu data
       * multiple application mode（多系统门户模式情况) - direct use menu data
       *
       */
      if (expand.integrationMode === 'mam') {
        _r = flattenMenu(moduleMenu);
      } else {
        _r = sideMenu;
      }

      state.asyncRouterList = [
        ...asyncTransform(_r),
        //any error path => 404 page
        ...[{ path: '*', redirect: errorPathDistribute('error_route_role') }],
      ];

      storageHandle('set', 'sign_async_router', JSON.stringify(state.asyncRouterList));
    },

    REMOVE_ASYNC_ROUTER: state => {
      state.asyncRouterList = [];
      storageHandle('remove', 'sign_async_router');
    },

    // set error sign
    SET_ERROR_SIGN: (state, data) => {
      state.errorSign = data;
      storageHandle('set', 'sign_error_sign', state.errorSign);
    },

    REMOVE_ERROR_SIGN: state => {
      state.errorSign = '';
      storageHandle('remove', 'sign_error_sign');
    },
  },
  actions: {
    /**
     * set async router - 设置动态路由
     * @param commit
     * @param navData - moduleMenu/sideMenu
     * @returns {Promise<any>}
     */
    setAsyncRouter: ({ commit }, navData) => {
      // return commit('SET_ASYNC_ROUTER', navData);
      return new Promise((resolve, reject) => {
        if (navData) {
          commit('SET_ASYNC_ROUTER', navData);
          resolve();
        } else {
          reject();
        }
      });
    },

    removeAsyncRouter: ({ commit }) => {
      commit('REMOVE_ASYNC_ROUTER');
    },
    setErrorSign: ({ commit }, data) => {
      commit('SET_ERROR_SIGN', data);
    },
    removeErrorSign: ({ commit }) => {
      commit('REMOVE_ERROR_SIGN');
    },
  },
};

export default Router;
