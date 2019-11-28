/*
 * load new table components plugin
 * created: 2019/11/13.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2019 Broccoli spring( gcx )
 */
import Vue from 'vue';

// import {
//   VXETable,
//   Icon,
//   Column,
//   Header,
//   Body,
//   Footer,
//   Filter,
//   Loading,
//   Tooltip,
//   Menu,
//   Pager,
//   Checkbox,
//   Radio,
//   Edit,
//   Export,
//   Validator,
//   Resize,
//   Table,
// } from 'vxe-table';
//
// Vue.use(Icon);
// Vue.use(Column);
// Vue.use(Header);
// Vue.use(Body);
// Vue.use(Footer);
// Vue.use(Filter);
// Vue.use(Loading);
// Vue.use(Tooltip);
// Vue.use(Menu);
// Vue.use(Pager);
// Vue.use(Checkbox);
// Vue.use(Radio);
// Vue.use(Edit);
// Vue.use(Export);
// Vue.use(Validator);
// Vue.use(Resize);
// Vue.use(Table);

import VXETable from 'vxe-table';
import 'vxe-table/lib/index.css';
import '../../style/cover/vxe-table/index.scss';

import VXETablePluginElement from 'vxe-table-plugin-element';

VXETable.use(VXETablePluginElement);

Vue.use(VXETable);
