import { sideBarService, mam_nav_menu_service } from '../../../../service/System/Role/role-menu';
import $store from '../../../../store/index';
import { storageHandle } from '../../../../utils/storage/storage';
import { flattenMenu, createInitRoute } from '../../../../layout/components/NS-nav-menu/utils';
import expand from '../../../../../expand';

/**
 * deCrypto side bar-information data in storage
 * @returns {{}}
 * @private
 */
function _deCryptoSideBar() {
  return JSON.parse(storageHandle('get', 'sign_nav')) || {};
}

const NavMenu = {
  state: {
    sideMenu: _deCryptoSideBar().sideMenu || [],
    activeModule: _deCryptoSideBar().activeModule || '',
    initRoute: _deCryptoSideBar().initRoute, //默认初始路由地址
  },
  mutations: {
    SET_SIDEBAR_DATA: (state, data) => {
      // state.sideMenu = data.sideMenu;
      // state.activeModule = data.activeModule;
      // state.initRoute = data.initRoute;

      Object.keys(data).forEach(k => {
        state[k] = data[k];
      });

      storageHandle('set', 'sign_nav', JSON.stringify(state));
    },
    DEL_SIDEBAR_DATA: (state, data) => {
      state.sideMenu = [];
      state.initRoute = null;
      storageHandle('remove', 'sign_nav');
    },
  },
  actions: {
    /**
     * single application mode - nav menu data generate and handle
     * @param commit
     * @returns {Promise<any>}
     */
    generateSideBar({ commit }) {
      return new Promise((resolve, reject) => {
        sideBarService()
          .then(res => {
            const baseList = res.resultData || [];

            //filter nav menu by custom config
            const filterList = expand.layout.sidebar.filter(baseList);

            //handle page info
            $store.dispatch('setPageInfoList', filterList);

            //packaging data
            const navdata = {
              sideMenu: filterList,
              initRoute: createInitRoute(baseList),
            };

            commit('SET_SIDEBAR_DATA', navdata);

            console.log('处理好的菜单栏数据如下：');
            console.log(navdata);

            resolve(navdata);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    /**
     * multiple application mode - nav menu data generate and handle
     * @param commit
     * @returns {Promise<any>}
     */
    generate_mam_nav_menu({ commit }) {
      return new Promise((resolve, reject) => {
        mam_nav_menu_service()
          .then(res => {
            const baseList = res.resultData || [];

            //filter nav menu by custom config
            const filterList = expand.layout.sidebar.filter(baseList);

            /**
             * in multiple application mode  - nav menu  data need flattening handle
             * create page information list
             */
            $store.dispatch('setPageInfoList', flattenMenu(filterList));

            //packaging data
            const navdata = {
              sideMenu: filterList,
              initRoute: {
                name: 'portal',
                fullpath: '/portal',
              },
            };
            commit('SET_SIDEBAR_DATA', navdata);

            console.log('处理好的菜单栏数据如下：');
            console.log(filterList);

            resolve(navdata);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    /**
     * toggle top nav menu module
     * @param commit
     * @param data - activeModule / initRoute
     * @returns {Promise<any>}
     */
    toggle_top_nav_menu({ commit }, data) {
      return new Promise(resolve => {
        commit('SET_SIDEBAR_DATA', data);
        resolve();
      });
    },

    delSideBarData: ({ commit }) => {
      commit('DEL_SIDEBAR_DATA');
    },
  },
};
export default NavMenu;
