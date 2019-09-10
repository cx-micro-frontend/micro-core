/**
 * you can write path to set  no redirect whitelist
 */
export default {
  //无需权限登录的静态路由地址
  normal: [
    '/front',
    '/front/login',
    '/front/login-station',
    '/404',
    '/sso/404',
    '/error',
    '/sso/error',
  ],
  //需要权限登录的静态路由地址
  auth: [
    '/overview',
    // '/system/designSync',
    // '/system/systemDataDictionary',
    // '/system/systemOrgEmployee',
    // '/system/systemRolePermission',
  ],
};
