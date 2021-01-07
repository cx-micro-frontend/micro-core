import fetch from '@NEAP/utils/fetch/fetch';
import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';

/**
 * 获取未处理消息数
 */
export function getUnreadCount(query) {
  dataFilter(query);
  return fetch({
    url: '/notice/management/count-unread',
    method: 'get',
    params: query,
  });
}
