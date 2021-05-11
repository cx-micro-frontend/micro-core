import $store from '../../../store/index';
import {
  getOperatorInfo,
  getOperatorInfoSimple,
} from '../../../service/System/Layout/coverPainting';

const Operator = {
  actions: {
    /**
     * 获取操作员信息（常规）
     * @param commit
     * @param query
     * @returns {Promise<any>}
     */
    getCoverPainting({ commit }, query) {
      return new Promise(resolve => {
        getOperatorInfo(query).then(res => {
          const info = res.resultData;

          $store.commit('SET_COVER_PAINTING', info);

          $store.commit('SET_LOGIN_INFO', info);

          resolve(info);
        });
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

          $store.commit('SET_COVER_PAINTING', info);

          $store.commit('SET_LOGIN_INFO', info);

          resolve(info);
        });
      });
    },
  },
};
export default Operator;
