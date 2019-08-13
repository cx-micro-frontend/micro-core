import $store from '../../store/index';
import {logStyle} from '../../utils/library/log';


/**
 * generate route + funic information in tab-views store
 * @returns {{name, path, meta}}
 * @private
 */
let _generateRoute = function (matched) {
  let matchedObj = matched[matched.length - 1];
  // const monitor = _monitor(matchedObj);  // object agents
  return {name: matchedObj.name, path: matchedObj.path, meta: matchedObj.meta};
};

/**
 * add tab
 */
export const addPageTabs = matched => {
  $store.dispatch('addVisitedPages', _generateRoute(matched));
};


/**
 * router and page information show in console
 * @param to
 * @private
 */
export const routerAndpageInfo = to => {
  console.log('%c\n## 当前跳转页面的相关信息展示 ##\n', logStyle('3DTest'));
  console.log('%c========================', logStyle('tit'));
  console.log('%c1、跳转页面:', logStyle('info'));
  console.log('%c' + to.name, logStyle('text'));
  console.log('%c2、跳转路径:', logStyle('info'));
  console.log('%c' + to.path, logStyle('text'));
  console.log('%c3、funcId值:', logStyle('info'));
  console.log('%c' + $store.state.Core.funcId, logStyle('text'));
  console.log('%c============', logStyle('line'));
  console.log('%c4、所有页面相关信息列表如下:', logStyle('info'));
  console.log($store.state.PageInfo.pageinfoList);
  console.log('%c5、获取菜单栏数据:', logStyle('info'));
  console.log($store.state.Sidebar.sideBarList);
  console.log('%c6、获取动态路由列表:', logStyle('info'));
  console.log($store.state.AsyncRouter.asyncRouterList);
  console.log('%c========================', logStyle('tit'));
};