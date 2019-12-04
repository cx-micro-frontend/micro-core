/**
 * create Loading before loading
 */
function createLoading() {
  var loadingDom = document.createElement('img');
  loadingDom.setAttribute('src', './static/_NEAP_STATIC/loadBuffer/loading.gif');
  loadingDom.setAttribute('id', 'loadingBuffer');
  loadingDom.style.cssText =
    'position: absolute;z-index: 1; width: 80px;height: 80px;top: 50%;left: 50%;margin: -80px 0 0 -40px';
  document.body.appendChild(loadingDom);
}

//init
createLoading();

window.onload = function() {
  document.body.removeChild(document.getElementById('loadingBuffer'));
};
