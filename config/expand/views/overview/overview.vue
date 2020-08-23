<template>
  <div id="wrapper">
    <div class="wrapper-lf margin-btm">
      <div class="wrapper-lf__top margin-btm">
        <ul>
          <!--<li v-for="(item,index) in houseData" :key="index" :class="index===7?'speLiClassName':''">-->
          <li v-for="(item, index) in houseData" :key="index" class="fl">
            <i v-show="item.title === '总户数'" class="house-item__lf item-lf__blue"></i>
            <i v-show="item.title === '总面积'" class="house-item__lf item-lf__orange"></i>
            <i v-show="item.title === '车位数'" class="house-item__lf item-lf__green"></i>
            <div class="house-item__rt">
              <span class="house-item__text">{{ item.title }}</span>
              <span
                class="house-item__num cursor-pointer"
                @click="goHouseManagement(item.houseStage, item.skip, item.title)"
              >{{ item.total
                }}<span class="add-text" v-show="item.title === '总面积'">万方</span></span
              >
              <span
                v-show="
                    item.title === '未出售' || 
                    item.title === '未出租' ||
                    item.title === '空置数' ||
                    item.title === '未领数' ||
                    item.title === '空关数' ||
                    item.title === '入住数' ||
                    item.title === '出租中' ||
                    item.title === '装修中'
                "
                class="house-item__progress"
              >
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="item.scale + '%'"
                  placement="bottom"
                >
                  <el-progress
                    :show-text="false"
                    :text-inside="true"
                    :stroke-width="3"
                    :percentage="Number(item.scale)"
                  ></el-progress>
                </el-tooltip>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="wrapper-lf__content">
        <div class="content-lf margin-rt">
          <div class="content-top margin-btm">
            <div>
              <div class="design">
                <div class="content-top__title">
                  <span class="content-top-title__text fl">应收金额</span>
                  <ns-select
                    class="fr"
                    v-model="syType"
                    :options="totalShouldOptions"
                    placeholder="请选择"
                    size="mini"
                    :clearable="false"
                    @change="change"
                  ></ns-select>
                  <!--<ns-button class="content-top-btn__cover fr" @click="getTime(1)"><i class="el-icon-time el-icon&#45;&#45;left"></i>{{syType}}</ns-button>-->
                </div>
                <div class="content-top__cont net-receipts">
                  <span class="content-top-collectionRate">收缴率: {{ collectionRate }}%</span>
                  <div class="center">
                    <div class="center-box">
                      <span v-show="!isTotalShould" id="pieChart"></span>
                      <!--<span v-show="!isTotalShould" class="pie-chart-one">应收金额</span>-->
                      <img
                        v-show="isTotalShould"
                        src="./assets/pienull-ys.png"
                        alt=""
                      />
                      <span :class="!isTotalShould ? 'pie-chart-one' : 'pieImgTitle'"
                      >应收金额</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-top_rt">
              <div class="design">
                <div class="content-top__title">
                  <span class="content-top-title__text fl">应收往欠</span>
                </div>
                <div class="content-top__cont">
                  <div class="center">
                    <div class="center-box">
                      <span v-show="!isPastOwe" id="pieChart2"></span>
                      <!--<span v-show="!isPastOwe" class="pie-chart-two">往欠</span>-->
                      <img v-show="isPastOwe" src="./assets/pienull-ys.png" alt="" />
                      <span :class="!isPastOwe ? 'pie-chart-two' : 'imgTitle'">往欠</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content-btm">
            <div class="content-btm__lf margin-rt">
              <div class="design">
                <p class="content-top__title fl">
                  <span class="content-top-title__text">押金余额</span>
                  <!--<ns-button class="content-top-btn__cover fr" @click="getTime(2)"><i class="el-icon-time el-icon&#45;&#45;left"></i>{{yjType}}</ns-button>-->
                </p>
                <div class="content-top__cont">
                  <span v-show="!isDepositData" id="pieChart5"></span>
                  <img v-show="isDepositData" src="./assets/pienull-ys.png" alt="" />
                </div>
              </div>
            </div>
            <div class="content-btm__rt">
              <div class="design">
                <p class="content-top__title fl">
                  <span class="content-top-title__text">预收款余额</span>
                  <!--<ns-button class="content-top-btn__cover fr" @click="getTime(3)"><i class="el-icon-time el-icon&#45;&#45;left"></i>{{yusType}}</ns-button>-->
                </p>
                <p class="content-top__cont">
                  <span v-show="!isPrePayData" id="pieChart3"></span>
                  <img v-show="isPrePayData" src="./assets/pienull-ys.png" alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="content-rt">
          <div class="design">
            <div class="content-top__title fl">
              <span class="content-top-title__text">收支情况</span>
              <ns-button class="content-top-btn__cover fr" @click="getTime(4)"
              ><i class="el-icon-time el-icon--left"></i>{{ szType }}</ns-button
              >
            </div>
            <div class="content-top__cont4 net-receipts-box">
              <div class="content-top-cont__lf">
                <p class="content-top-cont__text">实收</p>
                <p class="content-top-cont__num">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    :content="
                      (Number(actualAmount / 10000).toFixed(2) >= 1
                        ? Number(actualAmount / 10000).toFixed(2)
                        : actualAmount) + ''
                    "
                    placement="bottom"
                  >
                    <span class="content-top-cont_money">
                      {{
                        Number(actualAmount / 10000).toFixed(2) >= 1
                          ? Number(actualAmount / 10000).toFixed(2)
                          : actualAmount
                      }}<strong>{{ actualAmount >= 10000 ? '万元' : '元' }}</strong>
                    </span>
                  </el-tooltip>
                  <!-- <span v-show="actualAmount>=10000">万元</span>
                  <span v-show="actualAmount<10000">元</span> -->
                </p>
                <!--<p class="content-top-cont__num" v-show="isTotalShould">0<span>万元</span></p>-->
              </div>
              <div class="szqk">
                <span v-show="!isCleanOwe" id="pieChart4"></span>
                <!--<span v-show="!isCleanOwe" class="pie-chart-two">清欠</span>-->
                <img v-show="isCleanOwe" src="./assets/pienull-ys.png" alt="" />
                <span :class="!isCleanOwe ? 'pie-chart-two' : 'imgTitle'">清欠</span>
              </div>
            </div>
            <div class="content-top__btm2">
              <span class="bar-title">收费科目：单位(万元)</span>
              <span v-show="!isItem" id="barChart"></span>
              <div v-show="isItem" class="content-top-btm__img">
                暂无数据
                <!-- <img v-show="isItem" src="../../assets/img/banner/barnull-ys.png" alt=""> -->
              </div>
            </div>
            <div class="content-top__btm3">
              <!--<span class="content-top-btm3__text bar-title">支付方式：单位(万元)</span>-->
              <span class="content-top-btm3__text bar-title">应收到期户数：单位(户)</span>
              <span v-show="!isPaymethod" id="barChart2"></span>
              <div v-show="isPaymethod" class="content-top-btm__img">
                暂无数据
                <!-- <img v-show="isPaymethod" src="../../assets/img/banner/barnull-ys.png" alt=""> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--消息通知-->
    <ns-biz-update-notification v-if="showNotice"></ns-biz-update-notification>
  </div>
</template>

<script>
  import {
    getOverviewData,
    getOverviewData1,
    getOverviewData2,
    getOverviewData3,
  } from './service/overview';
  import { nsecharts } from './utils/charts/nsecharts';
  import { isRouteRole } from './utils/library/role';
  export default {
    name: 'overview',
    data() {
      return {
        totalShouldOptions: [
          { label: '本年', value: '1' },
          { label: '去年', value: '2' },
          { label: '所有', value: '3' },
        ],
        totalNum: 0,
        pieChartData: [],
        pieChartData2: [],
        data: {},
        houseData: [],
        actualAmount: '',
        collectionRate: 0,
        lastMonthCollectionRate: '',
        // isSyType:true,
        isSzType: true,
        isYjType: true,
        isYusType: true,
        syType: '1',
        szType: '本年',
        // yjType:"本年",
        // yusType:"本年",
        productData: [],
        systemData: [],
        problem: [],
        productTypeName: '',
        endTime: '',
        buyCount: '',
        query: {
          targetList: [
            {
              precinctIds: [this.$store.state.Precinct.precinctId],
              startTime: '',
              endTime: '',
              syType: '1',
              szType: '2',
              // "yjType": "2",
              // "yusType": "2"
            },
          ],
        },
        isTotalShould: true,
        isCleanOwe: true,
        isPastOwe: true,
        isPrePayData: true,
        isItem: true,
        isPaymethod: true,
        isDepositData: true,
      };
    },

    computed: {
      //初始登录 两次的问题
      showNotice(){
        return this.$store.state.Precinct.precinctName === 'isWrong' || this.$store.state.Precinct.precinctId
      }
    },

    created() {
      if (this.houseData.length === 0) {
        this.houseData = [
          {title: "总户数", "total": 0, "scale": "0",houseStage:""},
          {title: "未出售", "total": 0, "scale": "0",houseStage:""},
          // {title: "空置数", "total": 0, "scale": "0",houseStage:""},
          {title: "未领数", "total": 0, "scale": "0",houseStage:""},
          {title: "空关数", "total": 0, "scale": "0",houseStage:""},
          {title: "入住数", "total": 0, "scale": "0",houseStage:""},
          {title: "出租中", "total": 0, "scale": "0",houseStage:""},
          {title: "未出租", "total": 0, "scale": "0",houseStage:""},
          {title: "装修中", "total": 0, "scale": "0",houseStage:""},
          {title: "总面积", "total": 0, "scale": "0",houseStage:""},
          {title: "车位数", "total": 0, "scale": "0",houseStage:""},
          {title: "车辆数", "total": 0, "scale": "0",houseStage:""},
        ];
      }
    },
    mounted() {
      // this.getOverviewData1();
      // this.productDynamics();//产品动态
      // this.systemOverview();//系统概况
      if (this.query.targetList[0].precinctIds[0] && this.query.targetList[0].precinctIds[0] !== '') {
        this.getOverviewData(this.query);
      }
      this.query.targetList[0].syType = this.syType;
      this.editDomStyle('#EFF1F4');
    },

    activated() {
      this.editDomStyle('#EFF1F4');
    },

    deactivated() {
      this.editDomStyle('#inherit');
    },

    methods: {
      getOverviewData1() {
        let obj = {
          companyId: '',
          departmentId: '',
          dictionaryitemDictionaryId: '',
          filterConditions: [],
          filterList: [
            {
              comparison: 'EQUAL',
              fieldName: 'noticeType',
              fieldValue: '0',
              isShow: true,
              type: 'select',
            },
          ],
          mainSearch: '',
          orderBy: '',
          orderFieldName: '',
          organizationId: 1,
          otherConditions: {},
          pageNum: 1,
          pageSize: 4,
          size: '',
        };
        getOverviewData1(obj)
          .then(res => {
            this.problem = res.resultData.list;
          })
          .catch(() => {});
      },
      productDynamics() {
        getOverviewData2({ pageNum: 1, pageSize: 4, isStatisType: 1 })
          .then(res => {
            this.productData = res.resultData.list;
          })
          .catch(() => {});
      },
      systemOverview() {
        getOverviewData3({})
          .then(res => {
            res.resultData.map(item => {
              item.endTime = item.endTime.slice(0, 10);
            });
            this.systemData = res.resultData;
            this.productTypeName = this.systemData[0].productTypeName;
            this.endTime = this.systemData[0].endTime.slice(0, 10);
            this.buyCount = this.systemData[0].buyCount;
          })
          .catch(() => {});
      },
      getOverviewData(query) {
        getOverviewData(query)
          .then(res => {
            this.data = res.resultData;
            this.houseData = this.data.houseData.houseData.house;

            this.actualAmount = this.data.totalPayment ? this.data.totalPayment : 0;
            if (this.data.collectionRate) {
              this.collectionRate = this.data.collectionRate.collectionRate;
              this.lastMonthCollectionRate = this.data.collectionRate.lastMonthCollectionRate;
            } else {
              this.collectionRate = 0.0;
              this.lastMonthCollectionRate = 0;
            }
            let shouldExprie = this.shouldExprieDc(this.data.shouldExprie);
            this.isPastOwe = this.data.pastOwe.length > 0 ? false : true;
            this.isCleanOwe = this.data.cleanOwe.length > 0 ? false : true;
            this.isTotalShould = this.data.totalShould.length > 0 ? false : true;
            this.isPrePayData = this.data.prePayData.preData.length > 0 ? false : true;
            this.isItem = this.data.item.length > 0 ? false : true;
            this.isPaymethod = shouldExprie.length > 0 ? false : true;
            this.isDepositData = this.data.depositData.depositData.length > 0 ? false : true;
            if (
              this.data.houseData.houseData.house === undefined ||
              this.data.houseData.houseData.house.length === 0
            ) {
              this.houseData = [
                { title: '总户数', total: 0, scale: '0', houseStage: '' },
                { title: '空置数', total: 0, scale: '0', houseStage: '' },
                { title: '未领数', total: 0, scale: '0', houseStage: '' },
                { title: '空关数', total: 0, scale: '0', houseStage: '' },
                { title: '入住数', total: 0, scale: '0', houseStage: '' },
                { title: '总面积', total: 0, scale: '0', houseStage: '' },
                { title: '车位数', total: 0, scale: '0', houseStage: '' },
                { title: '车辆数', total: 0, scale: '0', houseStage: '' },
              ];
            }

            this.pieChart(
              this.chartDataDc(this.data.totalShould),
              'pieChart',
              this.totalNum,
              '/reporting/collectionRateFeeReport',
              '应收'
            ); // 应收;
            this.pieChart(
              this.chartDataDc(this.data.pastOwe),
              'pieChart2',
              this.totalNum,
              '/charge/paymentList',
              2,
              'houseNum'
            ); //往欠;
            this.pieChart(
              this.chartDataDc(this.data.cleanOwe),
              'pieChart4',
              this.totalNum,
              '/charge/paymentList',
              3
            ); //清欠;
            this.pieChart(
              this.prePayDataDc(this.data.prePayData.preData, ['balance', 'chargeItemName']),
              'pieChart3',
              this.totalNum,
              '/pay/PrePaymentManage'
            ); //预收款;
            this.pieChart(
              this.prePayDataDc(this.data.depositData.depositData, ['balance', 'chargeItemName']),
              'pieChart5',
              this.totalNum,
              '/pay/depositManager'
            ); //押金;
            //根据父元素宽度设置图表宽度
            $('#barChart')
              .width(
                $('#barChart')
                  .parent()
                  .width() - 40
              )
              .height(200);
            $('#barChart2')
              .width(
                $('#barChart2')
                  .parent()
                  .width() - 40
              )
              .height(
                $('#barChart2')
                  .parent()
                  .height()
              );
            this.barChart(this.chartDataDc(this.data.item, true), 'barChart');
            // this.barChart(this.chartDataDc(this.data.paymethod,true),"barChart2")
            this.barChart([shouldExprie], 'barChart2'); //应收到期户数
          })
          .catch(() => {});
      },
      shouldExprieDc(arr) {
        return arr.map(item => {
          return { actualTarget: Object.values(item)[0], departmentName: Object.keys(item)[0] };
        });
      },
      chartDataDc(chartData, isBarChart = null) {
        this.totalNum = 0;
        if (chartData instanceof Array) {
          let dcData = chartData.map((item, index) => {
            let obj = {};
            let values = Object.values(item);
            if (isBarChart) {
              values[0] = Number(values[0] / 10000).toFixed(2);
              return { actualTarget: values[0], departmentName: values[1], shouldTarget: values[2] };
            } else {
              this.totalNum = this.totalNum + Number(values[0]);
              return { actualTarget: values[0], targetItem: values[1], houseNum: values[2] };
            }
          });
          return isBarChart ? [dcData] : dcData;
        } else {
          console.log('数据类型错误');
        }
      },
      prePayDataDc(chartData, list) {
        //balance,chargeItemName
        this.totalNum = 0;
        let arr = list;
        return chartData.map((item, index) => {
          this.totalNum = this.totalNum + Number(item[arr[0]]);
          return { actualTarget: item[arr[0]], targetItem: item[arr[1]] };
        });
      },
      //绘制环形图
      pieChart(pieChartData, idName, totalNum, url, spe = null, houseNum = null) {
        let unit = '';
        if (Number(totalNum / 10000).toFixed(2) > 1) {
          totalNum = Number(totalNum / 10000).toFixed(2);
          unit = '万元';
        } else {
          totalNum = Number(totalNum).toFixed(2);
          unit = '元';
        }
        nsecharts.pieChart(pieChartData, idName, {
          centerPosition: ['30%', '50%'],
          radiusScale: ['52%', '68%'],
          legendPosition: ['62%', '20%'],
          maxRowNum: 4,
          centerLeft: '28%',
          text: [totalNum, unit],
          fontSize: 16,
          tooltipConfine: true,
          subtextFontSize: 12,
          tooltipUnit: '元',
          legendMaxCharNum: 6, //图例 超出隐藏显示‘...’，（自定义限制长度）
          tooltipExtra: houseNum, //提示框额外数据
          tooltipExtraUnit: '户', //提示框额外数据单位
          clickFn: (result, data) => {
            let query = {};
            if (houseNum) {
              let year = new Date().getFullYear();
              let list = [
                { label: '本年', value: '0', pasteOweDate: [year] },
                { label: '一年内', value: '1', pasteOweDate: [year - 1] },
                { label: '三年内', value: '3', pasteOweDate: [year - 2, year - 3] },
                { label: '五年内', value: '5', pasteOweDate: [year - 4, year - 5] },
                { label: '五年以上', value: '7', pasteOweDate: [year - 5] },
              ];
              list.map(item => {
                if (item.label === result['name']) {
                  query = {
                    pastOweType: item['value'],
                    pasteOweDate: item['pasteOweDate'],
                    switch: true,
                    spe: 'pastOwe',
                  };
                }
              });
            } else {
              if (spe === '应收') {
                query = { syType: this.syType };
              } else {
                query = { precinctId: this.$store.state.Precinct.precinctId, switch: true, spe: spe };
              }
            }
            // this.$router.push({ path: url,query:query});
            this.validateJumpPagesAuthority(url, query, 'pieChart');
          },
        });
      },
      barChart(barChartData, idName) {
        nsecharts.columnChart(barChartData, idName, {
          gridBottom: 10,
          yAxisSplitNum: 2, //Y轴分割线个数
          xAxisMaxCharNum: idName === 'barChart2' ? 5 : 2, //X轴文字个数
          dataZoomStyle: [idName === 'barChart2' ? 10 : 30, 100, false], //X轴间隔及拖拽
          clickFn: (result, data) => {
            if (idName === 'barChart2') {
              //概览 柱状图 - 应收到期户数下钻到应收款管理
              let list = [
                { label: '<0天', value: '0' },
                { label: '<1天', value: '1' },
                { label: '<7天', value: '7' },
                { label: '<=30天', value: '30' },
                { label: '>30天', value: '31' },
              ];
              let query = {};
              list.map(item => {
                if (item.label === result['name']) {
                  item.code = 'overview';
                  query = item;
                }
              });
              //跳转应收款管理
              this.validateJumpPagesAuthority('/charge/paymentList', {
                name: 'paymentList',
                params: query,
              });
            }
          },
        });
      },
      //验证点击跳转链接权限
      validateJumpPagesAuthority(url, query, type = null) {
        // 临时处理，点击收缴率时，不跳转
        if (url === '/reporting/collectionRateFeeReport') {
          return false;
        }
        //判断当前 path 是否在权限列表中
        if (isRouteRole(url)) {
          type === 'pieChart'
            ? this.$router.push({ path: url, query: query })
            : this.$router.push(query);
        } else {
          this.$message({ message: '无查看权限！', type: 'warning' });
        }
      },
      //下钻功能
      goHouseManagement(houseStage, skip, title) {
        let precinctId = this.$store.state.Precinct.precinctId;
        let url = '';
        let query = {
          houseStage: houseStage,
          precinctId: precinctId,
          switch: true,
          skip: skip,
          title: title,
          isSimulateClick: true,
        };
        if (skip === '1' || skip === '3') {
          url = '/owner/houseManagement';
        } else if (skip === '2') {
          url = '/owner/carManagement';
          query = { precinctId: precinctId, skip: skip, switch: true };
        }
        this.validateJumpPagesAuthority(url, query, 'pieChart');
        // this.$router.push({ path: url, query: query});
      },

      change(val) {
        this.query.targetList[0].syType = val;
        this.getOverviewData(this.query);
      },
      getTime(num) {
        // if(num === 1){
        //   this.isSyType = !this.isSyType;
        //   this.isSyType
        //     ? (this.syType = "本年",this.query.targetList[0].syType = "2")
        //     : (this.syType = "本月",this.query.targetList[0].syType = "1");
        // }
        if (num === 4) {
          this.isSzType = !this.isSzType;
          this.isSzType
            ? ((this.szType = '本年'), (this.query.targetList[0].szType = '2'))
            : ((this.szType = '本月'), (this.query.targetList[0].szType = '1'));
        }
        this.getOverviewData(this.query);
      },
      editDomStyle(background) {
        const overviewDom = document.getElementById('overview');
        if (overviewDom) {
          overviewDom.style.background = background;
        }
      },
    },
    beforeDestroy() {
      this.editDomStyle('white');
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  @import './style/overview';

  .pieImgTitle,
  .imgTitle {
    display: block;
    text-align: left;
    font-size: 12px;
    padding-left: 42px;
  }

  .imgTitle {
    padding-left: 55px;
  }

  .content-top {
    display: flex;
    justify-content: space-between;
    & > div {
      width: 50%;
      background: #ffffff;
    }
    .content-top_rt {
      width: calc(50% - 12px);
    }
    /*.content-top_lf,
      .content-top_rt{
        width: 50%;
      }
      .content-top_rt{
        border-left: 1px solid #E8EBF0;
      }*/
  }

  .content-top__cont {
    align-items: center;
    justify-content: center;
  }

  .szqk {
    height: 168px;
    text-align: center;
    img {
      margin-top: 16px;
    }
  }

  .center {
    width: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
</style>
