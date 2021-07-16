import expand from '../../../expand';

// const Layout = resolve => require(['../../layout/Layout'], resolve);
export default [
  { path: '/', redirect: expand.route.redirect['init_view'] },

  //error to add in when use async route, beacuse first jump is miss route
  // { path: '*', redirect: iniView },

  {
    path: '/404',
    name: '404',
    component: () => import('../../views/Public/error/error'),
    meta: { auth: false, key: '404', cache: false, type: 'special' },
  },

  {
    path: '/error',
    name: 'error',
    component: () => import('../../views/Public/error/error'),
    meta: { auth: false, key: 'error', cache: false, type: 'special' },
  },

  {
    path: '/sso/error',
    name: 'sso-error',
    component: () => import('../../views/Public/error/sso-error'),
    meta: { auth: false, key: 'sso-error', cache: false, type: 'special' },
  },

  // {
  //   path: '/redirect',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/redirect/:path*',
  //       component: () => import('../../../plugins/cache/routes/redirect.js'),
  //     },
  //   ],
  // },
];
