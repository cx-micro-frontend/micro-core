<!--login station 企业微信中转跳转页面-->
<template>
  <div class="login-transfer-wrap">
    <img src="./loading.gif" alt="loading"/>
  </div>
</template>
<script>
  import utils from '@NEAP/utils';
  import { authLogin, getMenu } from '@NEAP/mixins/Login/reqUtils';
  import { jumpToTnitPage } from '@NEAP/utils/behavior';
  export default {
    methods: {
      async loginTo() {

        /**
         * ========================================
         * 以下为企业微信登录
         * 切勿随意变动，否则会影响接入
         * 更改可以增加条件判断，只增不减不改
         * ========================================
         */
        const auth_code = utils.getUrlParam('auth_code');

        //定义入参
        const query = {
          auth_code,
          source: 'weixin',
        };

        try {
          await authLogin(query);
          await getMenu();
          jumpToTnitPage();
        }catch (e) {
          this.$router.push( { path: '/front/login'})
        }
      },
    },

    created() {
      this.loginTo();
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .login-transfer-wrap {
    position: relative;
    text-align: center;
    img {
      position: absolute;
      width: 100px;
      height: 100px;
      margin-left: -100px;
    }
  }
</style>
