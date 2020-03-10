const getters = {
  //mode
  $PROJECT_NAME: state => state.FrameInfo.$PROJECT_NAME, //当前项目名称
  loginMode: state => state.FrameMode.loginMode, //登录模式（常规 / 单点）
  isInIframe: state => state.FrameMode.isInIframe,
  routeErrorSign: state => state.Router.errorSign,
  browserInfo: state => state.FrameInfo.browserInfo, //浏览器信息
  OS: state => state.FrameInfo.OS, //操作系统信息

  //core
  funcId: state => state.Core.funcId,

  //precinct select
  precinctInfo: state => state.Precinct,

  //user
  token: state => state.User.userinfo.token,
  userName: state => state.User.userinfo.userName,
  userAccount: state => state.User.userinfo.userAccount,
  userId: state => state.User.userinfo.userId,
  avatar: state => state.User.userinfo.avatar,
  themeColor: state => state.User.userinfo.themeColor,

  //cover painting operatorInfo
  operatorDesc: state => state.CoverPainting.operatorInfo.operatorDesc, //登录页左侧标题（sign in box)
  operatorName: state => state.CoverPainting.operatorInfo.operatorName, //document title / head title
  operatorLogo: state => state.CoverPainting.operatorInfo.operatorLogo, //登录页图标
  operatorPicture: state => state.CoverPainting.operatorInfo.operatorPicture, //登录页左侧图片（sign in box)
  operatorBackgroudPic: state => state.CoverPainting.operatorInfo.operatorBackgroudPic, //登录页大背景图
  operatorLoginPic: state => state.CoverPainting.operatorInfo.operatorLoginPic, //布局-head 左侧Logo图片

  //layout
  isLocked: state => state.LockScreen.isLocked, //锁屏状态
  initRouter: state => state.SideBar.initRouter, //菜单栏初始路由
  sideBarList: state => state.SideBar.sideBarList, //菜单栏数据

  visitedPages: state => state.PageTabs.visitedPages, //操作访问过的页面于tab页显示
  currentVisitedPageTag: state => state.PageTabs.currentVisitedPageTag, //当前访问的page信息(处理为tab页所需的格式)

  currentPageInfo: state => state.PageInfo.currentPageInfo, //当前访问的页面信息

  //all search conditions (object for all page search conditions)
  searchConditions: state => state.Search.conditions,

  //requestHead
  requestHead: state => state.RequestHead.base,

  //role
  roleButtonList: state => state.RoleButton.roleButtonList,
  roleButtonAction: state => state.RoleButton.roleButton.ACTION,
  roleButtonForm: state => state.RoleButton.roleButton.FORM,
  roleButtonGrid: state => state.RoleButton.roleButton.GRID,

  //table
  tableHead: state => state.Table.tableHead,
};
export default getters;
