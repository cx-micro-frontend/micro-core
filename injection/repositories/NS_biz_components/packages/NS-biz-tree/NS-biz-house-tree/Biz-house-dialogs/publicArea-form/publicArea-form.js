const resetData = {
  //v-model 绑定字段对象
  modelData: {
    parentHouseName: '', //父节点
    houseName: '', //公共区域名称
    publicAreaShortName: '', //公共区域简称
    houseNo: '', //公共区域编号
    deliveryTime: '', //移交日期
    remark: '', //备注
    buildingArea: '', //建筑面积
    qrCode: '', //二维码
    developer: '', //开发商
    builder: '', //建筑商
    startWorkTime: '', //开工日期
    completeTime: '', //竣工日期
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
    //公共区域名称
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'houseName', //表单model字段名称
      resourcefieldName: '公共区域名称', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入公共区域名称', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入公共区域名称', //placeholder的值
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
    //公共区域编号
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'houseNo', //表单model字段名称
      resourcefieldName: '公共区域编号', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入公共区域编号', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入公共区域编号', //placeholder的值
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
    //公共区域简称
    {
      resourcefieldXtype: 'input', //表单类型
      resourcefieldCode: 'publicAreaShortName', //表单model字段名称
      resourcefieldName: '公共区域简称', //表单字段 lable 名称
      funcinfoFormlabelwidth: 0, //表单字段 lable 宽度
      isfieldRequired: true, //是否必填 required
      resourcefieldBinding: '请输入公共区域简称', //必填出错 提示信息
      resourcefieldAllowblankexp: null, //内容验证规则
      resourcefieldVtype: null, //验证字段的内容类型
      resourcefieldOtherconfigObject: {
        resourcefieldSecondCode: 'ownerName', //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        secondXtype: 'link', //表单控件分支小类type,如input=>input-text,input-textere
        min: null, //min
        max: null, //max
      },
      resourcefieldEmptytext: '请输入公共区域简称', //placeholder的值
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
        {
          resourcefieldXtype: 'separator', //表单类型
          resourcefieldCode: 'displayfield2', //表单model字段名称
          resourcefieldName: '详细信息', //表单字段 lable 名称
          isfieldRequired: false, //是否必填 required
          resourcefieldBinding: 'click-groupSwitch', //必填出错 提示信息
          resourcefieldAllowblankexp: null, //内容验证规则
          resourcefieldVtype: '', //验证字段的 内容类型
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
          resourcefieldBindingfnList: ['click-groupSwitch'], //事件名称集合
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
            max: null, //max
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
            'value-format': 'yyyy-MM-dd',
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
      ],
    },
  ],
};
export default resetData;
