import { dataFilter } from '../../fetch/fetchDataType';
import { lessCodeBasicFetch, codeParame } from './index';

/***
 * 获取树节点，一次性加载
 * @param context
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 */
export function treeDataFetchAll(context) {
  const { appCode, treeCode } = codeParame(context); //appCode:应用编码;treeCode:树组件code id
  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${treeCode}/getTreeInfo`,
    method: 'get',
  });
}

/***
 * 获取树节点，按需加载
 * @param context
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param params
 */
export function treeDataFetchByLazy(context, params) {
  dataFilter(params);
  const { appCode, treeCode } = codeParame(context); //appCode:应用编码;treeCode:树组件code id
  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${treeCode}/getTreeInfoByLazy`,
    method: 'get',
    params,
  });
}

/**
 * 增加树节点
 * @param context
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param data
 */
export function treeNodeAdd(context, data) {
  dataFilter(data);
  const { appCode, treeCode } = codeParame(context); //appCode:应用编码;treeCode:树组件code id
  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${treeCode}/addNode`,
    method: 'post',
    data,
  });
}

/**
 * 更新树节点
 * @param context
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param data
 */
export function treeNodeUpdate(context, data) {
  dataFilter(data);
  const { appCode, treeCode } = codeParame(context); //appCode:应用编码;treeCode:树组件code id
  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${treeCode}/updateNode`,
    method: 'post',
    data,
  });
}

/**
 * 删除树节点
 * @param context
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param params
 */
export function treeNodeDelete(context, params) {
  dataFilter(params);
  const { appCode, treeCode } = codeParame(context); //appCode:应用编码;treeCode:树组件code id
  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${treeCode}/deleteNode`,
    method: 'delete',
    params: params,
  });
}

/**
 * 拖拉dragNode
 * @param context
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param data
 */
export function treeNodeDrag(context, data) {
  dataFilter(data);
  const { appCode, treeCode } = codeParame(context); //appCode:应用编码;treeCode:树组件code id
  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${treeCode}/dragNode`,
    method: 'post',
    data,
  });
}
