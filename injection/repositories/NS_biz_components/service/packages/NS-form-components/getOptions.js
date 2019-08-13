import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';
import fetch from '@NEAP/utils/fetch/fetch';

export function getDictionaryList(query) {
  dataFilter(query);
  return fetch({
    url: '/system/dictionary/get-dictionary-list',
    method: 'post',
    data: query,
  });
}


/**
 * get select option
 * @param url
 * @param query
 * @param method
 */
export function getsSelectOption(url, query, method) {
  let fetchMethod = method || 'get';
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: url,
    method: fetchMethod,
    params: fetchMethod ==='get' ? query: {},
    data: query
  });
}

