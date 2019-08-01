/**
 * judge type accurate
 * @param value
 * @returns {*}
 */
export const judgeType = value => {
  const t = Object.prototype.toString.call(value);
  let map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  };
  if (value instanceof Element) {
    return 'element';
  }
  return map[t];
};


/**
 * judge object is empty
 * @param obj
 * @returns {boolean}
 */
export const isEmptyObject = obj => {
  if (!obj) return false;
  return Object.keys(obj).length === 0;
};


/**
 * get param from url
 * @param name
 * @returns {*}
 */
export const getUrlParam = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  const r = window.location.search.substr(1).match(reg) || window.location.hash.substring((window.location.hash.search(/\?/)) + 1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
};
