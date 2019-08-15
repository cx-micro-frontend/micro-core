import { judgeType, isXType } from './judge';

/**
 * check range (校验特定范围内是否所有表单元素都通过验证)
 * @param range
 * @param target
 * @returns {boolean}
 */
export const checkRange = (range, target) => {
  const t = range + ' ' + target;
  const allError = document.querySelectorAll(t);
  return !allError.length > 0;
};

/**
 * replace the specified string by something in father string
 * @param str
 * @param substr
 * @param replace
 * @returns {*|string|void|XML}
 */
export const delsubstr = (str, substr, replace) => {
  if (isXType('string', str) && isXType('string', substr)) {
    const reg = new RegExp(substr, 'g');
    return typeof replace === 'undefined' ? str.replace(reg, '') : str.replace(reg, replace);
  } else {
    formatError('string');
  }
};

/**
 * deep clone
 * @param data
 * @returns {{}}
 */
export const deepClone = data => {
  let obj = {};
  let originQueue = [data];
  let copyQueue = [obj];
  let visitQueue = [];
  let copyVisitQueue = [];
  while (originQueue.length > 0) {
    let _data = originQueue.shift();
    let _obj = copyQueue.shift();
    visitQueue.push(_data);
    copyVisitQueue.push(_obj);
    for (const key in _data) {
      const _value = _data[key];
      const type = judgeType(_data[key]);
      if (type !== 'object') {
        if (type === 'undefined') {
          _obj[key] = '';
        } else {
          _obj[key] = _value;
        }
      } else {
        let index = visitQueue.indexOf(_value);
        if (index >= 0) {
          _obj[key] = copyVisitQueue[index];
        } else {
          originQueue.push(_value);
          _obj[key] = {};
          copyQueue.push(_obj[key]);
        }
      }
    }
  }
  return obj;
};

/**
 * deepMerge
 * @param obj1
 * @param obj2
 * @returns {*}
 */
export const deepMerge = (obj1, obj2) => {
  let key;
  for (key in obj2) {
    obj1[key] =
      obj1[key] && obj1[key].toString() === '[object Object]'
        ? deepMerge(obj1[key], obj2[key])
        : (obj1[key] = obj2[key]);
  }
  return obj1;
};

/**
 * invert
 * @param val
 * @returns {boolean}
 */
export const invert = val => {
  if (typeof val === 'undefined') {
    return;
  }
  return !val;
};
