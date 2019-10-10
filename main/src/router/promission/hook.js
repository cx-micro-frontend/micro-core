import router from '../index';
import NProgress from 'nprogress'; // Progress 进度条
import '../../style/Modular/nprogress/nprogress.scss'; // Progress 进度条样式

import { getToken } from '../../utils/library/auth';
import { addPageTabs } from './auxiliary';
import whiteList from '../whiteList';
import promissionhandle from './promission';
import errorPathDistribute from './errorDistribute';

NProgress.configure({ showSpinner: false, speed: 800 }); // NProgress Configuration

router.beforeEach((to, from, next) => {
  // console.log('============== 路由状态 ==================');
  // console.log('beforeEach');
  // console.log(to);
  // console.log(from);

  NProgress.start(); // start progress bar

  if (whiteList.normal.indexOf(to.path) !== -1) {
    console.log('在免登录白名单，直接进入');
    console.log(to.path);
    next();
  } else {
    if (getToken()) {
      promissionhandle(to, from, next);
    } else {
      //错误路由分发
      next(errorPathDistribute('error_token'));
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

router.afterEach((to, from, next) => {
  if (to.meta.auth) {
    addPageTabs(to.matched);
  }
  NProgress.done(); // finish progress bar
});
