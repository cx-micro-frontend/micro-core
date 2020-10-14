import Vue from 'vue';

import nsHeaderLogo from './NS-header-logo/NS-header-logo';
import bizUserDropdown from './NS-biz-user-dropdown/NS-user-dropdown';
import NSThemeConfig from './NS-theme/components/NS-theme-config';

Vue.component('ns-header-logo', nsHeaderLogo);
Vue.component('ns-user-dropdown', bizUserDropdown);
Vue.component('ns-theme-config', NSThemeConfig);
