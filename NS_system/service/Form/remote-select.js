/*
 * login-fetch for login
 * created: 2017/9/30.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
import { dataFilter } from '@NEAP/mainstay/utils/fetch/fetchDataType';
import fetch from '@NEAP/mainstay/utils/fetch/fetch';

/**
 * get remote select option
 * @param url
 * @param query
 */
export function getsRemoteSelectOption(url, query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: url,
    method: 'post',
    data: query,
  });
}

/**
 * get remote select option
 * @param url
 * @param query
 */
export function getsRemoteSelect(url, query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: url,
    method: 'get',
    params: query,
  });
}
