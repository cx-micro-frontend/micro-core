<!--头部 header - logo-->
<template>
  <div class="ns-header-logo" :style="{'background-color':themeColor}">
    <img :src="logoSrc" @click="click"/>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'ns-header-logo',
    computed: {
      ...mapGetters(['themeColor', 'isSideMenuCollapse', 'operatorInfo']),
      logoSrc() {
        return this.isSideMenuCollapse ? this.operatorInfo.operatorLogoMini : this.operatorInfo.operatorLogo;
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
  .ns-header-logo {
    height: 100%;
    overflow: hidden;
    img {
      height: 100%;
    }
  }
</style>
