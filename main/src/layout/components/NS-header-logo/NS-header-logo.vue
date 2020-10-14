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
    props: {
      isToggle: { type: Boolean, dafault: true },
      initLogo: { type: String, dafault: 'normal' },//normal / mini
    },
    computed: {
      ...mapGetters(['themeColor', 'sideMenuCollapse', 'operatorInfo']),
      logoSrc() {
        //是否支持 切换 logo
        if (this.isToggle) {
          return this.sideMenuCollapse ? this.operatorInfo.operatorLogoMini : this.operatorInfo.operatorLogo;
        }
        else {
          //不支持 切换 logo 情况下的 默认初始化 logo
          return this.initLogo === 'normal' ? this.operatorInfo.operatorLogo : this.operatorInfo.operatorLogoMini;
        }
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
