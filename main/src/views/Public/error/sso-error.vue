<template>
  <div class="error-page sso-error-page">
    <img :src="img_page_error"/>
    <div class="error-text">
      <p>{{maintit}}</p>
      <p>{{subtit}}</p>
    </div>
  </div>
</template>

<script>
  import mixins from './mixins'

  export default {
    mixins: [mixins],
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../error-page";
</style>
