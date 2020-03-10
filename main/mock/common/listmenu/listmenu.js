const navmenu = (req, res) => {
  // console.log(req.body);
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: [
      //概览页
      {
        menuIconcls: 'gailan',
        menuMenuname: '概览', //显示名称
        menuMenusubname: 'overview', //路径符号
        funcId: 'dashboard', //func-ID
        syLayer: 2,
        syOrderindex: 1,
        syStatus: '1', //隐藏与否
        childMenus: [],
      },
      //系统设置
      {
        menuIconcls: 'shezhi',
        menuMenuname: '设置', //显示名称
        menuMenusubname: 'system', //路径符号
        syStatus: '1', //隐藏与否
        syOrderindex: 90,
        funcId: null, //func-ID
        syLayer: 2,
        childMenus: [
          {
            menuIconcls: '',
            menuMenuname: '组织与员工',
            menuMenusubname: 'systemOrgEmployee',
            syStatus: '1',
            syOrderindex: 1,
            funcId: '2DEJjvjOcDM5caR4bce',
            childMenus: null,
            syPyqc: '分类测试1',
          },
          {
            menuIconcls: '',
            menuMenuname: '角色与权限',
            menuMenusubname: 'systemRolePermission',
            syOrderindex: 2,
            syStatus: '1',
            funcId: 'QEPbzP61apaxqC34rp5',
            childMenus: null,
          },
          {
            menuIconcls: '',
            menuMenuname: '数据字典',
            menuMenusubname: 'systemDataDictionary',
            syOrderindex: 3,
            syStatus: '1',
            funcId: 'cpZKRalyjMljdbsgAC4',
            childMenus: null,
          },
          {
            menuIconcls: '',
            menuMenuname: '数据同步',
            menuMenusubname: 'designSync',
            syOrderindex: 4,
            syStatus: '1',
            funcId: 'V7bSlogvocamZ5cK23j',
            childMenus: null,
          },
          {
            menuIconcls: '',
            menuMenuname: '系统主题',
            menuMenusubname: 'systemTheme',
            syOrderindex: 5,
            syStatus: '1',
            funcId: 'funcId-system-theme',
            childMenus: null,
          },
        ],
      },
    ],
  });
};

module.exports = {
  'POST /system/permission/list-menu': navmenu,
};
