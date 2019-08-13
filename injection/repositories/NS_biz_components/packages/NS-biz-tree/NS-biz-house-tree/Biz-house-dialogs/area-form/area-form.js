const resetData = {
  //v-model 绑定字段对象
  modelData: {
    parentId: '',
    houseName: '',
  },
  //表单信息
  info: {
    funcinfoFormlabelwidth: 150,
    funcinfoFormcols: 1, //表单所占列数
  },
  //表单控件循环信息
  fields: [
    //区域名称
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'houseName', //表单model字段名称
      resourcefieldName: '区域名称', //表单字段 lable 名称
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入区域名称', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: 'string', //验证字段的 内容类型
      resourcefieldOtherconfigObject: null,
      resourcefieldEmptytext: '请输入区域名称', //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 700, //表单元素部分宽度
      fieldHeight: 32, //表单元素部分高度
      min: null, //min
      max: null, //max
      resourcefieldStep: null, //step 步长
      resourcefieldRowspan: null, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: false, //是否可编辑
      resourcefieldColspan: 1, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: null, //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [], //事件名称集合
    },
  ],
};
export default resetData;
