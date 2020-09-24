<template>
  <ns-form class="themeConfigForm" ref="themeConfigForm" :model="themeConfigForm"
           label-width="100px" label-position="left" :show-message="false">

    <ns-form-item label="系统主题色" prop="themeColor">
      <!--换肤功能-->
      <ns-skiner v-model="themeConfigForm.themeColor"
                 color-format="hax"
                 @change-theme="changeTheme"
      ></ns-skiner>
    </ns-form-item>
    <el-divider></el-divider>
    <ns-form-item label="导航条" prop="bannerCover">
      <ns-switch
        v-model="themeConfigForm.bannerCover"
        active-text="通栏显示"
        @change="bannerCoverChange"
      >
      </ns-switch>

    </ns-form-item>
    <el-divider></el-divider>
    <ns-form-item label="侧边栏主题" prop="sideMenuTheme">
      <ns-radio v-model="themeConfigForm.sideMenuTheme" :options="sideMenuThemeOption"></ns-radio>
    </ns-form-item>

  </ns-form>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { updateThemeColor } from '../../../../service/System/Layout/coverPainting';
  import nsSkiner from '../../NS-skiner';

  export default {
    name: 'NS-theme-config',
    components: { nsSkiner },
    data() {
      return {
        themeConfigForm: {
          themeColor: '',
          bannerCover: false,
          sideMenuTheme: 'darkMenu',
        },
        sideMenuThemeOption: [
          { label: '深色主题', value: 'darkMenu' },
          { label: '浅色主题', value: 'bightMenu' },
        ],
      };
    },
    computed: {
      ...mapGetters(['userinfo']),
    },
    methods: {
      changeTheme() {
        console.log('换肤改变', this.themeConfigForm.themeColor);
        const query = {
          themeColor: this.themeConfigForm.themeColor,
        };

        this.$store.dispatch('updateThemeColor', query).then(_ => {
          updateThemeColor(query);
        });
      },

      bannerCoverChange() {

      },
    },
    created() {
      if (this.userinfo.themeColor) {
        this.themeConfigForm.themeColor = this.userinfo.themeColor;
      }
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .themeConfigForm {
    //分割线
    .el-divider.el-divider--horizontal {
      margin: 15px 0;
      background: #F0F2F6;
    }
    .ns-switch {
      ::v-deep .el-switch__label.el-switch__label--right {
        color: #636780;
      }
    }
  }

</style>
