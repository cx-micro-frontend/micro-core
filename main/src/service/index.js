import fetch from '../utils/fetch/fetch';
import { dataFilter } from '../utils/fetch/fetchDataType';
import $store from '../store/index';

// let formName = null;
const { formName } = $store.getters.currentPageInfo || {};

/**
 * 获取表单模板 和 其他信息
 */
export function getForm() {
  return fetch({
    url: '/nlcpd/base/getFormInfo',
    method: 'get',
  });
}

/**
 * 新增
 * @param query
 */
export function addItem(query) {
  dataFilter(query);
  return fetch({
    url: `/nlcpd/${formName}/add-${formName}`,
    method: 'post',
    data: query,
  });
}

/**
 * 编辑
 * @param query
 */
export function editItem(query) {
  dataFilter(query);
  return fetch({
    url: `/nlcpd/${formName}/edit-${formName}`,
    method: 'post',
    data: query,
  });
}

/**
 * 删除
 * @param id
 */
export function deleteItem(id) {
  dataFilter(id);
  return fetch({
    url: `/nlcpd/${formName}/delete-${formName}?id=${id}`,
    method: 'delete',
  });
}

/**
 * 批量删除
 * @param query
 */
export function batchDelete(query) {
  dataFilter(query);
  return fetch({
    url: `/nlcpd/${formName}/delete-${formName}-batch`,
    method: 'delete',
    data: query,
  });
}

/**
 * 获取详情
 * @param params
 */
export function detailItem(params) {
  dataFilter(params);
  return fetch({
    url: `/nlcpd/${formName}/detail-${formName}`,
    method: 'get',
    params: params,
  });
}

/**
 * table data fetch
 * @param data - url / query / head - funcId
 */
export const tableDataFetch = data => {
  dataFilter(data);
  return fetch({
    url: data.url || `/nlcpd/${formName}/list-${formName}`,
    method: data.method || 'post',
    headers: {
      funcId: data.funcId,
      interceptorType: true, //当前页面是第二次进来的情况 && searchConditions 对象没有发生变化（用户没有操作分页或者更改任何查询条件）
    },
    data: data.query,
    params: data.method === 'get' ? data.query : data.params,
  });
};
