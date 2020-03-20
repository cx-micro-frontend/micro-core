import { storageHandle } from '../../../../utils/storage/storage';

/**
 * deCrypto side bar-information data in storage
 * @returns {{}}
 * @private
 */
function _deCryptoPrecinct() {
  return JSON.parse(storageHandle('get', 'sign_precinct')) || {};
}

/**
 * Precinct select - 头部左上角项目切换选择
 * in head slot area - select precinct item
 * created: 2020/03/03.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2020 Broccoli spring( gcx )
 */
const Precinct = {
  state: {
    precinctId: _deCryptoPrecinct().precinctId || '',
    precinctName: _deCryptoPrecinct().precinctName || '',
    organizationId: _deCryptoPrecinct().organizationId || '',
  },
  mutations: {
    SET_PRECINCT: (state, data) => {
      state.precinctId = data.precinctId;
      state.precinctName = data.precinctName;
      state.organizationId = data.organizationId;
      storageHandle('set', 'sign_precinct', JSON.stringify(state));
    },
    RESET_PRECINCT: (state, data) => {
      state.precinctId = '';
      state.precinctName = '';
      state.organizationId = '';
      storageHandle('set', 'sign_precinct', JSON.stringify(state));
    },
  },
  actions: {
    setPrecinct: ({ commit }, data) => {
      commit('SET_PRECINCT', data);
    },
    resetPrecinct: ({ commit }, data) => {
      commit('RESET_PRECINCT', data);
    },
  },
};
export default Precinct;
