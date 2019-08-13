import fetch from '@NEAP/utils/fetch/fetch';
import {dataFilter} from '@NEAP/utils/fetch/fetchDataType';

/**
 * 表头请求
 * @param head
 */
export function listColumnService(head) {
  dataFilter(head);
  return fetch({
    url: '/system/column/list-column',
    method: 'get',
    headers: head,
  });
}


