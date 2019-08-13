/**
 * grid cell fifter function
 * @param val
 * @param key
 * @returns {*}
 */

const contrastive = {
  sex: [
    { label: '男', value: '1' },
    { label: '女', value: '2' },
  ],

  status:
    [
      { label: '暂存', value: 0 },
      { label: '已发布', value: 1 },
      { label: '已结束', value: 2}
    ],

  syFlag: [
    { label: '停用', value: '0' },
    { label: '启用', value: '1' }
  ],

  userState: [
    {label: "离职", value: "0"},
    {label: "在职", value: "1"}
  ],

  isActived: [
    { label: '停用', value: '0' },
    { label: '启用', value: '1' }
  ]
};

export default (val, key) => {
  if(contrastive[key]){
    let options = contrastive[key];
    let item = options.find((item) => {
      return item.value === val
    });
    return item? item.label : val
  }

  return val;
}
