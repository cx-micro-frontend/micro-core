<!--概览页 - 外部注入个性化配置路由界面（非权限控制)-->
<template>
  <div class="overview">
    <h1>概览页 - 外部注入个性化配置路由界面（非权限控制)</h1>
  </div>
</template>

<script>
  export default {
    name: 'overview',
    data() {
      return {
        particlesColor: '#a9abae',
      };
    },
    created() {
    },
  };

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .overview {
    position: relative;
    height: 100%;
    img {
      position: absolute;
      width: 224px;
      height: 123px;
      top: 50%;
      left: 50%;
      margin-left: -110px;
      margin-top: -60px;
    }
  }
</style>
