import { dataFilter } from '../../fetch/fetchDataType';
import { lessCodeBasicFetch, codeParame, mockCode } from './index';

/**
 * table data fetch
 * @param context
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 - treeCode:树组件code id
 * @param data - url / query / head - funcId
 */
export const tableDataFetch = (context, data) => {
  dataFilter(data);
  const { appCode, formName } = codeParame(context);

  console.log(process.env);
  return lessCodeBasicFetch(codeParame(context), {
    url: data.url || `/${appCode}/${formName}/list-${formName}`,
    method: data.method || 'post',
    headers: {
      ...mockCode('LIST'),
      interceptorType: true, //当前页面是第二次进来的情况 && searchConditions 对象没有发生变化（用户没有操作分页或者更改任何查询条件）
    },
    data: data.query,
    params: data.method === 'get' ? data.query : data.params,
  });
};
