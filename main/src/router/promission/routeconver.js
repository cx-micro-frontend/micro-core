const injection = require('@ROOT/config/injection/index.js');
const _import = require(`../_import/_import_${process.env.NODE_ENV}`);//获取组件的方法
const Layout = resolve => require(['../../layout/Layout.vue'], resolve);

/**
 * get async routes
 * @param sideBarList
 * @returns {*}
 */
export default sideBarList => {

  let includeModules = [];

  const whiteList = [
    // "dashboard",
  ];


  //需要注入的路由模块
  if (process.env.ENV_CONFIG === 'dev') {
    includeModules = [...whiteList, ...(injection.modules.filter(item => item.gate).map(item => item.repositorie))]
  }
  else {
    includeModules = injection.modules.filter(item => item.gate).map(item => item.repositorie)
  }

  const addRouterList = sideBarList.filter(item => includeModules.indexOf(item.menuMenusubname) > -1);


  return filterAsyncRouter(addRouterList);
}


function filterAsyncRouter(asyncRouterMap, loopFatherRouter = null) { //遍历后台传来的路由字符串，转换为组件对象


  if (!asyncRouterMap || !asyncRouterMap.length) return;


  const normalRoute = (childRoute, fatherRoute) => {

    const nr = {
      name: childRoute.menuMenuname,
      path: `${isModuleRoute(childRoute) ? '/' : ''}${childRoute.menuMenusubname}`,
      component: createComponent(childRoute, fatherRoute),
      meta: {auth: true, key: childRoute.menuMenusubname, title: childRoute.menuMenuname},
    };


    if (hasChildRoute(childRoute)) {
      nr.children = filterAsyncRouter(childRoute.childMenus, childRoute);
    }
    return nr
  };


  const spRoute = route => {

    return {
      path: '',
      component: Layout,
      children: [
        {
          name: route.menuMenuname,
          path: route.menuMenusubname,
          component: createComponent(route),
          meta: {auth: true, key: route.menuMenusubname, title: route.menuMenuname},
        }
      ]
    };
  };


  const accessedRouters = [];
  asyncRouterMap.forEach(route => {
    let r = {};
    if (isModuleRoute(route)) {
      if (hasChildRoute(route)) {
        r = normalRoute(route, loopFatherRouter);
      }
      else {
        r = spRoute(route);
      }
    }
    else {
      r = normalRoute(route, loopFatherRouter);
    }

    accessedRouters.push(r)
  });

  return accessedRouters;
}


function routelevel(route) {
  return parseInt(route.syLayer) - 1;
}

function isModuleRoute(route) {
  return routelevel(route) === 1;
}

function hasChildRoute(route) {
  return route.childMenus && route.childMenus.length
}


function createComponent(childRoute, fatherRoute = null) {

  const childPath = childRoute.menuMenusubname;

  //root route
  if (isModuleRoute(childRoute)) {
    //normal first route
    return Layout
  }
  else {
    const fatherPath = fatherRoute ? `${fatherRoute.menuMenusubname}` : '';
    // console.log('当前模板路径：');
    // const varname = `../../../NS_${fatherPath}views/${fatherPath}/${childPath}/${childPath}.vue`
    // console.log(varname);
    // return () => import(`${varname}`);

    return _import(childPath, fatherPath);


    // return _import(`NS_${fatherPath}views/${fatherPath}${childPath}/${childPath}`)
  }

}
