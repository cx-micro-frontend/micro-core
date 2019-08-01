/**
 * Config for every pages type, be used for mixins
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018.11.21 Broccoli spring( gcx )
 * -----------------------------------------------------------
 * Each page has 3 types：
 *    basic：tree, search, grid, insertService ...
 *    reporting：grid, insertService ...
 *    other：..
 * -----------------------------------------------------------
 */
export default {
  has_register_searchConditions: ['reporting', 'basic'], //注册查询对象
  has_grid: ['reporting', 'basic'], //渲染表格
  has_get_role_button_list: ['reporting', 'basic'], //获取按钮权限列表
};
