<template>
  <div class="clear">
    <div class="fl" style="color: #fff;padding-left: 24px;font-size: 16px;">
      {{operatorName}}
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'header-custom',
    data() {
      return {};
    },
    computed: {
      ...mapGetters(['operatorName']),
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
