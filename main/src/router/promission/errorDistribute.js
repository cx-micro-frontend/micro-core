import $store from '../../store';

/**
 * error route jump distribution
 * @param type  - error type
 * @returns {*}
 */
export default type => {
  //get login mode
  const loginMode = $store.state.FrameMode.loginMode;

  $store.dispatch('removeErrorSign'); //remove

  $store.dispatch('setErrorSign', type); //store error sign

  const errorMap = {
    normal: {
      error_token: { path: '/front/login', log: 'token 缺失或失效' },
      error_route_role: {
        path: '/404',
        log: '异步路由列表配置项与路由跳转路径不匹配,或权限路由缺失',
      },
      error_no_pages: {
        path: '/error',
        log: '页面模块缺失,请检查模块是否注入',
      },
    },
    sso: {
      error_login: { path: '/sso/error', log: 'SSO 登录错误' },
      error_token: { path: '/sso/error', log: 'token 缺失或失效' },
      error_route_role: {
        path: '/sso/error',
        log: '异步路由列表配置项与路由跳转路径不匹配,或权限路由缺失',
      },
      error_no_pages: {
        path: '/sso/error',
        log: '页面模块缺失,请检查模块是否注入',
      },
    },
  };

  try {
    console.log(errorMap[loginMode][type].log);
    return errorMap[loginMode][type].path;
  } catch (e) {
    return '/front/login';
  }
};
