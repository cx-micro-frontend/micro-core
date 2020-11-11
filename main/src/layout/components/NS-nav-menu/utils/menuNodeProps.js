import keyRefer from '../nav-menu-keyRefer';

export default {
  /**
   * 是否是特殊（非标) behavior 菜单节点
   * 对应:
   * 101 - 常规跳转v10界面（直接嵌入第三方）=> 如 嵌入一个百度
   * 102 - 常规跳转v10界面（混合嵌入）- v10部分+外部嵌入 => v10部分（视图或者逻辑）+外部嵌入（ifarme），如：应收中台报表
   * 103 - 常规跳转v10界面（混合嵌入）- v10部分+v8 => v10部分（视图或者逻辑）+外部嵌入（ifarme），如：v8页面
   * @param menuItem
   * @returns {boolean}
   */
  isInjectPage(menuItem) {
    const sMap = ['101', '102', '103'];
    return sMap.indexOf(menuItem[keyRefer['behavior']]) > -1;
  },

  /**
   * 是否是特殊（非标) behavior 菜单节点
   * 对应:
   * 300 - 打开侧滑界面
   * @param menuItem
   * @returns {boolean}
   */
  isSlipPage(menuItem) {
    return menuItem[keyRefer['behavior']] === '300';
  },

  /**
   * 是否是内链
   * 201 - 外链跳转（当前页刷新）
   * @param menuItem
   * @returns {boolean}
   */
  isInnerLink(menuItem) {
    return menuItem[keyRefer['behavior']] === '201';
  },

  /**
   * 是否是外链
   * 202 - 外链跳转（打开新浏览器窗口）
   * @param menuItem
   * @returns {boolean}
   */
  isOuterLink(menuItem) {
    return menuItem[keyRefer['behavior']] === '202';
  },

  /**
   * 是否是外链跳转
   * 对应:
   * 201 - 外链跳转（当前页刷新）
   * 202 - 外链跳转（打开新浏览器窗口）
   * @param menuItem
   * @returns {boolean}
   */
  isLinkToJump(menuItem) {
    const lMap = ['201', '202'];
    return lMap.indexOf(menuItem[keyRefer['behavior']]) > -1;
  },
};

// /**
//  * 是否是特殊（非标) behavior 菜单节点
//  * @param menuItem
//  * @returns {boolean}
//  */
// export const isSpecialBehavior = menuItem => {
//   const sMap = ['101', '102'];
//   return sMap.indexOf(menuItem[keyRefer['behavior']]) > -1;
// };
