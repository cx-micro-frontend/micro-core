<!--布局 - 头部 header-->
<template>
  <div id="Header" :class="['ns-header clear',{'is-banner':bannerCover}]"
       :style="headerStyle">
    <!--左logo 插槽 - 根据实际情况插入业务组图片 -->
    <!--'width':isSideMenuCollapse?'50px':'180px'-->
    <div class="ns-header__module fl ns-header-logo"
         :style="{
         'background-color':themeColor,
         }"
    >
      <img :src="operatorInfo.operatorLoginPic" @click="click"/>
    </div>

    <div class="ns-header__module fl">
      <ns-menu-collapse></ns-menu-collapse>
    </div>

    <div class="ns-header__module fl" v-if="integrationMode === 'mam'">
      <!--顶层菜单入口-->
      <ns-top-menu></ns-top-menu>
    </div>

    <!--业务组 - 自定义头部插槽 - 左边 -->
    <div class="ns-header__module fl">
      <header-slot-left></header-slot-left>
    </div>

    <!--右边 - 用户下拉菜单 业务组在插槽内调用组件，传入值，并且调用方法即可  -->
    <div class="ns-header__module fr">
      <!--业务组 - 自定义头部插槽 - 右边 -->
      <header-slot-right></header-slot-right>
      <!--<biz-lock-screen></biz-lock-screen>-->
      <!--全屏-->
      <ns-screenfull class="ns-header__text"></ns-screenfull>
      <!--换肤-->
      <biz-skiner></biz-skiner>
      <!--用户设置下拉-->
      <biz-user-dropdown></biz-user-dropdown>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import {
    nsMenuCollapse,
    nsTopMenu,
    bizLockScreen,
    bizSkiner,
    bizUserDropdown,
    headerSlotLeft,
    headerSlotRight,
  } from './index';

  export default {
    name: 'ns-header',
    components: { nsMenuCollapse, nsTopMenu, bizLockScreen, bizSkiner, bizUserDropdown, headerSlotLeft, headerSlotRight },
    computed: {
      ...mapGetters(['themeColor', 'bannerCover', 'isSideMenuCollapse', 'operatorInfo', 'integrationMode']),
      headerStyle() {
        return {
          'background-color': this.bannerCover ? this.themeColor : '#ffffff',
          '--themeColor': this.bannerCover ? this.themeColor : '#ffffff',
        };
      },
    },
    methods: {
      click() {
        //切换项目后刷新所有页面-清除所有路由缓存
        this.NEAP_ROUTER.refreshAll();
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ns-header {

  }
</style>
