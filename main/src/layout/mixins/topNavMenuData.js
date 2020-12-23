import { mapGetters } from 'vuex';
import { createTopMenu } from '../../layout/components/NS-nav-menu/utils/dataHandle';

/**
 * 顶部模块子系统菜单数据的生成和获取
 */
export default {
  computed: {
    ...mapGetters(['moduleMenu']),

    topNavMenuData() {
      return createTopMenu(this.moduleMenu);
    },
  },
};
