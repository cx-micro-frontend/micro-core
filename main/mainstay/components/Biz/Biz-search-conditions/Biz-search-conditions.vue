<template>
  <div class="search-container clear">
    <div class="biz-search-conditions borderBox fl clear" style="position: inherit;">
      <div class="search-body clear">
        <slot name="btns"></slot>
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'biz-search-condition',
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  @import '../../../style/Modular/search-conditions/search-conditions';
</style>

