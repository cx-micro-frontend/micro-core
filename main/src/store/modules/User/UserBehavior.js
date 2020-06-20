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
    SET_USER_BEHAVIOR: (state, { funcID, data }) => {
      if (!funcID) {
        return false;
      }

      if (judgeType(data) !== 'object') {
        return false;
      }

      console.log(22222222222);

      const behaviorCache = expand.behaviorCache;

      Object.keys(data).forEach(key => {
        if (!behaviorCache[key]) {
          delete data[key];
        }
      });

      console.log(data);

      console.log(22222222222);

      if (Object.keys(data).length) {
        console.log(333333333333);
        state.behavior[funcID] = Object.assign({}, state.behavior[funcID], data);

        storageHandle('set', 'sign_user_behavior', JSON.stringify(state.behavior));

        // localStorage.setItem(userBehaviorKey(), JSON.stringify(state.behavior));
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
    setUserBehavior: ({ commit }, data) => {
      commit('SET_USER_BEHAVIOR', data);
    },

    getUserBehavior: ({ state, commit }, data) => {
      console.log('getUserBehavior-getUserBehavior');
      console.log('getUserBehavior-getUserBehavior');
      console.log(state);
      console.log('getUserBehavior-getUserBehavior');
      return state;
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
