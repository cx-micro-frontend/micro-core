const resetData = {
  //v-model 绑定字段对象
  modelData: {
    parentId: '',
    parentHouseName: '', //父节点
    houseName: '', //单元名称
    houseNo: '', //单元编号
    unitShortName: '', //单元简称
    remark: '', //备注
  },
  //表单信息
  info: {
    funcinfoFormlabelwidth: 150,
    funcinfoFormcols: 2, //表单所占列数
  },
  //表单控件循环信息
  fields: [
    //父节点
    {
      resourcefieldXtype: 'text', //表单类型
      resourcefieldCode: 'parentHouseName', //表单model字段名称
      resourcefieldName: '父节点', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: null, //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName',
        secondXtype: 'span',
      },
      resourcefieldEmptytext: null, //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 650, //表单元素部分宽度
      fieldHeight: 32, //表单元素部分高度
      resourcefieldStep: null, //step 步长
      resourcefieldRowspan: 10, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: false, //是否可编辑
      resourcefieldColspan: 2, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: 'before', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [],
    },
    //单元名称
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'houseName', //表单model字段名称
      resourcefieldName: '单元名称', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入单元名称', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入单元名称', //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 350, //表单元素部分宽度
      fieldHeight: 32, //表单元素部分高度
      resourcefieldStep: null, //step 步长
      resourcefieldRowspan: 10, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: true, //是否可编辑
      resourcefieldColspan: 1, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: 'before', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [],
    },
    //单元编号
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'houseNo', //表单model字段名称
      resourcefieldName: '单元编号', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入单元编号', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入单元编号', //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 350, //表单元素部分宽度
      fieldHeight: 32, //表单元素部分高度
      resourcefieldStep: null, //step 步长
      resourcefieldRowspan: 10, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: true, //是否可编辑
      resourcefieldColspan: 1, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: 'before', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [],
    },
    //单元简称
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'unitShortName', //表单model字段名称
      resourcefieldName: '单元简称', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入单元简称', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入单元简称', //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 350, //表单元素部分宽度
      fieldHeight: 32, //表单元素部分高度
      resourcefieldStep: null, //step 步长
      resourcefieldRowspan: 10, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: true, //是否可编辑
      resourcefieldColspan: 1, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: 'before', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [],
    },
    //备注
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'remark', //表单model字段名称
      resourcefieldName: '备注', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: '', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        secondXtype: 'textarea',
        max: 200,
      },
      resourcefieldEmptytext: '请输入备注（输入字数限制: 0-200）', //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 700, //表单元素部分宽度
      fieldHeight: 64, //表单元素部分高度
      resourcefieldStep: null, //step 步长
      resourcefieldRowspan: 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: false, //是否可编辑
      resourcefieldColspan: 2, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: '', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [],
    },
  ],
};
export default resetData;
