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
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'biz-user-dropdown',
    data() {
      return {
        abbreviation: true,//头像为简单模式 - 显示用户姓名的最后一个字
        options: [
          {label: '修改密码', value: 'editPassword'},
          {label: '退出登录', value: 'logout'},
        ],
      };
    },
    computed: {
      ...mapGetters(['userName', 'avatar']),
    },
    methods: {
      userDropdownClick(value, index) {
        if (value === 'editPassword') {
          this.editPassword();
        }
        else if (value === 'logout') {
          this.logout();
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
