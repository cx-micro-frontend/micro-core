<!--锁屏组件-->
<template>
  <span class="lockscreen">
    <ns-icon-svg icon-class="suo"
                 @click="lockScreen"
    ></ns-icon-svg>
      <ns-dialog
        class="lock-screen__dialog"
        type="simple"
        size="mini"
        auto-height
        width="360px"
        :visible.sync="isLocked"
      >
        <div class="lock-screen__container">
          <div class="user-avatar line-block">
            <img :src="userAvatar" alt="">
          </div>
           <h1>{{userinfo.userName}}</h1>
          <div class="line-block line-block-transition">

            <transition name="custom-classes-transition" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
              <ns-form class="login-form-block" ref="reLoginForm" :model="passwordForm" :rules="rules" :show-message="false" v-show="!hasMultiEnterprise">
                <ns-form-item prop="password">
                  <ns-input type="password" v-model.trim="passwordForm.password" placeholder="请输入密码" suffixIcon="denglu" @iconClick="loginClick('reLoginForm')"></ns-input>
                </ns-form-item>
              </ns-form>
            </transition>

            <!--多企业账号，选择登录-->
            <transition name="custom-classes-transition" enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
              <div class="enterprise-block" v-show="hasMultiEnterprise">
                <multiple-enterprise-list :list="enterprise" @select-handle="selectHandle">
                </multiple-enterprise-list>
              </div>
            </transition>
          </div>
          <div class="line-block">
             <span class="lock-screen__tips" v-show="!hasMultiEnterprise">输入密码验证登录, 或点击 <a @click="backIniView">返回</a> 登录页</span>
             <span class="lock-screen__tips" v-show="hasMultiEnterprise">点击 <a @click="hasMultiEnterprise = false ">上一步</a> 返回，或点击 <a @click="backIniView">返回</a> 登录页</span>
          </div>
        </div>
      </ns-dialog>
  </span>

</template>

<script>
  import { mapGetters } from 'vuex';
  import { backIniView } from '../../../utils/behavior/index';
  import cryptoPassWord from '../../../mixins/Login/cryptoPassWord';
  import authLogin from '../../../mixins/Login/authLogin';

  import multipleEnterpriseList from '../../../components/NS-biz-multiple-enterprise-list/NS-biz-multiple-enterprise-list';

  export default {
    name: 'NS-biz-lockscreen',
    mixins: [cryptoPassWord, authLogin],
    components: { multipleEnterpriseList },
    data() {
      return {
        enterprise: [],//多企业列表
        passwordForm: {
          password: '',
        },
        //表单规则
        rules: {
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        },

      };
    },
    computed: {
      ...mapGetters(['userinfo', 'isLocked']),
      userAvatar: function() {
        return this.userinfo.avatar || require('../../../assets/img/empty/empty-avatar.png');
      },
      cryptoPassWord() {
        return this.getCryptoBybase64(this.passwordForm.password) || '';
      },


    },
    methods: {
      backIniView,

      /**
       * 锁屏登录
       * @param formName
       */
      loginClick(formName) {
        this.$refs[formName].validate(async valid => {
          if (valid) {

            // 获取多集团信息 / 检测是否是多企业账号
            this.enterprise = await this.checkByLogin({
              userAccount: this.userinfo.userAccount,
              password: this.cryptoPassWord,
            });

            //单集团情况下 => 关闭锁屏弹窗即可
            if (this.enterprise.length === 1) {
              this.reLoginSuccess();
            }
          } else {
            this.$message({
              message: '你输入的密码和账户名不匹配,请重新输入',
              type: 'error',
            });
          }
        });
      },

      /**
       * 选择企业登录
       * @param item
       * @param i
       * @returns {Promise<void>}
       */
      async selectHandle(item, i) {
        await this.multipleAuthLogin({
          userAccount: this.userinfo.userAccount,
          password: this.cryptoPassWord,
          enterpriseId: item.enterpriseId,
        });
        this.reLoginSuccess();
      },

      /**
       * 登录成功后- 操作
       */
      reLoginSuccess() {
        this.$refs['reLoginForm'].resetFields();
        this.hasMultiEnterprise = false;
        this.enterprise = [];
        this.$store.dispatch('unLockScreen');
      },

      /**
       * 锁屏
       */
      lockScreen() {
        this.$store.dispatch('lockScreen');
      },
    },
  };

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "NS-biz-lockscreen";
</style>
