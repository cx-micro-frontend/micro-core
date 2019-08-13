<template>
  <div class="biz-tree biz-data-target-tree">
    <!--树主体-->
    <ns-tree
      ref="targetTree"
      class="tree-container fl"
      v-loading="treeloading"
      v-model="treeModel"
      :data="treeData"
      isObjectData
      @loadNode="getChildrenTree"
      @nodeClick="nodeClick"
    >
      <template slot-scope="{node, parent, index}">
        <div class="slot-container">
          <div class="title-text">{{node.checktargetName}}</div>
          <!--菜单栏-->
          <ns-dropdown
            v-if="showFunction && (node.nodeType === 'target' || node.nodeType === 'check_type')"
            :options="getDropdownOptions(node)"
            trigger="click"
            @click.native.stop
            @command="handleDropDown($event,node, parent,index)">
            <span>
              <ns-icon-svg icon-class="more" class="tree_node_img_more"></ns-icon-svg>
            </span>
          </ns-dropdown>
        </div>
      </template>
    </ns-tree>

    <!--其他-->
    <info-dialog
      :type="type"
      :visible.sync="showInfoDialog"
      :parentNodeInfo="parentNodeInfo"
      :nodeInfo="nodeInfo"
      @addNode="addNode"
    >

    </info-dialog>
  </div>
</template>

<script>
  import request from './mixins/request';
  import keyRefer from './keyRefer';
  import infoDialog from './Biz-target-dialog/info-target-dialog'

  export default {
    name: 'ns-biz-target-tree',

    mixins: [request],

    components: {
      infoDialog
    },

    data() {
      return {
        treeData: [],//origanize tree data use to render
        treeModel: {}, //节点树选中的节点对象
        childKey: '', //选中的节点
        keyRefer: keyRefer,
        treeloading: false,

        showInfoDialog: false,
        parentNodeInfo: null,
        nodeInfo: null,
        type: 'add'
      };
    },

    props: {
      showFunction: {
        type: Boolean,
        default: true
      },
    },

    methods: {
      //树节点点击
      nodeClick(node) {
        //防抖动
        if (node.id && (this.childKey === node.id)) return;
        this.treeModel = node;
        this.childKey = node.id;
        this.$emit('tree-item-click', node);
      },

      //操作类的渲染
      getDropdownOptions(node) {
        if (node.nodeType === 'target') {
          return [
            { label: '编辑', value: 'edit' },
            { label: '删除', value: 'del' }
          ];
        }
        if (node.nodeType === 'check_type') {
          return [
            { label: '新增', value: 'add' }
          ];
        }
      },

      /**
       * dropDown 菜单点击事件
       */
      handleDropDown: function(e, node, parent, index) {
        if(e === 'add'){
          this.type = e;
          this.showInfoDialog = true;
          this.parentNodeInfo = node;
          this.nodeInfo = null;
        }

        if(e === 'edit'){
          this.type = e;
          this.showInfoDialog = true;
          this.parentNodeInfo = parent;
          this.nodeInfo = node;
        }

        if(e === 'del'){
          this.delNode(node, parent, index)
        }
      }
    },

    created() {
      this.getTreeData(true);
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  @import '../../../style/Modular/biz-tree-common';

  .biz-tree.biz-data-target-tree {
    padding-top: 12px;
  }
</style>
