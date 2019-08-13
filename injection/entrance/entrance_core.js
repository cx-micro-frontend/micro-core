/* eslint-disable */
/*
 * core inject by env.param.config config
 * you can load you business model / mixins / others in your file entry
 * created: 2019-08-13 10:51:33.
 * version: 0.0.23-26.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) Broccoli spring( gcx )
 * ------------------------------------------
 */

//inject store model
import inject_biz_components___store from '../repositories/NS_biz_components/store/index.js';
//inject mixins
import inject_biz_components___mixins from '../repositories/NS_biz_components/mixins/index.js';

let modelTotal = {};
let mixinsMerge = [];

//merge
modelTotal = Object.assign(modelTotal, inject_biz_components___store);
mixinsMerge.push(inject_biz_components___mixins);


export default {
  model: modelTotal,
  mixins: mixinsMerge,
};

