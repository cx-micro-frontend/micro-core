import { sideBarService } from '../../../../service/System/Layout/sideBar';
import keyRefer from '../../../../layout/components/NS-biz-sidebar/sidebar-keyRefer';
import $store from '../../../../store/index';
import { storageHandle } from '../../../../utils/storage/storage';
import expand from '../../../../../expand';

/**
 * filter side bar data
 * @param list
 * @returns {*}
 * @private
 */
let _baseFilterMenu = list => {
  const visibleKey = keyRefer['visible'];
  const childrenKey = keyRefer['children'];

  /**
   * 节点递归循环处理
   * 1、显示隐藏字段 => 转换布尔值
   * 显示隐藏字段 => 转换布尔值
   * @param list
   */
  const done = list => {
    list.forEach((item, index) => {
      item[visibleKey] = item[visibleKey] === '0';

      let childNodes = item[childrenKey];

      if (childNodes && childNodes.length > 0) {
        done(childNodes);
      }
    });
  };

  done(list);

  return list;
};

/**
 * get init router path
 * @param list
 * @returns {string}
 * @private
 */
let _getInitRoute = (list = []) => {
  let initpath = '';
  let initname = '';

  function getInitRoute(list) {
    if (list && list.length) {
      initpath = initpath + '/' + list[0][keyRefer['menuRouter']];
      const children = list[0][keyRefer['children']];
      initname = list[0][keyRefer['menuRouter']];
      getInitRoute(children);
    }
  }

  getInitRoute(list);

  return {
    name: initname,
    fullpath: initpath,
  };
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
    sideBarList: _deCryptoSideBar().sideBar || [],
    initRoute: _deCryptoSideBar().initRoute, //默认初始路由地址
  },
  mutations: {
    SET_SIDEBAR_DATA: (state, data) => {
      state.sideBarList = data.sideBar;
      state.initRoute = data.initRoute;

      storageHandle(
        'set',
        'sign_nav',
        JSON.stringify({
          sideBar: data.sideBar,
          initRoute: data.initRoute,
        })
      );
    },
    DEL_SIDEBAR_DATA: (state, data) => {
      state.sideBarList = [];
      state.initRoute = null;
      storageHandle('remove', 'sign_nav');
    },
  },
  actions: {
    generateSideBar({ commit }) {
      return new Promise((resolve, reject) => {
        sideBarService()
          .then(res => {
            const list = res.resultData || [];

            const baselist = expand.layout.sidebar.filter(list);

            const initRoute = _getInitRoute(baselist);
            const sideBarList = _baseFilterMenu(baselist);

            if (!sideBarList) {
              throw '【 NEAP-ERROR 】Custom filter side menu data,  must output data list.';
            }

            const navdata = {
              sideBar: sideBarList,
              initRoute: initRoute,
            };

            commit('SET_SIDEBAR_DATA', navdata);

            //handle page info
            $store.dispatch('setPageInfoList', sideBarList);

            console.log('处理好的菜单栏数据如下：');
            console.log(navdata);

            resolve(navdata);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    delSideBarData: ({ commit }) => {
      commit('DEL_SIDEBAR_DATA');
    },
  },
};
export default SideBar;
