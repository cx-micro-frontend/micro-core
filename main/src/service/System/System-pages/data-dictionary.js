import fetch from '../../../utils/fetch/fetch';
import { dataFilter } from '../../../utils/fetch/fetchDataType';

export function tableDataFetch(query, head) {
  //表数据-获取
  dataFilter(query);
  return fetch({
    url: '/system/dictionary/list-dictionaryItem',
    method: 'post',
    data: query,
    params: {
      dictionaryitemDictionaryId: query.dictionaryitemDictionaryId,
      dictionaryGroupId: query.dictionaryGroupId,
    },
    headers: head,
  });
}

export function gridDataDelete(query, head) {
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
