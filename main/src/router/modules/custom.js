import expand from '../../../expand';
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
              component: () =>
                import(
                  process.env.NODE_ENV === 'development'
                    ? '../../../../injection/repositories/NS_portal/views/portal/portal.vue'
                    : '@ROOT/NS_portal/views/portal/portal.vue'
                ),
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
