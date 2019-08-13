/*
 * login-fetch for login
 * created: 2017/9/30.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
import {dataFilter} from '@NEAP/utils/fetch/fetchDataType';
import fetch from '@NEAP/utils/fetch/fetch';

/**
 * auto-form
 * @param url
 * @param head
 * @param query
 */
export function autoForm(url, head, query) {
  //Filter data
  dataFilter(head);
  dataFilter(query);
  //fetch out
  return fetch({
    // url: "/owner/customer/init-form",
    url: url,
    method: 'get',
    params: query,
    // data: null,
    headers: head,
  });
}

/**
 * auto-form submit
 * @param url
 * @param query
 */
export function autoFormSubmit(url, query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: url,
    method: 'post',
    data: query,
  });
}
