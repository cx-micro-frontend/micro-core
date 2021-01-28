﻿<!--标准页 模板 -->
<template>
  <div class="win" id="dontMove">
    <!--整体容器-->
    <div class="ns-container">
      <!--右侧部分-->
      <div class="ns-container-right">
        <!--顶部操作区域 - action-module (search / button)-->
        <div class="action-module">
          <!--筛选器 search module-->
          <ns-biz-search-conditions
            :funcId="Mix_funcId"
            :searchConditions="Mix_searchConditions"
            @query="getTableData"
            :responseColumn="responseColumn"
          >
            <!--action - 权限按钮操作区域-->
            <ns-biz-role-button-area
              :buttonList="roleButtonAction"
              @command="roleButtonCommand"
              class="fr"
            ></ns-biz-role-button-area>
          </ns-biz-search-conditions>
        </div>
        <!--表格部分-->
        <ns-biz-new-table
          ref="employeeListTable"
          :loading="loading"
          :data="tableData.list"
          :total="tableData.total"
          isHugeData
          :searchConditions="Mix_searchConditions"
          @getResponseColumn="getResponseColumn"
          @table-action="tableAction"
          @reload="getTableData()"
          @select-change="selectedRowsChange"
          @select-all="selectedRowsChange"
        ></ns-biz-new-table>
        <!-- 新增/编辑 弹窗 -->
        <item-dialog
          :dialogType="dialogType"
          :scope="selectedGridNodeObj"
          :visible.sync="showDialog"
          :buttonList="roleButtonForm"
          @refreshGrid="getTableData"
        ></item-dialog>
      </div>
    </div>
  </div>
</template>

<script>
  import Mixin from '@NEAP/mixins';//架构混入mixin
  import itemDialog from './components/itemDialog.vue';//引入编辑/新增 弹窗组件
  import { deleteItem, batchDelete, tableDataFetch } from '@NEAP/service';//service api


  export default {
    //页面名称id
    name: 'dontMove',
    mixins: [Mixin],
    components: { itemDialog },
    data() {
      return {
        //========== 表格部分 =========
        tableData: {}, //列表数据
        selectedGridNodeObj: {}, //选中的表格当前行数据
        loading: true,    //表格数据加载状态
        responseColumn: [], //筛选器数据

        //========== 弹窗部分 dialog =========
        showDialog: false,
        dialogType: '', //dialog title
      };
    },
    mounted() {
      this.getTableData();
    },
    methods: {
      /**
       * 权限按钮区域操作
       * @param command
       */
      roleButtonCommand(command) {
        //新增
        if (command.code === 'add') {
          this.addItem();
        }
        // 批量删除
        if (command.code === 'deleteBatch') {
          this.batchDelete();
        }
      },

      /**
       * 新增操作
       */
      addItem() {
        this.dialogType = 'add';//弹窗组件类型切换为新增
        this.showDialog = true;//打开弹窗
      },

      /**
       * 删除单个操作
       */
      deleteItem() {
        //凡是删除操作，打开通知弹窗 - 让用户选择确定 / 取消
        this.$confirm('确定删除?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          closeOnClickModal: false,
        }).then(() => {
          deleteItem(this.selectedGridNodeObj.id)
            .then(() => {
              this.$message({
                message: '删除成功',
                type: 'success',
              });
              this.getTableData();
            })
            .catch(() => {
              this.$message({
                message: '删除失败',
                type: 'error',
              });
            });
        });
      },

      /**
       * 批量删除操作
       */
      batchDelete() {
        //先判断是否勾选，再调取接口操作
        if (!this.selectedRows || !this.selectedRows.length) {
          return this.$message({
            type: 'warning',
            message: '请选择',
          });
        }

        //凡是删除操作，打开通知弹窗 - 让用户选择确定 / 取消
        this.$confirm('此操作将批量删除所选数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          const ids = this.selectedRows.map(el => el.id);
          batchDelete(ids).then(() => {
            this.$message({
              type: 'success',
              message: '批量删除成功!',
            });
            //操作好后刷新表格数据
            this.getTableData();
          });
        });
      },

      /**
       * 获取表头数据， 用于筛选器
       * @param list
       */
      getResponseColumn(list) {
        this.responseColumn = list;
      },

      /**
       * 获取表格数据
       */
      getTableData(condition) {
        if (condition) {
          this.Mix_searchConditions.filterList = condition;
        }
        this.loading = true;
        tableDataFetch(
          { query: this.Mix_searchConditions, funcId: this.Mix_funcId },
        ).then((res) => {
          this.tableData = res.resultData;

          //表格加载处理 - 固定写法 - 入参勿随意改动
          this.tableLoader(this.gridBtns);

          this.loading = false;

        }).catch(() => {
          this.tableData = {};
          this.loading = false;
        });
      },

      /**
       * 表格加载处理
       * 可在其中做一些业务操作，如：
       *  1、增加权限按钮
       *  2、过滤数据
       *  3、其他异步请求
       * @param gridBtns  - 参数，表格的权限按钮列表数据
       */
      tableLoader(gridBtns = []) {
        //当表数据和表格权限按钮数据同时获取到位后，才进行后续操作
        if (gridBtns.length === 0) return;
        if (!this.tableData.list) return;

        //为表格增加权限按钮
        this.tableData.list.forEach((item) => {
          this.$set(item, 'fnsclick', gridBtns);
        });

        // console.log('渲染的表格数据：');
        // console.log(this.tableData);
      },

      /**
       * 操作列按钮点击事件 - table action in column
       * @param info - 按钮信息
       * @param row - 行信息
       * @param rowIndex - 行索引
       * @param column - 列信息
       * @param columnIndex - 列索引
       */
      tableAction(info, { row, rowIndex, column, columnIndex }) {

        // console.log('tableAction');
        // console.log(info);
        // console.log({ row, rowIndex, column, columnIndex });

        //获取表格行数据
        this.selectedGridNodeObj = row;

        switch (info.value) {
          case 'edit': //编辑
            this.dialogType = 'edit';//弹窗组件类型切换为编辑
            this.showDialog = true;
            break;
          case 'delete': //删除
            this.deleteItem();
            break;
          default:
            break;
        }
      },


      /**
       * 表格 select 操作（包含全选和单个选择）
       * @param selection
       */
      selectedRowsChange({ selection }) {
        this.selectedRows = selection;
      }

    },
  };
</script>
