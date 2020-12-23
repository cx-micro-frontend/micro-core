/**
 * 是否是portal页
 */
export default {
  computed: {
    isPortal() {
      return this.$route.meta.key === 'portal';
    },
  },
};
