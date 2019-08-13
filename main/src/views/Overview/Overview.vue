<!--主页-->
<template>
  <div class="overview">
    <img src="../../assets/img/overview/overview.png">
    <!--<ns-particles class="ns-particles" :color="particlesColor"/>-->
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
