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
