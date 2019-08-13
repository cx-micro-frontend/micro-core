/* eslint-disable */
/*
 * core inject by env.param.config config
 * you can load you business model / mixins / others in your file entry
 * created: 2019-08-13 14:27:32.
 * version: 0.0.23-29.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) Broccoli spring( gcx )
 * ------------------------------------------
 */

//inject store model
import inject_biz_components___store from '../repositories/NS_biz_components/store/index.js';
import inject_community___store from '../repositories/NS_community/store/index.js';
import inject_owner___store from '../repositories/NS_owner/store/index.js';
import inject_detailcheck___store from '../repositories/NS_detailcheck/store/index.js';
import inject_deilver___store from '../repositories/NS_deilver/store/index.js';
import inject_focusdeilver___store from '../repositories/NS_focusdeilver/store/index.js';
import inject_checkhousepara___store from '../repositories/NS_checkhousepara/store/index.js';
//inject mixins
import inject_biz_components___mixins from '../repositories/NS_biz_components/mixins/index.js';
import inject_community___mixins from '../repositories/NS_community/mixins/index.js';
import inject_owner___mixins from '../repositories/NS_owner/mixins/index.js';
import inject_detailcheck___mixins from '../repositories/NS_detailcheck/mixins/index.js';
import inject_deilver___mixins from '../repositories/NS_deilver/mixins/index.js';
import inject_focusdeilver___mixins from '../repositories/NS_focusdeilver/mixins/index.js';
import inject_checkhousepara___mixins from '../repositories/NS_checkhousepara/mixins/index.js';

let modelTotal = {};
let mixinsMerge = [];

//merge
modelTotal = Object.assign(modelTotal, inject_biz_components___store);
modelTotal = Object.assign(modelTotal, inject_community___store);
modelTotal = Object.assign(modelTotal, inject_owner___store);
modelTotal = Object.assign(modelTotal, inject_detailcheck___store);
modelTotal = Object.assign(modelTotal, inject_deilver___store);
modelTotal = Object.assign(modelTotal, inject_focusdeilver___store);
modelTotal = Object.assign(modelTotal, inject_checkhousepara___store);
mixinsMerge.push(inject_biz_components___mixins);
mixinsMerge.push(inject_community___mixins);
mixinsMerge.push(inject_owner___mixins);
mixinsMerge.push(inject_detailcheck___mixins);
mixinsMerge.push(inject_deilver___mixins);
mixinsMerge.push(inject_focusdeilver___mixins);
mixinsMerge.push(inject_checkhousepara___mixins);


export default {
  model: modelTotal,
  mixins: mixinsMerge,
};

