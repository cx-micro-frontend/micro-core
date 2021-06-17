<!--login-->
<template>
  <div class='login-wrap' :style="{'background-image': 'url(' + operatorInfo.operatorBackgroudPic + ')'}">
    <div class='login-header'>
      <!--<img class="login-logo" :src="operatorInfo.operatorLogo" alt="">-->
    </div>


    <sign-in-box></sign-in-box>

    <div class='login-footer' id='login-footer'>
<!--      {{ operatorInfo.operatorCopyright }}-->
    </div>


  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import signInBox from './components/sign-in-box/sign-in-box';
import QRCodeDownLoade from './components/QRCodeDownLoad/QRCodeDownLoad';

export default {
  components: { signInBox, QRCodeDownLoade },
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
  mounted() {
    document.getElementById('login-footer').innerHTML = this.operatorInfo.operatorCopyright;
    // <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" >桂ICP备16008596号</a><br/>©2004~现在 杭州新视窗信息技术有限公司 版权所有
  },
};
</script>
<style rel='stylesheet/scss' lang='scss'>
@import "style";
</style>
