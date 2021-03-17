import fetch from '../utils/fetch/fetch';
import { dataFilter } from '../utils/fetch/fetchDataType';
import $store from '../store/index';

// let formName = null;
const { formName } = $store.getters.currentPageInfo || {};

/**
 * 获取表单模板 和 其他信息
 * @param context
 */
export function getForm(context) {
  const { appCode } = context; //appCode:应用编码;
  return fetch({
    url: `/${appCode}/base/getFormInfo`,
    method: 'get',
  });
}

/**
 * 新增
 * @param context
 * @param query
 */
export function addItem(context, query) {
  dataFilter(query);
  const { appCode } = context; //appCode:应用编码;
  return fetch({
    url: `/${appCode}/${formName}/add-${formName}`,
    method: 'post',
    data: query,
  });
}

/**
 * 编辑
 * @param context
 * @param query
 */
export function editItem(context, query) {
  dataFilter(query);
  const { appCode } = context; //appCode:应用编码;
  return fetch({
    url: `/${appCode}/${formName}/edit-${formName}`,
    method: 'post',
    data: query,
  });
}

/**
 * 删除
 * @param context
 * @param id
 */
export function deleteItem(context, id) {
  dataFilter(id);
  const { appCode } = context; //appCode:应用编码;
  return fetch({
    url: `/${appCode}/${formName}/delete-${formName}?id=${id}`,
    method: 'delete',
  });
}

/**
 * 批量删除
 * @param context
 * @param query
 */
export function batchDelete(context, query) {
  dataFilter(query);
  const { appCode } = context; //appCode:应用编码;
  return fetch({
    url: `/${appCode}/${formName}/delete-${formName}-batch`,
    method: 'delete',
    data: query,
  });
}

/**
 * 获取详情
 * @param context
 * @param params
 */
export function detailItem(context, params) {
  dataFilter(params);
  const { appCode } = context; //appCode:应用编码;
  return fetch({
    url: `/${appCode}/${formName}/detail-${formName}`,
    method: 'get',
    params: params,
  });
}

/**
 * table data fetch
 * @param context
 * @param data - url / query / head - funcId
 */
export const tableDataFetch = (context, data) => {
  dataFilter(data);
  const { appCode } = context; //appCode:应用编码;
  return fetch({
    url: data.url || `/${appCode}/${formName}/list-${formName}`,
    method: data.method || 'post',
    headers: {
      funcId: data.funcId,
      interceptorType: true, //当前页面是第二次进来的情况 && searchConditions 对象没有发生变化（用户没有操作分页或者更改任何查询条件）
    },
    data: data.query,
    params: data.method === 'get' ? data.query : data.params,
  });
};

//===============================================================

/***
 * 获取树节点，一次性加载
 * @param context
 */
export function treeDataFetchAll(context) {
  const { appCode, treeCode } = context; //appCode:应用编码;treeCode:树组件code id
  return fetch({
    url: `/${appCode}/${treeCode}/getTreeInfo`,
    method: 'get',
  });
}

/***
 * 获取树节点，按需加载
 * @param context
 * @param params
 */
export function treeDataFetchByLazy(context, params) {
  dataFilter(params);
  const { appCode, treeCode } = context; //appCode:应用编码;treeCode:树组件code id
  return fetch({
    url: `/${appCode}/${treeCode}/getTreeInfoByLazy`,
    method: 'get',
    params,
  });
}

/**
 * 增加树节点
 * @param context
 * @param data
 */
export function treeNodeAdd(context, data) {
  dataFilter(data);
  const { appCode, treeCode } = context; //appCode:应用编码;treeCode:树组件code id
  return fetch({
    url: `/${appCode}/${treeCode}/addNode`,
    method: 'post',
    data,
  });
}

/**
 * 更新树节点
 * @param context
 * @param data
 */
export function treeNodeUpdate(context, data) {
  dataFilter(data);
  const { appCode, treeCode } = context; //appCode:应用编码;treeCode:树组件code id
  return fetch({
    url: `/${appCode}/${treeCode}/updateNode`,
    method: 'post',
    data,
  });
}

/**
 * 删除树节点
 * @param context
 * @param params
 */
export function treeNodeDelete(context, params) {
  dataFilter(params);
  const { appCode, treeCode } = context; //appCode:应用编码;treeCode:树组件code id
  return fetch({
    url: `/${appCode}/${treeCode}/deleteNode`,
    method: 'delete',
    params: params,
  });
}

/**
 * 拖拉dragNode
 * @param context
 * @param data
 */
export function treeNodeDrag(context, data) {
  dataFilter(data);
  const { appCode, treeCode } = context; //appCode:应用编码;treeCode:树组件code id
  return fetch({
    url: `/${appCode}/${treeCode}/dragNode`,
    method: 'post',
    data,
  });
}
