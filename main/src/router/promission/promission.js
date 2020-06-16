import router from '../index';
import $store from '../../store/index';
import { routerAndpageInfo } from './auxiliary';
import { isInAuthwhiteList } from '../whiteList';
import routefiles from '../../../../injection/config/routefiles';
import errorPathDistribute from './errorDistribute';

let addRouFlag = false;

/**
 * handle to set Async Router
 * warning:
 * 1、首次加载会挂载动态路由
 * 2、动态路由映射对照表需于path/name 指向路径/name 保持绝对的一致，否则回退-404
 * 3、出现页面空白，注意检查映射表与path/name
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
    console.log(from);
    console.log(to);
    console.log(`${from.path}  ${to.path}`);
    console.log('获取到的菜单栏数据：', $store.getters.sideBarList);
    console.log(`addRouFlag 状态：${addRouFlag}`);
    console.log('获取异步路由列表：', $store.state.Router.asyncRouterList);
    console.log(pageinfoList);

    if (!addRouFlag) {
      console.log('设置动态路由');

      //handle async router
      $store
        .dispatch('setAsyncRouter', $store.getters.sideBarList)
        .then(_ => {
          const asyncRouterList = $store.state.Router.asyncRouterList;
          console.log('获取异步路由列表：', asyncRouterList);

          if (asyncRouterList && asyncRouterList.length) {
            console.log('开始  addRoutes ');

            router.addRoutes(asyncRouterList);

            //router and page information show in console after dynamically add routing permission
            if (addRouFlag) {
              routerAndpageInfo(to);
            }

            addRouFlag = true;

            next({ ...to, replace: true }); // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            // next({ replace: true });
          } else {
            //错误路由分发
            next(errorPathDistribute('error_route_role'));
          }
        })
        .catch(_ => {
          //错误路由分发
          next(errorPathDistribute('error_route_role'));
        });
    } else {
      const isAuthWhite = isInAuthwhiteList(to);
      /*
       * 1、after add async router, in error state:
       * (1)、jump name is not in async router list and not in white list
       * (2)、other error
       *
       * 2、in those state，back to special page base on error path distribute
       */
      if (pageinfoList.some(info => info.name === to.name) || isAuthWhite) {
        /*
         * 1、judge whether the current routing contains the corresponding template page,
         * If not in route files list or not in in white list, back to special page base on error path distribute
         */
        if ((routefiles && routefiles.some(route => route.name === to.name)) || isAuthWhite) {
          //router and page information show in console
          routerAndpageInfo(to);
          $store.dispatch('removeErrorSign'); //remove
          next();
        } else {
          //错误路由分发
          next(errorPathDistribute('error_loss_pages'));
        }
      } else {
        //错误路由分发
        next(errorPathDistribute('error_route_role'));
      }
    }
  });
};
