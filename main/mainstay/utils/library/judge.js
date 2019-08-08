import {formatError} from "./log.js";

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
 * judge object is empty
 * @param obj
 * @returns {boolean}
 */
export const isEmptyObject = obj => {
  if (!obj) return false;
  return Object.keys(obj).length === 0;
};
