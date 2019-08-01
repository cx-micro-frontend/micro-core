/**
 * house tree
 * created: 2019/06/19.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2019 Broccoli spring( gcx )
 * @type {{state: {funcId: string}, mutations: {SET_FUNCID: Core.mutations.SET_FUNCID}, actions: {setFuncId({commit: *}, *=): void}}}
 */
import {treeDataFetch, changeTreeData, getSearchData} from '../../../../service/System/Tree/house-tree';


const HouseTree = {
  state: {
    $store__houseTreeData: [],
    $store__currentTreeNode: {},//current tree node information
    $store__searchQuery: ''
  },
  mutations: {
    SET_HOUSE_TREE_DATA: (state, data) => {
      state.$store__houseTreeData = data;
    },

    SET_CURRENT_TREE_NODE: (state, data) => {
      state.$store__currentTreeNode = data;
    },

    SET_SEARCH_QUERY: (state, data) => {
      state.$store__searchQuery = data;
    },

  },
  actions: {
    getHouseTreeData({commit}, query) {
      return new Promise((resolve, reject) => {
          treeDataFetch(query).then(res => {
            console.log('请求到组织树数据，如下：');
            console.log(res.resultData);
            commit('SET_ORGANIZE_TREE_DATA', [res.resultData]);
            resolve(res.resultData);
          })
        }
      );
    },

    houseTreeChange({commit}, query) {
      return changeTreeData(query).then(res => {})
    },

    getSearchData({commit}, query) {
      return getSearchData(query).then(res => {})
    },

  },
};
export default HouseTree;
