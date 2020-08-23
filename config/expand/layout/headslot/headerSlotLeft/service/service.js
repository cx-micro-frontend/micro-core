import fetch from '@NEAP/utils/fetch/fetch';
import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';

export function getPrecincts(query) {
  // 概览数据-获取
  // dataFilter(head);
  dataFilter(query);
  return fetch({
    url: '/owner/owner-rest/get-precincts',
    method: 'get',
    // headers: head,
    params: query,
  });
}
