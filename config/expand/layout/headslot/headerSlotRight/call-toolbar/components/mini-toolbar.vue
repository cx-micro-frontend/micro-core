<!-- 右侧小工具条 -->
<template>
  <div class="mini-toolbar">
    <div class="mini-toolbar-left">
      <div v-if="agentstatus === '签出中' || agentstatus === '空闲中' || agentstatus === '忙碌中'" class="img">
        <img src="../assets/phone2.png" width="14px" height="18px" />
      </div>
      <img v-else src="../assets/onTheLine.png" width="100%" />
    </div>
    <div class="mini-toolbar-right" @click="openToolbar">&lt;</div>
  </div>
</template>

<script>
export default {
  name: 'mini-toolbar',
  components: {},
  props: {
    agentstatus: { type: String }, // 座席状态
  },
  data() {
    return {}
  },
  computed: {
  },
  methods: {
    openToolbar() {
      this.$emit('openToolbar')
    },
  },
}
</script>

<style lang="scss" scoped>
.mini-toolbar {
  width: 68px;
  height: 50px;
  position: fixed;
  bottom: 17px;
  right: 0px;
  z-index: 999;
  background: #1e203b;
  border-radius: 25px 0px 0px 25px;
  display: flex;
  padding-left: 8px;
  align-items: center;
  > .mini-toolbar-left {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    text-align: center;
    .img{
      padding: 9px 0;
      background: #404258;
      border-radius: 50%;
      display: flex;
      align-content: center;
      justify-content: center;
    }
  }
  > .mini-toolbar-right {
    width: 20px;
    height: 20px;
    line-height: 18px;
    margin-left: 13px;
    background: #020307;
    border-radius: 50%;
    color: #fff;
    text-align: center;
  }
}
</style>
