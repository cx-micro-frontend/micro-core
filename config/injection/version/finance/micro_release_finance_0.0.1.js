/**
 * 恒大收付系统模块配置
 * 目前部分业务模块取自 0225版本
 * @type {*[]}
 */
module.exports = [
  // 单据管理
  {
    module: '单据管理',
    repositorie: 'documentManagement',
    isOwner: true,
    disabled: false,
  },
  // 付款管理
  {
    module: '付款管理',
    repositorie: 'paymentManagement',
    isOwner: true,
    disabled: false,
  },
  // 收款管理
  {
    module: '收款管理',
    repositorie: 'collectionManagement',
    isOwner: true,
    disabled: false,
  },
  // 系统设置
  {
    module: '系统设置',
    repositorie: 'systemSettings',
    isOwner: true,
    disabled: false,
  },
];
