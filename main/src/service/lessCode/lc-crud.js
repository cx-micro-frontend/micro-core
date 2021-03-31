import { dataFilter } from '../../utils/fetch/fetchDataType';
import { codeParame, lessCodeBasicFetch } from './index';

/**
 * 获取 表单json渲染模板 和 其他信息（dialog 尺寸） 的接口
 * @param context
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 */
export function getForm(context) {
  // const { appCode } = context; //appCode:应用编码;

  const appCode = 'nlcpd'; //后续要改成  system

  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/base/getFormInfo`,
    method: 'get',
  });
}

/**
 * 新增
 * @param context:
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param query
 */
export function addItem(context, query) {
  dataFilter(query);
  const { appCode, formName } = codeParame(context);

  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${formName}/add-${formName}`,
    method: 'post',
    data: query,
  });
}

/**
 * 编辑
 * @param context:
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param query
 */
export function editItem(context, query) {
  dataFilter(query);
  const { appCode, formName } = codeParame(context);

  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${formName}/edit-${formName}`,
    method: 'post',
    data: query,
  });
}

/**
 * 删除
 * @param context:
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param id
 */
export function deleteItem(context, id) {
  dataFilter(id);
  const { appCode, formName } = codeParame(context);

  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${formName}/delete-${formName}?id=${id}`,
    method: 'delete',
  });
}

/**
 * 批量删除
 * @param context
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param query
 */
export function batchDelete(context, query) {
  dataFilter(query);
  const { appCode, formName } = codeParame(context);

  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${formName}/delete-${formName}-batch`,
    method: 'delete',
    data: query,
  });
}

/**
 * 获取详情
 * @param context
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param params
 */
export function detailItem(context, params) {
  dataFilter(params);
  const { appCode, formName } = codeParame(context);

  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${formName}/detail-${formName}`,
    method: 'get',
    params: params,
  });
}
