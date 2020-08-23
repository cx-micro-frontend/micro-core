//导入任务列表 （本地表头数据配置）
export default [
  {
    resourcecolumnName: '文件名称', //label
    resourcecolumnNameEn: 'name', //model-key
    resourcecolumnCode: 'name',
    resourcecolumnWidth: '174', //列的宽度
    resourcecolumnOrder: '1', //列的序号
    resourcecolumnHidden: '0', //显示/隐藏
    resourcecolumnXtype: 'text', //筛选列 类型
    fixed: false, //是否为固定列（false left right 三选一)
    eidtConfig: null, //是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    resourcecolumnName: '任务类型', //label
    resourcecolumnNameEn: 'uploadType', //model-key
    resourcecolumnCode: 'uploadType',
    resourcecolumnWidth: '100', //列的宽度
    resourcecolumnOrder: '3', //列的序号
    resourcecolumnHidden: '0', //显示/隐藏
    resourcecolumnXtype: 'select', //筛选列 类型
    fixed: false, //是否为固定列（false left right 三选一)
    eidtConfig: null, //是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  {
    resourcecolumnName: '上传次数', //label
    resourcecolumnNameEn: 'retryCount', //model-key
    resourcecolumnCode: 'retryCount',
    resourcecolumnWidth: '97', //列的宽度
    resourcecolumnOrder: '3', //列的序号
    resourcecolumnHidden: '0', //显示/隐藏
    resourcecolumnXtype: 'text', //筛选列 类型
    fixed: false, //是否为固定列（false left right 三选一)
    eidtConfig: null, //是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  },
  // {
  //   resourcecolumnName: '上传人', //label
  //   resourcecolumnNameEn: 'uploadUserName', //model-key
  //   resourcecolumnCode: 'uploadUserName',
  //   resourcecolumnWidth: '110', //列的宽度
  //   resourcecolumnOrder: '3', //列的序号
  //   resourcecolumnHidden: '0', //显示/隐藏
  //   resourcecolumnXtype: 'text', //筛选列 类型
  //   fixed: false, //是否为固定列（false left right 三选一)
  //   eidtConfig: null, //是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  // },
  // {
  //   resourcecolumnName: '创建时间', //label
  //   resourcecolumnNameEn: 'createTime', //model-key
  //   resourcecolumnCode: 'createTime',
  //   resourcecolumnWidth: '144', //列的宽度
  //   resourcecolumnOrder: '3', //列的序号
  //   resourcecolumnHidden: '0', //显示/隐藏
  //   resourcecolumnXtype: 'text', //筛选列 类型
  //   fixed: false, //是否为固定列（false left right 三选一)
  //   eidtConfig: null, //是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  // },
  // {
  //   resourcecolumnName: '任务状态', //label
  //   resourcecolumnNameEn: 'state', //model-key
  //   resourcecolumnCode: 'state',
  //   resourcecolumnWidth: '74', //列的宽度
  //   resourcecolumnOrder: '2', //列的序号
  //   resourcecolumnHidden: '0', //显示/隐藏
  //   resourcecolumnXtype: 'text', //筛选列 类型
  //   fixed: false, //是否为固定列（false left right 三选一)
  //   eidtConfig: null, //是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  // },
  // {
  //   resourcecolumnName: '审核进度', //label
  //   resourcecolumnNameEn: 'progress', //model-key
  //   resourcecolumnCode: 'progress',
  //   resourcecolumnWidth: '70', //列的宽度
  //   resourcecolumnOrder: '3', //列的序号
  //   resourcecolumnHidden: '0', //显示/隐藏
  //   resourcecolumnXtype: 'text', //筛选列 类型
  //   fixed: false, //是否为固定列（false left right 三选一)
  //   eidtConfig: null, //是否为编辑单元格列 （如若是，则补充对应信息，否则为null)
  // },
];
