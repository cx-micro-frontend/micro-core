/**
 * get query
 * @param url
 * @param key
 * @returns {null}
 */
const getQuery = (url, key) => {
  let reg = new RegExp('(^|\\?|&)' + key + '=([^&]*)(\\area-linkage|&|$)', 'i');
  if (url) {
    if (reg.test(url)) {
      const val = unescape(RegExp.$2.replace(/\+/g, ' '));

      if (val !== null && val.toString().length >= 1) {
        return val;
      }
    }
  }
  return null;
};

/**
 * get mock query
 * @param url
 * @param key
 * @returns {string}
 */
exports.getMockQuery = (url, key) => {
  const URL = encodeURI(url);
  const qn = getQuery(URL, key);
  return decodeURI(decodeURI(qn));
};
