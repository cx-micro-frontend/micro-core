const iniView = '/front/login';

const Layout = resolve => require(['../../layout/Layout.vue'], resolve);

export default [
  {path: '/', redirect: iniView},
  // {path: '*', redirect: iniView},

  {
    path: '/404',
    name: '404',
    component: () => import('../../views/Public/404/404'),
    meta: {auth: false},
  },

  {
    path: '/sso/404',
    name: 'sso-404',
    component: () => import('../../views/Public/404/sso-404'),
    meta: {auth: false},
  },

  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    name: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('../../views/dashboard/dashboard'),
        meta: {auth: true, key: 'dashboard'},
        name: '主页',
      },
    ],
  },
];
