import fetch from '@NEAP/utils/fetch/fetch';
import { dataFilter } from '@NEAP/utils/fetch/fetchDataType';

export function getTargetRootTree(query) {
  //树数据-获取
  dataFilter(query);
  return fetch({
    url: '/checkhouse/target/getTargetTree',
    method: 'post',
    params: query,
  });
}


/**
 * 检查项树子节点获取
 * */
export  function getTargetChildrenTree(query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/target/getTargetByDeilverTypeAndCheckType',
    method: 'post',
    data: query
  });
}

/**
 * 检查项树 删除节点
 * */
export  function delTarget(query) {
  dataFilter(query);
  return fetch({
    url: '/checkhouse/target/deleteTargetById',
    method: 'post',
    data: query
  });
}


/**
 * 检查项树 删除节点
 * */
export  function submitTargetForm(url, query) {
  dataFilter(query);
  return fetch({
    url: url,
    method: 'post',
    data: query
  });
}


