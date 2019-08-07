<!--角色与权限-->
<template>
  <div class="win">
    <div class="ns-container">
      <ns-drawer class="ns-container-left" speed="160ms">
        <ns-biz-organize-tree
          :funcId="Mix_funcId"
          draggable
          showFunction
          :searchConditions="Mix_searchConditions"
          @tree-item-click="treeItemClick"
        ></ns-biz-organize-tree>
      </ns-drawer>
      <div class="ns-container-right">
        <!--action-module (search / button)-->
        <div class="action-module">
          <!--search module-->
          <ns-search-conditions
            :funcId="Mix_funcId"
            :searchConditions="Mix_searchConditions"
            @query="getTableData"
          >
            <!--action - 权限按钮操作区域-->
            <ns-biz-role-button-area :buttonList="roleButtonAction" @command="roleButtonCommand" class="fr"></ns-biz-role-button-area>
          </ns-search-conditions>
        </div>
        <!--grid module-->
        <ns-biz-table ref="biz-table" :loadState="loadState" :data="tableData"
                      :searchConditions="Mix_searchConditions"
                      :showSummary="false"
                      @reload="getTableData"
                      @table-action="tableAction"
                      @selection-change="selectionChange"
        ></ns-biz-table>


        <!--auto form 新增角色-->
        <ns-biz-slip-dialog
          :id="nsDialogName"
          :title="dialogTit"
          :visible.sync="dialogVisible.addRolevisible"
          @close="dialogClose"
        >
          <template slot="btns">
            <ns-biz-role-button-area :buttonList="roleButtonForm" @command="roleButtonCommandForm"></ns-biz-role-button-area>
          </template>

          <template slot="main">
            <!--auto form 新增角色-->
            <ns-auto-form
              ref="addRoleForm"
              autoFormID="addRoleForm"
              :funcId="Mix_funcId"
              :request-url="requestUrl"
              :submit-url="submitUrl"
              :query="{ roleid: selectedGridNodeObj.roleid }"
              :local-data="localData"
              :cover-data="addRoleCoverData"
              cue-type="only-error"
              :showMessage="showMessage"
              @afterRequest="afterRequest"
            ></ns-auto-form>
          </template>
        </ns-biz-slip-dialog>

        <!--新增/编辑 授权人-->
        <ns-dialog
          :id="nsDialogName"
          :title="dialogTit"
          :width="dialogWidth"
          :visible.sync="dialogVisible.addPersonToRoleVisible"
          @close="dialogClose"
        >
          <!--auto form 新增授权人-->
          <ns-auto-form
            ref="addPersonToRoleForm"
            autoFormID="addPersonToRoleForm"
            :funcId="Mix_funcId"
            :request-url="requestUrl"
            :submit-url="submitUrl"
            :query="{ roleid: selectedGridNodeObj.roleid }"
            :local-data="localDataRolePerson"
            :cover-data="addPersonToRoleCoverData"
            cue-type="only-error"
            :showMessage="showMessage"
            @afterRequest="afterRequest"
          ></ns-auto-form>

          <div slot="footer" style="overflow: hidden;">
            <ns-biz-role-button-area :buttonList="roleButtonForm" @command="roleButtonCommandForm" class="fr"></ns-biz-role-button-area>
          </div>
        </ns-dialog>
      </div>
    </div>
  </div>
</template>
<script>
  import Mixin from "@NEAP/mainstay/mixins";
  import {tableDataFetch} from '../../../service/Common/table-fetch';
  import {downloadExcel} from '../../../service/Common/download';
  import {deleteRole} from '../../../service/System/systemRolePermission';
  import * as store from '../../../utils/nsQuery/nsStore';
  import roleStaticData from './roleStaticData';
  import rolePersonStaticData from './rolePersonStaticData';
  import {mapGetters} from 'vuex';


  export default {
    name: 'roles-and-authorities',
    pageType: 'basic',
    mixins: [Mixin],

    data() {
      return {
        //========== 基本 base =========
        nsDialogName: 'roles-and-authorities_addRoleForm',

        //========== 表格 grid =========
        tableData: {}, //列表数据
        multipleSelection: [], //grid selected list
        selectedGridNodeObj: {}, //选中的表格当前行数据

        //表格数据加载状态
        loadState: {
          data: false,
          head: false,
        },

        //========== tree =========
        treeNodeObj: {},

        //========== dialog auto form  =========
        dialogVisible: {
          addRolevisible: false,
          addPersonToRoleVisible: false
        }, //dialog switch
        dialogTit: '', //dialog title
        submitType: 'add', //判断当前表单的类型（add / edit）
        requestUrl: '', //自动表单提交地址
        showMessage: false,
        submitUrl: '',
        autoFormID: '', //表单ID
        dialogWidth: '764px',
        addRoleCoverData: {
          dynamicQuery: {
            rolecategoryId: '',
          },
        },
        addPersonToRoleCoverData: {
          dynamicQuery: {
            userIds: '',
          },
        },
        localData: roleStaticData,
        localDataRolePerson: rolePersonStaticData,
      };
    },

    computed: {
      ...mapGetters(['roleButtonForm']),
    },

    methods: {
      /**
       * 表单按钮点击
       * @param command   按钮信息
       */
      roleButtonCommandForm(command) {
        if (command.code === 'formConfirmBtn') {
          this.autoFormSubmit();
        }
        if (command.code === 'formCancelBtn') {
          this.autoFormCancel();
        }
      },


      /**
       * auto-form submit  ( 提交按钮事件操作 )
       * @param
       */
      autoFormSubmit() {
        this.showMessage = true;
        this.nsDialogName = '';
        this.$refs[this.autoFormID].submitForm(this.autoFormID).then(() => {
          this.$message({message: '保存成功', type: 'success'});
          this.showMessage = false;
          this.$set(this.dialogVisible, 'addRolevisible', false);
          this.$set(this.dialogVisible, 'addPersonToRoleVisible', false);
          store.formController.delete('addRoleForm');
          store.formController.delete('addPersonToRoleForm');
          this.getTableData();
        });
      },

      /**
       * auto-form Cancel  ( 取消按钮事件操作 )
       */
      autoFormCancel() {
        this.$refs[this.autoFormID].resetForm(this.autoFormID);
        this.$set(this.dialogVisible, 'addRolevisible', false);
        this.$set(this.dialogVisible, 'addPersonToRoleVisible', false);
        this.nsDialogName = 'roles-and-authorities_addRoleForm';
      },

      //自动表单请求获取数据之后 操作
      afterRequest(vm, data) {
        if (vm.autoFormID === 'addRoleForm') {
          if (this.treeNodeInfo.organizationId && this.treeNodeInfo.organizationName) {
            data.modelData.organizationName = this.treeNodeInfo.organizationName;
            data.modelData.organizationId = this.treeNodeInfo.organizationId;
          } else {
            data.modelData.organizationName = this.selectedGridNodeObj.organizationName;
            data.modelData.organizationId = this.selectedGridNodeObj.organizationId;
          }
          //从本地获取此表单的静态数据
          const formStaticData = this.localData; //this.autoFrom.getFixedFormData("roleStaticData").fixed;
          //将本地数据的modeldata和请求的数据的modeldata混合
          Object.assign(data.modelData, formStaticData.modelData);
          //将本地数据的fields和请求的数据的fields混合
          //vm.$set(data,'fields', formStaticData.fields.concat(data.fields));
          vm.$set(data, 'fields', data.fields.concat(formStaticData.fields));
        }
        if (vm.autoFormID === 'addPersonToRoleForm') {
          data.modelData.roleid = this.selectedGridNodeObj.roleid;
          data.modelData.organizationId = this.selectedGridNodeObj.organizationId;
          //从本地获取此表单的静态数据
          const formStaticData = this.localDataRolePerson;
          //将本地数据的modeldata和请求的数据的modeldata混合
          Object.assign(data.modelData, formStaticData.modelData);
          //将本地数据的fields和请求的数据的fields混合
          vm.$set(data, 'fields', formStaticData.fields.concat(data.fields));
        }
      },

      /**
       * 权限按钮区域操作
       * @param command
       */
      roleButtonCommand(command) {
        //新增员工-初始化动态表单
        if (command.code === 'actionAddRoleBtn') {
          this.addRole();
        }
        if (command.code === 'actionExportBtn') {
          //导出
          downloadExcel('/system/role/export-excel');
        }

      },

      //新增-初始化动态表单
      addRole() {
        if (!this.treeNodeInfo.organizationId || this.treeNodeInfo.organizationId == 0) {
          this.$message({message: '请先选择组织', type: 'warning'});
        } else {
          this.dialogWidth = '900px';
          this.dialogTit = '新增角色';
          this.requestUrl = '/system/role/init-form';
          this.submitUrl = '/system/role/add-role';
          this.autoFormID = 'addRoleForm';
          store.formController.delete('addPersonToRoleForm');
          store.formController.set('addRoleForm', {
            show: true,
          });
          this.$set(this.dialogVisible, 'addRolevisible', true);
        }
      },


      //选择组织节点回调
      treeItemClick(org) {
        console.log('表数据查询-表数据查询');
        console.log(this.condition);
        this.treeNodeInfo = org;
        this.addRoleCoverData.dynamicQuery.rolecategoryId = this.treeNodeInfo.organizationId;
        this.addPersonToRoleCoverData.dynamicQuery.userIds = this.treeNodeInfo.organizationId;
        this.getTableData();
      },

      /**
       * dialog close
       */
      dialogClose() {
        //销毁表单
        this.showMessage = false;
        store.formController.delete('addRoleForm');
        store.formController.delete('addPersonToRoleForm');
        this.nsDialogName = 'roles-and-authorities_addRoleForm';
      },

      //获取表格数据
      getTableData(condition) {
        console.log('表数据查询-表数据查询');
        console.log(this.condition);
        if (condition) {
          this.Mix_searchConditions.filterList = condition;
        }

        this.loadState.data = false;

        tableDataFetch(
          {
            url: '/system/role/list-role',
            query: this.Mix_searchConditions,
            funcId: this.Mix_funcId,
          },
        ).then(res => {
          this.tableData = res.resultData;
          console.log('请求到的表格数据：');
          console.log(this.tableData);
          console.log('表格操作按钮', this.gridBtns);
          this.tableBtnDistribute(this.tableData);
          this.loadState.data = true;
        }, () => {
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
          case 'gridEditBtn': //编辑
            this.dialogWidth = '900px';
            this.dialogTit = '编辑角色';
            this.requestUrl = '/system/role/detail-role?enterpriseId=' + scope.row.enterpriseId + '&organizationId=' + scope.row.organizationId;
            this.submitUrl = '/system/role/edit-role';
            this.autoFormID = 'addRoleForm';
            store.formController.delete('addPersonToRoleForm');
            store.formController.set('addRoleForm', {
              show: true,
              formOperateType: 1,
            });
            this.$set(this.dialogVisible, 'addRolevisible', true);
            break;
          case 'gridRemoveBtn': //删除
            this.$confirm('确定删除?', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              closeOnClickModal: false,
            })
              .then(() => {
                deleteRole(
                  {
                    roleid: this.selectedGridNodeObj.roleid,
                  },
                  {},
                )
                  .then(() => {
                    this.$message({message: '删除成功', type: 'success'});
                    this.getTableData();
                  })
                  .catch(r => {
                    this.$message({
                      message: r.resultMsg || '删除失败，请联系管理员及时处理',
                      type: 'error',
                    });
                  });
              })
              .catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除',
                });
              });
            break;
          case 'gridAuthorizerBtn': //新增授权人
            this.dialogWidth = '764px';
            this.dialogTit = '新增授权人';
            this.requestUrl = '/system/role/init-form-add-person';
            this.submitUrl = '/system/role/add-person-to-role';
            this.autoFormID = 'addPersonToRoleForm';
            store.formController.delete('addRoleForm');
            store.formController.set('addPersonToRoleForm', {
              show: true,
              formOperateType: 1,
            });
            this.$set(this.dialogVisible, 'addPersonToRoleVisible', true);
            break;
          default:
            break;
        }
      },

      //grid选择项发生变化时
      selectionChange(selection) {
        let arry = [];
        for (let i = 0; i < selection.length; i++) {
        }
        this.multipleSelection = arry;
      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  #roles-and-authorities_addRoleForm {
    .el-form-item__error {
      display: none;
    }
    .el-input__inner {
      border-color: #cecece;
    }
  }

  .table-head-action .cell {
    width: 200px;
  }
</style>
