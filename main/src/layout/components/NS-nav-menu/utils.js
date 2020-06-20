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
    };
  });
};

/**
 * filter menu by toggle - 切换过滤菜单
 * @param list
 * @param key
 * @returns {*}
 */
export const filterMenuByToggle = (list, key) => {
  try {
    return list.filter(l => l[keyRefer['moduleId']] === key)[0][keyRefer['children']];
  } catch (e) {
    return [];
  }
};

/**
 * filter nav menu data
 * @param list
 * @returns {*}
 * @private
 */
export const filterMenu = list => {
  const visibleKey = keyRefer['visible'];
  const childrenKey = keyRefer['children'];

  /**
   * 节点递归循环处理
   * 1、显示隐藏字段 => 转换布尔值
   * 显示隐藏字段 => 转换布尔值
   * @param list
   */
  const done = list => {
    list.forEach((item, index) => {
      item[visibleKey] = item[visibleKey] === '0';

      let childNodes = item[childrenKey];

      if (childNodes && childNodes.length > 0) {
        done(childNodes);
      }
    });
  };

  done(list);

  return list;
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
 * @param list
 * @returns {string}
 * @private
 */
function _getInitRouteInMenu(list) {
  let initpath = '';
  let initname = '';

  function _Loop(list) {
    if (list && list.length) {
      initpath = initpath + '/' + list[0][keyRefer['menuRouter']];
      const children = list[0][keyRefer['children']];
      initname = list[0][keyRefer['menuRouter']];
      _Loop(children);
    }
  }

  _Loop(list);

  return {
    name: initname,
    fullpath: initpath,
  };
}

export const createInitRoute = list => {
  /*
   * -----------------
   * 1、get init route
   * -----------------
   */
  let initRoute;
  // let initRoute = { name: '', fullpath: '' };
  const _ini = expand.route.initRouteByAuth;

  if (_ini) {
    if (judgeType(_ini) === 'function') {
      initRoute = _ini(list);
    } else if (judgeType(_ini) === 'object') {
      initRoute = _ini;
    } else {
    }
  } else {
    console.log(888888888);
    console.log(8888888888);
    console.log(list);
    initRoute = _getInitRouteInMenu(list);
  }

  console.log(99999999999999999);
  console.log(initRoute);
  console.log(99999999999999999);
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
