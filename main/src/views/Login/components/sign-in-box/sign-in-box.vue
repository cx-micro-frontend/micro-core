<!--登录 - 盒子 - 区域-->
<template>
  <div class='sign-in-box' :style="{'background-image': 'url(' + operatorInfo.operatorPicture + ')'}">
    <!--<img src="./operatorPictureAll.png" alt="" style="width: 100%;height: 100%">-->
    <!--用户名账号登录窗口-->
    <div class='sign-in-right'>

      <!--app 下载二维码-->
      <div class='sign-in-qrcode'>
        <ns-qrcode-download></ns-qrcode-download>
      </div>

      <!--登录主体内容部分-->
      <div class='sign-in-main'>
        <transition name='custom-classes-transition' enter-active-class='animated slideInLeft'
                    leave-active-class='animated slideOutLeft'>

          <div class='sign-in-main_container' v-if='!hasMultiEnterprise'>
            <ns-form class='loginForm' ref='loginForm' :model='loginForm' :rules='rules_login'
                     label-width='0px' :show-message='false'>

              <ns-form-item prop='userAccount'>
                <ns-input v-model='loginForm.userAccount' placeholder='请输入用户名' width='100%' height='40px'></ns-input>
              </ns-form-item>

              <ns-form-item prop='password' class='pwd' :show-message='false'>
                <ns-input type='password' autocomplete='on' v-model='loginForm.password' placeholder='请输入密码'
                          width='100%' height='40px' @keyup.native.enter="submitForm('loginForm')">
                </ns-input>
              </ns-form-item>
              <ns-form-item prop='captcha' class='captcha' :show-message='false' v-if='isShowCaptcha'>
                <captcha @syncCaptchasInfo='syncCaptchasInfo'></captcha>
              </ns-form-item>

              <ns-form-item>
                <ns-button type='primary' :loading='submitLoading' @click="submitForm('loginForm')">登录</ns-button>
              </ns-form-item>
            </ns-form>
            <!--第三方账号登录-->
            <third-party-login class='thirdPartyLogin'></third-party-login>
          </div>

        </transition>

        <!--多企业账号，选择登录-->
        <transition name='custom-classes-transition' enter-active-class='animated slideInRight'
                    leave-active-class='animated slideOutRight'>
          <div class='sign-in-main_container enterprise-block' v-if='hasMultiEnterprise'>
            <multiple-enterprise-list :list='enterprise' @select-handle='selectHandle'></multiple-enterprise-list>
            <ns-button @click='hasMultiEnterprise = false '>返回上一页</ns-button>
          </div>
        </transition>


      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import cryptoPassWord from '../../../../mixins/Login/cryptoPassWord';

import multipleEnterpriseList
  from '../../../../components/NS-biz-multiple-enterprise-list/NS-biz-multiple-enterprise-list';
import thirdPartyLogin from '../third-party-login/third-party-login';
import captcha from '../captcha/captcha';
import { jumpToTnitPage } from '../../../../utils/behavior/index';

export default {
  name: 'sign-in-box',
  mixins: [cryptoPassWord],
  components: { multipleEnterpriseList, thirdPartyLogin, captcha },
  data() {
    return {
      submitLoading: false,//请求加载状态
      enterprise: [],//多企业列表
      hasMultiEnterprise: false, //是否为多企业标识
      validateError: '你输入的密码和账户名不匹配,请重新输入',
      loginForm: {
        userAccount: '',//账号
        password: '',//密码
        captcha: '',//验证码
      },
      captchasInfo: {},//验证码对象信息（验证码验证登录时，需合并进登录入参中）
      rules_login: {
        userAccount: [{ required: true, message: '请输入用户名', trigger: 'change' }],
        password: [{ required: true, message: '请输入密码', trigger: 'change' }],
      },
    };
  },
  computed: {
    ...mapGetters(['operatorInfo', 'loginInfo']),
    cryptoPassWord() {
      return this.getCryptoBybase64(this.loginForm.password) || '';
    },
    isShowCaptcha() {
      return this.loginInfo.currentLoginErrorTimes >= this.loginInfo.loginErrorTimes;
    },
  },

  methods: {
    /**
     * 点击登录按钮
     * @param formName
     */
    submitForm(formName) {
      //登录表单校验
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.submitLoading = true;

          //登录表单入参
          let loginQuery;

          loginQuery = {
            userAccount: this.loginForm.userAccount,
            password: this.cryptoPassWord,
            source: this.loginInfo.source,//登录验证标识
          };

          //证码校验时，需合（验证码输入信息和uuid）到登录入参中）
          if (this.isShowCaptcha) {
            loginQuery = Object.assign(loginQuery, this.captchasInfo);
          }


          // 获取多集团信息 / 检测是否是多企业账号
          this.$store.dispatch('isMultipleEnterprise', loginQuery).then(async enterprise => {

              this.hasMultiEnterprise = enterprise.length > 1;

              //判断是否为多企业，多企业账号跳转到选择企业界面
              if (enterprise.length > 1) {
                this.submitLoading = false;//关闭loading
              }
              //为单企业账号，
              else if (enterprise.length === 1) {

                //登录表单入参  - 后续优化删除
                const loginQuery2 = {
                  userAccount: this.loginForm.userAccount,
                  username: this.loginForm.userAccount,//这里后面要删除的，做个兼容，都写上
                  password: this.cryptoPassWord,
                  source: this.loginInfo.source,//登录验证标识
                };

                //直接登录
                const userinfo = await this.$store.dispatch('oauthlogin', loginQuery2);
                if (userinfo) {
                  await this.$store.dispatch('generate_nav_menu');//获取菜单数据
                  jumpToTnitPage();//跳转初始化界面
                }
                this.submitLoading = false;//关闭loading
              } else {

              }
            },
          ).catch(err => {
            this.submitLoading = false;//关闭loading
          });
        } else {
          this.submitLoading = false;
          //登录表单校验报错 message
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
      this.submitLoading = true;//打开loading

      const loginParams = {
        userAccount: this.loginForm.userAccount,
        password: this.cryptoPassWord,
        enterpriseId: item.enterpriseId,
        source: this.loginInfo.source,//登录验证标识
      };

      const callResolve = await this.$store.dispatch('multipleEnterpriseLogin', loginParams);

      //抛出 成功回调数据 存在，即：登录成功的情况下，跳转路由
      if (callResolve) {
        await this.$store.dispatch('generate_nav_menu');//获取菜单数据
        this.submitLoading = false;//关闭loading
        jumpToTnitPage();
      }

    },


    /**
     * 同步更新父子组件通信信息（登录验证码入参）
     * @param info
     */
    syncCaptchasInfo(info) {
      this.captchasInfo = info;
    },
  },
};
</script>

<style rel='stylesheet/scss' lang='scss' scoped>

//内容区域
.sign-in-box {
  position: absolute;

  width: 1000px;
  height: 560px;

  top: 50%;
  left: 50%;

  background: #ffffff no-repeat;
  background-size: 100% 100%;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);

  border-radius: 8px;
  overflow: hidden;

  transform: translate(-50%, -50%);

  //右边（ 登录输入 + 部分文字 )
  .sign-in-right {
    width: 56%;
    height: 100%;
    margin-left: auto;

    .sign-in-qrcode {
      position: absolute;
      top: 4px;
      right: 4px;
    }

    //登录输入部分
    .sign-in-main {
      position: relative;
      height: 100%;
      margin: 0 30px;
      padding-top: 180px;
      box-sizing: border-box;
      overflow: hidden;

      //容器区域
      .sign-in-main_container {
        position: absolute;
        max-width: 400px;
        width: 70%;
        padding-left: 15%;
        padding-right: 15%;


        //第三方登录
        .thirdPartyLogin {
          margin-top: 80px;
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

      //表单部分
      .ns-form-item {
        margin-bottom: 16px !important;
      }

      //按钮
      .ns-button {
        font-size: 14px;
        font-weight: 500;
        height: 44px;
      }
    }
  }
}
</style>


