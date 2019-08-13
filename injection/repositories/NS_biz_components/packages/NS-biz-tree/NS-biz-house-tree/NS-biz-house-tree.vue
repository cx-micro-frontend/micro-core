<!--房产树-->
<template>
  <div class="biz-tree biz-house-tree clear" ref="biz-tree">
    <!--树搜索框-->
    <el-autocomplete
      class="fl"
      v-model="searchQuery"
      :fetch-suggestions="remoteSearch"
      value-key="houseFullName"
      placeholder="快速查询"
      suffix-icon="el-icon-search"
      clearable
      size="small"
      @select="houseTreeChange"
      @clear="houseTreeChange"
    ></el-autocomplete>

    <!--树选择-->
    <div class="select-container">
      <ns-select
        :clearable="false"
        :options="precinctList" v-model="precinctModel" :keyRefer="keyRefer" @change="changeProject"
      ></ns-select>
    </div>

    <!--树主体-->
    <ns-tree
      class="tree-container fl"
      ref="bizHouseTree"
      v-loading="treeloading"
      v-model="treeModel"
      :data="treeData"
      isObjectData
      @nodeClick="nodeClick"
      @loadNode="loadNode"
    >
      <template slot-scope="{node, parent,index}">
        <div class="slot-container">
          <div class="title-text">
            {{node.companyName || node.houseName}}
          </div>

          <!--菜单栏-->
          <ns-dropdown
            v-if="showFunction && node.houseId !== 0"
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

    <!--diaog info  编辑、新增-->
    <area-form-dialog
      class="biz-tree-dialog"
      @addNodes="addHouseNode"
      :dialogVisible="dialogVisible.areaVisible"
      :itemInfo="itemInfo"
      :type="operateType"
    ></area-form-dialog>
    <!--2.项目表单-->
    <project-form-dialog
      class="biz-tree-dialog"
      @addNodes="addHouseNode"
      :dialogVisible="dialogVisible.projectVisible"
      :itemInfo="itemInfo"
      :type="operateType"
    ></project-form-dialog>
    <!--3.组团表单-->
    <cluster-form-dialog
      class="biz-tree-dialog"
      @addNodes="addHouseNode"
      :dialogVisible="dialogVisible.clusterVisible"
      :itemInfo="itemInfo"
      :type="operateType"
    ></cluster-form-dialog>
    <!--4.楼栋表单-->
    <building-form-dialog
      class="biz-tree-dialog"
      @addNodes="addHouseNode"
      :dialogVisible="dialogVisible.buildingVisible"
      :itemInfo="itemInfo"
      :type="operateType"
    ></building-form-dialog>
    <!--5.单元表单-->
    <unit-form-dialog
      class="biz-tree-dialog"
      @addNodes="addHouseNode"
      :dialogVisible="dialogVisible.unitVisible"
      :itemInfo="itemInfo"
      :type="operateType"
    ></unit-form-dialog>
    <!--6.房间表单-->
    <room-form-dialog
      class="biz-tree-dialog"
      @addNodes="addHouseNode"
      :dialogVisible="dialogVisible.roomVisible"
      :itemInfo="itemInfo"
      :type="operateType"
    ></room-form-dialog>
    <!--7.车库表单-->
    <garage-form-dialog
      class="biz-tree-dialog"
      @addNodes="addHouseNode"
      :dialogVisible="dialogVisible.garageVisible"
      :itemInfo="itemInfo"
      :type="operateType"
    ></garage-form-dialog>
    <!--8.车位表单-->
    <carport-form-dialog
      class="biz-tree-dialog"
      @addNodes="addHouseNode"
      :dialogVisible="dialogVisible.carportVisible"
      :itemInfo="itemInfo"
      :type="operateType"
    ></carport-form-dialog>
    <!--9.公共区域表单-->
    <publicArea-form-dialog
      class="biz-tree-dialog"
      @addNodes="addHouseNode"
      :dialogVisible="dialogVisible.publicAreaVisible"
      :itemInfo="itemInfo"
      :type="operateType"
    ></publicArea-form-dialog>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex';
  import request from './mixins/request';
  import { isEmptyObject } from '@NEAP/utils';
  import { houseTypeValueEnum, houseTypeEnum } from './houseTypeEnum';
  import {
    AreaFormDialog,
    ProjectFormDialog,
    ClusterFormDialog,
    BuildingFormDialog,
    UnitFormDialog,
    GarageFormDialog,
    RoomFormDialog,
    CarportFormDialog,
    PublicAreaFormDialog,
  } from './Biz-house-dialogs/index.js';

  export default {
    name: 'ns-biz-house-tree',

    mixins: [request],

    components: {
      AreaFormDialog,
      ClusterFormDialog,
      ProjectFormDialog,
      BuildingFormDialog,
      UnitFormDialog,
      GarageFormDialog,
      RoomFormDialog,
      CarportFormDialog,
      PublicAreaFormDialog,
    },

    props: {
      treeType: {
        type: String,
      },

      searchConditions: {
        type: Object,
        default() {
          return {};
        },
      },

      //是否显示操作按钮
      showFunction: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        treeData: [],
        treeloading: false,
        treeModel: [],
        //选中项目
        precinctList: [],

        keyRefer: {
          'label': 'precinctName',
          'value': 'precinctId'
        },
        precinctModel: '',

        searchQuery: '',//搜索
        searchTip: '搜索数据中...',

        //dialog
        dialogVisible: {
          areaVisible: { visible: false }, //区域dialog显示判断条件
          projectVisible: { visible: false }, //项目dialog显示判断条件
          clusterVisible: { visible: false }, //组团dialog显示判断条件
          buildingVisible: { visible: false }, //楼栋dialog显示判断条件
          unitVisible: { visible: false }, //单元dialog显示判断条件
          roomVisible: { visible: false }, //房间dialog显示判断条件
          garageVisible: { visible: false }, //车库dialog显示判断条件
          carportVisible: { visible: false }, //车位dialog显示判断条件
          publicAreaVisible: { visible: false }, //公共区域dialog显示判断条件
        },
        itemInfo: {},  //当前点击的树节点
        operateType: 'add',  //弹框的状态

        houseTypeEnum,
        houseTypeValueEnum,

        historyTreeModel: {}

      };
    },

    computed: {
      ...mapGetters(['$store__houseTreeData']),
    },

    methods: {
      //节点的点击事件
      nodeClick(node) {
        //同一个节点多次点击则直接跳出
        if (node.houseId === this.historyTreeModel.houseId) return;
        this.searchConditions.treeConditions = [
          {
            comparison: 'EQUAL',
            fieldName: 'houseId',
            fieldValue: node.houseId,
            type: 'text',
          },
        ];
        this.searchConditions.houseId = node.houseId;
        this.searchConditions.organizationId = node.organizationId;
        this.searchConditions.otherConditions.houseId = node.houseId;
        this.searchConditions.otherConditions.houseName = node.houseName || node.companyName;
        this.searchConditions.mainSearch = '';
        this.searchConditions.pageNum = 1;
        this.historyTreeModel = node;
        this.$emit('tree-item-click', node);
      },

      changeProject(){
        this.getTreeData(true);
      },

      /**
       * 控制dropdown
       * */
      getDropdownOptions: function(node) {
        let {area,project,cluster, building,unit, garage, room, publicArea, carport } = houseTypeEnum;

        let childDropMenuMap = {
          [area.value]: [project],
          [project.value]: [cluster,building, room, garage, publicArea],
          [cluster.value]: [building, room, garage, carport],
          [building.value]: [unit, room,carport],
          [unit.value]: [room,carport],
          [garage.value]: [carport],
        };

        let childDropMenu = childDropMenuMap[node.houseType] || [];

        let addChildList = childDropMenu.length > 0 ?
          {
            label: '新增子节点',
            divided: true,
            disabled: true,
            children: childDropMenu
          } : [];

        let normalList = [
          {label: '编辑', value: 'edit'},
          {label: '删除', value: 'del', disabled: node.isHasChild}
        ];

        return normalList.concat(addChildList);
      },

      /**
       * dropDown 菜单点击事件
       */
      handleDropDown: function(e, node, parent, index) {
        if(e === 'edit'){
          this.editNode(node);
        }

        else if(e === 'del'){
          this.delNode(parent, node, index);
        }

        else {
          this.addNode(e, node);
        }
      },
      /**
       * 编辑树节点
       * @param node 树节点
       */
      editNode(node) {
        this.operateType = 'edit';
        this.itemInfo = node;
        let label = houseTypeValueEnum[node.houseType].key;
        this.dialogVisible[label+'Visible'].visible = true;
      },

      /**
       * 新增树节点
       * @param addType 增加的节点类型
       * @param node 树节点
       */
      addNode(addType, node) {
        this.operateType = 'add';
        this.itemInfo = node;
        let label = houseTypeValueEnum[addType].key;
        this.dialogVisible[label+'Visible'].visible = true;
      },


      /**
       * node删除
       */
      delNode(parent, node, index){
        let message = `该${houseTypeValueEnum[node.houseType].label || ''}节点(${node.companyName || node.houseName})删除后不可恢复，确定继续删除吗？`;
        this.$confirm(message, '提示', {
          type: 'warning'
        }).then(()=>{
          this.deleteHouseNode(parent, node, index);
        })
      },
    },

    created() {
      this.getPrecincts().then(()=>{
        this.getTreeData(true);
      });
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .biz-tree-dialog .el-tabs__content{
    padding-bottom: 15px;
  }
  @import '../../../style/Modular/biz-tree-common';
</style>
