import { mapGetters } from 'vuex';
import { createTopMenu } from '../../layout/components/NS-nav-menu/utils/dataHandle';

export default {
  computed: {
    ...mapGetters(['moduleMenu']),

    topNavMenuData() {
      return createTopMenu(this.moduleMenu);
    },
  },
};
