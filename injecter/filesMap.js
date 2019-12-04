/**
 * Create route files map by repositories
 */
const path = require('path');
const fs = require('fs');
const join = require('path').join;
const utils = require('./utils');

const getRouteFiles = () => {
  let routeFiles = [];

  utils.modulesConfig().forEach(module => {
    if (module.disabled) return;

    const repositoryName = utils.repositoryName(module);

    /*
     * The current module :
     * its own module / landing to root => in root path
     * not its own module => in neap => injection => repositories
     */
    const repositoryPath =
      module.isOwner || module.landingRoot
        ? join(utils.inJectPath().root, `${repositoryName}`)
        : join(path.resolve(__dirname, '../../injection/repositories'), `${repositoryName}`);

    // views dir path
    let viewsFilesPath = join(repositoryPath, 'views');

    /*
     * To judge whether views dir exists,
     * every buiness modules has its views dir
     * propose some component library modules, which have no pages and need not be injected.
     */
    if (fs.existsSync(viewsFilesPath)) {
      //Locate in the target directory for processing
      const viewsFiles = fs.readdirSync(viewsFilesPath); //获取仓库目录下views文件夹下，所有文件列表

      //Loop firest level page directory
      viewsFiles.forEach(firstDir => {
        let route1_Path = join(viewsFilesPath, firstDir); //一级模块路径
        let stat1 = fs.statSync(route1_Path); //一级模块信息
        if (stat1.isDirectory() === true) {
          routeFiles.push({
            sign: `===== ${firstDir} module routing allowance list =====`,
          });

          //Loop second level page directory
          fs.readdirSync(route1_Path).forEach(secondDir => {
            let route2_Path = join(route1_Path, secondDir); //二级模块路径
            let stat2 = fs.statSync(route2_Path); //二级模块信息
            if (stat2.isDirectory() === true) {
              /*
               * 判断该二级模块下是否存在同名.vue文件
               * 例如： （firstModule => secondModule => secondModule.vue)
               */
              if (fs.existsSync(join(route2_Path, `${secondDir}.vue`))) {
                routeFiles.push(`/${firstDir}/${secondDir}`); //拼接注入数组队列
              }
            }
          });
        }
      });
    }
  });

  return routeFiles;
};

exports.createRouteFiles = () => {
  const tips = type => `/* eslint-disable */
/*
 * Create route files map by repositories
 * Used to judge whether the current routing contains the corresponding template page, If not, explicit prompts are required.
 * created: ${utils.sysdate()}.
 * version: ${utils.version()}.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) Broccoli spring( gcx )
 * ------------------------------------------
 */
`;

  /**
   * inject write
   * @returns {*}
   */
  function writeRouteFiles() {
    return getRouteFiles().map(route => {
      if (typeof route === 'string') {
        return `  '${route}',`;
      } else {
        return `  
  //${route.sign}
  `;
      }
    });
  }

  const content = `${tips('core')}
export default [
${writeRouteFiles().join('\n')}
];
`;

  //write and create file
  fs.writeFileSync(utils.inJectPath().routefiles, content);
};
