const userTemplate = (req, res) => {
  // console.log(req.body);
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: {
      avatar: "",
      loginTime: 1558938719431,
      maxage: 18000000,
      themeColor: '#252836',
      token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxODg1NzE3NzExOSIsImp0aSI6IjkxMSIsImlhdCI6MTU1ODkzODcxOX0.ozqfVA7y6wZt401XKaHrBOwvg-ujWcyv71I0omK1DBs",
      userAccount: "superAdmin",
      userId: 172,
      userName: "12",
      userPhone: "18857177119",
      userSex: "1"
    },
  });
};

module.exports = {
  'POST /system/user': userTemplate,
};
