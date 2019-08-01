import Vue from 'vue';

//table
import BizTable from './Biz-table/Biz-table';

//tree
import BizOrganizeTree from './Biz-tree/Biz-organize-tree/Biz-organize-tree';
import BizDataDictionaryTree from './Biz-tree/Biz-data-dictionary-tree/Biz-data-dictionary-tree';

//select-tree
import BizOrgnizeSelectTree from './Biz-select-tree/Biz-organize-select-tree/Biz-organize-select-tree.vue';


//conditions
import SearchConditions from './Biz-search-conditions/Biz-search-conditions';


import BizRoleButtonArea from './Biz-role-button-area/Biz-role-button-area';


//table
Vue.component('ns-biz-table', BizTable);

//tree
Vue.component('ns-biz-organize-tree', BizOrganizeTree);
Vue.component('ns-biz-data-dictionary-tree', BizDataDictionaryTree);


Vue.component('ns-biz-search-conditions', SearchConditions);

//select tree
Vue.component('ns-biz-organize-select-tree', BizOrgnizeSelectTree);

Vue.component('ns-biz-role-button-area', BizRoleButtonArea);
