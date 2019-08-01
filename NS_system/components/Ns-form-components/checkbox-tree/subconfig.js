/**
 * request url config for simple tree in select components
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018.7.18 Broccoli spring( gcx )
 * -----------------------------------------------------------
 * explain：
 *    initShowConfig：下拉框初始化显示数据请求地址
 *    initTreeData：初始下拉树数据请求地址
 *    childTreeConfig：按需加载，下拉树数据子节点请求地址
 *
 *    keyRefer:属性字段名配置
 *    ** 其中：
 *       1、level：初始状态下展开的级数，默认为 2
 *       2、label：节点名称
 *       3、value：节点 value/id 值 （唯一）
 *       4、firstVos：初始状态下第一级字段名
 *       5、children：子节点字段名
 *
 *    outputKeyInList: checkbox-tree 输出数据（数组）中各个字段对象
 *    如：outputKeyInList: ['value', "label"]
 *    则输出 [
 *            { value: "value 值",label: "label 值" }
 *             ...
 *             ...
 *          ]
 * -----------------------------------------------------------
 */

export default {
  //for organization tree
  'role-organization': {
    initShowConfig: { url: '/system/organization/get-orgDetail-form' },
    initTreeConfig: { url: '/system/organization/get-orgtree-form', query: {} },
    childTreeConfig: { url: '/system/organization/get-child-organization-form' },
    keyRefer: {
      level: 'level',
      label: 'organizationName',
      value: 'organizationId',
      firstVos: 'organizationVos',
      children: 'childOrganizations',
    },
    outputKeyInList: ['organizationId', 'organizationName'],
  },

  //for organization list tree
  'role-organizationList': {
    initShowConfig: { url: '/system/organization/get-moreOrgDetail-form' },
    initTreeConfig: { url: '/system/organization/get-orgtree-form', query: {} },
    childTreeConfig: { url: '/system/organization/get-child-organization-form' },
    keyRefer: {
      level: 'level',
      label: 'organizationName',
      value: 'organizationId',
      firstVos: 'organizationVos',
      children: 'childOrganizations',
    },
    outputKeyInList: ['organizationId', 'organizationName'],
  },

  //for charge subject tree
  'charge-subject': {
    initShowConfig: { url: '/charge/item/detail-item-form' },
    initTreeConfig: { url: '/charge/item/list-item-tree-form', query: {} },
    childTreeConfig: { url: '/charge/item/list-item-tree-form' },
    keyRefer: {
      level: 'level',
      label: 'chargeItemName',
      value: 'id',
      firstVos: 'itemList',
      children: 'childList',
      isLeaf: 'isLeaf',
    },
    outputKeyInList: ['id', 'chargeItemName', 'chargeItemType'],
  },
  //for house subject tree
  'house-project': {
    initTreeConfig: {
      url: '/owner/owner-rest/house/house-tree-search-detail/select-tree',
      query: { houseId: null },
    },
    childTreeConfig: { url: '/owner/owner-rest/house/house-child-tree/select-tree' },
    keyRefer: {
      level: 'level',
      label: 'houseName',
      value: 'houseId',
      firstVos: 'itemList',
      children: 'childOwnerHouseBaseInfoTreeNodeList',
      isLeaf: 'isLeaf',
    },
    outputKeyInList: ['houseId', 'houseName', 'houseType'],
  },

  //more config, you can add more config information base on my examples
};
