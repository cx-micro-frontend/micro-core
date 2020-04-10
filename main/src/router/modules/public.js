import { iniView } from '../../config';

const Layout = resolve => require(['../../layout/Layout.vue'], resolve);

export default [
  { path: '/', redirect: iniView },
  // { path: '*', redirect: iniView },

  // {
  //   path: '/redirect',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/redirect/:path*',
  //       component: () => import('../../../plugins/cache/routes/redirect.vue'),
  //     },
  //   ],
  // },

  {
    path: '/404',
    name: '404',
    component: () => import('../../views/Public/404/404.vue'),
    meta: { auth: false, key: '404', cache: false },
  },

  {
    path: '/error',
    name: 'error',
    component: () => import('../../views/Public/error/error.vue'),
    meta: { auth: false, key: 'error', cache: false },
  },

  {
    path: '/sso/error',
    name: 'sso-error',
    component: () => import('../../views/Public/error/sso-error.vue'),
    meta: { auth: false, key: 'sso-error', cache: false },
  },
];
