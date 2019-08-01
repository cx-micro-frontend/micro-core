const logFilter = (req, res) => {
  // console.log(req.body);
  return res.json({
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [{
      "_id": "5cebc4d667d47600010b3a4a",
      "filterName": "2222",
      "isDefault": false,
      "isShow": true,
      "funcId": "2DEJjvjOcDM5caR4bce",
      "userId": 172,
      "organizationId": 263,
      "filterList": [{
        "fieldName": "userAccount",
        "fieldUnderLineName": "user_account",
        "fieldValue": "weweeee",
        "isShow": true,
        "comparison": "LIKE",
        "type": "text"
      }],
      "orderNo": 1
    }]
  });
};

module.exports = {
  'GET /log/filter/list-filter': logFilter,
};
