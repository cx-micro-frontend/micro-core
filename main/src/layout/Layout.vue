<template>

  <ns-layout :class="{'is-hide-frame':isInIframe}">
    <template slot="header">

      <!--左logo 插槽 - 根据实际情况插入业务组图片 -->
      <div class="fl head-logo">
        <img :src="operatorInfo.operatorLoginPic" @click="click"/>
      </div>

      <!--业务组 - 自定义头部模块 -->
      <div class="fl">
        <header-custom></header-custom>
      </div>

      <!--右边 - 用户下拉菜单 业务组在插槽内调用组件，传入值，并且调用方法即可  -->
      <div class="fr">
        <!--<biz-lock-screen></biz-lock-screen>-->
        <ns-screenfull></ns-screenfull>
        <biz-skiner></biz-skiner>
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

      <transition leave-active-class="" enter-active-class="out-in">
        <keep-alive :include="cacheQueue">
          <router-view :key="key" v-if="isCache"></router-view>
        </keep-alive>
      </transition>

      <transition leave-active-class="" enter-active-class="out-in">
        <router-view :key="key" v-if="!isCache"></router-view>
      </transition>

    </template>

  </ns-layout>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { bizSidebar, bizTabsViews, bizLockScreen, bizSkiner, bizUserDropdown, headerCustom } from './index';
  import transform from './transform';
  import expand from '../../expand';

  export default {
    name: 'layout',
    mixins: [transform],
    components: { bizSidebar, bizTabsViews, bizLockScreen, bizSkiner, bizUserDropdown, headerCustom },
    data() {
      return {};
    },
    computed: {
      ...mapGetters(['userinfo', 'operatorInfo', 'isInIframe']),

      //全局缓存开关
      isCache() {
        return expand.route.cache;
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
        // this.$forceUpdate();
      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  #layout {
    .head-logo {
      height: 50px;
      width: 150px;
      padding: 11px 12px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
      }
    }
    //在嵌套模式下，去掉头，侧边栏，tab页面，内容部分全屏撑开
    &.is-hide-frame {
      #header-wrapper, #sidebar-wrapper, #ns-page-tabs {
        display: none;
      }
      .main-container {
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        padding: 0;
        .app-main, .win, .ns-container, .ns-container-right, .ns-container-left {
          height: 100%;
          min-height: 100%;
        }
      }
    }
  }
</style>
