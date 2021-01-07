import { setMessageRead, setMessageSetting } from './service/service';

import postDeskTop from './mixins/post-desktop'
import { Notification } from 'element-ui';
import './styles/box.scss';

// 消息来源
const sourceMap = {
  0: '未知',
  1: '新闻',
  2: '邮件',
  3: '工单',
  4: '工程',
  5: '仓储',
};

export default {
  name: 'NsNotificationMessage',
  mixins: [postDeskTop],
  props: {
    messageData: Object,
  },
  data() {
    return {
      count: '', // 自减少倒计时
      timer: null,
    };
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
  beforeDestroy() {
    this.closeNotify();
    this.clearTimer();
  },
};
