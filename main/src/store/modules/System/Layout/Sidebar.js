import { sideBarService } from '../../../../service/System/Layout/sideBar';
import keyRefer from '../../../../layout/components/NS-biz-sidebar/sidebar-keyRefer';
import $store from '../../../../store/index';
import { storageHandle } from '../../../../utils/storage/storage';

/**
 * filter side bar data
 * @param list
 * @returns {*}
 * @private
 */
let _filterMenu = list => {
  const labelKey = keyRefer['label'];
  const visibleKey = keyRefer['visible'];
  const indexKey = keyRefer['menuIndex'];
  const childrenKey = keyRefer['children'];
  const isVirtualKey = keyRefer['isVirtual'];
  const virtualLabelKey = keyRefer['virtualLabel'];

  /**
   * 节点递归循环处理
   * 1、显示隐藏字段 => 转换布尔值
   * 2、新增 - 控制是否为虚拟节点
   * 3、若当前节点存在虚拟节点的名称的字段值，则在此节点的上面新增一个虚拟节点（用作假的二级节点，不可操作点击)
   * 显示隐藏字段 => 转换布尔值
   * @param list
   */
  const done = list => {
    let inserts = [];
    list.forEach((item, index) => {
      item[visibleKey] = item[visibleKey] === '0';
      item[isVirtualKey] = false;

      if (item[virtualLabelKey]) {
        inserts.push(index);
      }

      item[indexKey] = index + 1;

      if (index === list.length - 1 && inserts.length) {
        inserts.forEach((insert, i) => {
          list.splice(insert + i, 0, {
            [labelKey]: item[virtualLabelKey],
            [isVirtualKey]: true,
            [visibleKey]: false,
            [indexKey]: 'virtual-' + (insert + i),
          });
        });
      }

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
let _getInitRouter = (list = []) => {
  let initpath = '';

  function getInitRouter(list) {
    if (list && list.length) {
      initpath = initpath + '/' + list[0][keyRefer['menuRouter']];
      const children = list[0][keyRefer['childMenus']];
      getInitRouter(children);
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
    initRouter: _deCryptoSideBar().initRouter, //默认初始路由地址
  },
  mutations: {
    SET_SIDEBAR_DATA: (state, data) => {
      state.sideBarList = data.sideBar;
      state.initRouter = data.initRouter;

      storageHandle(
        'set',
        'sign_nav',
        JSON.stringify({
          sideBar: data.sideBar,
          initRouter: data.initRouter,
        })
      );
    },
    DEL_SIDEBAR_DATA: (state, data) => {
      state.sideBarList = [];
      state.initRouter = null;
      storageHandle('remove', 'sign_nav');
    },
  },
  actions: {
    generateSideBar({ commit }) {
      return new Promise((resolve, reject) => {
        sideBarService()
          .then(res => {
            const list = res.resultData || [];

            let sideBarList = _filterMenu(list);

            console.log(222222222);
            console.log(222222222);
            console.log(222222222);
            console.log(sideBarList);
            console.log(222222222);
            console.log(222222222);

            commit('SET_SIDEBAR_DATA', {
              sideBar: sideBarList,
              initRouter: _getInitRouter(sideBarList),
            });

            //handle page info
            $store.dispatch('setPageInfoList', sideBarList);

            resolve(list);
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
