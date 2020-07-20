import keyRefer from '../nav-menu-keyRefer';

/**
 * 是否是特殊（非标) behavior 菜单节点
 * @param menuItem
 * @returns {boolean}
 */
export const isSpecialBehavior = menuItem => {
  const sMap = ['101', '102'];
  return sMap.indexOf(menuItem[keyRefer['behavior']]) > -1;
};
