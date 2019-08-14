import router from '../index';
import $store from '../../store/index';
import { routerAndpageInfo } from './auxiliary';
import whiteList from '../whiteList';

let addRouFlag = false;

/**
 * handle to set Async Router
 * warning:
 * 1、首次加载会挂载动态路由
 * 2、动态路由映射对照表需于path指向路径保持绝对的一直，否则回退 404
 * 3、出现页面空白，注意检查映射表与path
 * @param to
 * @param from
 * @param next
 */
export default (to, from, next) => {
  const pageinfoList = $store.state.PageInfo.pageinfoList;

  //get current page infomation data
  const currentPageInfo =
    pageinfoList.find(item => {
      return item.path === to.path;
    }) || {};

  $store.dispatch('setCurrentPage', currentPageInfo).then(info => {
    //store current funcId from current page info
    $store.dispatch('setFuncId', info.funcId);

    console.log('=============================');
    console.log(`${from.path}  ${to.path}`);
    console.log(`addRouFlag 状态：${addRouFlag}`);
    console.log('获取异步路由列表：', $store.state.AsyncRouter.asyncRouterList);
    console.log(pageinfoList);

    if (!addRouFlag) {
      // console.log('设置动态路由');

      //handle async router
      $store
        .dispatch('setAsyncRouter', $store.state.Sidebar.sideBarList)
        .then(_ => {
          const asyncRouterList = $store.state.AsyncRouter.asyncRouterList;
          // console.log('获取异步路由列表：', asyncRouterList);

          if (asyncRouterList && asyncRouterList.length) {
            console.log('开始  addRoutes ');

            router.addRoutes(asyncRouterList);

            //router and page information show in console
            routerAndpageInfo(to);

            addRouFlag = true;

            next({ ...to, replace: true }); // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          } else {
            asyncRouterErrorToJump(to, from, next);
          }
        })
        .catch(_ => {
          asyncRouterErrorToJump(to, from, next);
        });
    } else {
      /*
       * 1、after add async router, in error state:
       * (1)、jump path is not in async router list and not in white list
       * (2)、other error
       *
       * 2、in those state，back to special page：
       * (1)、in sso login => '/sso/404'
       * (2)、in mormal login => '/front/login'
       */
      if (
        pageinfoList.some(info => info.path === to.path) ||
        whiteList.auth.indexOf(to.path) !== -1
      ) {
        //router and page information show in console
        routerAndpageInfo(to);
        next();
      } else {
        asyncRouterErrorToJump(to, from, next);
      }
    }
  });
};

/**
 * jump when async router is error
 * @param to
 * @param from
 * @param next
 */
function asyncRouterErrorToJump(to, from, next) {
  const loginMode = $store.state.FrameMode.loginMode;
  console.log('异步路由列表配置项与路由跳转路径不匹配不存在');
  next({ path: loginMode === 'sso' ? '/sso/404' : '/front/login' });
}
