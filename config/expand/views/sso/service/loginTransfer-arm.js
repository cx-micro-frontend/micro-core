import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';
import fetch from '@NEAP/utils/fetch/fetch';

export function getArmLoginPath() {
  return fetch({
    url: '/saml/oauth/auth',
    method: 'post',
  });
}

/**
 * 永生退出登录注销
 */
export function siamLogout() {
  return fetch({
    url: 'https://sso-uat.ysservice.com.cn/siam/logout?service=http://arm-test.ysservice.com.cn',
    method: 'post',
  });
}
