import $router from '../../router/index';
import { getUrlParam } from '../library/urlhandle';
import $store from '../../store/index';
import expand from '../../../expand';

/**
 * 返回登录首页
 */
export const backIniView = () => {
  $router.push({ path: expand.route.redirect['init_view'] });
};

/**
 * 跳转初始设定页面
 */
export const jumpToTnitPage = () => {
  const referRoute = getUrlParam('referRoute');

  //是否为单点，是否存在referRoute
  // this.initPath = referRoute || this.initRoute; initRoute

  const initPath = $store.state.SideBar.initRoute.fullpath;

  /**
   * jump order:
   * 1、referRoute
   * 2、init route path in nav menu response
   * 3、custom settings by development - expand
   * @type {*|string}
   */
  const initTargetPath = referRoute || initPath; //登录后的初始路径

  $router.push({ path: initTargetPath });

  /**
   * multiple application mode
   * 多系统门户模式情况
   */
  if (expand.integrationMode === 'mam') {
    $router.push({ name: 'portal' });
  }
  //single application mode
  else {
    $router.push({ path: initTargetPath });
  }
};
