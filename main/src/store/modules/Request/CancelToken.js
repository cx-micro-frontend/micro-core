/**
 * Cancel Token for axios
 * In switch route state, history request did not response back should be intercept destroyed
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2019 Broccoli spring( gcx )
 * @type {{state: {cancelTokenList: Array}, mutations: {registerCancelToken(*, *): void, clearCancelToken({cancelTokenList: *}): void}}}
 */
const CancelToken = {
  state: {
    cancelTokenList: [], // 取消请求token数组
    cancelSwitch: false, //启用开关
  },
  mutations: {
    registerCancelToken(state, payload) {
      if (!state.cancelSwitch) return;
      state.cancelTokenList.push(payload.cancelToken);
    },
    clearCancelToken({ cancelTokenList, cancelSwitch }) {
      if (!cancelSwitch) return;
      cancelTokenList.forEach(item => {
        item({
          type: 'cancelToken',
          resultMsg:
            'in switch route state, history request did not response back should be intercept destroyed.', //切换路由，历史未返回请求拦截销毁
        });
      });
      cancelTokenList = [];
    },
  },
};
export default CancelToken;
