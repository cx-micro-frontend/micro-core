/**
 * Generate white list automatically according to route
 * created: 2020/03/11.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2020 Broccoli spring( gcx )
 */

import routes from './routes';
import { judgeType } from '../utils/library/judge';

let white = {
  //无需权限登录的静态路由地址
  noAuth: [],
  //需要权限登录的静态路由地址
  auth: [],
};

function pathExist(path) {
  return path || (judgeType(path) === 'string' && path.length === 0);
}

/**
 * enerate whiteList factory for route
 * @param routes
 * @returns {{noAuth: Array, auth: Array}}
 */
let generateWhiteList = routes => {
  function loop(childRoutes, fatherRoutes = {}) {
    childRoutes.forEach(route => {
      const p = pathExist(fatherRoutes.path) ? `${fatherRoutes.path}/${route.path}` : route.path;

      const isAuth = route.meta && route.meta.auth;

      if (p) {
        white[isAuth ? 'auth' : 'noAuth'].push(p);
      }

      const children = route.children;
      if (children && children.length) {
        loop(children, route);
      }
    });
  }

  loop(routes);
};

generateWhiteList(routes);

console.info('生成路由白名单如下:');
console.info(white);

/**
 * is in whiteList need't to login
 * @param route - route information
 * @returns {boolean}
 */
export const isInNoAuthwhiteList = route => {
  return white.noAuth.indexOf(route.path) !== -1;
};

/**
 * is in whiteList, but need to login
 * @param route - route information
 * @returns {boolean}
 */
export const isInAuthwhiteList = route => {
  return white.auth.indexOf(route.path) > -1 || route.path.indexOf('NEAP_redirect') > -1;
};

// export default {
//
//   normal: [
//     '/front',
//     '/front/login',
//     '/front/login-station',
//     '/404',
//     '/sso/404',
//     '/error',
//     '/sso/error',
//     '/testdemo',
//   ],
//
//   auth: [
//     '/overview',
//     '/testDemo/gridDemo',
//
//     // '/system/designSync',
//     // '/system/systemDataDictionary',
//     // '/system/systemOrgEmployee',
//     // '/system/systemRolePermission',
//   ],
// };
