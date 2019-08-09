import router from "../index";
import {getToken} from "../../utils/library/auth";
import {addPageTabs} from "./auxiliary";
import whiteList from '../whiteList';
import promissionhandle from './promission';

router.beforeEach((to, from, next) => {

  // console.log('============== 路由状态 ==================');
  // console.log('beforeEach');
  // console.log(to);
  // console.log(from);
  if (whiteList.normal.indexOf(to.path) !== -1) {
    console.log('在免登录白名单，直接进入');
    console.log(to.path);
    next()
  }
  else {
    if (getToken()) {
      console.log('有 token ！！！');

      promissionhandle(to, from, next);

    }
    else {
      console.log('无 token ！！！');

      next(`/front/login`);

      // next(`/front/login?redirect=${to.path}`)
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
  }
  else {
    next();
  }
});

router.afterEach((to, from, next) => {
  if (to.meta.auth) {
    addPageTabs(to.matched);
  }
});
