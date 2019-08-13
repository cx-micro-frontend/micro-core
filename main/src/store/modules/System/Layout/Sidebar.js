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
let _filtersidelist = (list) => {
  list.forEach(item => {
    item.hide = item[keyRefer['hide']] === '1';
    item.childMenus && item.childMenus.forEach(item => {
      item.hide = item.syStatus === '1';
    });
  });
  return list;
};

const SideBar = {
  state: {
    sideBarList: JSON.parse(storageHandle('get', 'sign_nav')),
    firstpath: null,
  },
  mutations: {
    SET_SIDEBAR_DATA: (state, data) => {
      state.sideBarList = data.side;
      state.firstpath = data.entry;
      storageHandle('set', 'sign_nav', JSON.stringify(data.side));
    },
    DEL_SIDEBAR_DATA: (state, data) => {
      state.sideBarList = [];
      state.firstpath = null;
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
            side: sideBarList,
            entry: '',
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
