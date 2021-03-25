const getters = {
  logininfo: state => state.User.logininfo,
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
   */
  userinfo: state => state.User.userinfo,
};
export default getters;
