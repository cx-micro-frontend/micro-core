import fetch from '../../../utils/fetch/fetch';
import { dataFilter } from '../../../utils/fetch/fetchDataType';

/**
 * role-side-bar
 * @param query
 */
export const sideBarService = query => {
  dataFilter(query);

  return fetch({
    url: '/system/permission/list-menu',
    method: 'post',
    data: query,
  });
};

/**
 * role-side-bar
 */
export const mam_nav_menu_service = () => {
  return fetch({
    url: '/system/permission/list-module',
    method: 'post',
  });
};
