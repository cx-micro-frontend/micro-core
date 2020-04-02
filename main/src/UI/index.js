import Vue from 'vue';
import { elementui, nsui, iconfont, utils } from '../../plugins';

//第三方依赖
Vue.use(elementui);
Vue.use(nsui, {
  prefix: 'ns', //stage name
  tie: '-',
  log: false, //show log information
  type: 'globle',
});

//load applaction style
import '../style/index.scss';

//load icon
(function(window) {
  if (!iconfont) return;
  iconfont.roleButton();
  iconfont.navMenu();
})(window);

//components
import '../components/index';

//enject UI
import '../../../injection/entrance/entrance_ui';

//业务组个性化注入
import './Custom-UI/index';

//load utils event
// import '../utils';
