import { getToken } from '../../../../utils/library/auth';

const requestHead = {
  state: {
    base: {
      appId: '07d8737811434732',
      appClientType: 'pc',
      'Set-Cookie': getToken(),
      funcId: null,
    },
  },
  mutations: {
    SET_FUNCID_TO_HEAD: (state, data) => {
      console.log(12313213123);
      console.log(12313213123);
      console.log(data);
      console.log(12313213123);
      console.log(12313213123);
      state.base.funcId = data;
    },
  },
  actions: {
    setFuncIdToHead: ({ commit }, data) => {
      commit('SET_FUNCID_TO_HEAD', data);
    },
  },
};

export default requestHead;
