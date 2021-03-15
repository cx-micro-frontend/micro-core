import fetch from '@NEAP/utils/fetch/fetch';

// 获取运维配置信息
export function getYunweiJs() {
  return fetch({
    url: '/soss/enterprise/getYunweiJs',
    method: 'post',
  });
}
