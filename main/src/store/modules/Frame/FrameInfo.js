import { getBrowserInfo } from '../../../utils/library/browser';
import { detectOS } from '../../../utils/library/detectOS';
import expand from '../../../../expand';

/**
 * frame information 框架系统信息
 * created: 2019/07/08.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2019 Broccoli spring( gcx )
 */
const FrameInfo = {
  state: {
    //当前项目名称
    $PROJECT_NAME: process.env.PROJECT_NAME || 'NEAP',
    //登录模式（常规 / 单点）（目前mode 只直接在路由跳转中做区分)
    loginMode: 'normal',
    integrationMode: expand.integrationMode,
    //当前系统是否为Iframe嵌入
    isInIframe: false,
    //操作系统信息
    OS: '',
    //浏览器信息
    browserInfo: {
      browser: null,
      version: null,
    },
  },
  mutations: {
    SET_LOGIN_MODE: (state, type = 'normal') => {
      state.loginMode = type;
    },
    SET_FRAME_MODE: (state, data) => {
      state.isInIframe = data;
    },
    SET_BROWSER_INFO: (state, data) => {
      state.browserInfo.browser = data.browser;
      state.browserInfo.version = data.version;
    },
    SET_OS_INFO: (state, data) => {
      state.OS = data;
    },
  },
  actions: {
    setLoginMode({ commit }, type = 'normal') {
      commit('SET_LOGIN_MODE', type);
    },
    setFrameMode({ commit }, data) {
      commit('SET_FRAME_MODE', data);
    },
    setBrowserInfo({ commit }) {
      const info = getBrowserInfo();
      commit('SET_BROWSER_INFO', info);
    },
    setOSInfo({ commit }) {
      commit('SET_OS_INFO', detectOS());
    },
  },
};
export default FrameInfo;
