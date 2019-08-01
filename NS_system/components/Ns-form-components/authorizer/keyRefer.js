/*
 * role employee - keyRefer ( 角色与权限 => 角色组下拉框组件 属性字段配置 )
 * created: 2018/1/03.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
const keyRefer = {
  firstLevel: {
    'menu-name': 'menuMenuname', //一级分类 名称
    'menu-id': 'jeCoreMenuId', //一级分类ID
    checkSW: 'checkSW', //一级分类 全选开关
    children: 'childMenus', //一级分类子数组
  },
  secondLevel: {
    'menu-name': 'menuMenuname', //二级分类 名称
    'menu-id': 'jeCoreFuncinfoId', //二级分类ID
    infoVo: 'funcinfoVo', //二级分类 所对应的功能
    btnItems: 'resourcebuttons', //二级分类 按钮信息
    checkSW: 'checkSW', //二级分类 全选开关
  },
  thirdLevel: {
    value: 'jeCoreResourcebuttonId', //按钮id
    label: 'resourcebuttonName', //按钮名称
    disabled: 'disabled', //禁用开关
  },
  modelKey: {
    firstID: 'jeCoreMenuId', //一级分类ID
    secondID: 'jeCoreFuncinfoId', //二级分类ID
    infoVo: 'functionVos', //二级分类 对应的功能
    btnItems: 'buttonIds', //二级分类 按钮信息
  },
};

const t = [
  {
    //jeCoreMenuId
    一级分类id: [
      { 二级分类id: ['按钮的vlue值', '按钮的vlue值', '按钮的vlue值'] }, //jeCoreFuncinfoId
      { 二级分类id: ['按钮的vlue值', '按钮的vlue值', '按钮的vlue值'] },
      { 二级分类id: ['按钮的vlue值', '按钮的vlue值', '按钮的vlue值'] },
    ],
  },
  {
    一级分类id: [
      { 二级分类id: ['按钮的vlue值', '按钮的vlue值', '按钮的vlue值'] },
      { 二级分类id: ['按钮的vlue值', '按钮的vlue值', '按钮的vlue值'] },
      { 二级分类id: ['按钮的vlue值', '按钮的vlue值', '按钮的vlue值'] },
    ],
  },
];

const k = [
  {
    jeCoreMenuId: 'xx', //一级id
    functionVos: [
      {
        jeCoreFuncinfoId: 'xx-xx', //二级id
        buttonIds: ['1', '2', '3'], //按钮ID
      },
      {
        jeCoreFuncinfoId: '1', //二级id
        buttonIds: ['1', '2', '3'], //按钮ID
      },
    ],
  },
  {
    jeCoreMenuId: 'yy', //一级id
    functionVos: [
      {
        jeCoreFuncinfoId: 'yy-yy', //二级id
        buttonIds: ['1', '2', '3'], //按钮ID
      },
      {
        jeCoreFuncinfoId: '1', //二级id
        buttonIds: ['1', '2', '3'], //按钮ID
      },
    ],
  },
];

const x = [
  //对应的是系统管理1
  [
    ['按钮的vlue值', '按钮的vlue值', '按钮的vlue值'], //对应的是角色与权限1
    ['按钮的vlue值', '按钮的vlue值', '按钮的vlue值'], //对应的是角色与权限2
  ],
  //对应的是系统管理2
  [
    ['按钮的vlue值', '按钮的vlue值', '按钮的vlue值'], //对应的是角色与权限2
  ],
];
export default keyRefer;
