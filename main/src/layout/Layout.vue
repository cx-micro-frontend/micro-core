/*
* @Author: Broccoli spring( 高仓雄 - gcx )
* @Date: 2020-05-13 10:48:45
* @Last Modified by: Broccoli spring( 高仓雄 - gcx )
* @Last Modified time: 2020-05-14 09:18:55
*/
<template>
  <div
    id="layout"
    class="app-wrapper clear"
    :class="{
    'is-hide-frame':isInIframe,
    'is-portal':isPortal,
    'is-expand':!sideMenuCollapse,
    'is-collapse':sideMenuCollapse,
  }">
    <div id="header-wrapper" class="fl">
      <ns-header></ns-header>
    </div>


    <!--侧边栏 - 业务组直接调用封装的侧边栏组件即可 -->
    <div id="side-menu-wrapper">
      <biz-side-menu v-if="!isPortal"></biz-side-menu>
    </div>

    <!--history task-tabs link-->
    <div id="page-tabs-wrapper">
      <biz-tabs-views v-if="!isPortal"></biz-tabs-views>
    </div>

    <!--工作台模块 - 嵌入路由视图即可 -->
    <section id="main-wrapper">
      <!--changing-over  work bench module-->

      <neap-injecter-iframe></neap-injecter-iframe>

      <transition leave-active-class enter-active-class="out-in">
        <keep-alive :include="cacheQueue" :exclude="cacheExclude">
          <router-view :key="key" v-if="isCache"></router-view>
        </keep-alive>
      </transition>

      <transition leave-active-class enter-active-class="out-in">
        <router-view :key="key" v-if="!isCache"></router-view>
      </transition>

    </section>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import {
    bizSideMenu,
    bizTabsViews,
    nsHeader,
  } from './index';
  import transform from './mixins/transform';
  import portal from './mixins/portal';
  import changeDocumentTitle from './mixins/changeDocumentTitle';
  import killPopoverByScroll from './mixins/killPopoverByScroll';
  import expand from '../../expand';

  export default {
    name: 'layout',
    mixins: [transform, portal, changeDocumentTitle, killPopoverByScroll],
    components: { nsHeader, bizSideMenu, bizTabsViews },
    data() {
      return {};
    },
    computed: {
      ...mapGetters([ 'isInIframe', 'sideMenuCollapse']),
      //全局缓存开关
      isCache() {
        return expand.route.cache;
      },
      cacheExclude() {
        console.log(' ======= cacheExclude 队列：====== ');
        console.log(expand.route.cacheExclude);
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
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "style/index";
</style>
