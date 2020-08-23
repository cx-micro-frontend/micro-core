<!--菜单-任务-->
<template>
  <div class="win" :id="pageID">
    <div class="ns-container">
      <div class="ns-container-right" :id="pageID + '-holder'">
        <!--action-module (search / button)-->
        <div class="action-module" :id="pageID + '-search'">
          <!--search module-->
          <ns-arm-search-conditions
            :funcId="funcId"
            :local-head="searchLocalHead"
            :searchConditions="searchConditions"
            :specConditions="specConditions"
            :isLocalHead="true"
            :on-handler-click="false"
            @query="getGridData"
          >
          </ns-arm-search-conditions>
        </div>
        <!--grid module-->
        <ns-arm-table
          :gridID="pageID + '-grid'"
          :localFuncId="pageID"
          ref="biz-table"
          :data="gridData.list"
          :total="gridData.total"
          :loading="loading"
          @table-action="gridAction"
          :validateRulesBtn="validateRulesBtn"
          :searchConditions="searchConditions"
          @reload="getGridData"
          :localHead="localHead"
          firstColType="index"
        ></ns-arm-table>

        <!--导入-->
        <ns-import
          :visible.sync="dialogVisible.importVisible.visible"
          :title="dialogTitle"
          :importType="importType"
          :uploadUrl="uploadUrl"
          @refresh-upload="getGridData"
        ></ns-import>
      </div>
    </div>
  </div>
</template>

<script>
  import importLocalHead from './importLocalHead';
  import importSearchHead from './importSearchHead';
  import importDetails from '@ROOT/NS_arm_components/packages/ns-components/table-view/importDetails/importDetails';
  import { tableDataFetch } from './service/common/table-fetch';
  import nsArmTable from '@ROOT/NS_arm_components/packages/biz/arm-table/arm-table';
  import nsArmSearchConditions from '@ROOT/NS_arm_components/packages/biz/arm-search-conditions/arm-search-conditions';


  export default {
    name: 'import',

    components: { importDetails, nsArmTable, nsArmSearchConditions },

    data() {
      return {
        //========== 基本 base =========
        pageID: 'import', //页面、表格、自动表单 ID值（必须）
        validateRulesBtn: false, //是否验证权限按钮
        funcId: 'importTaskViewFuncId',
        //========== 筛选器 =========
        specConditions: [
          {
            type: 'select',
            condition: 'uploadType',
            comparison: 'LIKE',
            multiple: false,
            items: [
              { label: '房产导入', value: '房产导入' },
              { label: '家庭成员导入', value: '家庭成员导入' },
              { label: '已缴款导入', value: '已缴款导入' },
              { label: '预收款导入', value: '预收款导入' },
              { label: '抄表明细导入', value: '抄表明细导入' },
              { label: '仪表导入', value: '仪表导入' },
              { label: '押金导入', value: '押金导入' },
              { label: '公摊抄表明细导入', value: '公摊抄表明细导入' },
              { label: '临时缴款导入', value: '临时缴款导入' },
              { label: '银行账户导入', value: '银行账户导入' },
            ],
            requestUrl: '',
            value: 'uploadType',
          },
        ],

        //========== 表格 grid =========
        gridData: {}, //列表数据
        localHead: importLocalHead, // 本地表头
        sumDataCustom: null,
        searchLocalHead: importSearchHead,

        //========== 开关 =========
        dialogVisible: {
          importVisible: { visible: false },
        },

        searchConditions: {
          pageNum: 1,
          pageSize: 20,
          filterList: []
        },

        //========== 组件 =========
        dialogTitle: '',
        importType: null,
        uploadUrl: '',
        list: [
          {
            uploadType: '房产导入',
            importType: 10,
            uploadUrl: '/api/zuul/custom/custom/import/import-house',
          },
          {
            uploadType: '家庭成员导入',
            importType: 11,
            uploadUrl: '/api/zuul/custom/owner/import-customer',
          },
          // {uploadType: "应收款导入", importType: null, uploadUrl: ""},
          {
            uploadType: '已缴款导入',
            importType: 20,
            uploadUrl: '/api/zuul/custom/paymentChargePay/import-chargePayment',
          },
          {
            uploadType: '预收款导入',
            importType: 30,
            uploadUrl: '/api/zuul/custom/prepayment/import',
          },
          {
            uploadType: '抄表明细导入',
            importType: 40,
            uploadUrl: '/api/zuul/custom/meterDetailImport/import-meterDetail',
          },
          {
            uploadType: '仪表导入',
            importType: 50,
            uploadUrl: '/api/zuul/custom/meterImport/import-meter',
          },
          {
            uploadType: '押金导入',
            importType: 60,
            uploadUrl: '/api/zuul/custom/depositImport/import-deposit',
          },
          {
            uploadType: '公摊抄表明细导入',
            importType: 70,
            uploadUrl: '/api/zuul/custom/shareMeterDetailImport/import-shareMeterDetail',
          },
          {
            uploadType: '临时缴款导入',
            importType: 100,
            uploadUrl: '/api/zuul/custom/temPayment/import',
          },
          {
            uploadType: '银行账户导入',
            importType: 80,
            uploadUrl: '/api/zuul/custom/bankAccount/importBankAccount',
          },
        ],
      };
    },
    created() {
      // 获取存储的pageSize
      const UserBehaviorData = this.$store.state.UserBehavior.behavior;
      if( UserBehaviorData &&  UserBehaviorData[this.pageID] && UserBehaviorData[this.pageID].pageSize)     {
        this.searchConditions.pageSize =  UserBehaviorData[this.pageID].pageSize;
      }

      this.getGridData(); //get grid data
    },
    methods: {
      /**®
       * get grid data (表数据查询)
       * @param condition
       */
      getGridData(condition) {
        if (condition) {
          this.searchConditions.filterList = condition;
        }
        this.loading = true;
        let searchConditions = {
          pageNum: this.searchConditions.pageNum,
          pageSize: this.searchConditions.pageSize,
          totalType: this.searchConditions.totalType,
          filterList: this.searchConditions.filterList,
        };
        tableDataFetch({ query: searchConditions, url: '/log/log/list-queue-log' }).then(
          res => {
            this.gridData = res.resultData;
            //增加 固定操作列 - 按钮数据
            this.gridData.list.forEach(item => {
              item.fnsclick = [{ label: '重新导入', value: 'gridImportBtn' }];
            });
            this.loading = false;
          },
          () => {
            this.gridData = {};
            this.loading = false;
          }
        );
      },

      /**
       * ImportQuery
       * @params params
       * @params scope
       */
      getImportQuery(scope) {
        this.list.map(item => {
          if (scope.row.uploadType === item.uploadType) {
            this.dialogTitle = item.uploadType;
            this.importType = item.importType;
            this.uploadUrl = item.uploadUrl;
          }
        });
      },
      /**
       * grid ation
       * @params params
       * @params scope
       */
      gridAction(params, scope) {
        this.getImportQuery(scope);

        switch (params.value) {
          //导入
          case 'gridImportBtn':
            this.dialogTitle = scope.row.uploadType;
            this.dialogVisible.importVisible.visible = true;
            break;
          default:
            break;
        }
      },
    },
  };
</script>

<style scoped></style>
