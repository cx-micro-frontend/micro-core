<!--组织树-->
<template>
  <div class="biz-tree biz-organize-tree-simple clear" ref="biz-tree">
    <!--树搜索框-->
    <el-autocomplete
      class="fl"
      v-model="treeSearchInput"
      :fetch-suggestions="remoteSearch"
      value-key="organizationName"
      placeholder="快速查询"
      suffix-icon="el-icon-search"
      clearable
      size="small"
      @select="origanizeTreeChange"
      @clear="origanizeTreeChange"
    ></el-autocomplete>
    <!--树主体-->
    <ns-tree
      class="tree-container fl"
      ref="organizeTree"
      v-loading="treeloading"
      v-model="treeModel"
      :data="treeData"
      isObjectData
      @nodeClick="nodeClick"
    >
    </ns-tree>
  </div>
</template>
<script>
  import keyRefer from './keyRefer';
  import { treeDataFetch, changeTreeData, getSearchData } from '../../../service/packages/NS-biz-tree/NS-biz-organize-tree';
  import transformKeyFun from '../transformNode';


  export default {
    name: 'origanize-tree-simple',
    data() {
      return {
        treeData: [],//origanize tree data use to render
        treeModel: {}, //节点树选中的节点对象
        historyTreeModel: {},//历史（上一次) - 节点树选中的节点对象

        treeSearchInput: '',//搜索
        searchTip: '搜索数据中...',

        treeloading: false,
        //树节点对应的字段
        keyRefer
      };
    },
    methods: {
      /**
       * 获取树数据
       */
      getTreeData() {

        this.treeloading = true;//loading
        //request organize tree data
        treeDataFetch().then((res)=>{
          this.treeData =  transformKeyFun([res.resultData], keyRefer, { expandedIndex: 1 });//转换树数据
          this.treeloading = false;
        }, ()=>{
          this.treeloading = false;
        });
      },


      /**
       * Get origanize tree data by search
       * @param item 搜索输入内容
       */
      origanizeTreeChange(item) {
        //存储 搜索输入的值
        if (item || item === 0) {
          this.treeloading = true;
          changeTreeData({organizationId: item.organizationId}).then(res => {
            this.treeData =  transformKeyFun([res.resultData], keyRefer, { expandedIndex: 1 });//转换树数据;
            this.treeloading = false;
          }, ()=>{
            this.treeloading = false;
          });
        }
        else {
          this.getTreeData();
        }
      },

      /**
       * 树 输入触发 搜索查询
       * @param query
       * @param cb
       */
      remoteSearch(query, cb) {
        if (query !== '') {
          this.searchTip = '搜索数据中...';
          getSearchData({organizationName: query}).then(r => {
            cb(r.resultData);
          }).catch(err => {
            this.searchTip = '服务器出错';
          });
        } else {
          cb([]);
        }
      },

      /**
       * 树节点点击事件
       * @param node  -  节点信息
       */
      nodeClick: function (node) {
        console.log(node);
        //同一个节点多次点击则直接跳出
        if (node.organizationId === this.historyTreeModel.organizationId) return;
        this.historyTreeModel = node;
        this.$emit('tree-item-click', node);
      },


    },
    created() {
      this.getTreeData()
    },
  };
</script>
<style></style>
<style rel="stylesheet/scss" lang="scss">
  @import '../../../style/Modular/biz-tree-common';
</style>

