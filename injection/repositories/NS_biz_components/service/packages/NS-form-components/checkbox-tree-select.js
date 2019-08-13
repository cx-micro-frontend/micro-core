/*
 * role group fetch ( 角色与权限 => 角色组下拉框组件 )
 * created: 2018/1/03.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';
import fetch from '@NEAP/utils/fetch/fetch';

/**
 * get select value and tree model data
 * @param url
 * @param query
 */
export function getInitShowData(url, query) {
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
