import { dataFilter } from '../../utils/fetch/fetchDataType';
import fetch from '../../utils/fetch/fetch';
import $store from '../../store';

const { formName } = $store.getters.currentPageInfo || {};
/**
 * table data fetch
 * @param context
 * @param data - url / query / head - funcId
 */
export const tableDataFetch = (context, data) => {
  dataFilter(data);
  const { appCode } = context; //appCode:应用编码;
  alert(appCode);
  alert(formName);

  return fetch({
    url: data.url || `/${appCode}/${formName}/list-${formName}`,
    method: data.method || 'post',
    headers: {
      funcId: data.funcId,
      interceptorType: true, //当前页面是第二次进来的情况 && searchConditions 对象没有发生变化（用户没有操作分页或者更改任何查询条件）
    },
    data: data.query,
    params: data.method === 'get' ? data.query : data.params,
  });
};
