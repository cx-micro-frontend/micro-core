<!--数据字典树-->
<template>
  <div class="biz-tree biz-data-dictionary-tree">
    <!--树主体-->
    <ns-tree
      class="tree-container"
      ref="dictionaryTree"
      :keyRefer="keyRefer"
      v-loading="treeloading"
      v-model="treeModel"
      :data="treeData"
      isObjectData
      @nodeClick="nodeClick"
    >
      <template slot-scope="{node, parent,index}">
        <div class="slot-container">
          <div class="title-text">{{node.nodeName}}</div>
          <el-dropdown trigger="click" :hide-on-click="true" v-if="showFunction">
               <span @click.stop>
               <ns-icon-svg icon-class="more" class="tree_node_img_more"></ns-icon-svg>
             </span>
            <el-dropdown-menu slot="dropdown" class="tree-more-dropdown">
              <template v-if="node.nodeType === 'dic'">
                <el-dropdown-item @click.native="treeEdit(node)">编辑</el-dropdown-item>
                <el-dropdown-item @click.native="treeDelete(node, parent,index)">删除</el-dropdown-item>
              </template>
              <template v-if="node.nodeType === 'dicGroup'">
                <el-dropdown-item @click.native="treeAdd(node)">新增字典</el-dropdown-item>
              </template>
              <el-dropdown-item v-if="node.nodeType === 'root'" @click.native="treeAdd(node)">新增字典类型</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </template>
    </ns-tree>
    <!--弹窗-->
    <tree-dialog
      :visible="dialogObj.visible"
      :type="dialogObj.type"
      v-if="dialogObj.visible.visible"
      @query="getTreeData"
      :organizationId="organizationId"
      :itemInfo="dialogObj.itemInfo"
      :detailInfo="dialogObj.detailInfo"
    >
    </tree-dialog>
  </div>
</template>
<script>
  import {dicGroupDetailFetch, dicDictionaryFetch, deleteDictionaryFetch, deleteDictionaryGroupFetch,} from '../../../../service/System/Tree/dictionary-tree';
  import TreeDialog from './tree-dialog.vue';
  import keyRefer from './keyRefer';
  import request from './mixins/request';

  export default {
    name: 'dictionary-tree',
    mixins: [request],
    components: {
      TreeDialog,
    },
    data() {
      return {
        treeData: [],//origanize tree data use to render
        treeModel: {}, //节点树选中的节点对象
        childKey: '', //选中的节点
        initIndex: 0,
        objActive: '', //是否选中
        treeloading: true,//树显示
        dialogObj: {
          visible: {
            visible: false,
          },
          type: '',
          organizationId: this.organizationId,
          itemInfo: {},
          detailInfo: {},
        },
        keyRefer
      };
    },
    props: {
      searchConditions: {
        type: Object,
        default: function () {
          return {};
        },
      },
      draggable: {type: Boolean, default: false,},
      showFunction: {type: Boolean, default: false,},
      'show-checkBox': {type: Boolean,},
      organizationId: {type: [Number, String],},
    },
    methods: {
      //树删除操作
      treeDelete(node, parent, index) {
        if (node.organizationId === 0) {
          this.$message({
            message: '系统默认的不可删除',
            type: 'warning',
          });
          return false;
        }
        this.$confirm('确认删除?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          if (node.nodeType === 'dicGroup') {
            deleteDictionaryGroupFetch({
              dictionaryGroupId: node.nodeValue,
            })
              .then(r => {
                this.$message({
                  message: '删除成功',
                  type: 'success',
                });
                this.$refs.dictionaryTree.delNode(node, parent, index);
              })
              .catch(r => {
                this.$message({
                  message: r.data.resultMsg,
                  type: 'warning',
                });
              });
          } else if (node.nodeType === 'dic') {
            deleteDictionaryFetch({
              dictionaryId: node.nodeValue,
            })
              .then(r => {
                this.$message({
                  message: '删除成功',
                  type: 'success',
                });
                this.$refs.dictionaryTree.delNode(node, parent, index);
              })
              .catch(r => {
                this.$message({
                  message: r.data.resultMsg,
                  type: 'warning',
                });
              });
          }
        });
      },
      //树编辑
      treeEdit(item) {
        this.dialogObj.itemInfo = item;
        if (item.nodeType === 'dicGroup') {
          this.dialogObj.type = 'edit-group';
          dicGroupDetailFetch({
            dictionaryGroupId: item.nodeValue,
          }).then(r => {
            if (r.resultData.organizationId === 0) {
              this.$message({
                message: '系统默认项不可编辑',
                type: 'warning',
              });
            } else {
              this.dialogObj.detailInfo = r.resultData;
              this.dialogObj.visible.visible = true;
            }
          });
          this.dialogObj.visible.visible = true;
        } else if (item.nodeType === 'dic') {
          this.dialogObj.type = 'edit-dic';
          dicDictionaryFetch({
            dictionaryId: item.nodeValue,
          }).then(r => {
            if (r.resultData.organizationId === 0) {
              this.$message({
                message: '系统默认项不可编辑',
                type: 'warning',
              });
            } else {
              this.dialogObj.detailInfo = r.resultData;
              this.dialogObj.visible.visible = true;
            }
          });
        }
      },
      //树新增
      treeAdd(item) {
        this.dialogObj.itemInfo = item;
        if (item.nodeType === 'root') {
          this.dialogObj.type = 'add-group';
          this.dialogObj.visible.visible = true;
        } else if (item.nodeType === 'dicGroup') {
          this.dialogObj.type = 'add-dic';
          this.dialogObj.visible.visible = true;
        }
      },
      //树节点点击
      nodeClick(item, selected, position, parent) {
        if (item.nodeType === 'dic') {
          this.searchConditions.organizationId = this.organizationId;
          this.searchConditions.dictionaryitemDictionaryId = item.nodeValue;
          this.searchConditions.dictionaryGroupId = '';
        } else if (item.nodeType === 'dicGroup') {
          this.searchConditions.organizationId = this.organizationId;
          this.searchConditions.dictionaryitemDictionaryId = '';
          this.searchConditions.dictionaryGroupId = item.nodeValue;
        } else {
          this.searchConditions.organizationId = this.organizationId;
          this.searchConditions.dictionaryitemDictionaryId = '';
          this.searchConditions.dictionaryGroupId = '';
        }
        this.searchConditions.mainSearch = '';
        this.searchConditions.pageNum = 1;
        this.$emit('tree-item-click', item, parent);
      },
    },
    watch: {
      organizationId() {
        this.getTreeData(true);
      },
    },
    created() {
      if (this.organizationId && this.organizationId !== '') {
        //树数据初始化
        this.getTreeData(true);
      }
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  @import '../style/biz-tree-common.scss';

  .biz-tree.biz-data-dictionary-tree {
    padding-top: 12px;
  }
</style>
