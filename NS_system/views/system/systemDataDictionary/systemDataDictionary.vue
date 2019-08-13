<!--数据字典-->
<template>
  <div class="win">
    <div class="ns-container">
      <ns-drawer class="ns-container-left" speed="160ms">
        <ns-biz-organize-tree
          :funcId="Mix_funcId"
          @tree-item-click="organizeTreeItemClick"
          orgTypeFilter="1"
          :searchConditions="Mix_searchConditions"
        ></ns-biz-organize-tree>
      </ns-drawer>
      <ns-drawer class="ns-container-left" speed="160ms">
        <ns-biz-data-dictionary-tree
          :organizationId="org_nodeId"
          :searchConditions="Mix_searchConditions"
          showFunction
          @tree-item-click="treeItemClick"
        >
        </ns-biz-data-dictionary-tree>
      </ns-drawer>
      <div class="ns-container-right">
        <!--action-module (search / button)-->
        <div class="action-module">
          <!--search module-->
          <ns-biz-search-conditions
            :funcId="Mix_funcId"
            :searchConditions="Mix_searchConditions"
            @query="getTableData"
          >
            <!--action - 权限按钮操作区域-->
            <ns-biz-role-button-area :buttonList="roleButtonAction" @command="roleButtonCommand" class="fr"></ns-biz-role-button-area>
          </ns-biz-search-conditions>
        </div>

        <!--grid module-->
        <ns-biz-table ref="biz-table" :loadState="loadState" :data="tableData"
                   :searchConditions="Mix_searchConditions"
                   :showSummary="false"
                   @reload="getTableData"
                   @table-action="tableAction"
                   @selection-change="selectionChange"
        ></ns-biz-table>

        <!--dialog - auto form submit infomation-->
        <ns-dialog
          :title="dialogTit"
          :visible.sync="dialogVisible.visible"
          type="autoHeight"
          @close="dialogClose('addDictionaryItemForm')"
        >
          <!--auto form-->
          <ns-auto-form
            ref="addDictionaryItemForm"
            autoFormID="addDictionaryItemForm"
            :funcId="Mix_funcId"
            :request-url="requestUrl"
            :submit-url="submitUrl"
            :query="{ dictionaryItemId: selectedGridNodeObj.jeCoreDictionaryitemId }"
            :cover-data="coverData"
            cue-type="only-error"
            :showMessage="showMessage"
            @afterRequest="afterRequest"
          >
          </ns-auto-form>
          <div slot="footer" style="overflow: hidden;">
            <ns-biz-role-button-area :buttonList="roleButtonForm" @command="roleButtonCommandForm" class="fr"></ns-biz-role-button-area>
          </div>
        </ns-dialog>
      </div>
    </div>
  </div>
</template>
<script>
  import Mixin from "@NEAP/mixins";
  import * as store from '@NEAP/utils/nsQuery/nsStore';
  import {downloadExcel} from '../../../service/Common/download';
  import {tableDataFetch} from '../../../service/Common/table-fetch';
  import { mapGetters } from 'vuex';
  import {deleteDictionaryItem} from '../../../service/System/systemDataDictionary';

  export default {
    name: 'data-dictionary',
    pageType: 'basic',
    mixins: [Mixin],
    data() {
      return {
        //========== 筛选器 search =========
        //表格数据加载状态
        loadState: {
          data: false,
          head: false,
        },

        //========== 表格 grid =========
        tableData: {}, //列表数据
        multipleSelection: [], //grid selected list
        selectedGridNodeObj: {}, //选中的表格当前行数据

        //========== dialog auto form  =========
        dialogVisible: {visible: false}, //dialog switch
        dialogTit: '', //dialog title
        submitType: 'add', //判断当前表单的类型（add / edit）
        requestUrl: '', //自动表单提交地址
        showMessage: false,
        submitUrl: '',
        coverData: {},

        //========== 树 tree =========
        treeNodeObj: {},
        dictionaryTreeVisible: {
          visible: false,
        },
        org_nodeId: '',
        org_nodeName: '',
        dic_nodeName: '',
      };
    },
    computed: {
      ...mapGetters(['roleButtonForm'])
    },
    methods: {
      //表数据查询
      getTableData(condition) {
        console.log('表数据查询-表数据查询');
        console.log(this.condition);
        if (condition) {
          this.Mix_searchConditions.filterList = condition;
        }

        this.loadState.data = false;
        tableDataFetch(
          {
            url: '/system/dictionary/list-dictionaryItem',
            query: this.Mix_searchConditions,
            funcId: this.Mix_funcId,
            params: {
              dictionaryitemDictionaryId: this.Mix_searchConditions.dictionaryitemDictionaryId,
              dictionaryGroupId: this.Mix_searchConditions.dictionaryGroupId,
            },
          },
        ).then(res => {
          this.tableData = res.resultData;
          console.log('请求到的表格数据：');
          console.log(this.tableData);
          console.log('表格操作按钮', this.gridBtns);
          this.tableBtnDistribute(this.tableData);
          this.loadState.data = true;

        }).catch(() => {

          this.tableData = {};
          this.loadState.data = true;

        });
      },


      /**
       * grid ation event （操作列操作回调事件）
       * @param params
       * @param scope
       */
      tableAction(params, scope) {
        this.selectedGridNodeObj = scope.row;
        switch (params.value) {
          //删除
          case 'gridRemoveBtn':
            this.$confirm('确定删除?', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
            })
              .then(() => {
                deleteDictionaryItem(
                  {
                    dictionaryItemId: this.selectedGridNodeObj.jeCoreDictionaryitemId,
                  },
                  {}
                )
                  .then(() => {
                    this.$message({
                      message: '删除成功',
                      type: 'success',
                    });
                    this.getTableData();
                  })
                  .catch(() => {
                    this.$message({
                      message: '删除失败，请联系开发商',
                      type: 'error',
                    });
                  });
              })
              .catch(() => {
                this.$message({
                  type: 'info',
                  message: '删除已取消',
                });
              });
            break;
          //编辑
          case 'gridEditBtn':
            this.dialogTit = '编辑字典项';
            this.requestUrl = '/system/dictionary/detail-dictionaryItem';
            this.submitUrl = '/system/dictionary/edit-dictionaryItem';
            store.formController.set('addDictionaryItemForm', {
              show: true,
            });
            this.$set(this.dialogVisible, 'visible', true);
            break;
          default:
            break;
        }
      },



      /**
       * 表单按钮点击
       * @param command按钮信息
       */

      roleButtonCommandForm(command){
        if(command.code === 'formConfirmBtn'){
          this.autoFormSubmit()
        }
        if(command.code === 'formCancelBtn'){
          this.autoFormCancel();
        }
      },


      /**
       * auto-form submit  ( 提交按钮事件操作 )
       * @param command       button-info
       */
      autoFormSubmit() {
        this.showMessage = true;
        this.$refs['addDictionaryItemForm'].submitForm('addDictionaryItemForm').then(() => {
          this.$message({message: '保存成功', type: 'success'});
          this.showMessage = false;
          this.$set(this.dialogVisible, 'visible', false);
          store.formController.delete('addDictionaryItemForm');
          this.getTableData();
        });
      },

      /**
       * auto-form Cancel  ( 取消按钮事件操作 )
       * @param formName       button-info
       */
      autoFormCancel() {
        this.$refs.addDictionaryItemForm.resetForm('addDictionaryItemForm');
        this.$set(this.dialogVisible, 'visible', false);
        this.showMessage = false;
      },

      //自动表单请求获取数据之后 操作
      afterRequest(vm, data) {
        data.modelData.dictionaryitemDictionaryId = this.treeNodeInfo.nodeValue;
        data.modelData.organizationId = this.treeNodeInfo.organizationId;
        //新增的时候从树上获取节点层级
        if (data.modelData.dictionaryitemDictionaryName === '') {
          let pName = this.treeNodeInfo.parent ? this.treeNodeInfo.parent.nodeName : '';
          let nodeName = this.treeNodeInfo.nodeName;
          data.modelData.dictionaryitemDictionaryName = `${pName}-${nodeName}`;
        }
        data.modelData.organizationName = this.org_nodeName;
        data.modelData.organizationId = this.org_nodeId;
      },


      /**
       * action btn 点击
       */
      roleButtonCommand: function(command){
        if (command.code === 'actionAddBtn') {
          this.addDictionaryItem();
        }
        if (command.code === 'actionExportBtn') {
          //导出
          downloadExcel('/system/dictionary/export-excel', this.Mix_searchConditions)
        }
      },


      //新增-初始化动态表单
      addDictionaryItem() {
        if (
          !this.treeNodeInfo.nodeValue ||
          this.treeNodeInfo.nodeType === 'root' ||
          this.treeNodeInfo.nodeType === 'dicGroup'
        ) {
          this.$message({message: '请先选择字典', type: 'warning'});
          return false;
        } else {
          this.dialogTit = '新增字典项';
          this.requestUrl = '/system/dictionary/init-form';
          this.submitUrl = '/system/dictionary/add-dictionaryItem';
          store.formController.delete('addDictionaryItemForm');
          store.formController.set('addDictionaryItemForm', {show: true});
          this.$set(this.dialogVisible, 'visible', true);
        }
      },
      /**
       * tree item click (选择组织节点回调)
       * @param condition
       */
      treeItemClick(condition, parent) {
        this.treeNodeInfo = condition;
        this.treeNodeInfo.parent = parent;
        this.getTableData();
      },


      organizeTreeItemClick(org) {
        this.org_nodeName = org.organizationName;
        this.org_nodeId = org.organizationId;
      },
      //grid选择项发生变化时
      selectionChange(selection) {
        let arry = [];
        for (let i = 0; i < selection.length; i++) {
        }
        this.multipleSelection = arry;
      },

      /**
       * dialog close
       * @param formName
       */
      dialogClose(formName) {
        this.showMessage = false;
        store.formController.delete(formName); //销毁表单
      },
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  /*.win .ns-container .ns-container-left {*/
  /*width: 492px;*/
  /*}*/

</style>
