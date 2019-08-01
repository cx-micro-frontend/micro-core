<!--login station 中转跳转页面-->
<template>
  <div class="login-wrap">
    <!--<h1>loading......</h1>-->
    <img src="../../assets/img/loading/loading.gif" alt="loading"/>
  </div>
</template>
<script>
  import { getUrlParam } from '../../utils';
  import authLogin from './authLogin';

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
        let data = {
          token: getUrlParam('token'),
        };
        this.ssoLogin(data);
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
