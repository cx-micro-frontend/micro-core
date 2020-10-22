import Vue from 'vue';

import BizRoleButtonArea from './NS-biz-role-button-area/Biz-role-button-area.vue'; //权限按钮

import QRCodeDownLoad from '../views/Login/components/QRCodeDownLoad/QRCodeDownLoad'; //二维码下载

import nsHeaderLogo from '../layout/components/NS-header-logo/NS-header-logo'; //头部左侧logo
import bizUserDropdown from '../layout/components/NS-biz-user-dropdown/NS-user-dropdown'; //用户下拉选择
import NSThemeConfig from '../layout/components/NS-theme/components/NS-theme-config'; //主题设置区域

Vue.component('ns-biz-role-button-area', BizRoleButtonArea);

Vue.component('ns-qrcode-download', QRCodeDownLoad);

Vue.component('ns-header-logo', nsHeaderLogo);
Vue.component('ns-user-dropdown', bizUserDropdown);
Vue.component('ns-theme-config', NSThemeConfig);

//Navigation
// Vue.component('ns-dropdown', dropdown);

//Navigation
// import dropdown from './NS-biz-Navigation/NS-biz-Navigation.vue';
