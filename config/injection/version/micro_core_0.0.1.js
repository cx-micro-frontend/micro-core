module.exports = [
  //业户
  {
    module: '业户',
    path: 'http://192.168.1.89:3000/gaocangxiong/micro_check-house.git',
    repositorie: 'owner',
    isOwner: false,
    disabled: false,
  },

  //o2o - community
  {
    module: '阳光城公告',
    path: 'http://192.168.1.89:3000/gaocangxiong/micro_o2o-sunshineCity.git',
    repositorie: 'community',
    isOwner: false,
    disabled: false,
  },

  //o2o - admin
  {
    module: '客户审核',
    path: 'http://192.168.1.47:3000/O2O_frontend/micro_o2o_admin.git',
    repositorie: 'customer', //o2o-admin
    isOwner: false,
    disabled: false,
  },
  {
    module: '客户审核',
    path: 'http://192.168.1.47:3000/O2O_frontend/micro_o2o_admin.git',
    repositorie: 'repairMessage', //o2o-admin
    isOwner: false,
    disabled: false,
  },
  {
    module: '频道管理',
    path: 'http://192.168.1.47:3000/O2O_frontend/micro_o2o_admin.git',
    repositorie: 'message', //o2o-admin
    isOwner: false,
    disabled: false,
  },
  {
    module: '系统运维',
    path: 'http://192.168.1.47:3000/O2O_frontend/micro_o2o_admin.git',
    repositorie: 'maintenance', //o2o-admin
    isOwner: false,
    disabled: false,
  },

  //checkhouse
  {
    module: '细部检查',
    path: 'http://192.168.1.89:3000/gaocangxiong/micro_check-house.git',
    repositorie: 'detailcheck',
    isOwner: false,
    disabled: false,
  },
  {
    module: '交付',
    path: 'http://192.168.1.89:3000/gaocangxiong/micro_check-house.git',
    repositorie: 'deilver',
    isOwner: false,
    disabled: false,
  },
  {
    module: '集中交付',
    path: 'http://192.168.1.89:3000/gaocangxiong/micro_check-house.git',
    repositorie: 'focusdeilver',
    isOwner: false,
    disabled: false,
  },
  {
    module: '验房参数',
    path: 'http://192.168.1.89:3000/gaocangxiong/micro_check-house.git',
    repositorie: 'checkhousepara',
    isOwner: false,
    disabled: false,
  },
  {
    module: '交验房报表',
    path: 'http://192.168.1.89:3000/gaocangxiong/micro_check-house.git',
    repositorie: 'checkhousereport',
    isOwner: false,
    disabled: false,
  },
  //无需在菜单栏上显示
  {
    module: '细部检查报表',
    path: 'http://192.168.1.89:3000/gaocangxiong/micro_check-house.git',
    repositorie: 'detailreport',
    isOwner: false,
    disabled: false,
  },
  //无需在菜单栏上显示
  {
    module: '预交付报表',
    path: 'http://192.168.1.89:3000/gaocangxiong/micro_check-house.git',
    repositorie: 'deliverreport',
    isOwner: false,
    disabled: false,
  },
];
