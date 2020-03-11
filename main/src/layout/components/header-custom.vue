<!--布局厂字框架 - 头部自定义插槽-->
<template>
  <div class="clear">
    <div class="fl">
      <!--外部资源注入-->
      <component :is="this.markName(head_slot_render.name)" v-if="has_head_slot_expand"></component>
      <!--默认显示-->
      <span v-else>{{operatorInfo.operatorName}}</span>
      <!--<theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" @change="themeChange"/>-->
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  // import { hasFile } from '../../utils/library/judge';
  import expand from '../../../expand';
  import ThemePicker from '../../components/ThemePicker/index';
  import { updateThemeColor } from '../../service/System/Layout/coverPainting';


  export default {
    name: 'header-custom',
    components: { ThemePicker },
    data() {
      return {};
    },
    computed: {
      ...mapGetters(['operatorInfo']),

      // hasFile() {
      //   return hasFile('@ROOT/config/expand', /\config.js/);
      // },

      has_head_slot_expand() {
        try {
          return Boolean(expand.layout.headslot.name);
        }
        catch (e) {
          return false;
        }
      },
      head_slot_render() {
        return this.has_head_slot_expand ? expand.layout.headslot : null;
      },
    },
    methods: {
      register() {
        if (this.has_head_slot_expand) {
          console.log(this.head_slot_render);
          Vue.component(this.markName(this.head_slot_render.name), this.head_slot_render);
        }
      },

      markName(name) {
        return 'neap-expand-' + name;
      },

      themeChange(val) {
        console.log(22222222);
        console.log(val);
        console.log(22222222);
        updateThemeColor({ themeColor: val }).then(() => {
          let userInfo = this.$store.state.User.userinfo;
          this.$store.dispatch('updateLoginData', userInfo);
        });
        // this.$store.dispatch('settings/changeSetting', {
        //   key: 'theme',
        //   value: val
        // })
      },
    },
    created() {

      this.register();
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
