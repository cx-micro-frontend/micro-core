<template>
  <div class="error-page">
    <img :src="img_404" alt="404"/>
    <div class="error-text">
      <p>{{maintit}}</p>
      <span>{{subtit}}</span>
    </div>
    <ns-button class="error-btn" type="primary" @click="goBack">点击返回</ns-button>
  </div>
</template>

<script>
  import mixins from './mixins'

  export default {
    mixins: [mixins],
    methods: {
      goBack() {
        history.back();
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../error-page";
</style>
