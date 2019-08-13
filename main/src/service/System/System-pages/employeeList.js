import fetch from '../../../utils/fetch/fetch';
import { dataFilter } from '../../../utils/fetch/fetchDataType';

export function gridDataDelete(query) {
  //删除
  dataFilter(query);
  return fetch({
    url: '/system/user/delete-user',
    method: 'get',
    data: query,
    params: { userId: query.userId },
  });
}

export function gridDataOperate(query) {
  //修改
  dataFilter(query);
  return fetch({
    url: '/system/user/modify-user',
    method: 'get',
    data: query,
    params: { userId: query.userId, operateType: query.operateType },
  });
}


/**
 * 员工角色数据-获取
 */
export function getEmployeeRole(query) {
  dataFilter(query);
  return fetch({
    url: '/system/role/list-role-group-by-Category',
    method: 'get',
    params: query,
  });
}

/**
 * 表单数据-获取（add/edit）
 */
export function getDocumentType(query) {
  dataFilter(query);
  let url =
    query.userId !== undefined
      ? '/system/user/detail-user?userId=' + query.userId
      : '/system/user/init-form';
  return fetch({
    url: url,
    method: 'get',
    params: query.conditions,
    headers: {
      funcId: query.funcId,
    },
  });
}

/**
 * 提交新增员工表单
 */
export function submitFormData(query) {
  const url = query.type === 'edit' ? '/system/user/edit-user' : '/system/user/add-user';
  dataFilter(query);
  return fetch({
    url: url,
    method: 'post',
    data: query,
  });
}

