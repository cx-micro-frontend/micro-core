import fetch from '../../fetch/fetch';
import { dataFilter } from '../../fetch/fetchDataType';

/**
 * bizDataExpand 业务接口数据 - 拓展
 */
export const bizDataExpand = () => {
  // Filter data
  dataFilter();
  // fetch out
  return fetch({
    url: '/system/role/getHomePageModuleRole',
    method: 'get',
  });
};
