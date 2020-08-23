<!--头部 - 右侧插槽 - 消息信息提示-->
<template>
 <span class="message-tips">
    <el-badge :value="value" :max="99">
      <ns-icon-svg class="message-tips-icon" icon-class="tixing" @click="tipsClick"/>
    </el-badge>
  </span>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {getMessageCount} from './service/message-tips';
  import {socketApi} from './socket/socketApi';
  import './socket/socketLoad'

  export default {
    name: 'message-tips',
    data() {
      return {
        value: 0,
      };
    },
    computed: {
      ...mapGetters(['userinfo']),
    },
    methods: {
      tipsClick() {
        this.$router.push({path: '/messageManagement/schedule'});
      },
      wsGetMessageCount() {
        getMessageCount({source: 1, type: 1})
          .then(res => {
            this.value = res.resultData;
            console.log('messageCount:' + res.resultData);
          })
          .catch(err => {
            console.log(err);
          });
      },
      initWebSocket() {
        this.$connect(`${socketApi}${this.userinfo.userId}`);
        //send() onclose onerror
        this.$socket.onopen = this.wsGetMessageCount;
        this.$socket.onmessage = this.wsGetMessageCount;
      },
    },
    mounted() {
      this.initWebSocket();
    },
    beforeDestroy() {
      this.$disconnect();
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .message-tips {
    .el-badge {
      margin-top: 0;
      margin-right: 10px;
      vertical-align: baseline;

      //铃铛
      .message-tips-icon.ns-icon-svg {
        width: 20px;
        height: 20px;
        vertical-align: -0.4em;
        cursor: pointer;
      }

      //红点
      .el-badge__content.is-fixed {
        top: 14px;
        right: 18px;
      }
    }

  }
</style>
