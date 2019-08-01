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
  import { updateThemeColor } from '../../../service/System/User/login';

  export default {
    name: 'Biz-skiner',
    data() {
      return {
        skinerModel: '#e70012',
        colorFormat: 'hax',
      };
    },
    computed: {
      ...mapGetters(['themeColor']),
    },
    methods: {
      changeTheme() {
        console.log('换肤改变', this.skinerModel);
        updateThemeColor({ themeColor: this.skinerModel }).then(() => {
          let userInfo = this.$store.state.User.userinfo;
          this.$store.dispatch('updateLoginData', userInfo);
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
      if (this.themeColor) {
        this.skinerModel = this.themeColor;
      }
    },
  };

</script>
<style rel="stylesheet/scss" lang="scss">

</style>
