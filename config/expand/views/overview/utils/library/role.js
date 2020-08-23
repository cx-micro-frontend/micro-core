import $store from '@NEAP/store/index';

/**
 * 判断当前 path 是否在权限列表中
 * @param target - 判断的标识
 * 1、可以是路径，如：'/charge/paymentList'
 * 2、也可以是路由name，如：paymentList
 * @returns {boolean}
 */
export const isRouteRole = target => {
  console.log('判断当前 path 是否在权限列表中');

  const pageinfoList = $store.state.PageInfo.pageinfoList;
  console.log(pageinfoList);
  console.log(target);
  return pageinfoList.some(info => info.routePath === target || info.name === target);
};
