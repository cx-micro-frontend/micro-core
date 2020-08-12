import { optCheck, removeChildInBody } from '../utils/index';


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
       * get cache queue
       * @returns {Array|default.computed.cachedViews}
       */
      getCacheQueue() {
        optCheck(options);
        return options.store.state.Cache.cachedViews;
      },


      /**
       * add cache for current page
       * @param view - current page route information
       */
      addCache(view) {
        // console.log('add cache for current page');
        // console.log(Vue);
        // console.log(options);
        // console.log('add cache for current page');

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


      /**
       * remove child node in body excluse some node
       * @param targetNodes - Specific nodes
       */
      removeChildInBody(targetNodes = []) {
        if (Object.prototype.toString.call(targetNodes) !== '[object Array]')
          throw '[neap-cache] uncaught error during cache: targetNodes parameter must be in array format.';

        removeChildInBody(targetNodes);
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
        if (query && typeof query !== 'object')
          throw '[neap-cache] uncaught error during cache: router query must be in object format';

        /**
         * if current route' query has 'noRefresh', refresh current page will lose efficacy
         * so we del current page cache first
         */
        vm.NEAP_CACHE.delCache(vm.$route).then(
          cachedViews => {
            console.log(99999999999)
            console.log(vm.$route)
            console.log(99999999999)

            // vm.NEAP_CACHE.removeChildInBody();
            vm.$router.replace({
              path: '/NEAP_redirect' + vm.$route.fullPath,
              query: query,
              meta:vm.$route.meta
            });
          },
        );
      },

      refreshAll() {
        optCheck(options);
        // removeChildInBody();
        return new Promise(resolve => {
          options.store.dispatch('Cache/routeRefresh');
          resolve();
        });
      },
    },
  };
};

