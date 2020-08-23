<!--永生中转跳转页面-->
<template>
  <div class="login-transfer">
    <!--<h1 style="color:#fff">loading......</h1>-->
    <img src="./loading.gif" alt="" />
  </div>
</template>
<script>
  import utils from '@NEAP/utils';
  import { getArmLoginPath } from './service/loginTransfer-arm';

  export default {
    name: 'loginTransfer-arm',
    data() {
      return {
        token: '',
        redirectUrl: '', //永生应收中台登录路径
        isDefault: 1,
      };
    },
    methods: {
      initHandle() {
        /**
         * 判断当前进入状态是否为：
         * 一、登出状态（非首次进入，即登录过后登出) => 需要清除永生token（服务端处理)
         * 二、首次进入（清除永生登录token后再次登录)
         *    => 请求获取永生登录界面地址并跳转
         *    => 输入用户名和密码登录并跳转回中转页
         *    => 在中转页判断url是否带有token
         *    => 如带有，则进行v10 这边单点登录
         *    => 登录成功后，进入系统
         *
         */

        const token = utils.getUrlParam('token');
        if (token) {
          console.log('token 存在，直接调用 /soss/sso 登录');
          this.transferLogin();
        } else {
          // siamLogout()
          console.log('token 不存在，获取永生应收中台并前往登录');
          this.getArmLoginPath();
        }

        // const intoState = utils.getUrlParam('intoState');
        // if (intoState === 'logout') {
        //   // window.open('https://sso-uat.ysservice.com.cn/siam/logout?service=http://arm-test.ysservice.com.cn', 'top');
        //   window.location.href = 'https://sso-uat.ysservice.com.cn/siam/logout?service=http://arm-test.ysservice.com.cn';
        // }
        // else {
        //
        // }
      },
      /**
       * 获取永生应收中台 - 登录页路径连接
       */
      getArmLoginPath() {
        getArmLoginPath()
          .then(res => {
            console.log('获取永生应收中台-登录页路径链接 如下：');
            console.log(res);
            this.redirectUrl = res.resultData;
            window.location.href = this.redirectUrl;
          })
          .catch(response => {});
      },
      /**
       * 永生应收中台 - 单点登录 - ssoLogin
       */
      transferLogin() {
        /**
         * ========================================
         * 以下为单点登录 v10 => saas   v8 => saas
         * 切勿随意变动，否则会影响接入
         * 更改可以增加条件判断，只增不减不改
         * ========================================
         */
          //获取单点token请求登录类型：srcSys:  saas / v8
        const _srcSys = utils.getUrlParam('srcSys') || null;
        const _token = utils.getUrlParam('token');

        //定义入参
        const query = {
          token: _token,
          srcSys: _srcSys,
        };

        //单点请求登录
        this.$store
          .dispatch('ssoLogin', query)
          .then(() => {
            // 登录成功后跳转页面
            this.jumpToPage();
          })
          .catch(error => {
            this.$message.error('单点登录错误，请重新返回登录');

            this.$confirm('单点登录错误，请重新返回登录', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
            }).then(() => {
              /**
               * 单点失败后 = > 继续回到初始页面（中转页，即重新跳转至当前页)
               * 转而获取永生应收中台登录页路径连接，并跳转，进行重新登录
               */
              this.$router.push({ path: '/front/loginTransfer-arm' });
            });
          });
      },

      /**
       * 登录成功后跳转页面
       */
      jumpToPage() {
        //请求获取菜单栏数据
        this.$store.dispatch('generateSideBar').then(({ initRoute }) => {
          //获取地址栏中 referRoute 跳转路径
          const referRoute = utils.getUrlParam('referRoute') || null;

          //请求获取操作员信息
          this.$store.dispatch('getCoverPaintingSimple', { isDefault: this.isDefault }).then(_ => {
            //选择最终的跳转路径
            const initPath = referRoute ? referRoute : initRoute.fullpath;

            console.log('单点登录 - referRoute参数：', referRoute);
            console.log('单点登录 - 菜单栏第一个路由地址（排除特殊界面，如导航)：', initRoute);
            console.log('单点登录 - 最终初始化跳转路径：', initPath);

            //如果 referRoute 存在则依此为跳转路径，否则取自菜单栏第一个, initRoute.fullpath
            this.$router.push({ path: initPath });
          });
        });
      },
    },
    created() {
      this.initHandle();
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .login-transfer {
    position: relative;
    text-align: center;
    h1 {
      font-weight: 400;
      color: #1f2f3d;
      margin: 30px 0 5px -100px;
    }
    img {
      position: absolute;
      width: 100px;
      height: 100px;
      margin-left: -100px;
    }
  }
</style>





