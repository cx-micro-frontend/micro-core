/*
 * @Author: Broccoli spring( 高仓雄 - gcx ) 
 * @Date: 2020-05-13 10:49:36 
 * @Last Modified by:   Broccoli spring( 高仓雄 - gcx ) 
 * @Last Modified time: 2020-05-13 10:49:36 
 */

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$store.dispatch('setBrowserInfo'); //设置浏览器信息
    this.$store.dispatch('setOSInfo'); //设置操作系统信息
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
