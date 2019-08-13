import {storageHandle} from '../../../../utils/storage/storage';

const PageTabs = {
  state: {
    visitedPages: JSON.parse(storageHandle('get', 'sign_visited_pages')) || [],
  },
  mutations: {
    /**
     * add visited views
     * @param state
     * @param view     all router (whitch is link to) information
     * @constructor
     */
    ADD_VISITED_VIEWS: (state, view) => {
      const exist = state.visitedPages.slice(-state.limit).some(item => item.path === view.path);
      //if this tabs-view is not existed, push this in list
      if (!exist) {
        state.visitedPages = state.visitedPages.filter(item => item.path !== view.path);
        state.visitedPages.push({name: view.name, path: view.path, meta: view.meta});
      }
      storageHandle('set', 'sign_visited_pages', JSON.stringify(state.visitedPages));
    },
    /**
     * delete visited views
     * @param state
     * @param view     all router (whitch is link to) information
     * @constructor
     */
    DEL_VISITED_VIEWS: (state, view) => {
      let index;
      for (const [i, v] of state.visitedPages.entries()) {
        if (v.path === view.path) {
          index = i;
          break;
        }
      }
      state.visitedPages.splice(index, 1);
      storageHandle('set', 'sign_visited_pages', JSON.stringify(state.visitedPages));
    },

    DEL_ALL_VISITED_VIEWS: state => {
      state.visitedPages = [];
      storageHandle('remove', 'sign_visited_pages');
    },
  },
  actions: {
    addVisitedPages: ({commit}, view) => {
      commit('ADD_VISITED_VIEWS', view);
    },
    delVisitedPages: ({commit}, view) => {
      commit('DEL_VISITED_VIEWS', view);
    },
    delAllVisitedPages: ({commit}) => {
      commit('DEL_ALL_VISITED_VIEWS');
    },
  },
};

export default PageTabs;
