const modules = require('@ROOT/config/injection/index').modules;

module.exports = (childPath, fatherPath) => {
  // console.log(childPath, fatherPath);
  const currentModule = modules.filter(m => m.repositorie === fatherPath);

  const isOwner = currentModule[0].isOwner;

  const moduleName = fatherPath ? `NS_${fatherPath}/` : '';

  if (isOwner) {
    // console.log('引入 自有  模块路由');
    // console.log(`@ROOT/${moduleName}views/${fatherPath}/${childPath}/${childPath}.vue`)
    return () => import( `@ROOT/${moduleName}views/${fatherPath}/${childPath}/${childPath}.vue`);
  }
  else {
    // console.log('引入 外部  模块路由')
    // console.log(`../../../injection/repositories/${moduleName}views/${fatherPath}/${childPath}/${childPath}.vue`)
    return () => import( `../../../../injection/repositories/${moduleName}views/${fatherPath}/${childPath}/${childPath}.vue`);
  }

};


