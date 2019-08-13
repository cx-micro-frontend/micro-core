import fetch from '@NEAP/utils/fetch/fetch';
import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';

/**
 * 房产树的获取
 * @param query
 */
export function treeDataFetch(query) {
  dataFilter(query);
  return fetch({
    // url: '/owner/owner-rest/house/house-tree-search-detail',
    url: '/owner/owner-rest/house/house-tree',
    method: 'get',
    params: query,
  });
}


// houseId 的房产树获取
export function treeDataFetchDetail(query) {
  dataFilter(query);
  return fetch({
    url: '/owner/owner-rest/house/house-tree-search-detail',
    method: 'get',
    params: query,
  });
}

/**
 *  房产树 子节点获取
 * */
export  function treeChildrenDataFetch(query) {
  dataFilter(query);
  return fetch({
    url: '/owner/owner-rest/house/house-child-tree',
    method: 'get',
    params: query,
  });
}


/**
 *  房产树 节点的删除
 * */
export function deleteHouseNode(query) {
  //房产树数据-删除
  dataFilter(query);
  return fetch({
    url: '/owner/owner-rest/house/delete-house',
    method: 'post',
    params: query,
  });
}


/**
 *
 * @param query
 */
export function getHouseForm(query){
  //房产树数据-表单获取
  dataFilter(query);
  return fetch({
    url: '/owner/owner-rest/house/detail-field',
    method: 'get',
    params: query,
  });
}

export function getHouseDetail(query) {
  //房产树数据-详情
  dataFilter(query);
  return fetch({
    url: '/owner/owner-rest/house/detail',
    method: 'post',
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

export function getPrecincts(query) {
  //树数据-模糊查询后树数据变化
  dataFilter(query);
  return fetch({
    url: 'owner/owner-rest/get-precincts',
    method: 'get',
    params: query,
  });
}
