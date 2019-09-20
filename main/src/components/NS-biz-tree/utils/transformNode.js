import vue from 'vue';

/**
 * transformKeyFun
 * @param list       原始数据
 * @param keyRefer   字段配置
 * @param config     配置节点 lazy -（配置懒加载）, expandedIndex -（默认展示层级, expandAllNodes - 是否全部展开 ,isMultiple - 是否多选，selectedNodes - 当前选中的节点列表
 * @returns {Array}
 */
const transformKeyFun = (
  list = [],
  keyRefer,
  config = {
    lazy: false,
    expandedIndex: 0,
    expandAllNodes: false,
    isMultiple: false,
    selectedNodes: [],
  }
) => {
  const addKeyRefer = {
    expanded: 'expanded',
    isHasChild: 'isHasChild',
    disabled: 'disabled',
  };

  let refer = Object.assign(addKeyRefer, keyRefer);

  list.forEach(item => {
    //设置树对应的字段
    Object.keys(refer).forEach(key => {
      let hitKey = refer[key];
      vue.set(item, [key], item[hitKey]);
      // item[key] = item[hitKey];
    });

    if (config.isMultiple) {
      //初始化设置选中
      vue.set(item, 'halfcheck', false);

      if (config.selectedNodes.some(node => node[keyRefer.id] === item[keyRefer.id])) {
        vue.set(item, 'checked', true);
      }
    }

    /**
     * 展开不展开的判断
     * 按需开关lazy 打开 ，字段 isHasChild 为 true children字段为空 则 改节点收起
     * expandAllNodes = true  -  则全部展开
     */
    if (
      (config.expandedIndex > 0 || config.expandAllNodes) &&
      !(config.lazy && item.isHasChild && transChildLength(item.children) === 0)
    ) {
      vue.set(item, 'expanded', true);
    } else {
      vue.set(item, 'expanded', false);
    }

    /**
     * 如果该节点下有儿子节点则，继续向下递归
     * 否则：
     * 需要考虑该节点是否为按需节点( lazy为true 且 isHasChild为true ) => 增加按需节点的标识（node对象上加 async 字段)
     */
    if (transChildLength(item.children) > 0) {
      let expandedIndex = -1;
      if (!config.expandAllNodes) {
        if (config.expandedIndex > -1) {
          expandedIndex = config.expandedIndex - 1;
        }
      }
      transformKeyFun(item.children, keyRefer, Object.assign({}, config, { expandedIndex }));
    }
    //树的懒加载
    else if (config.lazy && item.isHasChild) {
      vue.set(item, 'async', true);
    }
  });
  return list;
};

/**
 * transform node-children Length
 * childOrganizations :
 *    null=>[]
 *    []=>[]
 * @param target
 * @returns {number}
 */
function transChildLength(target) {
  return Object.keys(target || []).length;
}

export default transformKeyFun;
