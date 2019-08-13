<!--login-->
<template>
  <div class="login-wrap" :style="{'background-image': 'url(' + operatorBackgroudPic + ')'}">
    <div class="login-header">
      <div class="login-logo" :style="{'background-image': 'url(' + operatorLogo + ')'}"></div>
    </div>
    <sign-in-box></sign-in-box>
    <div class="login-footer"></div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import signInBox from './sign-in-box/sign-in-box';

  export default {
    components: {signInBox},
    data() {
      return {
        isDefault: 1,
      };
    },
    computed: {
      ...mapGetters(['operatorBackgroudPic', 'operatorLogo']),
    },
    created() {
      this.$store.dispatch('getCoverPainting', {isDefault: this.isDefault});
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../../style/login/login";
</style>
