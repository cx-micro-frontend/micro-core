import fetch from '@NEAP/utils/fetch/fetch';
import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';

/**
 * 获取未处理消息数
 */
export function getMessageCount(query) {
  dataFilter(query);
  return fetch({
    url: '/system/message/count-noexamine-message',
    method: 'get',
    params: query,
  });
}
