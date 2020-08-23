<!--login station for soss 中转跳转页面-->
<template>
  <div class="login-wrap">
    <h1 style="color:#fff">loading......</h1>
    <br />
    <img src="./loading.gif" alt="" />
  </div>
</template>
<script>
import { mutilLogin, mutilLoginTwo } from './service/loginTransfer-saas';

export default {
  data() {
    return {
      cryptoKey: '0123456789012345', //crypto key
      timer: null,
    };
  },
  created() {
    this.loginTo(); //login
  },
  methods: {
    loginTo() {
      let data = {
        remember: false,
        userAccount: window.name.split('*')[0],
        password: window.name.split('*')[1],
        enterpriseId: window.name.split('*').length > 2 ? window.name.split('*')[2] : null,
      };
      mutilLogin(data)
        .then(res => {
          if (res.resultData.userId === 145) {
            //跳转平台概览
            this.$router.push({
              path: '/soss/operationHome',
            });
          } else {
            let users = { userId: res.resultData.userId };
            mutilLoginTwo(users).then(r => {
              if (r.resultData) {
                this.$router.push({
                  path: '/soss/operationHome',
                });
              } else {
                this.$router.push({
                  path: '/soss/buyProduct',
                });
              }
            });
          }
          // this.$store.dispatch('Login', res.resultData.userId).then((r) => {});
        })
        .catch(response => {
          if (
            response.resultCode === 604 ||
            response.resultCode === 601 ||
            response.resultCode === 500
          ) {
            this.timer = setTimeout(() => {
              window.location.href = window.location.origin + ':90/sossLogin.html';
            }, 2000);
          }
        });
    },
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  },
};
</script>
<style rel="stylesheet/scss" lang="scss"></style>
