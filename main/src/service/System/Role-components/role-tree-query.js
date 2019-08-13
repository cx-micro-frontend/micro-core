import fetch from '../../../utils/fetch/fetch';
import { dataFilter } from '../../../utils/fetch/fetchDataType';

export function getRoleTree() {
  return fetch({
    url: '/system/role/role-tree',
    method: 'get',
    // params: query,
  });
}

export function getWebsocketUrl() {
  return fetch({
    url: '/system/lcinfo/websocket-url',
    method: 'get',
  });
}
