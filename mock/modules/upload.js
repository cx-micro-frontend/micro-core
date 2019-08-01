const upload = (req, res) => {
  req.method = 'GET';
  return res.json(
    {
      "resultCode": "200",
      "resultMsg": "操作成功。",
      "restLog": null,
      "resultData": [{
        "fileName": "5bcc1e1ab662d08ad118d1af909dc5f0.jpg",
        "fileSize": 42844,
        "fileUrl": "http://192.168.1.75:81/M00/00/05/CgAAKV0HVomAAngOAACnXNSPrkY109.jpg",
        "path": null,
        "fileCode": null,
        "enterpriseId": null
      }],
      "pageNum": null,
      "pageSize": null,
      "total": null
    }
  )
};

module.exports = {
  'POST /o2o/activity/uploadFile': upload
};
