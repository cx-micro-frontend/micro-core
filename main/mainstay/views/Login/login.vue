<!--login-->
<template>
  <div class="login-wrap">
    <div class="login-header"></div>
    <sign-in-box></sign-in-box>
    <div class="login-footer"></div>
  </div>
</template>
<script>
  // import {getOperatorInfo} from '../../service/User';
  import signInBox from './sign-in-box/sign-in-box';

  export default {
    components: { signInBox },
    data() {
      return {
        isDefault: 1,
        afterRequset: false,
        operator: {
          operatorBackgroudPic: '',
          operatorLoginPic: '',
          operatorLogo: '',
          operatorPicture: '',
          operatorDesc: '',
        },
      };
    },
    created() {
      // this.getInfo();
    },
    methods: {
      // getInfo() {
      //   getOperatorInfo({isDefault: this.isDefault}).then(res => {
      //     this.afterRequset = true;
      //     for (let key in this.operator) {
      //       if (this.operator.hasOwnProperty(key)) {
      //         if (key === 'operatorDesc') {
      //           this.operator[key] = res.resultData[key];
      //         } else {
      //           this.operator[key] = 'data:image/jpeg;base64,' + res.resultData[key];
      //         }
      //       }
      //     }
      //     localStorage.setItem('operatorInfo', JSON.stringify(this.operator));
      //   })
      // }
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../../style/login/login";
</style>
