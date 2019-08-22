const iniView = '/front/login';

const Layout = resolve => require(['../../layout/Layout.vue'], resolve);

export default [
  { path: '/', redirect: iniView },
  // {path: '*', redirect: iniView},

  {
    path: '/404',
    name: '404',
    component: () => import('../../views/Public/404/404'),
    meta: { auth: false },
  },

  {
    path: '/sso/404',
    name: 'sso-404',
    component: () => import('../../views/Public/sso/sso-404'),
    meta: { auth: false },
  },

  //sso - 用户错误
  {
    path: '/sso/usererror',
    name: 'sso-usererror',
    component: () => import('../../views/Public/sso/sso-usererror'),
    meta: { auth: false },
  },

  //sso - 路由权限错误
  {
    path: '/sso/norouterole',
    name: 'sso-norouterole',
    component: () => import('../../views/Public/sso/sso-noRouteRole'),
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
        component: () => import('../../views/Overview/Overview'),
        meta: { auth: true, key: 'overview' },
        name: '主页',
      },
    ],
  },
];
