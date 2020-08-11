import { modules } from '../../../../dependencies';
import { storageHandle } from '../../../utils/storage/storage';
import keyRefer from '../../../layout/components/NS-nav-menu/nav-menu-keyRefer';

/**
 * create page information list
 * @param data - 菜单栏数据
 * @returns {Array}
 */
function createPageInfo(data) {
  let pageInfoList = [];

  if (!data || !data.length) {
    pageInfoList = [];
  } else {
    /**
     * 节点递归循环处理
     * 生成页面信息队列
     * @param list
     */
    const done = list => {
      list.forEach((item, index) => {
        const rootRouteName = item[keyRefer['rootRouteName']];
        const currentModule = modules.filter(m => m.repositorie === rootRouteName);

        const isMicro = currentModule && currentModule.length > 0;
        const isOwner = isMicro && currentModule[0].isOwner;

        pageInfoList.push({
          title: item[keyRefer['label']], //router-web name
          visible: item[keyRefer['visible']],
          isLeaf: item[keyRefer['isLeaf']],

          name: item[keyRefer['routeName']], //router-web name

          routePath: item[keyRefer['routePath']], //router-web name
          templatePath: item[keyRefer['templatePath']],
          targetUrl: item[keyRefer['targetUrl']],

          funcId: item[keyRefer['funcId']],
          moduleId: item[keyRefer['moduleId']], //所属 顶部子系统模块 - ID
          menuId: item[keyRefer['menuId']],

          behavior: item[keyRefer['behavior']],
          topHiddenController: item[keyRefer['topHiddenController']],

          isOwner: isOwner,
          isMicro: isMicro,
        });

        const children = item[keyRefer['children']];

        if (children && children.length > 0) {
          done(children);
        }
      });
    };

    done(data);

    return pageInfoList;
  }
}

/**
 * Page Info for vuex
 * @type {{state: {pageinfoList: any | Array, currentPageInfo: {}}, mutations: {SET_PAGE_INFO_LIST: PageInfo.mutations.SET_PAGE_INFO_LIST, SET_CURRENT_PAGE: PageInfo.mutations.SET_CURRENT_PAGE, EMPTY_PAGE_INFO: PageInfo.mutations.EMPTY_PAGE_INFO}, actions: {setPageInfoList({commit: *}, *=): void, setCurrentPage({commit: *}, *=): *, emptyPageInfo: PageInfo.actions.emptyPageInfo}}}
 */
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
      const _PI = createPageInfo(data);

      commit('SET_PAGE_INFO_LIST', _PI);
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
