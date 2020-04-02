import $router from '../../router/index';
import { iniView } from '../../config';
import { getUrlParam } from '../library/urlhandle';
import $store from '../../store/index';

/**
 * 返回登录首页
 */
export const backLoginPage = () => {
  $router.push({ path: iniView });
};

/**
 * 跳转初始设定页面
 */
export const jumpToTnitPage = () => {
  const referRoute = getUrlParam('referRoute');

  //是否为单点，是否存在referRoute
  // this.initPath = referRoute || this.initRoute; initRoute

  const initPath = $store.state.SideBar.initRoute.fullpath;
  //
  const initTargetPath = referRoute || initPath; //登录后的初始路径

  // const initTargetPath = referRoute || '/overview';

  $router.push({ path: initTargetPath });
};
