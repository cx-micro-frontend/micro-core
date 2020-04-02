import headslot from './headslot/headslot';

export default {
  //全局样式主题的覆盖引入（业务个性化)，包括图标等一些元素
  UI: {
    theme: () => import('./theme'),
    iconfont: () => import('./iconfont/iconfont.js'),
  },

  //布局
  layout: {
    //布局厂字框架 - 头部自定义插槽（本项目中为项目选择)
    headslot: headslot,
  },

  //路由相关
  route: {
    cache: true,
    //自定义路由地址 - 适用于一些特殊界面（概览 / 导航 /任务 等)
    customRoute: Layout => {
      return [
        {
          path: '',
          component: Layout,
          redirect: '/overview',
          name: 'overview',
          children: [
            {
              path: 'overview',
              component: () => import(`@ROOT/config/expand/views/overview/overview.vue`),
              meta: { title: '概览', auth: true, key: 'overview', cache: false },
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
              meta: { title: '缓存示例1', auth: true, key: 'cacheDemo', cache: true },
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
