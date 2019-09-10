/* eslint-disable */
/*
 * version
 * set version to packaging
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) Broccoli spring( gcx )
 * ------------------------------------------
 */

const version = '0.0.1';

const prefix = 'micro_core_';

const VarInjection = require(`./version/${prefix}${version}`);

const _BasicInjection = [
  {
    module: '业务组件', //模块中文名称
    repositorie: 'biz_components', //模块唯一标识key
    path: 'http://192.168.1.47:3000/Framework-frontend/micro_biz_components.git', //clone 路径
    isOwner: false, //是否为自有模块
    disabled: false, //是否禁用
  },
  {
    module: '系统设置', //模块中文名称
    repositorie: 'system', //模块唯一标识key
    path: 'http://192.168.1.47:3000/Framework-frontend/micro_system.git', //clone 路径
    // landingRoot: false, //是否注入根目录中
    isOwner: false, //是否为自有模块
    disabled: false, //是否禁用
  },
];

module.exports = {
  modules: [..._BasicInjection, ...VarInjection],
};
