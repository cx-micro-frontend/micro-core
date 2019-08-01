import { dataFilter } from '@NEAP/mainstay/utils/fetch/fetchDataType';
import fetch from '@NEAP/mainstay/utils/fetch/fetch';


//删除
export function deleteRole(query, head) {
  dataFilter(query);
  return fetch({
    url: '/system/role/delete-role',
    method: 'get',
    data: query,
    params: { roleid: query.roleid },
    headers: head,
  });
}
