/**
 * Project Mode
 * in isInIframe mode - hide side bar and head
 * created: 2019/07/08.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2019 Broccoli spring( gcx )
 */
const FrameMode = {
  state: {
    loginMode: 'normal',
    isInIframe: false,
  },
  mutations: {
    SET_LOGIN_MODE: (state, data) => {
      state.loginMode = data;
    },
    SET_FRAME_MODE: (state, data) => {
      state.isInIframe = data;
    },
  },
  actions: {
    setLoginMode({ commit }, data) {
      commit('SET_LOGIN_MODE', data);
    },
    setFrameMode({ commit }, data) {
      commit('SET_FRAME_MODE', data);
    },
  },
};
export default FrameMode;
