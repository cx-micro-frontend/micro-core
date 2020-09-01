<!--登录 - 第三方账号登录 - 选择区域-->
<template>
  <div class="sign-in__third-party" v-if="list && list.length">
    <el-divider>第三方账号登录</el-divider>
    <ul class="third-party_module">
      <li v-for="(item, index) in list" :key="index" @click="thirdPartyLogin(item,index)">
        <img :src="require(`../assets/third-party-login__${item}@2x.png`)">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'third-party-login',
    data() {
      return {
        list: [
          'wx', 'wx',
        ],
      };
    },
    methods: {
      /**
       *
       * @param item
       * @param index
       */
      thirdPartyLogin(item, index) {
        console.log('第三方登录');
        console.log(item, index);
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
