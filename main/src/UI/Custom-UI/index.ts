import expand from '../../../expand';

(function(window) {
  const icon_fn = expand.UI.iconfont;
  const theme_fn = expand.UI.theme;

  //load custom iconfont
  if (icon_fn && typeof icon_fn === 'function') {
    icon_fn();
  } else {
    console.warn('【 NEAP-ERROR 】Custom iconfont injection method must be a function.');
  }

  //load custom theme style
  if (theme_fn && typeof theme_fn === 'function') {
    theme_fn();
  } else {
    console.warn('【 NEAP-ERROR 】Custom theme style injection method must be a function.');
  }
})(window);
