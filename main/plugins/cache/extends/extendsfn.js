import { optCheck } from '../utils/index';

export default (
  Vue,
  options = {
    router: {},
    store: {},
  },
) => {
  return {
    NEAP_CACHE: {
      /**
       * add cache for current page
       * @param view - current page route information
       */
      addCache(view) {
        console.log('add cache for current page');
        console.log(Vue);
        console.log(options);
        console.log('add cache for current page');

        optCheck(options);

        return new Promise(resolve => {
          options.store.dispatch('Cache/addCachedView', view).then(cachedViews => {
            resolve(cachedViews);
          });
        });
      },

      /**
       * delete cache for current page
       * @param view - current page route information
       */
      delCache(view) {
        optCheck(options);
        return new Promise(resolve => {
          options.store.dispatch('Cache/delCachedView', view).then(cachedViews => {
            resolve(cachedViews);
          });
        });
      },

      /**
       * delete all cache
       */
      delAllCache() {
        optCheck(options);
        options.store.dispatch('Cache/delAllCachedViews');
      },
    },

    NEAP_ROUTER: {
      getRouteKey() {
        optCheck(options);
        return options.store.state.Cache.routeKey;
      },

      /**
       * refresh current page
       * refresh current page => remove data and delect Vue instance object
       * @param vm
       * @param query
       */
      refresh(vm, query) {
        if (!vm)
          throw '[neap-cache] uncaught error during cache: vue missing, cache dependency on vue, please check it.';
        if (typeof query !== 'object')
          throw '[neap-cache] uncaught error during cache: router query must be in object format';

        vm.$router.replace({
          path: '/redirect' + vm.$route.fullPath,
          query: query ? Object.assign(query, { refresh: true }) : { refresh: true },
        });
      },

      refreshAll() {
        optCheck(options);
        return new Promise(resolve => {
          options.store.dispatch('Cache/routeRefresh');
          resolve();
        });
      },
    },
  };
};
