<!--布局厂字框架 - 头部自定义插槽 - 右边-->
<template>
  <div class="header-slot-container-right">
    <!--外部资源注入-->
    <component :is="markName(header_slot_name)" v-if="is_slot_render"></component>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';
  import headSoltMixins from './head-slot-mixins';

  export default {
    name: 'header-slot-container-right',
    mixins: [headSoltMixins],
    data() {
      return {
        slotType: 'right',
      };
    },
    computed: {
      ...mapGetters(['operatorInfo']),
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .header-slot-container-right {
    display: inline-block;
  }
</style>
