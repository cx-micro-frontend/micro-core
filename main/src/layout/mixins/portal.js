export default {
  computed: {
    isPortal() {
      return this.$route.meta.key === 'portal';
    },
  },
};
