/**
 * In this module file, we store core data: funcID, houseId ...
 * created: 2019/06/19.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2019 Broccoli spring( gcx )
 * @type {{state: {funcId: string}, mutations: {SET_FUNCID: Core.mutations.SET_FUNCID}, actions: {setFuncId({commit: *}, *=): void}}}
 */
const Core = {
  state: {
    funcId: '',
  },
  mutations: {
    SET_FUNCID: (state, data) => {
      state.funcId = data;
    },

  },
  actions: {
    setFuncId({ commit }, data) {
      commit('SET_FUNCID', data);
    },
  },
};
export default Core;
