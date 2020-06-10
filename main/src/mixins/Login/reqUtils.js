import errorPathDistribute from '../../router/promission/errorDistribute';
import $store from '../../store/index';
import $router from '../../router/index';
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
  if (expand.mode === 'mam') {
  }
  //single application mode
  else {
    //get side bar data
    await $store.dispatch('generateSideBar').then(_ => {});
  }
};

/**
 * 常规登录
 * @param query
 * @returns {Promise<void>}
 */
export const authLogin = async query => {
  initHandle();
  await $store.dispatch('oauthlogin', query).then(
    () => {
      console.log('常规登录成功');
    },
    error => {
      console.log('登录失败', error);
    }
  );
};

/**
 * 多企业登录
 * @param query
 * @returns {Promise<void>}
 */
export const multipleAuthLogin = async query => {
  initHandle();
  await $store
    .dispatch('multipleEnterpriseLogin', query)
    .then(() => {})
    .catch(err => {});
};

/**
 * 单点登录
 * @param query
 * @returns {Promise<void>}
 */
export const ssoLogin = async query => {
  initHandle('sso');
  await $store
    .dispatch('ssoLogin', query)
    .then(info => {})
    .catch(_ => {
      $router.push({ path: errorPathDistribute('error_login') });

      // const referPath = getUrlParam('referPath');

      // if (referPath) {
      //   location.href = '//' + referPath;
      // }
      // else {
      //   this.$router.push({ path: '/sso/404' });
      // }
    });
};
