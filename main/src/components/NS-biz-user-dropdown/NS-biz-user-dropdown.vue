<!--用户下拉菜单-->
<template>
  <div class="biz-user-dropdown">

    <ns-user-dropdown
      :options="options"
      :avator="avatar"
      :userName="userName"
      :abbreviation="abbreviation"
      trigger="click"
      @click="userDropdownClick"
    >
    </ns-user-dropdown>

    <About :visible="aboutVisible"></About>

    <!--个人设置弹窗-->
    <personal-setting-dialog :visible.sync="safeSettingVisible" v-if="safeSettingVisible"></personal-setting-dialog>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';
  import About from './About/About';
  import personalSettingDialog from './UserSetting/UserSettingDialog';

  export default {
    name: 'biz-user-dropdown',
    components: { About, personalSettingDialog },
    data() {
      return {
        abbreviation: true,//头像为简单模式 - 显示用户姓名的最后一个字

        options: [
          { label: '个人设置', value: 'personalSetting' },
          { label: '关于', value: 'about' },
          { label: '退出登录', value: 'logout' },
        ],
        aboutVisible: {
          visible: false,
        },

        safeSettingVisible: false,
      };
    },
    computed: {
      ...mapGetters(['userName', 'avatar']),
    },
    methods: {
      userDropdownClick(value, index) {
        switch (value) {
          //个人设置
          case  'personalSetting':
            this.safeSettingVisible = true;
            break;
          case  'about':
            this.aboutVisible.visible = true;
            break;
          case  'logout':
            this.logout();
            break;
          default:
            break;
        }
      },
      /**
       * 退出登录
       */
      logout() {
        // login out,empty store and cookie by fun of 'loginout'
        this.$store.dispatch('logOut');
      },
    },
  };

</script>

<style rel="stylesheet/scss" lang="scss">
  .biz-user-dropdown {
    display: inline-block;
  }
</style>
