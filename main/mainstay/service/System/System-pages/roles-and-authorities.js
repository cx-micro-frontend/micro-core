import fetch from '../../../utils/fetch/fetch';
import { dataFilter } from '../../../utils/fetch/fetchDataType';

//表数据-获取
export function tableDataFetch(query, head) {
  dataFilter(query);
  return fetch({
    url: '/system/role/list-role',
    method: 'post',
    data: query,
    headers: head,
  });
}

//删除
export function gridDataDelete(query, head) {
  dataFilter(query);
  return fetch({
    url: '/system/role/delete-role',
    method: 'get',
    data: query,
    params: { roleid: query.roleid },
    headers: head,
  });
}
