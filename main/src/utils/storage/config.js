export default {
  sign_user_info: {
    name: '用户信息',
    storagekey: 'user_info',
    storageMethod: 'localStorage',
    storageLife: '',
    partition: true,
  },
  sign_user_theme: {
    name: '用户主题',
    storagekey: 'user_theme',
    storageMethod: 'localStorage',
    storageLife: '',
    partition: true,
  },

  sign_user_behavior: {
    name: '用户操作存储信息',
    storagekey: 'user_behavior',
    storageMethod: 'localStorage',
    storageLife: '',
    partition: true,
  },

  sign_operator_info: {
    name: '操作员信息（图片+标题)',
    storagekey: 'operator_info',
    storageMethod: 'localStorage',
    storageLife: '',
    partition: false,
  },

  sign_nav: {
    name: '导航菜单',
    storagekey: 'nav',
    storageMethod: 'localStorage',
    storageLife: '',
    partition: true,
  },

  sign_page_info: {
    name: '页面信息',
    storagekey: 'pi',
    storageMethod: 'localStorage',
    storageLife: '',
    partition: true,
  },

  sign_async_router: {
    name: '动态路由',
    storagekey: 'async_router',
    storageMethod: 'localStorage',
    storageLife: '',
    partition: true,
  },

  sign_visited_pages: {
    name: '历史访问页面信息',
    storagekey: 'visited_pages',
    storageMethod: 'localStorage',
    storageLife: '',
    partition: true,
  },

  sign_precinct: {
    name: '项目信息（头部左上角项目切换选择)',
    storagekey: 'precinct',
    storageMethod: 'localStorage',
    storageLife: '',
    partition: true,
  },

  sign_error_sign: {
    name: '路由钩子错误跳转标识',
    storagekey: 'error_sign',
    storageMethod: 'sessionStorage',
    storageLife: '',
    partition: false,
  },
  sign_isLocked: {
    name: '锁屏状态标识',
    storagekey: 'isLocked',
    storageMethod: 'localStorage',
    storageLife: '',
    partition: true,
  },
};
