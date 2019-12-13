<template>
  <div class="clear">
    <div class="fl" style="color: #fff;padding-left: 24px;font-size: 16px;">
      {{operatorName}}
      <!--<theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" @change="themeChange"/>-->
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import ThemePicker from '../components/ThemePicker/index';
  import { updateThemeColor } from '../service/System/Layout/coverPainting';

  export default {
    name: 'header-custom',
    components: { ThemePicker },
    data() {
      return {};
    },
    computed: {
      ...mapGetters(['operatorName']),
    },
    methods: {
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
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
