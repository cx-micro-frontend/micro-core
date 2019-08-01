import fetch from '../../../utils/fetch/fetch';
import { dataFilter } from '../../../utils/fetch/fetchDataType';

export function listColumnService(head) {
  dataFilter(head);
  return fetch({
    url: '/system/column/list-column',
    method: 'get',
    headers: head,
  });
}


/**
 * table data fetch
 * @param data - url / query / head - funcId
 */
export const tableDataFetch = data => {
  return fetch({
    url: data.url || '',
    method: data.method || 'post',
    headers: {
      funcId: data.funcId,
      interceptorType: true, //当前页面是第二次进来的情况 && searchConditions 对象没有发生变化（用户没有操作分页或者更改任何查询条件）
    },
    data: data.query,
    params: data.method === 'get'? data.query : data.params
  });
};

