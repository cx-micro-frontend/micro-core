/**
 * Create route files map by repositories
 */
const path = require('path');
const fs = require('fs');
const join = require('path').join;
const utils = require('./utils');

const getRouteFiles = () => {

  let routeFiles = [];

  //clone 仓库路径
  const repositoriesPath = path.resolve(__dirname, '../injection/repositories');

  //获取仓库目录下模块列表
  const repositoriesFiles = fs.readdirSync(repositoriesPath);

  //循环模块列表
  repositoriesFiles.forEach((item, index) => {
    //到views目录下
    let viewsFilesPath = join(repositoriesPath, `${item}/views`);
    //判断是否存在,提出一些组件库模块，它们没有页面，无需注入
    if (fs.existsSync(viewsFilesPath)) {

      const viewsFiles = fs.readdirSync(viewsFilesPath);//获取仓库目录下views文件夹下，所有文件列表

      // routeFiles.push('=================')
      //定位到目标目录下进行处理

      //循环一级页面目录
      viewsFiles.forEach(firstDir => {
        let route1_Path = join(viewsFilesPath, firstDir);//一级模块路径
        let stat1 = fs.statSync(route1_Path);//一级模块信息
        if (stat1.isDirectory() === true) {

          routeFiles.push({
            sign: `===== ${firstDir} module routing allowance list =====`
          });

          //循环二级页面目录
          fs.readdirSync(route1_Path).forEach(secondDir => {
            let route2_Path = join(route1_Path, secondDir);//二级模块路径
            let stat2 = fs.statSync(route2_Path);//二级模块信息
            if (stat2.isDirectory() === true) {

              /*
               * 判断该二级模块下是否存在同名.vue文件
               * 例如： （firstModule => secondModule => secondModule.vue)
               */
              if (fs.existsSync(join(route2_Path, `${secondDir}.vue`))) {
                routeFiles.push(`/${firstDir}/${secondDir}`);//拼接注入数组队列
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
      }
      else {
        return `  
  //${route.sign}
  `;
      }
    })
  }


  const content = `${tips('core')}
export default [
${writeRouteFiles().join('\n')}
];
`;

  //write and create file
  fs.writeFileSync(utils.inJectPath().routefiles, content);
};
