import { getBrowserInfo } from '../../../../utils/library/browser';
import { detectOS } from '../../../../utils/library/detectOS';

/**
 * Project Mode
 * in isInIframe mode - hide side bar and head
 * created: 2019/07/08.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2019 Broccoli spring( gcx )
 */
const FrameInfo = {
  state: {
    //浏览器信息
    browserInfo: {
      browser: null,
      version: null,
    },
    //操作系统信息
    OS: '',
  },
  mutations: {
    SET_BROWSER_INFO: (state, data) => {
      state.browserInfo.browser = data.browser;
      state.browserInfo.version = data.version;
    },
    SET_OS_INFO: (state, data) => {
      state.OS = data;
    },
  },
  actions: {
    setBrowserInfo({ commit }) {
      const info = getBrowserInfo();
      console.log('setBrowserInfo-setBrowserInfo');
      console.log(info);
      console.log('setBrowserInfo-setBrowserInfo');
      commit('SET_BROWSER_INFO', info);
    },
    setOSInfo({ commit }) {
      console.log('detectOS-detectOS');
      console.log(detectOS());
      console.log('detectOS-detectOS');
      commit('SET_OS_INFO', detectOS());
    },
  },
};
export default FrameInfo;
