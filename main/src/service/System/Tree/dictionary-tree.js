import fetch from '../../../utils/fetch/fetch';
import { dataFilter } from '../../../utils/fetch/fetchDataType';

export function treeDataFetch(query) {
  //树数据-获取
  dataFilter(query);
  return fetch({
    url: '/system/dictionary/get-dictionary-tree',
    method: 'get',
    params: query,
  });
}

export function dicGroupDetailFetch(query) {
  //数据字典组详情
  dataFilter(query);
  return fetch({
    url: '/system/dictionary/detail-dictionaryGroup',
    method: 'GET',
    params: query,
    data: query,
  });
}

export function dicDictionaryFetch(query) {
  //数据字典详情
  dataFilter(query);
  return fetch({
    url: '/system/dictionary/detail-dictionary',
    method: 'GET',
    params: query,
    data: query,
  });
}

export function deleteDictionaryFetch(query) {
  //数据字典删除
  dataFilter(query);
  return fetch({
    url: '/system/dictionary/delete-dictionary',
    method: 'GET',
    params: query,
    data: query,
  });
}

export function deleteDictionaryGroupFetch(query) {
  //数据字典组删除
  dataFilter(query);
  return fetch({
    url: '/system/dictionary/delete-dictionaryGroup',
    method: 'GET',
    params: query,
    data: query,
  });
}

//、========
export function companyAdd(query) {
  //公司-新增
  dataFilter(query);
  return fetch({
    url: '/system/organization/add-company',
    method: 'post',
    data: query,
  });
}

export function companyDetail(query) {
  //公司-详情
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

export function departmentDetail(query) {
  //部门-详情
  dataFilter(query);
  return fetch({
    url: '/system/organization/detail-organization',
    method: 'get',
    params: query,
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

export function organizeFetch(query) {
  //组织树数据-下拉
  dataFilter(query);
  return fetch({
    url: '/system/organization/get-organization-tree',
    method: 'get',
    data: query,
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

/***********************????????**************************************/
export function getInputData(query) {
  //树数据-模糊查询
  dataFilter(query);
  return fetch({
    url: '/system/organization/organization-tree-search',
    method: 'get',
    params: query,
  });
}

export function changeData(query) {
  //树数据-模糊查询后树数据变化
  dataFilter(query);
  return fetch({
    url: '/system/organization/organization-tree-search-detail',
    method: 'get',
    params: query,
  });
}
