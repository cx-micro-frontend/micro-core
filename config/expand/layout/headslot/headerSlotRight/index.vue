<!--头部 - 右侧插槽-->
<template>
  <div class="headerSoltRight">
    <message-tips></message-tips>

    <notification-message :messageData="messageData"></notification-message>
    <!-- 伯恩-话务工具条 -->
    <CallToolbar v-if="callToolbarVisivle" :agentData="agentData"></CallToolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { socketApi } from './socket/socketApi';
import './socket/socketLoad';
import messageTips from './message-tips/message-tips';
import notificationMessage from './notification-message/notification-message.js';
import CallToolbar from './CallToolbar/CallToolbar'
import { getAgentByUserId } from './CallToolbar/service.js';

export default {
  name: 'headerSlotRight',

  components: {
    messageTips,
    notificationMessage,
    CallToolbar
  },

  data() {
    return {
      messageData: {},
      callToolbarVisivle: false,
      agentData: {}
    };
  },

  computed: {
    ...mapGetters(['userinfo', 'bizExpandData']),
  },

  watch: {
    bizExpandData: {
      handler(data) {
        if (data.CallingCenterToolBar && data.CallingCenterToolBar.value === '1') { // 开启工具条
          this.getAgentByUserId()
        }
      },
      immediate: true,
    },
  },
  methods: {
    initWebSocket() {
      this.$connect(`${socketApi}${this.userinfo.userId}`);
      this.$socket.onopen = this.wsGetInfo;
      this.$socket.onmessage = this.wsGetInfo;
    },


    wsGetInfo(e) {
      //获取提醒消息
      console.log('wsGetInfo -> e', e.data);
      if (e.data) {
        this.messageData = JSON.parse(e.data);
      }
    },
    // 获取坐席基本信息
    getAgentByUserId(){
      getAgentByUserId().then(res => {
        if (res.resultData !== null) { // 当前是座席
          this.callToolbarVisivle = true
          this.agentData = res.resultData
        }
      }).catch(err => {
        console.log(err);
      });
    }
  },

  mounted() {
    // this.initWebSocket();
  },

  beforeDestroy() {
    this.$disconnect();
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
