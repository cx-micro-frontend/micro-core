export const optCheck = option => {
  if (!option.router)
    throw '[neap-cache] uncaught error during cache: router missing, cache dependency on router, please check it.';

  if (!option.store)
    throw '[neap-cache] uncaught error during cache: vuex missing, cache dependency on vuex, please check it.';
};

/**
 * remove child node in body excluse some node
 * @param targetNodes - Specific nodes
 */
export const removeChildInBody = (targetNodes = []) => {
  if (targetNodes && targetNodes.length) {

    targetNodes.forEach(node => {
      document.body.removeChild(node);
    });
  }
  else {
    let delNodes = [];

    const bodyChild = document.body.childNodes;
    const excluseTag = ['svg', 'SCRIPT', undefined];

    const isRootComponent = (node, dom = 'app') => {
      return node.id === dom || node.className === dom;
    };

    /**
     * filter and will to deltet
     */
    bodyChild.forEach(node => {
      if (excluseTag.indexOf(node.tagName) < 0 && !isRootComponent(node)) {
        delNodes.push(node);
      }
    });

    delNodes.forEach(node => {
      document.body.removeChild(node);
    });

    console.warn('[neap-cache] remove child node in body');
    console.info(delNodes);
  }
};
