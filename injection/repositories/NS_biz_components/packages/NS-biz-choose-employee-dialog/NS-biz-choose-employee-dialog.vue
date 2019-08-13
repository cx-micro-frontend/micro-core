<template>
  <ns-dialog
    :visible.sync="showDialog"
    @close="close"
    width="1160px"
    title="选择员工"
    class="choose-employee-dialog"
  >
    <div class="choose-employee-container">
      <!-- 组织树 -->
      <div class="choose-employee-container-left">
        <ns-biz-organize-tree-simple
          @tree-item-click="treeClick"
        />
      </div>
      <div class="choose-employee-container-right">
        <!--表格部分-->
        <ns-biz-table ref="biz-table" :loadState="loadState" :data="tableData"
                      :autoResize="false"
                      :customHeight="478"
                      :pagerCount="5"
                      :localHead="head"
                      :searchConditions="searchConditions"
                      :showSummary="false"
                      :hasActionCol="false"
                      :firstColType="firstColType"
                      :showHeadOperation="false"
                      @reload="getTableData"
                      @selection-change="selectionChange"
        />
      </div>
    </div>

    <div slot="footer">
      <ns-button type="primary" @click="submit">{{btnName}}</ns-button>
    </div>
  </ns-dialog>
</template>

<script>
  import head from './chooseEmployeeHead';
  import { tableDataFetch } from '@NEAP/service/System/TableFetch/table-fetch';

  export default {
    name: 'Ns-biz-choose-employee-dialog',

    props: {
      visible: Boolean,

      funcId: [String, Number],

      firstColType: {
        type: String,
        default: 'selection'
      },

      btnName: {
        type: String,
        default: '确定'
      },

      beforeClose: {
        type: Function   //promise对象， resolve后执行close
      }
    },

    data() {
      return {
        showDialog: this.visible,
        searchConditions: {
          pageNum: 1,
          pageSize: 10
        },
        model: {
          checkUserList: [], // 选中的检查参会与人
          organizationId: '', // 组织id
        },
        head,
        tableData: {},
        loadState: {
          head: false,
          data: false,
        },
      };
    },

    methods: {
      treeClick(node) {
        this.model.organizationId = node.id;
        this.getTableData();
      },

      close() {
        this.showDialog = false;
        this.$refs['biz-table'].resetSelectState(this.firstColType);
        this.$emit('update:visible', this.showDialog);
      },

      //表数据查询
      getTableData(isFirst) {
        this.loadState.data = false;
        if(!isFirst){
          this.$refs['biz-table'].resetSelectState(this.firstColType);
        }
        // 获取当前组织id
        this.searchConditions.organizationId = this.model.organizationId;
        this.searchConditions.fileLists = [
          {"comparison":"EQUAL","fieldName":"isActived","fieldValue":"1","type":"select","isShow":true},
          {"comparison":"EQUAL","fieldName":"userState","fieldValue":"1","type":"select","isShow":true}
        ];
        tableDataFetch(
          {
            url: '/system/user/list-user',
            query: this.searchConditions,
            funcId: this.funcId,
          },
        ).then(res => {
          this.tableData = res.resultData;
          this.loadState.data = true;
        }).catch(() => {
          this.tableData = {};
          this.loadState.data = true;
        });
      },

      // 表格选中
      selectionChange(selectedList) {
        this.model.checkUserList = this.firstColType === 'radio'? [selectedList] : selectedList;
      },

      // 提交
      submit() {
        if (this.model.checkUserList.length > 0) {
          this.$emit('getCheckUserList', this.model.checkUserList);
          if(this.beforeClose){
            this.beforeClose(this.model.checkUserList);
          }else{
            this.close();
          }
        } else {
          this.$message.error('请选择员工');
        }
      },
    },

    watch: {
      visible(val) {
        this.showDialog = val;
        if (!val) {
          this.model.checkUserList = [];
        }else{
          this.getTableData(true);
        }
      },
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .choose-employee-dialog .choose-employee-container {
    display: flex;
    height: 100%;
    .choose-employee-container-left {
      width: 300px;
      border: 1px solid #e8e8e8;
      margin-right: 10px;
    }
    .el-input__validateIcon{
      display: none;
    }
    .choose-employee-container-right {
      flex: 1;
      position: relative;
    }
  }
</style>
