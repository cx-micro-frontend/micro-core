<template>
  <ns-form class="themeConfigForm" ref="themeConfigForm" :model="themeConfigForm"
           label-width="100px" label-position="left" :show-message="false">

    <ns-form-item label="系统主题色" prop="themeColor">
      <!--换肤功能-->
      <ns-skiner v-model="themeConfigForm.themeColor"
                 color-format="hax"
                 @change-theme="changeTheme($event,'themeColor')"
      ></ns-skiner>
    </ns-form-item>
    <el-divider></el-divider>
    <ns-form-item label="导航条" prop="bannerCover">
      <ns-switch
        v-model="themeConfigForm.bannerCover"
        active-text="通栏显示"
        @change="changeTheme($event,'bannerCover')"
      >
      </ns-switch>

    </ns-form-item>
    <el-divider></el-divider>
    <ns-form-item label="侧边栏主题" prop="sideMenuTheme">
      <ns-radio v-model="themeConfigForm.sideMenuTheme" :options="sideMenuThemeOption"
                @change="changeTheme($event,'sideMenuTheme')"
      ></ns-radio>
    </ns-form-item>

  </ns-form>
</template>

<script>
  import { mapGetters } from 'vuex';
  import nsSkiner from '../../NS-skiner';

  export default {
    name: 'NS-theme-config',
    components: { nsSkiner },
    props: {
      syncRequest: { type: Boolean, default: true },
    },
    data() {
      return {
        themeConfigForm: {
          themeColor: this.themeColor,
          bannerCover: this.bannerCover,
          sideMenuTheme: this.sideMenuTheme,
        },
        sideMenuThemeOption: [
          { label: '深色主题', value: 'dark' },
          { label: '浅色主题', value: 'bright' },
        ],
      };
    },
    computed: {
      ...mapGetters(['themeColor', 'bannerCover', 'sideMenuTheme']),
    },
    methods: {
      changeTheme(value, prop) {
        console.log(`${prop}-改变`, this.themeConfigForm.themeColor);

        console.log(prop);
        console.log(value);

        const query = {
          prop,//当前字段名
          data: value,//值
          syncRequest: this.syncRequest,//是否同步服务端存储
        };

        this.$store.dispatch('updateTheme', query);

        this.$emit('updateTheme', this.themeConfigForm);
      },
    },
    created() {
      //初始化赋值：'themeColor', 'bannerCover', 'sideMenuTheme' 值赋予 themeConfigForm 对象
      Object.keys(this.themeConfigForm).forEach(key => {
        this.themeConfigForm[key] = this[key];
      });


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
