import { isMultipleEnterprise } from '../../service/System/User/login';
import { authLogin, multipleAuthLogin, ssoLogin, getMenu } from './reqUtils';
import { jumpToTnitPage } from '../../utils/behavior';
import errorPathDistribute from '../../router/promission/errorDistribute';
import $router from '../../router';

/**
 * mixins - 混入 - 检测是否是多企业账号
 */
export default {
  data() {
    return {
      hasMultiEnterprise: false, //是否为多企业标识
    };
  },
  methods: {
    /**
     * 检测是否是多企业账号
     * check multiple enterprise :
     * yes => choice enterprise and login
     * not => login
     * @param query
     * @returns {Promise<*>}
     */
    async checkByLogin(query) {
      try {
        //判断是否是多企业账号
        const res = await isMultipleEnterprise(query);
        const enterprise = res.resultData;

        this.hasMultiEnterprise = enterprise.length > 1;

        let userinfo = null;
        // 不是多企业账号，
        if (!this.hasMultiEnterprise) {
          const newQuery = {
            username: query.userAccount,
            password: query.password,
            source: query.source, //登录验证标识
          };

          //直接登录
          userinfo = await authLogin(newQuery);

          if (userinfo) {
            await getMenu();
          }
        }

        return {
          enterprise,
          userinfo,
        };
      } catch (e) {
        return e;
      }
    },

    /**
     * 多企业登录
     * @param query
     * @returns {Promise<void>}
     */
    async multipleAuthLogin(query) {
      const userinfo = await multipleAuthLogin(query);

      if (userinfo) {
        await getMenu();
      }

      return userinfo;
    },

    /**
     * 单点登录
     * @param query
     * @returns {Promise<void>}
     */
    async ssoLogin(query) {
      const userinfo = await ssoLogin(query);

      if (userinfo) {
        await getMenu();
        jumpToTnitPage();
      } else {
        $router.push({ path: errorPathDistribute('error_login') });
      }
    },
  },
};
