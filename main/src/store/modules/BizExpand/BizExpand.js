import { bizDataExpand } from '../../../service/BizExpand/bizDataExpand';

/**
 * 业务接口数据拓展 - 在全局请求获取部分业务配置数据
 * Business interface data expansion - request part of business configuration data globally
 * created: 2020/12/23.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2020 Broccoli spring( gcx )
 */
const BizExpand = {
  state: {
    bizExpandData: {},
  },
  mutations: {
    SET_BIZ_EXPAND_DATA: (state, data) => {
      state.bizExpandData = data;
    },
  },
  actions: {
    /**
     * 业务接口数据 - 拓展
     * @param commit
     * @returns {Promise<any>}
     */
    getBizExpandData({ commit }) {
      return new Promise((resolve, reject) => {
        bizDataExpand()
          .then(res => {
            const bizExpandData = res.resultData || {};
            commit('SET_BIZ_EXPAND_DATA', bizExpandData);
            resolve(bizExpandData);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
  },
};

export default BizExpand;
