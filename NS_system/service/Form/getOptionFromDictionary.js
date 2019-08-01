/*
 * login-fetch for login
 * created: 2017/12/21.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
import { dataFilter } from '@NEAP/mainstay/utils/fetch/fetchDataType';
import fetch from '@NEAP/mainstay/utils/fetch/fetch';

//base request data for dictionary
const baseQuery = {
  companyId: 2,
  departmentId: 0,
  organizationId: 3,
  dictionaryitemDictionaryId: '',
  filterList: [],
  pageNum: 1,
  pageSize: 10,
  orderBy: '',
  orderFieldName: '',
  mainSearch: '',
  filterConditions: [],
  otherConditions: {},
  size: '',
  treeConditions: [{ comparison: 'LIKE', fieldName: 'path', fieldValue: '/', type: 'text' }],
  dictionaryGroupId: '',
};

/**
 * get options from dictionary
 * @param url
 * @param query
 * @param original
 */
export function getOptionFromDictionary(url, query, original) {
  if (original) {
    baseQuery.dictionaryitemDictionaryId = query.dictionaryitemDictionaryId || '';
    baseQuery.dictionaryGroupId = query.dictionaryGroupId || '';
    dataFilter(baseQuery);
  } else {
    dataFilter(query);
  }

  //fetch out
  return fetch({
    url: url,
    method: 'post',
    data: original ? baseQuery : query,
    params: {
      dictionaryitemDictionaryId: query.dictionaryitemDictionaryId,
      dictionaryGroupId: query.dictionaryGroupId,
    },
  });
}
