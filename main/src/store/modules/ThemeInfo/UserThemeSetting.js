import { updateUserTheme } from '../../../service/System/User/updateUserTheme';
import { storageHandle } from '../../../utils/storage/storage';
import { stateAssign } from '../../utils';

/**
 * deCrypto user-information data in cookie
 * @returns {{}}
 * @private
 */
function _deCryptoUserThemeSetting() {
  return JSON.parse(storageHandle('get', 'sign_user_theme')) || {};
}

const UserThemeSetting = {
  state: {
    userTheme: {
      themeColor: _deCryptoUserThemeSetting().themeColor || '#0A7AF8', //主题色
      bannerCover: _deCryptoUserThemeSetting().bannerCover ?? true, //是否通栏显示
      sideMenuTheme: _deCryptoUserThemeSetting().sideMenuTheme || 'dark', // 侧边栏 主题色 - bright / dark
      sideMenuCollapse: _deCryptoUserThemeSetting().sideMenuCollapse ?? false, //当前的侧边栏 伸缩 状态
    },
  },
  mutations: {
    //login and set/store - token info
    SET_THEME_DATA: (state, data) => {
      //user information by login
      //Assignment in mutations to change state
      stateAssign(state.userTheme, data, [
        'themeColor',
        'bannerCover',
        'sideMenuTheme',
        'sideMenuCollapse',
      ]);

      storageHandle('set', 'sign_user_theme', JSON.stringify(state.userTheme));
    },

    REMOVE_THEME_DATA: state => {
      state.userTheme.themeColor = '#0A7AF8';
      state.userTheme.bannerCover = true;
      state.userTheme.sideMenuTheme = 'dark';
      state.userTheme.sideMenuCollapse = true;

      storageHandle('set', 'sign_user_theme', JSON.stringify(state.userTheme));
    },
  },

  actions: {
    /**
     * update theme
     * @param commit
     * @param query
     */
    updateTheme({ commit }, query) {
      if (!query) return;

      const { data, prop, syncRequest } = query;

      const _q = { [prop]: data };

      commit('SET_THEME_DATA', _q);

      if (!syncRequest) return;
      //这里需要整改优化
      switch (prop) {
        case 'themeColor':
          updateUserTheme(_q);
          break;
        case 'bannerCover':
          updateUserTheme(_q);
          break;
        case 'sideMenuTheme':
          updateUserTheme(_q);
          break;
        case 'sideMenuCollapse':
          updateUserTheme(_q);
          break;
        default:
          break;
      }
    },

    /**
     * remove theme data
     * @param commit
     */
    removeThemeData({ commit }) {
      commit('REMOVE_THEME_DATA');
    },
  },
};

export default UserThemeSetting;
