import { debounce } from '../../utils/library/event';

let lock = true;
let el = null;

const MousedownEvent = document.createEvent('HTMLEvents');
MousedownEvent.initEvent('mousedown', true, true);

const MouseupEvent = document.createEvent('HTMLEvents');
MouseupEvent.initEvent('mouseup', true, true);

// const MousedownEvent = new Event('mousedown', { bubbles: true });
// const MouseupEvent = new Event('mouseup', { bubbles: true });

/**
 * 模拟 下拉框 - popover 之外点击
 * fakeClickOutSide
 */
const fakeClickOutSide = () => {
  document.dispatchEvent(MousedownEvent);
  document.dispatchEvent(MouseupEvent);
  lock = true;
};

/**
 * mousedownHandle
 * @param e
 */
const mousedownHandle = e => {
  let classList = e.target.classList;

  let checkDom = (e.path || []).some(dom => {
    let classList = dom.classList || [];
    return classList.contains('el-dropdown') || classList.contains('el-popover__reference');
  });

  //select\dropdown\popover
  lock = !(
    classList.contains('el-select__caret') ||
    classList.contains('el-input__inner') ||
    checkDom
  );
};

/**
 * 获取事件冒泡路径，兼容ie11,edge,chrome,firefox,safari
 * @param evt
 * @returns {*}
 */
function eventPath(evt) {
  const path = (evt.composedPath && evt.composedPath()) || evt.path,
    target = evt.target;

  if (path != null) {
    return path.indexOf(window) < 0 ? path.concat(window) : path;
  }

  if (target === window) {
    return [window];
  }

  function getParents(node, memo) {
    memo = memo || [];
    const parentNode = node.parentNode;

    if (!parentNode) {
      return memo;
    } else {
      return getParents(parentNode, memo.concat(parentNode));
    }
  }

  return [target].concat(getParents(target), window);
}

/**
 * mousewheelHandle
 * @param e
 */
const mousewheelHandle = e => {
  // console.log(e);
  // console.log(lock);

  if (lock) return;

  const path = eventPath(e);
  let checkPopper = (path || []).some(dom => {
    return (dom.classList || []).contains('el-popper');
  });

  if (checkPopper) return;

  fakeClickOutSide();
};

/**
 * eventListener
 * @param type
 */
const eventListener = type => {
  el[type + 'EventListener']('mousedown', mousedownHandle);
  let mouseWheel = /Firefox/i.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel';

  window[type + 'EventListener'](mouseWheel, debounce(mousewheelHandle, 500, true));
};

export default {
  mounted() {
    el = document.body;
    el.addFakeClickOutSideEventCount = el.addFakeClickOutSideEventCount || 0;
    !el.addFakeClickOutSideEventCount &&
      this.$nextTick(() => {
        eventListener('add');
      });

    el.addFakeClickOutSideEventCount += 1;
  },

  destroyed() {
    eventListener('remove');
    el.addFakeClickOutSideEventCount -= 1;
  },
};
