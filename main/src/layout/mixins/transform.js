import { getUrlParam } from '../../utils/library/urlhandle';

/**
 * 集成嵌入模式下：
 * 需要转换布局样式
 */
export default {
  created() {
    const isInIframe = getUrlParam('isShowFrame') === 'false';

    this.$store.dispatch('setFrameMode', isInIframe);

    if (isInIframe) {
      document.getElementById('app').style.minHeight = 'auto';
      document.getElementById('app').style.minWidth = 'auto';
    }
  },
};
