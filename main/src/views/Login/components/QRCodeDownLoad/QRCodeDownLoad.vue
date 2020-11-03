<!--app 下载二维码-->
<template>
  <el-popover
    class="QRCodeDownLoade"
    :popper-class="popperClassHandle"
    :placement="placement"
    :trigger='trigger'
    v-if="operatorInfo.qrcodePic"
  >
    <!--弹出框内容部分-->
    <div class="QRCodeDownLoade-main">
      <!--内容插槽-->
      <slot name="content">
        <img :src="operatorInfo.qrcodePic" alt="">
      </slot>
      <!--<p @click="toDownload">下载新视窗插件</p>-->
    </div>

    <!--入口部分-->
    <div class="QRCodeDownLoade-enter" slot="reference">
      <!--入口插槽-->
      <slot name="enter">
        <div class="QRCodeDownLoade-enter__content"></div>
      </slot>
    </div>

  </el-popover>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'QRCodeDownLoade',
    props: {
      placement: { type: String, default: 'right-start' },//popper 出现位置
      trigger: { type: String, default: 'hover' },//popper 触发模式
      popperClass: { type: String },//popper 类名
    },
    data() {
      return {
        popperModel: false,
      };
    },
    computed: {
      ...mapGetters(['operatorInfo']),
      popperClassHandle() {
        return `QRCodeDownLoade__popper ${this.popperClass || ''}`;
      },
    },
    methods: {
      toDownload() {
        //绿城
        // window.open('https://www3.zjlcwg.com/BPMSite/ClientSupport/OCXInstall.aspx');
        //新视窗OA
        window.open('http://oa.new-see.com/BPMSite/ClientSupport/OCXInstall.aspx');
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .QRCodeDownLoade {
    display: inline-block;
    &-enter {
      display: inline-block;
      &__content {
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
  }
</style>

<style rel="stylesheet/scss" lang="scss">
  @import "../../../../style/var/index";

  .el-popover.QRCodeDownLoade__popper {
    padding: 0;
    min-width: auto;
    margin-left: 10px;
    .QRCodeDownLoade-main {
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
