import { storageHandle } from '../../../utils/storage/storage';
import { resourcepath } from '../../../utils/library/resource';

/**
 * get some operator info in Storage
 * @returns {{}}
 * @private
 */
function _getStorage(key) {
  const v = JSON.parse(storageHandle('get', 'sign_operator_info')) || {};
  return v[key] || {};
}

const CoverPainting = {
  state: {
    operatorInfo: {
      // === title ===
      operatorDesc: '', //登录页 - 左侧标题（sign in box)
      operatorName: _getStorage('operatorInfo').operatorName, //document title / head title

      // === images ===
      operatorLogo: _getStorage('operatorInfo').operatorLogo, //布局-head 左侧Logo图片 (大)
      operatorLogoMini: _getStorage('operatorInfo').operatorLogoMini, //布局-head 左侧Logo图片 (小)

      operatorPicture: '', //登录页 - 左侧图片（sign in box)
      operatorBackgroudPic: '', //登录页 - 大背景图

      qrcodePic: '', //app 下载二维码

      operatorLoginPic: _getStorage('operatorInfo').operatorLoginPic, //布局-head 左侧Logo图片 （旧的，即将废弃)

      operatorCopyright:
        _getStorage('operatorInfo').operatorCopyright ||
        `©2022~现在 杭州新视窗信息技术有限公司 版权所有`, //版权信息
    },
  },
  mutations: {
    SET_COVER_PAINTING: (state, data) => {
      //empty first
      storageHandle('remove', 'sign_operator_info');

      let o = {};
      const imgKeyList = [
        'operatorLogo',
        'operatorLogoMini',
        'operatorPicture', //登录页 - 左侧图片（sign in box)
        'operatorBackgroudPic', //登录页 - 大背景图
        'qrcodePic', //app 下载二维码
      ];

      Object.keys(data).forEach(key => {
        if (state.operatorInfo.hasOwnProperty(key)) {
          if (imgKeyList.indexOf(key) !== -1) {
            // o[key] = 'data:image/jpeg;base64,' + data[key];
            o[key] = resourcepath(data[key]);
          } else {
            o[key] = data[key];
          }
        }
      });

      state.operatorInfo = {
        ...state.operatorInfo,
        ...o,
      };

      storageHandle('set', 'sign_operator_info', JSON.stringify(state));
    },
  },
  actions: {
    /**
     * set operator info in vuex  设置操作员（封面)信息
     * @param commit
     * @param data
     */
    setCoverPainting({ commit }, data) {
      commit('SET_COVER_PAINTING', data);
    },
  },
};
export default CoverPainting;