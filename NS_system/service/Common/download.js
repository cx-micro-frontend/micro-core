import { dataFilter } from '@NEAP/mainstay/utils/fetch/fetchDataType';
import fetch from '@NEAP/mainstay/utils/fetch/fetch';

/**
 * download Excel for each modules pages
 * @param query - searchConditions
 */
export function downloadExcel(url, parmas) {
  //Filter data
  dataFilter(parmas);
  //fetch out
  return fetch({
    url:  url,
    method: 'post',
    data: parmas,
    responseType: 'blob',
  });
}
