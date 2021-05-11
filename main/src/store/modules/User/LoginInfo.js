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
    loginErrorTimes: _getStorage().loginErrorTimes, //用户登录失败次数 - 出现验证码校验
    currentLoginErrorTimes: _getStorage().currentLoginErrorTimes || 0, //当前用户登录失败次数
  },
  mutations: {
    /**
     * 设置用户登录相关信息（第三方登录信息列表，用户登录失败次数 - 出现验证码校验等）
     * @param state
     * @param data
     * @constructor
     */
    SET_LOGIN_INFO: (state, data) => {
      //首次刷新加载，剔除'当前用户登录失败次数'字段，存储
      stateAssign(state, {
        source: data.source || 'NEAP', //PC登录 source 值
        loginSettingList: data.loginSettingList || [], //第三方登录信息列表
        loginErrorTimes: data.loginErrorTimes || 1, //用户登录失败次数 - 出现验证码校验
      });

      storageHandle('set', 'sign_login_info', JSON.stringify(state));
    },

    /**
     * 更新错误登录次数
     * @param state
     * @param type - add(累加) / empty（重置清零）
     * @constructor
     */
    UPDATE_ERROR_LOGIN_TIME: (state, type = 'add') => {
      //累加或者清零
      type === 'add' ? state.currentLoginErrorTimes++ : (state.currentLoginErrorTimes = 0);

      //定向存储
      storageHandle('set', 'sign_login_info', JSON.stringify(state));
    },
  },
};
export default LoginInfo;
