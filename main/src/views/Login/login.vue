<!--login-->
<template>
  <div class="login-wrap" :style="{'background-image': 'url(' + operatorInfo.operatorBackgroudPic + ')'}">
    <div class="login-header">
      <img class="login-logo" :src="operatorInfo.operatorLogo" alt="">
    </div>
    <sign-in-box></sign-in-box>
    <div class="login-footer">{{operatorInfo.operatorCopyright}}</div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import signInBox from './sign-in-box/sign-in-box';

  export default {
    components: { signInBox },
    data() {
      return {
        isDefault: 1,
      };
    },
    computed: {
      ...mapGetters(['operatorInfo']),
    },
    created() {
      this.$store.dispatch('getCoverPainting', { isDefault: this.isDefault });
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "style";
</style>
