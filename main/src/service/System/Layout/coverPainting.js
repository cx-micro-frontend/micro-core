import fetch from '../../../utils/fetch/fetch';
import { dataFilter } from '../../../utils/fetch/fetchDataType';

/**
 * get operator info
 * @param query
 */
export function getOperatorInfo(query) {
  // Filter data
  dataFilter(query);
  // fetch out
  return fetch({
    url: '/system/site/get-operatorInfoById',
    method: 'get',
    params: query,
  });
}

/**
 * user logout
 */
export const updateThemeColor = query => {
  //fetch out
  dataFilter(query);
  return fetch({
    url: '/system/user/update-themeColor',
    method: 'post',
    params: query,
  });
};
