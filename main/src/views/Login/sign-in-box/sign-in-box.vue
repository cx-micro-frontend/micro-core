<template>
  <div class="sign-in-box">
    <!--用户名账号登录窗口-->
    <div class="sign-in-left" :style="{'background-image': 'url(' + operatorPicture + ')'}">
      <p class="sign-in-title">{{operatorDesc}}</p>
    </div>
    <div class="sign-in-right">
      <p class="sign-in-title">登录</p>
      <!--登录主体内容部分-->
      <div class="sign-in-main">
        <transition name="custom-classes-transition" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
          <ns-form class="loginForm" ref="loginForm" :model="loginForm" :rules="rules_login"
                   label-width="0px" :show-message="false" v-if="!hasMultiEnterprise">

            <ns-form-item prop="username">
              <ns-input v-model="loginForm.username" placeholder="用户名或者手机号" width="100%" height="40px"></ns-input>
            </ns-form-item>

            <ns-form-item prop="password" class="pwd" :show-message="false">
              <ns-input type="password" autocomplete="on" v-model="loginForm.password" placeholder="登录密码"
                        width="100%" height="40px" @keyup.native.enter="submitForm('loginForm')">
              </ns-input>
            </ns-form-item>

            <ns-form-item>
              <ns-button type="primary" :loading="submitLoading" @click="submitForm('loginForm')">登录</ns-button>
            </ns-form-item>
          </ns-form>
        </transition>

        <!--多企业账号，选择登录-->
        <transition name="custom-classes-transition" enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
          <div class="enterprise-block" v-if="hasMultiEnterprise">

            <multiple-enterprise-list :list="enterprise" @select-handle="selectHandle"></multiple-enterprise-list>
            <ns-button @click="hasMultiEnterprise = false ">返回上一页</ns-button>

          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import authLogin from '../../../mixins/Login/authLogin';
  import cryptoPassWord from '../../../mixins/Login/cryptoPassWord';

  import multipleEnterpriseList from '../../../components/NS-biz-multiple-enterprise-list/NS-biz-multiple-enterprise-list';
  import { jumpToTnitPage } from '../../../utils/behavior';

  export default {
    name: 'sign-in-box',
    mixins: [authLogin, cryptoPassWord],
    components: { multipleEnterpriseList },
    data() {
      return {
        submitLoading: false,//请求加载状态
        enterprise: [],//多企业列表
        validateError: '你输入的密码和账户名不匹配,请重新输入',
        loginForm: {
          username: '',
          password: '',
        },
        rules_login: {
          username: [{ required: true, message: '请输入用户名', trigger: 'change' }],
          password: [{ required: true, message: '请输入密码', trigger: 'change' }],
        },
      };
    },
    computed: {
      ...mapGetters(['operatorPicture', 'operatorDesc']),
      cryptoPassWord() {
        return this.getCryptoBybase64(this.loginForm.password) || '';
      },
    },
    methods: {
      /**
       * 点击登录按钮
       * @param formName
       */
      submitForm(formName) {
        this.$refs[formName].validate(async valid => {
          if (valid) {
            this.submitLoading = true;

            console.log('kaishi');

            // 获取多集团信息 / 检测是否是多企业账号
            this.enterprise = await this.checkByLogin({
              userAccount: this.loginForm.username,
              password: this.cryptoPassWord,
            });

            //判断是否为多企业，多企业账号跳转到选择企业界面
            console.log(888888888888888);
            this.submitLoading = false;

            //非多集团情况下，登陆后直接跳转
            if( this.enterprise.length === 1){
              jumpToTnitPage();
            }

          } else {
            this.$message({
              message: this.validateError,
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
        const loginParams = {
          userAccount: this.loginForm.username,
          password: this.cryptoPassWord,
          enterpriseId: item.enterpriseId,
        };
        await this.multipleAuthLogin(loginParams);
        jumpToTnitPage();
      }
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .sign-in-main {
    position: relative;
    height: 250px;
    overflow: hidden;
    .loginForm, .enterprise-block {
      position: absolute;
      max-width: 400px;
      width: 70%;
      padding-left: 15%;
      padding-right: 15%;
    }

    .loginForm {
      .el-button {
        margin-top: 15px;
      }
    }
    .el-button {
      width: 100%;
    }
  }

</style>


