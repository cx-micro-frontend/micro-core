/*
 * fetch for Vue
 * created: 2018/2/10.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
/*==========================================================================================================================*/
import fetch from '../../utils/fetch/fetch';
import { dataFilter } from '../../utils/fetch/fetchDataType';

/*==========================================================================================================================*/

/**
 * download Excel
 * @param query
 */
export function download(query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: '/fastdfs/fastdfs/downloadFile',
    method: 'get',
    params: query,
    responseType: 'blob',
  });
}

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
