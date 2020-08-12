import expand from '../../../../../expand';
import keyRefer from '../nav-menu-keyRefer';
import menuNodeProps from './menuNodeProps';
import { judgeType } from '../../../../utils/library/judge';

/**
 * get init route from menu
 * @param menu
 * @returns {{name: *, fullpath: *}}
 */
export const getInitRoute = menu => {
  return {
    name: menu[keyRefer['defaultRouteName']],
    fullpath: menu[keyRefer['defaultRoutePath']],
  };
};

/**
 * create sub system init route
 * @param menu
 * @returns {{name: string, fullpath: string}}
 */
export const createSubSystemInitRoute = menu => {
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
};
