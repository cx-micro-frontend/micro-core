<!--部门与员工 -->
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
        <employee-form
          :funcId="Mix_funcId"
          :dialogTit="dialogTit"
          :treeNodeObj="treeNodeInfo"
          :scope="selectedGridNodeObj"
          :dialogVisible="dialogVisible.employeeFormVisible"
          v-if="dialogVisible.employeeFormVisible.visible"
          @refreshGrid="getTableData"
        ></employee-form>
      </div>
      <!--导入弹出框-->
      <ns-dialog title="导入员工信息" :visible.sync="importVisible.visible">
        <ns-form ref="importForm" :model="importForm" label-width="100px">
          <ns-form-item label="操作步骤：">
            <span>
              <br/>
              1、下载《员工信息导入模板》
              <br/>
              2、打开下载表，将对应字段信息输入或粘贴进本表。<br/>为保障粘贴信息被有效导入，请使用纯文本或数字<br/>
              3、信息输入完毕，点击 “浏览” 按钮， 选择excel文档<br/>
              4、点击 “开始导入”
            </span>
          </ns-form-item>
          <a><span>立即下载《员工信息导入模板》</span></a>
        </ns-form>
        <span slot="footer" class="dialog-footer">
          <ns-button type="primary" @click.native="submitForm('moreFormVisible')">保存</ns-button>
          <ns-button @click.native="importVisible = false">取消</ns-button>
        </span>
      </ns-dialog>
    </div>
  </div>
</template>
<script>
  import Mixin from "@NEAP/mixins";
  import {tableDataFetch} from '../../../service/Common/table-fetch';
  import {gridDataDelete, gridDataOperate} from '../../../service/System/systemOrgEmployee';
  import employeeStaticData from './employeeStaticData';
  import pickerOptionsMap from './pickerOptionsMap';
  import employeeForm from './components/infoDialog.vue';
  import {downloadExcel} from '../../../service/Common/download';

  export default {
    name: 'employeeList',
    pageType: 'basic',
    mixins: [Mixin],
    components: {employeeForm},
    data() {
      return {
        //========== 表格 grid =========
        employeeList: [],
        tableData: {}, //列表数据
        multipleSelection: [], //grid selected list
        selectedGridNodeObj: {}, //选中的表格当前行数据
        //表格数据加载状态
        loadState: {
          data: false,
          head: false,
          roleButton: false,
        },

        //========== dialog auto form  =========
        // dialogVisible: {visible: false},//dialog switch
        dialogVisible: {
          employeeFormVisible: {visible: false},
        },
        dialogTit: '', //dialog title
        submitType: 'add', //判断当前表单的类型（add / edit）
        requestUrl: '', //自动表单提交地址
        submitUrl: '',
        autoFormID: '', //表单ID
        dialogWidth: '764px',
        addUserCover: {
          //datePiker option
          pickerOptions: {
            userBirthday: pickerOptionsMap['date-point'].birthday,
          },
          resourcefieldBindingfnList: {
            userState: params => {
              if (params.type === 'change' && params.type !== 'visibleChange') {
                const webVm = store.vm.get('employeeList');
                if (params.formData.modelData[params.modelKey] === '0') {
                  webVm.$message({
                    message: '离职后该员工将不能登录系统!!!',
                    type: 'warning',
                  });
                }
              }
            },
          },
          dynamicQuery: {
            roleids: '',
          },
        },
        addPersonToRoleCoverData: {
          dynamicQuery: {
            userIds: '',
          },
        },
        localData: employeeStaticData,
        isAdd: false, //是否新增表单

        //========== tree =========
        treeNodeObj: {},

        //========== 其他  =========
        importForm: {},
        importVisible: {
          visible: false,
        },
      };
    },
    methods: {
      /**
       * 权限按钮区域操作
       * @param command
       */
      roleButtonCommand(command) {
        //新增员工-初始化动态表单
        if (command.code === 'actionAddUserBtn') {
          this.isAdd = true; //新增开关
          if (!this.treeNodeInfo.organizationId || this.treeNodeInfo.organizationId === 0) {
            this.$message({message: '请先选择组织', type: 'warning'});
          } else {
            this.dialogTit = '新增员工';
            this.selectedGridNodeObj.type = 'add';
            this.dialogVisible.employeeFormVisible.visible = true;
          }
        }
        //导入
        if (command.code === 'import') {
          this.importVisible.visible = true;
        }
        //导出
        if (command.code === 'actionExportBtn') {
          downloadExcel('/system/user/export-excel', this.Mix_searchConditions);
        }
      },

      /**
       * grid ation event （操作列操作回调事件）
       * @param params
       * @param scope
       */
      tableAction(params, scope) {
        this.selectedGridNodeObj = scope.row;
        this.selectedGridNodeObj.type = 'edit';
        switch (params.value) {
          case 'gridEditBtn': //编辑
            this.dialogTit = '编辑员工';
            this.dialogVisible.employeeFormVisible.visible = true;
            break;
          case 'leave': //离职
            this.$confirm('确定离职?', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
            })
              .then(() => {
                gridDataOperate({
                  userId: this.selectedGridNodeObj.userId,
                  operateType: 'leave',
                })
                  .then(() => {
                    this.$message({
                      message: '离职成功',
                      type: 'success',
                    });
                    this.getTableData();
                  })
                  .catch(() => {
                    this.$message({
                      message: '离职失败，请联系开发商',
                      type: 'error',
                    });
                  });
              })
              .catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消离职',
                });
              });
            break;
          case 'gridEnableBtn': //激活
            this.$confirm('确定启用?', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
            })
              .then(() => {
                gridDataOperate({
                  userId: this.selectedGridNodeObj.userId,
                  operateType: 'enable',
                })
                  .then(() => {
                    this.$message({
                      message: '启用成功',
                      type: 'success',
                    });
                    this.getTableData();
                  })
                  .catch(() => {
                    this.$message({
                      message: '启用失败，请联系开发商',
                      type: 'error',
                    });
                  });
              })
              .catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消启用',
                });
              });
            break;
          case 'gridStopBtn': //停用
            this.$confirm('停用之后该员工将不能登录系统，确定停用?', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
            })
              .then(() => {
                gridDataOperate({
                  userId: this.selectedGridNodeObj.userId,
                  operateType: 'stop',
                })
                  .then(() => {
                    this.$message({
                      message: '停用成功',
                      type: 'success',
                    });
                    this.getTableData();
                  })
                  .catch(() => {
                    this.$message({
                      message: '停用失败，请联系开发商',
                      type: 'error',
                    });
                  });
              })
              .catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消停用',
                });
              });
            break;
          case 'gridRemoveBtn': //删除
            this.$confirm('确定删除?', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              closeOnClickModal: false,
            })
              .then(() => {
                gridDataDelete({
                  userId: this.selectedGridNodeObj.userId,
                })
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
                  message: '已取消删除',
                });
              });
            break;
          default:
            break;
        }
      },

      //grid勾选 checkbox/radio 回调
      selectionChange(selection) {
        let arry = [];
        for (let i = 0; i < selection.length; i++) {
          arry.push(selection[i].houseId);
        }
        this.multipleSelection = arry;
      },

      /**
       * tree item click (选择组织节点回调)
       * @param condition
       */
      treeItemClick(condition) {
        console.log('选择组织节点回调-选择组织节点回调');
        console.log(condition);
        this.treeNodeInfo = condition;
        this.addUserCover.dynamicQuery.roleids = this.treeNodeInfo.organizationId;

        this.getTableData();
      },

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
            url: '/system/user/list-user',
            query: this.Mix_searchConditions,
            funcId: this.Mix_funcId,
          },
        ).then(res => {
          this.tableData = res.resultData;
          console.log(this.Mix_searchConditions);
          console.log(this.tableData);
          console.log('表格操作按钮', this.gridBtns);
          this.tableBtnDistribute(this.tableData);
          this.loadState.data = true;

        }).catch(() => {
          this.tableData = {};
          this.loadState.data = true;

        });
      },
    },

    created() {

    },
  };
</script>
