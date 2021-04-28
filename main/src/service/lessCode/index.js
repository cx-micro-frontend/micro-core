import _ from 'lodash';
import fetch from '../../utils/fetch/fetch';
import $store from '../../store';

export const codeParame = context => {
  const { formName, funcId } = $store.getters.currentPageInfo || {}; //菜单 所对应的 数据库表 名称const { appCode, treeCode } = context; //appCode:应用编码;treeCode:树组件code id
  const Mix_funcId = funcId;
  return {
    formName,
    Mix_funcId,
    ...context,
  };
};

/**
 *less code basic fetch - 低开基础 fetch 输出
 * @param codeParame
 * @param option
 * @returns {*}
 */
export const lessCodeBasicFetch = (codeParame, option = {}) => {
  const { Mix_funcId, funcId } = codeParame;
  return fetch(
    _.merge(
      {
        headers: {
          funcId: funcId || Mix_funcId,
        },
      },
      option
    )
  );
};

export const mockCode = code => {
  return process.env.ENV_KEY === 'mock_cloud_env' ? { MOCK_CODE: `MOCK_CODE_${code}` } : {};
};
