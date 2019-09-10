import Vue from 'vue';

//tree
import BizOrganizeTree from './NS-biz-tree/Biz-organize-tree/Biz-organize-tree.vue';
import BizDataDictionaryTree from './NS-biz-tree/Biz-data-dictionary-tree/Biz-data-dictionary-tree.vue';

//select-tree
import BizOrgnizeSelectTree from './NS-biz-select-tree/Biz-organize-select-tree/Biz-organize-select-tree.vue';

import BizRoleButtonArea from './NS-biz-role-button-area/Biz-role-button-area.vue';

//Navigation
import dropdown from './NS-biz-Navigation/NS-biz-Navigation.vue';

//tree
Vue.component('ns-biz-organize-tree', BizOrganizeTree);
Vue.component('ns-biz-data-dictionary-tree', BizDataDictionaryTree);

//select tree
Vue.component('ns-biz-organize-select-tree', BizOrgnizeSelectTree);

Vue.component('ns-biz-role-button-area', BizRoleButtonArea);

//Navigation
Vue.component('ns-dropdown', dropdown);
