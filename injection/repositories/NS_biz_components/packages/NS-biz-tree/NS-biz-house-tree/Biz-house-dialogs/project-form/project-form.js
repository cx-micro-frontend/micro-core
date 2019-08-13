const resetData = {
  //v-model 绑定字段对象
  modelData: {
    parentId: '',
    parentHouseName: '', //父节点
    houseName: '', //项目名称
    refOrganizationId: '', //所属组织
    proShortName: '', //项目简称
    houseNo: '', //项目编号
    proTypeId: '', //项目类型
    performanceStatus: '', //履行状态
    proNature: '', //项目性质
    developer: '', //开发商
    builder: '', //承建商
    provinceCityArea: {
      //省市区
      province: '',
      city: '',
      district: '',
    },
    address: '', //地址
    remark: '', //备注
    startWorkTime: '', //开工日期
    completeTime: '', //竣工日期
    deliveryTime: '', //移交日期
    quitTime: '', //退出日期
    takeOverTime: '', //接管日期
    buildingArea: '', //总建筑面积
    floorArea: '', //占地面积
    groundArea: '', //地上面积
    undergroundArea: '', //地下面积
    deliveryArea: '', //已交付面积
    greenArea: '', //绿化面积
    assistArea: '', //辅助面积
    greeningRate: '', //绿化率
    plotRatio: '', //容积率
    households: '', //总户数
    checkInHouseholds: '', //入住户数
    groundParkingSpace: '', //地面车位数
    groundParkingChargeStandard: '', //地面车位费标准
    tempParkingSpace: '', //临停车位数
    proManager: '', //项目负责人
    proManagerPhone: '', //项目负责人电话
    managementPhone: '', //管理处电话
    servicePhone: '', //客服电话
    propertyManageArea: '', //物业管理用房面积
    propertyOperateArea: '', //物业经营用房面积
    hallArea: '', //会馆面积
    communityArea: '', //社区用房面积
  },
  //表单信息
  info: {
    funcinfoFormlabelwidth: 150,
    funcinfoFormcols: 2, //表单所占列数
  },
  //表单控件循环信息
  fields: [
    //基本信息
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
      resourcefieldStep: null, //step 步长
      resourcefieldRowspan: 2, //row 值 - 所占 行数 （textarea / avatar / span ......）
      resourcefieldFieldcls: null, //表单控件图标
      isResourcefieldEditable: false, //是否可编辑
      resourcefieldColspan: 2, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: '', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [],
    },
    //基本信息
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
      resourcefieldStep: null, //step 步长
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
    //项目名称
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'houseName', //表单model字段名称
      resourcefieldName: '项目名称', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入项目名称', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入项目名称', //placeholder的值
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
    //所属组织 - select -（ 模拟下拉，内含树状数据 ）
    {
      resourcefieldXtype: 'select', //表单类型
      resourcefieldCode: 'refOrganizationId', //表单model字段名称
      resourcefieldName: '所属组织', //表单字段 lable 名称
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请选择所属组织', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: 'number', //验证字段的 内容类型
      resourcefieldOtherconfigObject: {
        clearable: false,
        // "dynamicQuery": "3",
        // "secondXtype": "role-organization", //表单控件分支小类type,如input=>input-text,input-textere
        // "min": null, //min
        // "max": null, //max
      },
      resourcefieldEmptytext: '请选择所属组织', //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 350, //表单元素部分宽度
      fieldHeight: 32, //表单元素部分高度
      min: null, //min
      max: null, //max
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
    //项目简称
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'proShortName', //表单model字段名称
      resourcefieldName: '项目简称', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入项目简称', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入项目简称', //placeholder的值
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
    //项目编号
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'houseNo', //表单model字段名称
      resourcefieldName: '项目编号', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入项目编号', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入项目编号', //placeholder的值
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
    //项目地址 - cascader
    {
      resourcefieldXtype: 'select', //表单类型
      resourcefieldCode: 'provinceCityArea', //表单model字段名称
      resourcefieldName: '项目地址', //表单字段 lable 名称
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请选择省市区', //必填出错 提示信息
      resourcefieldAllowblankexp: 'area', //内容验证规则
      resourcefieldVtype: 'Object', //验证字段的 内容类型
      resourcefieldOtherconfigObject: {
        secondXtype: 'area', //表单控件分支小类type,如input=>input-text,input-textere
        dynamicUrl: '/owner/owner-rest/house/init-province-city-area',
        dynamicQuery: '',
        min: null,
        max: null,
      },
      resourcefieldEmptytext: null, //placeholder的值
      isResourcefieldRemoved: false, //是否禁用
      isResourcefieldReadonly: false, //是否只读
      fieldWidth: 700,
      fieldHeight: 32,
      resourcefieldStep: null,
      resourcefieldRowspan: null,
      resourcefieldFieldcls: 'search',
      isResourcefieldEditable: false,
      resourcefieldColspan: 2,
      items: [],
      resourcefieldGroupname: '', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [], //事件名称集合
    },
    //地址 - input
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'address', //表单model字段名称
      resourcefieldName: null, //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入地址', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: 'string', //验证字段的 内容类型
      resourcefieldOtherconfigObject: {
        secondXtype: 'text', //表单控件分支小类type,如input=>input-text,input-textere
      },
      resourcefieldEmptytext: '请输入地址', //placeholder的值
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
      resourcefieldColspan: 2, //所占列数
      items: null, //表单控件内容部分（checkbox，radio......）
      resourcefieldGroupname: '', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      resourcefieldBindingfnList: [], //事件名称集合
      src: '', //图片操作地址（获取地址，上传地址）
    },
    // 项目类型
    {
      resourcefieldBinding: '请选择项目类型', //必填出错 提示信息
      resourcefieldBindingfnList: ['请选择项目类型'], //事件名称集合
      resourcefieldCode: 'proTypeId', //表单model字段名称
      resourcefieldXtype: 'select', //表单类型
      resourcefieldName: '项目类型', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: '', //验证字段的 内容类型
      resourcefieldOtherconfigObject: {
        clearable: false,
      },
      resourcefieldEmptytext: '请选择项目类型', //placeholder的值
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
      children: [],
    },
    //项目性质
    {
      resourcefieldXtype: 'select', //表单类型
      resourcefieldCode: 'proNature', //表单model字段名称
      resourcefieldName: '项目性质', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: false, //是否必填 required
      resourcefieldBinding: '请选择项目性质', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: '', //验证字段的 内容类型
      resourcefieldOtherconfigObject: {
        clearable: false,
      },
      resourcefieldEmptytext: '请选择项目性质', //placeholder的值
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
      resourcefieldBindingfnList: ['请选择项目性质'], //事件名称集合
      children: [],
    },
    //履行状态
    {
      resourcefieldBinding: '请选择履行状态', //必填出错 提示信息
      resourcefieldBindingfnList: ['请选择履行状态'], //事件名称集合
      resourcefieldCode: 'performanceStatus', //表单model字段名称
      resourcefieldXtype: 'select', //表单类型
      resourcefieldName: '履行状态', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: false, //是否必填 required
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: '', //验证字段的 内容类型
      resourcefieldOtherconfigObject: {
        clearable: false,
      },
      resourcefieldEmptytext: '请选择履行状态', //placeholder的值
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
      children: [],
    },
    //备注
    {
      resourcefieldBinding: '请选择项目类型', //必填出错 提示信息
      resourcefieldBindingfnList: ['请选择项目类型'], //事件名称集合
      resourcefieldCode: 'remark', //表单model字段名称
      resourcefieldXtype: 'input', //表单类型
      resourcefieldName: '备注', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: false, //是否必填 required
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: '', //验证字段的 内容类型
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
      children: [],
    },
    //详细信息
    {
      resourcefieldBinding: '', //必填出错 提示信息
      resourcefieldBindingfnList: [], //事件名称集合
      resourcefieldCode: 'fieldset2', //表单model字段名称
      resourcefieldXtype: 'group', //表单类型
      resourcefieldName: '详细信息', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: false, //是否必填 required
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: '', //验证字段的 内容类型
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
      children: [
        //详细信息
        {
          resourcefieldBinding: 'click-groupSwitch', //必填出错 提示信息
          resourcefieldBindingfnList: ['click-groupSwitch'], //事件名称集合
          resourcefieldCode: 'displayfield2', //表单model字段名称
          resourcefieldXtype: 'separator', //表单类型
          resourcefieldName: '详细信息', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: '', //验证字段的 内容类型
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
            min: undefined, //min
            max: undefined, //max
          },
          resourcefieldEmptytext: '请选择开发商', //placeholder的值
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
        //承建商
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'builder', //表单model字段名称
          resourcefieldName: '承建商', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入承建商姓名', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入承建商姓名', //placeholder的值
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
            'value-format': 'yyyy-MM-dd HH:mm:ss',
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
            'value-format': 'yyyy-MM-dd HH:mm:ss',
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
        //接管日期 - datepicker
        {
          resourcefieldXtype: 'datepicker', //表单类型
          resourcefieldCode: 'takeOverTime', //表单model字段名称
          resourcefieldName: '接管日期', //表单字段 lable 名称
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请选择接管日期', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: 'date', //验证字段的 内容类型
          resourcefieldOtherconfigObject: {
            secondXtype: 'date', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd HH:mm:ss',
          },
          resourcefieldEmptytext: '请选择接管日期', //placeholder的值
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
        //退出日期 - datepicker
        {
          resourcefieldXtype: 'datepicker', //表单类型
          resourcefieldCode: 'quitTime', //表单model字段名称
          resourcefieldName: '退出日期', //表单字段 lable 名称
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请选择退出日期', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: 'date', //验证字段的 内容类型
          resourcefieldOtherconfigObject: {
            secondXtype: 'date', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd HH:mm:ss',
          },
          resourcefieldEmptytext: '请选择退出日期', //placeholder的值
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
        //总建筑面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'buildingArea', //表单model字段名称
          resourcefieldName: '总建筑面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入总建筑面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入总建筑面积', //placeholder的值
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
        //占地面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'floorArea', //表单model字段名称
          resourcefieldName: '占地面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入占地面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入占地面积', //placeholder的值
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
        //地上面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'groundArea', //表单model字段名称
          resourcefieldName: '地上面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入地上面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入地上面积', //placeholder的值
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
        //地下面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'undergroundArea', //表单model字段名称
          resourcefieldName: '地下面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入地下面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入地下面积', //placeholder的值
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
        //总收费面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'chargeArea', //表单model字段名称
          resourcefieldName: '总收费面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入总收费面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入总收费面积', //placeholder的值
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
        //已交付面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'deliveryArea', //表单model字段名称
          resourcefieldName: '已交付面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入已交付面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入已交付面积', //placeholder的值
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
        //绿化面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'greenArea', //表单model字段名称
          resourcefieldName: '绿化面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入绿化面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入绿化面积', //placeholder的值
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
        //辅助面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'assistArea', //表单model字段名称
          resourcefieldName: '辅助面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入辅助面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入辅助面积', //placeholder的值
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
        //绿化率
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'greeningRate', //表单model字段名称
          resourcefieldName: '绿化率(%)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入绿化率', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'greeningRate', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'input', //表单控件分支小类type,如input=>input-text,input-textere
            min: 0, //min
            max: 100, //max
          },
          resourcefieldEmptytext: '请输入绿化率', //placeholder的值
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
        //容积率
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'plotRatio', //表单model字段名称
          resourcefieldName: '容积率(%)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入容积率', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入容积率', //placeholder的值
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
        //总户数
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'households', //表单model字段名称
          resourcefieldName: '总户数(户)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入总户数', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入总户数', //placeholder的值
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
        //入住户数
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'checkInHouseholds', //表单model字段名称
          resourcefieldName: '入住户数(户)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入入住户数', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入入住户数', //placeholder的值
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
        //地面车位数
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'groundParkingSpace', //表单model字段名称
          resourcefieldName: '地面车位数(个)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入地面车位数', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入地面车位数', //placeholder的值
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
        //地面车位费标准
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'groundParkingChargeStandard', //表单model字段名称
          resourcefieldName: '地面车位费标准', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入地面车位费标准', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入地面车位费标准', //placeholder的值
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
        //临停车位数
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'tempParkingSpace', //表单model字段名称
          resourcefieldName: '临停车位数(个)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入临停车位数', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入临停车位数', //placeholder的值
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
    //物业信息
    {
      resourcefieldBinding: '', //必填出错 提示信息
      resourcefieldBindingfnList: [], //事件名称集合
      resourcefieldCode: 'fieldset3', //表单model字段名称
      resourcefieldXtype: 'group', //表单类型
      resourcefieldName: '物业信息', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: false, //是否必填 required
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: '', //验证字段的 内容类型
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
      resourcefieldGroupname: 'fieldset3', //分组名称
      isResourcefieldHidden: false, //是否隐藏
      children: [
        //填写更多 - separator
        {
          resourcefieldXtype: 'separator', //表单类型
          resourcefieldCode: null, //表单model字段名称
          resourcefieldName: '物业信息', //表单字段 lable 名称
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: null, //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            secondXtype: 'more', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: null, //placeholder的值
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
          resourcefieldGroupname: 'fieldset3', //分组名称
          isResourcefieldHidden: false, //是否隐藏
          resourcefieldBindingfnList: ['click-groupSwitch'], //事件名称集合
        },
        //项目负责人
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'proManager', //表单model字段名称
          resourcefieldName: '项目负责人', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入项目负责人', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入项目负责人', //placeholder的值
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
          resourcefieldGroupname: 'fieldset3', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [],
        },
        //项目负责人电话
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'proManagerPhone', //表单model字段名称
          resourcefieldName: '项目负责人电话', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入项目负责人电话', //必填出错 提示信息
          resourcefieldAllowblankexp: 'mobile', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入项目负责人电话', //placeholder的值
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
          resourcefieldGroupname: 'fieldset3', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [],
        },
        //管理处电话
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'managementPhone', //表单model字段名称
          resourcefieldName: '管理处电话', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入管理处电话', //必填出错 提示信息
          resourcefieldAllowblankexp: 'phOrMob', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入管理处电话', //placeholder的值
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
          resourcefieldGroupname: 'fieldset3', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [],
        },
        //客服电话
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'servicePhone', //表单model字段名称
          resourcefieldName: '客服电话', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入客服电话', //必填出错 提示信息
          resourcefieldAllowblankexp: 'phOrMob', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入客服电话', //placeholder的值
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
          resourcefieldGroupname: 'fieldset3', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [],
        },
        //物业管理用房面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'propertyManageArea', //表单model字段名称
          resourcefieldName: '物业管理用房(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入物业管理用房面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入物业管理用房面积', //placeholder的值
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
          resourcefieldGroupname: 'fieldset3', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [],
        },
        //物业经营用房面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'propertyOperateArea', //表单model字段名称
          resourcefieldName: '物业经营用房(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入物业经营用房面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入物业经营用房面积', //placeholder的值
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
          resourcefieldGroupname: 'fieldset3', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [],
        },
        //社区用房面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'communityArea', //表单model字段名称
          resourcefieldName: '社区用房面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入社区用房面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入社区用房面积', //placeholder的值
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
          resourcefieldGroupname: 'fieldset3', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [],
        },
        //会馆面积
        {
          resourcefieldXtype: 'input', //表单类型
          resourcefieldCode: 'hallArea', //表单model字段名称
          resourcefieldName: '会馆面积(m²)', //表单字段 lable 名称
          funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: '请输入会馆面积', //必填出错 提示信息
          resourcefieldAllowblankexp: 'num', //内容验证规则
          resourcefieldVtype: null, //验证字段的内容类型
          resourcefieldOtherconfigObject: {
            resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
            min: null, //min
            max: null, //max
          },
          resourcefieldEmptytext: '请输入会馆面积', //placeholder的值
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
          resourcefieldGroupname: 'fieldset3', //分组名称
          isResourcefieldHidden: true, //是否隐藏
          resourcefieldBindingfnList: [],
        },
      ],
    },
  ],
};
export default resetData;
