import expand from '../../../../../expand';
import keyRefer from '../nav-menu-keyRefer';
import menuNodeProps from './menuNodeProps';
import { judgeType } from '../../../../utils/library/judge';

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

      if (judgeType(menuDate) === 'array' && menuDate.length) {
        //gets the first node item that is not a sideslip type
        targetItem = menuDate.find(item => !menuNodeProps.isSlipPage(item));
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
      } else {
        const children = targetItem[keyRefer['children']];

        if (children && children.length) {
          _Loop(children);
        }
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

/**
 * 从返回的后台数据中获取初始路由 name 和  path
 * @param currentMenu
 * @returns {{name: *, fullpath: *}}
 */
export const getInitRoute = currentMenu => {
  return {
    name: currentMenu[keyRefer['defaultRouteName']],
    fullpath: currentMenu[keyRefer['defaultRoutePath']],
  };
};
