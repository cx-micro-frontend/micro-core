/*
 * side-bar key refer
 * created: 2017/12/20
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
const keyRefer = {
  moduleId: 'moduleId', //顶部子系统模块 - ID
  moduleName: 'moduleName', //顶部子系统模块 - 显示名称
  iframeUrl: 'url', //v8子系统模块 iframe 嵌入文件相对路径地址

  funcId: 'funcId', //func-ID
  label: 'menuMenuname', //显示名称
  icon: 'menuIconcls', //图标
  children: 'childMenus', //子集菜单
  menuIndex: 'menuIndex', //序号 syOrderindex
  menuLevel: 'syLayer', //菜单层级
  visible: 'syStatus', //隐藏 syStatus
  menuRouter: 'menuMenusubname', //路径符号
  virtualLabel: 'syPyqc', //虚拟节点的名称 - 暂时存在，后续去除
  isVirtual: 'isVirtual', //是否虚拟节点 -  暂时存在，后续去除
};
export default keyRefer;
