import expand from '../../../expand';

const modules = require('@ROOT/config/injection/index').modules;
const _import = require(`../_import/_import_${process.env.NODE_ENV}`); //获取组件的方法
const Layout = resolve => require(['../../layout/Layout.vue'], resolve);

const customRoute = [
  ...expand.route.customRoute(Layout),
  ...(modules.some(m => m.repositorie === 'portal')
    ? [
        {
          path: '',
          component: Layout,
          children: [
            {
              path: 'portal',
              component: _import('/NS_portal/views/portal/portal.vue', 'portal'),

              // component: () =>
              //   import(
              //     !isOwner
              //       ? '../../../../injection/repositories/NS_portal/views/portal/portal/portal.vue'
              //       : '@ROOT/NS_portal/views/portal/portal/portal.vue'
              //   ),

              meta: { title: '门户主页', auth: true, key: 'portal' },
              name: 'portal',
            },
          ],
        },
      ]
    : []),

  {
    path: '/devTool',
    name: 'devTool',
    component: () => import('../../views/DevTool/DevTool.vue'),
    meta: { auth: false, key: 'devTool', cache: false },
  },
];

export default customRoute;
