//导入任务列表 （本地表头数据配置）
export default [
  {
    resourcecolumnName: '文件名称', //label
    resourcecolumnNameEn: 'name', //model-key
    resourcecolumnCode: 'name',
    resourcecolumnWidth: '110', //列的宽度
    resourcecolumnOrder: '1', //列的序号
    resourcecolumnHidden: '0', //显示/隐藏
    resourcecolumnXtype: 'link', //筛选列 类型
    fixed: false, //是否为固定列（false left right 三选一)
    editConfig: {
      dataSources: '', //数据来源
      type: 'link', //表单类型
      disabled: false, //表单控件是否禁用
      maxlength: null, //表单控件输入最大长度（只在 input 中有用)
      max: 0, //选择的最大个数（只在checkbox，radio，select-多选  中有用)
      min: 0, //选择的最小个数只在checkbox，radio 中有用)
      placeHolder: '请输入', //占位符
      multiple: null, //是否多选（只在select-多选  中有用)
      require: true, //是否必填
      validateRule: null, //内容验证规则（只在 input 中有用)
      errorMsg: '输入项目名称', //验证出错时的 提示消息
      options: [], //下拉项/展示内容，（只在checkbox，radio，select 中有用)
    },
  },
  {
    resourcecolumnName: '任务类型', //label
    resourcecolumnNameEn: 'uploadType', //model-key
    resourcecolumnCode: 'uploadType',
    resourcecolumnWidth: '100', //列的宽度
    resourcecolumnOrder: '2', //列的序号
    resourcecolumnHidden: '0', //显示/隐藏
    resourcecolumnXtype: 'text', //筛选列 类型
    fixed: false, //是否为固定列（false left right 三选一)
    eidtConfig: null, //是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  // {
  //   resourcecolumnName: '上传次数', //label
  //   resourcecolumnNameEn: 'retryCount', //model-key
  //   resourcecolumnCode: 'retryCount',
  //   resourcecolumnWidth: '90', //列的宽度
  //   resourcecolumnOrder: '3', //列的序号
  //   resourcecolumnHidden: '0', //显示/隐藏
  //   resourcecolumnXtype: 'text', //筛选列 类型
  //   fixed: false, //是否为固定列（false left right 三选一)
  //   eidtConfig: null, //是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  // },
  {
    resourcecolumnName: '上传人', //label
    resourcecolumnNameEn: 'uploadUserName', //model-key
    resourcecolumnCode: 'uploadUserName',
    resourcecolumnWidth: '110', //列的宽度
    resourcecolumnOrder: '4', //列的序号
    resourcecolumnHidden: '0', //显示/隐藏
    resourcecolumnXtype: 'text', //筛选列 类型
    fixed: false, //是否为固定列（false left right 三选一)
    eidtConfig: null, //是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    resourcecolumnName: '创建时间', //label
    resourcecolumnNameEn: 'createTime', //model-key
    resourcecolumnCode: 'createTime',
    resourcecolumnWidth: '120', //列的宽度
    resourcecolumnOrder: '5', //列的序号
    resourcecolumnHidden: '0', //显示/隐藏
    resourcecolumnXtype: 'text', //筛选列 类型
    fixed: false, //是否为固定列（false left right 三选一)
    eidtConfig: null, //是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    resourcecolumnName: '任务状态', //label
    resourcecolumnNameEn: 'state', //model-key
    resourcecolumnCode: 'state',
    resourcecolumnWidth: '80', //列的宽度
    resourcecolumnOrder: '6', //列的序号
    resourcecolumnHidden: '0', //显示/隐藏
    resourcecolumnXtype: 'text', //筛选列 类型
    fixed: false, //是否为固定列（false left right 三选一)
    eidtConfig: null, //是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    resourcecolumnName: '审核进度', //label
    resourcecolumnNameEn: 'progress', //model-key
    resourcecolumnCode: 'progress',
    resourcecolumnWidth: '80', //列的宽度
    resourcecolumnOrder: '7', //列的序号
    resourcecolumnHidden: '0', //显示/隐藏
    resourcecolumnXtype: 'text', //筛选列 类型
    fixed: false, //是否为固定列（false left right 三选一)
    eidtConfig: null, //是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
];
