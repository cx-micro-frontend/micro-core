/**
 * 退出登录
 * @param req
 * @param res
 * @returns {*}
 */
const logout = (req, res) => {
  return res.json({
    resultCode: '200',
    resultData: true,
    resultMsg: '操作成功。',
  });
};

module.exports = {
  'POST /oauth/oauth/logout': logout, //退出登录
};
