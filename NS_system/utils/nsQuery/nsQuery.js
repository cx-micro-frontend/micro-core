/*
 * auxiliary for newsee
 * With the wrapper function below, you can use the Vue extension function more quickly
 * created: 2017/10/10.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */

import Cookies from 'js-cookie';
import $store from '../../store/index';
import CryptoJS from 'crypto-js';

const crypto = require('crypto');

function judgeBase() {
  return $store && CryptoJS && Cookies ? true : false;
}

const newsee = function() {};

const _init = () => {
  judgeBase()
    ? console.log('success')
    : ns.error.throw(
        'This script for newsee is depend on Vuex ,CryptoJS and Cookie.js, please find it'
      );
};

newsee.prototype = {
  //Crypto function
  crypto: {
    /**
     * encrypt by Base64
     * @param val
     * @param key
     * @returns {string}
     */
    encryptBase64: (val, key) => {
      if (!CryptoJS) {
        ns.error.throw('CryptoJS is undefined, you need to load it');
      }
      if (typeof val === 'string' && typeof key === 'string') {
        if (key) {
          var keyStr = CryptoJS.enc.Utf8.parse(key);
          var iv = CryptoJS.enc.Utf8.parse(key);
        }

        let srcs = CryptoJS.enc.Utf8.parse(val);

        const encrypted = CryptoJS.AES.encrypt(srcs, keyStr, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.ZeroPadding,
        });
        return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
      } else {
        ns.error.throw('The data format of encrypted content and key should be string，find it.');
      }
    },
    /**
     * deCrypto by Base64
     * @param val
     * @param key      crypto-password
     * @returns {string}
     */
    deCryptoBase64: (val, key) => {
      if (!CryptoJS) {
        ns.error.throw('CryptoJS is undefined, you need to load it');
      }
      if (typeof key === 'string') {
        if (key) {
          var keyStr = CryptoJS.enc.Utf8.parse(key);
          var iv = CryptoJS.enc.Utf8.parse(key);
        }
        let base64 = CryptoJS.enc.Base64.parse(val);
        let src = CryptoJS.enc.Base64.stringify(base64);

        const decrypt = CryptoJS.AES.decrypt(src, keyStr, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.ZeroPadding,
        });

        const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();
      } else {
        ns.error.throw('The decrypt-key should be string，find it.');
      }
    },

    /**
     * setCrypto
     * @param val
     * @param key      crypto-password
     * @returns {*}
     */
    setCrypto: function(val, key) {
      if (!CryptoJS) {
        ns.error.throw('CryptoJS is undefined, you need to load it');
      }
      if (typeof val === 'string' && typeof key === 'string') {
        return CryptoJS.AES.encrypt(val, key);
      } else {
        ns.error.throw('The data format of encrypted content and key should be string，find it.');
      }
    },

    /**
     * deCrypto
     * @param val
     * @param key      crypto-password
     * @returns {string}
     */
    deCrypto: function(val, key) {
      if (!CryptoJS) {
        ns.error.throw('CryptoJS is undefined, you need to load it');
      }
      if (typeof key === 'string') {
        return CryptoJS.AES.decrypt(val, key).toString(CryptoJS.enc.Utf8);
      } else {
        ns.error.throw('The decrypt-key should be string，find it.');
      }
    },

    /**
     * Crypto and set into Cookie
     * @param name        stroe name
     * @param val         stroe value
     * @param key         stroe password
     * @param time        stroe time
     */
    cryptoCookie: function(name, val, key, time) {
      //get crypto password
      const mi = this.setCrypto(JSON.stringify(val), key);
      time ? ns.base.Cookie.set(name, mi, time) : ns.base.Cookie.set(name, mi);
    },

    /**
     * deCrypto
     * @param cookieName
     * @param cookieKey         passwoed
     * @returns {{}}
     */
    deCryptoCookie: function(cookieName, cookieKey) {
      return Cookies.get(cookieName)
        ? JSON.parse(
            CryptoJS.AES.decrypt(Cookies.get(cookieName), cookieKey).toString(CryptoJS.enc.Utf8)
          )
        : {};
    },
  },
  //base function
  base: {
    //Cookie - handle
    Cookie: {
      //set Cookie
      set: function(name, val, time) {
        if (!name || !val) {
          throw 'Should set with objects and value ，please carry them,or you cookie is not to be set succsssfull';
        }
        time ? Cookies.set(name, val, time) : Cookies.set(name, val);
      },
      //get Cookie
      get: function(name) {
        if (!name) {
          ns.error.throw('Should objects to get ，please carry with name');
        }
        return Cookies.get(name);
      },
      //delete Cookie
      delete: function(name) {
        if (!name) {
          ns.error.throw('Should objects to delete ，please carry with name');
        }
        Cookies.remove(name);
      },
      clear: function() {
        let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
          for (let i = keys.length; i--; ) {
            Cookies.remove(keys[i]);
          }
        }
      },
    },
    /**
     * get query
     * @param url
     * @param name
     * @returns {null}
     */
    getQuery: function(url, name) {
      const reg = new RegExp('(^|\\?|&)' + name + '=([^&]*)(\\area-linkage|&|$)', 'i');
      if (url) {
        if (reg.test(url)) {
          const val = unescape(RegExp.$2.replace(/\+/g, ' '));

          if (val !== null && val.toString().length >= 1) {
            return val;
          }
        }
      }
      return null;
    },

    /**
     * get mockdata query
     * @param config
     * @param name
     * @returns {string}
     */
    getMockQuery: function(config, name) {
      const url = encodeURI(config.url);
      const qn = ns.base.getQuery(url, name);
      return decodeURI(decodeURI(qn));
    },

    /**
     * stop propagation
     * @param e
     */
    stopPropagation: function(e) {
      if (e && e.stopPropagation) {
        e.stopPropagation(); //W3C stop propagation
      } else {
        window.event.cancelBubble = true; //IE stop propagation
      }
    },

    /*
     * addEventListener（绑定Dom元素的监听事件）
     *
     * target：监听对象
     * type：监听函数类型，如click,mouseover
     * func：监听函数
     */
    addEventHandler: function(target, type, func) {
      if (target.addEventListener) {
        //监听IE9，谷歌和火狐
        target.addEventListener(type, func, false);
      } else if (target.attachEvent) {
        target.attachEvent('on' + type, func);
      } else {
        target['on' + type] = func;
      }
    },
    /*
     * :
     *removeEventHandler （移除Dom元素的监听事件）
     * target：监听对象
     * type：监听函数类型，如click,mouseover
     * func：监听函数
     */
    removeEventHandler: function(target, type, func) {
      if (target.removeEventListener) {
        //监听IE9，谷歌和火狐
        target.removeEventListener(type, func, false);
      } else if (target.detachEvent) {
        target.detachEvent('on' + type, func);
      } else {
        delete target['on' + type];
      }
    },

    /**
     * invert
     * @param val
     * @returns {boolean}
     */
    invert: function(val) {
      if (typeof val === 'undefined') {
        return;
      }
      return !val;
    },

    /**
     * trim 移除字符串左右空格
     * @param str
     * @returns {string}
     */
    trim: function(str) {
      if (this.judgeType(str) === 'string') {
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      } else {
        ns.error.formatError('string');
      }
    },

    // forEach method, could be shipped as part of an Object Literal/Module (支持dom元素的遍历操作)
    domForEach: function(array, callback, scope) {
      for (var i = 0; i < array.length; i++) {
        const ret = callback.call(this, array[i], i); //callback
        if (typeof ret !== 'undefined' && (ret === null || ret === false)) break;
        callback.call(scope, array[i], i); // passes back stuff we need
      }
    },

    /**
     * judge object is null or not
     * @param exp
     * @returns {boolean}
     */
    isNull: function(exp) {
      return !exp && typeof exp !== 'undefined' && exp !== 0;
    },

    /**
     * judge type accurate
     * @param value
     * @returns {*}
     */
    judgeType: function(value) {
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
    },
    /**
     * judge is a certain type
     * @param type
     * @param value
     * @returns {boolean}
     */
    isXType: function(type, value) {
      if (type && this.judgeType(type) === 'string') {
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
    },

    /**
     * judge object is empty
     * @param value
     * @returns {boolean}
     */
    isEmpty: function(value) {
      return (
        (Array.isArray(value) && value.length === 0) ||
        (Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0)
      );
    },
    /**
     * judge string contain another string
     * @param str
     * @param substr
     * @returns {boolean}
     */
    strContain: function(str, substr) {
      if (this.isXType('string', str) && this.isXType('string', substr)) {
        return str.indexOf(substr) >= 0;
      } else {
        ns.error.formatError('string');
      }
    },
    /**
     * judge string contain another string in definite place
     * @param str
     * @param substr
     * @param place       place number
     * @returns {boolean}
     */
    strContainPlace: function(str, substr, place) {
      if (this.isXType('string', str) && this.isXType('string', substr)) {
        if (this.judgeType(place) === 'number') {
          return str.indexOf(substr) === place;
        }
      } else {
        ns.error.formatError('string');
      }
    },

    /**
     * replace the specified string by something in father string
     * @param str
     * @param substr
     * @param replace
     * @returns {*|string|void|XML}
     */
    delsubstr: function(str, substr, replace) {
      if (this.isXType('string', str) && this.isXType('string', substr)) {
        const reg = new RegExp(substr, 'g');
        return typeof replace === 'undefined' ? str.replace(reg, '') : str.replace(reg, replace);
      } else {
        ns.error.formatError('string');
      }
    },

    /**
     * judge array contain another Obj
     * @param arr
     * @param obj
     * @returns {boolean}
     */
    arrContainObj: function(arr, obj) {
      if (this.judgeType(arr) === 'array') {
        let i = arr.length;
        while (i--) {
          if (arr[i] === obj) {
            return true;
          }
        }
        return false;
      } else {
        ns.error.formatError('array');
      }
    },

    /**
     * judge array contain another array
     * @param A
     * @param a
     * @returns {boolean}
     */
    arrContainArr: function(A, a) {
      if (this.isXType('array', A) && this.isXType('array', a)) {
        if (!(A instanceof Array) || !(a instanceof Array)) return false;
        if (A.length < a.length) return false;
        var aStr = A.toString();
        for (var i = 0, len = a.length; i < len; i++) {
          if (aStr.indexOf(a[i]) === -1) return false;
        }
        return true;
      } else {
        return false;
      }
    },
    /**
     * is variable Exitsed
     * @param variableName
     * @returns {boolean}
     */
    isExitsVariable: function(variableName) {
      try {
        const type = ns.base.judgeType(variableName);
        if (type === 'undefined' || type === 'null') {
          return false;
        } else {
          return true;
        }
      } catch (e) {}
      return false;
    },

    /**
     * judge two object value equal
     * @param a
     * @param b
     * @returns {boolean}
     */
    isObjectValEqual: function(a, b) {
      // Of course, we can do it use for in Create arrays of property names
      const aProps = Object.getOwnPropertyNames(a);
      const bProps = Object.getOwnPropertyNames(b);
      // If number of properties is different, objects are not equivalent
      if (aProps.length !== bProps.length) {
        return false;
      }
      for (let i = 0; i < aProps.length; i++) {
        const propName = aProps[i];
        // If values of same property are not equal, objects are not equivalent
        if (a[propName] !== b[propName]) {
          return false;
        }
      }
      // If we made it this far, objects are considered equivalent
      return true;
    },

    /**
     * isEqual
     * @param a
     * @param b
     * @param aStack
     * @param bStack
     * @returns {boolean}
     */
    isEqual(a, b, aStack, bStack) {
      if (a === b) return a !== 0 || 1 / a === 1 / b;
      if (a == null || b == null) return false;
      if (a !== a) return b !== b;
      let type = typeof a;
      if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;

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
              ns.base.isXType('function', aCtor) &&
              aCtor instanceof aCtor &&
              (ns.base.isXType('function', bCtor) && bCtor instanceof bCtor) &&
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
            if (!ns.base.isEqual(a[length], b[length], aStack, bStack)) return false;
          }
        } else {
          let keys = Object.keys(a),
            key;
          length = keys.length;
          if (Object.keys(b).length !== length) return false;
          while (length--) {
            key = keys[length];
            if (!(b.hasOwnProperty(key) && ns.base.isEqual(a[key], b[key], aStack, bStack)))
              return false;
          }
        }
        aStack.pop();
        bStack.pop();
        return true;
      }

      return _deepEq(a, b, aStack, bStack);
    },

    /**
     * hasClass
     * @param elements
     * @param cName
     * @returns {boolean}
     */
    hasClass: function(elements, cName) {
      return !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)')); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
    },
    /**
     * add class
     * @param elements
     * @param cName
     */
    addClass: function(elements, cName) {
      if (!this.hasClass(elements, cName)) {
        elements.className += ' ' + cName;
      }
    },

    /**
     * remove class
     * @param elements
     * @param cName
     */
    removeClass: function(elements, cName) {
      if (this.hasClass(elements, cName)) {
        elements.className = elements.className.replace(
          new RegExp('(\\s|^)' + cName + '(\\s|$)'),
          ' '
        ); // replace方法是替换
      }
    },

    /**
     * deep clone
     * @param data
     * @returns {{}}
     */
    deepClone: function(data) {
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
          const type = ns.base.judgeType(_data[key]);
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
    },

    /**
     * debounce
     * @param func
     * @param wait
     * @param immediate
     * @returns {Function}
     */
    debounce: function(func, wait, immediate) {
      let timeout, args, context, timestamp, result;

      const later = function() {
        const last = +new Date() - timestamp;
        if (last < wait && last > 0) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) {
            result = func.apply(context, args);
            if (!timeout) context = args = null;
          }
        }
      };
      return function(...args) {
        context = this;
        timestamp = +new Date();
        const callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
          result = func.apply(context, args);
          context = args = null;
        }
        return result;
      };
    },

    /**
     * GetFieldValues (get value in field)
     * @param Object
     * @param key
     * @returns {*}
     * @constructor
     */
    GetFieldValues: function(Object, key) {
      if (Object.hasOwnProperty(key)) {
        return Object[key];
      } else {
        return null;
      }
    },

    /**
     * go through the DOM tag and to find it'area-linkage parent tag whitch has contains the specified class name ，
     * to add or remove the specified class for it
     * @param obj             dom tag
     * @param handle          handle-type
     * @param containsclass   base classname / contains classname
     * @param handleclass     add / remove classnme
     */
    findParentToHandleClass: function(obj, handle, containsclass, handleclass) {
      let OBJ = obj;
      let i = 0;
      do {
        if (OBJ) {
          if (OBJ.classList.contains(containsclass)) {
            if (handle === 'add') {
              OBJ.classList.add(handleclass);
            } else {
              OBJ.classList.remove(handleclass);
            }
            break;
          } else {
            OBJ = OBJ.parentNode;
            i++;
          }
        } else {
          break;
        }
      } while (i < 99);
    },
    /**
     * check range (校验特定范围内是否所有表单元素都通过验证)
     * @param range
     * @param target
     * @returns {boolean}
     */
    checkRange: function(range, target) {
      const t = range + ' ' + target;
      const allError = document.querySelectorAll(t);
      return !allError.length > 0;
    },
    /**
     * dynamic loading
     */
    dynamicLoading: {
      css: function(path) {
        if (!path || path.length === 0) {
          throw new Error('argument "path" is required !');
        }
        let head = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
      },
      js: function(path, callback = false) {
        if (!path || path.length === 0) {
          throw new Error('argument "path" is required !');
        }
        let body = document.body;
        let script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        body.appendChild(script);
        if (!script.addEventListener) {
          //Old IE
          script.attachEvent('onload', function() {
            // script has loaded in IE 7 and 8 as well.
            callback();
          });
        } else {
          script.addEventListener('load', function() {
            // Script has loaded.
            callback();
          });
        }
      },
      /**
       * asyncJs
       * @param url
       * @param hasCallback
       * @returns {Promise}2
       */
      asyncJs: (url, hasCallback = false) => {
        return createScript(url);

        /**
         * creat script
         * @param url
         * @returns {Promise}
         */
        function createScript(url) {
          let scriptElement = document.createElement('script');
          document.body.appendChild(scriptElement);

          let promise = new Promise((resolve, reject) => {
            scriptElement.addEventListener(
              'load',
              e => {
                removeScript(scriptElement);
                if (!hasCallback) {
                  resolve(e);
                }
              },
              false
            );

            scriptElement.addEventListener(
              'error',
              e => {
                removeScript(scriptElement);
                reject(e);
              },
              false
            );

            if (hasCallback) {
              window.____callback____ = function() {
                resolve();
                window.____callback____ = null;
              };
            }
          });

          if (hasCallback) {
            url += '&callback=____callback____';
          }

          scriptElement.src = url;

          return promise;
        }

        /**
         * remove script标签
         * @param scriptElement script dom
         */
        function removeScript(scriptElement) {
          document.body.removeChild(scriptElement);
        }
      },
    },
  },
  //form function
  form: {
    checkRangeHandle: function(range) {
      const baseClass = 'ns-simple-item';
      const handleClass = 'ns-is-error';
      let r = true;
      const checkObj = document.querySelectorAll(range + ' .el-input__inner');
      ns.base.domForEach(checkObj, function(val, index) {
        if (val.value) {
          ns.base.findParentToHandleClass(val, 'remove', baseClass, handleClass);
        } else {
          ns.base.findParentToHandleClass(val, 'add', baseClass, handleClass);
          r = false;
        }
      });
      return r;
    },
    //customReset
    customReset: function(name) {
      const baseClass = 'ns-simple-item';
      const handleClass = 'ns-is-error';
      const checkObj = document.querySelectorAll(name + ' .el-input__inner');
      ns.base.domForEach(checkObj, function(val, index) {
        if (val.tagName === 'INPUT') {
          val.value = '';
        }
        // ns.base.findParentToHandleClass(val, 'remove', baseClass, handleClass);
      });
    },
  },
  format: {
    /**
     * Other formats convert to string format
     * @param val
     * @returns {*}
     * @constructor
     */
    allToString: function(val) {
      const nullText = '无';
      const getType = Object.prototype.toString.call(val);
      switch (getType) {
        case '[object Object]':
          val ? JSON.stringify(val, null, 4) : nullText;
          break;
        case '[object Boolean]':
          return val ? 'true' : 'false';
        case '[object Number]':
          return val + '';
        case '[object String]':
          return val ? (ns.base.trim(val) ? val : nullText) : nullText; //after trim space ,to judge value is existed or not
        case '[object Array]':
          return val.length > 0 ? JSON.stringify(val, null, 4) : nullText;
        default:
          return val ? val : nullText; //when value is existed ， convert to string
      }
    },
    /**
     * boolean to
     * @param item
     * @returns {string}
     */
    booleanToCN: function(item) {
      return typeof item === 'boolean' ? (item ? '是' : '否') : item;
    },
  },
  random: {
    /**
     * randomWord
     * @param randomFlag
     * @param min
     * @param max
     * @returns {string}
     */
    randomWord: function(randomFlag, min, max) {
      let str = '',
        range = min,
        arr = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'u',
          'v',
          'w',
          'x',
          'y',
          'z',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
        ];
      // random build-beifen
      if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
      }
      for (var i = 0; i < range; i++) {
        const pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
      }
      return str;
    },
  },
  //error throw
  error: {
    /**
     * throw error information
     * @param txt
     */
    throw: function(txt) {
      if (typeof txt === 'string') {
        throw txt;
      } else {
        throw 'The type of params should be string , find it ';
      }
    },
    formatError: function(format) {
      this.throw('the object of the judgment must be a ' + format + ' format ，you better find it');
    },
  },
  //log message
  log: {
    /**
     * log information style
     * @param type
     * @returns {string}
     */
    logStyle: function(type) {
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
    },
  },
  //user - handle
  user: {},
  REQUEST_JQUERY_URI: 'http://192.168.1.210:90/',
  REQUEST_VUE_URI: 'http://192.168.1.210',
};
const ns = new newsee();
export default ns;
