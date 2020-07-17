import keyRefer from './nav-menu-keyRefer';
import expand from '../../../../expand';
import { judgeType } from '../../../utils/library/judge';

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
 * filter nav menu data
 * @param list
 * @returns {*}
 * @private
 */
export const handleMenuData = list => {
  const visibleKey = keyRefer['visible'];
  const childrenKey = keyRefer['children'];
  const levelKey = keyRefer['menuLevel'];
  const menuIdKey = keyRefer['menuId'];
  const initRouteKey = keyRefer['initRoute'];

  const _level = expand.integrationMode === 'mam' ? 0 : 1;

  /**
   * 节点递归循环处理
   * 1、显示隐藏字段 => 转换布尔值
   * 显示隐藏字段 => 转换布尔值
   * @param list - 数据
   * @param level - 层级
   * @param parentIndex
   */
  const done = (list, level, parentIndex = '') => {
    list.forEach((item, index) => {
      item[visibleKey] = item[visibleKey] === '1';

      //add level sign
      item[levelKey] = level;

      if (item[levelKey] === 1) {
        item[initRouteKey] = createInitRoute(item);
      }

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

  done(list, _level);

  if (list && list instanceof Array) {
    return list;
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

/**
 * get init router path
 * @param menu - array / object
 * @returns {{name: string, fullpath: string}}
 * @private
 */
function _getInitRouteInMenu(menu) {
  let initpath = '';
  let initname = '';

  function _Loop(menuDate) {
    if (menuDate) {
      let targetItem = null;

      if (judgeType(menuDate) === 'array') {
        targetItem = menuDate[0];
      } else if (judgeType(menuDate) === 'object') {
        targetItem = menuDate;
      }

      /**
       * 叶子节点，才取其 routePath
       * 若非叶子节点，则向下遍历取其子 routePath
       */
      if (targetItem[keyRefer['isLeaf']]) {
        initpath = targetItem[keyRefer['routePath']];
        initname = targetItem[keyRefer['routeName']];
      }
      const children = targetItem[keyRefer['children']];

      if (children && children.length) {
        _Loop(children);
      }
    }
  }

  _Loop(menu);

  return {
    name: initname,
    fullpath: initpath,
  };
}

/**
 * create init route
 * @param currentMenu:
 *     - sideMenu - 原始菜单栏数据
 *     - moduleMenu - 所有子系统模块导航菜单数据（只在 multiple application mode - 多系统门户模式 中存在)
 *     - moduleId - 当前激活系统模块id（只在 multiple application mode - 多系统门户模式 中存在)
 * @returns {*}
 */
export const createInitRoute = currentMenu => {
  /*
   * -----------------
   * 1、get init route
   * -----------------
   */
  let initRoute;
  // let initRoute = { name: '', fullpath: '' };
  const _ini = expand.route.initRouteByToggleModule;

  if (_ini) {
    if (judgeType(_ini) === 'function') {
      initRoute = _ini(currentMenu);
    } else if (judgeType(_ini) === 'object') {
      initRoute = _ini;
    } else {
    }
  } else {
    initRoute = _getInitRouteInMenu(currentMenu);
  }

  if (
    !['name', 'fullpath'].every(
      _k => initRoute.hasOwnProperty(_k) && typeof initRoute[_k] === 'string'
    )
  ) {
    console.error(
      `【 NEAP-ERROR 】Custom expand config - "initRouteByAuth": the returned object must contain the name and fullpath fields, and the value is string format`
    );
  }

  return initRoute;
};
