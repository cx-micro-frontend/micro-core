const listButton = (req, res) => {
  req.method = 'GET';
  let funcId = req.headers.funcid;
  let result = {
    '2DEJjvjOcDM5caR4bce': [
      {
        resourcebuttonName: '导出', //按钮名称
        resourcebuttonCode: 'actionExportBtn', //按钮编码
        resourcebuttonNameEn: '', //按钮英文名称
        resourcebuttonIconcls: 'btn-daochuExcel', //按钮图标
        resourcebuttonType: 'ACTION', //按钮区域类型
        resourcebuttonBigiconcls: 'dropDown', //按钮类型 （single / dropDown）
        resourcebuttonDisabled: '0', //是否禁用
        resourcebuttonHidden: '0', //是否隐藏
        syOrderindex: 0, //排序号
      },
      {
        resourcebuttonName: '编辑',
        resourcebuttonCode: 'gridEditBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'table_edit',
        resourcebuttonType: 'GRID',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 4,
      },
      {
        resourcebuttonName: '停用',
        resourcebuttonCode: 'gridStopBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: '',
        resourcebuttonType: 'GRID',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '',
        resourcebuttonHidden: '',
        syOrderindex: 5,
      },
      {
        resourcebuttonName: '删除',
        resourcebuttonCode: 'gridRemoveBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'table_delete',
        resourcebuttonType: 'GRID',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 6,
      },
      {
        resourcebuttonName: '启用',
        resourcebuttonCode: 'gridEnableBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: '',
        resourcebuttonType: 'GRID',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '',
        resourcebuttonHidden: '',
        syOrderindex: 7,
      },
      {
        resourcebuttonName: '确定',
        resourcebuttonCode: 'formConfirmBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'form_save',
        resourcebuttonType: 'FORM',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 8,
      },
      {
        resourcebuttonName: '取消',
        resourcebuttonNameEn: '',
        resourcebuttonCode: 'formCancelBtn',
        resourcebuttonIconcls: 'return',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonType: 'FORM',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 9,
      },
      {
        resourcebuttonName: '新增员工',
        resourcebuttonCode: 'actionAddUserBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'btn-xinzengyuangong',
        resourcebuttonType: 'ACTION',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 11,
      },
    ],
    QEPbzP61apaxqC34rp5: [
      {
        resourcebuttonName: '导出',
        resourcebuttonCode: 'actionExportBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'btn-daochuExcel',
        resourcebuttonType: 'ACTION',
        resourcebuttonBigiconcls: 'dropDown',
        resourcebuttonDisabled: '',
        resourcebuttonHidden: '',
        syOrderindex: 0,
      },
      {
        resourcebuttonName: '删除',
        resourcebuttonCode: 'gridRemoveBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'table_delete',
        resourcebuttonType: 'GRID',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 1,
      },
      {
        resourcebuttonName: '编辑',
        resourcebuttonCode: 'gridEditBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'table_edit',
        resourcebuttonType: 'GRID',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 2,
      },
      {
        resourcebuttonName: '新增授权人',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'table_add',
        resourcebuttonCode: 'gridAuthorizerBtn',
        resourcebuttonType: 'GRID',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 3,
      },
      {
        resourcebuttonName: '确定',
        resourcebuttonCode: 'formConfirmBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'form_save',
        resourcebuttonType: 'FORM',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 7,
      },
      {
        resourcebuttonName: '取消',
        resourcebuttonCode: 'formCancelBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'return',
        resourcebuttonType: 'FORM',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 10,
      },
      {
        resourcebuttonName: '新增角色',
        resourcebuttonCode: 'actionAddRoleBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'btn-xinzengjuese',
        resourcebuttonType: 'ACTION',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 14,
      },
    ],
    cpZKRalyjMljdbsgAC4: [
      {
        resourcebuttonName: '新增',
        resourcebuttonCode: 'actionAddBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'btn-xinzeng',
        resourcebuttonType: 'ACTION',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '',
        resourcebuttonHidden: '',
        syOrderindex: 0,
      },
      {
        resourcebuttonName: '导出',
        resourcebuttonCode: 'actionExportBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'btn-daochuExcel',
        resourcebuttonType: 'ACTION',
        resourcebuttonBigiconcls: 'dropDown',
        resourcebuttonDisabled: '',
        resourcebuttonHidden: '',
        syOrderindex: 1,
      },
      {
        resourcebuttonBigiconcls: 'single',
        resourcebuttonCode: 'gridEditBtn',

        resourcebuttonDisabled: '0',

        resourcebuttonHidden: '0',
        resourcebuttonIconcls: 'table_edit',

        resourcebuttonName: '编辑',
        resourcebuttonNameEn: '',

        resourcebuttonType: 'GRID',

        syOrderindex: 2,
      },
      {
        resourcebuttonBigiconcls: 'single',
        resourcebuttonCode: 'gridRemoveBtn',

        resourcebuttonDisabled: '0',

        resourcebuttonHidden: '0',
        resourcebuttonIconcls: 'table_delete',

        resourcebuttonName: '删除',
        resourcebuttonNameEn: '',

        resourcebuttonType: 'GRID',

        syOrderindex: 4,
      },
      {
        resourcebuttonBigiconcls: 'single',
        resourcebuttonCode: 'formConfirmBtn',

        resourcebuttonDisabled: '0',

        resourcebuttonHidden: '0',
        resourcebuttonIconcls: 'form_save',

        resourcebuttonName: '确定',
        resourcebuttonNameEn: '',

        resourcebuttonType: 'FORM',

        syOrderindex: 7,
      },
      {
        resourcebuttonName: '取消',
        resourcebuttonCode: 'formCancelBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'return',
        resourcebuttonType: 'FORM',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 10,
      },
    ],
    V7bSlogvocamZ5cK23j: [
      {
        resourcebuttonName: '同步全部',
        resourcebuttonCode: 'actionSyncAllBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'btn-tongbuquanbu',
        resourcebuttonType: 'ACTION',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 11,
      },
      {
        resourcebuttonName: '同步所选',
        resourcebuttonCode: 'actionSyncSelectedBtn',
        resourcebuttonNameEn: '',
        resourcebuttonIconcls: 'btn-tongbusuoxuan',
        resourcebuttonType: 'ACTION',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: '0',
        resourcebuttonHidden: '0',
        syOrderindex: 12,
      },
    ],
    '033333333333': [
      {
        resourcebuttonName: '新增',
        resourcebuttonNameEn: null,
        resourcebuttonCode: 'actionAddBtn',
        resourcebuttonIconcls: 'btn-xinzeng',
        resourcebuttonType: 'ACTION',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: null,
        resourcebuttonHidden: null,
        syOrderindex: 0,
      },
      {
        resourcebuttonName: '编辑',
        resourcebuttonNameEn: null,
        resourcebuttonCode: 'gridEditBtn',
        resourcebuttonIconcls: null,
        resourcebuttonType: 'GRID',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: null,
        resourcebuttonHidden: null,
        syOrderindex: 1,
      },
      {
        resourcebuttonName: '删除',
        resourcebuttonCode: 'gridRemoveBtn',
        resourcebuttonNameEn: null,
        resourcebuttonIconcls: null,
        resourcebuttonType: 'GRID',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonHidden: null,
        resourcebuttonDisabled: null,
        syOrderindex: 2,
      },
      {
        resourcebuttonName: '查看',
        resourcebuttonNameEn: null,
        resourcebuttonCode: 'gridDetailBtn',
        resourcebuttonIconcls: null,
        resourcebuttonType: 'GRID',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: null,
        resourcebuttonHidden: null,
        syOrderindex: 3,
      },
      {
        resourcebuttonName: '发布',
        resourcebuttonCode: 'formSaveBtn',
        resourcebuttonNameEn: null,
        resourcebuttonIconcls: null,
        resourcebuttonType: 'FORM',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: null,
        resourcebuttonHidden: null,
        syOrderindex: 4,
      },
      {
        resourcebuttonName: '暂存',
        resourcebuttonCode: 'formTempsaveBtn',
        resourcebuttonNameEn: null,
        resourcebuttonIconcls: null,
        resourcebuttonType: 'FORM',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: null,
        resourcebuttonHidden: null,
        syOrderindex: 5,
      },
      {
        resourcebuttonName: '返回',
        resourcebuttonCode: 'formReturnBtn',
        resourcebuttonNameEn: null,
        resourcebuttonIconcls: null,
        resourcebuttonType: 'FORM',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: null,
        resourcebuttonHidden: null,
        syOrderindex: 6,
      },
    ],
    '0222222222222': [
      {
        resourcebuttonName: '新增',
        resourcebuttonNameEn: null,
        resourcebuttonCode: 'actionAddBtn',
        resourcebuttonIconcls: 'btn-xinzeng',
        resourcebuttonType: 'ACTION',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: null,
        resourcebuttonHidden: null,
        syOrderindex: 0,
      },
      {
        resourcebuttonBigiconcls: 'single',
        resourcebuttonCode: 'gridEditBtn',

        resourcebuttonDisabled: null,

        resourcebuttonHidden: null,
        resourcebuttonIconcls: null,

        resourcebuttonName: '编辑',
        resourcebuttonNameEn: null,

        resourcebuttonType: 'GRID',

        syOrderindex: 0,
      },
      {
        resourcebuttonBigiconcls: 'single',
        resourcebuttonCode: 'gridRemoveBtn',

        resourcebuttonDisabled: null,

        resourcebuttonHidden: null,
        resourcebuttonIconcls: null,

        resourcebuttonName: '删除',
        resourcebuttonNameEn: null,

        resourcebuttonType: 'GRID',

        syOrderindex: 0,
      },
      {
        resourcebuttonBigiconcls: 'single',
        resourcebuttonCode: 'gridDetailBtn',

        resourcebuttonDisabled: null,

        resourcebuttonHidden: null,
        resourcebuttonIconcls: null,

        resourcebuttonName: '查看',
        resourcebuttonNameEn: null,

        resourcebuttonType: 'GRID',

        syOrderindex: 0,
      },
      {
        resourcebuttonBigiconcls: 'single',
        resourcebuttonCode: 'formSaveBtn',

        resourcebuttonDisabled: null,

        resourcebuttonHidden: null,
        resourcebuttonIconcls: null,

        resourcebuttonName: '发布',
        resourcebuttonNameEn: null,

        resourcebuttonType: 'FORM',

        syOrderindex: 0,
      },
      {
        resourcebuttonBigiconcls: 'single',
        resourcebuttonCode: 'formTempsaveBtn',

        resourcebuttonDisabled: null,

        resourcebuttonHidden: null,
        resourcebuttonIconcls: null,

        resourcebuttonName: '暂存',
        resourcebuttonNameEn: null,

        resourcebuttonType: 'FORM',

        syOrderindex: 0,
      },
      {
        resourcebuttonBigiconcls: 'single',
        resourcebuttonCode: 'formReturnBtn',

        resourcebuttonDisabled: null,

        resourcebuttonHidden: null,
        resourcebuttonIconcls: null,

        resourcebuttonName: '返回',
        resourcebuttonNameEn: null,

        resourcebuttonType: 'FORM',

        syOrderindex: 0,
      },
    ],
    o11111111111: [
      {
        resourcebuttonName: '新增',
        resourcebuttonNameEn: null,
        resourcebuttonCode: 'actionAddBtn',
        resourcebuttonIconcls: 'btn-xinzeng',
        resourcebuttonType: 'ACTION',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: null,
        resourcebuttonHidden: null,
        syOrderindex: 0,
      },
      {
        resourcebuttonName: '同步房产',
        resourcebuttonCode: 'gridSynchronizeBtn',
        resourcebuttonNameEn: null,
        resourcebuttonIconcls: null,
        resourcebuttonType: 'GRID',
        resourcebuttonBigiconcls: 'single',
        resourcebuttonDisabled: null,
        resourcebuttonHidden: null,
        syOrderindex: 0,
      },
      {
        resourcebuttonBigiconcls: 'single',
        resourcebuttonCode: 'formSaveBtn',

        resourcebuttonDisabled: null,

        resourcebuttonHidden: null,
        resourcebuttonIconcls: null,

        resourcebuttonName: '确定',
        resourcebuttonNameEn: null,

        resourcebuttonType: 'FORM',

        syOrderindex: 0,
      },
      {
        resourcebuttonBigiconcls: 'single',
        resourcebuttonCode: 'formReturnBtn',

        resourcebuttonDisabled: null,

        resourcebuttonHidden: null,
        resourcebuttonIconcls: null,

        resourcebuttonName: '取消',
        resourcebuttonNameEn: null,

        resourcebuttonType: 'FORM',

        syOrderindex: 0,
      },
    ],
  };

  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: result[funcId],
    pageNum: null,
    pageSize: null,
    total: null,
  });
};

module.exports = {
  'POST /system/permission/list-button': listButton,
};
