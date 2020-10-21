<!--app 下载二维码-->
<template>
  <el-popover
    class="QRCodeDownLoade"
    popper-class="QRCodeDownLoade__popper"
    placement="right-start"
    trigger='hover'
  >

    <div class="QRCodeDownLoade__main">
      <img :src="operatorInfo.qrcodePic" alt="">
      <p @click="toDownload">下载新视窗插件</p>
    </div>
    <div class="QRCodeDownLoade__enter" slot="reference"></div>

  </el-popover>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'QRCodeDownLoade',
    data() {
      return {
        popperModel: false,
      };
    },
    computed: {
      ...mapGetters(['operatorInfo']),
    },
    methods: {
      toDownload() {
        window.open('https://www3.zjlcwg.com/BPMSite/ClientSupport/OCXInstall.aspx');
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .QRCodeDownLoade {
    position: absolute;
    top: 4px;
    right: 4px;

    .QRCodeDownLoade__enter {
      width: 42px;
      height: 42px;
      background-image: url("../../assets/QRCodeForDownLode@2x.png");
      background-size: 100% 100%;
      cursor: pointer;
      transition: all 300ms ease-in;
      &:hover {
        transform: scale(1.1, 1.1);
      }
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss">
  @import "../../../../style/var/index";

  .el-popover.QRCodeDownLoade__popper {
    padding: 0;
    min-width: auto;
    margin-left: 10px;
    .QRCodeDownLoade__main {
      margin: 15px;
      box-sizing: border-box;
      text-align: center;
      img {
      }
      p {
        font-size: 14px;
        color: $--color-primary;
        cursor: pointer;
      }
    }
  }
</style>
