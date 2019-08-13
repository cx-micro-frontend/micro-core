<template>
  <div class="sign-in-box">
    <!--用户名账号登录窗口-->
    <div class="sign-in-left" :style="{'background-image': 'url(' + operatorPicture + ')'}">
      <p class="sign-in-title">{{operatorDesc}}</p>
    </div>
    <div class="sign-in-right">
      <p class="sign-in-title">登录</p>
      <div class="sign-in-main" v-if="!hasMultiEnterprise">
        <ns-form
          :model="loginForm"
          ref="loginForm"
          :rules="rules_login"
          label-width="0px"
          class="demo-dynamic"
          :show-message="false"
        >
          <ns-form-item prop="username">
            <ns-input
              v-model="loginForm.username"
              placeholder="用户名或者手机号"
              width="100%"
              height="40px"
            ></ns-input>
          </ns-form-item>
          <ns-form-item prop="password" class="pwd" :show-message="false">
            <!--记住密码-->
            <ns-input
              type="password"
              autocomplete="on"
              width="100%"
              height="40px"
              v-model="loginForm.password"
              @keyup.native.enter="submitForm('loginForm')"
              placeholder="登录密码"></ns-input>
          </ns-form-item>
          <ns-form-item>
            <ns-button
              style="width: 100%;"
              type="primary"
              :loading="submitLoading"
              @click="submitForm('loginForm')">登录
            </ns-button>
          </ns-form-item>
        </ns-form>
      </div>
      <!--多企业账号，选择登录-->
      <multi-enterprise
        v-if="hasMultiEnterprise"
        :loginForm="loginForm"
        :enterprise="enterprise"
        @back="goPrevStep"
      ></multi-enterprise>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {isMultipleEnterprise} from '../../../service/System/User/login';
  import MultiEnterprise from './multi-enterprise';
  import authLogin from '../authLogin';
  import cryptoPassWord from '../cryptoPassWord';

  export default {
    name: 'sign-in-box',
    mixins: [authLogin, cryptoPassWord],
    components: {MultiEnterprise},
    data() {
      return {
        validateError: '你输入的密码和账户名不匹配,请重新输入',
        hasMultiEnterprise: false,
        loginForm: {
          username: '',
          password: '',
        },
        rules_login: {
          username: [{required: true, message: '请输入用户名', trigger: 'change'}],
          password: [{required: true, message: '请输入密码', trigger: 'change'}],
        },
        enterprise: [],
      };
    },
    computed: {
      ...mapGetters(['operatorPicture', 'operatorDesc']),
    },
    methods: {
      /**
       * 点击登录按钮
       * @param formName
       */
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.checkMultipleEnterprise(); // 检测是否是多企业账号
          } else {
            this.$message({
              message: this.validateError,
              type: 'error',
            });
          }
        });
      },

      /**
       * 检测是否是多企业账号
       */
      checkMultipleEnterprise() {

        this.submitLoading = true;

        let registerInfo = {
          userAccount: this.loginForm.username,
          password: this.getCryptoBybase64,
        };

        //判断是否是多企业账号
        isMultipleEnterprise(registerInfo)
          .then(res => {
            this.enterprise = res.resultData;

            // 多企业账号跳转到选择企业界面
            if (this.enterprise.length > 1) {
              this.hasMultiEnterprise = true;
              this.submitLoading = false;
            }

            // 不是多企业账号，直接登录
            else {
              const loginParams = {
                username: this.loginForm.username,
                password: this.getCryptoBybase64,
              };
              this.authLogin(loginParams);
            }
          })
          .catch(err => {
            this.submitLoading = false;
            console.log('判断是否是多企业账号失败', err);
          });
      },

      // 返回上一页
      goPrevStep() {
        this.hasMultiEnterprise = !this.hasMultiEnterprise;
      },
    },
  };
</script>
