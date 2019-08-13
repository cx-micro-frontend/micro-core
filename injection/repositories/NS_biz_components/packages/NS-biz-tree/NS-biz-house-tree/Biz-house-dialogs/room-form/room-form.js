const resetData = {
  //v-model 绑定字段对象
  modelData: {
    parentId: '',
    parentHouseName: '', //父节点
    houseName: '', //房号
    roomShortName: '', //房产简称
    houseNo: '', //房产编号
    isVirtual: false, //是否虚拟
    floor: '', //楼层
    floorNum: '', //楼层号
    chargingArea: '', //计费面积
    assistChargingArea: '', //辅助计费面积
    isBlockUp: false, //是否停用
    roomPropertyId: '', //房产性质
    roomHouseType: '', //房产户型
    deliveryTime: '', //移交日期
    roomTypeId: '', //房产类型
    takeOverTime: '', //收房日期
    maintenanceDate: [], //维保日期
    remark: '', //备注
    insideArea: '', //套内面积
    poolArea: '', //公摊面积
    gardenArea: '', //花园面积
    basementArea: '', //地下室面积
    giftArea: '', //赠送面积
    buildingArea: '', //建筑面积
    qrCode: '', //二维码
  },
  //表单信息
  info: {
    funcinfoFormlabelwidth: 150,
    funcinfoFormcols: 2, //表单所占列数
  },
  //表单控件循环信息
  fields: [
    // 基本信息
    {
      resourcefieldXtype: 'separator', //表单类型
      resourcefieldCode: 'displayfield1', //表单model字段名称
      resourcefieldName: '基本信息', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: null, //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        secondXtype: 'simple',
      },
      resourcefieldEmptytext: null, //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 700, //表单元素部分宽度
      fieldHeight: 32, //表单元素部分高度
      resourcefieldStep: 0, //step 步长
      resourcefieldRowspan: 2, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: false, //是否可编辑
      resourcefieldColspan: 2, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: '', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [],
    },
    // 基本信息
    {
      resourcefieldXtype: 'group', //表单类型
      resourcefieldCode: 'fieldset1', //表单model字段名称
      resourcefieldName: '基本信息', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: null, //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: null,
      resourcefieldEmptytext: null, //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: null, //表单元素部分宽度
      fieldHeight: null, //表单元素部分高度
      resourcefieldStep: 0, //step 步长
      resourcefieldRowspan: 2, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: false, //是否可编辑
      resourcefieldColspan: 1, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: 'fieldset1', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [],
    },
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
    //房号
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'houseName', //表单model字段名称
      resourcefieldName: '房号', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入房号', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入房号', //placeholder的值
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
    //房产编号
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'houseNo', //表单model字段名称
      resourcefieldName: '房产编号', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入房产编号', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入房产编号', //placeholder的值
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
      resourcefieldGroupname: '', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [],
    },
    //房产简称
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'roomShortName', //表单model字段名称
      resourcefieldName: '房产简称', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入房产简称', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入房产简称', //placeholder的值
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
    //计费面积
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'chargingArea', //表单model字段名称
      resourcefieldName: '计费面积(m²)', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入计费面积', //必填出错 提示信息
      resourcefieldAllowblankexp: 'num', //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入计费面积', //placeholder的值
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
    //楼层
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'floor', //表单model字段名称
      resourcefieldName: '楼层(层)', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入楼层', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入楼层', //placeholder的值
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
    //辅助计费面积
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'assistChargingArea', //表单model字段名称
      resourcefieldName: '辅助计费面积(m²)', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: '请输入辅助计费面积', //必填出错 提示信息
      resourcefieldAllowblankexp: 'num', //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入辅助计费面积', //placeholder的值
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
    //楼层号
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'floorNum', //表单model字段名称
      resourcefieldName: '楼层号', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: '请输入楼层号', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入楼层号', //placeholder的值
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
    //房产类型
    {
      resourcefieldXtype: 'select', //表单类型
      resourcefieldCode: 'roomTypeId', //表单model字段名称
      resourcefieldName: '房产类型', //表单字段 lable 名称
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: '请选择房产类型', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: null,
      resourcefieldEmptytext: '请选择房产类型', //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 350, //表单元素部分宽度
      fieldHeight: 32, //表单元素部分高度
      resourcefieldStep: null, //step 步长
      resourcefieldRowspan: 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: false, //是否可编辑
      resourcefieldColspan: 1, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: '', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: ['请选择房产类型'], //事件名称集合
    },
    //是否停用
    {
      resourcefieldXtype: 'switch', //表单类型
      resourcefieldCode: 'isBlockUp', //表单model字段名称
      resourcefieldName: '是否停用', //表单字段 lable 名称
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: '是否停用', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: 'boolean', //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        secondXtype: null, //表单控件分支小类type,如input=>input-text,input-textere
        freedom: true, //el-form-item / ns-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: null, //placeholder的值
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
      resourcefieldGroupname: '', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [], //事件名称集合
    },
    //是否虚拟
    {
      resourcefieldXtype: 'switch', //表单类型
      resourcefieldCode: 'isVirtual', //表单model字段名称
      resourcefieldName: '是否虚拟', //表单字段 lable 名称
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: '是否虚拟', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: 'boolean', //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        secondXtype: null, //表单控件分支小类type,如input=>input-text,input-textere
        freedom: true, //el-form-item / ns-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: null, //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 300, //表单元素部分宽度
      fieldHeight: 32, //表单元素部分高度
      resourcefieldStep: null, //step 步长
      resourcefieldRowspan: null, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: false, //是否可编辑
      resourcefieldColspan: 1, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: '', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [], //事件名称集合
    },
    //二维码
    {
      resourcefieldXtype: 'avatar', //表单类型
      resourcefieldCode: 'qrCode', //表单model字段名称
      resourcefieldName: '二维码', //表单字段 lable 名称
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: null, //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的 内容类型
      resourcefieldOtherconfigObject: {
        secondXtype: 'normal', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: null, //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 300, //表单元素部分宽度
      fieldHeight: 150, //表单元素部分高度
      resourcefieldStep: null, //step 步长
      resourcefieldRowspan: null, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: false, //是否可编辑
      resourcefieldColspan: 2, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: '', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [], //事件名称集合
    },
    //备注
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'remark', //表单model字段名称
      resourcefieldName: '备注', //表单字段 lable 名称
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: null, //必填出错 提示信息
      resourcefieldAllowblankexp: 'x-y-long', //内容验证规则
      resourcefieldVtype: null, //验证字段的 内容类型
      resourcefieldOtherconfigObject: {
        secondXtype: 'textarea', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: 200, //max
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
      resourcefieldBindingfnList: [], //事件名称集合
    },
    //详细信息
    {
      resourcefieldXtype: 'group', //表单类型
      resourcefieldCode: 'fieldset2', //表单model字段名称
      resourcefieldName: '详细信息', //表单字段 lable 名称
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: null, //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的 内容类型
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
      resourcefieldBindingfnList: [], //事件名称集合
      children: [
        // 详细信息
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
          fieldWidth: 700, //表单元素部分宽度
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
            max: null, //max
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
        //套内面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'insideArea', //表单model字段名称
          resourcefieldName: '套内面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入套内面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入套内面积', //placeholder的值
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
        //公摊面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'poolArea', //表单model字段名称
          resourcefieldName: '公摊面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入公摊面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入公摊面积', //placeholder的值
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
        //花园面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'gardenArea', //表单model字段名称
          resourcefieldName: '花园面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入花园面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入花园面积', //placeholder的值
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
        //地下室面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'basementArea', //表单model字段名称
          resourcefieldName: '地下室面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入地下室面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入地下室面积', //placeholder的值
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
        //赠送面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'giftArea', //表单model字段名称
          resourcefieldName: '赠送面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入赠送面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入赠送面积', //placeholder的值
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
        //房产性质
        {
          resourcefieldXtype: 'select', //表单类型
          resourcefieldCode: 'roomPropertyId', //表单model字段名称
          resourcefieldName: '房产性质', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请选择房产性质', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: null,
          resourcefieldEmptytext: '请选择房产性质', //placeholder的值
          isResourcefieldRemoved: false, //是否禁用
          isResourcefieldReadonly: false, //是否只读
          fieldWidth: 350, //表单元素部分宽度
          fieldHeight: 32, //表单元素部分高度
          resourcefieldStep: null, //step 步长
          resourcefieldRowspan: 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
          resourcefieldFieldcls: null, //表单控件图标
          isResourcefieldEditable: false, //是否可编辑
          resourcefieldColspan: 1, //所占列数
          items: null, //表单控件内容部分（checkbox，radio......）
          resourcefieldGroupname: 'fieldset2', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: ['请选择房产性质'],
        },
        //房产户型
        {
          resourcefieldXtype: 'select', //表单类型
          resourcefieldCode: 'roomHouseType', //表单model字段名称
          resourcefieldName: '房产户型', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请选择房产户型', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: null,
          resourcefieldEmptytext: '请选择房产户型', //placeholder的值
          isResourcefieldRemoved: false, //是否禁用
          isResourcefieldReadonly: false, //是否只读
          fieldWidth: 350, //表单元素部分宽度
          fieldHeight: 32, //表单元素部分高度
          resourcefieldStep: null, //step 步长
          resourcefieldRowspan: 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
          resourcefieldFieldcls: null, //表单控件图标
          isResourcefieldEditable: false, //是否可编辑
          resourcefieldColspan: 1, //所占列数
          items: null, //表单控件内容部分（checkbox，radio......）
          resourcefieldGroupname: 'fieldset2', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: ['请选择房产户型'],
          children: [],
        },
        //移交日期 - datepicker
        {
          resourcefieldXtype: 'datepicker', //表单类型
          resourcefieldCode: 'deliveryTime', //表单model字段名称
          resourcefieldName: '移交日期', //表单字段 lable 名称
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请选择移交日期', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: 'date', //验证字段的 内容类型
          resourcefieldOtherconfigObject: {
            secondXtype: 'date', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd HH:mm:ss',
          },
          resourcefieldEmptytext: '请选择移交日期', //placeholder的值
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
        //收房日期 - datepicker
        {
          resourcefieldXtype: 'datepicker', //表单类型
          resourcefieldCode: 'takeOverTime', //表单model字段名称
          resourcefieldName: '收房日期', //表单字段 lable 名称
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请选择收房日期', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: 'date', //验证字段的 内容类型
          resourcefieldOtherconfigObject: {
            secondXtype: 'date', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd HH:mm:ss',
          },
          resourcefieldEmptytext: '请选择收房日期', //placeholder的值
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
        //维保日期
        {
          resourcefieldXtype: 'datepicker', //表单类型
          resourcefieldCode: 'maintenanceDate', //表单model字段名称
          resourcefieldName: '维保日期', //表单字段 lable 名称
          funcinfoFormlabelwidth: 150, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请选择维保日期', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: 'date', //验证字段的 内容类型
          resourcefieldOtherconfigObject: {
            secondXtype: 'daterange', //表单控件分支小类type,如input=>input-text,input-textere
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd',
          },
          resourcefieldEmptytext: '请选择维保日期', //placeholder的值
          isResourcefieldRemoved: false, //是否禁用
          isResourcefieldReadonly: false, //是否只读
          fieldWidth: 700, //表单元素部分宽度
          fieldHeight: 32, //表单元素部分高度
          resourcefieldStep: null, //step 步长
          resourcefieldRowspan: null, //row 值 - 所占 行数 （textarea / avatar / span ......）
          resourcefieldFieldcls: null, //表单控件图标
          isResourcefieldEditable: false, //是否可编辑
          resourcefieldColspan: 2, //所占列数
          items: null, //表单控件内容部分（checkbox，radio......）
          resourcefieldGroupname: 'fieldset2', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [], //事件名称集合
        },

        //备注
        // {
        // 	"isfieldRequired": false,
        // 	"resourcefieldAllowblankexp": "",
        // 	"resourcefieldAllowblankexpfn": "",
        // 	"resourcefieldBgcolor": "",
        // 	"resourcefieldBinding": "",
        // 	"resourcefieldBindingfnList": [],
        // 	"resourcefieldCode": "remark",
        // 	"resourcefieldCols": 0,
        // 	"resourcefieldColspan": 2,
        // 	"resourcefieldConfiginfo": "",
        // 	"resourcefieldDescription": "",
        // 	"isResourcefieldDisabled": true,
        // 	"isResourcefieldEditable": false,
        // 	"resourcefieldEmptytext": "请输入备注",
        // 	"resourcefieldEnableexp": "",
        // 	"resourcefieldEnableexpfn": "",
        // 	"resourcefieldEnabletip": "",
        // 	"resourcefieldFieldcls": "",
        // 	"resourcefieldFieldcolor": "",
        // 	"resourcefieldFieldlazy": "1",
        // 	"resourcefieldFlex": "",
        // 	"resourcefieldGroupname": "fieldset2",
        // 	"fieldHeight": 64,
        // 	"isResourcefieldHidden": true,
        // 	"resourcefieldHistory": "0",
        // 	"resourcefieldIfimpl": "1",
        // 	"resourcefieldInterpreter": "0",
        // 	"resourcefieldInterpreterfn": "",
        // 	"resourcefieldIspk": "0",
        // 	"resourcefieldJslistener": "",
        // 	"resourcefieldLabelcolor": "",
        // 	"resourcefieldLocate": "0",
        // 	"resourcefieldMaxvalue": 0,
        // 	"resourcefieldMinvalue": 0,
        // 	"resourcefieldName": "备注",
        // 	"resourcefieldNameEn": "remark",
        // 	"resourcefieldNewfuncid": "",
        // 	"resourcefieldOtherconfig": "{\"secondXtype\":\"textarea\"}",
        // 	"resourcefieldOtherconfigObject": {
        // 		"secondXtype": "textarea"
        // 	},
        // 	"isResourcefieldReadonly": false,
        // 	"resourcefieldReadonlyexp": "",
        // 	"resourcefieldReadonlyexpfn": "",
        // 	"resourcefieldRegex": "",
        // 	"resourcefieldRegextext": "",
        // 	"resourcefieldRemoved": "0",
        // 	"isResourcefieldRemoved": false,
        // 	"resourcefieldRowfield": "",
        // 	"resourcefieldRowspan": 1,
        // 	"resourcefieldStep": 0,
        // 	"resourcefieldSysmode": "",
        // 	"resourcefieldUnitlisttpl": "[]",
        // 	"resourcefieldUnittpl": "",
        // 	"resourcefieldValue": "",
        // 	"resourcefieldValuefn": "",
        // 	"resourcefieldVtype": "",
        // 	"resourcefieldVtypeconfig": "",
        // 	"fieldWidth": 700,
        // 	"resourcefieldXtype": "input",
        // 	"syOrderindex": 59,
        // 	"items": null,
        // 	"itemsObj": null,
        // 	"ddcode": null,
        // 	"value": null,
        // 	"children": [],
        // 	"tableHeader": null
        // },
      ],
    },
  ],
};
export default resetData;
