import expand from '../../../expand';

const Layout = resolve => require(['../../layout/Layout.vue'], resolve);

export default [
  ...expand.route.customRoute(Layout),

  // {
  //   path: '',
  //   component: Layout,
  //   redirect: '/overview',
  //   name: 'overview',
  //   children: [
  //     {
  //       path: 'overview',
  //       component: () => import('../../views/Overview/Overview.vue'),
  //       meta: { auth: true, key: 'overview' },
  //       name: '主页',
  //     },
  //   ],
  // },

  {
    path: '/testdemo',
    name: 'testdemo',
    component: () => import('../../views/TestDemo/TestDemo.vue'),
    meta: { auth: false },
  },
];
