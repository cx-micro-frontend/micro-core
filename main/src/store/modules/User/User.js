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
      avatar: _deCryptoUserInfo().avatar,
      userType: _deCryptoUserInfo().userType,
      userPhone: _deCryptoUserInfo().userPhone,
      userSex: _deCryptoUserInfo().userSex,
      themeColor: _deCryptoUserInfo().themeColor || '#0A7AF8',
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
        'themeColor',
        'NWExID',
        'NWESessionId',
      ]);

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

    //empty
    EMPTY_STORAGE: (state, data) => {
      console.log('EMPTY_STORAGE-EMPTY_STORAGE-EMPTY_STORAGE');

      $store.dispatch('delAllVisitedPages');
      $store.dispatch('delSideMenuData');
      $store.dispatch('emptyPageInfo');

      $store.dispatch('removeAsyncRouter');

      $store.dispatch('emptyOrganizeTreeStore');
      $store.dispatch('removeErrorSign'); //remove route hook error sign

      $store.dispatch('removeLockScreen'); //remove / unlock screen

      $store.dispatch('removePrecinct'); //清除项目信息；

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
    //登录
    oauthlogin({ commit }, query) {
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

    //多户登录
    multipleEnterpriseLogin({ commit }, query) {
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

    //单点登录
    ssoLogin({ commit }, query) {
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
            backIniView();
          }
        })
        .catch(err => console.warn(err));
    },

    /**
     * update theme color
     * @param commit
     * @param query
     */
    updateThemeColor({ commit }, query) {
      commit('SET_LOGIN_DATA', query);
    },
  },
};

export default User;
