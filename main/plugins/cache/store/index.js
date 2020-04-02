/**
 * store for cache
 * @param Vue
 * @param options
 * @returns {*}
 * @constructor
 */
const Cache = (Vue, options) => {
  return {
    namespaced: true,

    state: {
      cachedViews: [],
      routeKey: new Date().getTime(),
    },
    mutations: {
      ADD_CACHED_VIEW: (state, view) => {
        const cacheName = view.name;

        /**
         * current page cache already exist
         */
        if (state.cachedViews.includes(cacheName)) return;

        /**
         * global cache switch or current page cache switch is off
         * Description the current page does not need to be cached
         * so we don‘t need to push cache name in cached views list
         */
        if (options.switch && view.meta.cache) {
          state.cachedViews.push(cacheName);
        }
      },

      DEL_CACHED_VIEW: (state, view) => {
        for (const i of state.cachedViews) {
          if (i === view.name) {
            const index = state.cachedViews.indexOf(i);
            state.cachedViews.splice(index, 1);
            break;
          }
        }
      },
      DEL_ALL_CACHED_VIEWS: state => {
        state.cachedViews = [];
      },

      ROUTE_REFRESH: (state, key) => {
        state.routeKey = key;
      },
    },
    actions: {
      addCachedView({ commit, state }, view) {
        return new Promise(resolve => {
          commit('ADD_CACHED_VIEW', view);
          resolve([...state.cachedViews]);
        });
      },

      delCachedView({ commit, state }, view) {
        return new Promise(resolve => {
          commit('DEL_CACHED_VIEW', view);
          resolve([...state.cachedViews]);
        });
      },

      delAllCachedViews({ commit, state }) {
        return new Promise(resolve => {
          commit('DEL_ALL_CACHED_VIEWS');
          resolve([...state.cachedViews]);
        });
      },

      routeRefresh: ({ commit }) => {
        commit('ROUTE_REFRESH', new Date().getTime());
      },
    },
  };
};

export default Cache;
