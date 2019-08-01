import {listColumnService} from '../../../../service/System/TableFetch/table-fetch';


/**
 * Store public table head data
 * in our System, we use one path / query to request head data
 * in this module file, write some business code is sweet and relaxed
 * created: 2019/06/19.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2019 Broccoli spring( gcx )
 */
const Table = {
  state: {
    tableHead: [],
  },
  mutations: {
    SET_TABLE_HEAD: (state, data) => {
      state.tableHead = data;
    },

  },
  actions: {
    setaTableHead({commit}, data) {
      commit('SET_TABLE_HEAD', data);
    },

    generateTableHead({commit}, query) {
      return listColumnService(query).then(res => {
        const head = res.resultData.columns || [];
        console.log('请求到的表头数据：');
        console.log(head);
        commit('SET_TABLE_HEAD', head);
      });
    },
  },
};
export default Table;
