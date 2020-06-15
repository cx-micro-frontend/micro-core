import expand from '../../../expand';
const _import = require(`../_import/_import_${process.env.NODE_ENV}`); //获取组件的方法
const Layout = resolve => require(['../../layout/Layout.vue'], resolve);

const customRoute = [
  ...expand.route.customRoute(Layout),
  ...(expand.integrationMode === 'mam'
    ? [
        {
          path: '',
          component: Layout,
          redirect: '/portal',
          children: [
            {
              path: 'portal',
              component: _import('portal'),

              // component: () =>
              //   import(
              //     !isOwner
              //       ? '../../../../injection/repositories/NS_portal/views/portal/portal/portal.vue'
              //       : '@ROOT/NS_portal/views/portal/portal/portal.vue'
              //   ),
              meta: { auth: true, key: 'portal' },
              name: 'portal',
            },
          ],
        },
      ]
    : []),

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
    path: '/devTool',
    name: 'devTool',
    component: () => import('../../views/DevTool/DevTool.vue'),
    meta: { auth: false, key: 'devTool', cache: false },
  },
];

export default customRoute;
