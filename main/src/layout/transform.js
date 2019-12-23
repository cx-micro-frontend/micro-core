import { getUrlParam } from '../utils/library/urlhandle';

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
