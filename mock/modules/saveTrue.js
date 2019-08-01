const data = (req, res)=>{
  req.method = 'GET';
  return res.json({
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "restLog": null,
    "resultData": true
  })
};

module.exports = {
  'POST /jepf/devplatform/sync-original': data,
  'POST /system/user/edit-user': data,
  'GET /system/user/delete-user': data,
  'GET /system/user/modify-user': data,
  'POST /system/dictionary/edit-dictionary': data,
  'POST /system/dictionary/add-dictionary': data,
  'POST /system/dictionary/edit-dictionaryItem': data,
  'POST /system/user/add-user': data,
  'POST /system/role/add-person-to-role': data,
  'POST /system/role/add-role': data,
  'POST /system/role/edit-role': data,
  'POST /system/dictionary/add-dictionaryItem': data,
  'POST /system/organization/delete-organization': data,
  'GET /system/dictionary/delete-dictionary': data,
  'POST /system/organization/add-department': data,
  'POST /o2o/noticeManage/save': data,
  'POST /o2o/precinct/checkHouse': data,
  'POST /o2o/precinct/savePrecinct': data
};
