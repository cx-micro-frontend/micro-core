import { jumpToTnitPage } from '../../utils/behavior';
import errorPathDistribute from '../../router/promission/errorDistribute';
import $router from '../../router';
import $store from '../../store';

/**
 * mixins - 混入 - 检测是否是多企业账号
 */
export default {
  methods: {
    /**
     * 单点登录
     * @param query
     * @returns {Promise<void>}
     */
    async ssoLogin(query) {
      //单点登录
      const userinfo = await $store.dispatch('ssoLogin', query);

      // http://localhost:8001/#/front/loginTransfer-neap?referRoute=/overview&token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjIiLCJpYXQiOjE2MDMzNjM3NDB9.iFl4dRSt50etEylGDRDnhBrWY4wWIdv68T-5Ya7sBJY&appclientType=pc&appid=
      // http://localhost:8001/#/front/loginTransfer-neap?referRoute=/overview&token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjIiLCJpYXQiOjE2MDQzODE2Njd9.zmLik8REtAsUcrHduQhom3kg_kCDUJzCvDeHhdnR-rs&appclientType=pc&appid=
      // http://localhost:8001/#/front/loginTransfer-neap?isShowFrame=false&referRoute=/overview&token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjIiLCJpYXQiOjE2MDQzODgzMjh9.s9UWy2wBDaYrEwAL40_pBrb8X9HZY2Upfg5mHFYEO7c&appclientType=lanlin&appid=

      if (userinfo) {
        await $store.dispatch('generate_nav_menu'); //获取菜单数据
        jumpToTnitPage();
      } else {
        $router.push({ path: errorPathDistribute('error_login') });
      }
    },
  },
};
