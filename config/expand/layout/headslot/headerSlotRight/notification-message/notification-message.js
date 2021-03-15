import { setMessageRead, setMessageSetting } from './service/service';

import postDeskTop from './mixins/post-desktop';
import { Notification } from 'element-ui';
import './styles/box.scss';
import { socketApi } from '../socket/socketApi';
import { mapGetters } from 'vuex';
export default {
  name: 'NsNotificationMessage',
  mixins: [postDeskTop],

  data() {
    return {
      count: '', // 自减少倒计时
      timer: null,
      messageData: {},
    };
  },

  computed: {
    ...mapGetters(['userinfo']),
  },

  render(h) {
    return null;
  },

  watch: {
    'messageData.msgId': {
      handler(val) {
        if (val) {
          this.reloadMessageBox();
          this.count = this.messageData.stickDuration ? this.messageData.stickDuration * 1000 : 0;
          // 只有计时时间大于0秒的时候 才可以确认是否是手动关闭
          if (this.count > 0) {
            this.clearTimer();
            this.timer = setInterval(() => {
              this.count = this.count - 1000;
            }, 1000);
          }
        }
      },
      deep: true,
    },
    count: {
      handler(val) {
        if (val < 0) {
          this.clearTimer();
        }
      },
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

    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    /**
     * @description: 点击实例
     */
    click() {
      const bizParameters = JSON.parse(this.messageData.bizParameters);
      // 工单业务逻辑
      if (this.messageData.url.includes('http')) {
        window.open(this.messageData.url);
      } else {
        this.$nextTick(() => {
          this.$router.replace({
            // path: '/NEAP_redirect/' + this.messageData.url,
            name: 'redirect',
            params: {
              redirectPath: this.messageData.url,
            },
            query: bizParameters,
          });
        });
      }

      // 设置为已读
      setMessageRead({
        msgId: this.messageData.msgId,
      }).then(res => {});
    },

    /**
     * @description: 关闭回调
     */
    close() {
      if (this.count > 0) {
        // 手动关闭不代表已读
      } else {
        // 自动关闭也不代表已读
      }
    },
    /**
     * @description: 关闭Notification
     */
    closeNotify() {
      Notification.closeAll();
    },

    /**
     * @description: 重置实例
     */
    reloadMessageBox() {
      this.closeNotify();
      this.$nextTick(() => {
        this.$notify({
          title: '',
          dangerouslyUseHTMLString: true,
          customClass: 'biz-notification__customClass',
          message: `<i class="el-icon-s-comment biz-notification__icon"></i>
                    <div class="biz-notification__group" class="is-with-icon">
                    <div class="biz-notification__title">
                        <h2>${this.messageData.title}</h2>
                        <article></article>
                    </div>
                    <div class="biz-notification__content">
                        <p>${this.messageData.content}</p>
                    </div>
                    </div>`,
          duration: this.messageData.stickDuration ? this.messageData.stickDuration * 1000 : 0,
          position: 'bottom-right',
          onClick: this.click,
          onClose: this.close,
        });
        this.pushMessage(this.messageData);
      });
    },
  },

  mounted() {
    this.initWebSocket();
    // 添加销毁的钩子函数
    this.$once('hook:beforeDestroy', () => {
      this.$disconnect();
      this.closeNotify();
      this.clearTimer();
    });
  },
};
