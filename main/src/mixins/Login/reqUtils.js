// import errorPathDistribute from '../../router/promission/errorDistribute';
import $store from '../../store/index';
import expand from '../../../expand';

/**
 * 初始化准备操作
 * @param type
 */
function initHandle(type = 'normal') {
  $store.dispatch('emptyStorage'); //empty
  $store.dispatch('setLoginMode', type); //set login mode
}

/**
 * 获取菜单栏数据
 * 菜单获取不出来 正常跳转404页面， 单点登录 跳转登录页面
 */
export const getMenu = async () => {
  /**
   * multiple application mode
   * 多系统门户模式情况
   */
  if (expand.integrationMode === 'mam') {
    await $store
      .dispatch('generate_mam_nav_menu')
      .then(_ => {})
      .catch(err => console.warn(err));
  }
  //single application mode
  else {
    //get side bar data
    await $store
      .dispatch('generateSideBar')
      .then(_ => {})
      .catch(err => {
        console.warn(err);
      });
  }
};

/**
 * 常规登录
 * @param query
 * @returns {Promise<void>}
 */
export const authLogin = async query => {
  initHandle();
  return $store.dispatch('oauthlogin', query);
};

/**
 * 多企业登录
 * @param query
 * @returns {Promise<void>}
 */
export const multipleAuthLogin = async query => {
  initHandle();
  return $store.dispatch('multipleEnterpriseLogin', query);
};

/**
 * 单点登录
 * @param query
 * @returns {Promise<void>}
 */
export const ssoLogin = async query => {
  initHandle('sso');
  return $store.dispatch('ssoLogin', query);

  // http://localhost:8001/#/front/loginTransfer-neap?referRoute=/overview&token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjIiLCJpYXQiOjE2MDMzNjM3NDB9.iFl4dRSt50etEylGDRDnhBrWY4wWIdv68T-5Ya7sBJY&appclientType=pc&appid=
  // http://localhost:8001/#/front/loginTransfer-neap?referRoute=/overview&token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjIiLCJpYXQiOjE2MDQzODE2Njd9.zmLik8REtAsUcrHduQhom3kg_kCDUJzCvDeHhdnR-rs&appclientType=pc&appid=

  // http://localhost:8001/#/front/loginTransfer-neap?isShowFrame=false&referRoute=/overview&token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjIiLCJpYXQiOjE2MDQzODgzMjh9.s9UWy2wBDaYrEwAL40_pBrb8X9HZY2Upfg5mHFYEO7c&appclientType=pc&appid=

  // const referPath = getUrlParam('referPath');

  // if (referPath) {
  //   location.href = '//' + referPath;
  // }
  // else {
  //   this.$router.push({ path: '/sso/404' });
  // }
};
