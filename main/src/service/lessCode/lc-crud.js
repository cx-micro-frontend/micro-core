import $store from '../../store';
import fetch from '../../utils/fetch/fetch';
import { dataFilter } from '../../utils/fetch/fetchDataType';

/**
 * 获取 表单json渲染模板 和 其他信息（dialog 尺寸） 的接口
 * @param context
 */
export function getForm(context) {
  // const { appCode } = context; //appCode:应用编码;

  const appCode = 'nlcpd'; //后续要改成  system

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
  const { formName } = $store.getters.currentPageInfo || {}; //菜单 所对应的 数据库表 名称
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
  const { formName } = $store.getters.currentPageInfo || {}; //菜单 所对应的 数据库表 名称
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
  const { formName } = $store.getters.currentPageInfo || {}; //菜单 所对应的 数据库表 名称
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
  const { formName } = $store.getters.currentPageInfo || {}; //菜单 所对应的 数据库表 名称
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
  const { formName } = $store.getters.currentPageInfo || {}; //菜单 所对应的 数据库表 名称
  const { appCode } = context; //appCode:应用编码;
  return fetch({
    url: `/${appCode}/${formName}/detail-${formName}`,
    method: 'get',
    params: params,
  });
}
