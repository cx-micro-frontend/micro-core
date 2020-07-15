const injection = require('@ROOT/config/injection/index.js');
const _import = require(`../_import/_import_${process.env.NODE_ENV}`); //获取组件的方法
const Layout = resolve => require(['../../layout/Layout.vue'], resolve);
import keyRefer from '../../layout/components/NS-nav-menu/nav-menu-keyRefer';

/**
 * get async routes
 * @param sideBarList
 * @returns {*}
 */
export default sideBarList => {
  let includeModules = [];

  const whiteList = []; //'overview'

  //需要注入的路由模块
  if (process.env.ENV_CONFIG === 'dev') {
    includeModules = [
      ...whiteList,
      //injection config <=> sidebar data
      ...injection.modules.filter(item => !item.disabled).map(item => item.repositorie),
    ];
  } else {
    //injection config <=> sidebar data
    includeModules = injection.modules.filter(item => !item.disabled).map(item => item.repositorie);
  }

  console.log(123123123);
  console.log(includeModules);
  console.log(123123123);
  const addRouterList = sideBarList.filter(
    item => includeModules.indexOf(item[keyRefer['rootRouteName']]) > -1
  );

  console.log(33333333333);
  console.log(addRouterList);
  console.log(33333333333333);

  const a = filterAsyncRouter(addRouterList);
  console.log(a);
  return a;
};

/**
 * filter async router - create and filter route config
 * @param asyncRouterMap - 原始队列信息
 * @param loopFatherRouter - loop
 * @returns {Array}
 */
function filterAsyncRouter(asyncRouterMap, loopFatherRouter = null) {
  //遍历后台传来的路由字符串，转换为组件对象

  if (!asyncRouterMap || !asyncRouterMap.length) return [];

  const normalRoute = (childRoute, fatherRoute) => {
    const nr = {
      name: childRoute[keyRefer['routeName']],
      path: childRoute[keyRefer['routePath']],
      component: createComponent(childRoute, fatherRoute),
      meta: {
        auth: true,
        key: childRoute[keyRefer['routeName']],
        title: childRoute[keyRefer['label']],
        cache: true,
      },
    };

    if (hasChildRoute(childRoute)) {
      nr.children = filterAsyncRouter(childRoute[keyRefer['children']], childRoute);
    }
    return nr;
  };

  const spRoute = route => {
    return {
      path: '',
      component: Layout,
      children: [
        {
          name: route[keyRefer['routeName']],
          path: route[keyRefer['routePath']],
          component: createComponent(route),
          meta: {
            auth: true,
            key: route[keyRefer['routeName']],
            title: route[keyRefer['label']],
            cache: true,
          },
        },
      ],
    };
  };

  const accessedRouters = [];
  asyncRouterMap.forEach(route => {
    let r = {};
    if (isModuleRoute(route)) {
      /**
       * 非叶子节点 且 存在子集 => 常规路由注册 (如：业户=>房产管理)
       * 叶子节点 或 不存在子集 => 特殊路由注册 (如：概览)
       */
      if (!isLeaf(route) && hasChildRoute(route)) {
        r = normalRoute(route, loopFatherRouter);
      } else {
        r = spRoute(route);
      }
    } else {
      r = normalRoute(route, loopFatherRouter);
    }

    accessedRouters.push(r);
  });

  return accessedRouters;
}

function routelevel(route) {
  // return parseInt(route.syLayer) - 1;

  return parseInt(route[keyRefer['menuLevel']]) - 1;
}

function isModuleRoute(route) {
  return routelevel(route) === 1;
}

function hasChildRoute(route) {
  return route[keyRefer['children']] && route[keyRefer['children']].length;
}

function isLeaf(route) {
  return route[keyRefer['isLeaf']];
}

function createComponent(route, fatherRoute = null) {
  const rootRouteName = route[keyRefer['rootRouteName']];
  const templatePath = route[keyRefer['templatePath']];
  const behavior = route.behavior;

  //root route
  if (isModuleRoute(route)) {
    //normal first route
    return Layout;
  } else {
    if (['101', '102'].indexOf(behavior) > -1) {
      return null;
    }
    return _import(templatePath, rootRouteName);
  }
}
