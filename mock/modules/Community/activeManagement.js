const listActivity = (req, res) => {
  req.method = 'GET';
  return res.json({
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "restLog": null,
    "resultData": {
      "pageInfo": {
        "pageNum": 1,
        "pageSize": 20,
        "size": 20,
        "orderBy": null,
        "startRow": 1,
        "endRow": 20,
        "total": 3,
        "pages": 2,
        "list": [{
          "id": 134,
          "category": 2,
          "title": "123",
          "picId": 1562568092252,
          "userType": 0,
          "createUserId": 1,
          "createTime": "2019-07-04 05:29:49",
          "updateUserId": 1,
          "updateTime": "2019-07-08 14:41:32",
          "ruleCategory": null,
          "ruleValue": null,
          "status": 0,
          "publishTime": "2019-07-08 14:41:32",
          "publishUserId": 1,
          "sendType": 0,
          "isPush": null,
          "categoryKey": null,
          "publishUserName": "superAdmin",
          "noticeCategory": null,
          "type": 1,
          "secondCategoryKey": null,
          "voteEndTime": "2019-07-16 13:00:00",
          "candidateNum": null,
          "activityStartTime": "2019-07-24 13:00:00",
          "activityEndTime": "2019-07-31 13:00:00",
          "enableApply": 1,
          "point": null,
          "price": null,
          "sponsor": "123",
          "activitySpace": "123",
          "activityNum": 0,
          "roasting": null,
          "bgPicId": null,
          "triggered": null,
          "effectiveReplyTime": null,
          "activityLimitType": null,
          "activityLimitNum": 123,
          "smsTemplateId": null,
          "recommend": 1,
          "sendToWx": null,
          "categoryName": null,
          "categoryKeyName": null,
          "precinctIds": null,
          "productIds": null,
          "precinctID": null,
          "detailID": null,
          "detailText": null,
          "content": null,
          "targetType": null,
          "fileUrls": null,
          "bgUrl": null,
          "fileList": null,
          "url": null,
          "precinctNames": "福州檀府",
          "listPrecinctName": null,
          "listPrecinct": null,
          "secondCategoryName": null,
          "applyId": null,
          "applyTotal": null,
          "precincts": [{
            "id": null,
            "companyID": null,
            "precinctCode": null,
            "precinctName": "福州檀府",
            "provinceID": null,
            "cityID": null,
            "areaID": null,
            "streetID": null,
            "address": null,
            "contact": null,
            "contactPhone": null,
            "lngLat": null,
            "status": null,
            "orderID": null,
            "isCanceled": null,
            "createUserID": null,
            "createTime": "2019-07-11 10:45:59",
            "updateUserID": null,
            "updateTime": "2019-07-11 10:45:59",
            "serviceCall": "",
            "serviceCallLogoID": null,
            "companyCall": null,
            "heatingCall": "",
            "waterCall": "",
            "electricCall": "",
            "gasCall": "",
            "precinctShortName": "",
            "md5Key": null,
            "workStartTime": null,
            "workEndTime": null,
            "visitLimit": null,
            "memberLimit": null,
            "repairServices": null,
            "qrScanLimit": null,
            "govCode": null,
            "uuid": null
          }],
          "categoryHtmlUrl": null,
          "categoryPicUrl": null,
          "provinceId": null,
          "cityId": null
        }, {
          "id": 75,
          "category": 2,
          "title": "zxzxzx",
          "picId": 0,
          "userType": 0,
          "createUserId": 1,
          "createTime": "2019-06-23 03:31:54",
          "updateUserId": 1,
          "updateTime": "2019-06-23 08:57:35",
          "ruleCategory": null,
          "ruleValue": null,
          "status": 1,
          "publishTime": "2019-06-23 08:57:35",
          "publishUserId": 1,
          "sendType": 0,
          "isPush": null,
          "categoryKey": null,
          "publishUserName": "admin",
          "noticeCategory": null,
          "type": 1,
          "secondCategoryKey": null,
          "voteEndTime": "2019-06-30 13:00:00",
          "candidateNum": null,
          "activityStartTime": "2019-07-01 13:00:00",
          "activityEndTime": "2019-07-11 13:00:00",
          "enableApply": 1,
          "point": null,
          "price": null,
          "sponsor": "1111",
          "activitySpace": "123",
          "activityNum": null,
          "roasting": null,
          "bgPicId": null,
          "triggered": null,
          "effectiveReplyTime": null,
          "activityLimitType": null,
          "activityLimitNum": 1233,
          "smsTemplateId": null,
          "recommend": 1,
          "sendToWx": null,
          "categoryName": null,
          "categoryKeyName": null,
          "precinctIds": null,
          "productIds": null,
          "precinctID": null,
          "detailID": null,
          "detailText": null,
          "content": null,
          "targetType": null,
          "fileUrls": null,
          "bgUrl": null,
          "fileList": null,
          "url": null,
          "precinctNames": "桃李春风小区",
          "listPrecinctName": null,
          "listPrecinct": null,
          "secondCategoryName": null,
          "applyId": null,
          "applyTotal": null,
          "precincts": [{
            "id": null,
            "companyID": null,
            "precinctCode": null,
            "precinctName": "桃李春风小区",
            "provinceID": null,
            "cityID": null,
            "areaID": null,
            "streetID": null,
            "address": null,
            "contact": null,
            "contactPhone": null,
            "lngLat": null,
            "status": null,
            "orderID": null,
            "isCanceled": null,
            "createUserID": null,
            "createTime": "2019-07-11 10:45:59",
            "updateUserID": null,
            "updateTime": "2019-07-11 10:45:59",
            "serviceCall": "",
            "serviceCallLogoID": null,
            "companyCall": null,
            "heatingCall": "",
            "waterCall": "",
            "electricCall": "",
            "gasCall": "",
            "precinctShortName": "",
            "md5Key": null,
            "workStartTime": null,
            "workEndTime": null,
            "visitLimit": null,
            "memberLimit": null,
            "repairServices": null,
            "qrScanLimit": null,
            "govCode": null,
            "uuid": null
          }],
          "categoryHtmlUrl": null,
          "categoryPicUrl": null,
          "provinceId": null,
          "cityId": null
        }, {
          "id": 133,
          "category": 2,
          "title": "test",
          "picId": 1562048211539,
          "userType": 0,
          "createUserId": 1,
          "createTime": "2019-07-02 06:07:31",
          "updateUserId": 1,
          "updateTime": "2019-07-03 03:16:51",
          "ruleCategory": null,
          "ruleValue": null,
          "status": 2,
          "publishTime": "2019-07-03 03:16:51",
          "publishUserId": 1,
          "sendType": 0,
          "isPush": null,
          "categoryKey": null,
          "publishUserName": "superAdmin",
          "noticeCategory": null,
          "type": 1,
          "secondCategoryKey": null,
          "voteEndTime": "2019-07-02 13:00:00",
          "candidateNum": null,
          "activityStartTime": "2019-07-03 13:00:00",
          "activityEndTime": "2019-07-04 13:00:00",
          "enableApply": 1,
          "point": null,
          "price": null,
          "sponsor": "天堂软件园",
          "activitySpace": "新视窗",
          "activityNum": 0,
          "roasting": null,
          "bgPicId": null,
          "triggered": null,
          "effectiveReplyTime": null,
          "activityLimitType": null,
          "activityLimitNum": 100,
          "smsTemplateId": null,
          "recommend": 1,
          "sendToWx": null,
          "categoryName": null,
          "categoryKeyName": null,
          "precinctIds": null,
          "productIds": null,
          "precinctID": null,
          "detailID": null,
          "detailText": null,
          "content": null,
          "targetType": null,
          "fileUrls": null,
          "bgUrl": null,
          "fileList": null,
          "url": null,
          "precinctNames": "福州檀府",
          "listPrecinctName": null,
          "listPrecinct": null,
          "secondCategoryName": null,
          "applyId": null,
          "applyTotal": null,
          "precincts": [{
            "id": null,
            "companyID": null,
            "precinctCode": null,
            "precinctName": "福州檀府",
            "provinceID": null,
            "cityID": null,
            "areaID": null,
            "streetID": null,
            "address": null,
            "contact": null,
            "contactPhone": null,
            "lngLat": null,
            "status": null,
            "orderID": null,
            "isCanceled": null,
            "createUserID": null,
            "createTime": "2019-07-11 10:45:59",
            "updateUserID": null,
            "updateTime": "2019-07-11 10:45:59",
            "serviceCall": "",
            "serviceCallLogoID": null,
            "companyCall": null,
            "heatingCall": "",
            "waterCall": "",
            "electricCall": "",
            "gasCall": "",
            "precinctShortName": "",
            "md5Key": null,
            "workStartTime": null,
            "workEndTime": null,
            "visitLimit": null,
            "memberLimit": null,
            "repairServices": null,
            "qrScanLimit": null,
            "govCode": null,
            "uuid": null
          }],
          "categoryHtmlUrl": null,
          "categoryPicUrl": null,
          "provinceId": null,
          "cityId": null
        }]
      }
    }})
};

const provice = [{
  "value": "3502",
  "label": "澳门"
}, {
  "value": "3501",
  "label": "香港"
}, {
  "value": "3500",
  "label": "台湾"
}, {
  "value": "2",
  "label": "北京市"
}, {
  "value": "20",
  "label": "天津市"
}, {
  "value": "38",
  "label": "河北省"
}, {
  "value": "241",
  "label": "山西省"
}, {
  "value": "378",
  "label": "内蒙古自治区"
}, {
  "value": "500",
  "label": "辽宁省"
}, {
  "value": "615",
  "label": "吉林省"
}, {
  "value": "694",
  "label": "黑龙江省"
}, {
  "value": "842",
  "label": "上海市"
}, {
  "value": "860",
  "label": "江苏省"
}, {
  "value": "981",
  "label": "浙江省"
}, {
  "value": "1083",
  "label": "安徽省"
}, {
  "value": "1220",
  "label": "福建省"
}, {
  "value": "1315",
  "label": "江西省"
}, {
  "value": "1427",
  "label": "山东省"
}, {
  "value": "1602",
  "label": "河南省"
}, {
  "value": "1803",
  "label": "湖北省"
}, {
  "value": "1923",
  "label": "湖南省"
}, {
  "value": "2077",
  "label": "广东省"
}, {
  "value": "2279",
  "label": "广西壮族自治区"
}, {
  "value": "2405",
  "label": "海南省"
}, {
  "value": "2455",
  "label": "重庆市"
}, {
  "value": "2496",
  "label": "四川省"
}, {
  "value": "2704",
  "label": "贵州省"
}, {
  "value": "2802",
  "label": "云南省"
}, {
  "value": "2948",
  "label": "西藏自治区"
}, {
  "value": "3034",
  "label": "陕西省"
}, {
  "value": "3152",
  "label": "甘肃省"
}, {
  "value": "3261",
  "label": "青海省"
}, {
  "value": "3316",
  "label": "宁夏回族自治区"
}, {
  "value": "3344",
  "label": "新疆维吾尔自治区"
}];

const city =  [{
  "value": "982",
  "label": "杭州市"
}, {
  "value": "996",
  "label": "宁波市"
}, {
  "value": "1007",
  "label": "温州市"
}, {
  "value": "1020",
  "label": "嘉兴市"
}, {
  "value": "1028",
  "label": "湖州市"
}, {
  "value": "1034",
  "label": "绍兴市"
}, {
  "value": "1041",
  "label": "金华市"
}, {
  "value": "1051",
  "label": "衢州市"
}, {
  "value": "1058",
  "label": "舟山市"
}, {
  "value": "1063",
  "label": "台州市"
}, {
  "value": "1073",
  "label": "丽水市"
}];

let area =
  [{
    "value": "983",
    "label": "上城区"
  }, {
    "value": "984",
    "label": "下城区"
  }, {
    "value": "985",
    "label": "江干区"
  }, {
    "value": "986",
    "label": "拱墅区"
  }, {
    "value": "987",
    "label": "西湖区"
  }, {
    "value": "988",
    "label": "滨江区"
  }, {
    "value": "989",
    "label": "萧山区"
  }, {
    "value": "990",
    "label": "余杭区"
  }, {
    "value": "991",
    "label": "富阳区"
  }, {
    "value": "992",
    "label": "临安区"
  }, {
    "value": "993",
    "label": "桐庐县"
  }, {
    "value": "994",
    "label": "淳安县"
  }, {
    "value": "995",
    "label": "建德市"
  }]


const getArea = (req, res) => {
  req.method = 'GET';
  let list = provice;
  if(req.query.type === '2'){
    list = city
  }
  if(req.query.type === '3'){
    list = area
  }

  return res.json({
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "restLog": null,
    "resultData": list
  })
};


const getActivity = (req, res) => {
  return res.json({
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "restLog": null,
    "resultData": {
      "id": 134,
      "category": 2,
      "title": "123",
      "picId": 1562568092252,
      "userType": 0,
      "createUserId": 1,
      "createTime": "2019-07-04 05:29:49",
      "updateUserId": 1,
      "updateTime": "2019-07-08 14:41:32",
      "ruleCategory": null,
      "ruleValue": null,
      "status": 0,
      "publishTime": "2019-07-08 14:41:32",
      "publishUserId": 1,
      "sendType": 0,
      "isPush": null,
      "categoryKey": null,
      "publishUserName": "superAdmin",
      "noticeCategory": null,
      "type": 1,
      "secondCategoryKey": null,
      "voteEndTime": "2019-07-16 13:00:00",
      "candidateNum": null,
      "activityStartTime": "2019-07-24 13:00:00",
      "activityEndTime": "2019-07-31 13:00:00",
      "enableApply": 1,
      "point": null,
      "price": null,
      "sponsor": "123",
      "activitySpace": "123",
      "activityNum": 0,
      "roasting": null,
      "bgPicId": null,
      "triggered": null,
      "effectiveReplyTime": null,
      "activityLimitType": null,
      "activityLimitNum": 123,
      "smsTemplateId": null,
      "recommend": 1,
      "sendToWx": null,
      "categoryName": null,
      "categoryKeyName": null,
      "precinctIds": ["13"],
      "productIds": null,
      "precinctID": null,
      "detailID": null,
      "detailText": null,
      "content": "<p>&nbsp; &nbsp; 达瓦达瓦</p>",
      "targetType": null,
      "fileUrls": null,
      "bgUrl": null,
      "fileList": [{
        "fileID": 1562568092252,
        "fileName": "http://192.168.1.20/image/fileupload/80800/system_default_file/2019/7/1562142505626_963169009231700.jpg",
        "fileUrl": "http://192.168.1.20/image/fileupload/80800/system_default_file/2019/7/1562142505626_963169009231700.jpg",
        "dateTime": "2019-07-08 14:41:32",
        "createUserID": 1,
        "fileSize": null,
        "hits": null,
        "savePath": null,
        "filePoint": null,
        "orderNo": null,
        "endpoint": null,
        "bucketName": null,
        "fileLength": null,
        "id": 1436,
        "oss": null
      }],
      "url": null,
      "precinctNames": null,
      "listPrecinctName": null,
      "listPrecinct": [{
        "value": "13",
        "label": "福州檀府",
        "valueType": null
      }],
      "secondCategoryName": null,
      "applyId": null,
      "applyTotal": null,
      "precincts": [],
      "categoryHtmlUrl": null,
      "categoryPicUrl": null,
      "provinceId": "35",
      "cityId": "3501"
    },
    "pageNum": null,
    "pageSize": null,
    "total": null
  });
};

module.exports = {
  'POST /o2o/activity/listActivity': listActivity,
  'POST /o2o/activity/getArea': getArea,
  'GET /o2o/activity/getActivity': getActivity
};
