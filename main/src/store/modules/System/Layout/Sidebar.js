import {sideBarService} from '../../../../service/System/Layout/sideBar';
import keyRefer from '../../../../components/NS-biz-sidebar/sidebar-keyRefer';
import $store from '../../../../store/index';
import {storageHandle} from '../../../../utils/storage/storage';


/**
 * filter side bar data
 * @param list
 * @returns {*}
 * @private
 */
let _filtersidelist = list => {
  list.forEach(item => {
    item.hide = item[keyRefer['hide']] === '1';
    item[keyRefer['childMenus']] && item[keyRefer['childMenus']].forEach(item => {
      item.hide = item[keyRefer['hide']]  === '1';
    });
  });
  return list;
};

/**
 * get init router path
 * @param list
 * @returns {string}
 * @private
 */
let _getInitRouter = (list = []) => {
  let initpath = '';

  function getInitRouter(list) {
    if (list && list.length) {
      initpath = initpath + '/' + list[0][keyRefer['menuRouter']];
      const children = list[0][keyRefer['childMenus']];
      getInitRouter(children)
    }
  }

  getInitRouter(list);

  return initpath;

};


/**
 * deCrypto side bar-information data in storage
 * @returns {{}}
 * @private
 */
function _deCryptoSideBar() {
  return JSON.parse(storageHandle('get', 'sign_nav')) || {};
}


const SideBar = {
  state: {
    sideBarList: _deCryptoSideBar().sideBar,
    initRouter: _deCryptoSideBar().initRouter,//默认初始路由地址
  },
  mutations: {
    SET_SIDEBAR_DATA: (state, data) => {

      state.sideBarList = data.sideBar;
      state.initRouter = data.initRouter;

      storageHandle('set', 'sign_nav', JSON.stringify({
        sideBar: data.sideBar,
        initRouter: data.initRouter
      }));
    },
    DEL_SIDEBAR_DATA: (state, data) => {
      state.sideBarList = [];
      state.initRouter = null;
      storageHandle('remove', 'sign_nav');
    },
  },
  actions: {
    generateSideBar({commit}) {
      return new Promise((resolve, reject) => {
        sideBarService().then(res => {
          const list = res.resultData || [];
          let sideBarList = _filtersidelist(list);

          commit('SET_SIDEBAR_DATA', {
            sideBar: sideBarList,
            initRouter: _getInitRouter(sideBarList),
          });

          //handle page info
          $store.dispatch('setPageInfoList', sideBarList);

          resolve(list);
        }).catch(err => {
          reject(err);
        });
      });
    },
    delSideBarData: ({commit}) => {
      commit('DEL_SIDEBAR_DATA');
    },
  },
};
export default SideBar;
