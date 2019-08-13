/*
 * role group fetch ( 角色与权限  )
 * created: 2018/1/08.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';
import fetch from '@NEAP/utils/fetch/fetch';

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
