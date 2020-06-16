const modules = require('@ROOT/config/injection/index').modules;

module.exports = (firstPath, secondPath) => {
  const currentModule = modules.filter(m => m.repositorie === firstPath);

  const isOwner = currentModule[0].isOwner;
  const isLandingRoot = currentModule[0].landingRoot;

  const moduleName = firstPath ? `NS_${firstPath}/` : '';

  if (isOwner || isLandingRoot) {
    // console.log('引入 自有  模块路由');

    if (secondPath) {
      // console.log(`@ROOT/${moduleName}views/${firstPath}/${secondPath}/${secondPath}.vue`);
      return () => import(`@ROOT/${moduleName}views/${firstPath}/${secondPath}/${secondPath}.vue`);
    } else {
      // console.log(`@ROOT/${moduleName}views/${firstPath}/${firstPath}.vue`);
      return () => import(`@ROOT/${moduleName}views/${firstPath}/${firstPath}.vue`);
    }
  } else {
    // console.log('引入 外部  模块路由');
    if (secondPath) {
      // console.log(
      //   `../../../injection/repositories/${moduleName}views/${firstPath}/${secondPath}/${secondPath}.vue`
      // );
      return () =>
        import(
          `../../../../injection/repositories/${moduleName}views/${firstPath}/${secondPath}/${secondPath}.vue`
        );
    } else {
      // console.log(
      //   `../../../injection/repositories/${moduleName}views/${firstPath}/${firstPath}.vue`
      // );
      return () =>
        import(
          `../../../../injection/repositories/${moduleName}views/${firstPath}/${firstPath}.vue`
        );
    }
  }
};
