import { isMultipleEnterprise } from '../../service/System/User/login';
import { authLogin, multipleAuthLogin, ssoLogin, getMenu } from './reqUtils';
import { jumpToTnitPage } from '../../utils/behavior';

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
        console.log(111111111);
        //判断是否是多企业账号
        const res = await isMultipleEnterprise(query);
        const enterprise = res.resultData;

        console.log(22222222222222222222);

        this.hasMultiEnterprise = enterprise.length > 1;

        // 不是多企业账号，
        if (!this.hasMultiEnterprise) {
          const newQuery = {
            username: query.userAccount,
            password: query.password,
          };

          console.log(333333333333333333);

          //直接登录
          await authLogin(newQuery);
          console.log(5555555555555);
          await getMenu();
          console.log(66666666666666);
          return enterprise;
        }

        return enterprise;
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
      await multipleAuthLogin(query);
      await getMenu();
    },

    /**
     * 单点登录
     * @param query
     * @returns {Promise<void>}
     */
    async ssoLogin(query) {
      await ssoLogin(query);
      await getMenu();
      jumpToTnitPage();
    },
  },
};
