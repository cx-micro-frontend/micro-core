import keyRefer from '../nav-menu-keyRefer';
import menuNodeProps from './menuNodeProps';
import { judgeType } from '../../../../utils/library/judge';

/**
 * get init route from menu - 从给定 menu 数据中 输出其初始路由值
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
 * create sub system init route - 生成各个子菜单/副菜单的初始路由 （生产)
 * 生成 initpath / initname 对象
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
        //

        /**
         * 若是数组，则在当前子菜单中，寻找符合下列条件的第一个菜单项目：
         * 1、常规带单，且是叶子
         * 2、常规带单，不是叶子，且存在下级节点（有children)
         * @type {*|{}}
         */
        const findTarget = menuDate.find(item => {
          const isSlipPage = menuNodeProps.isSlipPage(item); //是否是特殊（非标) behavior 菜单节点

          const isLeaf = item[keyRefer['isLeaf']]; //是否是叶子节点

          const children = item[keyRefer['children']];

          if (!isSlipPage) {
            if (isLeaf) {
              return true;
            } else {
              return children && children.length;
            }
          }
          return false;
        });

        if (findTarget) {
          targetItem = findTarget;
        } else {
          console.log(112312312312321);
          console.log(menuDate);
          console.log(112312312312321);
          console.log(112312312312321);
          console.error(
            '【 NEAP-ERROR 】When calculating the front page of the current sub menu queue, the current sub menu is all special menu (navigation, report) or there is data exception (in the case of leaf node, there is no child child), so the initial jump route cannot be located correctly'
          );

          console.error(
            '【 NEAP-ERROR 】在计算当前子菜单队列的首页时，当前子菜单全是特殊菜单 （导航，报表) 或存在数据异常 （叶子节点情况下，无下级children)，导致无法正确定位其初始跳转路由'
          );

          targetItem = {};
        }
      } else if (judgeType(menuDate) === 'object') {
        //若是数组，则直接赋值
        targetItem = menuDate;
      }

      /**
       * 若是叶子节点，则直接取其 routePath
       * 若非叶子节点，则向下遍历取其子 routePath
       */
      if (targetItem[keyRefer['isLeaf']]) {
        initpath = targetItem[keyRefer['routePath']];
        initname = targetItem[keyRefer['routeName']];
      }
      //非叶子节点，则继续向下获取
      else {
        const children = targetItem[keyRefer['children']];

        //继续向下递归，来寻找叶子节点 作为 当前子菜单 的初始化 路由
        if (children && children.length) {
          _Loop(children);
        }

        // initpath = 'no normal menu/route in sub menu';
        // initname = 'no normal menu/route in sub menu';
      }
    }
  }

  _Loop(menu);

  return {
    name: initname,
    fullpath: initpath,
  };
};
