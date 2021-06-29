// 扩展方法
import neapService from '@NEAP/service'; //service api
import { dataFilter } from '@FETCH/fetchDataType';
import { codeParame, lessCodeBasicFetch } from './index.js';

/**
 * 获取批量录入的表头
 * @param context:
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param context
 */
neapService.getColHeaders = function(context) {
  return lessCodeBasicFetch(codeParame(context), {
    url: `/system/field/getColHeaders`,
    method: 'get',
  });
};

/**
 * 批量新增
 * @param context:
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param query
 */
neapService.addItems = function(context, query) {
  dataFilter(query);
  const { appCode, formName } = codeParame(context);

  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${formName}/addBatch-${formName}`,
    method: 'post',
    data: query,
  });
};

/***
 * 懒加载（过滤树）  根据名称获取Node节点信息
 * @param context
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 */
neapService.getNodesByName = function(context, params) {
  const { appCode, treeCode } = codeParame(context); //appCode:应用编码;treeCode:树组件code id
  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${treeCode}/getNodesByName`,
    method: 'get',
    params,
  });
};

/***
 * 懒加载 （过滤树）   根据id 获取树
 * @param context
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 */
neapService.getNodeTreeById = function(context, params) {
  const { appCode, treeCode } = codeParame(context); //appCode:应用编码;treeCode:树组件code id
  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${treeCode}/getChildNodesById`,
    method: 'get',
    params,
  });
};

/**
 * ids 或者查询条件 批量获取数据
 * @param context:
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param query
 */
neapService.getDetailByIds = function(context, query) {
  dataFilter(query);
  const { appCode, formName } = codeParame(context);

  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${formName}/detailByIds-${formName}`,
    method: 'post',
    data: query,
  });
};
