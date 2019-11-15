import Vue from 'vue';

import nsui from 'neap-ui/lib/ns-ui';
import 'neap-ui/lib/index.css';

Vue.use(nsui, {
  prefix: 'ns', //stage name
  tie: '-',
  log: false, //show log information
  type: 'globle',
});
