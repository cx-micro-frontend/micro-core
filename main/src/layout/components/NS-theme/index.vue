<template>
  <el-popover
    class="ns-theme"
    popper-class="ns-theme__popper"
    placement="bottom"
    :width="popoverWidth"
    trigger='click'
  >
    <ns-theme-config></ns-theme-config>
    <ns-icon-class slot="reference" class="ns-header__text" icon-class="skin"/>
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

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../style/var/layout.scss";

  .ns-theme {
    i {
      width: $--head-icon-size;
      height: $--head-icon-size;
      line-height: $--head-icon-size;
      font-size: $--head-icon-size;
      color: $--head-icon-color;
      cursor: pointer;
    }
  }


</style>

<style rel="stylesheet/scss" lang="scss">
  .ns-theme__popper {
    padding: 15px 20px;
    box-sizing: border-box;
  }
</style>

