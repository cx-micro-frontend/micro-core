import fetch from '../../../utils/fetch/fetch';
import { dataFilter } from '../../../utils/fetch/fetchDataType';

/**
 * 组织树获取初始数据（按需获取）
 * @param query
 */
export function getOrgTreeData(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/get-orgtree-form',
    method: 'get',
    data: query,
  });
}

/**
 * 组织树 按需获取子节点数据
 * @param query
 */
export function getOrgTreeChildData(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/get-child-organization-form',
    method: 'get',
    params: query,
  });
}

// /**
//  * 一次性获取组织树所有数据 -  不按需加载
//  * @param query
//  */
// export function orgTreeDataFetch(query) {
//   dataFilter(query);
//   return fetch({
//     url: '/system/organization/get-organization-tree',
//     method: 'get',
//     params: query,
//   });
// }

//公司-新增
export function companyAdd(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/add-company',
    method: 'post',
    data: query,
  });
}

//组织-详情
export function fetchOrgDetail(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/detail-organization',
    method: 'get',
    params: query,
  });
}

//公司-编辑
export function companyEdit(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/edit-company',
    method: 'post',
    data: query,
  });
}

//公司-删除
export function companyDelete(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/delete-organization',
    method: 'POST',
    params: query,
  });
}

//部门-新增
export function departmentAdd(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/add-department',
    method: 'post',
    data: query,
  });
}

//部门-编辑
export function departmentEdit(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/edit-department',
    method: 'post',
    data: query,
  });
}

//部门-删除
export function departmentDelete(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/delete-organization',
    method: 'POST',
    params: query,
  });
}

//公司-展开
export function treeCompanyOpen(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/get-child-organization',
    method: 'get',
    params: query,
  });
}

//部门-展开
export function treeDepartmentOpen(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/get-child-organization',
    method: 'get',
    params: query,
  });
}

//公司-展开
export function treeOpen(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/get-child-organization',
    method: 'get',
    params: query,
  });
}

//组织树数据-拖拽
export function treeDrag(query) {
  dataFilter(query);
  let datas = {
    organizationId: query.organizationId,
    organizationParentId: query.organizationParentId,
    sort: query.sort,
  };
  return fetch({
    url: '/system/organization/edit-node-sort',
    method: 'post',
    data: query.sortOrganizationIds,
    params: datas,
  });
}

//树数据-模糊查询
export function getSearchData(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/organization-tree-search',
    method: 'get',
    params: query,
  });
}

//树数据-模糊查询后树数据变化
export function changeTreeData(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/organization-tree-search-detail',
    method: 'get',
    params: query,
  });
}

//模糊查询员工
export function searchUserFetch(query) {
  dataFilter(query);
  return fetch({
    url: `/system/user/list-user-search`,
    method: 'GET',
    params: query,
  });
}

//集团-编辑
export function groupEdit(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/edit-group',
    method: 'post',
    data: query,
  });
}

//集团-编辑
export function getDetail(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/get-all-parent-name',
    method: 'GET',
    params: query,
  });
}

//自动生成简称与编号
export function autoMakeMassage(query) {
  dataFilter(query);
  return fetch({
    url: '/system/organization/generate-Dept-code-or-shotName',
    method: 'GET',
    params: query,
  });
}
