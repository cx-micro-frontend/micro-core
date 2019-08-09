import {getToken} from "../library/auth";
import config from "./config";

/**
 * storage method
 * @param type      set / get /remove
 * @param key
 * @param data      store data
 * @returns {string | null | null}
 */
export const storageHandle = (type, key, data) => {

  existwarning(key);

  /*
   * need key partition ?
   * => add token by factory handle
   * => use key
   */
  const _K = config[key].partition ? storageFactory(config[key].storagekey) : config[key].storagekey;

  const method = config[key].storageMethod;


  if (method === 'localStorage') {
    if (type === 'set') {
      localStorage.setItem(_K, data);
    }
    else if (type === 'get') {
      return localStorage.getItem(_K) || null;
    }
    else {
      localStorage.removeItem(_K);
    }
  }

  else if (method === 'sessionStorage') {
    if (type === 'set') {
      sessionStorage.setItem(_K, data);
    }
    else if (type === 'get') {
      return sessionStorage.getItem(_K) || null;
    }
    else {
      sessionStorage.removeItem(_K);
    }
  }

};


function existwarning(key) {
  if (!config[key]) throw ('please register in the storage configuration file first ');
}

function storageFactory(key) {

  let token = getToken() || '';
  token = token.replace(/\-/g, '_').replace(/\./g, '_');
  const all = `NS_${key}_${token}`;

//eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXBlckFkbWluIiwianRpIjoiMSIsImlhdCI6MTU2MjkyMTI2NH0.JprDmZqzDf4iaome_pXXF_-fpeN_o5FEV_9J27ROTcM

  return all.substring(0, 70);
}
