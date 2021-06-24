/* eslint-disable */
/*
 * version
 * set version to packaging
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) Broccoli spring( gcx )
 * ------------------------------------------
 */

const version = '0.0.1';

// const prefix = 'all';
const prefix = 'BIDesign';
// const prefix = 'all-dev';

const _VarInjection = require(`./version/${prefix}/micro_release_${prefix}_${version}`);

const _BasicInjection = [
  {
    module: '业务组件', //模块中文名称
    repositorie: 'biz_components', //模块唯一标识key
    rootRepositorie: 'biz_components', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_biz_components', //clone 路径
    branch: 'v1.0.NEAP.BASIC.RC',
    isOwner: false, //是否为自有模块
    disabled: false, //是否禁用
  },

  {
    module: '系统设置', //模块中文名称
    repositorie: 'system', //模块唯一标识key
    rootRepositorie: 'system', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_system.git',
    branch: 'v1.0.NEAP.SYSTEM.RC', //抽取分支
    isOwner: false, //是否为自有模块
    disabled: false,
  },
  //v8\v9等嵌入模块
  {
    module: '非标嵌入模块', //模块中文名称
    repositorie: 'neapInject', //模块唯一标识key
    rootRepositorie: 'neapInject', //根模块唯一标识key
    path: 'http://47.96.187.51:3001/NW-frontend/micro_neapInject.git',
    branch: 'master', //抽取分支
    isOwner: false, //是否为自有模块
    disabled: false,
  },
];

module.exports = {
  modules: [..._BasicInjection, ..._VarInjection],
};
