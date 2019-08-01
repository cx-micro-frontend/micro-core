import Vue from 'vue';

//form
import autoForm from './Ns-auto-form/Ns-auto-form.vue';
import musterItem from './Ns-auto-form/auto-form-item/muster-item.vue';
import repeatItem from './Ns-auto-form/auto-form-item/auto-muster-item.vue';
import separator from './Ns-form-components/separator/separator.vue'
import text from './Ns-form-components/text/text.vue';
import areaLinkage from './Ns-form-components/area-linkage/area-linkage.vue';
import customerInfoSingle from './Ns-form-components/customer-info-single/customer-info-single.vue';
import authorizer from './Ns-form-components/authorizer/authorizer.vue';
import roleGroup from './Ns-form-components/role-group/role-group.vue';
import roleFnBtn from './Ns-form-components/roleFnBtn/roleFnBtn.vue';
import manageRangeSelect from './Ns-form-components/manage-range/index.vue';


//tree && select
import checkboxTree from './Ns-form-components/checkbox-tree/checkbox-tree';
import checkboxTreeSelect from './Ns-form-components/checkboxTreeSelect/checkboxTreeSelect.vue';

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


//tree && select
Vue.component('ns-checkbox-tree', checkboxTree);
Vue.component('ns-checkbox-tree-select', checkboxTreeSelect);
