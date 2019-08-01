const getters = {

  //core
  funcId: state => state.Core.funcId,


  //user
  token: state => state.User.userinfo.token,
  userName: state => state.User.userinfo.userName,
  avatar: state => state.User.userinfo.avatar,
  themeColor: state => state.User.userinfo.themeColor,

  //layout
  visitedPages: state => state.PageTabs.visitedPages,
  sideBarList: state => state.Sidebar.sideBarList,
  currentPageInfo: state => state.PageInfo.currentPageInfo,

  //mode
  isInIframe: state => state.FrameMode.isInIframe,

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
  $store__houseTreeData: state => state.HouseTree.$store__houseTreeData,


  //table
  tableHead: state => state.Table.tableHead,


};
export default getters;
