import {
  getOperatorInfo,
  getOperatorInfoSimple,
} from '../../../service/System/Layout/coverPainting';
import { storageHandle } from '../../../utils/storage/storage';

/**
 * get some operator info in Storage
 * @returns {{}}
 * @private
 */
function _getStorage() {
  return JSON.parse(storageHandle('get', 'sign_operator_info')) || {};
}

const CoverPainting = {
  state: {
    operatorInfo: {
      // === title ===
      operatorDesc: '', //登录页 - 左侧标题（sign in box)
      operatorName: _getStorage().operatorName, //document title / head title

      // === images ===
      operatorLogo: '', //登录页 - 图标
      operatorPicture: '', //登录页 - 左侧图片（sign in box)
      operatorBackgroudPic: '', //登录页 - 大背景图
      operatorLoginPic: _getStorage().operatorLoginPic, //布局-head 左侧Logo图片
      operatorCopyright:
        _getStorage().operatorCopyright || `©2022~现在 杭州新视窗信息技术有限公司 版权所有`, //版权信息

      source: 'NEAP',
      loginSettingList: [],
    },
  },
  mutations: {
    SET_SCOVER_PAINTING: (state, data) => {
      //empty first
      storageHandle('remove', 'sign_operator_info');

      let o = {};
      const imgKeyList = [
        'operatorLogo',
        'operatorPicture',
        'operatorBackgroudPic',
        'operatorLoginPic',
      ];

      Object.keys(data).forEach(key => {
        if (state.operatorInfo.hasOwnProperty(key)) {
          if (imgKeyList.indexOf(key) !== -1) {
            o[key] = 'data:image/jpeg;base64,' + data[key];
          } else {
            o[key] = data[key];
          }
        }
      });

      state.operatorInfo = {
        ...state.operatorInfo,
        ...o,
      };

      storageHandle('set', 'sign_operator_info', JSON.stringify(state.operatorInfo));
    },
  },
  actions: {
    getCoverPainting({ commit }, data) {
      getOperatorInfo(data).then(res => {
        const info = res.resultData;
        commit('SET_SCOVER_PAINTING', info);
      });
    },

    /**
     * 获取操作员信息 - 永生单点 - 获取信息简化，去除背景
     * @param commit
     * @param query
     * @returns {Promise<any>}
     */
    getCoverPaintingSimple({ commit }, query) {
      return new Promise(resolve => {
        getOperatorInfoSimple(query).then(res => {
          const info = res.resultData;
          commit('SET_SCOVER_PAINTING', info);

          resolve(info);
        });
      });
    },

    setCoverPainting({ commit }, data) {
      commit('SET_SCOVER_PAINTING', data);
    },
  },
};
export default CoverPainting;
