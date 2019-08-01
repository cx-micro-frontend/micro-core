/*
 * role group fetch ( 角色与权限 => 角色组下拉框组件 )
 * created: 2018/1/03.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
import { dataFilter } from '@NEAP/mainstay/utils/fetch/fetchDataType';
import fetch from '@NEAP/mainstay/utils/fetch/fetch';

/**
 * get init organization tree data（ 获取初始树组件数据 ）
 * @param url
 * @param params
 */
export function getInitTreeData(url, params) {
  //Filter data
  dataFilter(params);
  //fetch out
  return fetch({
    url: url,
    method: 'get',
    params: params,
  });
}

/**
 * get child organization tree data（ 按需获取树子节点数据 ）
 * @param url
 * @param params
 */
export function getChildTreeData(url, params) {
  //Filter data
  dataFilter(params);
  //fetch out
  return fetch({
    url: url,
    method: 'get',
    params: params,
  });
}
