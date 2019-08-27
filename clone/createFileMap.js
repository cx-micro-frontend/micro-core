const path = require('path');
const fs = require('fs');
const join = require('path').join;
const shell = require('shelljs');
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

          //循环二级页面目录
          fs.readdirSync(route1_Path).forEach(secondDir => {
            let route2_Path = join(route1_Path, secondDir);//二级模块路径
            let stat2 = fs.statSync(route2_Path);//二级模块信息
            if (stat2.isDirectory() === true) {
              routeFiles.push(`/${firstDir}/${secondDir}`);//拼接注入数组队列
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
 * ${type} inject by env.param.config config
 * you can load you business ${type === 'core' ? 'model / mixins / others in your file entry' : 'style / components / plugins in your ui entry'}
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
    return getRouteFiles().map(route => `  '${route}',`);
  }


  const content = `${tips('core')}
export default [
${writeRouteFiles().join('\n')}
];
`;


  //write and create file
  fs.writeFileSync(utils.inJectPath().routefiles, content);
};


//创建 config 在 injection 目录下
utils.judgeAndMkdir(utils.inJectPath().config);

this.createRouteFiles();


// console.log(this.getRouteFiles());


// function getJsonFiles(jsonPath){
//   let jsonFiles = [];
//   function findJsonFile(path){
//     let files = fs.readdirSync(path);
//     files.forEach(function (item, index) {
//       let fPath = join(path,item);
//       let stat = fs.statSync(fPath);
//       if(stat.isDirectory() === true) {
//         findJsonFile(fPath);
//       }
//       if (stat.isFile() === true) {
//         jsonFiles.push(fPath);
//       }
//     });
//   }
//   findJsonFile(jsonPath);
//   console.log(jsonFiles);
// }

// getJsonFiles(x);
