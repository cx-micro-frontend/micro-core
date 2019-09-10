const iniView = '/front/login';

const Layout = resolve => require(['../../layout/Layout.vue'], resolve);

export default [
  { path: '/', redirect: iniView },
  // {path: '*', redirect: iniView},

  {
    path: '/404',
    name: '404',
    component: () => import('../../views/Public/404/404.vue'),
    meta: { auth: false },
  },

  {
    path: '/error',
    name: 'error',
    component: () => import('../../views/Public/error/error.vue'),
    meta: { auth: false },
  },

  {
    path: '/sso/error',
    name: 'sso-error',
    component: () => import('../../views/Public/error/sso-error.vue'),
    meta: { auth: false },
  },

  {
    path: '',
    component: Layout,
    redirect: '/overview',
    name: 'overview',
    children: [
      {
        path: 'overview',
        component: () => import('../../views/Overview/Overview.vue'),
        meta: { auth: true, key: 'overview' },
        name: '主页',
      },
    ],
  },
];
