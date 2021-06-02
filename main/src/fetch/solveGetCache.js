import { getBrowserInfo } from '../utils/library/browser';
import { uuid } from '../utils/library/uuid';

export default config => {
  if (config.method === 'get' && getBrowserInfo().browser === 'ie') {
    config.params = Object.assign(config.params || {}, {
      _: uuid(),
      // _: new Date().getTime(),
    });
  }
};
