import fetch from '../../../utils/fetch/fetch';
import qs from 'querystring';
import { dataFilter } from '../../../utils/fetch/fetchDataType';

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
    method: 'get',
    params: query,
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
