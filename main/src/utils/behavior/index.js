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

  const initPath = $store.state.NavMenu.initRoute.fullpath;

  /**
   * jump order:
   * 1、referRoute
   * 2、init route path in nav menu response
   * 3、custom settings by development - expand
   * @type {*|string}
   */
  const initTargetPath = referRoute || initPath; //登录后的初始路径

  /**
   * two case：
   * single application mode（单系统门户模式情况) - go to target path
   * multiple application mode（多系统门户模式情况) - go to portal
   *
   */
  $router.push({ path: initTargetPath });
};
