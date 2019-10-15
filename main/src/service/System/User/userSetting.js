import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';
import fetch from '@NEAP/utils/fetch/fetch';
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

/**
 * 编辑活动
 * @param param
 */
export function editActivity(param) {
  //Filter data
  dataFilter(param);
  //fetch out
  return fetch({
    url: '/property-service/property-rest/rest/notice/edit',
    method: 'post',
    data: param,
    transformRequest: transformRequest,
  });
}

/**
 * 编辑活动
 * @param param
 */
export function delActivity(param) {
  //Filter data
  dataFilter(param);
  //fetch out
  return fetch({
    url: '/property-service/property-rest/rest/notice/delete',
    method: 'get',
    params: param,
  });
}

/**
 * 发送短信
 * @param param
 */
export function sendMessage(param) {
  //Filter data
  dataFilter(param);
  //fetch out
  return fetch({
    url: '/property-service/property-rest/rest/notice/resendApplyCode',
    method: 'post',
    params: param,
    transformRequest: transformRequest,
  });
}
