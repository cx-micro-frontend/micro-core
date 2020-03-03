import keyRefer from '../../../../layout/components/NS-biz-sidebar/sidebar-keyRefer';
import { storageHandle } from '../../../../utils/storage/storage';

const PageInfo = {
  state: {
    pageinfoList: JSON.parse(storageHandle('get', 'sign_page_info')) || [],
    currentPageInfo: {},
  },
  mutations: {
    SET_PAGE_INFO_LIST: (state, data) => {
      state.pageinfoList = data;
      storageHandle('set', 'sign_page_info', JSON.stringify(data));
    },

    SET_CURRENT_PAGE: (state, data) => {
      state.currentPageInfo = data;
    },
    EMPTY_PAGE_INFO: (state, data) => {
      state.currentPageInfo = [];
      state.currentPageInfo = {};
      storageHandle('remove', 'sign_page_info');
    },
  },
  actions: {
    setPageInfoList({ commit }, data) {
      let pageInfoList = [];
      if (!data || data.length < 1) {
        pageInfoList = [];
      } else {
        data.forEach((firstItem, firstIndex) => {
          if (firstItem[keyRefer['childMenus']] && firstItem[keyRefer['childMenus']].length > 0) {
            firstItem[keyRefer['childMenus']].forEach((secondItem, secondIndex) => {
              pageInfoList.push({
                name: secondItem[keyRefer['menuLabel']], //router-web name
                path:
                  '/' +
                  firstItem[keyRefer['menuRouter']] +
                  '/' +
                  secondItem[keyRefer['menuRouter']], //path
                firstMenuIndex: firstItem[keyRefer['menuIndex']] - 1, //first menu index ( -1 )
                secondMenuIndex: secondItem[keyRefer['menuIndex']] - 1, //second menu index ( -1 )
                funcId: secondItem[keyRefer['funcId']], //funcId
              });
            });
          } else {
            pageInfoList.push({
              name: firstItem[keyRefer['menuLabel']],
              path: '/' + firstItem[keyRefer['menuRouter']],
              funcId: firstItem[keyRefer['funcId']] || 'normalFunic',
            });
          }
        });
      }
      commit('SET_PAGE_INFO_LIST', pageInfoList);
    },

    setCurrentPage({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('SET_CURRENT_PAGE', data);
        resolve(data);
      });
    },

    emptyPageInfo: ({ commit }) => {
      commit('EMPTY_PAGE_INFO');
    },
  },
};
export default PageInfo;
