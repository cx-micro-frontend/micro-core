import Vue from 'vue';
import { elementui, nsui, utils } from '../../plugins';

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

//components
import '../components/index';
import '../layout/components/index';

//enject UI
import '../../../injection/entrance/entrance_ui';

//业务组个性化注入
import './Custom-UI';

//load framework icon
import '../icons/framework/iconfont';
import '../icons';

//load utils event
// import '../utils';
