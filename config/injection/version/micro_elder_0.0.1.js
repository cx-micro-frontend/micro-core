module.exports = [
  {
    module: '养老业务组件',
    // path: 'http://username:password@new-see.oicp.io:20001/elder/micro_elder_components',//下载不了这个依赖请开启这个
    path: 'http://47.96.187.51:3001/elder/micro_elder_components',
    repositorie: 'elder_components',
    isOwner: false,
    disabled: false,
  },

  {
    module: '数据中心',
    repositorie: 'dataCenter',
    path: 'http://47.96.187.51:3001/elder/micro_elder.git',
    branch: 'master',
    isOwner: false,
    disabled: false,
  },

  {
    module: '入住管理',
    repositorie: 'checkInManager',
    path: 'http://47.96.187.51:3001/elder/micro_elder.git',
    branch: 'master',
    isOwner: false,
    disabled: false,
  },

  {
    module: '入住审核',
    repositorie: 'checkInParent',
    path: 'http://47.96.187.51:3001/elder/micro_elder.git',
    branch: 'master',
    isOwner: false,
    disabled: false,
  },

  {
    module: '在院管理',
    repositorie: 'hospitalized',
    path: 'http://47.96.187.51:3001/elder/micro_elder.git',
    branch: 'master',
    isOwner: false,
    disabled: false,
  },

  {
    module: '退住管理',
    repositorie: 'backlive',
    path: 'http://47.96.187.51:3001/elder/micro_elder.git',
    branch: 'master',
    isOwner: false,
    disabled: false,
  },
  {
    module: '接待管理',
    repositorie: 'hospitalityManagement',
    path: 'http://47.96.187.51:3001/elder/micro_elder.git',
    branch: 'master',
    isOwner: false,
    disabled: false,
  },
  {
    module: '机构设置',
    repositorie: 'businessConfig',
    path: 'http://47.96.187.51:3001/elder/micro_elder.git',
    branch: 'master',
    isOwner: false,
    disabled: false,
  },
];
