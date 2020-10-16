const Mock = require('mockjs');
const utils = require('../../utils/index');

const queryUserEnterprise = (req, res) => {
  let list = [];
  let len = req.query.userAccount === 'superAdmin' ? 5 : 1;
  for (let i = 0; i < len; i++) {
    list.push(
      Mock.mock({
        enterpriseId: '@increment',
        enterpriseName: '@ctitle',
        id: '@increment',
        password: null,
      }),
    );
  }
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: list,
  });
};

/**
 * 用户登录
 * @param req
 * @param res
 * @returns {*}
 */
const oauthLogin = (req, res) => {
  let userAccount = '';

  //单集团登录
  if (req.body.username) {
    userAccount = req.body.username;
  }
  //多集团登录
  else {
    userAccount = utils.getMockQuery(req.url, 'userAccount');
  }

  return res.json({
    resultCode: '200',
    resultData: {
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      loginTime: Mock.Random.now('day', 'yyyy-MM-dd HH:mm:ss SS'),
      maxage: 18000000,
      token: `sign-${Mock.Random.integer(
        10,
        99,
      )}-eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxODg1NzE3NzExOSIsImp0aSI6IjkyNyIsImlhdCI6MTU1OTAzNzI2NX0.ta1UL4da-kG0lknikwPX1VRucWqf_XNWHRSSAG9BcmA`,
      userAccount: userAccount,
      userId: userAccount,// Mock.Random.natural(1, 100)
      userName: `高仓雄-${userAccount}`,
      userPhone: '18768183457',
      userSex: '1',
      themeColor: Mock.Random.rgb(),
    },
    resultMsg: '操作成功。',
  });
};

module.exports = {
  'GET /oauth/oauth/query-user-enterprise': queryUserEnterprise,
  'POST /oauth/login': oauthLogin, //用户登录
  'POST /oauth/mutil-enterprise-login': oauthLogin, //多集团登录
};

