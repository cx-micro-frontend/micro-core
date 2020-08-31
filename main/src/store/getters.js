const getters = {
  //frame or mode
  $PROJECT_NAME: state => state.FrameInfo.$PROJECT_NAME, //当前项目名称

  //集成模式
  //sam - single application mode - 单系统模式
  //mam - multiple application mode - 多系统门户模式
  integrationMode: state => state.FrameInfo.integrationMode,

  isInIframe: state => state.FrameInfo.isInIframe, //当前系统是否为Iframe嵌入
  loginMode: state => state.FrameInfo.loginMode, //登录模式（常规 / 单点）
  browserInfo: state => state.FrameInfo.browserInfo, //浏览器信息
  OS: state => state.FrameInfo.OS, //操作系统信息

  //core
  funcId: state => state.Core.funcId,

  //precinct select
  precinctInfo: state => state.Precinct,

  //layout
  isLocked: state => state.LockScreen.isLocked, //锁屏状态
  moduleMenu: state => state.NavMenu.moduleMenu, //所有导航菜单数据
  sideMenu: state => state.NavMenu.sideMenu, //当前的侧边栏导航数据
  sideMenuCollapse: state => state.NavMenu.isCollapse, //当前的侧边栏 伸缩 状态
  sideMenuTheme: state => state.NavMenu.sideMenuTheme, //当前的侧边栏 主题
  initRoute: state => state.NavMenu.initRoute, //系统初始路由

  visitedPages: state => state.PageTabs.visitedPages, //操作访问过的页面于tab页显示
  currentVisitedPageTag: state => state.PageTabs.currentVisitedPageTag, //当前访问的page信息(处理为tab页所需的格式)
  currentPageInfo: state => state.PageInfo.currentPageInfo, //当前访问的页面信息

  //route
  routeErrorSign: state => state.Router.errorSign, //路由错误标识

  /**
   * 用户信息 - user information
   * token - 用户token
   * userId - 用户ID
   * userAccount - 用户ID
   * userName - 用户姓名
   * avatar - 用户头像
   * userType - 用户类型
   * userPhone - 用户手机
   * userSex - 用户性别
   * themeColor - 用户主题
   */
  userinfo: state => state.User.userinfo,

  /**
   * 租户信息 - 个性化配置 - cover painting operatorInfo
   * @returns {getters.operatorInfo|(function(*))|CoverPainting.state.operatorInfo|}
   * operatorDesc - 登录页左侧标题（sign in box)
   * operatorName - document title / head title
   * operatorLogo - 登录页图标
   * operatorPicture - 登录页左侧图片（sign in box)
   * operatorBackgroudPic - 登录页大背景图
   * operatorLoginPic - 布局-head 左侧Logo图片
   */
  operatorInfo: state => state.CoverPainting.operatorInfo, //登录页左侧标题（sign in box)

  //all search conditions (object for all page search conditions)
  searchConditions: state => state.Search.conditions,

  //requestHead
  requestHead: state => state.RequestHead.base,

  //role
  roleButtonList: state => state.RoleButton.NEAP_roleButtonList,
  roleButtonAction: state => state.RoleButton.NEAP_roleButtonAction,
  roleButtonForm: state => state.RoleButton.NEAP_roleButtonForm,
  roleButtonGrid: state => state.RoleButton.NEAP_roleButtonGrid,

  //table
  tableHead: state => state.Table.tableHead,
};
export default getters;
