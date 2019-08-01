/**
 * Organize tree
 * created: 2019/06/19.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2019 Broccoli spring( gcx )
 * @type {{state: {funcId: string}, mutations: {SET_FUNCID: Core.mutations.SET_FUNCID}, actions: {setFuncId({commit: *}, *=): void}}}
 */
import { treeDataFetch, changeTreeData } from '../../../../service/System/Tree/organize-tree';

import transformKeyFun from '../../../../components/Biz/Biz-tree/utils/transformNode';
import keyRefer from '../../../../components/Biz/Biz-tree/Biz-organize-tree/keyRefer';

const OrganizeTree = {
  state: {
    $store__orgTreeData: [],//organize tree data
    $store__currentTreeNode: {},//current tree node information
    $store__searchQuery: '',
  },
  mutations: {
    SET_ORGANIZE_TREE_DATA: (state, data) => {

      state.$store__orgTreeData = data;
      // alert('SET_ORGANIZE_TREE_DATA');
      // alert(data[0].expanded);
      // alert(state.$store__orgTreeData[0].expanded);
    },
    SET_CURRENT_TREE_NODE: (state, data) => {
      state.$store__currentTreeNode = data;
    },
    SET_SEARCH_QUERY: (state, data) => {
      state.$store__searchQuery = data;
    },
    EMPTY_ORGANIZE_TREE_STORE: (state, data) => {
      state.$store__orgTreeData = [];
      state.$store__currentTreeNode = {};
      state.$store__searchQuery = '';
    },
  },
  actions: {
    getOrganizeTreeData({ commit }, query) {
      return new Promise((resolve, reject) => {
          treeDataFetch(query).then(res => {
            console.log('请求到组织树数据，如下：');
            console.log(res.resultData);

            const storeData = transformKeyFun([res.resultData], keyRefer, { expandedIndex: 1 });//转换树数据
            const initCurrentNode = storeData[0];//default is to take the top-level node as the initialization selected node

            commit('SET_ORGANIZE_TREE_DATA', storeData);
            commit('SET_CURRENT_TREE_NODE', initCurrentNode);//store current tree node noject

            resolve(res.resultData);
          });
        },
      );
    },

    origanizeTreeChange({ commit }, query) {
      return new Promise((resolve, reject) => {
          changeTreeData(query).then(res => {

            const storeData = transformKeyFun([res.resultData], keyRefer, { expandedIndex: 1 });//转换树数据
            const initCurrentNode = storeData[0];//default is to take the top-level node as the initialization selected node

            commit('SET_ORGANIZE_TREE_DATA', storeData);
            commit('SET_CURRENT_TREE_NODE', initCurrentNode);//store current tree node noject


            resolve(res.resultData);

            // this.$refs.organizeTree.initTree(this.treeData);
            // this.treeModel && (this.$refs.organizeTree.nodeSelectedByKey([this.treeModel]));
          });
        },
      );
    },


    setCurrentTreeNode({ commit }, data) {
      commit('SET_CURRENT_TREE_NODE', data);
    },

    setSearchQuery({ commit }, data) {
      commit('SET_SEARCH_QUERY', data);
    },

    asyncOrganizeTreeData({ commit }, data) {
      commit('SET_ORGANIZE_TREE_DATA', data);
    },

    emptyOrganizeTreeStore({ commit }, data) {
      commit('EMPTY_ORGANIZE_TREE_STORE', data);
    },
  },
};
export default OrganizeTree;
