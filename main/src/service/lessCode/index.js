import $store from '../../store';

export const codeParame = context => {
  const { formName } = $store.getters.currentPageInfo || {}; //菜单 所对应的 数据库表 名称const { appCode, treeCode } = context; //appCode:应用编码;treeCode:树组件code id
  return {
    ...context,
    formName,
  };
};
