const _import = require(`../_import/_import_${process.env.NODE_ENV}`); //获取组件的方法
import { injection } from '../../../dependencies';

const Layout = resolve => require(['../../layout/Layout'], resolve);

import keyRefer from '../../layout/components/NS-nav-menu/nav-menu-keyRefer';
import menuNodeProps from '../../layout/components/NS-nav-menu/utils/menuNodeProps';

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

  //需要处理注册路由的菜单数据（一级 rootRouteName )必须和注入模块一一对应（ repositorie 值）)
  const addRouterList = sideBarList.filter(
    item => includeModules.indexOf(item[keyRefer['rootRouteName']]) > -1
  );

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
      name: childRoute[keyRefer['routeName']] || 'neap_error__routeName',
      path: childRoute[keyRefer['routePath']] || 'neap_error__routePath',
      component: createComponent(childRoute, fatherRoute, false),
      injectComponent: createComponent(childRoute, fatherRoute, true),
      meta: {
        auth: true,
        key: childRoute[keyRefer['routeName']],
        title: childRoute[keyRefer['label']],
        type: 'normal',
        cache: true,
        moduleId: childRoute[keyRefer['moduleId']],
        // rootRouteName: childRoute[keyRefer['rootRouteName']],
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
          name: route[keyRefer['routeName']] || 'neap_error__routeName',
          path: route[keyRefer['routePath']] || 'neap_error__routePath',
          component: createComponent(route, null, false),
          injectComponent: createComponent(route, null, true),
          meta: {
            auth: true,
            key: route[keyRefer['routeName']],
            title: route[keyRefer['label']],
            type: 'normal',
            cache: true,
            moduleId: route[keyRefer['moduleId']],
            // rootRouteName: route[keyRefer['rootRouteName']],
          },
        },
      ],
    };
  };

  const accessedRouters = [];
  asyncRouterMap.forEach(route => {
    let r = {};
    //是否是 根路由
    if (isModuleRoute(route)) {
      //非叶子节点 且 存在子集 => 常规路由注册 (如：业户=>房产管理)
      if (!isLeaf(route) && hasChildRoute(route)) {
        r = normalRoute(route, loopFatherRouter);
      }
      //叶子节点 或 不存在子集 => 特殊路由注册 (如：概览)
      else {
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
  return parseInt(route[keyRefer['menuLevel']]);
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

/**
 * create component
 * @param route
 * @param fatherRoute
 * @param flag - 是否是 在非标-集成模式页面下 => 用于生成特殊 inject 模板，赋值于路由 injectComponent 字段
 * @returns {*}
 */
function createComponent(route, fatherRoute = null, flag = false) {
  const rootRouteName = route[keyRefer['rootRouteName']];
  const templatePath = route[keyRefer['templatePath']];

  /**
   * 跟路由 + 叶子节点 => layout
   * 非标-集成模式页面 => null (路由中不体现 component，在集成界面中手动注册组件形式注册)
   * 常规 => 对应页面 component
   */
  if (isModuleRoute(route) && !isLeaf(route)) {
    //normal first route
    return Layout;
  } else {
    /**
     * 交互/集成模式
     * 100 - 常规跳转v10界面
     * 101 - 常规跳转v10界面（直接嵌入第三方）
     * 102 - 常规跳转v10界面（混合嵌入）- v10部分+外部嵌入
     * 103 - 常规跳转v10界面（混合嵌入）- v10部分+v8
     * 非常规界面，注册路由，模板置空
     */
    if (menuNodeProps.isInjectPage(route) && !flag) {
      return null;
    }
    return _import(templatePath, rootRouteName);
  }
}
