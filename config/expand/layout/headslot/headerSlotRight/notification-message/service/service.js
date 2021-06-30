/*
 * @Author: dell di
 * @Date: 2020-07-21 17:13:43
 * @LastEditTime: 2020-07-21 19:54:10
 * @LastEditors: di
 * @Description:
 * @FilePath: \micro_work_order\NS_work_order_components\packages\Ns-biz-message-box\service\service.js
 */

import fetch from '@FETCH/fetch';
import { dataFilter } from '@FETCH/fetchDataType';

/**
 * 设置消息为已读
 * @param {object} data
 */
export function setMessageRead(
  data = {
    msgId: '',
  }
) {
  dataFilter(data);
  return fetch({
    url: '/notice/management/set-read',
    method: 'post',
    data,
  });
}

/**
 * 对消息进行处理
 * @param {object} data
 */
export function setMessageSetting(
  data = {
    bizParameters: 'string',
    channel: 'string',
    content: 'string',
    creationTime: '2020-07-21T11:53:09.391Z',
    dueTime: '2020-07-21T11:53:09.391Z',
    id: 'string',
    isRead: true,
    isSent: true,
    msgId: 'string',
    priority: 0,
    readTime: '2020-07-21T11:53:09.391Z',
    receiver: 'string',
    sentTime: '2020-07-21T11:53:09.391Z',
    source: 0,
    stickDuration: 0,
    title: 'string',
    type: 0,
    url: 'string',
  }
) {
  dataFilter(data);
  return fetch({
    url: '/notice/management/update-notice',
    method: 'post',
    data,
  });
}
