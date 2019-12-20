<!--login station 中转跳转页面-->
<template>
  <div class="login-wrap">
    <!--<h1>loading......</h1>-->
    <img src="../../assets/img/loading/loading.gif" alt="loading"/>
  </div>
</template>
<script>
  import { getUrlParam } from '../../utils/library/urlhandle';
  import authLogin from '../../mixins/Login/authLogin';

  export default {
    mixins: [authLogin],
    data() {
      return {};
    },
    created() {
      this.loginTo(); //login
    },
    methods: {
      loginTo() {

        /**
         * ========================================
         * 以下为单点登录
         * v10 => saas
         * v8 => saas
         * v10 => saml
         * 切勿随意变动，否则会影响接入
         * 更改可以增加条件判断，只增不减不改
         * ========================================
         */
          //获取单点token请求登录类型：srcSys:  saas / v8 / saml - 根据所在项目集成决定
        const _srcSys = getUrlParam('srcSys') || null;
        const _token = getUrlParam('token');

        //定义入参
        const query = {
          token: _token,
          srcSys: _srcSys,
        };

        this.ssoLogin(query);
        // http://localhost:8093/#/front/login-station?referRoute=/community/noticeList&isShowIframe=false&token=Ehm0IzQzxZEcrP4a1wnHVTdXtnvGiqgDgRxYEhp0y9Q%3d&referPath=192.168.1.135%3a89
      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .login-wrap {
    position: relative;
    text-align: center;
    h1 {
      font-weight: 400;
      color: #1f2f3d;
      margin: 30px 0 5px -100px;
    }
    img {
      position: absolute;
      width: 100px;
      height: 100px;
      margin-left: -100px;
    }
  }
</style>
