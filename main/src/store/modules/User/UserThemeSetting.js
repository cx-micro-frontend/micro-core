import $store from '../../../store/index';
import { updateThemeColor } from '../../../service/System/Layout/coverPainting';

import { storageHandle } from '../../../utils/storage/storage';

import { stateAssign } from '../../utils/index';

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
      bannerCover: _deCryptoUserThemeSetting().bannerCover || false, //是否通栏显示
      sideMenuTheme: _deCryptoUserThemeSetting().sideMenuTheme || 'dark', // 侧边栏 主题色 - bright / dark
      isSideMenuCollapse: _deCryptoUserThemeSetting().isSideMenuCollapse || true, //当前的侧边栏 伸缩 状态
    },
  },
  mutations: {
    //login and set/store - token info
    SET_THEME_DATA: (state, data) => {
      console.log(33333333);
      console.log(data);
      //user information by login
      //Assignment in mutations to change state
      stateAssign(state.userTheme, data, [
        'themeColor',
        'bannerCover',
        'sideMenuTheme',
        'isSideMenuCollapse',
      ]);

      console.log(4444444444);
      console.log(4444444444);
      console.log(state);
      console.log(4444444444);

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
      switch (prop) {
        case 'themeColor':
          updateThemeColor(_q);
          break;
        case 'bannerCover':
          updateThemeColor(_q);
          break;
        case 'sideMenuTheme':
          updateThemeColor(_q);
          break;
        case 'isSideMenuCollapse':
          updateThemeColor(_q);
          break;
        default:
          break;
      }
    },
  },
};

export default UserThemeSetting;
