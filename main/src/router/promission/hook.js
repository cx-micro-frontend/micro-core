import router from '../index';
import $store from '../../store';

import NProgress from 'nprogress'; // Progress 进度条
import '../../style/Modular/nprogress/nprogress.scss'; // Progress 进度条样式
NProgress.configure({ showSpinner: false, speed: 800 }); // NProgress Configuration

import { getToken } from '../../utils/library/auth';
import { isInNoAuthwhiteList } from '../whiteList';
import promissionhandle from './promission';
import { routerAndpageInfo } from './auxiliary';
import errorPathDistribute from './errorDistribute';

router.beforeEach((to, from, next) => {
  // console.log('============== 路由状态 ==================');
  // console.log('beforeEach');
  // console.log(to);
  // console.log(from);

  /*
   * in switch route state:
   *    history request did not response back should be intercept destroyed
   * in this way, avoid excessive request overhead and reduce memory usage
   */
  $store.commit('clearCancelToken');

  NProgress.start(); // start progress bar

  if (isInNoAuthwhiteList(to)) {
    console.log('在免登录白名单，直接进入');
    console.log(to.path);
    next();
  } else {
    if (getToken()) {
      promissionhandle(to, from, next);
    } else {
      //错误路由分发
      next(errorPathDistribute('loss_token'));
    }
  }
});

router.beforeResolve((to, from, next) => {
  const transKey = 'isShowFrame';
  if (to.query[transKey]) {
    next();
    return;
  }
  if (from.query[transKey]) {
    let toQuery = JSON.parse(JSON.stringify(to.query));
    toQuery[transKey] = from.query[transKey];
    next({
      path: to.path,
      query: toQuery,
    });
  } else {
    next();
  }
});

router.afterEach(async (to, from, next) => {
  console.log('开始全局路由钩子 - afterEach');

  //router and page information show in console
  routerAndpageInfo(to);

  NProgress.done(); // finish progress bar
});
