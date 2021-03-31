import { dataFilter } from '../../utils/fetch/fetchDataType';
import fetch from '../../utils/fetch/fetch';
import { basicFetchHeader, codeParame } from './index';

/**
 * table data fetch
 * @param context
 * @param data - url / query / head - funcId
 */
export const tableDataFetch = (context, data) => {
  dataFilter(data);
  /**
   * appCode:应用编码;
   * formName:菜单所对应的数据库表名称
   *
   */
  const { appCode, formName } = codeParame(context);

  return fetch({
    ...basicFetchHeader,
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
