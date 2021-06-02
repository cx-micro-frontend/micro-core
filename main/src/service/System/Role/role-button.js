import fetch from '@FETCH/fetch';
import { dataFilter } from '@FETCH/fetchDataType';

/**
 * get role button list for every web  ( 获取按钮权限列表 )
 * @param head
 */

export function roleButtonList(head) {
  //Filter data
  dataFilter(head);
  //fetch out
  return fetch({
    url: '/system/permission/list-button',
    method: 'post',
    headers: head,
  });
}
