import { dataFilter } from '@NEAP/mainstay/utils/fetch/fetchDataType';
import fetch from '@NEAP/mainstay/utils/fetch/fetch';

export function deleteDictionaryItem(query, head) {
  //删除
  dataFilter(query);
  return fetch({
    url: '/system/dictionary/delete-dictionaryItem',
    method: 'get',
    data: query,
    params: { dictionaryItemId: query.dictionaryItemId },
    headers: head,
  });
}

// 请求数据字典数据（单位类型）
export function getDictionaryData (query) {
  dataFilter(query);
  return fetch({
    url: '/system/dictionary/getDictionary',
    method: 'post',
    data: query
  });
};
