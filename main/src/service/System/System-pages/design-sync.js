import fetch from '../../../utils/fetch/fetch';
import { dataFilter } from '../../../utils/fetch/fetchDataType';
import qs from 'querystring';


/**
 * formSynchro_search
 * @param query
 */
export function designSync_search(query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: '/system/sync/get-all-company-org',
    method: 'post',
    data: query,
    transformRequest: [
      function(query) {
        query = qs.stringify(query);
        return query;
      },
    ],
  });
}

/**
 * formSynchro_submit
 * @param query
 */
export function designSync_submit(query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: '/jepf/devplatform/sync-original',
    method: 'post',
    data: query,
  });
}
