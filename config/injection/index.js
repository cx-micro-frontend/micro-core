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
    module: '业务组件',
    path: 'http://192.168.1.89:3000/gaocangxiong/micro_biz_components.git',
    repositorie: 'biz_components',
    isOwner: false,
    gate: true,
  },
];

module.exports = {
  modules: [..._BasicInjection, ...VarInjection]
};
