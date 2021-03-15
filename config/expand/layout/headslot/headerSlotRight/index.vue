<!--头部 - 右侧插槽-->
<template>
  <div class="headerSoltRight">
    <!-- 小铃铛-永生工单-周霞 -->
    <message-tips v-if="messageRemindVisivle"></message-tips>
    <!-- 工单-消息推送/桌面推送-曾迪 -->
    <notification-message v-if="messagePushVisivle"></notification-message>
    <!-- 伯恩-话务工具条-何雨晴 -->
    <call-toolbar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import './socket/socketLoad';
import messageTips from './message-tips/message-tips';
import notificationMessage from './notification-message/notification-message.js';
import callToolbar from './call-toolbar/call-toolbar';
import { getYunweiJs } from './service/yunwei.js';

export default {
  name: 'headerSlotRight',

  components: {
    messageTips,
    notificationMessage,
    callToolbar,
  },

  data() {
    return {
      messageRemindVisivle: false, // 消息提醒 显隐
      messagePushVisivle: false, // 消息推送 显隐
    };
  },

  computed: {
    ...mapGetters(['bizExpandData']),
  },

  watch: {
    bizExpandData: {
      handler(data) {
        if (data.IntelligentOperation && data.IntelligentOperation.value === '1') {
          // 开启智能运维
          this.getYunweiJs();
        }
        if (data.MessageReminder && data.MessageReminder.value === '1') {
          // 开启消息提醒
          this.messageRemindVisivle = true;
        }
        if (data.MessagePush && data.MessagePush.value === '1') {
          // 开启消息推送
          this.messagePushVisivle = true;
        }
      },
      immediate: true,
    },
  },
  methods: {
    getYunweiJs() {
      getYunweiJs().then(res => {
        if (JSON.stringify(res.resultData) !== '{}') {
          // 已配置唯一识别码
          this.createScript(res.resultData);
        }
      });
    },
    // 动态创建script
    createScript(data) {
      let script = document.createElement('script');
      script.defer = 'true';
      script.id = 'yunweiScript';
      script.src = `${data.ywjs}?id=${data.id}&name=${encodeURIComponent(data.name)}&memo=${data.memo}&deptid=${data.deptid}&deptname=${encodeURIComponent(data.deptname)}&mobile=${data.mobile}&gender=${data.gender}`;
      document.body.appendChild(script);
    },
    // 移除运维引入的的 script 和 div 标签
    deleteYunweiHtml() {
      const yunweiDiv = document.getElementById('xfcbb');
      const yunweiScript = document.getElementById('yunweiScript');
      if (yunweiDiv) {
        yunweiDiv.parentNode.removeChild(yunweiDiv);
      }
      if (yunweiScript) {
        yunweiScript.parentNode.removeChild(yunweiScript);
      }
    },
  },

  beforeDestroy() {
    this.deleteYunweiHtml();
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
// 防止智能运维遮挡工具条
#xfc {
  bottom: 100px !important;
}
</style>
