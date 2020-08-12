import { modules } from '../../../dependencies';

module.exports = (templatePath, belongModule) => {
  if (!templatePath) return null;
  const currentModule = modules.filter(m => m.repositorie === belongModule);

  const isOwner = currentModule[0].isOwner;

  // console.log(`引入 ${isOwner ? '自有' : '外部'}  模块路由`);
  return isOwner
    ? () => import(`@ROOT/NS_${templatePath}`)
    : () => import(`../../../../injection/repositories/NS_${templatePath}`);
};
