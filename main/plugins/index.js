/*
 * export plugin
 * created: 2020/04/02.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2020 Broccoli spring( gcx )
 */

import nsui from './UI/NS-UI/index'; //load ns-ui
import elementui from './UI/Element-UI/index';//load element-ui
import iconfont from './UI/Iconfont/index';
import cache from './cache/index';
import utils from '../src/utils/index';//methods library
import Package from '../../package';

const version = Package.version;

export {
  version,
  nsui,
  elementui,
  iconfont,
  cache,
  utils,
};
