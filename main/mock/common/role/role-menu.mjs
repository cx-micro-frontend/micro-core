const sam_nav_menu1 = (req, res) => {
  // console.log(req.body);
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: [
      //系统设置
      {
        menuIconcls: 'menu-shezhi',
        menuMenuname: '设置', //显示名称
        routeName: 'system',
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
            syPyqc: '分类测试2',
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
      //概览页
      {
        menuIconcls: 'menu-gailan',
        menuMenuname: '概览', //显示名称
        menuMenusubname: 'overview', //路径符号
        funcId: 'dashboard', //func-ID
        syLayer: 2,
        syOrderindex: 1,
        syStatus: '1', //隐藏与否
        childMenus: [],
      },
      //缓存示例页面
      {
        menuIconcls: 'menu-jiedaiguanli',
        menuMenuname: '缓存', //显示名称
        menuMenusubname: 'cacheDemo', //路径符号
        funcId: 'cacheDemo', //func-ID
        syLayer: 2,
        syOrderindex: 1,
        syStatus: '1', //隐藏与否
        childMenus: [],
      },

    ],
  });
};

const sam_nav_menu2 = (req, res) => {
  // console.log(req.body);
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: [
      //系统设置
      {
        menuMenuname: '设置', //显示名称
        funcId: null, //func-ID
        menuIconcls: 'menu-shezhi',//图标
        menuMenusubname: 'system',//前端路由name (唯一)
        rootMenuSubName: 'system',//root 前端路由name / 所属微前端 子系统模块，如：业户，系统设置，计费，收款 等
        routePath: '/system', //前端路由路径（拼接好的全路径）
        templatePath: '',//资源文件对应路径
        syStatus: '1', //隐藏与否
        syLayer: 2,//菜单层级
        is_leaf: false,//是否为叶子节点
        behavior: '',//交互/集成模式
        moduleId: 'system',
        url: '',//v8子系统模块 iframe 嵌入文件相对路径地址 / 外部链接跳转路径
        childMenus: [
          {
            menuMenuname: '组织与员工',
            funcId: '2DEJjvjOcDM5caR4bce',
            menuIconcls: '',
            menuMenusubname: 'systemOrgEmployee',
            rootMenuSubName: 'system',
            routePath: '/system/systemOrgEmployee',
            templatePath: '/NS_system/views/system/systemOrgEmployee/systemOrgEmployee.vue',
            syStatus: '1',
            syLayer: 3,
            is_leaf: true,
            behavior: '100',
            moduleId: 'system',
            url: '',
            childMenus: null,
          },
          {
            menuMenuname: '角色与权限',
            funcId: 'QEPbzP61apaxqC34rp5',
            menuIconcls: '',
            menuMenusubname: 'systemRolePermission',//前端路由name (唯一)
            rootMenuSubName: 'system',
            routePath: '/system/systemRolePermission', //前端路由路径（拼接好的全路径）
            templatePath: '/NS_system/views/system/systemRolePermission/systemRolePermission.vue',
            syStatus: '1',
            syLayer: 3,
            is_leaf: true,
            behavior: '100',
            moduleId: 'system',
            url: '',
            childMenus: null,
          },
          {
            menuMenuname: '数据字典',
            funcId: 'cpZKRalyjMljdbsgAC4',
            menuIconcls: '',
            menuMenusubname: 'systemDataDictionary',//前端路由name (唯一)
            rootMenuSubName: 'system',
            routePath: '/system/systemDataDictionary', //前端路由路径（拼接好的全路径）
            templatePath: '/NS_system/views/system/systemDataDictionary/systemDataDictionary.vue',
            syStatus: '1',
            syLayer: 3,
            is_leaf: true,
            behavior: '100',
            moduleId: 'system',
            url: '',
            childMenus: null,
          },
          {
            menuMenuname: '数据同步',
            funcId: 'V7bSlogvocamZ5cK23j',
            menuIconcls: '',
            menuMenusubname: 'designSync',//前端路由name (唯一)
            rootMenuSubName: 'system',
            routePath: '/system/designSync', //前端路由路径（拼接好的全路径）
            templatePath: '/NS_system/views/system/designSync/designSync.vue',
            syStatus: '1',
            syLayer: 3,
            is_leaf: true,
            behavior: '100',
            moduleId: 'system',
            url: '',
            childMenus: null,
          },
          {
            menuMenuname: '系统主题',
            funcId: 'funcId-system-theme',
            menuIconcls: '',
            menuMenusubname: 'systemTheme',//前端路由name (唯一)
            rootMenuSubName: 'system',
            routePath: '/system/systemTheme', //前端路由路径（拼接好的全路径）
            templatePath: '/NS_system/views/system/systemOperatorColour/systemOperatorColour.vue',
            syStatus: '1',
            syLayer: 3,
            is_leaf: true,
            behavior: '100',
            moduleId: 'system',
            url: '',
            childMenus: null,
          },
        ],
      },
      //概览页
      {
        menuMenuname: '概览', //显示名称
        funcId: 'dashboard', //func-ID
        menuIconcls: 'menu-gailan',//图标
        menuMenusubname: 'overview',//前端路由name (唯一)
        rootMenuSubName: 'system',
        routePath: '/overview', //前端路由路径（拼接好的全路径）
        templatePath: '',//资源文件对应路径
        syStatus: '1', //隐藏与否
        syLayer: 2,//菜单层级
        is_leaf: true,//是否为叶子节点
        behavior: '',//交互/集成模式
        url: '',//v8子系统模块 iframe 嵌入文件相对路径地址 / 外部链接跳转路径
        childMenus: [],
      },
      //缓存示例页面
      {
        menuMenuname: '缓存', //显示名称
        funcId: 'cacheDemo', //func-ID
        menuIconcls: 'menu-jiedaiguanli',//图标
        menuMenusubname: 'cacheDemo',//前端路由name (唯一)
        rootMenuSubName: 'system',
        routePath: '/cacheDemo', //前端路由路径（拼接好的全路径）
        templatePath: '',//资源文件对应路径
        syStatus: '1', //隐藏与否
        syLayer: 2,//菜单层级
        is_leaf: true,//是否为叶子节点
        behavior: '',//交互/集成模式
        url: '',//v8子系统模块 iframe 嵌入文件相对路径地址 / 外部链接跳转路径
        childMenus: [],
      },
      //导航
      {
        menuMenuname: '导航', //显示名称
        funcId: 'guide', //func-ID
        menuIconcls: 'menu-jiedaiguanli',//图标
        menuMenusubname: 'guide',//前端路由name (唯一)
        rootMenuSubName: 'guide',
        routePath: '/guide', //前端路由路径（拼接好的全路径）
        templatePath: '',//资源文件对应路径
        syStatus: '1', //隐藏与否
        syLayer: 2,//菜单层级
        is_leaf: true,//是否为叶子节点
        behavior: '',//交互/集成模式
        url: '',//v8子系统模块 iframe 嵌入文件相对路径地址 / 外部链接跳转路径
        childMenus: [],
      },
    ],
  });
};

const mam_nav_menu = (req, res) => {
  // console.log(req.body);
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: [
      //系统设置
      {
        iconUrl: null,
        moduleId: 'system',
        moduleName: '系统设置',
        childMenus: [
          //系统设置
          {
            menuMenuname: '设置', //显示名称
            funcId: null, //func-ID
            menuIconcls: 'menu-shezhi',//图标
            menuMenusubname: 'system',//前端路由name (唯一)
            rootMenuSubName: 'system',//root 前端路由name / 所属微前端 子系统模块，如：业户，系统设置，计费，收款 等
            routePath: '/system', //前端路由路径（拼接好的全路径）
            templatePath: '',//资源文件对应路径
            syStatus: '1', //隐藏与否
            syLayer: 2,//菜单层级
            is_leaf: false,//是否为叶子节点
            behavior: '',//交互/集成模式
            moduleId: 'system',
            url: '',//v8子系统模块 iframe 嵌入文件相对路径地址 / 外部链接跳转路径
            childMenus: [
              {
                menuMenuname: '组织与员工',
                funcId: '2DEJjvjOcDM5caR4bce',
                menuIconcls: '',
                menuMenusubname: 'systemOrgEmployee',
                rootMenuSubName: 'system',
                routePath: '/system/systemOrgEmployee',
                templatePath: '/NS_system/views/system/systemOrgEmployee/systemOrgEmployee.vue',
                syStatus: '1',
                syLayer: 3,
                is_leaf: true,
                behavior: '100',
                moduleId: 'system',
                url: '',
                childMenus: null,
              },
              {
                menuMenuname: '角色与权限',
                funcId: 'QEPbzP61apaxqC34rp5',
                menuIconcls: '',
                menuMenusubname: 'systemRolePermission',//前端路由name (唯一)
                rootMenuSubName: 'system',
                routePath: '/system/systemRolePermission', //前端路由路径（拼接好的全路径）
                templatePath: '/NS_system/views/system/systemRolePermission/systemRolePermission.vue',
                syStatus: '1',
                syLayer: 3,
                is_leaf: true,
                behavior: '100',
                moduleId: 'system',
                url: '',
                childMenus: null,
              },
              {
                menuMenuname: '数据字典',
                funcId: 'cpZKRalyjMljdbsgAC4',
                menuIconcls: '',
                menuMenusubname: 'systemDataDictionary',//前端路由name (唯一)
                rootMenuSubName: 'system',
                routePath: '/system/systemDataDictionary', //前端路由路径（拼接好的全路径）
                templatePath: '/NS_system/views/system/systemDataDictionary/systemDataDictionary.vue',
                syStatus: '1',
                syLayer: 3,
                is_leaf: true,
                behavior: '100',
                moduleId: 'system',
                url: '',
                childMenus: null,
              },
              {
                menuMenuname: '数据同步',
                funcId: 'V7bSlogvocamZ5cK23j',
                menuIconcls: '',
                menuMenusubname: 'designSync',//前端路由name (唯一)
                rootMenuSubName: 'system',
                routePath: '/system/designSync', //前端路由路径（拼接好的全路径）
                templatePath: '/NS_system/views/system/designSync/designSync.vue',
                syStatus: '1',
                syLayer: 3,
                is_leaf: true,
                behavior: '100',
                moduleId: 'system',
                url: '',
                childMenus: null,
              },
              {
                menuMenuname: '系统主题',
                funcId: 'funcId-system-theme',
                menuIconcls: '',
                menuMenusubname: 'systemTheme',//前端路由name (唯一)
                rootMenuSubName: 'system',
                routePath: '/system/systemTheme', //前端路由路径（拼接好的全路径）
                templatePath: '/NS_system/views/system/systemOperatorColour/systemOperatorColour.vue',
                syStatus: '1',
                syLayer: 3,
                is_leaf: true,
                behavior: '100',
                moduleId: 'system',
                url: '',
                childMenus: null,
              },
            ],
          },
        ],
      },
      {
        iconUrl: null,
        moduleId: 'other',
        moduleName: '其他',
        childMenus: [
          //概览页
          {
            menuMenuname: '概览', //显示名称
            funcId: 'dashboard', //func-ID
            menuIconcls: 'menu-gailan',//图标
            menuMenusubname: 'overview', //路径符号
            rootMenuSubName: 'other',//root 前端路由name / 所属微前端 子系统模块，如：业户，系统设置，计费，收款 等
            routePath: '/overview', //前端路由路径（拼接好的全路径）
            templatePath: '',//资源文件对应路径
            syStatus: '1', //隐藏与否
            syLayer: 2,//菜单层级
            is_leaf: true,//是否为叶子节点
            behavior: '100',//交互/集成模式
            moduleId: 'other',
            childMenus: [],
          },
          //缓存示例页面
          {
            menuMenuname: '缓存', //显示名称
            funcId: 'cacheDemo', //func-ID
            menuIconcls: 'menu-jiedaiguanli',
            menuMenusubname: 'cacheDemo', //路径符号
            rootMenuSubName: 'other',//root 前端路由name / 所属微前端 子系统模块，如：业户，系统设置，计费，收款 等
            routePath: '/cacheDemo', //前端路由路径（拼接好的全路径）
            templatePath: '',//资源文件对应路径
            syStatus: '1', //隐藏与否
            syLayer: 2,//菜单层级
            is_leaf: true,//是否为叶子节点
            behavior: '100',//交互/集成模式
            moduleId: 'other',
            childMenus: [],
          },
        ],
      },
      {
        iconUrl: null,
        moduleId: 'other',
        moduleName: '其他',
        childMenus: [
          //概览页
          {
            menuMenuname: '概览', //显示名称
            funcId: 'dashboard', //func-ID
            menuIconcls: 'menu-gailan',//图标
            menuMenusubname: 'overview', //路径符号
            rootMenuSubName: 'other',//root 前端路由name / 所属微前端 子系统模块，如：业户，系统设置，计费，收款 等
            routePath: '/overview', //前端路由路径（拼接好的全路径）
            templatePath: '',//资源文件对应路径
            syStatus: '1', //隐藏与否
            syLayer: 2,//菜单层级
            is_leaf: true,//是否为叶子节点
            behavior: '100',//交互/集成模式
            moduleId: 'other',
            childMenus: [],
          },
          //缓存示例页面
          {
            menuMenuname: '缓存', //显示名称
            funcId: 'cacheDemo', //func-ID
            menuIconcls: 'menu-jiedaiguanli',
            menuMenusubname: 'cacheDemo', //路径符号
            rootMenuSubName: 'other',//root 前端路由name / 所属微前端 子系统模块，如：业户，系统设置，计费，收款 等
            routePath: '/cacheDemo', //前端路由路径（拼接好的全路径）
            templatePath: '',//资源文件对应路径
            syStatus: '1', //隐藏与否
            syLayer: 2,//菜单层级
            is_leaf: true,//是否为叶子节点
            behavior: '100',//交互/集成模式
            moduleId: 'other',
            childMenus: [],
          },
        ],
      },
      {
        iconUrl: null,
        moduleId: 'other',
        moduleName: '其他',
        childMenus: [
          //概览页
          {
            menuMenuname: '概览', //显示名称
            funcId: 'dashboard', //func-ID
            menuIconcls: 'menu-gailan',//图标
            menuMenusubname: 'overview', //路径符号
            rootMenuSubName: 'other',//root 前端路由name / 所属微前端 子系统模块，如：业户，系统设置，计费，收款 等
            routePath: '/overview', //前端路由路径（拼接好的全路径）
            templatePath: '',//资源文件对应路径
            syStatus: '1', //隐藏与否
            syLayer: 2,//菜单层级
            is_leaf: true,//是否为叶子节点
            behavior: '100',//交互/集成模式
            moduleId: 'other',
            childMenus: [],
          },
          //缓存示例页面
          {
            menuMenuname: '缓存', //显示名称
            funcId: 'cacheDemo', //func-ID
            menuIconcls: 'menu-jiedaiguanli',
            menuMenusubname: 'cacheDemo', //路径符号
            rootMenuSubName: 'other',//root 前端路由name / 所属微前端 子系统模块，如：业户，系统设置，计费，收款 等
            routePath: '/cacheDemo', //前端路由路径（拼接好的全路径）
            templatePath: '',//资源文件对应路径
            syStatus: '1', //隐藏与否
            syLayer: 2,//菜单层级
            is_leaf: true,//是否为叶子节点
            behavior: '100',//交互/集成模式
            moduleId: 'other',
            childMenus: [],
          },
        ],
      },
    ],
  });
};


module.exports = {
  'POST /system/permission/list-menu': sam_nav_menu2,
  'POST /system/permission/list-module': mam_nav_menu,
};


