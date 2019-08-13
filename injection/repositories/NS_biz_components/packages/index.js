import Vue from 'vue';

//page
import NSBizSlipDialog from './NS-biz-slip-dialog/NS-biz-slip-dialog';
import NSBizTable from './NS-biz-table/NS-biz-table';
import NSBizSearchConditions from './NS-biz-search-conditions/NS-biz-search-conditions'

//tree
import NSBizOrganizeTreeSimple from './NS-biz-tree/NS-biz-origanize-tree-simple/NS-biz-origanize-tree-simple'
import NSBizTargetTree from './NS-biz-tree/Ns-biz-target-tree/Ns-biz-target-tree'
import NSBizHouseTree from './NS-biz-tree/NS-biz-house-tree/NS-biz-house-tree'


//业务
import NSBizImportLogs from './NS-biz-import-logs/NS-biz-import-logs';
import NSBizHousecheck from './NS-biz-housecheck/NS-biz-housecheck.vue';
import NSBizChooseEmployee from './NS-biz-choose-employee/NS-biz-choose-employee';
import NSBizChooseEmployeeDialog from './NS-biz-choose-employee-dialog/NS-biz-choose-employee-dialog';
import NSBizPreviewImage from './NS-biz-preview-image/NS-biz-preview-image.vue'


//form
import autoForm from './NS-auto-form/NS-auto-form';
import musterItem from './NS-auto-form/auto-form-item/muster-item';
import repeatItem from './NS-auto-form/auto-form-item/auto-muster-item.vue';
import separator from './NS-form-components/separator/separator.vue'
import text from './NS-form-components/text/text.vue';
import areaLinkage from './NS-form-components/area-linkage/area-linkage.vue';
import customerInfoSingle from './NS-form-components/customer-info-single/customer-info-single.vue';
import authorizer from './NS-form-components/authorizer/authorizer.vue';
import roleGroup from './NS-form-components/role-group/role-group.vue';
import roleFnBtn from './NS-form-components/roleFnBtn/roleFnBtn.vue';
import manageRangeSelect from './NS-form-components/manage-range/index.vue';
import checkboxTree from './NS-form-components/checkbox-tree/checkbox-tree';
import checkboxTreeSelect from './NS-form-components/checkboxTreeSelect/checkboxTreeSelect.vue';


//page
Vue.component('ns-biz-slip-dialog', NSBizSlipDialog);
Vue.component('ns-biz-table', NSBizTable);
Vue.component('ns-biz-search-conditions', NSBizSearchConditions);

//tree
Vue.component('ns-biz-organize-tree-simple', NSBizOrganizeTreeSimple);
Vue.component('ns-biz-target-tree', NSBizTargetTree);
Vue.component('ns-biz-house-tree', NSBizHouseTree);

//业务
Vue.component('ns-biz-housecheck', NSBizHousecheck);
Vue.component('ns-biz-import-logs', NSBizImportLogs);
Vue.component('ns-biz-choose-employee', NSBizChooseEmployee);
Vue.component('ns-biz-choose-employee-dialog', NSBizChooseEmployeeDialog);
Vue.component('ns-biz-preview-image', NSBizPreviewImage);


//form
Vue.component('ns-auto-form', autoForm);
Vue.component('ns-muster-item', musterItem);
Vue.component('ns-repeat-item', repeatItem);
Vue.component('ns-customer-info-single', customerInfoSingle);
Vue.component('ns-area-linkage', areaLinkage);
Vue.component('ns-separator', separator);
Vue.component('ns-text', text);

Vue.component('ns-transfer-authorizer', authorizer);
Vue.component('ns-role-group', roleGroup);
Vue.component('ns-role-fn-btn', roleFnBtn);
Vue.component('ns-manage-range', manageRangeSelect);
Vue.component('ns-checkbox-tree', checkboxTree);
Vue.component('ns-checkbox-tree-select', checkboxTreeSelect);
