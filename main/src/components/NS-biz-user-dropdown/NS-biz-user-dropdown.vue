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
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';
  import About from './About/About';


  export default {
    name: 'biz-user-dropdown',
    components: { About },
    data() {
      return {
        abbreviation: true,//头像为简单模式 - 显示用户姓名的最后一个字
        options: [
          { label: '修改密码', value: 'editPassword' },
          { label: '关于', value: 'about' },
          { label: '退出登录', value: 'logout' },
        ],
        aboutVisible: {
          visible: false,
        },
      };
    },
    computed: {
      ...mapGetters(['userName', 'avatar']),
    },
    methods: {
      userDropdownClick(value, index) {
        switch (value) {
          case  'editPassword':
            this.editPassword();
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
      editPassword() {

      },
    },
  };

</script>

<style rel="stylesheet/scss" lang="scss">
  .biz-user-dropdown {
    display: inline-block;
  }
</style>
