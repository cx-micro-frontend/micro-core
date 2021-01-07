import Push from 'push.js'
export default {
  methods: {
    /**
     * @description: 桌面推送
     */
    pushMessage(message) {
      const bizParameters = JSON.parse(message.bizParameters)
      Push.create(message.title, {
        body: message.content,
        requireInteraction: true,
        //icon: '/icon.png',
        link: `${location.origin}${location.pathname}#${message.url}?servicesNo=${bizParameters.servicesNo}`,
        // tag:标记通知，后面关闭通知可以通过该标记来识别是要关闭哪条通知,
        // timeout:通知自动关闭的时间，毫秒,
        // onClick():回调，当点击通知界面的时候触发,
        // onClose():回调，当要关闭通知的时候触发,
        // onError():回调，当通知抛出错误的时候触发,
        // onShow():回调，当显示通知的时候触发,
        timeout: message.stickDuration * 1000, //通知自动关闭的时间，毫秒
      })
    },
  },
  created() {
    // 获取推送权限
    Push.Permission.request();
  },
};
