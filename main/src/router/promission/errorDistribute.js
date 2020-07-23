import $store from '../../store';
import expand from '../../../expand';

/**
 * error route jump distribution
 * @param type  - error type
 * @returns {*}
 */
export default type => {
  //get login mode
  const loginMode = $store.state.FrameInfo.loginMode;

  $store.dispatch('removeErrorSign'); //remove

  $store.dispatch('setErrorSign', type); //store error sign

  const redirect = expand.route.redirect;

  const errorMap = {
    //general system mode
    normal: {
      loss_token: { path: redirect['loss_token'], log: 'token 缺失或失效' },
      loss_pages: {
        path: redirect['loss_pages'],
        log: '页面模块缺失,请检查模块是否注入',
      },
      error_route_create: {
        path: redirect['404'],
        log: '路由动态创建失败,请检查数据返回是否正常',
      },
      error_route_role: {
        path: redirect['404'],
        log: '异步路由列表配置项与路由跳转路径不匹配,或权限路由缺失',
      },
    },
    //sso system mode
    sso: {
      error_login: { path: redirect['sso_error_login'], log: 'SSO 登录错误' },
      loss_token: { path: redirect['sso_loss_token'], log: 'token 缺失或失效' },
      loss_pages: {
        path: redirect['sso_loss_pages'],
        log: '页面模块缺失,请检查模块是否注入',
      },
      error_route_role: {
        path: redirect['sso_404'],
        log: '异步路由列表配置项与路由跳转路径不匹配,或权限路由缺失',
      },
    },
  };

  try {
    console.warn(errorMap[loginMode][type].log);
    return errorMap[loginMode][type].path;
  } catch (e) {
    return '/front/login';
  }
};
