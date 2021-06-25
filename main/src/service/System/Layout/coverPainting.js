import fetch from '@FETCH/fetch';
import { dataFilter } from '@FETCH/fetchDataType';

/**
 * get operator info
 * @param query
 */
export function getOperatorInfo(query) {
  // Filter data
  dataFilter(query);
  // fetch out
  return fetch({
    url: 'soss/operator/get-operatorInfo', //get-operatorInfoById
    headers: {
      'cache-control': 'no-cache',
    },
    method: 'get',
    params: query,
  });
}

/**
 * get operator info - 永生单点 - 获取信息简化，去除背景
 * @param query
 */
export function getOperatorInfoSimple(query) {
  // Filter data
  dataFilter(query);
  // fetch out
  return fetch({
    url: '/soss/operator/get-logined-operatorInfo',
    method: 'get',
    params: query,
  });
}
