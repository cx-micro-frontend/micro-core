const navmenu = (req, res) => {
  // console.log(req.body);
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: [
      // {
      //   menuIconcls: 'daohang',
      //   menuMenuname: '向导',
      //   menuMenusubname: 'guide',
      //   syStatus: '1',
      //   syOrderindex: 1,
      //   funcId: 'guide',
      //   childMenus: null,
      // },
      // {
      //   menuIconcls: 'gailan',
      //   menuMenuname: '主页',
      //   menuMenusubname: 'overview',
      //   syStatus: '1',
      //   syOrderindex: 2,
      //   funcId: 'overview',
      //   childMenus: [],
      // },
      // {
      //   menuIconcls: 'gailan',
      //   menuMenuname: '活动中心',
      //   menuMenusubname: 'community',
      //   syStatus: '1',
      //   syOrderindex: 3,
      //   funcId: 'community',
      //   childMenus: [
      //     {
      //       menuIconcls: '',//图标
      //       menuMenuname: '小区设置',
      //       menuMenusubname: 'precinctList',
      //       syStatus: '1',
      //       syOrderindex: 1,
      //       funcId: 'o11111111111',
      //       childMenus: null,
      //     },
      //     {
      //
      //       menuIconcls: '',//图标
      //       menuMenuname: '活动管理',
      //       menuMenusubname: 'activityList',
      //       syOrderindex: 2,
      //       syStatus: '1',
      //       funcId: '0222222222222',
      //       childMenus: null,
      //
      //     },
      //     {
      //       menuIconcls: '',//图标
      //       menuMenuname: '公告中心',
      //       menuMenusubname: 'noticeList',
      //       syOrderindex: 3,
      //       syStatus: '1',
      //       funcId: '033333333333',
      //       childMenus: null,
      //     },
      //   ],
      // },

      // {
      //   menuIconcls: "xiaoqu",//图标
      //   menuMenuname: "小区设置",
      //   menuMenusubname: "precinctList",
      //   syStatus: "1",
      //   syOrderindex: 3,
      //   funcId: "precinctList",
      //   childMenus: [],
      // },
      // {
      //
      //   menuIconcls: "huodong",//图标
      //   menuMenuname: "活动管理",
      //   menuMenusubname: "activityList",
      //   syOrderindex: 4,
      //   syStatus: "1",
      //   funcId: "activityList",
      //   childMenus: [],
      //
      // },
      // {
      //   menuIconcls: "gonggao",//图标
      //   menuMenuname: "公告中心",
      //   menuMenusubname: "noticeList",
      //   syOrderindex: 5,
      //   syStatus: "1",
      //   funcId: "noticeList",
      //   childMenus: [],
      // },
      // {
      //   menuIconcls: "fangchan",
      //   menuMenuname: "房产",
      //   menuMenusubname: "housemanage",
      //   syStatus: "1",
      //   syOrderindex: 6,
      //   funcId: 'housemanage',
      // },

      //系统设置
      {
        menuIconcls: 'shezhi',
        menuMenuname: '设置', //显示名称
        menuMenusubname: 'system', //路径符号
        syStatus: '1', //隐藏与否
        syOrderindex: 7,
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
      //测试示例
      {
        menuIconcls: 'shezhi',
        menuMenuname: '测试示例', //显示名称
        menuMenusubname: 'testDemo', //路径符号
        syStatus: '1', //隐藏与否
        syOrderindex: 8,
        funcId: null, //func-ID
        syLayer: 2,
        childMenus: [
          {
            menuIconcls: '',
            menuMenuname: '表格模板结合1',
            menuMenusubname: 'gridDemo1',
            syStatus: '1',
            syOrderindex: 1,
            funcId: '2DEJjvjOcDM5caR4bce',
            childMenus: null,
          },
          {
            menuIconcls: '',
            menuMenuname: '表格模板结合2',
            menuMenusubname: 'gridDemo2',
            syStatus: '1',
            syOrderindex: 2,
            funcId: 'QEPbzP61apaxqC34rp5',
            childMenus: null,
          },
          {
            menuIconcls: '',
            menuMenuname: '表格1',
            menuMenusubname: 'grid1',
            syStatus: '1',
            syOrderindex: 3,
            funcId: '2DEJjvjOcDM5caR4bce',
            childMenus: null,
          },
          {
            menuIconcls: '',
            menuMenuname: '表格2',
            menuMenusubname: 'grid2',
            syStatus: '1',
            syOrderindex: 4,
            funcId: '2DEJjvjOcDM5caR4bce',
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
