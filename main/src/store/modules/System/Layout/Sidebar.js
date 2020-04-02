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

      const virtualLabe = item[virtualLabelKey];

      if (item[virtualLabelKey]) {
        inserts.push({ index: index, label: virtualLabe });
      }

      item[indexKey] = index + 1;

      if (index === list.length - 1 && inserts.length) {
        inserts.forEach((insert, i) => {
          list.splice(insert.index + i, 0, {
            [labelKey]: insert.label,
            [isVirtualKey]: true,
            [visibleKey]: false,
            [indexKey]: 'virtual-' + (insert.index + i),
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

            let sideBarList = _filterMenu(list);

            commit('SET_SIDEBAR_DATA', {
              sideBar: sideBarList,
              initRoute: _getInitRoute(sideBarList),
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
