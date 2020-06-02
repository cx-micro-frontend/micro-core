import { getToken, getUserId } from '../library/auth';
import config from './config';

/**
 * storage method
 * @param type      set / get /remove
 * @param key
 * @param data      store data
 * @returns {string | null | null}
 */
export const storageHandle = (type, key, data) => {
  existwarning(key);

  const prefix = 'NS';
  /*
   * need key partition ?
   * => add token by factory handle
   * => use key
   * add a prefix at last
   */
  const _K = `${prefix}_${
    config[key].partition ? storageFactory(config[key].storagekey) : config[key].storagekey
  }`;

  const method = config[key].storageMethod;

  if (method === 'localStorage') {
    if (type === 'set') {
      localStorage.setItem(_K, data);
    } else if (type === 'get') {
      return localStorage.getItem(_K) || null;
    } else {
      localStorage.removeItem(_K);
    }
  } else if (method === 'sessionStorage') {
    if (type === 'set') {
      sessionStorage.setItem(_K, data);
    } else if (type === 'get') {
      return sessionStorage.getItem(_K) || null;
    } else {
      sessionStorage.removeItem(_K);
    }
  }
};

function existwarning(key) {
  if (!config[key]) throw 'please register in the storage configuration file first ';
}

/**
 * Factory for storage
 * @param key
 * @param type
 * @returns {string}
 */
function storageFactory(key, type = 'userId') {
  let suffix = null;

  if (type === 'token') {
    let token = getToken() || '';
    suffix = token
      .replace(/\-/g, '_')
      .replace(/\./g, '_')
      .substring(0, 70);
  } else if (type === 'userId') {
    suffix = getUserId() || '';
  }

  return suffix ? `${key}_${suffix}` : key;
}
