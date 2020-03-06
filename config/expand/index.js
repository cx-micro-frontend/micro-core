import headslot from './headslot';

export default {
  //头部自定义插槽
  headslot: headslot,

  //自定义路由地址
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
            component: () => import(`@ROOT/config/expand/overview.vue`),
            meta: { auth: true, key: 'overview' },
            name: '概览',
          },
        ],
      },
    ];
  },
};
