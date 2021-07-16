const Layout = resolve => require(['../../layout/Layout'], resolve);
const _import = require(`../_import/_import_${process.env.NODE_ENV}`); //获取组件的方法

export default [
  {
    path: '/system',
    component: Layout,
    name: '系统管理',
    children: [
      {
        path: 'systemRolePermissionV8',
        component: _import(
          'system/views/system/systemRolePermissionV8/systemRolePermissionV8',
          'system'
        ),
        meta: { auth: true, key: 'systemRolePermissionV8', title: '角色与权限v8' },
        name: 'systemRolePermissionV8',
      },
    ],
  },
];

//
// export default [
//   {
//     path: '/system',
//     component: Layout,
//     redirect: '/system/index',
//     name: '系统管理',
//     children: [
//       {
//         path: 'index',
//         component: () =>
//           import('../../../../NS_system/views/system/systemRolePermission/systemRolePermission'),
//         meta: { auth: true, key: 'system-index', title: '设置' },
//         name: '系统管理主页',
//       },
//       {
//         path: 'systemRolePermission',
//         component: () =>
//           import('../../../../NS_system/views/system/systemRolePermission/systemRolePermission'),
//         meta: { auth: true, key: 'roles-and-authorities', title: '设置' },
//         name: '角色与权限',
//       },
//       {
//         path: 'systemOrgEmployee',
//         component: () =>
//           import('../../../../NS_system/views/system/systemOrgEmployee/systemOrgEmployee'),
//         meta: { auth: true, key: 'employeeList', title: '设置' },
//         name: '组织与员工',
//       },
//       {
//         path: 'systemDataDictionary',
//         component: () =>
//           import('../../../../NS_system/views/system/systemDataDictionary/systemDataDictionary'),
//         meta: { auth: true, key: 'data-dictionary', title: '设置' },
//         name: '数据字典',
//       },
//
//       {
//         path: 'designSync',
//         component: () => import('../../../../NS_system/views/system/designSync/designSync'),
//         meta: { auth: true, key: 'design-sync', title: '设置' },
//         name: '数据同步',
//       },
//     ],
//   },
// ];
