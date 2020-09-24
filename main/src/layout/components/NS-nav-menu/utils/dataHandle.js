import keyRefer from '../nav-menu-keyRefer';
import expand from '../../../../../expand';
import { createSubSystemInitRoute } from './initRoute';

/**
 * create top nav menu - 生成顶部导航菜单数据
 * @param list
 * @returns {*}
 */
export const createTopMenu = list => {
  return list.map(l => {
    return {
      moduleName: l[keyRefer['moduleName']],
      moduleId: l[keyRefer['moduleId']],
      icon: l[keyRefer['icon']],
      moduleJumpPath: l[keyRefer['moduleJumpPath']],
    };
  });
};

/**
 * filter menu by toggle - 切换过滤菜单
 * @param list
 * @param key
 * @returns {*}
 */
export const filterModuleByToggle = (list, key) => {
  try {
    return list.filter(l => l[keyRefer['moduleId']] === key)[0];
  } catch (e) {
    return {};
  }
};

/**
 * menu data handle - 菜单数据处理
 * 1、显示隐藏字段 => 转换布尔值
 * 2、增加层级标识
 * 3、增加menuId标识 （如：1-1-1),用于active对照标识
 * 4、多系统门户模式中，增加在各级根菜单数据中增加初始路由字段(level = 1)
 * @param menu
 * @returns {*}
 * @private
 */
export const handleMenuData = menu => {
  const visibleKey = keyRefer['visible'];
  const childrenKey = keyRefer['children'];
  const levelKey = keyRefer['menuLevel'];
  const menuIdKey = keyRefer['menuId'];
  const isLeafKey = keyRefer['isLeaf'];
  const showTerminal = keyRefer['showTerminal'];

  // const initRouteKey = keyRefer['initRoute'];

  const _level = expand.integrationMode === 'mam' ? 0 : 1;

  // if (!(menu[childrenKey] && menu[childrenKey] instanceof Array)) return menu;

  /**
   * 节点递归循环处理
   * @param list - 数据
   * @param level - 层级
   * @param parentIndex
   */
  const done = (list, level, parentIndex = '') => {
    list.forEach((item, index) => {
      //add visible sign
      item[visibleKey] = item[visibleKey] === '1';

      //这里最好能把 移动端的菜单  移除掉
      if (item[isLeafKey] && item[showTerminal] === 2) {
        item[visibleKey] = false;
      }

      //add level sign
      item[levelKey] = level;

      //should create init route to every root item (level = 0)
      if (item[levelKey] === 0) {
        const { name, fullpath } = createSubSystemInitRoute(item);

        item[keyRefer['defaultRouteName']] = item[keyRefer['defaultRouteName']] || name;
        item[keyRefer['defaultRoutePath']] = item[keyRefer['defaultRoutePath']] || fullpath;
      }

      //add menu id (use to active sign)
      let transmitIndex = '';
      if (item[levelKey] >= 1) {
        item[menuIdKey] = `${parentIndex}${index}`;
        transmitIndex = `${index}-`;
      }

      let childNodes = item[childrenKey];

      if (childNodes && childNodes.length > 0) {
        done(childNodes, level + 1, transmitIndex);
      }
    });
  };

  done(menu, _level);

  return menu;

  if (menu && menu instanceof Array) {
    return menu;
  } else {
    throw '【 NEAP-ERROR 】Custom filter side menu data,  must output data list.';
  }
};

/**
 * flatten nav menu - 扁平化
 * @param list
 * @returns {Array}
 */
export const flattenMenu = list => {
  let _flatten = [];

  list.forEach(r => {
    _flatten = [..._flatten, ...r[keyRefer['children']]];
  });

  return _flatten;
};
