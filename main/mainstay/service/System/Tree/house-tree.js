import fetch from '../../../utils/fetch/fetch';
import { dataFilter } from '../../../utils/fetch/fetchDataType';

/**
 * 房产树的获取
 * @param query
 */
export function treeDataFetch(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/get-organization-tree',
    method: 'get',
    params: query,
  });
}

export function changeTreeData(query) {
  //树数据-模糊查询后树数据变化
  dataFilter(query);
  return fetch({
    url: '/system/organization/organization-tree-search-detail',
    method: 'get',
    params: query,
  });
}

export function getSearchData(query) {
  //树数据-模糊查询后树数据变化
  dataFilter(query);
  return fetch({
    url: '/owner/owner-rest/house/house-tree-search',
    method: 'get',
    params: query,
  });
}

