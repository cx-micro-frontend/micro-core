import fetch from '../../../utils/fetch/fetch';
import { dataFilter } from '../../../utils/fetch/fetchDataType';

/**
 * filterFetch
 * @param query
 */
export function filterFetch(query) {
  //筛选器数据获取
  dataFilter(query);
  return fetch({
    url: '/log/filter/list-filter',
    method: 'get',
    headers: {
      appId: '07d8737811434732',
      appClientType: 'pc',
      funcId: query.funcId,
    },
  });
}

/**
 * filterFns
 * @param query
 */
export function filterFns(query) {
  //筛选器数据操作
  dataFilter(query);
  return fetch({
    url: '/log/filter/edit',
    method: 'post',
    data: query.conditions,
    headers: {
      appId: '07d8737811434732',
      appClientType: 'pc',
      funcId: query.funcId,
    },
  });
}



export function getItems(query) {
  //筛选器数据获取
  dataFilter(query);
  return fetch({
    url: query.url,
    method: 'get',
  });
}
