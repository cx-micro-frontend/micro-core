import fetch from '@NEAP/utils/fetch/fetch';
import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';

// 获取坐席基本信息
export function getAgentByUserId() {
  return fetch({
    url: '/service/agent/getAgentByUserId',
    method: 'post',
  });
}

// 关联录音记录
export function addCall(data) {
  dataFilter(data);
  return fetch({
    url: '/service/agent/addCall',
    method: 'post',
    data,
  });
}
