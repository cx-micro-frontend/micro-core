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
    '/sso/404'
  ],
  //需要权限登录的静态路由地址
  auth: [
    '/dashboard'
  ]
}
