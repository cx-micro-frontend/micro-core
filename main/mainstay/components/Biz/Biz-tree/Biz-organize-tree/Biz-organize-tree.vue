<!--组织树-->
<template>
  <div class="biz-tree biz-organize-tree clear" ref="biz-tree">
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
      :draggable="draggable"
      expandAllNodes
      :dropJudge="dropJudge"
      @nodeClick="nodeClick"
    >
      <template slot-scope="{node, parent,index}">
        <div class="slot-container">
          <div class="title-text">
            {{node.organizationName}}
          </div>
          <el-dropdown trigger="click" hide-on-click v-if="showFunction">
             <span @click.stop>
               <ns-icon-svg icon-class="more" class="tree_node_img_more"></ns-icon-svg>
             </span>
            <el-dropdown-menu slot="dropdown" class="tree-more-dropdown">
              <el-dropdown-item @click.native.stop="treeEdit(node, parent)">编辑</el-dropdown-item>
              <el-dropdown-item v-if="node.isHasChild === false">
                <ns-popover placement="top" width="250" trigger="click">
                  <p>{{ node.organizationShortName }}&nbsp;删除后不可恢复，确定继续删除吗？</p>
                  <div class="popover-handle">
                    <ns-button type="primary" size="mini" @click.native="treeDelete(node, parent,index)">确 定</ns-button>
                    <ns-button size="mini"  @click.native="cancel">取 消</ns-button>
                  </div>
                  <div slot="reference">删除</div>
                </ns-popover>
              </el-dropdown-item>
              <template>
                <el-dropdown-item divided disabled>
                  <p>新增子节点</p>
                </el-dropdown-item>
                <template v-if="node.organizationType === 0 || node.organizationType === 1">
                  <el-dropdown-item @click.native="fnclick(node, 'company')">
                    <ns-icon-svg icon-class="dian-copy"></ns-icon-svg>
                    新建子公司
                  </el-dropdown-item>
                  <el-dropdown-item @click.native="fnclick(node, 'department')">
                    <ns-icon-svg icon-class="dian-copy"></ns-icon-svg>
                    新建部门
                  </el-dropdown-item>
                </template>
                <template v-else>
                  <el-dropdown-item @click.native="fnclick(node, 'department')">
                    <ns-icon-svg icon-class="dian-copy"></ns-icon-svg>
                    新建子部门
                  </el-dropdown-item>
                </template>
              </template>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </template>
    </ns-tree>
    <!--新建编辑子公司-->
    <add-or-edit-company
      v-if="dialogVisible.companyVisible.visible"
      :companyVisible="dialogVisible.companyVisible"
      :type="companyDialogObj.type"
      :nodeInfo="companyDialogObj.nodeInfo"
      :parentNodeInfo="companyDialogObj.parentNodeInfo"
      @query="getTreeData"
    ></add-or-edit-company>
    <!--部门编辑弹出框-->
    <add-or-edit-department
      v-if="dialogVisible.departmentVisible.visible"
      :visible="dialogVisible.departmentVisible"
      :type="departmentDialogObj.type"
      :nodeInfo="departmentDialogObj.nodeInfo"
      :parentNodeInfo="departmentDialogObj.parentNodeInfo"
      @query="getTreeData"
    ></add-or-edit-department>
    <!-- 集团弹窗 -->
    <group-Dialog
      v-if="dialogVisible.groupVisible.visible"
      :visible="dialogVisible.groupVisible"
      :nodeInfo="groupDialogObj.nodeInfo"
      @query="refreshTreeData"
    />
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import {companyDelete, departmentDelete,} from '../../../../service/System/Tree/organize-tree';
  import {addOrEditCompany, addOrEditDepartment, groupDialog} from './Biz-organize-dialogs'
  import request from './mixins/request';
  import keyRefer from './keyRefer';
  import {isEmptyObject} from '../../../../utils';


  export default {
    name: 'origanize-tree',
    mixins: [request],
    components: {addOrEditCompany, addOrEditDepartment, groupDialog},
    data() {
      return {
        treeData: [],//origanize tree data use to render
        treeModel: {}, //节点树选中的节点对象
        historyTreeModel: {},//历史（上一次) - 节点树选中的节点对象

        treeSearchInput: '',//搜索
        searchTip: '搜索数据中...',

        //部门节点信息
        departmentOptions: [
          //部门类型
          {label: '服务中心', value: 0},
          {label: '职能中心', value: 1},
        ],
        dialogVisible: {
          groupVisible: {visible: false},
          companyVisible: {visible: false},
          departmentVisible: {visible: false},
        },
        groupDialogObj: {
          nodeInfo: {},
        },
        //公司dialog信息
        companyDialogObj: {
          type: '',
          parentNodeInfo: {
            organizationName: '',
            organizationId: '',
          },
          nodeInfo: {},
        },
        //部门dialog信息
        departmentDialogObj: {
          type: '',
          parentNodeInfo: {
            organizationName: '',
            organizationId: '',
          },
          nodeInfo: {},
        },

        treeloading: false,
        //树节点对应的字段
        keyRefer
      };
    },
    props: {
      funcId: {type: [Number, String]},
      searchConditions: {
        type: Object, default() {
          return {};
        },
      },
      draggable: {type: Boolean, default: false},
      showFunction: {type: Boolean, default: false,},
      'show-checkBox': {type: Boolean,},
      orgTypeFilter: null
    },
    computed: {
      ...mapGetters(['$store__orgTreeData']),
    },
    watch: {
      $store__orgTreeData: {
        handler(newVal, oldVal) {
          this.treeData = newVal;
        },
        deep: true
      },
      treeData: {
        handler(newVal, oldVal) {
          console.log(newVal);
          // this.$store.dispatch('asyncOrganizeTreeData', newVal);
        },
        deep: true
      },
      treeModel: {
        handler(newVal, oldVal) {
          this.$store.dispatch('setCurrentTreeNode', newVal);
        },
        deep: true
      },
    },
    methods: {
      /**
       *  树节点重新渲染
       */
      refreshTreeData() {
        this.getTreeData(true);
      },

      //拖放判断，暂时不支持
      dropJudge() {
      },

      /**
       * 树节点点击事件
       * @param node  -  节点信息
       */
      nodeClick: function (node) {
        console.log(node);
        //同一个节点多次点击则直接跳出
        if (node.organizationId === this.historyTreeModel.organizationId) return;

        this.treeModel = node;
        this.searchConditions.organizationId = node.organizationId;
        this.searchConditions.companyId = node.companyId;
        this.searchConditions.departmentId = node.departmentId;
        this.searchConditions.mainSearch = '';
        this.searchConditions.pageNum = 1;

        this.historyTreeModel = node;
        this.$emit('tree-item-click', node);
      },


      /**
       * 树删除操作
       */
      treeDelete(node, parent, index) {
        if (node.organizationType !== 0 && node.organizationType !== 1) {
          //删除部门节点
          departmentDelete({
            organizationId: node.organizationId,
          }).then(r => {
            this.$message({
              message: r.resultMsg,
              type: 'success',
            });
            this.$refs.organizeTree.delNode(node, parent, index);
          });
        } else {
          //删除公司节点
          companyDelete({
            organizationId: node.organizationId,
          }).then(r => {
            this.$message({
              message: r.resultMsg,
              type: 'success',
            });
            this.$refs.organizeTree.delNode(node, parent, index);
          });
        }
      },

      /**
       * 新建 部门、公司
       */
      fnclick(item, orgType) {
        //新增功能
        if (orgType === 'department') {
          this.departmentDialogObj.type = 'add';
          this.departmentDialogObj.parentNodeInfo = item;
          this.dialogVisible.departmentVisible.visible = true;
        } else if (orgType === 'company') {
          this.companyDialogObj.type = 'add';
          this.companyDialogObj.parentNodeInfo = item;
          this.dialogVisible.companyVisible.visible = true;
        }
      },

      cancel() {
        this.$refs['biz-tree'].click();
      },
      /**
       * 树编辑
       * */
      treeEdit(node, parent) {
        this.companyDialogObj.parentNodeInfo = parent;
        this.companyDialogObj.nodeInfo = node;
        this.groupDialogObj.nodeInfo = node;
        this.departmentDialogObj.parentNodeInfo = parent;
        this.departmentDialogObj.nodeInfo = node;
        console.log(node);
        if (node.organizationType === 2) {
          //部门
          this.departmentDialogObj.type = 'edit';
          this.dialogVisible.departmentVisible.visible = true;
        } else if (node.organizationType === 1) {
          //公司
          this.companyDialogObj.type = 'edit';
          this.dialogVisible.companyVisible.visible = true;
        } else if (node.organizationType === 0) {
          //集团
          // this.groupDialogObj.visible.visible = true;
          this.dialogVisible.groupVisible.visible = true;
        }
      },


      /**
       * init render tree
       */
      initRender() {

        console.log('$store__orgTreeData - 数据是否存在：');
        console.log(this.$store__orgTreeData);
        console.log(!isEmptyObject(this.$store__orgTreeData));


        //判断 $store__orgTreeData 数据是否存在，存在则无需请求数据，直接获取
        if (!isEmptyObject(this.$store__orgTreeData)) {

          this.treeData = this.$store__orgTreeData;
          this.treeModel = this.$store.state.OrganizeTree.$store__currentTreeNode;
          this.treeSearchInput = this.$store.state.OrganizeTree.$store__searchQuery;

          console.log('nodeClick-nodeClick-nodeClick');
          this.nodeClick(this.treeModel);


        }
        else {
          this.getTreeData(true)
        }
      },


    },
    created() {
      this.initRender();
    },

    beforeDestroy() {
      this.$store.dispatch('asyncOrganizeTreeData', this.treeData);
      this.$store.dispatch('setCurrentTreeNode', this.treeModel);
    }
  };
</script>
<style></style>
<style rel="stylesheet/scss" lang="scss">
  @import '../style/biz-tree-common';
</style>
