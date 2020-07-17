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
    iconfont: () => import('./iconfont/index.js'),
  },

  //布局
  layout: {
    //布局厂字框架 - 头部自定义插槽（本项目中为项目选择)
    header: {
      leftSlot: headerSlotLeft,
      rightSlot: headerSlotRight,
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

    // /**
    //  * init jump after login
    //  * 登录后初始跳转
    //  * type - 1、function 2、Object
    //  * return { name: 'xx',fullpath: 'xx'}
    //  * default - null
    //  * @param parame:
    //  *     - sideMenu - 原始菜单栏数据
    //  - moduleMenu - 所有子系统模块导航菜单数据（只在 multiple application mode - 多系统门户模式 中存在)
    //  - moduleId - 当前激活系统模块id（只在 multiple application mode - 多系统门户模式 中存在)
    //  * @returns {{name: string, fullpath: string}}
    //  */
    // initRouteByAuth: parame => {
    //   console.log('initRouteByAuth-initRouteByAuth');
    //   console.log(parame);
    //   return {
    //     name: 'overview',
    //     fullpath: '/overview',
    //   };
    // },

    //也可以为对象格式
    // initRouteByAuth: { name: 'overview', fullpath: '/overview' },

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
              meta: { title: '导航', auth: true, key: 'guide', cache: false },
              name: 'guide',
            },
          ],
        },
        {
          path: '',
          component: Layout,
          redirect: '/overview',
          name: 'overview',
          children: [
            {
              path: 'overview',
              component: () => import(`@ROOT/config/expand/views/overview/overview.vue`),
              meta: { title: '概览', auth: true, key: 'overview', cache: false, moduleId: 'other' },
              name: 'overview',
            },
          ],
        },
        {
          path: '',
          component: Layout,
          children: [
            {
              path: 'cacheDemo',
              component: () => import(`@ROOT/config/expand/views/cache/cacheDemo.vue`),
              meta: {
                title: '缓存示例',
                auth: true,
                key: 'cacheDemo',
                cache: true,
                moduleId: 'other',
              },
              name: 'cacheDemo',
            },
          ],
        },
      ];
    },
  },

  //挂载（依赖/示例下全局工具方法等)
  mount: null,
};
