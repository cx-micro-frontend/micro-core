<template>
  <div class="sign-in-main">
    <div class="enterprise">
      <div class="enterprise-height enterprise-border color666">选择企业点击登录</div>
      <div class="enterprise-list">
        <div
          v-for="(item, i) in enterprise"
          :key="i"
          class="enterprise-height enterprise-border cursor-pointer clear"
          @click="handleSelect(item)"
        >
          <span class="fl">{{ item.enterpriseName }}</span>
          <i class="el-icon-arrow-right fr"></i>
        </div>
      </div>
      <el-button style="width: 100%" @click="goPrevStep">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
  import authLogin from '../authLogin';
  import cryptoPassWord from '../cryptoPassWord';

  export default {
    name: 'multiple-enterprise',
    mixins: [authLogin, cryptoPassWord],
    props: {
      loginForm: {
        type: Object, default() {
          return {};
        },
      },
      enterprise: {
        type: Array, default() {
          return [];
        },
      },
    },
    methods: {
      /**
       * 选择企业登录
       * @param item
       */
      handleSelect(item) {
        const loginParams = {
          userAccount: this.loginForm.username,
          password: this.getCryptoBybase64,
          enterpriseId: item.enterpriseId,
        };
        this.multipleAuthLogin(loginParams);
      },
      // 返回上一页
      goPrevStep() {
        this.$emit('back');
      },
    },
  };
</script>

<style scoped lang="scss">
.enterprise {
  .enterprise-height {
    height: 42px;
    line-height: 42px;
    box-sizing: border-box;
  }
  .enterprise-border {
    border-bottom: 1px solid #dcdfe6;
  }
  .color666 {
    color: #666;
  }
  .enterprise-list {
    height: 168px;
    overflow: auto;
    font-size: 16px;
    .el-icon-arrow-right {
      padding: 13px 10px;
      color: #0a7af8;
      font-weight: bold;
    }
  }
}
</style>
