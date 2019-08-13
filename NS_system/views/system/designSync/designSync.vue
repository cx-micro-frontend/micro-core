<template>
  <div class="win" :id="pageID">
    <div class="ns-container clear">
      <p class="win-tit"><span>▌</span>&nbsp;设计同步</p>
      <div class="action-module handle" :id="pageID + '-search'">
        <ns-input class="remoteHandle fl" v-model="searchVal" placeholder="请输入搜索内容"/>
        <ns-button type="primary" @click="search">查询</ns-button>
        <!--action - 权限按钮操作区域-->
        <ns-biz-role-button-area :buttonList="roleButtonAction" @command="roleButtonCommand" class="fr"></ns-biz-role-button-area>

      </div>
      <!--TableFetch content-->
      <div class="table-content" v-loading="tableLoading" element-loading-text="拼命加载中">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="selectionChange"
        >
          <div v-for="(item, index) in tableHeadSync" :index="index" :key="index">
            <el-table-column
              v-if="arrContainObj(specialCol, item.type)"
              :type="item.type"
              :label="item.label"
              :align="item.align"
              :min-width="item.width"
              :fixed="item.fixed"
            ></el-table-column>
            <el-table-column
              v-if="item.type === 'normal'"
              :label="item.label"
              :min-width="item.width"
              :align="item.align"
              :fixed="item.fixed"
            >
              <template slot-scope="scope">{{ scope.row[item.key] }}</template>
            </el-table-column>
          </div>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
  import Mixin from "@NEAP/mixins";
  import utils from '@NEAP/utils';
  import {designSync_search, designSync_submit} from '../../../service/System/designSync';

  export default {
    name: 'design-sync',

    pageType: 'reporting',

    mixins: [Mixin],

    data() {
      return {
        pageID: 'design-sync',
        tableLoading: false,
        searchVal: '', //select v-model
        specialCol: ['selection'], //special TableFetch col
        tableHeadSync: [
          {
            type: 'selection',
            label: '',
            width: '50',
            key: null,
            align: 'left',
            fixed: 'left',
          },
          {
            type: 'normal',
            label: '公司名称',
            width: '400',
            key: 'organizationName',
            align: 'left',
            fixed: null,
          },
        ], //table head
        tableData: [{organizationName: ''}], //table data
        multipleSelection: [],
      };
    },
    created() {
      this.search({orgName: ''});
    },
    computed: {},
    methods: {
      //click input icon function
      search() {
        let query = {orgName: this.searchVal};
        this.tableLoading = true;
        designSync_search(query)
          .then(response => {
            this.message('success', '加载成功');
            this.tableData = response.resultData;
            this.tableLoading = false;
          })
          .catch(response => {
            this.message('error', '加载失败');
            return Promise.reject(response);
          });
      },

      /**
       * action btn 点击
       */
      roleButtonCommand: function (command) {
        if (command.code === 'actionSyncAllBtn') {
          this.selectAll(this.tableData);
        }
        if (command.code === 'actionSyncSelectedBtn') {
          //导出
          this.selectSome();
        }
      },

      //select all
      selectAll(rows) {
        //显示选中
        this.$refs['multipleTable'].clearSelection();
        rows.forEach(row => {
          this.$refs['multipleTable'].toggleRowSelection(row);
        });
        //操作同步
        const query = {orgName: '', syncType: 20};
        this.uploadData(query);
      },

      //select some
      selectSome() {
        if (!this.multipleSelection.length) {
          return this.$message({message: '请至少选择一条数据', type: 'error'});
        }
        //操作同步
        const orgList = [];
        this.multipleSelection.forEach(item => {
          orgList.push({
            enterpriseId: item.enterpriseId,
            organizationId: item.organizationId,
            userId: item.createUserId,
          });
        });
        const query = {orgList: orgList, orgName: '', syncType: 10};
        this.uploadData(query);
      },

      //upload table data
      uploadData(data) {
        this.tableLoading = true;
        designSync_submit(data)
          .then(response => {
            this.tableLoading = false;
            this.message('success', '同步成功');
          })
          .catch(error => {
            this.tableLoading = false;
            this.message('error', error.resultMsg);
          });
      },
      //judge array contain another Obj
      arrContainObj(arr, str) {
        return utils.arrContainObj(arr, str);
      },
      //selectionChange (当选择项发生变化时)
      selectionChange(val) {
        this.multipleSelection = val;
      },
      //message
      message(type, msg) {
        this.$message({
          showClose: true,
          message: msg,
          type: type,
          onClose: () => {
            this.tableLoading = false;
          },
        });
      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  #design-sync.win {
    .ns-container {
      padding: 10px 30px;
      .handle {
        padding: 20px 0 10px;
        clear: both;
        overflow: hidden;
        .remoteHandle {
          margin-right: 10px;
        }
        .btn-handle {
        }
      }
      .table-content {
        padding: 10px 0 20px;
      }
    }
    .el-table .cell,
    .el-table__row .cell .td-txt {
      word-break: normal;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      line-height: 40px;
    }
  }
</style>
