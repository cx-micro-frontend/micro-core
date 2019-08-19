/**
 * get param from url
 * @param name
 * @returns {*}
 */
export const getUrlParam = name => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  const r =
    window.location.search.substr(1).match(reg) ||
    window.location.hash.substring(window.location.hash.search(/\?/) + 1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
};

/**
 * get base url
 * config in env.config.js - root path
 * @returns {any}
 */
export const getBaseURL = () => {
  return process.env.NODE_ENV === 'development' ? process.env.IP_CONFIG : '';
};
