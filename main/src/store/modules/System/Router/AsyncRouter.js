import {storageHandle} from "../../../../utils/storage/storage";
import asyncTransform from "../../../../router/promission/routeconver";


const AsyncRouter = {
  state: {
    asyncRouterList: JSON.parse(storageHandle('get', 'sign_async_router')) || [],
  },
  mutations: {
    /**
     * set async router list
     * @param state
     * @param route
     * @constructor
     */
    SET_ASYNC_ROUTER: (state, route) => {

      state.asyncRouterList = asyncTransform(route);

      //loacal store
      storageHandle('set', 'sign_async_router', JSON.stringify(state.asyncRouterList));

    },

    REMOVE_ASYNC_ROUTER: state => {
      state.asyncRouterList = [];

      storageHandle('remove', 'sign_async_router');
    },
  },
  actions: {
    setAsyncRouter: ({commit}, route) => {
      return new Promise((resolve, reject) => {
        if (route) {
          commit('SET_ASYNC_ROUTER', route);
          resolve();
        }
        else {
          reject()
        }
      });
    },
    removeAsyncRouter: ({commit}) => {
      commit('REMOVE_ASYNC_ROUTER');
    }
  },
};

export default AsyncRouter;
