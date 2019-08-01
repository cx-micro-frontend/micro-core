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


let  precinctList =  [ {
  "value": "8",
  "label": "第二·春江花月"
}, {
  "value": "7",
  "label": "中牟百合花园"
}, {
  "value": "6",
  "label": "夏夏夏"
}, {
  "value": "5",
  "label": "浙江·杭州·学苑管家测试"
}];

const areaL = (req, res) => {
  let allArea = {provice, area, city};
  let type = req.body.type;
  return res.json({
    "resultCode": "200",
    "resultMsg": "操作成功",
    "resultData": allArea[type] || provice
  })
};

const precinct =(req, res) => {
  req.method = 'GET';
  return res.json({
    "resultCode": "200",
    "resultMsg": "操作成功",
    "resultData": precinctList
  })
}


module.exports = {
  'POST /property-service/property-rest/rest/precinct/getArea': areaL,
  'POST /property-service/property-rest/rest/precinct/getPrecinctByArea': precinct
}
