const tem1 = {
  date: '2016-05-02',
  name: '王小虎',
  sex: '男',
  age: '29',
  address: '上海市普陀区金沙江路 1518 弄',
  work: '工程师',
  level: '1',
  field: '计算机，图像，大数据，人工智能，运维等',
  remark: '无',
};
const tem2 = {
  date: '2017-08-19',
  name: '王霞',
  sex: '女',
  age: '27',
  address: '上海市普陀区金沙江路 1518 弄',
  work: 'HR',
  level: '2',
  field: '招聘，智能，行政，分析，助理',
  remark: '无',
};

function getList(total) {
  const list = [];
  Array.from({ length: total }, k => k).forEach((item, index) => {
    if (index % 2 === 0) {
      list.push(tem1);
    } else {
      list.push(tem2);
    }
  });
  return list;
}

export default {
  tableHead: [
    {
      resourcecolumnName: '日期', //label
      resourcecolumnCode: 'date', //model-key
      resourcecolumnXtype: 'text', //筛选列 类型
      resourcecolumnWidth: '150', //列的宽度
      resourcecolumnOrder: '1', //列的序号
      resourcecolumnHidden: 0, //是否隐藏
      resourcecolumnAlign: 'left', //对齐
    },
    {
      resourcecolumnName: '姓名', //label
      resourcecolumnCode: 'name', //model-key
      resourcecolumnXtype: 'text', //筛选列 类型
      resourcecolumnWidth: '150', //列的宽度
      resourcecolumnOrder: '2', //列的序号
      resourcecolumnHidden: 0, //是否隐藏
      resourcecolumnAlign: 'left', //对齐
    },
    {
      resourcecolumnName: '性别', //label
      resourcecolumnCode: 'sex', //model-key
      resourcecolumnXtype: 'text', //筛选列 类型
      resourcecolumnWidth: '60', //列的宽度
      resourcecolumnOrder: '2', //列的序号
      resourcecolumnHidden: 0, //是否隐藏
      resourcecolumnAlign: 'left', //对齐
    },
    {
      resourcecolumnName: '年龄', //label
      resourcecolumnCode: 'age', //model-key
      resourcecolumnXtype: 'text', //筛选列 类型
      resourcecolumnWidth: '60', //列的宽度
      resourcecolumnOrder: '3', //列的序号
      resourcecolumnHidden: 0, //是否隐藏
      resourcecolumnAlign: 'left', //对齐
    },
    {
      resourcecolumnName: '地址', //label
      resourcecolumnCode: 'address', //model-key
      resourcecolumnXtype: 'text', //筛选列 类型
      resourcecolumnWidth: '150', //列的宽度
      resourcecolumnOrder: '5', //列的序号
      resourcecolumnHidden: 0, //是否隐藏
      resourcecolumnAlign: 'left', //对齐
    },
    {
      resourcecolumnName: '职业', //label
      resourcecolumnCode: 'work', //model-key
      resourcecolumnXtype: 'text', //筛选列 类型
      resourcecolumnWidth: '100', //列的宽度
      resourcecolumnOrder: '6', //列的序号
      resourcecolumnHidden: 0, //是否隐藏
      resourcecolumnAlign: 'left', //对齐
    },
    {
      resourcecolumnName: '等级调整', //label
      resourcecolumnNameEn: 'level', //model-key
      resourcecolumnCode: 'level',
      resourcecolumnXtype: 'text', //筛选列 类型
      resourcecolumnWidth: '100', //列的宽度
      resourcecolumnOrder: '7', //列的序号
      resourcecolumnHidden: '0', //是否隐藏
      resourcecolumnAlign: 'left', //对齐
    },
    {
      resourcecolumnName: '涉猎领域（多选）', //label
      resourcecolumnNameEn: 'field', //model-key
      resourcecolumnCode: 'field',
      resourcecolumnXtype: 'text', //筛选列 类型
      resourcecolumnWidth: '200', //列的宽度
      resourcecolumnOrder: '8', //列的序号
      resourcecolumnHidden: '0', //是否隐藏
      resourcecolumnAlign: 'left', //对齐
    },
    {
      resourcecolumnName: '备注（邮箱)', //label
      resourcecolumnNameEn: 'remark', //model-key
      resourcecolumnCode: 'remark',
      resourcecolumnXtype: 'text', //筛选列 类型
      resourcecolumnWidth: '200', //列的宽度
      resourcecolumnOrder: '9', //列的序号
      resourcecolumnHidden: '0', //是否隐藏
      resourcecolumnAlign: 'left', //对齐
    },
  ],
  tableData: getList(100),
};
