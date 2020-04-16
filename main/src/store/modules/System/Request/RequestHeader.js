import { getToken } from '../../../../utils/library/auth';

const requestHead = {
  state: {
    base: {
      appId: '07d8737811434732',
      appClientType: 'pc',
    },
  },

  mutations: {
    SET_SEARCG_CONDITIONS: (state, ID) => {
      if (!ID) {
        return false;
      }
      if (state.conditions.hasOwnProperty(ID)) {
        return false;
      }
      state.conditions[ID] = JSON.parse(JSON.stringify(baseConditions));
    },

    EMPTY_SEARCH_CONDITIONS: (state, ID) => {
      console.log(ID, 'empty');
      if (state.conditions[ID]) {
        delete state.conditions[ID];
      }
    },
  },

  actions: {
    setSearchConditions({ commit, state }, ID) {
      return new Promise(resolve => {
        commit('SET_SEARCG_CONDITIONS', ID);
        resolve(state.conditions[ID]);
      });
    },
    emptySearchConditions({ commit }, ID) {
      commit('EMPTY_SEARCH_CONDITIONS', ID);
    },
  },
};

export default requestHead;
