/**
 * 金服模块配置
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
    branch: 'v1.0.20210225.portal.standard.RC',
    isOwner: false,
    disabled: false,
  },
  // 设计中心 - 门户管理
  {
    module: '门户管理',
    repositorie: 'portalManagement',
    path: 'http://47.96.187.51:3001/NW-frontend/micro_design_center.git',
    branch: 'v1.0.20210302.NEAP.BIDESIGN.RC',
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
    branch: 'v1.0.20210302.NEAP.BIDESIGN.RC',
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
    branch: 'v1.0.20210302.NEAP.BIDESIGN.RC',
    isOwner: false,
    disabled: false,
  },
  // 设计中心 - 生成器
  {
    module: '生成器',
    repositorie: 'micro_bi_generator',
    path: 'http://47.96.187.51:3001/NW-frontend/micro_design_center.git',
    branch: 'v1.0.20210302.NEAP.BIDESIGN.RC',
    isOwner: false,
    disabled: false,
  },
  // 设计中心 - 设计器物料
  {
    module: '设计器物料',
    repositorie: 'micro_bi_packages',
    path: 'http://47.96.187.51:3001/NW-frontend/micro_design_center.git',
    branch: 'v1.0.20210302.NEAP.BIDESIGN.RC',
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
    branch: 'v1.0.20210302.NEAP.BIDESIGN.RC',
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
    branch: 'v1.0.20210302.NEAP.BIDESIGN.RC',
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
];
