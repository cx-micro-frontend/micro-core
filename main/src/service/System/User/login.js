import qs from 'querystring';
import fetch from '@FETCH/fetch';
import { dataFilter } from '@FETCH/fetchDataType';
import { getUrlParam } from '../../../utils/library/urlhandle';

/**
 * isMultipleEnterprise 检测是否是多企业账号
 * @param query
 */
// export const isMultipleEnterprise = query => {
//   // Filter data
//   dataFilter(query);
//   // fetch out
//   return fetch({
//     url: '/oauth/oauth/query-user-enterprise',
//     method: 'get',
//     params: query,
//   });
// };

/**
 * isMultipleEnterprise 检测是否是多企业账号
 * @param query
 */
export const isMultipleEnterprise = query => {
  // Filter data
  dataFilter(query);
  // fetch out
  return fetch({
    url: '/oauth/oauth/query-user-enterprise',
    method: 'post', //改为 post
    data: query,
    headers: {
      noAuth: true,
    },
    transformRequest: [
      function(data) {
        data = qs.stringify(data);
        return data;
      },
    ],
  });
};

/**
 * login 单户
 * @param query
 */
export const oauthlogin = query => {
  dataFilter(query);
  return fetch({
    url: '/oauth/login',
    method: 'post',
    data: query,
    headers: {
      noAuth: true,
    },
    transformRequest: [
      function(data) {
        data = qs.stringify(data);
        return data;
      },
    ],
  });
};

/**
 *  多户登录
 * @param query
 */
export const multipleEnterpriseLogin = query => {
  dataFilter(query);
  // fetch out
  return fetch({
    url: '/oauth/mutil-enterprise-login',
    method: 'post',
    data: query,
    params: query,
  });
};

/**
 *  单点登录
 * @param query
 * {
 *  token:xxxx
 *  srcSys:saas / v8
 * }
 */
export const ssoLogin = query => {
  dataFilter(query);
  // fetch out
  return fetch({
    url: '/oauth/sso',
    method: 'post',
    headers: {
      //这里需要注意的是： appclientType / appid  大小写有误，只能将错就错，对于取值有变化，需要注意。
      appId: getUrlParam('appid') || '07d8737811434732',
      appClientType: getUrlParam('appclientType') || 'pc',
    },
    data: query,
    params: query,
  });
};

/**
 * user logout
 */
export const logout = () => {
  //fetch out
  return fetch({
    url: '/oauth/oauth/logout',
    method: 'post',
  });
};

/**
 * get captchas - 后去登录验证码图片
 * @param uuid
 * @returns {*}
 */
export const getCaptchas = uuid => {
  //fetch out
  return fetch({
    // url: `/oauth/oauth/captchas?uuid=${uuid}`,
    url: `/oauth/oauth/captchas/${uuid}`,
    method: 'get',
  });
};
