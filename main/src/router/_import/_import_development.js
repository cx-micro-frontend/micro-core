const modules = require('@ROOT/config/injection/index').modules;

module.exports = (templatePath, belongModule) => {
  if (!templatePath) return '';
  const currentModule = modules.filter(m => m.repositorie === belongModule);

  const isOwner = currentModule[0].isOwner;

  // console.log('templatePath-templatePath-templatePath')
  // console.log(templatePath)

  if (isOwner) {
    console.log('引入 自有  模块路由');
    return () => import(`@ROOT${templatePath}`);
  } else {
    console.log('引入 外部  模块路由');
    return () => import(`../../../../injection/repositories${templatePath}`);

    // return () => import(`../../../../injection/repositories/NS_system/views/system/systemOrgEmployee/systemOrgEmployee.vue`);
  }
};
