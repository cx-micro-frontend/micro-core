<template>
  <div class="pic-404 sso-404">
    <img :src="img_sso_404" alt="sso_404"/>
    <div class="error-text">
      <p>单点登录用户不存在</p>
      <p>请与账号管理员联系</p>
    </div>
  </div>
</template>

<script>
  import img_sso_404 from '../../../assets/img/404/sso/sso@2x.png';

  export default {
    data() {
      return {
        img_sso_404,
      };
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "404";
</style>
