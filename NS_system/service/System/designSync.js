import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';
import fetch from '@NEAP/utils/fetch/fetch';


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
    params: query
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
