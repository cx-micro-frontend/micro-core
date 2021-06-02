import headerSlotLeft from './layout/headslot/headerSlotLeft/index';
import sideMenuSlot from './layout/side-menu/side-menu-slot';
import headerSlotRight from './layout/headslot/headerSlotRight';

export default {
  /**
   * sam - single application mode - 单系统模式
   * mam - multiple application mode - 多系统门户模式
   */
  integrationMode: 'mam',

  //全局样式主题的覆盖引入（业务个性化)，包括图标等一些元素
  UI: {
    // theme: () => import('./theme'),
    theme: null,
    iconfont: () => import('./iconfont/mixin/index.js'),
  },
  layout: {
    //布局厂字框架 - 头部自定义插槽（本项目中为项目选择)
    header: {
      leftSlot: headerSlotLeft,
      rightSlot: headerSlotRight,
    },

    //tab 页标签
    tabs: {
      type: 'normal', //normal, trapezoid
    },

    //side menu - 侧边栏
    sidebar: {
      /**
       * slot component for side menu
       * For example, side sliding dialog
       */
      slotComponent: sideMenuSlot,
    },
  },

  //路由相关
  route: {
    cache: true,
    cacheExclude: [
      // 'carManagement', 'customerManagement', 'houseManagement', 'housekeeperGrid', 'housekeeperManagement'
    ],

    //自定义路由地址 - 适用于一些特殊界面（单点登录 / 概览 / 导航 /任务 等)
    customRoute: Layout => {
      return [
        //单点登录
        {
          path: '/front/loginTransfer-wx',
          component: () => import(`@ROOT/config/expand/views/sso/loginTransfer-wx.vue`),
          name: 'loginTransfer-wx',
          meta: { title: '企业微信登录中转页', auth: false, key: 'loginTransfer-wx' },
        },
      ];
    },
  },
};
