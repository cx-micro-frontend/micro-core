import router from "../index";
import $store from "../../store/index";
import {routerAndpageInfo} from "./auxiliary";

let addRouFlag = false;

export default (to, from, next) => {
  alert(`${from.path}  ${to.path}`);
  alert(addRouFlag);
  //get current page infomation data
  const currentPageInfo = $store.state.PageInfo.pageinfoList.find((item) => {
    return item.path === to.path;
  }) || {};

  $store.dispatch('setCurrentPage', currentPageInfo).then(info => {

    //store current funcId from current page info
    $store.dispatch('setFuncId', info.funcId);

    console.log('设置动态路由');
    //handle async router
    $store.dispatch('setAsyncRouter', $store.state.Sidebar.sideBarList)
      .then(_ => {

        const asyncRouterList = $store.state.AsyncRouter.asyncRouterList;


        console.log('获取异步路由列表：', asyncRouterList);
        console.log(`addRouFlag 状态：${addRouFlag}`);

        if (!addRouFlag) {
          if (asyncRouterList && asyncRouterList.length) {

            console.log('开始  addRoutes ');

            router.addRoutes(asyncRouterList);

            //router and page information show in console
            routerAndpageInfo(to);

            addRouFlag = true;

            next({...to, replace: true});// hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record

          }
          else {
            console.log('异步路由列表不存在，退回登录页 ');
            next({path: '/front/login'})
          }
        }

        //router and page information show in console
        routerAndpageInfo(to);

        next();
      })
      .catch(_ => {
        console.log('异步路由列表不存在，退回登录页 ');
        next({path: '/front/login'})
      });

  });
}


