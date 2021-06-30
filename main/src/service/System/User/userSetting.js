import fetch from '@FETCH/fetch';
import { dataFilter } from '@FETCH/fetchDataType';
import qs from 'querystring';

/**
 * 获取员工的基本信息
 * @param param
 */
export function getUserInfo(param) {
  //Filter data
  dataFilter(param);
  //fetch out
  return fetch({
    url: '/system/lcinfo/user-info',
    method: 'get',
    params: param,
  });
}

/**
 * 更新密码
 * @param param
 */
export function updatePassword(param) {
  //Filter data
  dataFilter(param);
  //fetch out
  return fetch({
    url: '/oauth/oauth/update-password',
    method: 'post',
    data: param,
    transformRequest: [
      function(data) {
        data = qs.stringify(data);
        return data;
      },
    ],
  });
}
