import { storageHandle } from '../../../utils/storage/storage';
import { stateAssign } from '../../utils';

/**
 * get some operator info in Storage
 * @returns {{}}
 * @private
 */
function _getStorage() {
  return JSON.parse(storageHandle('get', 'sign_login_info')) || {};
}

const LoginInfo = {
  state: {
    source: _getStorage().source || 'NEAP', //PC登录 source 值
    loginSettingList: [], //第三方登录信息列表
    loginErrorTimes: _getStorage().loginErrorTimes || 9999, //用户登录失败次数 - 出现验证码校验
  },
  mutations: {
    /**
     * 设置用户登录相关信息（第三方登录信息列表，用户登录失败次数 - 出现验证码校验等）
     * @param state
     * @param data
     * @constructor
     */
    SET_LOGIN_INFO: (state, data) => {
      stateAssign(state, {
        source: data.source || 'NEAP', //PC登录 source 值
        loginSettingList: data.loginSettingList || [], //第三方登录信息列表
        loginErrorTimes: data.loginErrorTimes || 9999, //用户登录失败次数 - 出现验证码校验
      });

      console.log(44444444);
      console.log(state);
      console.log(44444444);

      storageHandle('set', 'sign_login_info', JSON.stringify(state));
    },
  },
  actions: {},
};
export default LoginInfo;
