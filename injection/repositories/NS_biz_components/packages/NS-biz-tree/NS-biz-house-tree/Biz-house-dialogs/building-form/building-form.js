const resetData = {
  //v-model 绑定字段对象
  modelData: {
    parentId: '', //父节点
    parentHouseName: '', //父节点
    houseName: '', //楼栋名称
    houseNo: '', //楼栋编号
    buildingShortName: '', //楼栋简称
    developer: '', //开发商
    builder: '', //建筑商
    remark: '', //备注
    startWorkTime: '', //开工日期
    completeTime: '', //竣工日期
    deliveryTime: '', //交付日期
    buildingArea: '', //建筑面积
    totalFloorNumber: '', //总层数
    totalRoomNumber: '', //总房间数
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
    //楼栋名称
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'houseName', //表单model字段名称
      resourcefieldName: '楼栋名称', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入楼栋名称', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: 25, //max
      },
      resourcefieldEmptytext: '请输入楼栋名称', //placeholder的值
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
    //楼栋编号
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'houseNo', //表单model字段名称
      resourcefieldName: '楼栋编号', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入楼栋编号', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: 15, //max
      },
      resourcefieldEmptytext: '请输入楼栋编号', //placeholder的值
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
    //楼栋简称
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'buildingShortName', //表单model字段名称
      resourcefieldName: '楼栋简称', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入楼栋简称', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: 25, //max
      },
      resourcefieldEmptytext: '请输入楼栋简称', //placeholder的值
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
    //详细信息
    {
      resourcefieldXtype: 'group', //表单类型
      resourcefieldCode: 'fieldset2', //表单model字段名称
      resourcefieldName: '详细信息', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: '', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        'labelWidth ': '150',
      },
      resourcefieldEmptytext: '', //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: null, //表单元素部分宽度
      fieldHeight: null, //表单元素部分高度
      resourcefieldStep: null, //step 步长
      resourcefieldRowspan: 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: false, //是否可编辑
      resourcefieldColspan: 2, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: 'fieldset2', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [],
      children: [
        //详细信息
        {
          resourcefieldXtype: 'separator', //表单类型
          resourcefieldCode: 'displayfield2', //表单model字段名称
          resourcefieldName: '详细信息', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: 'click-groupSwitch', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            secondXtype: 'more',
          },
          resourcefieldEmptytext: '', //placeholder的值
          isResourcefieldRemoved: false, //是否禁用
          isResourcefieldReadonly: false, //是否只读
          fieldWidth: 800, //表单元素部分宽度
          fieldHeight: 32, //表单元素部分高度
          resourcefieldStep: null, //step 步长
          resourcefieldRowspan: 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
          resourcefieldFieldcls: null, //表单控件图标
          isResourcefieldEditable: false, //是否可编辑
          resourcefieldColspan: 2, //所占列数
          items: null, //表单控件内容部分（checkbox，radio......）
          resourcefieldGroupname: 'fieldset2', //分组名称
          isResourcefieldHidden: false, //是否隐藏
          resourcefieldBindingfnList: ['click-groupSwitch'],
          children: [],
        },
        //开发商
        {
          resourcefieldXtype: 'select', //表单类型
          resourcefieldCode: 'developer', //表单model字段名称
          resourcefieldName: '开发商', //表单字段 lable 名称
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请选择开发商', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: 'string', //验证字段的 内容类型
          resourcefieldOtherconfigObject: {
            secondXtype: 'customer-info-single', //表单控件分支小类type,如input=>input-text,input-textere
            thirdXtype: 'vehicle', //控件-业务划分 三级分类
            dynamicUrl: 'owner/customer/list-customer-search',
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '', //placeholder的值
          isResourcefieldRemoved: true, //是否禁用
          isResourcefieldReadonly: false, //是否只读
          fieldWidth: 350, //表单元素部分宽度
          fieldHeight: 32, //表单元素部分高度
          resourcefieldStep: null, //step 步长
          resourcefieldRowspan: null, //row 值 - 所占 行数 （textarea / avatar / span ......）
          resourcefieldFieldcls: null, //表单控件图标
          isResourcefieldEditable: false, //是否可编辑
          resourcefieldColspan: 1, //所占列数
          items: null, //表单控件内容部分（checkbox，radio......）
          resourcefieldGroupname: 'fieldset2', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [], //事件名称集合
        },
        //建筑商
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'builder', //表单model字段名称
          resourcefieldName: '建筑商', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入建筑商', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: 25, //max
          },
          resourcefieldEmptytext: '请输入建筑商', //placeholder的值
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
          resourcefieldGroupname: 'fieldset2', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [],
        },
        //开工日期 - datepicker
        {
          resourcefieldXtype: 'datepicker', //表单类型
          resourcefieldCode: 'startWorkTime', //表单model字段名称
          resourcefieldName: '开工日期', //表单字段 lable 名称
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请选择开工日期', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: 'date', //验证字段的 内容类型
          resourcefieldOtherconfigObject: {
            secondXtype: 'date', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd',
          },
          resourcefieldEmptytext: '请选择开工日期', //placeholder的值
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
          resourcefieldGroupname: 'fieldset2', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [], //事件名称集合
        },
        //竣工日期 - datepicker
        {
          resourcefieldXtype: 'datepicker', //表单类型
          resourcefieldCode: 'completeTime', //表单model字段名称
          resourcefieldName: '竣工日期', //表单字段 lable 名称
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请选择竣工日期', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: 'date', //验证字段的 内容类型
          resourcefieldOtherconfigObject: {
            secondXtype: 'date', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd',
          },
          resourcefieldEmptytext: '请选择竣工日期', //placeholder的值
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
          resourcefieldGroupname: 'fieldset2', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [], //事件名称集合
        },
        //交付日期
        {
          resourcefieldXtype: 'datepicker', //表单类型
          resourcefieldCode: 'deliveryTime', //表单model字段名称
          resourcefieldName: '交付日期', //表单字段 lable 名称
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请选择交付日期', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: 'date', //验证字段的 内容类型
          resourcefieldOtherconfigObject: {
            secondXtype: 'date', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd',
          },
          resourcefieldEmptytext: '请选择交付日期', //placeholder的值
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
          resourcefieldGroupname: 'fieldset2', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [], //事件名称集合
        },
        //建筑面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'buildingArea', //表单model字段名称
          resourcefieldName: '建筑面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入建筑面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: 15, //max
          },
          resourcefieldEmptytext: '请输入建筑面积', //placeholder的值
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
          resourcefieldGroupname: 'fieldset2', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [],
        },
        //总层数
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'totalFloorNumber', //表单model字段名称
          resourcefieldName: '总层数(层)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入总层数', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: 9, //max
          },
          resourcefieldEmptytext: '请输入总层数', //placeholder的值
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
          resourcefieldGroupname: 'fieldset2', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [],
        },
        //总房间数
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'totalRoomNumber', //表单model字段名称
          resourcefieldName: '总房间数(间)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入总房间数', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: 9, //max
          },
          resourcefieldEmptytext: '请输入总房间数', //placeholder的值
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
          resourcefieldGroupname: 'fieldset2', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [],
        },
      ],
    },
  ],
};
export default resetData;
