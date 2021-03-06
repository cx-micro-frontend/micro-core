/**
 * intercept in IE < 9
 * @type {intercept}
 */
var intercept = (function() {
  function intercept() {
    this.mark = 'warning-block';
  }

  /**
   * create warning
   * @private
   */
  function _createWarning(cls) {
    var block = document.createElement('div');
    var img = document.createElement('img');

    block.setAttribute('class', cls);
    img.setAttribute('src', './static/_NEAP_STATIC/intercept/warning.png');
    img.style.cssText =
      'position: absolute;width: 460px;height: 300px;top: 50%;left: 50%;margin: -150px 0 0 -230px';

    block.appendChild(img);
    document.body.appendChild(block);
  }

  intercept.prototype.getBrowserInfo = function() {
    var userAgent = navigator.userAgent;
    var info = {};

    if (userAgent.indexOf('Trident') > -1) {
      info.browser = 'IE';
      info.ieVer =
        userAgent.indexOf('rv:11.0') > -1
          ? 11
          : parseInt(userAgent.split(';')[1].replace(' MSIE ', ''));
    } else if (userAgent.indexOf('Chrome') > -1) {
      info.browser = 'Chrome';
    }
    return info;
  };

  intercept.prototype.check = function() {
    var browserInfo = this.getBrowserInfo();

    // alert(browserInfo.browser);
    // alert(browserInfo.ieVer);

    switch (browserInfo.browser) {
      case 'IE':
        if (browserInfo.ieVer < 9) {
          _createWarning(this.mark);
          // alert('您的浏览器版本过低，请升级浏览器或切换非兼容模式');
        }
        break;
      case 'Chrome':
        // _createWarning(this.mark);
        break;
      default:
        break;
    }
  };
  return intercept;
})();

var Intercept = new intercept();

Intercept.check();
