/*==========================================================================================================================*/
import fetch from '@NEAP/utils/fetch/fetch';
import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';

export function importLogFetch(query) {
  //导入日志-列表
  dataFilter(query);
  return fetch({
    url: '/system/logs/list',
    method: 'get',
    params: query,
  });
}
