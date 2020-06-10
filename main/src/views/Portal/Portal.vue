<template>
  <div class="win" id="portal">
    <h1>我是门户页面</h1>
    <ns-button type="primary" @click="click">点击进入</ns-button>
    <h2>菜单栏数据还需要获取 / 路由权限需要注册</h2>
  </div>

</template>

<script>
  export default {
    name: 'portal',
    methods: {
      click() {
        this.$router.push({ name: 'systemOrgEmployee' });
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
