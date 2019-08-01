//roleStaticData 新增角色组 表单本地数据
const roleStaticData = {
  //v-model 绑定字段对象
  modelData: {
    //"rolecategoryId": "",//角色组 - select
    // "menuSaveVos": []//功能按钮权限 - checkbox
  },
  //表单信息
  info: {
    funcinfoFormlabelwidth: 150,
    funcinfoFormcols: 1, //表单所占列数
  },
  //表单控件循环信息
  fields: [
    //角色组 - select
    {
      resourcefieldXtype: 'select', //表单类型
      resourcefieldCode: 'rolecategoryId', //表单model字段名称
      resourcefieldName: '角色组', //表单字段 lable 名称
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入角色组', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: 'r', //验证字段的 内容类型
      resourcefieldOtherconfigObject: {
        //role-group
        secondXtype: 'role-group', //表单控件分支小类type,如input=>input-text,input-textere
        min: undefined, //min
        max: undefined, //max
      },
      resourcefieldEmptytext: '请输入角色组', //placeholder的值
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
    //功能按钮权限 - checkbox
    {
      resourcefieldXtype: 'checkbox', //表单类型
      resourcefieldCode: 'menuSaveVos', //表单model字段名称
      resourcefieldName: '功能按钮权限', //表单字段 lable 名称
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请选择功能按钮权限', //必填出错 提示信息
      resourcefieldAllowblankexp: 'roleFnBtn', //内容验证规则
      resourcefieldVtype: 'array', //验证字段的 内容类型
      resourcefieldOtherconfigObject: {
        //roleFnBtn
        secondXtype: 'roleFnBtn', //表单控件分支小类type,如input=>input-text,input-textere
        thirdXtype: 'data-permissions', //控件-业务划分 三级分类
        min: undefined, //min
        max: undefined, //max
      },
      resourcefieldEmptytext: '请选择功能按钮权限', //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 800, //表单元素部分宽度
      fieldHeight: null, //表单元素部分高度
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

export default roleStaticData;
