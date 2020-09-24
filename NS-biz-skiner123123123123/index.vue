<!--换肤功能-->
<template>
  <ns-skiner v-model="skinerModel"
             :color-format="colorFormat"
             @change-theme="changeTheme"
             @show="show"
             @after-enter="afterEnter"
             @hide="hide"
             @after-leave="afterLeave"
  ></ns-skiner>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { updateThemeColor } from '../../../service/System/Layout/coverPainting';
  import nsSkiner from './components/Skiner';


  export default {
    name: 'Biz-skiner',
    components: { nsSkiner },
    data() {
      return {
        skinerModel: '#0A7AF8',
        colorFormat: 'hax',
      };
    },
    computed: {
      ...mapGetters(['userinfo']),
    },
    methods: {
      changeTheme() {
        console.log('换肤改变', this.skinerModel);

        this.$store.dispatch('updateThemeColor', {
          themeColor: this.skinerModel,
        }).then(_ => {
          updateThemeColor({ themeColor: this.skinerModel });
        });
      },

      show() {
        console.log('换肤打开');
      },
      afterEnter() {
        console.log('换肤打开-动画播放完毕后触发');
      },
      hide() {
        console.log('换肤关闭');
      },
      afterLeave() {
        console.log('换肤关闭-动画播放完毕后触发');
      },
    },
    created() {
      if (this.userinfo.themeColor) {
        this.skinerModel = this.userinfo.themeColor;
      }
    },
  };

</script>
<style rel="stylesheet/scss" lang="scss">

</style>
