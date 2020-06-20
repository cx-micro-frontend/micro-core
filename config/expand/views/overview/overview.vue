<!--概览页 - 外部注入个性化配置路由界面（非权限控制)-->
<template>
  <div class="win" id="overview">
    <div class="left">
      <div class="header">
        <div class="header__dataset" v-for="(item, index) in orgInfo" :key="index">
          <div class="header__dataset-label">{{ item.label }}</div>
          <div class="header__dataset-value">{{ item.value }}</div>
        </div>
      </div>
      <div class="main">
        <div class="area">
          <div class="area__title">长者性别比例</div>
          <div id="chart1" class="area__chart"></div>
        </div>
        <div class="area">
          <div class="area__title">照护等级分布</div>
          <div id="chart2" class="area__chart"></div>
        </div>
        <div class="area">
          <div class="area__title">年龄分布</div>
          <div id="chart3" class="area__chart"></div>
        </div>
        <div class="area">
          <div class="area__title"></div>
          <div id="chart4" class="area__chart"></div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="calendar">
        <div class="calendar__date">{{ date }}</div>
        <div class="calendar__detail">
          <div>{{ solar }}</div>
          <div>农历{{ lunar }}</div>
        </div>
      </div>
      <div class="today">
        <div class="today__dataset" v-for="(item, index) in todayDynamic" :key="index">
          <div class="today__dataset-label">{{ item.value }}</div>
          <div class="today__dataset-value">{{ item.label }}</div>
        </div>
      </div>
      <div class="birthday">
        <div class="birthday__title">本月生日</div>
        <el-carousel height="336px" :autoplay="false" @change="getNewBirthday">
          <el-carousel-item v-for="(item, index) in birthday" :key="index">
            <el-table class="birthday__table" :data="item">
              <el-table-column prop="index" label="序号" width="44"></el-table-column>
              <el-table-column prop="name" label="姓名" width="80"></el-table-column>
              <el-table-column prop="birthday" label="生日"></el-table-column>
            </el-table>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="shortcut"></div>
    </div>
  </div>
</template>

<script>
  import solar2lunar from './utils/lunar';
  import nsCharts from './utils/ns-charts';
  import { getOrgInfo, getBase, getTodayDynamic, getBirthday } from './service/overview';

  export default {
    name: 'overview',
    data() {
      return {
        orgInfo: [
          {
            label: '在住长者',
            value: '',
            remark: 'elder',
          },
          {
            label: '房间数',
            value: '',
            remark: 'room',
          },
          {
            label: '床位总数',
            value: '',
            remark: 'bed',
          },
          {
            label: '在用床位',
            value: '',
            remark: 'occupiedBed',
          },
          {
            label: '预订床位',
            value: '',
            remark: 'reserveBed',
          },
          {
            label: '空置床位',
            value: '',
            remark: 'emptyBed',
          },
          {
            label: '入住率',
            value: '',
            remark: 'ratio',
          },
        ],
        todayDynamic: [
          {
            label: '今日参观',
            value: '',
            remark: 'advisory',
          },
          {
            label: '今日预订',
            value: '',
            remark: 'reserve',
          },
          {
            label: '今日入住',
            value: '',
            remark: 'checkIn',
          },
          {
            label: '今日请假',
            value: '',
            remark: 'leave',
          },
          {
            label: '今日探访',
            value: '',
            remark: 'visit',
          },
        ],
        birthday: [],
        pageNum: 0,
        flag: true,
        date: '',
        solar: '',
        lunar: '',
        iptModel: '',
      };
    },
    methods: {
      //表头数据
      setHeader() {
        getOrgInfo()
          .then(res => {
            this.orgInfo.forEach(i => {
              i.value = res.resultData[i.remark] + (i.label === '入住率' ? '%' : '');
            });
          })
          .catch(err => {
            console.log(err);
          });
      },
      //图表
      setChart() {
        getBase()
          .then(res => {
            document.querySelectorAll('.area__chart').forEach(i => {
              i.style.width = i.parentNode.offsetWidth + 'px';
            });
            nsCharts.pieChart([res.resultData.sex], 'chart1', {
              radiusScale: ['52%', '68%'],
              centerPosition: ['center', 'center'],
              legendPosition: ['center', 'bottom'],
              legendOrient: 'horizontal',
              keyRef: { targetItem: 'name', actualTarget: 'count' },
            });
            nsCharts.pieChart([res.resultData.careLevel], 'chart2', {
              radiusScale: ['52%', '68%'],
              centerPosition: ['center', 'center'],
              legendPosition: ['center', 'bottom'],
              legendOrient: 'horizontal',
              keyRef: { targetItem: 'name', actualTarget: 'count' },
              legendMaxRowNum: 6,
            });
            nsCharts.columnChart([res.resultData.age], 'chart3', {
              gridTop: 50,
              gridBottom: 10,
              gridLeft: 30,
              gridRight: 30,
              xAxisUnit: '岁',
              xAxisMaxCharNum: 10,
              yAxisSplitNum: 2,
              labelShow: true,
              keyRef: { departmentName: 'name', actualTarget: 'count' },
            });
          })
          .catch(err => {
            console.log(err);
          });
      },
      //今日动态
      setTodayDynamic() {
        getTodayDynamic()
          .then(res => {
            this.todayDynamic.forEach(i => {
              i.value = res.resultData[i.remark];
            });
          })
          .catch(err => {
            console.log(err);
          });
      },
      //日历
      setCalendar() {
        const week = ['日', '一', '二', '三', '四', '五', '六'];
        let today = new Date();
        let y = today.getFullYear();
        let m = today.getMonth() + 1;
        let d = today.getDate();
        let obj = solar2lunar(y, m, d);
        this.date = d;
        this.solar = `${y}年${m}月${d}日 周${week[today.getDay()]}`;
        this.lunar = obj.IMonthCn + obj.IDayCn;
      },
      //生日
      setBirthDay(val) {
        var _this = this;
        getBirthday({ pageNum: this.pageNum + 1, pageSize: 10 })
          .then(res => {
            if (_this.flag) {
              _this.flag = false;
              for (let i = 0; i < res.resultData.pages; i++) {
                _this.birthday.push([]);
              }
            }
            _this.$set(_this.birthday, _this.pageNum, res.resultData.list);
            _this.birthday[_this.pageNum].forEach((item, index) => {
              item.index = index + 1 + _this.pageNum * 10;
            });
          })
          .catch(err => {
            console.log(err);
          });
      },
      getNewBirthday(newIndex) {
        this.pageNum = newIndex;
        if (!this.birthday[this.pageNum].length) this.setBirthDay();
      },
    },
    created() {
      this.setHeader();
      this.setCalendar();
      this.setTodayDynamic();
      this.setBirthDay();
      // alert('概览页初始化')
    },
    mounted() {
      this.setChart();
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  $backColor: #f3f3f7;
  #overview.win {
    display: flex;
    justify-content: space-between;
    height: 100%;
    color: #333;
    background: $backColor;
    .left {
      width: calc(100% - 260px);
      .header {
        display: flex;
        justify-content: space-around;
        height: 110px;
        background: #fff;
        &__dataset {
          display: flex;
          flex-direction: column;
          justify-content: center;
          &-label {
            font-size: 12px;
            color: #666;
          }
          &-value {
            height: 42px;
            font-weight: bold;
            font-size: 32px;
          }
        }
      }
      .main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: calc(100% - 120px);
        margin-top: 10px;
        .area {
          width: calc(50% - 5px);
          height: calc(50% - 10px);
          background: #fff;
          &__title {
            margin-top: 22px;
            margin-left: 24px;
            font-weight: bold;
            font-size: 16px;
          }
          &__chart {
            height: calc(100% - 86px);
          }
        }
      }
    }
    .right {
      width: 250px;
      height: 100%;
      background: #fff;
      .calendar {
        display: flex;
        height: 80px;
        padding-top: 22px;
        background: #ecedf4;
        box-sizing: border-box;
        &__date {
          position: relative;
          width: 34px;
          height: 37px;
          padding-top: 13px;
          margin-left: 24px;
          line-height: 22px;
          text-align: center;
          font-size: 19px;
          background: url(calendar.png);
          background-size: 100% 100%;
          box-sizing: border-box;
        }
        &__detail {
          margin-left: 10px;
          div {
            font-size: 14px;
            & + div {
              font-size: 12px;
              color: #666;
            }
          }
        }
      }
      .today {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        height: 150px;
        &__dataset {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-basis: 33.33%;
          height: 50px;
          margin-top: 15px;
          text-align: center;
          &-label {
            font-weight: bold;
            font-size: 24px;
          }
          &-value {
            font-size: 12px;
            color: #666;
          }
        }
      }
      .birthday {
        height: 380px;
        padding: 0 20px;
        &__title {
          position: relative;
          padding-left: 8px;
          font-size: 14px;
          &:after {
            content: '';
            position: absolute;
            top: 3px;
            left: 0;
            width: 4px;
            height: 14px;
            background: #333;
          }
        }
        .el-carousel {
          margin-top: 10px;
          .el-carousel__button {
            width: 5px;
            height: 5px;
            background: #A3A3A3;
            border-radius: 50%;
          }
          .el-table {
            color: #333;
            border-width: 0 !important;
            &:before {
              height: 0;
            }
            th,
            td {
              padding: 0;
            }
            th,
            td,
            div {
              font-size: 12px;
              border-width: 0 !important;
            }
            .el-table__header th {
              background: #f5f5f5;
              .cell {
                font-weight: normal;
                color: #a4a4a4;
              }
            }
          }
        }
        .shortcut {
          height: calc(100% - 610px);
          padding: 0 20px;
        }
      }

    }
  }
</style>
