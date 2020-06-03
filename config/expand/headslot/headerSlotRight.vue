<!--布局厂字框架 - 头部自定义插槽 - 右边-->
<template>
    <span class="message-tips">
      <el-badge :value="value" :max="99">
        <ns-icon-class class="message-tips-icon" icon-class="el-icon-bell" @click="tipsClick"/>
      </el-badge>
  </span>
</template>

<script>
  export default {
    name: 'headerSoltRight',
    data() {
      return {
        value: 1,
      };
    },
    methods: {
      tipsClick() {

      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .message-tips {
    .el-badge {
      margin-top: 0;
      vertical-align: baseline;

      //铃铛
      .message-tips-icon.ns-icon-class {
        font-size: 20px;
        width: 20px;
        height: 20px;
        vertical-align: -0.3em;
        cursor: pointer;
        color: #fff;
      }

      //红点
      .el-badge__content.is-fixed {
        top: 14px;
        right: 18px;
      }
    }

  }
</style>
