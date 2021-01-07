<!--侧边导航菜单 - 向导-->
<template>
  <div class="win" id="guidance">
    <ns-icon-svg icon-class="guanbi" @click="close"></ns-icon-svg>
    <div class="summary">
      <p>你还不清楚业务流程？</p>
      <span
      >财务流程是业务关联性很强的一系列操作，需要先设置一些收费标准或仪表管理之后才能开展下一步工作，整个业务流程<br/>基本覆盖所有财务相关环节，让您在线办公的过程更轻松、更便捷！</span
      >
    </div>
    <div class="guidance">
      <!--项目-->
      <img class="guidance-img" src="./assets/Group34@2x.png" alt=""/>
      <div
        class="width66"
        :class="{ notAllowed: hoverItem === 'buyProduct' && !isAllowed }"
        :style="{ left: offsetLeft + 4 + 'px', top: offsetTop + 50 + 'px' }"
        @click="handleClick('buyProduct')"
        @mouseenter.stop="handleMouseEnter('buyProduct')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="height33"
        :class="{ notAllowed: hoverItem === 'houseManagement' && !isAllowed }"
        :style="{ left: offsetLeft + 164 + 'px', top: offsetTop + 16 + 'px' }"
        @click="handleClick('houseManagement')"
        @mouseenter.stop="handleMouseEnter('building')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="height33"
        :class="{ notAllowed: hoverItem === 'houseManagement' && !isAllowed }"
        :style="{ left: offsetLeft + 164 + 'px', top: offsetTop + 64 + 'px' }"
        @click="handleClick('houseManagement')"
        @mouseenter.stop="handleMouseEnter('carport')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="height33"
        :class="{ notAllowed: hoverItem === 'houseManagement' && !isAllowed }"
        :style="{ left: offsetLeft + 164 + 'px', top: offsetTop + 112 + 'px' }"
        @click="handleClick('houseManagement')"
        @mouseenter.stop="handleMouseEnter('custom')"
        @mouseleave="handleMouseLeave"
      ></div>
      <!--计费-->
      <div
        class="width66"
        :class="{ notAllowed: hoverItem === 'charge' && !isAllowed }"
        :style="{ left: offsetLeft + 289 + 'px', top: offsetTop + 66 + 'px' }"
        @click="handleClick('charge')"
        @mouseenter.stop="handleMouseEnter('charge')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="width66"
        :class="{ notAllowed: hoverItem === 'paymentList' && !isAllowed }"
        :style="{ left: offsetLeft + 451 + 'px', top: offsetTop + 68 + 'px' }"
        @click="handleClick('paymentList')"
        @mouseenter.stop="handleMouseEnter('paymentList')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="height33"
        :class="{ notAllowed: hoverItem === 'paymentCalcList' && !isAllowed }"
        :style="{ left: offsetLeft + 599 + 'px', top: offsetTop + 51 + 'px' }"
        @click="handleClick('paymentCalcList')"
        @mouseenter.stop="handleMouseEnter('paymentCalcList')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="height33"
        :class="{ notAllowed: hoverItem === 'paymentCalcList' && !isAllowed }"
        :style="{ left: offsetLeft + 599 + 'px', top: offsetTop + 110 + 'px' }"
        @click="handleClick('paymentCalcList')"
        @mouseenter.stop="handleMouseEnter('paymentCalcList')"
        @mouseleave="handleMouseLeave"
      ></div>
      <!--业户-->
      <div
        class="width66"
        :class="{ notAllowed: hoverItem === 'customer' && !isAllowed }"
        :style="{ left: offsetLeft + 164 + 'px', top: offsetTop + 226 + 'px' }"
        @click="handleClick('customer')"
        @mouseenter.stop="handleMouseEnter('customer')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="width66"
        :class="{ notAllowed: hoverItem === 'houseManagement' && !isAllowed }"
        :style="{ left: offsetLeft + 164 + 'px', top: offsetTop + 361 + 'px' }"
        @click="handleClick('houseManagement')"
        @mouseenter.stop="handleMouseEnter('houseManagement')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="width43"
        :class="{ notAllowed: hoverItem === 'houseManagement' && !isAllowed }"
        :style="{ left: offsetLeft + 104 + 'px', top: offsetTop + 361 + 'px' }"
        @click="handleClick('houseManagement')"
        @mouseenter.stop="handleMouseEnter('houseManagement')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="width43"
        :class="{ notAllowed: hoverItem === 'houseManagement' && !isAllowed }"
        :style="{ left: offsetLeft + 104 + 'px', top: offsetTop + 408 + 'px' }"
        @click="handleClick('houseManagement')"
        @mouseenter.stop="handleMouseEnter('houseManagement')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="width43"
        :class="{ notAllowed: hoverItem === 'houseManagement' && !isAllowed }"
        :style="{ left: offsetLeft + 148 + 'px', top: offsetTop + 443 + 'px' }"
        @click="handleClick('houseManagement')"
        @mouseenter.stop="handleMouseEnter('houseManagement')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="width43"
        :class="{ notAllowed: hoverItem === 'houseManagement' && !isAllowed }"
        :style="{ left: offsetLeft + 203 + 'px', top: offsetTop + 443 + 'px' }"
        @click="handleClick('houseManagement')"
        @mouseenter.stop="handleMouseEnter('houseManagement')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="width43"
        :class="{ notAllowed: hoverItem === 'houseManagement' && !isAllowed }"
        :style="{ left: offsetLeft + 246 + 'px', top: offsetTop + 361 + 'px' }"
        @click="handleClick('houseManagement')"
        @mouseenter.stop="handleMouseEnter('houseManagement')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="width43"
        :class="{ notAllowed: hoverItem === 'houseManagement' && !isAllowed }"
        :style="{ left: offsetLeft + 246 + 'px', top: offsetTop + 408 + 'px' }"
        @click="handleClick('houseManagement')"
        @mouseenter.stop="handleMouseEnter('houseManagement')"
        @mouseleave="handleMouseLeave"
      ></div>
      <!--收款-->
      <div
        class="width66"
        :class="{ notAllowed: hoverItem === 'chargePlatForm' && !isAllowed }"
        :style="{ left: offsetLeft + 451 + 'px', top: offsetTop + 226 + 'px' }"
        @click="handleClick('chargePlatForm')"
        @mouseenter.stop="handleMouseEnter('chargePlatForm')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="width66"
        :class="{ notAllowed: hoverItem === 'payment' && !isAllowed }"
        :style="{ left: offsetLeft + 451 + 'px', top: offsetTop + 420 + 'px' }"
        @click="handleClick('payment')"
        @mouseenter.stop="handleMouseEnter('payment')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="width66"
        :class="{ notAllowed: hoverItem === 'chargeAccount' && !isAllowed }"
        :style="{ left: offsetLeft + 553 + 'px', top: offsetTop + 420 + 'px' }"
        @click="handleClick('chargeAccount')"
        @mouseenter.stop="handleMouseEnter('chargeAccount')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="height33"
        :class="{ notAllowed: hoverItem === 'chargePlatForm' && !isAllowed }"
        :style="{ left: offsetLeft + 369 + 'px', top: offsetTop + 226 + 'px' }"
        @click="handleClick('chargePlatForm')"
        @mouseenter.stop="handleMouseEnter('chargePlatForm')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="height33"
        :class="{ notAllowed: hoverItem === 'deposit' && !isAllowed }"
        :style="{ left: offsetLeft + 369 + 'px', top: offsetTop + 273 + 'px' }"
        @click="handleClick('deposit')"
        @mouseenter.stop="handleMouseEnter('deposit')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="height33"
        :class="{ notAllowed: hoverItem === 'chargePlatForm' && !isAllowed }"
        :style="{ left: offsetLeft + 451 + 'px', top: offsetTop + 305 + 'px' }"
        @click="handleClick('chargePlatForm')"
        @mouseenter.stop="handleMouseEnter('chargePlatForm')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="height33"
        :class="{ notAllowed: hoverItem === 'tempCharge' && !isAllowed }"
        :style="{ left: offsetLeft + 532 + 'px', top: offsetTop + 273 + 'px' }"
        @click="handleClick('tempCharge')"
        @mouseenter.stop="handleMouseEnter('tempCharge')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="height33"
        :class="{ notAllowed: hoverItem === 'prePayment' && !isAllowed }"
        :style="{ left: offsetLeft + 532 + 'px', top: offsetTop + 226 + 'px' }"
        @click="handleClick('prePayment')"
        @mouseenter.stop="handleMouseEnter('prePayment')"
        @mouseleave="handleMouseLeave"
      ></div>
      <!--票据-->
      <div
        class="width66"
        :class="{ notAllowed: hoverItem === 'billUseManager' && !isAllowed }"
        :style="{ left: offsetLeft + 663 + 'px', top: offsetTop + 226 + 'px' }"
        @click="handleClick('billUseManager')"
        @mouseenter.stop="handleMouseEnter('billUseManager')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="height33"
        :class="{ notAllowed: hoverItem === 'billCollar' && !isAllowed }"
        :style="{ left: offsetLeft + 805 + 'px', top: offsetTop + 227 + 'px' }"
        @click="handleClick('billCollar')"
        @mouseenter.stop="handleMouseEnter('billCollar')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="height33"
        :class="{ notAllowed: hoverItem === 'billUseManager' && !isAllowed }"
        :style="{ left: offsetLeft + 805 + 'px', top: offsetTop + 276 + 'px' }"
        @click="handleClick('billUseManager')"
        @mouseenter.stop="handleMouseEnter('billUseManager')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="height33"
        :class="{ notAllowed: hoverItem === 'billRecord' && !isAllowed }"
        :style="{ left: offsetLeft + 805 + 'px', top: offsetTop + 325 + 'px' }"
        @click="handleClick('billRecord')"
        @mouseenter.stop="handleMouseEnter('billRecord')"
        @mouseleave="handleMouseLeave"
      ></div>
      <!--报表-->
      <div
        class="width66"
        :class="{ notAllowed: hoverItem === 'houseReport' && !isAllowed }"
        :style="{ left: offsetLeft + 163 + 'px', top: offsetTop + 562 + 'px' }"
        @click="handleClick('houseReport')"
        @mouseenter.stop="handleMouseEnter('houseReport')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="width66"
        :class="{ notAllowed: hoverItem === 'chargeReport' && !isAllowed }"
        :style="{ left: offsetLeft + 551 + 'px', top: offsetTop + 562 + 'px' }"
        @click="handleClick('chargeReport')"
        @mouseenter.stop="handleMouseEnter('chargeReport')"
        @mouseleave="handleMouseLeave"
      ></div>
      <div
        class="width66"
        :class="{ notAllowed: hoverItem === 'billReport' && !isAllowed }"
        :style="{ left: offsetLeft + 805 + 'px', top: offsetTop + 562 + 'px' }"
        @click="handleClick('billReport')"
        @mouseenter.stop="handleMouseEnter('billReport')"
        @mouseleave="handleMouseLeave"
      ></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';


  export default {
    name: 'guidance',
    data() {
      return {
        offsetLeft: 0,
        offsetTop: 0,
        path: {
          // 项目开通
          buyProduct: '/soss/buyProduct', // 项目开通
          building: '/owner/houseManagement', // 楼栋导入
          carport: '/owner/houseManagement', // 车位导入
          custom: '/owner/customerManagement', // 客户导入

          // 计费
          charge: '/charge/itemList', // 计费设置
          paymentList: '/charge/paymentList', // 应收款
          paymentCalcList: '/charge/paymentCalcList', // 代收费用、水电费

          // 业户
          customer: '/owner/customerManagement', // 客户管理
          houseManagement: '/owner/houseManagement', // 房产管理、售楼管理、收房管理、入住管理、装修管理、出租管理、车辆管理、转让、楼栋导入、车位导入、客户导入

          // 收款
          chargePlatForm: '/pay/chargePlatForm', // 收银台、水电费、物业费
          prePayment: '/pay/PrePaymentManage', // 预收款管理
          tempCharge: '/pay/chargeTempManage', // 临时收费管理
          payment: '/pay/paymentcharge', // 已收款管理
          chargeAccount: '/pay/chargeAccountList', // 交账
          deposit: '/pay/depositManager', // 押金

          // 票据
          billUseManager: '/bill/billUseManager', // 票据管理、开票
          billCollar: '/bill/bill-billcollar', // 票据分配
          billRecord: '/bill/bill-billrecord', // 票据补录
          // 报表
          houseReport: '/ownerreport/houseInfoReport', // 房产报表
          chargeReport: '', // 交账报表
          billReport: '', // 票据报表
        },
        isAllowed: true,
        hoverItem: '',
      };
    },
    computed: {
      ...mapGetters(['sideMenu']),
    },
    methods: {
      handleClick(key) {
        if (this.hoverItem === key && !this.isAllowed) return;
        this.$emit('change-route', this.path[key]);
      },
      handleMouseEnter(key) {
        this.hoverItem = key;
        this.isAllowed = this.isRouteRole(this.path[key])
      },
      isRouteRole(target) {
        const pageinfoList = this.$store.state.PageInfo.pageinfoList;
        return pageinfoList.some(info => info.routePath === target || info.name === target);
      },
      handleMouseLeave() {
        this.hoverItem = '';
        this.isAllowed = true;
      },
      close() {
        this.$emit('change-route');
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #guidance {
    height: 100%;
    text-align: center;
    svg {
      position: absolute;
      right: 15px;
      cursor: pointer;
      color: #bfcbd9;
    }
    p {
      font-size: 16px;
      color: #333;
    }

    span {
      font-size: 12px;
      color: #999999;
    }

    .border {
      border: 1px solid #333;
    }

    .guidance {
      width: 902px;
      height: 650px;
      margin-top: 38px;
      position: relative;
      display: inline-block;

      div {
        position: absolute;
        cursor: pointer;
      }

      div.notAllowed {
        background: rgba(255, 255, 255, 0.3);
        cursor: not-allowed;
      }

      img {
        width: 902px;
        height: 650px;
        position: absolute;
        left: 50%;
        top: 0;
        margin-left: -451px;
      }

      .width43 {
        width: 42px;
        height: 32px;
      }

      .width66 {
        width: 66px;
        height: 66px;
      }

      .height33 {
        width: 66px;
        height: 33px;
      }
    }
  }
</style>
