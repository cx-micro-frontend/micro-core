<!--关于- 弹窗-->
<template>
  <ns-dialog
    id="about-dialog"
    title="关于"
    :visible.sync="visible.visible"
    type="noFooter"
    autoHeight
  >
    <div class="about-logo fl">
      <img src="../../../../assets/img/logo/logo-blue.png" alt="">
    </div>
    <div class="about-describe fl">
      <p>
        电话：0571-88231790 / 15988863036 Email：market@new-see.com
      </p>
      <p>
        © 2019 - 2019 杭州新视窗信息技术有限公司
      </p>
    </div>
  </ns-dialog>
</template>

<script>
  export default {
    name: 'about-dialog',
    props: {
      visible: {
        type: Object,
        default() {
          return {
            visible: false,
          };
        },
      },
    },
    data() {
      return {};
    },
    methods: {

      //取消
      closeHandle() {
        this.resetForm();
        this.visible.visible = false;
      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  #about-dialog {
    .about-logo {
      width: 120px;
      height: 50px;
      margin-right: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

</style>

