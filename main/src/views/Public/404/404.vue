<template>
  <div class="error-page page-404">
    <img :src="img_404" alt="404"/>
    <div class="error-text">
      <p>您要访问的页面走丢啦～</p>
    </div>
    <ns-button class="error-btn" type="primary" @click="goBack">点击返回</ns-button>
    <ns-button class="error-btn" type="primary" @click="goLogin">返回登录</ns-button>
  </div>
</template>

<script>
  import img_404 from '../../../assets/img/404/404.png';
  import { backIniView } from '../../../utils/behavior';

  export default {
    data() {
      return {
        img_404,
      };
    },
    methods: {
      goBack() {
        history.back();
      },
      goLogin() {
        backIniView();
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../error-page";
</style>
