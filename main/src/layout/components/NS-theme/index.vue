<template>
  <el-popover
    class="ns-theme"
    popper-class="ns-theme__popper"
    placement="bottom"
    :width="popoverWidth"
    trigger='click'
  >
    <ns-theme-config></ns-theme-config>
    <ns-icon-svg slot="reference" class="ns-header__text" icon-class="neap-huanfu"/>
  </el-popover>

</template>

<script>

  export default {
    name: 'ns-theme',
    data() {
      return {
        popoverWidth: 560,
      };
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .ns-theme__popper {
    padding: 15px 20px;
    box-sizing: border-box;
  }
</style>

