/**
 * BI 设计器 模块配置
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
    branch: 'dev-1.0',
    isOwner: false,
    disabled: false,
  },

  // 设计中心 - 门户管理
  {
    module: '门户管理',
    repositorie: 'portalManagement',
    path: 'http://47.96.187.51:3001/NW-frontend/micro_design_center.git',
    branch: 'v1.0.NEAP.BIDESIGN.RC',
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
    branch: 'v1.0.NEAP.BIDESIGN.RC',
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
    branch: 'v1.0.NEAP.BIDESIGN.RC',
    isOwner: false,
    disabled: false,
  },
  // 设计中心 - 生成器
  {
    module: '生成器',
    repositorie: 'micro_bi_generator',
    path: 'http://47.96.187.51:3001/NW-frontend/micro_design_center.git',
    branch: 'v1.0.NEAP.BIDESIGN.RC',
    isOwner: false,
    disabled: false,
  },
  // 设计中心 - 设计器物料
  {
    module: '设计器物料',
    repositorie: 'micro_bi_packages',
    path: 'http://47.96.187.51:3001/NW-frontend/micro_design_center.git',
    branch: 'v1.0.NEAP.BIDESIGN.RC',
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
    branch: 'v1.0.NEAP.BIDESIGN.RC',
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
    branch: 'v1.0.NEAP.BIDESIGN.RC',
    isOwner: false,
    disabled: false,
  },

  /**
   * === 数据迁移系统 ===
   * 目前主分支发布
   */
  {
    module: '数据管理',
    repositorie: 'dataManagement',
    rootRepositorie: 'data_migration', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_data_migration.git',
    isOwner: false,
    disabled: false,
  },
];
