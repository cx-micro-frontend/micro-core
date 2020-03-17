import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';
import fetch from '@NEAP/utils/fetch/fetch';

//机构信息
export function getOrgInfo() {
  return fetch({
    url: '/elderly/care/statistics/orgInfo',
    method: 'get',
  });
}

//获取基础长者数据
export function getBase() {
  return fetch({
    url: '/elderly/profile/elderStatistics/base',
    method: 'get',
  });
}

//今日动态
export function getTodayDynamic() {
  return fetch({
    url: '/elderly/care/statistics/todayDynamic',
    method: 'get',
  });
}

//本月生日
export function getBirthday(query) {
  dataFilter(query);
  return fetch({
    url: '/elderly/profile/elderStatistics/birthday',
    method: 'get',
    params: query,
  });
}
