<!--布局厂字框架 - 头部自定义插槽 - 左边-->
<template>
  <div class="header-slot-container-right clear">
    <div class="fl">
      <!--外部资源注入-->
      <component :is="markName(header_slot_name)" v-if="is_slot_render"></component>
      <!--默认显示-->
      <span v-else>{{operatorInfo.operatorName}}</span>
      <!--<theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" @change="themeChange"/>-->
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';
  import headSoltMixins from './head-slot-mixins';

  // import { hasFile } from '../../utils/library/judge';
  // import ThemePicker from '../../../components/ThemePicker/index';
  // import { updateThemeColor } from '../../../service/System/Layout/coverPainting';


  export default {
    name: 'header-slot-container-left',
    mixins: [headSoltMixins],
    // components: { ThemePicker },
    data() {
      return {
        slotType: 'left',
      };
    },
    computed: {
      ...mapGetters(['operatorInfo']),
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
