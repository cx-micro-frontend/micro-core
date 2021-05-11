<!--登录验证码-->
<template>
  <div class='captcha_container'>
    <p class='captcha_part'>验证码</p>
    <ns-input class='captcha_part' v-model='captchaValue' width='80px' height='40px'
              @change='syncInfo'></ns-input>
    <img class='captcha_part' src='https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
         @click='getCaptchas'>
    <p class='captcha_reload' @click='getCaptchas'>看不清，换一张</p>
  </div>
</template>

<script>
import { uuid } from '../../../../utils/library/uuid';
import { getCaptchas } from '../../../../service/System/User/login';

export default {
  name: 'captcha',
  data() {
    return {
      uuid: '',//uuid 账号唯一标识
      captchaValue: '',//输入的图片验证码
    };
  },
  methods: {
    /**
     * 获取登录图片验证码
     */
    getCaptchas() {
      this.uuid = uuid();
      getCaptchas(this.uuid).then(res => {
        console.log(111111);
        console.log(111111);
        console.log(res);
        console.log(111111);
        this.syncInfo();//同步更新父子组件通信信息（登录验证码入参）
      });
    },
    /**
     * 同步更新父子组件通信信息（登录验证码入参）
     */
    syncInfo() {
      this.$emit('syncCaptchasInfo', {
        uuid: this.uuid,//uuid 账号唯一标识
        captcha: this.captchaValue,//输入的图片验证码
      });
    },
  },
  created() {
    this.getCaptchas();
  },
};
</script>

<style rel='stylesheet/scss' lang='scss' scoped>
@import "../../../../style/var";
//验证码
.captcha_container {

  display: inline-flex;
  width: 100%;
  height: 40px;
  line-height: 40px;

  .captcha_part {
    margin-right: 10px;
  }

  p {
    display: inline-block;
    line-height: inherit;

    &.captcha_reload {
      color: $--color-primary;
      cursor: pointer;
    }

  }

  img {
    height: 100%;
  }

}
</style>
