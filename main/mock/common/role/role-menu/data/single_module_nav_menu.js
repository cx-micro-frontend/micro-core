/**
 * 单模块多菜单 - 导航数据
 * 删选去除正则：key:([\w\W]+?),
 */
export default {
  defaultRouteName: 'portal',
  defaultRoutePath: '/portal',

  // defaultRouteName: 'systemOrgEmployee',
  // defaultRoutePath: '/system/systemOrgEmployee',

  childMenus: [
    //系统设置
    {
      menuIconcls: 'module-shezhizhongxin',
      moduleId: 'system',
      moduleName: '系统设置',
      defaultRouteName: 'systemOrgEmployee',
      defaultRoutePath: '/system/systemOrgEmployee',
      childMenus: [
        //系统设置
        {
          menuMenuname: '设置', //显示名称
          funcId: null, //func-ID
          menuIconcls: 'menu-shezhi', //图标
          menuMenusubname: 'system', //前端路由name (唯一)
          rootMenuSubName: 'system', //root 前端路由name / 所属微前端 子系统模块，如：业户，系统设置，计费，收款 等
          routePath: '/system', //前端路由路径（拼接好的全路径）
          templatePath: '', //资源文件对应路径
          syStatus: '1', //隐藏与否
          syLayer: 2, //菜单层级
          is_leaf: false, //是否为叶子节点
          behavior: '', //交互/集成模式
          moduleId: 'system',
          url: '', //v8子系统模块 iframe 嵌入文件相对路径地址 / 外部链接跳转路径
          childMenus: [
            {
              menuMenuname: '组织与员工',
              funcId: '2DEJjvjOcDM5caR4bce',
              menuIconcls: '',
              menuMenusubname: 'systemOrgEmployee',
              rootMenuSubName: 'system',
              routePath: '/system/systemOrgEmployee',
              templatePath: 'system/views/system/systemOrgEmployee/systemOrgEmployee.vue',
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
              menuMenusubname: 'systemRolePermission', //前端路由name (唯一)
              rootMenuSubName: 'system',
              routePath: '/system/systemRolePermission', //前端路由路径（拼接好的全路径）
              templatePath: 'system/views/system/systemRolePermission/systemRolePermission.vue',
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
              menuMenusubname: 'systemDataDictionary', //前端路由name (唯一)
              rootMenuSubName: 'system',
              routePath: '/system/systemDataDictionary', //前端路由路径（拼接好的全路径）
              templatePath: 'system/views/system/systemDataDictionary/systemDataDictionary.vue',
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
              menuMenusubname: 'designSync', //前端路由name (唯一)
              rootMenuSubName: 'system',
              routePath: '/system/designSync', //前端路由路径（拼接好的全路径）
              templatePath: 'system/views/system/designSync/designSync.vue',
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
              menuMenusubname: 'systemTheme', //前端路由name (唯一)
              rootMenuSubName: 'system',
              routePath: '/system/systemTheme', //前端路由路径（拼接好的全路径）
              templatePath: 'system/views/system/systemOperatorColour/systemOperatorColour.vue',
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
  ],
};
