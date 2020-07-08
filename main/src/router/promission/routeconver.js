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

  const addRouterList = sideBarList.filter(
    item => includeModules.indexOf(item[keyRefer['menuRouter']]) > -1
  );

  return filterAsyncRouter(addRouterList, false);
};

/**
 * filterAsyncRouter
 * @param asyncRouterMap
 * @param isReportChildren 是否是报表下的子路由页面
 * @param loopFatherRouter
 * @returns {Array}
 */
function filterAsyncRouter(asyncRouterMap, isReportChildren, loopFatherRouter = null) {
  //遍历后台传来的路由字符串，转换为组件对象

  if (!asyncRouterMap || !asyncRouterMap.length) return [];

  const normalRoute = (childRoute, fatherRoute) => {
    const menuRouter = childRoute[keyRefer['menuRouter']];

    const nr = {
      name: menuRouter,
      path: `${isModuleRoute(childRoute) ? '/' : ''}${menuRouter}`,
      component: createComponent(childRoute, fatherRoute),
      meta: {
        auth: true,
        key: menuRouter,
        title: childRoute[keyRefer['label']],
        cache: true,
      },
    };

    /**
     * 如果是报表下的子路由页面，则需要去除对应的component的模板页面配置
     * 不需要的话，这段话可以注释！！！！
     */
    if (isReportChildren) {
      delete nr.component;
    }

    if (hasChildRoute(childRoute)) {
      const isReportChildren = menuRouter === 'reporting';
      nr.children = filterAsyncRouter(
        childRoute[keyRefer['children']],
        isReportChildren,
        childRoute
      );
    }
    return nr;
  };

  const spRoute = route => {
    return {
      path: '',
      component: Layout,
      children: [
        {
          name: route[keyRefer['menuRouter']],
          path: route[keyRefer['menuRouter']],
          component: createComponent(route),
          meta: {
            auth: true,
            key: route[keyRefer['menuRouter']],
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
      if (hasChildRoute(route)) {
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

function createComponent(childRoute, fatherRoute = null) {
  const childPath = childRoute[keyRefer['menuRouter']];

  //root route
  if (isModuleRoute(childRoute)) {
    //normal first route
    return Layout;
  } else {
    const fatherPath = fatherRoute ? `${fatherRoute[keyRefer['menuRouter']]}` : '';
    // console.log('当前模板路径：');
    // const varname = `../../../NS_${fatherPath}views/${fatherPath}/${childPath}/${childPath}.vue`
    // console.log(varname);
    // return () => import(`${varname}`);

    return _import(fatherPath, childPath);

    // return _import(`NS_${fatherPath}views/${fatherPath}${childPath}/${childPath}`)
  }
}
