import $store from '../../../store/index';
import { backIniView } from '../../../utils/behavior';
import {
  getToken,
  setToken,
  removeToken,
  getUserId,
  setUserId,
  removeUserId,
} from '../../../utils/library/auth';
import { storageHandle } from '../../../utils/storage/storage';
import {
  isMultipleEnterprise,
  oauthlogin,
  multipleEnterpriseLogin,
  ssoLogin,
  logout,
} from '../../../service/System/User/login';
import { stateAssign } from '../../utils/index';

/**
 * deCrypto user-information data in cookie
 * @returns {{}}
 * @private
 */
function _deCryptoUserInfo() {
  return JSON.parse(storageHandle('get', 'sign_user_info')) || {};
}

const User = {
  state: {
    userinfo: {
      token: getToken(),
      userId: getUserId(),
      userAccount: _deCryptoUserInfo().userAccount,
      userName: _deCryptoUserInfo().userName,
      userType: _deCryptoUserInfo().userType,
      userPhone: _deCryptoUserInfo().userPhone,
      userSex: _deCryptoUserInfo().userSex,
      organizationId: _deCryptoUserInfo().organizationId,
      avatar: _deCryptoUserInfo().avatar,
      NWExID: _deCryptoUserInfo().NWExID, //v8 需要
      NWESessionId: _deCryptoUserInfo().NWESessionId, //v8 需要
    },
  },
  mutations: {
    //login and set/store - token info
    SET_LOGIN_DATA: (state, data) => {
      //user information by login
      //Assignment in mutations to change state
      stateAssign(state.userinfo, data, [
        'userId',
        'userAccount',
        'userName',
        'avatar',
        'userType',
        'userPhone',
        'userSex',
        'organizationId',
        'NWExID',
        'NWESessionId',
      ]);

      /**
       * part of the fields in the login auth interface (themecolor / bannercover / sidemenutheme / sidemenucollapse - the interface involved by the user topic) is stored in the topic state management
       * 将登录auth接口中部分字段（themeColor/bannerCover/sideMenuTheme/sideMenuCollapse - 用户主题涉及到的接口)，存储到 主题的状态管理中
       */
      $store.commit('SET_THEME_DATA', data);

      storageHandle('set', 'sign_user_info', JSON.stringify(state.userinfo));
    },

    //set token info
    SET_TOKEN: (state, data) => {
      state.userinfo.token = data;
      setToken(data);
    },

    //set user id
    SET_USER_ID: (state, data) => {
      state.userinfo.userId = data;
      setUserId(data);
    },

    /**
     * 登录前的初始化操作
     * @param state
     * @param type - normal/sso 常规和单点
     * @constructor
     */
    INIT_HANDLE_BEFORE_LOGIN: (state, type = 'normal') => {
      $store.commit('EMPTY_STORAGE'); //清除各类存储信息
      $store.commit('SET_LOGIN_MODE', type); //登录模式设定
    },

    /**
     * 清除各类存储信息
     * @param state
     * @constructor
     */
    EMPTY_STORAGE: state => {
      console.log('EMPTY_STORAGE-EMPTY_STORAGE-EMPTY_STORAGE');

      $store.dispatch('delAllVisitedPages');
      $store.dispatch('delSideMenuData');
      $store.dispatch('emptyPageInfo');

      $store.dispatch('removeAsyncRouter');

      $store.dispatch('emptyOrganizeTreeStore');
      $store.dispatch('removeErrorSign'); //remove route hook error sign

      $store.dispatch('removeLockScreen'); //remove / unlock screen

      $store.dispatch('removeThemeData'); //清除 主题信息；
      $store.dispatch('removePrecinct'); //清除 项目信息；

      $store.dispatch('resetUserBehavior'); //reset user behavior in vuex state

      //remove token
      state.userinfo.token = '';
      removeToken();

      //remove user id
      state.userinfo.userId = '';
      removeUserId();

      //remove user information
      storageHandle('remove', 'sign_user_info');
    },
  },

  actions: {
    /**
     * 检测是否是多企业账号
     * check multiple enterprise :
     * yes => choice enterprise and login
     * not => login
     * @param commit
     * @param query
     */
    isMultipleEnterprise({ commit }, query) {
      return new Promise((resolve, reject) => {
        isMultipleEnterprise(query)
          .then(res => {
            $store.commit('UPDATE_ERROR_LOGIN_TIME', 'empty'); //重置清零错误登录次数
            resolve(res.resultData);
          })
          .catch(err => {
            console.log('检测是否是多企业账号错误');
            $store.commit('UPDATE_ERROR_LOGIN_TIME', 'add'); //累加错误登录次数
            reject(err);
          });
      });
    },

    /**
     * 用户登录（单户）
     * @param commit
     * @param query
     * @returns {Promise<unknown>}
     */
    oauthlogin({ commit }, query) {
      commit('INIT_HANDLE_BEFORE_LOGIN'); //登录前的初始化操作
      return new Promise((resolve, reject) => {
        oauthlogin(query)
          .then(res => {
            const userinfo = res.resultData || {};

            commit('SET_TOKEN', userinfo.token);

            commit('SET_USER_ID', userinfo.userId);

            commit('SET_LOGIN_DATA', userinfo);

            resolve(userinfo);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    /**
     * 多户登录
     * @param commit
     * @param query
     * @returns {Promise<unknown>}
     */
    multipleEnterpriseLogin({ commit }, query) {
      commit('INIT_HANDLE_BEFORE_LOGIN'); //登录前的初始化操作
      $store.dispatch('setLoginMode', type); //set login mode
      return new Promise((resolve, reject) => {
        multipleEnterpriseLogin(query)
          .then(res => {
            const userinfo = res.resultData || {};

            commit('SET_TOKEN', userinfo.token);

            commit('SET_USER_ID', userinfo.userId);

            commit('SET_LOGIN_DATA', userinfo);

            resolve(userinfo);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    /**
     * 单点登录
     * @param commit
     * @param query
     * @returns {Promise<any>}
     */
    ssoLogin({ commit }, query) {
      commit('INIT_HANDLE_BEFORE_LOGIN', 'sso'); //登录前的初始化操作
      return new Promise((resolve, reject) => {
        ssoLogin(query)
          .then(res => {
            const userinfo = res.resultData || {};

            commit('SET_TOKEN', userinfo.token);

            commit('SET_USER_ID', userinfo.userId);

            commit('SET_LOGIN_DATA', userinfo);

            resolve(userinfo);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    //更新用户信息
    updateLoginData({ commit }, query) {
      commit('SET_LOGIN_DATA', query);
    },

    //清除本地存储信息
    emptyStorage({ commit }) {
      return commit('EMPTY_STORAGE');
    },

    /**
     * 登出
     * @param commit
     * @returns {Promise<any>}
     */
    logOut({ commit }) {
      logout()
        .then(res => {
          if (res) {
            $store.dispatch('emptyStorage');
            /**
             * open add route flag - 打开注入路由的标识
             * 再次登录时：需要再次获取和处理异步路由数据
             */
            $store.commit('TOGGLE_ADD_ROUTE_FLAG', true);
            backIniView();
          }
        })
        .catch(err => console.warn(err));
    },
  },
};

export default User;
