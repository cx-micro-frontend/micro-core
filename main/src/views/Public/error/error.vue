<template>
  <div class="error-page">
    <img :src="img_404" alt="404"/>
    <div class="error-text">
      <p>{{maintit}}</p>
      <span>{{subtit}}</span>
    </div>
    <ns-button class="error-btn" type="primary" @click="goBack">点击返回</ns-button>
    <ns-button class="error-btn" type="primary" @click="goLogin">返回登录</ns-button>
  </div>
</template>

<script>
  import mixins from './mixins'
  import { backIniView } from '../../../utils/behavior';

  export default {
    mixins: [mixins],
    methods: {
      goBack() {
        history.back();
      },
      goLogin() {
        backIniView();
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../error-page";
</style>
