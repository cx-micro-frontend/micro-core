const houseTypeEnum = {
  //1.区域 2.项目 3.组团 4.楼栋 5.单元 6.房产 7.车库 8.车位 9.公共区域
  area: {
    value: '1',
    label: '区域',
  },

  project: {
    value: '2',
    label: '项目',
  },

  cluster: {
    value: '3',
    label: '组团',
  },

  building: {
    value: '4',
    label: '楼栋',
  },

  unit: {
    value: '5',
    label: '单元',
  },

  room: {
    value: '6',
    label: '房产',
  },

  garage: {
    value: '7',
    label: '车库',
  },

  carport: {
    value: '8',
    label: '车位',
  },

  publicArea: {
    value: '9',
    label: '公共区域',
  },
};


/***
 * map 转换， value作为key
 * @type {{}}
 */
var houseTypeValueEnum = {};
for(let key in houseTypeEnum){
  houseTypeValueEnum[houseTypeEnum[key].value] = Object.assign({key: key}, houseTypeEnum[key])
};





export { houseTypeValueEnum, houseTypeEnum};
