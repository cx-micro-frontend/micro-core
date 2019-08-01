/*==========================================================================================================================*/
import fetch from '../../utils/fetch/fetch';
import { dataFilter } from '../../utils/fetch/fetchDataType';

/*==========================================================================================================================*/
export function deleteActivity(query) {
  //表数据-获取
  dataFilter(query);
  return fetch({
    url: '/o2o/activity/deleteActivity',
    method: 'post',
    data: query,
    params: query
  });
};


export function getActiveInfo(query) {
  //表数据-获取
  dataFilter(query);
  return fetch({
    url: '/o2o/activity/getActivity',
    method: 'get',
    params: query
  });
};

export function publishActivity(url, query) {
  //表数据-获取
  dataFilter(query);
  return fetch({
    url: url,
    method: 'post',
    data: query
  });
};
