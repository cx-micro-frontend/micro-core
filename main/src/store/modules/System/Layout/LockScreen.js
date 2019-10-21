import { storageHandle } from '../../../../utils/storage/storage';

const LockScreen = {
  state: {
    isLocked: JSON.parse(storageHandle('get', 'sign_isLocked')) || false,
  },
  mutations: {
    LOCK_SCREEN: state => {
      state.isLocked = true;
      storageHandle('set', 'sign_isLocked', state.isLocked);
    },
    UN_LOCK_SCREEN: state => {
      state.isLocked = false;
      storageHandle('set', 'sign_isLocked', state.isLocked);
    },
    REMOVE_LOCK_SCREEN: state => {
      state.isLocked = false;
      storageHandle('remove', 'sign_isLocked');
    },
  },
  actions: {
    lockScreen({ commit }) {
      commit('LOCK_SCREEN');
    },
    unLockScreen({ commit }) {
      commit('UN_LOCK_SCREEN');
    },
    removeLockScreen({ commit }) {
      commit('REMOVE_LOCK_SCREEN');
    },
  },
};
export default LockScreen;
