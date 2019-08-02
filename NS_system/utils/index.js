import ns from "./nsQuery/nsQuery";

/**
 * judge type accurate
 * @param value
 * @returns {*}
 */
export const judgeType = (value) => {
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
}


/**
 * judge is a certain type
 * @param type
 * @param value
 * @returns {boolean}
 */
export const isXType = (type, value) => {
  if (type && judgeType(type) === 'string') {
    const t = Object.prototype.toString.call(value);
    switch (type) {
      case 'number':
        return t === '[object Number]';
      case 'string':
        return t === '[object String]';
      case 'undefined':
        return t === '[object Undefined]';
      case 'boolean':
        return t === '[object Boolean]';
      case 'object':
        return t === '[object Object]';
      case 'array':
        return t === '[object Array]';
      case 'function':
        return t === '[object Function]';
      default:
        break;
    }
  } else {
    throw 'The value of the type of judgment must exist and must be a string.';
  }
}


/**
 * isEqual
 * @param a
 * @param b
 * @param aStack
 * @param bStack
 * @returns {boolean}
 */
export const isEqual = (a, b, aStack, bStack) => {
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  if (a == null || b == null) return false;
  if (a !== a) return b !== b;
  let type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b !== 'object') return false;

  /**
   * deep equire
   * @param a
   * @param b
   * @param aStack
   * @param bStack
   * @returns {boolean}
   * @private
   */
  function _deepEq(a, b, aStack, bStack) {
    let className = toString.call(a);
    if (className !== toString.call(b)) return false;

    switch (className) {
      case '[object RegExp]':
      case '[object String]':
        return '' + a === '' + b;
      case '[object Number]':
        if (+a !== +a) return +b !== +b;
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        return +a === +b;
    }
    let areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a !== 'object' || typeof b !== 'object') return false;
      let aCtor = a.constructor,
        bCtor = b.constructor;
      if (
        aCtor === bCtor &&
        !(
          isXType('function', aCtor) &&
          aCtor instanceof aCtor &&
          (isXType('function', bCtor) && bCtor instanceof bCtor) &&
          ('constructor' in a && 'constructor' in b)
        )
      ) {
        return false;
      }
    }
    aStack = aStack || [];
    bStack = bStack || [];
    let length = aStack.length;
    while (length--) {
      if (aStack[length] === a) {
        return bStack[length] === b;
      }
    }
    aStack.push(a);
    bStack.push(b);
    if (areArrays) {
      length = a.length;
      if (length !== b.length) return false;
      while (length--) {
        if (!isEqual(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      let keys = Object.keys(a),
        key;
      length = keys.length;
      if (Object.keys(b).length !== length) return false;
      while (length--) {
        key = keys[length];
        if (!(b.hasOwnProperty(key) && isEqual(a[key], b[key], aStack, bStack)))
          return false;
      }
    }
    aStack.pop();
    bStack.pop();
    return true;
  }

  return _deepEq(a, b, aStack, bStack);
};


/**
 * judge array contain another Obj
 * @param arr
 * @param obj
 * @returns {boolean}
 */
export const arrContainObj = (arr, obj) => {
  if (judgeType(arr) === 'array') {
    let i = arr.length;
    while (i--) {
      if (arr[i] === obj) {
        return true;
      }
    }
    return false;
  } else {
    formatError('array');
  }
};

/**
 * judge string contain another string in definite place
 * @param str
 * @param substr
 * @param place       place number
 * @returns {boolean}
 */
export const strContainPlace = (str, substr, place) => {
  if (isXType('string', str) && isXType('string', substr)) {
    if (judgeType(place) === 'number') {
      return str.indexOf(substr) === place;
    }
  } else {
    formatError('string');
  }
};


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
 * judge object is empty
 * @param value
 * @returns {boolean}
 */
export const isEmpty = (value) => {
  return (
    (Array.isArray(value) && value.length === 0) ||
    (Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0)
  );
};


/**
 * deep clone
 * @param data
 * @returns {{}}
 */
export const deepClone = (data) => {
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
 * is variable Exitsed
 * @param variableName
 * @returns {boolean}
 */
export const isExitsVariable = (variableName) => {
  try {
    const type = judgeType(variableName);
    if (type === 'undefined' || type === 'null') {
      return false;
    } else {
      return true;
    }
  } catch (e) {
  }
  return false;
};


/**
 * log information style
 * @param type
 * @returns {string}
 */
export const logStyle = type => {
  const base = 'font-weight:bold;';
  switch (type) {
    case 'tit':
      return 'color:#F56C6C; ' + base;
    case 'info':
      return 'color:#409EFF; ' + base;
    case 'text':
      return 'color:#303133; ' + base;
    case 'success':
      return 'color:#67C23A; ' + base;
    case 'warning':
      return 'color:#E6A23C; ' + base;
    case 'line':
      return 'color:#DCDFE6; ' + base;
    case '3DTest':
      return ' text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:1.4em';
    default:
      break;
  }
};

/**
 * throw format error
 * @param format
 */
export const formatError = format => {
  throw('the object of the judgment must be a ' + format + ' format ，you better find it');
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
