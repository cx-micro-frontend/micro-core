import fetch from '@FETCH/fetch';
import { dataFilter } from '@FETCH/fetchDataType';

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
