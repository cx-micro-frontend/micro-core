import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';
import fetch from '@NEAP/utils/fetch/fetch';
export function getOverviewData(query) {
  // 概览数据-获取
  // dataFilter(head);
  dataFilter(query);
  return fetch({
    url: '/bill/reporting/overview',
    method: 'post',
    // headers: head,
    data: query,
  });
}

export function getOverviewData1(query) {
  // 概览数据-获取
  // dataFilter(head);
  dataFilter(query);
  return fetch({
    url: '/soss/notice/list-notice',
    method: 'post',
    // headers: head,
    data: query,
  });
}

export function getOverviewData2(query) {
  // 概览数据-获取
  // dataFilter(head);
  dataFilter(query);
  return fetch({
    url: '/soss/product/list-product',
    method: 'post',
    // headers: head,
    data: query,
  });
}

export function getOverviewData3(query) {
  // 概览数据-获取
  // dataFilter(head);
  dataFilter(query);
  return fetch({
    url: '/soss/product/statis-productInfos',
    method: 'get',
    // headers: head,
    params: query,
  });
}
