import keyRefer from '../../nav-menu-keyRefer';

export default list => {
  const labelKey = keyRefer['label'];
  const visibleKey = keyRefer['visible'];
  const indexKey = keyRefer['menuIndex'];
  const childrenKey = keyRefer['children'];
  const isVirtualKey = keyRefer['isVirtual'];
  const virtualLabelKey = keyRefer['virtualLabel'];

  /**
   * 节点递归循环处理
   * 1、新增 - 控制是否为虚拟节点
   * 2、若当前节点存在虚拟节点的名称的字段值，则在此节点的上面新增一个虚拟节点（用作假的二级节点，不可操作点击)
   * 显示隐藏字段 => 转换布尔值
   * @param list
   */
  const done = list => {
    let inserts = [];
    list.forEach((item, index) => {
      item[isVirtualKey] = false;

      const virtualLabe = item[virtualLabelKey];

      if (item[virtualLabelKey]) {
        inserts.push({ index: index, label: virtualLabe });
      }

      item[indexKey] = index + 1;

      if (index === list.length - 1 && inserts.length) {
        inserts.forEach((insert, i) => {
          list.splice(insert.index + i, 0, {
            [labelKey]: insert.label,
            [isVirtualKey]: true,
            [visibleKey]: false,
            [indexKey]: 'virtual-' + (insert.index + i),
          });
        });
      }

      let childNodes = item[childrenKey];

      if (childNodes && childNodes.length > 0) {
        done(childNodes);
      }
    });
  };

  done(list);

  return list;
};
