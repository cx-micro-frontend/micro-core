/*
 * login-fetch for login
 * created: 2017/9/30.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
import {dataFilter} from '@NEAP/mainstay/utils/fetch/fetchDataType';
import fetch from '@NEAP/mainstay/utils/fetch/fetch';

/**
 * auto-form
 * @param url
 * @param head
 * @param query
 */
export function autoForm(url, head, query) {
  //Filter data
  dataFilter(head);
  dataFilter(query);
  //fetch out
  return fetch({
    // url: "/owner/customer/init-form",
    url: url,
    method: 'get',
    params: query,
    // data: null,
    headers: head,
  });
}

/**
 * auto-form submit
 * @param url
 * @param query
 */
export function autoFormSubmit(url, query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: url,
    method: 'post',
    data: query,
  });
}


/**
 * get select option
 * @param url
 * @param query
 * @param method
 */
export function getsSelectOption(url, query, method) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: url,
    method: method || 'get',
    params: query,
  });
}


/**
 * get select value and tree model data
 * @param url
 * @param query
 */
export function getCheckboxTreSelectInitShowData(url, query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: url,
    method: 'POST',
    data: query,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}


/**
 * get authorizer list （ 获取某个组织下的所有员工（授权人）列表 ）
 */
export function getAuthorizerList(params) {
  //fetch out
  return fetch({
    url: '/system/user/list-user-by-organizationId',
    method: 'get',
    params: params,
  });
}


/**
 * edit roleg-roup （新增/编辑角色组）
 * @param query        {rolecategoryId:xx,rolecategoryName:'xx'}
 */
export function editAddRoleGroup(query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: '/system/role/save-role-category',
    method: 'post',
    data: query,
  });
}

/**
 * edit roleg-roup （删除角色组）
 * @param params       {rolecategoryId:xx}
 */
export function delRoleGroup(params) {
  //Filter data
  dataFilter(params);
  //fetch out
  return fetch({
    url: '/system/role/delete-role-category',
    method: 'get',
    params: params,
  });
}

/**
 * roleg-roup list（角色组列表）
 * @param params     {organizationId:xx}
 */
export function roleGroupList(params) {
  //Filter data
  dataFilter(params);
  //fetch out
  return fetch({
    url: '/system/role/list-role-category',
    method: 'get',
    params: params,
  });
}

/**
 * roleg-roup list（角色组详情）
 * @param params    {rolecategoryId:xx}
 */
export function roleGroupInfo(params) {
  //Filter data
  dataFilter(params);
  //fetch out
  return fetch({
    url: '/system/role/detail-role-category',
    method: 'get',
    params: params,
  });
}


/**
 * get user role func-button （获取当前用户的功能菜单按钮）
 */
export function getRoleFuncButton() {
  //fetch out
  return fetch({
    url: '/system/permission/list-menu-button',
    method: 'get',
    params: null,
  });
}




