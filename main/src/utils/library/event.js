/**
 * addEventListener（绑定Dom元素的监听事件）
 * @param target  监听对象
 * @param type    监听函数类型，如 click,mouseover
 * @param func    监听函数
 */

export const addEventHandler = (target, type, func) => {
  if (target.addEventListener) {
    target.addEventListener(type, func, false);
  } else if (target.attachEvent) {
    target.attachEvent('on' + type, func);
  } else {
    target['on' + type] = func;
  }
};

/**
 * removeEventHandler （移除Dom元素的监听事件）
 * target：监听对象
 * type：监听函数类型，如click,mouseover
 * func：监听函数
 */

export const removeEventHandler = (target, type, func) => {
  if (target.removeEventListener) {
    target.removeEventListener(type, func, false);
  } else if (target.detachEvent) {
    target.detachEvent('on' + type, func);
  } else {
    delete target['on' + type];
  }
};

/**
 * stop propagation
 * @param e
 */
export const stopPropagation = e => {
  if (e && e.stopPropagation) {
    e.stopPropagation(); //W3C stop propagation
  } else {
    window.event.cancelBubble = true; //IE stop propagation
  }
};

/**
 * debounce
 * @param func
 * @param wait
 * @param immediate
 * @returns {Function}
 */
export const debounce = (func, wait, immediate) => {
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
};
