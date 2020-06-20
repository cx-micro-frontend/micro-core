import { storageHandle } from '../../../utils/storage/storage';
import asyncTransform from '../../../router/promission/routeconver';
import errorPathDistribute from '../../../router/promission/errorDistribute';
import expand from '../../../../expand';
import { flattenMenu } from '../../../layout/components/NS-nav-menu/utils';

const Router = {
  state: {
    asyncRouterList: JSON.parse(storageHandle('get', 'sign_async_router')) || [],
    errorSign: storageHandle('get', 'sign_error_sign') || '',
  },
  mutations: {
    /**
     * set async router list
     * @param state
     * @param route
     * @constructor
     */
    SET_ASYNC_ROUTER: (state, route) => {
      let _r = [];

      /**
       * two case：
       * single application mode（单系统门户模式情况) - should flatten menu data
       * multiple application mode（多系统门户模式情况) - direct use menu data
       *
       */
      if (expand.integrationMode === 'mam') {
        _r = flattenMenu(route);
      } else {
        _r = route;
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
    setAsyncRouter: ({ commit }, route) => {
      return new Promise((resolve, reject) => {
        if (route) {
          commit('SET_ASYNC_ROUTER', route);
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
