<!--头部 - 右侧插槽 - 消息信息提示-->
<template>
 <span class="message-tips">
    <el-badge :value="num" :max="99">
      <ns-icon-svg class="ns-header__text message-tips-icon" icon-class="tixing" @click="tipsClick"/>
    </el-badge>
  </span>
</template>

<script>
  import { getUnreadCount } from '../service/message-tips';
  import { socketApi } from '../socket/socketApi';
  import { mapGetters } from 'vuex'
  export default {
    name: 'message-tips',

    computed: {
      ...mapGetters(['userinfo']),
    },

    data(){
      return{
        num: 0
      }
    },


    methods: {
      /**
       * 初始化WebSocket
       * */
      initWebSocket() {
        this.$connect(`${socketApi}unread/${this.userinfo.userId}`);
        this.$socket.onopen = this.getSocketUnreadCount;
        this.$socket.onmessage = this.getSocketUnreadCount;
      },

      getSocketUnreadCount(e){
        console.log('getSocketUnreadCount -> e', e.data);
        if (e.data) {
          this.num = e.data;
        }
      },

      /**
       * 获取未读数
       */
      getUnreadCount() {
        getUnreadCount()
          .then(res => {
            this.num = res.resultData;
            console.log('messageCount:' + res.resultData);
          })
          .catch(err => {
            console.log(err);
          });
      },


      /**
       * 跳转
       */
      tipsClick() {
        this.$router.push({path: '/notice/noticeManagement'});
      },
    },


    mounted() {
      this.getUnreadCount();
      this.initWebSocket();
    },

    beforeDestroy() {
      this.$disconnect();
    },
  }
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
