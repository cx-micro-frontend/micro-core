<!-- 呼叫弹屏 -->
<template>
  <div class="popup">
    <div class="popup-img">
      <div class="popup-img-black">
        <img src="../assets/phone.png"
           width="33px"
           height="41px">
      </div>
      <div class="popup-phone">{{ phoneNumber }}</div>
    </div>
    <div class="popup-status">呼叫中...</div>
    <div class="popup-btns">
      <ns-button class="popup-btn"
                 @click="ClearCall"
                 :disabled="agentstatus === '有来电'">挂断</ns-button>
      <ns-button v-if="agentstatus === '有来电'"
                 class="popup-btn"
                 style="background: #4ac80c"
                 @click="AnswerCall">
        接听
      </ns-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'call-popup',
  components: {},
  props: {
    agentstatus: { type: String },
    phoneNumber: { type: String },
  },
  data() {
    return {}
  },
  methods: {
    openToolbar() {
      this.$emit('openToolbar')
    },
    ClearCall() {
      this.$emit('ClearCall')
    },
    AnswerCall() {
      this.$emit('AnswerCall')
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.popup {
  width: 343px;
  height: 361px;
  background: #1a1c38;
  color: #fff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.21);
  border-radius: 6px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  text-align: center;
  > .popup-img {
    width: 241px;
    height: 220px;
    padding-top: 5px;
    margin: auto;
    background: url(../assets/bg.png) no-repeat center center;
    background-size: 241px 220px;
    > .popup-img-black{
      width: 85px;
      height: 85px;
      line-height: 112px;
      background: #000;
      border-radius: 50%;
      margin: 50px auto;
    }
    > .popup-phone {
      font-size: 28px;
    }
  }
  > .popup-status {
    font-size: 14px;
    color: #969696;
  }
  > .popup-btns {
    margin-top: 10px;
    font-size: 14px;
    > .popup-btn {
      width: 115px;
      height: 32px;
      background: #ff4700;
      border: none;
      color: #fff;
      border-radius: 16px;
      display: inline-block;
    }
  }
}
::v-deep .el-input__inner {
  background: #020307;
  border: none;
  color: #b8becc;
  font-size: 12px;
}
</style>
