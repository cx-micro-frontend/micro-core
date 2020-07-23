export default {
  //常规 - 异步路由列表配置项与路由跳转路径不匹配,或权限路由缺失，路径 - /404
  'normal.error_route_role.main': '您要访问的模块页面走丢啦',
  'normal.error_route_role.sub': '请联系管理员',

  //常规 - 路由动态创建失败,请检查数据返回是否正常 ，路径 - /error
  'normal.error_route_create.main': '路由动态创建失败',
  'normal.error_route_create.sub': '请检查数据返回是否正常',

  //常规 - 页面模块缺失,请检查模块是否注入 ，路径 - /error
  'normal.loss_pages.main': '您要访问的模块页面缺失',
  'normal.loss_pages.sub': '请检查模块是否注入',

  'sso.error_login.main': '单点登录错误',
  'sso.error_login.sub': '请与账号管理员联系',

  'sso.loss_token.main': '单点登录用户不存在',
  'sso.loss_token.sub': '请与账号管理员联系',

  //sso - 异步路由列表配置项与路由跳转路径不匹配,或权限路由缺失
  'sso.error_route_role.main': '该用户路由权限缺失',
  'sso.error_route_role.sub': '请与账号管理员联系',

  //sso - 页面模块缺失,请检查模块是否注入
  'sso.loss_pages.main': '您要访问的模块页面不存在',
  'sso.loss_pages.sub': '请联系管理员',
};
