let lock = true;
let el = null;

const MousedownEvent = document.createEvent('HTMLEvents');
MousedownEvent.initEvent('mousedown', true, true);

const MouseupEvent = document.createEvent('HTMLEvents');
MouseupEvent.initEvent('mouseup', true, true);

// const MousedownEvent = new Event('mousedown', { bubbles: true });
// const MouseupEvent = new Event('mouseup', { bubbles: true });

/**
 * fakeClickOutSide
 */
const fakeClickOutSide = () => {
  document.dispatchEvent(MousedownEvent);
  document.dispatchEvent(MouseupEvent);
  lock = true; // console.log('dispatchEvent');
};
/**
 * mousedownHandle
 * @param e
 */
const mousedownHandle = e => {
  let classList = e.target.classList;
  if (classList.contains('el-select__caret') || classList.contains('el-input__inner')) {
    lock = false;
    return;
  }
  if (lock) return;
  fakeClickOutSide();
};

/**
 * mousewheelHandle
 * @param e
 */
const mousewheelHandle = e => {
  console.log(e);
  console.log(e.target);
  console.log(e.target.classList);
  console.log(e.target.parentNode.classList);
  console.log(e.target.classList.contains('el-select-dropdown__list'));
  if (
    lock ||
    e.target.classList.contains('el-select-dropdown__item') ||
    e.target.classList.contains('el-select-dropdown__list') ||
    e.target.parentNode.classList.contains('el-select-dropdown__item')
  )
    return;
  fakeClickOutSide();
};
/**
 * eventListener
 * @param type
 */
const eventListener = type => {
  el[type + 'EventListener']('mousedown', mousedownHandle);
  window[type + 'EventListener']('mousewheel', mousewheelHandle);
  window[type + 'EventListener']('DOMMouseScroll', mousewheelHandle); // fireFox 3.5+
};

export default {
  mounted() {
    // el = this.$root.$el;

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
