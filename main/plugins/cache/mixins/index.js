import { optCheck } from '../utils/index';

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

      const cachedViews = options.store.state.Cache.cachedViews;

      /**
       * The route query parameter-noRefresh is on => jump && no refresh
       * others ( current page is in the cache list ) => Delete the current page cache and jump
       */
      if (to.query && to.query.noRefresh) {
        next();
      } else {
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
