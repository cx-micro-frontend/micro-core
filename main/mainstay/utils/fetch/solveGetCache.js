import { getBrowserInfo } from '../browser';
import { uuid } from '../uuid';

export default config => {
  if (config.method === 'get' && getBrowserInfo().browser === 'IE') {
    config.params = Object.assign(config.params || {}, {
      _: new Date().getTime(),
    });
  }

}
