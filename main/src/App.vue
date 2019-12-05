<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created() {
      this.$store.dispatch('setBrowserInfo');//设置浏览器信息
      this.$store.dispatch('setOSInfo');//设置操作系统信息
    },
  };
</script>

<style>

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
