import Vue from 'vue';
import ElementUI from 'element-ui';

//style
import 'cx-theme/dist/cx-theme.min.css';
import '../style/element-cover/index.scss'; //cover
import '../style/public.scss';
import '../style/common.scss';

//icon
import '../assets/iconfont/iconfont';

//components
import '../components/index';

//enject UI
import '../../../injection/entrance/entrance_ui';

Vue.use(ElementUI);

import nsui from 'neap-ui/lib/ns-ui.js';
import 'neap-ui/lib/index.css';

import '../utils';

Vue.use(nsui, {
  prefix: 'ns', //stage name
  tie: '-',
  log: false, //show log information
  type: 'globle',
});
