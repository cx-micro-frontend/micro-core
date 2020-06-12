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
      const _r = {
        path: pathExist(fatherRoutes.path) ? `${fatherRoutes.path}/${route.path}` : route.path,
        name: route.name,
      };

      if (_r.path || _r.name) {
        const isAuth = route.meta && route.meta.auth;
        white[isAuth ? 'auth' : 'noAuth'].push(_r);
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
  /**
   * 部分情况比较特殊：
   * 路由若用name作为跳转标识时：
   * 若是模块没有注入时，跳转未注入的页面（不存在)，改跳转路由信息为：path为/ name为目标name
   * 若只判断path 则会错放改页面去path为/ name 为目标name的页面（即在白名单判断逻辑内)，从而避开了异常处理重定向
   * 故，需要同时判断 path 和 name 都在白名单列表中
   */
  return white.noAuth.some(r => r.path === route.path && r.name === route.name);
};

/**
 * is in whiteList, but need to login
 * @param route - route information
 * @returns {boolean}
 */
export const isInAuthwhiteList = route => {
  return (
    white.auth.some(r => r.path === route.path && r.name === route.name) ||
    route.path.indexOf('NEAP_redirect') > -1
  );
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
