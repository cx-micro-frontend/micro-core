/*
 * side-bar key refer
 * created: 2020/07/07
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2020 Broccoli spring( gcx )
 */
const keyRefer = {
  moduleId: 'moduleId', //顶部子系统模块 - ID
  moduleName: 'moduleName', //顶部子系统模块 - 显示名称

  funcId: 'funcId', //func-ID (唯一)
  label: 'menuMenuname', //显示名称
  icon: 'menuIconcls', //图标
  children: 'childMenus', //子集菜单
  visible: 'syStatus', //隐藏 syStatus
  isLeaf: 'is_leaf', //是否为叶子节点
  routeName: 'menuMenusubname', //前端路由name (唯一)
  rootRouteName: 'rootMenuSubName', //root 前端路由name / 所属微前端 子系统模块，如：业户，系统设置，计费，收款 等
  routePath: 'routePath', //前端路由路径（拼接好的全路径）
  templatePath: 'templatePath', //资源文件对应路径
  behavior: 'behavior ', //交互/集成模式
  targetUrl: 'url', //v8子系统模块 iframe 嵌入文件相对路径地址 / 外部链接跳转路径

  menuLevel: 'syLayer', //菜单层级

  menuIndex: 'menuIndex', //序号 syOrderindex
  virtualLabel: 'syPyqc', //虚拟节点的名称 - 暂时存在，后续去除
  isVirtual: 'isVirtual', //是否虚拟节点 -  暂时存在，后续去除
};
export default keyRefer;
