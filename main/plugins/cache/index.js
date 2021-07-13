import CacheMixins from './mixins/index';
import RedirectRoutes from './routes';
import CacheStore from './store/index';
import Extends from './extends/index';
import { optCheck } from './utils/index';

const $opts = {
  switch: true,
  router: {},
  store: {},
  Layout: {},
  queryProps: {
    noRefresh: 'noRefresh',
    noRemove: 'noRemove',
  },

};

const install = function(
  Vue, opts,
) {

  //Former plug-in external param config
  optCheck(opts);

  const option = Object.assign($opts, opts);

  Vue.mixin(CacheMixins(Vue, option));


  const basic = option.router.options.routes;

  const routes = RedirectRoutes(Vue, option) || [];
  option.router.options.routes = [...basic, ...routes];

  option.router.addRoutes(routes);

  option.store.registerModule('Cache', CacheStore(Vue, option));

  Extends(Vue, option);

};

export { install };

export default {
  install,
};
