const modules = require('@ROOT/config/injection/index').modules;
import getters from '../../store/getters';

module.exports = (templatePath, belongModule) => {
  console.log(12312312312);
  console.log(getters.userinfo.token);

  const isLogin = getters.userinfo.token;

  if (!templatePath) return '';
  const currentModule = modules.filter(m => m.repositorie === belongModule);

  const isOwner = currentModule[0].isOwner;

  // console.log('templatePath-templatePath-templatePath')
  // console.log(templatePath)
  if (true) {
    if (isOwner) {
      console.log('引入 自有  模块路由');
      return () => import(`@ROOT${templatePath}`);
    } else {
      console.log('引入 外部  模块路由');
      const u = `../../../../injection/repositories${templatePath}`;
      console.log(u);

      return () => import(`../../../../injection/repositories${templatePath}`);

      // return () => import(`../../../../injection/repositories/NS_system/views/system/systemOrgEmployee/systemOrgEmployee.vue`);
    }
  }
};
