import Router from './modules/System/Router/Router';

const getters = {
  //mode
  loginMode: state => state.FrameMode.loginMode,
  isInIframe: state => state.FrameMode.isInIframe,
  routeErrorSign: state => state.Router.errorSign,

  //core
  funcId: state => state.Core.funcId,

  //user
  token: state => state.User.userinfo.token,
  userName: state => state.User.userinfo.userName,
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
  initRouter: state => state.Sidebar.initRouter,
  sideBarList: state => state.Sidebar.sideBarList,
  visitedPages: state => state.PageTabs.visitedPages,

  currentPageInfo: state => state.PageInfo.currentPageInfo,

  //all search conditions (object for all page search conditions)
  searchConditions: state => state.Search.conditions,

  //requestHead
  requestHead: state => state.RequestHead.base,

  //role
  roleButtonList: state => state.RoleButton.roleButtonList,
  roleButtonAction: state => state.RoleButton.roleButton.ACTION,
  roleButtonForm: state => state.RoleButton.roleButton.FORM,
  roleButtonGrid: state => state.RoleButton.roleButton.GRID,

  //tree
  $store__orgTreeData: state => state.OrganizeTree.$store__orgTreeData,

  //table
  tableHead: state => state.Table.tableHead,
};
export default getters;
