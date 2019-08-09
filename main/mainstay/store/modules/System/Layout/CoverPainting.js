import {getOperatorInfo} from '../../../../service/System/Layout/coverPainting';
import {storageHandle} from "../../../../utils/storage/storage";

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
      operatorDesc: '',//登录页 - 左侧标题（sign in box)
      operatorName: _getStorage().operatorName,//document title / head title

      // === images ===
      operatorLogo: '',//登录页 - 图标
      operatorPicture: '',//登录页 - 左侧图片（sign in box)
      operatorBackgroudPic: '',//登录页 - 大背景图
      operatorLoginPic: _getStorage().operatorLoginPic,//布局-head 左侧Logo图片
    }
  },
  mutations: {

    SET_SCOVER_PAINTING: (state, data) => {

      //empty first
      storageHandle('remove', 'sign_operator_info');

      let o = {};
      const titkeylist = ['operatorDesc', 'operatorName'];

      Object.keys(data).forEach(key => {
        if (state.operatorInfo.hasOwnProperty(key)) {
          if (titkeylist.indexOf(key) !== -1) {
            o[key] = data[key]
          }
          else {
            o[key] = 'data:image/jpeg;base64,' + data[key];
          }
        }
      });


      state.operatorInfo = {
        ...state.operatorInfo,
        ...o
      };

      storageHandle('set', 'sign_operator_info', JSON.stringify(state.operatorInfo));
      document.title = state.operatorInfo.operatorName;

    },
  },
  actions: {
    getCoverPainting({commit}, data) {
      getOperatorInfo(data).then(res => {
        const info = res.resultData;
        commit('SET_SCOVER_PAINTING', info);
      })
    },

    setCoverPainting({commit}, data) {
      commit('SET_SCOVER_PAINTING', data);
    },
  },
};
export default CoverPainting;
