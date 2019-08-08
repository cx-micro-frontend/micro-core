import { mapGetters } from 'vuex';
import { getUrlParam } from '../utils/library/urlhandle';

export default {
  computed: {
    ...mapGetters(['isInIframe']),
  },
  created() {
    const isInIframe = getUrlParam('isShowFrame') === 'false';
    this.$store.dispatch('setFrameMode', isInIframe);

  },
};
