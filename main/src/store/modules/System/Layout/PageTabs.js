import { storageHandle } from '../../../../utils/storage/storage';
import $store from '../../../index';

const PageTabs = {
  state: {
    visitedPages: JSON.parse(storageHandle('get', 'sign_visited_pages')) || [],
    currentVisitedPageTag: {}, //当前访问的page信息
    limit: 6,
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
        state.visitedPages.push({ title: view.meta.title, path: view.path, meta: view.meta });
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

    /**
     * delete others visited views
     * @param state
     * @param view     all router (whitch is link to) information
     * @constructor
     */
    DEL_OTHERS_VISITED_VIEWS: (state, view) => {
      state.visitedPages = state.visitedPages.filter(v => v.path === view.path);
      storageHandle('set', 'sign_visited_pages', JSON.stringify(state.visitedPages));
    },

    /**
     * delete all visited views
     * @param state
     * @constructor
     */
    DEL_ALL_VISITED_VIEWS: state => {
      state.visitedPages = [];
      storageHandle('remove', 'sign_visited_pages');
    },

    /**
     * 设置当前页面tag信息
     * @param state
     * @param tag
     * @constructor
     */
    SET_CURRENT_VISITED_PAGE_TAG: (state, tag) => {
      state.currentVisitedPageTag = tag;
    },
  },
  actions: {
    addVisitedPages: ({ commit }, view) => {
      //add
      commit('ADD_VISITED_VIEWS', view);
      //and set current tag
      commit('SET_CURRENT_VISITED_PAGE_TAG', view);
    },

    delVisitedPages({ commit }, view) {
      commit('DEL_VISITED_VIEWS', view);
    },

    /**
     * 新增tab页
     * @param dispatch
     * @param view
     */
    addVisitedTab({ dispatch }, view) {
      dispatch('addVisitedPages', view);

      $store.dispatch('Cache/addCachedView', view);
    },

    /**
     * 关闭tab页
     * 1、清除对应 visited pages
     * 2、清除对应 visited cached pages
     * @param dispatch
     * @param state
     * @param view
     * @returns {Promise<any>}
     */
    delVisitedTab: ({ dispatch, state }, view) => {
      return new Promise(resolve => {
        dispatch('delVisitedPages', view);

        $store.dispatch('Cache/delCachedView', view).then(cachedViews => {
          resolve({
            visitedPages: state.visitedPages,
            cachedViews: [...cachedViews],
          });
        });
      });
    },

    delOthersVisitedPages: ({ commit }, view) => {
      commit('DEL_OTHERS_VISITED_VIEWS', view);
    },

    delAllVisitedPages: ({ commit }) => {
      commit('DEL_ALL_VISITED_VIEWS');
    },
  },
};

export default PageTabs;
