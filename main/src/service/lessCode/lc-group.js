import { dataFilter } from '@FETCH/fetchDataType';
import { lessCodeBasicFetch, codeParame } from './index';

/**
 * 筛选器 分组控件的获取数量
 * @param context
 * @param data
 */
export const getGroupCount = (context, data) => {
  dataFilter(data);
  const { appCode, formName } = codeParame(context);
  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${formName}/list-groupByCount`,
    method: 'post',
    data,
  });
};
