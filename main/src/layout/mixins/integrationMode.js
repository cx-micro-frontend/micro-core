/**
 * mixins - 系统集成模式
 * single application mode - 单系统模式
 * multiple application mode - 多系统门户模式
 */
export default {
  computed: {
    isPortalRoute() {
      return this.$route.name === 'portal';
    },

    isMultipleApplication() {
      if (!this.topNavMenuData) return false;
      if (this.topNavMenuData.length === 1 && this.isPortalRoute) {
        return true;
      }
      return this.topNavMenuData.length > 1;
    },
  },
};
