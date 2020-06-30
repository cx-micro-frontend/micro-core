/*
* @Author: Broccoli spring( 高仓雄 - gcx )
* @Date: 2020-05-13 10:48:45
* @Last Modified by: Broccoli spring( 高仓雄 - gcx )
* @Last Modified time: 2020-05-14 09:18:55
*/
<template>
  <ns-layout :class="{
    'is-hide-frame':isInIframe,
    'is-portal':isPortal
  }">
    <template slot="header">
      <!--左logo 插槽 - 根据实际情况插入业务组图片 -->
      <div class="fl head-logo">
        <img :src="operatorInfo.operatorLoginPic" @click="click"/>
      </div>


      <div class="fl" v-if="integrationMode === 'mam'">
        <!--顶层菜单入口-->
        <ns-top-menu></ns-top-menu>
      </div>


      <!--业务组 - 自定义头部插槽 - 左边 -->
      <div class="fl">
        <header-slot-left></header-slot-left>
      </div>

      <!--右边 - 用户下拉菜单 业务组在插槽内调用组件，传入值，并且调用方法即可  -->
      <div class="fr">
        <!--业务组 - 自定义头部插槽 - 右边 -->
        <header-slot-right></header-slot-right>
        <!--<biz-lock-screen></biz-lock-screen>-->
        <!--全屏-->
        <ns-screenfull></ns-screenfull>
        <!--换肤-->
        <biz-skiner></biz-skiner>
        <!--用户设置下拉-->
        <biz-user-dropdown></biz-user-dropdown>
      </div>
    </template>

    <!--侧边栏 - 业务组直接调用封装的侧边栏组件即可 -->
    <template slot="sidebar">
      <biz-sidebar></biz-sidebar>
    </template>

    <!--history task-tabs link-->
    <template slot="tabs-view">
      <biz-tabs-views></biz-tabs-views>
    </template>

    <!--工作台模块 - 嵌入路由视图即可 -->
    <template slot="app-main">
      <!--changing-over  work bench module-->

      <transition leave-active-class enter-active-class="out-in">
        <keep-alive :include="cacheQueue" :exclude="cacheExclude">
          <router-view :key="key" v-if="isCache"></router-view>
        </keep-alive>
      </transition>

      <transition leave-active-class enter-active-class="out-in">
        <router-view :key="key" v-if="!isCache"></router-view>
      </transition>
    </template>
  </ns-layout>
</template>

<script>
  import { mapGetters } from 'vuex';
  import {
    nsTopMenu,
    bizSidebar,
    bizTabsViews,
    bizLockScreen,
    bizSkiner,
    bizUserDropdown,
    headerSlotLeft,
    headerSlotRight,

  } from './index';
  import transform from './mixins/transform';
  import portal from './mixins/portal';
  import changeDocumentTitle from './mixins/changeDocumentTitle';
  // import killOptionByScroll from './mixins/killOptionByScroll';
  import expand from '../../expand';

  export default {
    name: 'layout',
    mixins: [transform, portal, changeDocumentTitle],
    components: { nsTopMenu, bizSidebar, bizTabsViews, bizLockScreen, bizSkiner, bizUserDropdown, headerSlotLeft, headerSlotRight },
    data() {
      return {};
    },
    computed: {
      ...mapGetters(['userinfo', 'operatorInfo', 'isInIframe', 'integrationMode']),


      //全局缓存开关
      isCache() {
        return expand.route.cache;
      },
      cacheExclude() {
        return expand.route.cacheExclude;
      },

      key() {
        //获取整体路由key值
        const routeKey = this.NEAP_ROUTER.getRouteKey();
        return (this.$route.path !== undefined ? this.$route.path : this.$route) + '-' + routeKey;
      },

      cacheQueue() {
        console.log(' ======= 缓存页面- name 队列：====== ');
        console.log(this.NEAP_CACHE.getCacheQueue());
        return this.NEAP_CACHE.getCacheQueue();
      },
    },
    created() {
      // console.log(this.isInIframe);
    },
    methods: {
      click() {
        //切换项目后刷新所有页面-清除所有路由缓存
        this.NEAP_ROUTER.refreshAll();
      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "style/layout";
</style>
