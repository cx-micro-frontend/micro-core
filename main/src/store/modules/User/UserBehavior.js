import expand from '../../../../expand';
import { judgeType } from '../../../utils/library/judge';
import { storageHandle } from '../../../utils/storage/storage';

/**
 * deCrypto user-behavior data in storage
 * @returns {{}}
 * @private
 */
function _deCryptoUserBehavior() {
  return JSON.parse(storageHandle('get', 'sign_user_behavior')) || {};
}

/**
 * user behavior cache - 用户操作行为存储
 * created: 2020/05/26.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2020 Broccoli spring( gcx )
 */
const UserBehavior = {
  state: {
    behavior: _deCryptoUserBehavior(),
  },
  mutations: {
    /**
     * ACTIVE USER BEHAVIOR
     * 激活 UserBehavior - 从本地存储中获取，手动触发 state 存储
     * @param state
     * @constructor
     */
    ACTIVE_USER_BEHAVIOR: state => {
      state.behavior = _deCryptoUserBehavior();
    },

    /**
     * set user behavior
     * @param state
     * @param funcID
     * @param data
     * @returns {boolean}
     * @constructor
     */
    SET_USER_BEHAVIOR: (state, { funcID, data }) => {
      if (!funcID) {
        return false;
      }

      if (!data || judgeType(data) !== 'object') {
        return false;
      }

      const behaviorCache = expand.behaviorCache;

      Object.keys(data).forEach(key => {
        if (!behaviorCache[key]) {
          delete data[key];
        }
      });

      if (Object.keys(data).length) {
        state.behavior[funcID] = Object.assign({}, state.behavior[funcID], data);

        storageHandle('set', 'sign_user_behavior', JSON.stringify(state.behavior));
      }
    },

    RESET_USER_BEHAVIOR: state => {
      state.behavior = {};
    },

    EMPTY_USER_BEHAVIOR: state => {
      state.behavior = {};
      storageHandle('remove', 'sign_user_behavior'); //remove user behavior
    },
  },
  actions: {
    /**
     * 激活 UserBehavior - 从本地存储中获取，手动触发 state 存储，
     * @param commit
     * @param data
     */
    activeUserBehavior: ({ commit }, data) => {
      commit('ACTIVE_USER_BEHAVIOR', data);
    },
    /**
     * set user behavior data
     * @param commit
     * @param data
     */
    setUserBehavior: ({ commit }, data) => {
      commit('SET_USER_BEHAVIOR', data);
    },

    resetUserBehavior: ({ commit }) => {
      commit('RESET_USER_BEHAVIOR');
    },
    emptyUserBehavior: ({ commit }) => {
      commit('EMPTY_USER_BEHAVIOR');
    },
  },
};
export default UserBehavior;
