import headerSlotLeft from './layout/headslot/headerSlotLeft';
import headerSlotRight from './layout/headslot/headerSlotRight';
import sideMenuSlot from './layout/side-menu/side-menu-slot';

export default {
  /**
   * sam - single application mode - 单系统模式
   * mam - multiple application mode - 多系统门户模式
   */
  integrationMode: 'mam',

  //全局样式主题的覆盖引入（业务个性化)，包括图标等一些元素
  UI: {
    theme: () => import('./theme'),
    iconfont: () => import('./iconfont-old/index.js'),
  },

  //布局
  layout: {
    //布局厂字框架 - 头部自定义插槽（本项目中为项目选择)
    header: {
      leftSlot: headerSlotLeft,
      rightSlot: headerSlotRight,
    },

    //tab 页标签
    tabs: {
      type: 'trapezoid', //normal, trapezoid
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
    cacheExclude: [],

    //自定义路由地址 - 适用于一些特殊界面（概览 / 导航 /任务 等)
    customRoute: Layout => {
      return [
        {
          path: '',
          component: Layout,
          redirect: '/guide',
          name: 'guide',
          children: [
            {
              path: 'guide',
              component: () => import(`@ROOT/config/expand/views/guide/guide.vue`),
              meta: { title: '导航', auth: true, key: 'guide', cache: false, type: 'normal' },
              name: 'guide',
            },
          ],
        },
        {
          path: '',
          component: Layout,
          children: [
            {
              path: 'cacheDemo',
              component: () => import(`@ROOT/config/expand/views/cache/cacheDemo2.vue`),
              meta: {
                title: '缓存示例',
                auth: true,
                key: 'cacheDemo',
                cache: true,
                moduleId: 'FIN',
                type: 'normal',
              },
              name: 'cacheDemo',
            },
          ],
        },
        {
          path: '',
          component: Layout,
          children: [
            {
              path: 'cacheDemo3',
              component: () => import(`@ROOT/config/expand/views/cache/cacheDemo3.vue`),
              meta: {
                title: '缓存示例',
                auth: true,
                key: 'cacheDemo3',
                cache: true,
                moduleId: 'FIN',
                type: 'normal',
              },
              name: 'cacheDemo3',
            },
          ],
        },
      ];
    },
  },

  //挂载（依赖/示例下全局工具方法等)
  mount: null,
};
