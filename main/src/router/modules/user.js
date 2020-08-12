import Front from '../../views/Front/index.vue';

export default [
  // 前台登录
  {
    path: '/front',
    component: Front,
    redirect: '/front/login',
    name: 'front',
    children: [
      {
        path: 'login',
        component: () => import('../../views/Login/login.vue'),
        name: 'login',
        meta: { title: '登录页', auth: false, key: 'login', cache: false, type: 'special' },
      },
      {
        path: 'login-station',
        component: () => import('../../views/Login/loginStation.vue'),
        name: 'login-station',
        meta: {
          title: '登录中转页',
          auth: false,
          key: 'login-station',
          cache: false,
          type: 'special',
        },
      },
    ],
  },
];
