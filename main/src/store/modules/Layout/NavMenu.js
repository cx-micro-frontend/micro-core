import $store from '../../index';
import { sideBarService, mam_nav_menu_service } from '../../../service/System/Role/role-menu';
import { stateAssign } from '../../utils/index';
import { flattenMenu, createInitRoute } from '../../../layout/components/NS-nav-menu/utils';
import { storageHandle } from '../../../utils/storage/storage';
import expand from '../../../../expand';

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
    navMenu: _deCryptoSideBar().navMenu || [],
    sideMenu: _deCryptoSideBar().sideMenu || '',
    initRoute: _deCryptoSideBar().initRoute, //默认初始路由地址
    moduleId: _deCryptoSideBar().moduleId || '',
  },
  mutations: {
    SET_SIDEBAR_DATA: (state, data) => {
      //Assignment in mutations to change state
      stateAssign(state, data, ['navMenu', 'sideMenu', 'initRoute', 'moduleId']);

      storageHandle('set', 'sign_nav', JSON.stringify(state));
    },

    DEL_SIDEBAR_DATA: (state, data) => {
      state.navMenu = [];
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
              initRoute: createInitRoute({
                sideMenu: baseList,
              }),
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

            /**
             * After login in, only the navigation data of all modules can be obtained.
             * The data in the sidebar needs to be obtained by clicking select module
             * @type {{navMenu: *, initRoute: {name: string, fullpath: string}}}
             */
            const navdata = {
              navMenu: filterList,
              initRoute: {
                name: 'portal',
                fullpath: '/portal',
              },
              moduleId: 'portal',
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
     * toggle top nav menu module
     * @param commit
     * @param data - sideMenu / initRoute
     * @returns {Promise<any>}
     */
    toggle_top_nav_menu({ commit }, data) {
      return new Promise(resolve => {
        commit('SET_SIDEBAR_DATA', {
          sideMenu: data.sideMenu,
          initRoute: data.initRoute,
          moduleId: data.moduleId,
        });
        resolve();
      });
    },

    delSideBarData: ({ commit }) => {
      commit('DEL_SIDEBAR_DATA');
    },
  },
};
export default NavMenu;
