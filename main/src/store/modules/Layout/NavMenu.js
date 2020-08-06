import $store from '../../index';
import { sideBarService, mam_nav_menu_service } from '../../../service/System/Role/role-menu';
import { stateAssign } from '../../utils/index';
import {
  handleMenuData,
  flattenMenu,
  filterModuleByToggle,
} from '../../../layout/components/NS-nav-menu/utils/dataHandle';
import {
  createInitRoute,
  getInitRoute,
} from '../../../layout/components/NS-nav-menu/utils/initRoute';
import { storageHandle } from '../../../utils/storage/storage';
import expand from '../../../../expand';
import keyRefer from '../../../layout/components/NS-nav-menu/nav-menu-keyRefer';

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
    moduleMenu: _deCryptoSideBar().moduleMenu || [],
    sideMenu: _deCryptoSideBar().sideMenu || [],
    initRoute: _deCryptoSideBar().initRoute, //默认初始路由地址
    moduleId: _deCryptoSideBar().moduleId || '',
    isExpand: _deCryptoSideBar().isExpand || false,
  },
  mutations: {
    SET_MENU_DATA: (state, data) => {
      //Assignment in mutations to change state
      stateAssign(state, data, ['moduleMenu', 'sideMenu', 'initRoute', 'moduleId']);

      storageHandle('set', 'sign_nav', JSON.stringify(state));
    },

    DEL_SIDE_MENU_DATA: (state, data) => {
      state.moduleMenu = [];
      state.initRoute = null;
      storageHandle('remove', 'sign_nav');
    },

    TOGGLE_SIDE_MENU_EXPAND_STATE: (state, data) => {
      state.isExpand = data;
      storageHandle('set', 'sign_nav', JSON.stringify(state));
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
            const r = res.resultData || [];
            const baseList = handleMenuData(r);

            //filter nav menu by custom config
            const filterList = expand.layout.sidebar.filter(baseList);

            //handle page info
            $store.dispatch('setPageInfoList', filterList);

            //packaging data
            const navdata = {
              sideMenu: filterList,
              initRoute: createInitRoute(baseList),
            };

            commit('SET_MENU_DATA', navdata);

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
            const r = res.resultData || {};

            const rList = r[keyRefer['children']] || [];

            const baseList = handleMenuData(rList);

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
             * @type {{moduleMenu: *, initRoute: {name: string, fullpath: string}}}
             */
            const navdata = {
              moduleMenu: filterList,
              initRoute: getInitRoute(r),
              moduleId: 'portal',
            };

            commit('SET_MENU_DATA', navdata);

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
     * toggle module handle when route is change (two routes belonging to different modules)
     * 通过 moduleId 来切换 模块：
     *  - sideMenu - 切换侧边栏数据
     *  - initRoute - 切换当前侧边栏导航菜单的初始路由
     * @param commit
     * @param state
     * @param moduleId - 顶部模块id
     * @returns {Promise<any>}
     */
    toggle_module_handle({ commit, state }, moduleId) {
      return new Promise(resolve => {
        //获取当前激活的系统模块菜单数据
        const _currentModule = filterModuleByToggle(state.moduleMenu, moduleId);

        const sideMenu = _currentModule[keyRefer['children']];

        const initRoute = getInitRoute(_currentModule);

        const navdata = {
          sideMenu,
          initRoute,
          moduleId,
        };
        commit('SET_MENU_DATA', navdata);

        resolve(navdata);
      });
    },

    /**
     * toggle sideMenu expand state
     * @param commit
     * @param data
     */
    toggleSideMenuExpandState: ({ commit }, data) => {
      commit('TOGGLE_SIDE_MENU_EXPAND_STATE', data);
    },

    /**
     * delete sideBar data
     * @param commit
     */
    delSideMenuData: ({ commit }) => {
      commit('DEL_SIDE_MENU_DATA');
    },
  },
};
export default NavMenu;
