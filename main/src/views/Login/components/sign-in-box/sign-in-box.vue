<!--登录 - 盒子 - 区域-->
<template>
  <div class="sign-in-box" :style="{'background-image': 'url(' + operatorInfo.operatorPicture + ')'}">
    <!--<img src="./operatorPictureAll.png" alt="" style="width: 100%;height: 100%">-->
    <!--用户名账号登录窗口-->
    <div class="sign-in-right">

      <!--app 下载二维码-->
      <QRCodeDownLoade></QRCodeDownLoade>

      <!--登录主体内容部分-->
      <div class="sign-in-main">
        <transition name="custom-classes-transition" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">

          <div class="sign-in-main_container" v-if="!hasMultiEnterprise">
            <ns-form class="loginForm" ref="loginForm" :model="loginForm" :rules="rules_login"
                     label-width="0px" :show-message="false">

              <ns-form-item prop="username">
                <ns-input v-model="loginForm.username" placeholder="请输入用户名" width="100%" height="40px"></ns-input>
              </ns-form-item>

              <ns-form-item prop="password" class="pwd" :show-message="false">
                <ns-input type="password" autocomplete="on" v-model="loginForm.password" placeholder="请输入密码"
                          width="100%" height="40px" @keyup.native.enter="submitForm('loginForm')">
                </ns-input>
              </ns-form-item>

              <ns-form-item>
                <ns-button type="primary" :loading="submitLoading" @click="submitForm('loginForm')">登录</ns-button>
              </ns-form-item>
            </ns-form>
            <!--第三方账号登录-->
            <third-party-login class="thirdPartyLogin"></third-party-login>
          </div>

        </transition>

        <!--多企业账号，选择登录-->
        <transition name="custom-classes-transition" enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
          <div class="sign-in-main_container enterprise-block" v-if="hasMultiEnterprise">
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
  import authLogin from '../../../../mixins/Login/authLogin';
  import cryptoPassWord from '../../../../mixins/Login/cryptoPassWord';

  import multipleEnterpriseList from '../../../../components/NS-biz-multiple-enterprise-list/NS-biz-multiple-enterprise-list';
  import thirdPartyLogin from '../third-party-login/third-party-login';
  import QRCodeDownLoade from '../QRCodeDownLoade/QRCodeDownLoade';


  import { jumpToTnitPage } from '../../../../utils/behavior/index';

  export default {
    name: 'sign-in-box',
    mixins: [authLogin, cryptoPassWord],
    components: { multipleEnterpriseList, thirdPartyLogin, QRCodeDownLoade },
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
      ...mapGetters(['operatorInfo', 'logininfo']),
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

            // 获取多集团信息 / 检测是否是多企业账号
            const callResolve = await this.checkByLogin({
              userAccount: this.loginForm.username,
              password: this.cryptoPassWord,
              source: this.logininfo.source,//登录验证标识
            });

            const { enterprise, userinfo } = callResolve;

            this.enterprise = enterprise;

            //判断是否为多企业，多企业账号跳转到选择企业界面
            this.submitLoading = false;

            //非多集团情况下，登陆后直接跳转
            if (userinfo &&
              (this.enterprise && this.enterprise.length === 1)
            ) {
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
          source: this.logininfo.source,//登录验证标识
        };

        const callResolve = await this.multipleAuthLogin(loginParams);


        //抛出 成功回调数据 存在，即：登录成功的情况下，跳转路由
        if (callResolve) {
          jumpToTnitPage();
        }

      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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


