<!--侧边导航菜单 - 报表-->
<template>
  <div id="report-guide">
    <div class="search_container">
      <ns-input
        class="search_inp"
        v-model.trim="searchConditions.reportName"
        @keyup.enter.native="searchReport"
        clearable
        placeholder="请输入报表名称"
      />
      <ns-button type="primary" @click="searchReport">搜索</ns-button>
    </div>
    <div v-if="reportList.length > 0" class="report_container">
      <div
        class="report_wrapper"
        v-for="reportWrapperItem in reportList"
        v-show="!reportWrapperItem.reportWrapperContent.every(i => !i.show)"
        :key="reportWrapperItem.reportWrapperTitle"
      >
        <p class="report_wrapper_title">{{ reportWrapperItem.reportWrapperTitle }}</p>
        <div class="report_wrapper_content">
          <div
            class="report_item"
            v-for="reportItem in reportWrapperItem.reportWrapperContent"
            v-show="reportItem.show"
            @click="jumpToReport(reportItem.reportPath)"
            :key="reportItem.reportName"
          >
            <p class="report_name">{{ reportItem.reportName }}</p>
            <div class="report_desc">{{ reportItem.reportDesc }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="placeholder_container">
      未搜索到报表
    </div>
    <div class="btn_close" @click="close">×</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'reportGuide',
    data() {
      return {
        searchConditions: {
          reportName: '',
        },
        bakReportList: [], // 备份报表
        reportList: [
          // 用于搜索后渲染的列表
          {
            reportWrapperTitle: '应收报表',
            reportWrapperContent: [
              {
                reportName: '应收款明细表',
                reportPath: 'receivablesListReport',
                reportDesc: '统计各个项目的应收金额、减免金额、实际应收等明细',
                show: true,
              },
              {
                reportName: '应收款汇总表',
                reportPath: 'receivablesSummaryReport',
                reportDesc: '统计集团、区域、项目的应收汇总情况',
                show: true,
              },
              {
                reportName: '收费减免统计表',
                reportPath: 'chargeReductionReport',
                reportDesc: '统计各个项目的减免情况，包括减免金额、减免流程、减免时间等',
                show: true,
              },
              {
                reportName: '应收款调整表',
                reportPath: 'shouldPayAdjust',
                reportDesc: '统计各个项目的应收调整情况',
                show: true,
              }
            ],
          },
          {
            reportWrapperTitle: '已收报表',
            reportWrapperContent: [
              {
                reportName: '收款日报表',
                reportPath: 'collectionDateReport',
                reportDesc: '统计各个项目的每日收银款情况、包括金额、税率、票据等',
                show: true,
              },
              {
                reportName: '收款汇总表',
                reportPath: 'collectionOfPaymentsReport',
                reportDesc: '统计集团、区域、项目的每日收银汇总情况',
                show: true,
              },
              {
                reportName: '交房收费明细表',
                reportPath: 'deliveryChargeDetail',
                reportDesc: '统计各个项目的收款科目明细情况',
                show: true,
              },
              {
                reportName: '收银统计表',
                reportPath: 'cashierStatistics',
                reportDesc: '统计各个项目预收、清欠等情况',
                show: true,
              },
              {
                reportName: '预收款账款明细表',
                reportPath: 'accountDetailsReport',
                reportDesc: '统计集团、区域、项目的预收账款情况，预收即预缴',
                show: true,
              },
              {
                reportName: '押金台账',
                reportPath: 'depositAccount',
                reportDesc: '统计各个项目的押金收入和支出情况',
                show: true,
              },
              {
                reportName: '押金台账汇总表',
                reportPath: 'depositGather',
                reportDesc: '统计各个项目的押金收入和支出的汇总情况',
                show: true,
              },
              {
                reportName: '收缴率统计表',
                reportPath: 'collectionRateFeeReport',
                reportDesc: '统计集团、区域、项目、房号、管家等维度的收缴率情况',
                show: true,
              },
              {
                reportName: '科目收缴率统计表',
                reportPath: 'collectionRateReport',
                reportDesc: '统计各个项目科目维度的收缴率情况',
                show: true,
              },
              {
                reportName: '静态收缴率统计表',
                reportPath: 'staticConfiscateRateReport',
                reportDesc: '统计集团、区域、项目维度的静态收缴率',
                show: true,
              },
              {
                reportName: '实时收缴率统计表',
                reportPath: 'actualTimeConfiscateRate',
                reportDesc: '统计集团、区域、项目维度的实时收缴率',
                show: true,
              },
              {
                reportName: '收费情况统计表',
                reportPath: 'statisticsOfChargesReport',
                reportDesc: '统计每个房间的收费基本情况',
                show: true,
              },
              {
                reportName: '权责口径现金收入占比统计表',
                reportPath: 'newseeReportCashRatio',
                reportDesc: '统计各个项目的现金收银占比情况',
                show: true,
              },
              {
                reportName: '收费订单报表',
                reportPath: 'chargeOrderNoReport',
                reportDesc: '统计订单维度的每日收银情况',
                show: true,
              },
            ],
          },
          {
            reportWrapperTitle: '欠收报表',
            reportWrapperContent: [
              {
                reportName: '欠款账龄汇总表',
                reportPath: 'agingSummaryOfArrearsReport',
                reportDesc: '统计集团、区域等欠款账龄情况，可下钻看欠款明细',
                show: true,
              },
              {
                reportName: '客户欠费明细表',
                reportPath: 'arrearsDetailReport',
                reportDesc: '统计项目下，所有房产的欠费明细情况',
                show: true,
              },
              {
                reportName: '年度应收已收欠费明细表',
                reportPath: 'yearsArrearsReport',
                reportDesc: '统计年度的应收已收欠费信息',
                show: true,
              },
            ],
          },
          {
            reportWrapperTitle: '经营报表',
            reportWrapperContent: [
              {
                reportName: '经营收费明细表',
                reportPath: 'operateDetailReport',
                reportDesc: '统计经营类收入及公共收益分成明细情况',
                show: true,
              },
              {
                reportName: '经营收费汇总表',
                reportPath: 'operateAllReport',
                reportDesc: '统计经营类收入及公共收益分成汇总情况',
                show: true,
              },
            ],
          },
          {
            reportWrapperTitle: '结转报表',
            reportWrapperContent: [
              {
                reportName: '收入结转汇总表',
                reportPath: 'incomeCarryForwardSummary',
                reportDesc: '统计集团、区域等按照收费科目的结转汇总',
                show: true,
              },
              {
                reportName: '收入结转明细表',
                reportPath: 'carryOverAccountReceipt',
                reportDesc: '统计某个项目根据收费科目的结转明细',
                show: true,
              },
              {
                reportName: '应收计提表',
                reportPath: 'accrualsReceivableReport',
                reportDesc: '统计某个项目根据收费科目的应收情况，用于做凭证',
                show: true,
              },
              {
                reportName: '物业收入计提表',
                reportPath: 'propertyFeeIncomeReport',
                reportDesc: '统计某个项目根据收费科目的物业应收情况，用于做凭证',
                show: true,
              },
              {
                reportName: '税率结转单',
                reportPath: 'taxRateCarryoverReport',
                reportDesc: '统计某个项目根据收费科目收入的税率收入情况',
                show: true,
              },
              {
                reportName: '收入往来表',
                reportPath: 'rightsAndLiabilitiesReport',
                reportDesc: '统计集团、区域等权责收入情况',
                show: true,
              },
            ],
          },
          {
            reportWrapperTitle: '权责报表',
            reportWrapperContent: [
              {
                reportName: '权责收入结转汇总表',
                reportPath: 'powerRevenueCarryGather',
                reportDesc: '根据权责统计集团、区域等按照收费科目的结转汇总',
                show: true,
              },
              {
                reportName: '权责收入结转明细表',
                reportPath: 'powerRevenueCarryDetail',
                reportDesc: '根据权责统计某个项目根据收费科目的结转明细',
                show: true,
              },
              {
                reportName: '权责应收确认汇总表',
                reportPath: 'newseeReportPowerDutieGroup',
                reportDesc: '统计集团、区域等根据收费科目的权责应收情况',
                show: true,
              },
              {
                reportName: '权责应收确认明细表',
                reportPath: 'newseeReportPowerDutieDetail',
                reportDesc: '统计某个项目根据收费科目的权责应收明细情况',
                show: true,
              },
              {
                reportName: '权责税率结转单',
                reportPath: 'powerTaxRateReport',
                reportDesc: '统计某个项目根据收费科目收入的税率收入情况',
                show: true,
              },
              {
                reportName: '权责收入往来表',
                reportPath: 'powerDutiesIncome',
                reportDesc: '统计集团、区域等权责收入情况',
                show: true,
              },
            ],
          },
          {
            reportWrapperTitle: '基础信息查询表',
            reportWrapperContent: [
              {
                reportName: '客户档案明细表',
                reportPath: 'customerProfileReport',
                reportDesc: '统计客户的房产信息，用于档案维护',
                show: true,
              },
              {
                reportName: '当期所属账期查询表',
                reportPath: 'newseeReportCurrentAccountBook',
                reportDesc: '统计查询当前项目所属账期信息',
                show: true,
              },
              {
                reportName: '收费情况表',
                reportPath: 'chargeCollectionBoenReport',
                reportDesc: '统计集团、区域、项目不同科目及结算方式的总金额',
                show: true,
              },
              {
                reportName: '收款情况统计表',
                reportPath: 'makeCollectionsRateReport',
                reportDesc: '统计集团、区域、项目统计不同结算方式的笔数、金额等',
                show: true,
              },
              {
                reportName: '收款入账情况表',
                reportPath: 'collectionsEntryRateReport',
                reportDesc: '统计集团、区域、项目最新交账日期及收款进度及对应的金额',
                show: true,
              },
              {
                reportName: '票据使用情况表',
                reportPath: 'billUsedSituation',
                reportDesc: '统计项目上的票据使用情况',
                show: true,
              },
              {
                reportName: '房产信息汇总表',
                reportPath: 'houseInfoReport',
                reportDesc: '统计项目上的房产房态情况',
                show: true,
              },
              {
                reportName: '房产变动信息表',
                reportPath: 'changeInfoReport',
                reportDesc: '统计项目上的房态变化情况',
                show: true,
              },
            ],
          },
          {
            reportWrapperTitle: '租赁报表',
            reportWrapperContent: [
              {
                reportName: '房产租赁信息表',
                reportPath: 'rentHouseInfoReport',
                reportDesc: '统计房产的合同基本信息，租期、租金、周期金额等',
                show: true,
              },
              {
                reportName: '空置时间统计表',
                reportPath: 'houseIdleTimeReport',
                reportDesc: '统计项目所有房产的租赁空置天数和空置率',
                show: true,
              },
              {
                reportName: '商管年度报表',
                reportPath: 'rentContractReport',
                reportDesc: '统计各商铺年度应收以及欠费，汇总每月实收金额',
                show: true,
              },
              {
                reportName: '房间合同资产统计表',
                reportPath: 'rentStatisticsReport',
                reportDesc: '以房产维度，统计每个房产租赁合同的概况信息',
                show: true,
              },
              {
                reportName: '合同保证金表',
                reportPath: 'contractDepositReport',
                reportDesc: '统计合同各类保证金的收退信息',
                show: true,
              },
            ],
          },
        ],
      };
    },
    computed: {
      ...mapGetters(['sideMenu']),
    },
    methods: {
      // 处理权限按钮
      buttonHandler() {
        this.sideMenu.forEach(menuItem => {
          if (menuItem.menuMenusubname === 'reporting') {
            this.reportList.forEach(reportItem => {
              reportItem.reportWrapperContent.forEach(contentItem => {
                contentItem.show = menuItem.childMenus.some(
                  submenuItem => submenuItem.menuMenusubname === contentItem.reportPath,
                );
              });
            });
            // 备份报表列表
            this.bakReportList = this.getDeepCopy(this.reportList);
          }
        });
      },
      // 搜索报表
      searchReport() {
        if (this.searchConditions.reportName === '') {
          this.reportList = this.getDeepCopy(this.bakReportList);
        } else {
          let reportWrapperlist = [];
          let reportContentlist = [];
          this.bakReportList.forEach(wrapperItem => {
            reportContentlist = wrapperItem.reportWrapperContent.filter(reportItem => {
              return reportItem.reportName.indexOf(this.searchConditions.reportName) > -1;
            });
            if (reportContentlist.length > 0) {
              reportWrapperlist.push({
                reportWrapperTitle: wrapperItem.reportWrapperTitle,
                reportWrapperContent: reportContentlist,
              });
            }
          });
          this.reportList = reportWrapperlist;
        }
      },
      // 深拷贝
      getDeepCopy(array) {
        return JSON.parse(JSON.stringify(array));
      },
      // 跳转报表
      jumpToReport(reportPath) {
        this.$router.push({
          name: reportPath,
          params: {
            noRefresh: false,
          },
        });
        this.close();
      },
      // 关闭弹窗
      close() {
        this.$emit('change-route');
      },
    },
    mounted() {
      this.buttonHandler();
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #report-guide {
    position: relative;
    .search_container {
      padding-left: 5px;
      .search_inp {
        width: 500px;
        height: 40px;
        margin-right: 10px;
      }
    }
    .report_container {
      padding: 10px 0;
      display: flex;
      flex-flow: row wrap;
      align-content: space-between;
      .report_wrapper {
        box-sizing: border-box;
        flex: 0 0 32%;
        padding: 10px 15px;
        margin: 5px;
        background-color: #f5f5f5;
        border: 1px solid #f5f5f5;
        .report_wrapper_title {
          font-size: 22px;
          font-weight: bold;
          color: #000;
        }
        .report_wrapper_content {
          .report_item {
            cursor: pointer;
            padding: 5px 0;
            .report_name {
              color: #333;
              font-size: 16px;
              line-height: 22px;
              display: inline-block;
              transition: all 0.1s;
              border-bottom: 1px solid transparent;
              margin-bottom: 1px;
            }
            .report_desc {
              color: #999;
            }
            &:hover {
              .report_name {
                border-color: #333;
              }
            }
          }
        }
      }
    }
    .placeholder_container {
      padding: 0 5px;
      text-align: center;
      height: 500px;
      line-height: 500px;
      font-size: 22px;
    }
    .btn_close {
      font-size: 30px;
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
  }
</style>
