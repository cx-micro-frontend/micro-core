/**
 * Precinct select - 头部左上角项目切换选择
 * in head slot area - select precinct item
 * created: 2020/03/03.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2020 Broccoli spring( gcx )
 */
const Precinct = {
  state: {
    precinctId: '',
    precinctName: '',
    organizationId: '',
  },
  mutations: {
    SET_PRECINCT: (state, data) => {
      state.precinctId = data.precinctId;
      state.precinctName = data.precinctName;
      state.organizationId = data.organizationId;
    },
  },
  actions: {
    setPrecinct: ({ commit }, data) => {
      commit('SET_PRECINCT', data);
    },
  },
};
export default Precinct;
