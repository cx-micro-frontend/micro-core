import { mapGetters } from 'vuex';
import { getUrlParam } from '../utils/index';

export default {
  computed: {
    ...mapGetters(['isInIframe']),
  },
  created() {
    const isInIframe = getUrlParam('isShowFrame') === 'false';
    this.$store.dispatch('setFrameMode', isInIframe);

  },
};
