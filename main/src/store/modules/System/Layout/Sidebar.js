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
            const baseList = res.resultData || [];

            /*
             * -----------------
             * 1、get init route
             * -----------------
             */
            let initRoute;
            // let initRoute = { name: '', fullpath: '' };
            const _ini = expand.route.initRouteByAuth;

            if (_ini) {
              if (typeof _ini === 'function') {
                initRoute = _ini(baseList);
              } else if (typeof _ini === 'object') {
                initRoute = _ini;
              } else {
              }
            } else {
              initRoute = _getInitRoute(baseList);
            }

            if (
              !['name', 'fullpath'].every(
                _k => initRoute.hasOwnProperty(_k) && initRoute[_k] === 'string'
              )
            ) {
              reject(
                `【 NEAP-ERROR 】Custom expand config - "initRouteByAuth": the returned object must contain the name and path fields, and the value is string format`
              );
            }

            /*
             * -----------------------------------
             * 2、filter nav menu by custom config
             * -----------------------------------
             */
            const filterList = expand.layout.sidebar.filter(baseList);

            const sideBarList = _baseFilterMenu(filterList);

            if (!sideBarList) {
              reject('【 NEAP-ERROR 】Custom filter side menu data,  must output data list.');
            }

            //packaging data
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
