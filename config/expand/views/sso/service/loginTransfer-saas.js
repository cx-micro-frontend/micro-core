import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';
import fetch from '@NEAP/utils/fetch/fetch';

export function mutilLogin(query) {
  dataFilter(query);
  return fetch({
    url: '/oauth/mutil-enterprise-login',
    method: 'post',
    data: query,
    params: query,
  });
}
export function mutilLoginTwo(query) {
  dataFilter(query);
  return fetch({
    url: '/soss/productOrder/query-isBuyProduct',
    method: 'post',
    params: query,
  });
}
