import Front from '../../views/Front/index.vue'

export default [

  // 前台登录
  {
    path: '/front',
    component: Front,
    redirect: '/front/login',
    name: '前台',
    children: [
      {
        path: 'login',
        component: () => import('../../views/Login/login'),
        name: '登录',
        meta: {auth: false, type: 'Front'},
      },
      {
        path: 'login-station',
        component: () => import('../../views/Login/loginStation'),
        name: '登录中转',
        meta: {auth: false, type: 'login-station'},
      },
    ]
  },

];

