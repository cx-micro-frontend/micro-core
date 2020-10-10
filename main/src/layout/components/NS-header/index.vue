<!--布局 - 头部 header-->
<template>
  <div id="Header" :class="['ns-header clear',{'is-banner':bannerCover}]" :style="headerStyle">

    <!--头部 header - logo-->
    <div class="ns-header__module fl">
      <ns-header-logo></ns-header-logo>
    </div>

    <!--侧边菜单 - 展开/关闭 开关-->
    <div class="ns-header__module fl" v-if="!isPortal">
      <ns-menu-collapse></ns-menu-collapse>
    </div>

    <!--返回首页-->
    <div class="ns-header__module hover fl" v-if="isMultipleApplication">
      <ns-to-home></ns-to-home>
    </div>

    <!--顶部 - 菜单-->
    <div class="ns-header__module hover fl" v-if="isMultipleApplication">
      <ns-top-menu :topNavMenuData="topNavMenuData"></ns-top-menu>
    </div>

    <!--业务组 - 自定义头部插槽 - 左边 -->
    <div class="ns-header__module fl">
      <!--左logo 插槽 - 根据实际情况插入业务组件 -->
      <header-slot-left></header-slot-left>
    </div>

    <div class="fr">
      <!--右边 - 用户下拉菜单 业务组在插槽内调用组件，传入值，并且调用方法即可  -->
      <div class="ns-header__module fl">
        <!--业务组 - 自定义头部插槽 - 右边 -->
        <header-slot-right></header-slot-right>
        <!--<biz-lock-screen></biz-lock-screen>-->
      </div>

      <!--全屏-->
      <div class="ns-header__module fl">
        <ns-screenfull class="ns-header__text" openIcon="neap-quanping" quitIcon="neap-tuichuquanping"></ns-screenfull>
      </div>
      <!--换肤-->
      <div class="ns-header__module fl">
        <biz-skiner></biz-skiner>
      </div>

      <!--用户设置下拉-->
      <div class="ns-header__module fl">
        <biz-user-dropdown></biz-user-dropdown>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import portal from '../../mixins/portal';
  import topNavMenuData from '../../mixins/topNavMenuData';
  import integrationMode from '../../mixins/integrationMode';

  import {
    nsHeaderLogo,
    nsMenuCollapse,
    nsToHome,
    nsTopMenu,
    bizLockScreen,
    bizSkiner,
    bizUserDropdown,
    headerSlotLeft,
    headerSlotRight,
  } from './index';

  export default {
    name: 'ns-header',
    mixins: [portal, topNavMenuData, integrationMode],
    components: { nsHeaderLogo, nsMenuCollapse, nsToHome, nsTopMenu, bizLockScreen, bizSkiner, bizUserDropdown, headerSlotLeft, headerSlotRight },
    computed: {
      ...mapGetters(['themeColor', 'bannerCover', 'integrationMode']),
      headerStyle() {
        return {
          'background-color': this.bannerCover ? this.themeColor : '#ffffff',
          '--themeColor': this.bannerCover ? this.themeColor : '#ffffff',
        };
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
