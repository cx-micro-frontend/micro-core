import fetch from '../../../utils/fetch/fetch';
import { dataFilter } from '../../../utils/fetch/fetchDataType';


export function companyAdd(query) {
  //公司-新增
  dataFilter(query);
  return fetch({
    url: '/system/organization/add-company',
    method: 'post',
    data: query,
  });
}

export function fetchOrgDetail(query) {
  //组织-详情
  dataFilter(query);
  return fetch({
    url: '/system/organization/detail-organization',
    method: 'get',
    params: query,
  });
}

export function companyEdit(query) {
  //公司-编辑
  dataFilter(query);
  return fetch({
    url: '/system/organization/edit-company',
    method: 'post',
    data: query,
  });
}

export function companyDelete(query) {
  //公司-删除
  dataFilter(query);
  return fetch({
    url: '/system/organization/delete-organization',
    method: 'POST',
    params: query,
  });
}

export function departmentAdd(query) {
  //部门-新增
  dataFilter(query);
  return fetch({
    url: '/system/organization/add-department',
    method: 'post',
    data: query,
  });
}

export function departmentEdit(query) {
  //部门-编辑
  dataFilter(query);
  return fetch({
    url: '/system/organization/edit-department',
    method: 'post',
    data: query,
  });
}

export function departmentDelete(query) {
  //部门-删除
  dataFilter(query);
  return fetch({
    url: '/system/organization/delete-organization',
    method: 'POST',
    params: query,
  });
}

export function treeDataFetch(query) {
  //组织树数据-获取
  dataFilter(query);
  return fetch({
    url: '/system/organization/get-organization-tree',
    method: 'get',
    params: query,
  });
}

export function treeCompanyOpen(query) {
  //公司-展开
  dataFilter(query);
  return fetch({
    url: '/system/organization/get-child-organization',
    method: 'get',
    params: query,
  });
}

export function treeDepartmentOpen(query) {
  //部门-展开
  dataFilter(query);
  return fetch({
    url: '/system/organization/get-child-organization',
    method: 'get',
    params: query,
  });
}

export function treeOpen(query) {
  //公司-展开
  dataFilter(query);
  return fetch({
    url: '/system/organization/get-child-organization',
    method: 'get',
    params: query,
  });
}

export function treeDrag(query) {
  //组织树数据-拖拽
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

export function getSearchData(query) {
  //树数据-模糊查询
  dataFilter(query);
  return fetch({
    url: '/system/organization/organization-tree-search',
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

export function searchUserFetch(query) {
  //模糊查询员工
  dataFilter(query);
  return fetch({
    url: `/system/user/list-user-search`,
    method: 'GET',
    params: query,
  });
}

export function groupEdit(query) {
  //集团-编辑
  dataFilter(query);
  return fetch({
    url: '/system/organization/edit-group',
    method: 'post',
    data: query,
  });
}

export function getDetail(query) {
  //集团-编辑
  dataFilter(query);
  return fetch({
    url: '/system/organization/get-all-parent-name',
    method: 'GET',
    params: query,
  });
}

export function autoMakeMassage(query) {
  //自动生成简称与编号
  dataFilter(query);
  return fetch({
    url: '/system/organization/generate-Dept-code-or-shotName',
    method: 'GET',
    params: query,
  });
}
