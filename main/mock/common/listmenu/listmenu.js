const navmenu = (req, res) => {
  // console.log(req.body);
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: [
      // {
      //   menuIconcls: 'daohang', //图标
      //   menuMenuname: '向导',//显示名称
      //   menuMenusubname: 'guide',//路径符号
      //   syStatus: '1',//隐藏与否
      //   syOrderindex: 1,//序号
      //   funcId: 'guide',
      //   childMenus: null,//子级菜单
      // },
      {
        menuIconcls: 'gailan', //图标
        menuMenuname: '主页', //显示名称
        menuMenusubname: 'overview', //路径符号
        syStatus: '1', //隐藏与否
        syOrderindex: 2, //序号
        funcId: 'overview',
        childMenus: [], //子级菜单
      },
      // {
      //   menuIconcls: 'gailan', //图标
      //   menuMenuname: '活动中心',//显示名称
      //   menuMenusubname: 'community',//路径符号
      //   syStatus: '1',//隐藏与否
      //   syOrderindex: 3,//序号
      //   funcId: 'community',
      //   childMenus: [
      //     {
      //       menuIconcls: '',//图标
      //       menuMenuname: '小区设置',//显示名称
      //       menuMenusubname: 'precinctList',//路径符号
      //       syStatus: '1',//隐藏与否
      //       syOrderindex: 1,//序号
      //       funcId: 'o11111111111',//func-ID
      //       childMenus: null,//子级菜单
      //     },
      //     {
      //
      //       menuIconcls: '',//图标
      //       menuMenuname: '活动管理',//显示名称
      //       menuMenusubname: 'activityList',//路径符号
      //       syOrderindex: 2,//序号
      //       syStatus: '1',//隐藏与否
      //       funcId: '0222222222222',//func-ID
      //       childMenus: null,//子级菜单
      //
      //     },
      //     {
      //       menuIconcls: '',//图标
      //       menuMenuname: '公告中心',//显示名称
      //       menuMenusubname: 'noticeList',//路径符号
      //       syOrderindex: 3,//序号
      //       syStatus: '1',//隐藏与否
      //       funcId: '033333333333',//func-ID
      //       childMenus: null,//子级菜单
      //     },
      //   ],
      // },

      // {
      //   menuIconcls: "xiaoqu",//图标
      //   menuMenuname: "小区设置",//显示名称
      //   menuMenusubname: "precinctList",//路径符号
      //   syStatus: "1",//隐藏与否
      //   syOrderindex: 3,//序号
      //   funcId: "precinctList",//func-ID
      //   childMenus: [],//子级菜单
      // },
      // {
      //
      //   menuIconcls: "huodong",//图标
      //   menuMenuname: "活动管理",//显示名称
      //   menuMenusubname: "activityList",//路径符号
      //   syOrderindex: 4,//序号
      //   syStatus: "1",//隐藏与否
      //   funcId: "activityList",//func-ID
      //   childMenus: [],//子级菜单
      //
      // },
      // {
      //   menuIconcls: "gonggao",//图标
      //   menuMenuname: "公告中心",//显示名称
      //   menuMenusubname: "noticeList",//路径符号
      //   syOrderindex: 5,//序号
      //   syStatus: "1",//隐藏与否
      //   funcId: "noticeList",//func-ID
      //   childMenus: [],//子级菜单
      // },
      // {
      //   menuIconcls: "fangchan", //图标
      //   menuMenuname: "房产",//显示名称
      //   menuMenusubname: "housemanage",//路径符号
      //   syStatus: "1",//隐藏与否
      //   syOrderindex: 6,//序号
      //   funcId: 'housemanage',//func-ID
      // },

      {
        menuIconcls: 'shezhi', //图标
        menuMenuname: '设置', //显示名称
        menuMenusubname: 'system', //路径符号
        syStatus: '1', //隐藏与否
        syOrderindex: 7, //序号
        funcId: null, //func-ID
        //子级菜单
        childMenus: [
          {
            menuIconcls: '', //图标
            menuMenuname: '组织与员工', //显示名称
            menuMenusubname: 'systemOrgEmployee', //路径符号
            syStatus: '1', //隐藏与否
            syOrderindex: 1, //序号
            funcId: '2DEJjvjOcDM5caR4bce', //func-ID
            childMenus: null, //子级菜单
          },
          {
            menuIconcls: '', //图标
            menuMenuname: '角色与权限', //显示名称
            menuMenusubname: 'systemRolePermission', //路径符号
            syOrderindex: 2, //序号
            syStatus: '1', //隐藏与否
            funcId: 'QEPbzP61apaxqC34rp5', //func-ID
            childMenus: null, //子级菜单
          },
          {
            menuIconcls: '', //图标
            menuMenuname: '数据字典', //显示名称
            menuMenusubname: 'systemDataDictionary', //路径符号
            syOrderindex: 3, //序号
            syStatus: '1', //隐藏与否
            funcId: 'cpZKRalyjMljdbsgAC4', //func-ID
            childMenus: null, //子级菜单
          },
          {
            menuIconcls: '', //图标
            menuMenuname: '数据同步', //显示名称
            menuMenusubname: 'designSync', //路径符号
            syOrderindex: 4, //序号
            syStatus: '1', //隐藏与否
            funcId: 'V7bSlogvocamZ5cK23j', //func-ID
            childMenus: null, //子级菜单
          },
        ],
      },
    ],
  });
};

module.exports = {
  'POST /system/permission/list-menu': navmenu,
};
