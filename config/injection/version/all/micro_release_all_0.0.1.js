/**
 * 所有模块配置
 * 目前部分业务模块取自 0225版本
 * @type {*[]}
 */
module.exports = [
  /**
   * === 设计中心 - 门户 ===
   * 目前有具体的分支发布要求
   */
  //设计中心 - 门户页
  {
    module: '门户页',
    repositorie: 'portal',
    path: 'http://47.96.187.51:3001/NW-frontend/micro_portal.git',
    branch: 'V1.0.20210325.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  // 设计中心 - 门户管理
  {
    module: '门户管理',
    repositorie: 'portalManagement',
    path: 'http://47.96.187.51:3001/NW-frontend/micro_design_center.git',
    branch: 'v1.0.20210315.NEAP.BIDESIGN.RC',
    isOwner: false,
    disabled: false,
  },

  /**
   * === 设计中心 - 管理驾驶舱 ===
   * 目前有具体的分支发布要求
   */
  {
    module: '驾驶舱管理',
    repositorie: 'datashowManagement',
    path: 'http://47.96.187.51:3001/NW-frontend/micro_design_center',
    branch: 'v1.0.20210315.NEAP.BIDESIGN.RC',
    isOwner: false,
    disabled: false,
  },

  /**
   * === 设计器引擎 ===
   * 目前有具体的分支发布要求
   */
  // 设计中心 - 设计器
  {
    module: '设计器',
    repositorie: 'micro_bi_designer',
    path: 'http://47.96.187.51:3001/NW-frontend/micro_design_center.git',
    branch: 'v1.0.20210315.NEAP.BIDESIGN.RC',
    isOwner: false,
    disabled: false,
  },
  // 设计中心 - 生成器
  {
    module: '生成器',
    repositorie: 'micro_bi_generator',
    path: 'http://47.96.187.51:3001/NW-frontend/micro_design_center.git',
    branch: 'v1.0.20210315.NEAP.BIDESIGN.RC',
    isOwner: false,
    disabled: false,
  },
  // 设计中心 - 设计器物料
  {
    module: '设计器物料',
    repositorie: 'micro_bi_packages',
    path: 'http://47.96.187.51:3001/NW-frontend/micro_design_center.git',
    branch: 'v1.0.20210315.NEAP.BIDESIGN.RC',
    isOwner: false,
    disabled: false,
  },

  /**
   * === 设计中心 - 表单设计管理 ===
   * 目前有具体的分支发布要求
   */
  {
    module: '表单设计管理',
    repositorie: 'formDesign', //模块唯一标识key
    rootRepositorie: 'design_center', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_design_center.git',
    branch: 'v1.0.20210315.NEAP.BIDESIGN.RC',
    isOwner: false,
    disabled: false,
  },

  /**
   * === 设计中心 - 主题设置 ===
   * 目前有具体的分支发布要求
   */
  {
    module: '主题设置',
    repositorie: 'themeDesign',
    path: 'http://47.96.187.51:3001/NW-frontend/micro_design_center.git',
    branch: 'v1.0.20210315.NEAP.BIDESIGN.RC',
    isOwner: false,
    disabled: false,
  },

  /**
   * === 业户 ===
   * 目前有具体的分支发布要求
   */
  {
    module: '业户',
    repositorie: 'owner', //模块唯一标识key
    rootRepositorie: 'arm', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },

  /**
   * === V10 - 应收中台 - 财务收费 ===
   * 目前有具体的分支发布要求
   */
  {
    module: '应收中台组件库',
    repositorie: 'arm_components',
    rootRepositorie: 'arm', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '消息管理',
    repositorie: 'messageManagement',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '项目管理',
    repositorie: 'service',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '票据',
    repositorie: 'bill',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '报表',
    repositorie: 'reporting',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '退款',
    repositorie: 'refund',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '凭证',
    repositorie: 'voucherBatch',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '权责应收',
    repositorie: 'power',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '仪表',
    repositorie: 'Meter',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '计费',
    repositorie: 'charge',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '收款',
    repositorie: 'pay',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '任务',
    repositorie: 'job',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '业务配置',
    repositorie: 'config',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '概览',
    repositorie: 'overview',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },

  /**
   * === 招商租赁 ===
   * 目前有具体的分支发布要求
   */
  {
    module: '招商租赁',
    repositorie: 'rent',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },

  /**
   * === soss ===
   * 目前有具体的分支发布要求
   */
  {
    module: 'soss',
    repositorie: 'soss',
    rootRepositorie: 'arm',
    path: 'http://47.96.187.51:3001/NW-frontend/micro-arm.git',
    branch: 'V1.0.20210225.ARM.RC',
    isOwner: false,
    disabled: false,
  },

  /**
   * === o2o ===
   * 目前主分支发布
   */
  {
    module: '客户审核', //模块中文名称
    repositorie: 'customer', //模块唯一标识key
    rootRepositorie: 'o2o_admin', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_o2o_admin', //clone 路径
    branch: 'master',
    isOwner: false, //是否为自有模块
    disabled: false, //是否禁用
  },
  {
    module: '公众号配置', //模块中文名称
    repositorie: 'maintenance', //模块唯一标识key
    rootRepositorie: 'o2o_admin', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_o2o_admin', //clone 路径
    branch: 'master',
    isOwner: false, //是否为自有模块
    disabled: false, //是否禁用
  },
  {
    module: '频道管理', //模块中文名称
    repositorie: 'message', //模块唯一标识key
    rootRepositorie: 'o2o_admin', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_o2o_admin', //clone 路径
    branch: 'master',
    isOwner: false, //是否为自有模块
    disabled: false, //是否禁用
  },
  {
    module: '物业服务', //模块中文名称
    repositorie: 'repairMessage', //模块唯一标识key
    rootRepositorie: 'o2o_admin', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_o2o_admin', //clone 路径
    branch: 'master',
    isOwner: false, //是否为自有模块
    disabled: false, //是否禁用
  },
  {
    module: '邻里中心', //模块中文名称
    repositorie: 'bbs', //模块唯一标识key
    rootRepositorie: 'o2o_admin', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_o2o_admin', //clone 路径
    branch: 'master',
    isOwner: false, //是否为自有模块
    disabled: false, //是否禁用
  },
  {
    module: '问卷调查', //模块中文名称
    repositorie: 'questionnaire', //模块唯一标识key
    rootRepositorie: 'o2o_admin', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_o2o_admin', //clone 路径
    branch: 'master',
    isOwner: false, //是否为自有模块
    disabled: false, //是否禁用
  },

  /**
   * === 工单 ===
   * 目前主分支发布
   */
  {
    module: '工单业务组件库',
    repositorie: 'work_order_components', //模块唯一标识key
    rootRepositorie: 'work_order', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_work_order.git',
    isOwner: false,
    disabled: false,
  },
  {
    module: '工单服务概览',
    repositorie: 'overviewmenu', //模块唯一标识key
    rootRepositorie: 'work_order', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_work_order.git',
    isOwner: false,
    disabled: false,
  },
  {
    module: '工单列表',
    repositorie: 'servicemanage', //模块唯一标识key
    rootRepositorie: 'work_order', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_work_order.git',
    isOwner: false,
    disabled: false,
  },
  {
    module: '工单设置',
    repositorie: 'servicesetup', //模块唯一标识key
    rootRepositorie: 'work_order', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_work_order.git',
    isOwner: false,
    disabled: false,
  },
  {
    module: '工单报表',
    repositorie: 'servicereport', //模块唯一标识key
    rootRepositorie: 'work_order', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_work_order.git',
    isOwner: false,
    disabled: false,
  },
  {
    module: '呼叫中心',
    repositorie: 'callcenter', //模块唯一标识key
    rootRepositorie: 'work_order', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_work_order.git',
    isOwner: false,
    disabled: false,
  },

  /**
   * === 消息提醒 ===
   * 目前主分支发布
   */
  {
    module: '消息提醒',
    repositorie: 'notice', //模块唯一标识key
    rootRepositorie: 'message_management', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_message_management.git',
    isOwner: false,
    disabled: false,
  },

  /**
   * === 品质 ===
   * 目前主分支发布
   */
  {
    module: '品质组件库',
    repositorie: 'quality_components',
    rootRepositorie: 'quality', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_quality',
    isOwner: false,
    disabled: false,
  },
  {
    module: '项目自查',
    repositorie: 'projectCheck',
    rootRepositorie: 'quality', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_quality',
    isOwner: false,
    disabled: false,
  },
  {
    module: '品质核查',
    repositorie: 'qualityCheck',
    rootRepositorie: 'quality', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_quality',
    isOwner: false,
    disabled: false,
  },
  {
    module: '专项抽查',
    repositorie: 'specialCheck',
    rootRepositorie: 'quality', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_quality',
    isOwner: false,
    disabled: false,
  },
  {
    module: '品质设置',
    repositorie: 'qualitSeting',
    rootRepositorie: 'quality', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_quality',
    isOwner: false,
    disabled: false,
  },
  {
    module: '随手拍',
    repositorie: 'randomTask',
    rootRepositorie: 'quality', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_quality',
    isOwner: false,
    disabled: false,
  },
  {
    module: '统计报表',
    repositorie: 'qualityReport',
    rootRepositorie: 'quality', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_quality',
    isOwner: false,
    disabled: false,
  },

  /**
   * === 验房 ===
   * 目前主分支发布
   */
  {
    module: '验房业务组件库',
    repositorie: 'check_house_components',
    rootRepositorie: 'check_house', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_check_house',
    branch: 'v1.0.20201022.basic.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '细部检查',
    repositorie: 'detailcheck',
    rootRepositorie: 'check_house', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_check_house',
    branch: 'v1.0.20201022.basic.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '交付',
    repositorie: 'deilver',
    rootRepositorie: 'check_house', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_check_house',
    branch: 'v1.0.20201022.basic.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '集中交付',
    repositorie: 'focusdeilver',
    rootRepositorie: 'check_house', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_check_house',
    branch: 'v1.0.20201022.basic.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '验房参数',
    repositorie: 'checkhousepara',
    rootRepositorie: 'check_house', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_check_house',
    branch: 'v1.0.20201022.basic.RC',
    isOwner: false,
    disabled: false,
  },
  {
    module: '交验房报表',
    repositorie: 'checkhousereport',
    rootRepositorie: 'check_house', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_check_house',
    branch: 'v1.0.20201022.basic.RC',
    isOwner: false,
    disabled: false,
  },

  /**
   * === 收支系统 - finance ===
   * 目前有具体的分支发布要求
   */
  {
    module: '系收支系统业务组件',
    repositorie: 'finance_components',
    rootRepositorie: 'finance', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_finance',
    isOwner: false,
    disabled: false,
  },
  {
    module: '单据管理',
    repositorie: 'documentManagement',
    rootRepositorie: 'finance', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_finance',
    isOwner: false,
    disabled: false,
  },
  {
    module: '付款管理',
    repositorie: 'paymentManagement',
    rootRepositorie: 'finance', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_finance',
    isOwner: false,
    disabled: false,
  },
  {
    module: '收款管理',
    repositorie: 'collectionManagement',
    rootRepositorie: 'finance', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_finance',
    isOwner: false,
    disabled: false,
  },
  {
    module: '系统设置',
    repositorie: 'systemSettings',
    rootRepositorie: 'finance', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_finance',
    isOwner: false,
    disabled: false,
  },
  {
    module: '我的审批',
    repositorie: 'myApproval',
    rootRepositorie: 'finance', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_finance',
    isOwner: false,
    disabled: false,
  },
];
