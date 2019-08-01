// 部门与员工
const employeeStaticData = {
  //v-model 绑定字段对象
  modelData: {
    //"roleids": [],//员工角色 - select
  },
  //表单信息
  info: {
    funcinfoFormlabelwidth: 150,
    funcinfoFormcols: 1, //表单所占列数
  },
  //表单控件循环信息
  fields: [
    //所属部门 - select -（ 模拟下拉，内含树状数据 ）
    {
      resourcefieldXtype: 'select', //表单类型
      resourcefieldCode: 'organizationId', //表单model字段名称
      resourcefieldName: '所属组织', //表单字段 lable 名称
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请选择所属组织', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: 'number', //验证字段的 内容类型
      resourcefieldOtherconfigObject: {
        secondXtype: 'checkbox-tree-select', //表单控件分支小类type,如input=>input-text,input-textere
        thirdXtype: 'role-organization', //控件-业务划分 三级分类
        min: undefined, //min
        max: undefined, //max
      },
      resourcefieldEmptytext: '请选择所属组织', //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 350, //表单元素部分宽度
      fieldHeight: 32, //表单元素部分高度
      resourcefieldStep: null, //step 步长
      resourcefieldRowspan: null, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: false, //是否可编辑
      resourcefieldColspan: 1, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: 'group-addHolder', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [], //事件名称集合
    },
    //员工角色 - select
    {
      resourcefieldXtype: 'select', //表单类型
      resourcefieldCode: 'roleids', //表单model字段名称
      resourcefieldName: '员工角色', //表单字段 lable 名称
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入员工角色', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: 'array', //验证字段的 内容类型
      resourcefieldOtherconfigObject: {
        secondXtype: 'role-employee', //表单控件分支小类type,如input=>input-text,input-textere
        min: undefined, //min
        max: undefined, //max
      },
      resourcefieldEmptytext: '请输入员工角色', //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 350, //表单元素部分宽度
      fieldHeight: 32, //表单元素部分高度
      resourcefieldStep: null, //step 步长
      resourcefieldRowspan: null, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: false, //是否可编辑
      resourcefieldColspan: 1, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: 'group-addHolder', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [], //事件名称集合
    },
  ],
};
export default employeeStaticData;
