<!--登录 - 第三方账号登录 - 选择区域-->
<template>
  <div class="sign-in__third-party" v-if="thirdPartyLoginList && thirdPartyLoginList.length">
    <el-divider>第三方账号登录</el-divider>
    <ul class="third-party_module">
      <li v-for="(item, index) in thirdPartyLoginList"
          :key="index"
          @click="thirdPartyLogin(item,index)">
        <img :src="require(`../../assets/third-party-login__${item.source}@2x.png`)" :alt="item.source" v-if="item.source">
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import qs from 'querystring';

  export default {
    name: 'third-party-login',
    data() {
      return {};
    },
    computed: {
      ...mapGetters(['operatorInfo', 'loginInfo']),
      thirdPartyLoginList() {
        return this.loginInfo.loginSettingList || [];
      },
    },
    methods: {
      /**
       * 企微定向跳转信息处理
       * @param info
       * @returns {string}
       */
      codeRedirectFactory(info) {

        let redirect_uri = location.origin + location.pathname + '#/front/loginTransfer-wx';

        let codeUrl = 'https://open.work.weixin.qq.com/wwopen/sso/3rd_qrConnect';

        let query = {
          redirect_uri,
          appid: info.appid,
          usertype: 'member',
        };

        console.log('跳转的地址信息为:');
        console.log(query);
        console.log(codeUrl + '?' + qs.stringify(query));

        return codeUrl + '?' + qs.stringify(query);

      },

      /**
       * 第三方登录
       * @param item
       * @param index
       */
      thirdPartyLogin(item, index) {
        console.log('第三方登录');
        console.log(item, index);

        const _url = this.codeRedirectFactory(item);

        console.log(_url);

        document.location.href = _url;

        // document.location.href='https://open.work.weixin.qq.com/wwopen/sso/3rd_qrConnect?appid=ww290506382537cb9a&redirect_uri=http%3A%2F%2Fnew-see.oicp.io%3A25280%2Fv10%2Fneap-test%2F%23%2Ffront%2FloginTransfer-wx&usertype=member'

      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .sign-in__third-party {
    //分割线
    .el-divider--horizontal {
      margin: 18px 0;
      background-color: #EFEFEF;
      .el-divider__text {
        font-size: 12px;
        font-weight: 400;
        color: #999;
      }
    }
    //第三方登录图形区域
    ul.third-party_module {
      text-align: center;
      margin: 0 auto;
      li {
        display: inline-block;
        width: 48px;
        height: 48px;
        padding: 8px;
        cursor: pointer;
        box-sizing: border-box;
        &:hover {
          background-color: #F1F1F1;
          img {
            transform: scale(1.1, 1.1);
          }
        }
        img {
          width: 32px;
          height: 32px;
          transition: all 300ms ease-in;
        }
      }
    }
  }
</style>
