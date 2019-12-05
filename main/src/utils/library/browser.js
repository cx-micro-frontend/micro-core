/**
 * 获取浏览器信息
 */
export const getBrowserInfo = () => {
  let info = {};
  const ua = navigator.userAgent.toLowerCase();

  let i;
  (i = ua.match(/rv:([\d.]+)\) like gecko/))
    ? (info = { browser: 'ie', version: i[1] })
    : (i = ua.match(/msie ([\d\.]+)/))
    ? (info = { browser: 'ie', version: i[1] })
    : (i = ua.match(/edge\/([\d\.]+)/))
    ? (info = { browser: 'edge', version: i[1] })
    : (i = ua.match(/firefox\/([\d\.]+)/))
    ? (info = { browser: 'firefox', version: i[1] })
    : (i = ua.match(/(?:opera|opr).([\d\.]+)/))
    ? (info = { browser: 'opera', version: i[1] })
    : (i = ua.match(/chrome\/([\d\.]+)/))
    ? (info = { browser: 'chrome', version: i[1] })
    : (i = ua.match(/version\/([\d\.]+).*safari/))
    ? (info = { browser: 'safari', version: i[1] })
    : 0;

  info.browser = info.browser || 'unkonwn';
  info.version = info.version || 'unkonwn';

  return info;
};
