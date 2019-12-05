import { getBrowserInfo } from '../library/browser';
import { uuid } from '../library/uuid';

export default config => {
  if (config.method === 'get' && getBrowserInfo().browser === 'ie') {
    config.params = Object.assign(config.params || {}, {
      _: new Date().getTime(),
    });
  }
};
