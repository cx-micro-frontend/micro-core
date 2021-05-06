import { dataFilter } from '../../utils/fetch/fetchDataType';
import { codeParame, lessCodeBasicFetch, mockCode } from './index';

/**
 * 导出
 * @param context
 - appCode:应用编码
 - formName:表单名称编码
 - funcId：funcId
 * @param query
 */
export function downloadExcel(context, query) {
  dataFilter(query);
  const { appCode, formName } = codeParame(context);
  return lessCodeBasicFetch(codeParame(context), {
    url: `/${appCode}/${formName}/export-excel`,
    method: 'post',
    data: query,
    responseType: 'blob',
    headers: {
      ...mockCode('EXPORT'),
    },
  });
}
