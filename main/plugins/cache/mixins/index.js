import { optCheck, removeChildInBody } from '../utils/index';

/**
 * mixins to plugins for cache
 * @param Vue
 * @param options
 * @returns {{beforeRouteEnter(*=, *, *): void}}
 */
export default (
  Vue,
  options = {
    router: {},
    store: {},
  },
) => {
  return {
    beforeRouteEnter(to, from, next) {
      //check option
      optCheck(options);

      // const noRemoveKey = options.queryProps.noRemove;
      const noRefreshKey = options.queryProps.noRefresh;
      const cachedViews = options.store.state.Cache.cachedViews;


      /**
       * The route query/meta parameter-noRefresh is on => jump && no refresh
       * others ( current page is in the cache list ) => Delete the current page cache and jump
       */
      if ((to.query && to.query[noRefreshKey]) || (to.params && to.params[noRefreshKey])) {
        next();
      } else {

        //remove dialog node in body
        // if (!(to.query && to.query[noRemoveKey]) && !(to.params && to.params[noRemoveKey])) {
        //   removeChildInBody();
        // }

        if (cachedViews.indexOf(to.name) > -1) {
          options.store.dispatch('Cache/delCachedView', to).then(_ => {
            next();
          });
        }
        else {
          next();
        }
      }
    },
  };
};
